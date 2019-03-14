import Api from '@bowtie/api'

const api = new Api({
  root: 'https://p3l5r3fsod.execute-api.us-east-1.amazonaws.com',
  stage: 'dev',
  prefix: 'api',
  version: 'v1',
  verbose: false,
});


// api.use(async (response) => {
//   try {
//       const data = await response.json()
//       response['data'] = data
//   } catch (e) {
//       console.error(e)
//   }

//   return Promise.resolve(response)
// })

// // Handler for all non 2xx code api responses
// const handleApiError = (resp) => {
//   // Airbrake severity is warning unless response status was 5xx
//   const severity = /^5\d\d$.text(resp.status) ? 'error' : 'warn';
//   let errorTitle = `${resp.status} ${resp.statusText}`;
//   if (resp.data && resp.data.message && resp.data.message.trim() !== '') {
//     errorTitle = resp.data.message
//   }

//   const payload = {
//     error: new Error(`API ${severity}: ${errorTitle}`),
//     context: {
//       severity,
//       resp
//     }
//   }

//   console.warn(payload);
// }

// // Attach handlers to event emitter by string event name
// api.on('error', handleApiError);

export default api
