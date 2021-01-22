# p2p-cdn-image-worker

This is a demo project on how to hook up the workers to S3 in order to serve images.  This is currently set up to hook into AWS but the URL structure can easily be changed to support whatever service is being used.

## Local Setup

In order to run this locally you will need to have a Cloudflare account as well as both `Node` and `NPM` installed.  Can read the tutorial [here](https://developers.cloudflare.com/workers/learning/getting-started)

The steps from above tutorial:
- Run `npm install -g @cloudflare/wrangler` to install the Wrangler CLI globally.
- Run `wrangler --version` to verify everything is installed corectly.
- Run `wrangler login` which will allow you to setup your API token.
- While in the project directory run `wrangler dev` and this will build and run the project while providing a link locally to test.

## Usage

Example Request: `images.p2p-images.workers.dev/1234/image.jpg`

The script is currently set up to use the listings ID along with the assests name.  This is under the assumption that this is how the images are stored.

## How to Deploy

//TODO - Working on setting up an example of using Github Actions to deploy when there is a merge into the `main` branch.