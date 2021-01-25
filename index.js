addEventListener('fetch', event => {
  event.respondWith(handleRequest(event))
})

// This would be whatever you have setup in AWS.
const BUCKET_NAME = 'jtp.imageupload.test'
const REGION = 'us-east-2'
const BUCKET_URL = `https://s3.${REGION}.amazonaws.com/${BUCKET_NAME}`

async function servePicture(event) {
  const url = new URL(event.request.url)
  const cache = caches.default
  let response = await cache.match(event.request)

  if(!response) { 
    response = await fetch(`${BUCKET_URL}${url.pathname}`)
    const headers = { "cache-control": "public, max-age=14400" }
    response = new Response(response.body, { ...response, headers })
    event.waitUntil(cache.put(event.request, response.clone()))
  }
  return response
}

async function handleRequest(event) {
  if(event.request.method === 'GET') {
    let response = await servePicture(event)
    if(response.status > 399) { 
      response = new Response(response.statusText, { status: response.status })
    }
    return response
  } else {
    return new Response('Invalid Request Type', { status: 405 })
  }
}
