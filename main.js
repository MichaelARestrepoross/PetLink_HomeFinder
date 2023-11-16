let tokenType;
let expiresIn;
let accessToken;

fetch('https://api.petfinder.com/v2/oauth2/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecretKey}`,
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(({ token_type, expires_in, access_token }) => {
    // Handle the data from the response
    console.log('Token Type:', token_type);
    console.log('Expires In:', expires_in);
    console.log('Access Token:', access_token);
    
  
    tokenType = token_type;
    expiresIn = expires_in;
    accessToken = access_token;

    print();
    fetchAnimals();
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

// I elsewhere in my code
function print (){
    console.log(`Token Type: ${tokenType}`);
    console.log(`Expires In: ${expiresIn}`);
    console.log(`Access Token: ${accessToken}`);    
}




// Function to fetch animals of a specific type using the stored access tokens
function fetchAnimals() {
    let url =`https://api.petfinder.com/v2/animals`;


    fetch(url , {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`, // Adding access token to the header
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Animals:', data); // Handle the animal data received here
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }
  

  // Assuming 'dog' example

  