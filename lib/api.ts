// Setup fetch config

// figure out a way to request an access key, and use it for requests
// fetchAccessKey = (.env.CLIENT_ID, .env.CLIENT_API_KEY) => {
//     const body = `grant_type=client_credentials&client_id=${CLIENT-ID}&client_secret=${CLIENT-SECRET}`
//
//      try / catch
//
//     return fetch(`${BASE_URL}/oauth2/token`, {
//          method: GET,
//          headers: {
//              "Content-Type": "application/x-www-form-urlencoded",
//          },
//          body: body,
//      })
//
//
// }

// setup get all animals by latest date
