



let petSearchFrom = document.querySelector('#petSearchForm')
petSearchFrom.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Fetch form data
    const getPetType = document.querySelector("#petType").value;    ;
    const getGender = document.querySelector('#gender').value;
    const getAgeRange = document.querySelector('#ageRange').value;
    const getPetSize = document.querySelector('#petSize').value;
    const getPetState = document.querySelector('#petState').value;

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

    //Error check
    const petState = document.querySelector('#petState').value;
    const errorDiv = document.querySelector('#stateError');
    if (petState === '') {
        event.preventDefault(); // Prevent form submission
        errorDiv.style.display = 'block';
    } else {
        errorDiv.style.display = 'none';
        fetchAnimals(type,gender,size,age,state); 
    }

});






  

  