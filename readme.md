# stories-feed-action

A GitHub Action that fetches a from an iCloud shared album, commits the images into the repository, and then generate [a data file](https://jekyllrb.com/docs/datafiles/) to the `_data` directory to be used for generating a [JSON feed](https://jsonfeed.org) with Jekyll.

This is meant as a demostration for an Instagram-like [story viewer](https://www.npmjs.com/package/story-view-element) demo, so the images should be 9:16. Add each image individually to an album to include a caption.

[End result](https://muan.github.io/stories-feed-action/).

Steps to setup:

1. Have an iCloud Shared Album ready.

2. Fork this repository.

3. Edit `_config.yml` with your info.

4. Set repository secret `ICLOUD_TOKEN` at `https://github.com/<username>/stories-feed-action/settings/secrets/actions`. You'd need to publish the iCloud shared album as a website, and the token value would be `B0000000000` from its full URL `https://www.icloud.com/sharedalbum/#B0000000000`.

5. Turn on GitHub pages at `https://github.com/<username>/stories-feed-action/settings/pages`

6. Manually trigger a workflow dispatch event at `https://github.com/<username>/stories-feed-action/actions/workflows/stories.yml` to see images being added to the repository.

7. See something like [this](https://muan.github.io/stories-feed-action/) at `https://<username>.github.io/stories-feed-action`:
  ![](https://user-images.githubusercontent.com/1153134/182153258-4f7e7cb5-5b80-48d9-96c8-3491075d9232.gif)

8. With the [GitHub iOS app](https://github.com/mobile), you'll be able to set up a Shortcut to dispatch the workflow event right from your phone.

---

This GitHub Action commits the images in the repository, which frankly aren't that great performance-wise. I recommend checking out [Cloudflare Images](https://www.cloudflare.com/products/cloudflare-images/).
