// https://github.com/ghostops/ICloud-Shared-Album
import {getImages} from 'icloud-shared-album'
import fs from 'fs'

const imageDir = 'images'
const feedPath = '_data/stories.json'
const stories = []
const data = await getiCloudData()
console.log(data)

for (const item of data.photos) {
  const imagePath = `${imageDir}/${item.photoGuid}.jpg`
  if (!fs.existsSync(imagePath)) {
    const response = await fetch(Object.values(item.derivatives)[1].url)
    const buffer = Buffer.from(new Uint8Array(await response.arrayBuffer()))
    fs.writeFileSync(imagePath, buffer)
  }
  
  stories.push({
    "id": item.photoGuid,
    "summary": item.caption,
    "image": imagePath,
    "date_published": new Date(item.batchDateCreated).toISOString()
  })
}

fs.writeFileSync(feedPath, JSON.stringify(stories, null, 2))

async function getiCloudData() {
  console.log(':::: fetching icloud data from remote ')
  return await getImages(process.env.ICLOUD_TOKEN)
}

