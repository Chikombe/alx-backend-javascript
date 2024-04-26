export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' }; // Resolve with the success response
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error(); // Reject with an empty Error object
    });
}
