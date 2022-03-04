# p2p-cdn-image-worker

This is a demo project on how to hook up the workers to S3 in order to serve images.  This is currently set up to hook into AWS but the URL structure can easily be changed to support whatever service is being used.

Hi

## Local Setup

In order to run this locally you will need to have a Cloudflare account as well as both `Node` and `NPM` installed.  Can read the tutorial [here](https://developers.cloudflare.com/workers/learning/getting-started)

The steps from above tutorial:
- Run `npm install -g @cloudflare/wrangler` to install the Wrangler CLI globally.
- Run `wrangler --version` to verify everything is installed corectly.
- Run `wrangler login` which will allow you to setup your API token.
- While in the project directory run `wrangler dev` and this will build and run the project while providing a link locally to test.

## Usage

Example Request: `images.p2p-images.workers.dev/1234/image.jpg`

The script is currently set up to use the listings `ID` along with the `assest`name.  This is under the assumption that this is how the images are stored.

## How to Deploy

With the use of Github Actions the repo is able to deploy when there is a merge into the `main` branch.  A few steps will need to be taken in order for this to be accomplished:

- In the `wrangler.toml` file the fields will need to verify the `name` and `account_id` fields.
  - `name` refers to the worker name configured in Cloudflare.
  - `account_id` is the main account ID that will be deployed to that holds the worker.  More information can be found [here](https://support.cloudflare.com/hc/en-us/articles/200167836-Managing-API-Tokens-and-Keys).
- An API token will need to be created for workers with the correct credentials to be able to deploy.
- The repo will need to contain a secret which can be created by following this [setting secrets](https://docs.github.com/en/actions/reference/encrypted-secrets)