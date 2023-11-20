let tokenType;
let expiresIn;
let accessToken;

let type;
let gender;
let size;
let age;
let state;

let animalList;

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
    
        // Fetch animal types
        return fetch('https://api.petfinder.com/v2/types', {
            method: 'GET',
            headers: {
                Authorization: `${tokenType} ${accessToken}`
            }
        });
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }
    return response.json();
    })
    .then(data => {
        const petTypeSelect = document.getElementById('petType');

        data.types.forEach(animalType => {
            console.log(animalType);
            const option = document.createElement('option');
            const cleanedValue = animalType.name.replace(/\s+/g, ''); // Remove spaces
            option.value = cleanedValue;
            option.textContent = animalType.name;
            //These two have current issues runing with the api
            if(cleanedValue !="Small&Furry" && cleanedValue != "Scales,Fins&Other"){
                petTypeSelect.appendChild(option);
            }
        });
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
