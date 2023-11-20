// Function to fetch animals of a specific type using the stored access tokens
function fetchAnimals(type="",gender="",size="",age="",state="") {
    let url =`https://api.petfinder.com/v2/animals?`;
    if(type){
        url = url+`type=${type}`;
    }
    // maybe change these to check if the end of the url is "&&" later
    if ((url[url.length - 1] !== "&") && (url[url.length - 1] !== "?") && gender) {
        url = url + "&&";
    }    
    if(gender){
        url = url+ `gender=${gender}`;
    }
    if((url[url.length - 1] !== "&") && (url[url.length - 1] !== "?")&& size){
        url = url + `&&`;
    }
    if(size){
        url = url+`size=${size}`;
    }
    if((url[url.length - 1] !== "&") && (url[url.length - 1] !== "?")&& age){
        url = url + `&&`;
    }
    if(age){
        url = url +`age=${age}`;
    }
    if((url[url.length - 1] !== "&") && (url[url.length - 1] !== "?") && state){
        url = url + `&&`;
    }
    if(state){
        url = url+`distance=120&&location=${state} `
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
            animalList = data;
            addAnimals(data)

        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}
  