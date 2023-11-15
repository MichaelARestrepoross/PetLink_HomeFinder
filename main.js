fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials&client_id={CLIENT-ID}&client_secret={CLIENT-SECRET}',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Handle the data from the response
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      console.error('Fetch error:', error);
    });

// grab the form
const form = document.querySelector('form');
// add event listener to the form
form.addEventListener(`submit`, (event)=>{
    // preven the default
    event.preventDefault();

    fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials&client_id={CLIENT-ID}&client_secret={CLIENT-SECRET}',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          // Handle the data from the response
          console.log(data);
        })
        .catch(error => {
          // Handle errors
          console.error('Fetch error:', error);
        });
      
});
  