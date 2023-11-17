let tokenType;
let expiresIn;
let accessToken;

let type;
let gender;
let size;
let age;
let state;

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
function fetchAnimals(type="",gender="",size="",age="",state="") {
    let url =`https://api.petfinder.com/v2/animals?distance=75&&`;
    if(type){
        url = url+`type=${type}`;
    }
    // maybe change these to check if the end of the url is "&&" later
    if ((url[url.length - 1] !== "&") && (url[url.length - 1] !== "?")) {
        url = url + "&&";
    }    
    if(gender){
        url = url+ `gender=${gender}`;
    }
    if((url[url.length - 1] !== "&") && (url[url.length - 1] !== "?")){
        url = url + `&&`;
    }
    if(size){
        url = url+`size=${size}`;
    }
    if((url[url.length - 1] !== "&") && (url[url.length - 1] !== "?")){
        url = url + `&&`;
    }
    if(age){
        url = url +`age=${age}`;
    }
    if((url[url.length - 1] !== "&") && (url[url.length - 1] !== "?")){
        url = url + `&&`;
    }
    if(state){
        url = url+`location=${state} `
    }

        console.log(url);

    fetch(url , {
      method: 'GET',
      headers: {
        Authorization: `${tokenType} ${accessToken}`, // Adding access token to the header
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
  


let petSearchFrom = document.getElementById('petSearchForm')
petSearchFrom.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Fetch form data
    const getPetType = document.getElementById('petType').value;
    const getGender = document.getElementById('gender').value;
    const getAgeRange = document.getElementById('ageRange').value;
    const getPetSize = document.getElementById('petSize').value;
    const getPetState = document.getElementById('petState').value;

    // Assign form data to global variables
    type = getPetType;
    gender = getGender;
    size = getPetSize;
    age = getAgeRange;
    state = getPetState;

    console.log('Selected Pet Type:', type);
    console.log('Selected Gender:', gender);
    console.log('Selected Age Range:', age);
    console.log('Selected Pet Size:', size);
    console.log('Selected Pet State:', state);


    fetchAnimals(type,gender,size,age,state); 

});
  