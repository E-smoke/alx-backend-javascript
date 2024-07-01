export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' }); // Use single quotes for 'Success'
    } else {
      reject('The fake API is not working currently'); // Use single quotes consistently
    }
  });
  return promise;
}
