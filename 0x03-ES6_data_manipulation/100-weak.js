// Define a WeakMap to track the number of queries for each endpoint
const weakMap = new WeakMap();

// Export the WeakMap
export { weakMap };

// Define the queryAPI function
export function queryAPI(endpoint) {
  // Get the current count for the endpoint from the WeakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Update the count in the WeakMap
  weakMap.set(endpoint, count);

  // Check if the count is >= 5, throw an error if so
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
