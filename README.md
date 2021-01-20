# p2p-cdn-image-worker

This is a demo project on how to hook up the workers to S3 in order to serve images.  This is currently set up to hook into AWS but the URL structure can easily be changed to support whatever service is being used.

## Usage

Example Request: `images.p2p-images.workers.dev/1234/image.jpg`

The script is currently set up to use the listings ID along with the assests name.  This is under the assumption that this is how the images are stored.

## How to Deploy

//TODO - Working on setting up an example of using Github Actions to deploy when there is a merge into the `main` branch.