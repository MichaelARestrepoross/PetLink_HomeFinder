// Function to add the animal data in the pet list
function addAnimals(data) {
    const petList = document.querySelector('.pet-list');
    petList.innerHTML=``;
    
    data.animals.forEach(animal => {
      const petItem = document.createElement('div');
      petItem.classList.add('pet-item');
      petItem.innerHTML = `
      <p class="animal-info">
       <strong> Name:</strong> ${animal.name} | <strong>Gender:</strong> ${animal.gender} | <strong>Type:</strong> ${animal.type} | <strong>Breed:</strong> ${animal.breeds.primary} | <strong>Size:</strong> ${animal.size} | <strong>Age:</strong> ${animal.age} | <strong>State:</strong> ${animal.contact.address.state}
      </p>
      `;
  
      petItem.addEventListener('click', () => {
        updateSelectedPet(animal);
      });
  
      petList.appendChild(petItem);
    });
  }
  
  // Function to update the selected pet information
  function updateSelectedPet(animal) {
    const selectedPetImg = document.querySelector('.selectedPetImg');
    const petDescription = document.querySelector('.pet-description');
  
    // Update image source
    console.log(selectedPetImg);
    selectedPetImg.src = animal.photos.length>0 ? animal.photos[0].medium : './assets/img/defaultImg.jpeg';
    console.log(selectedPetImg);
    // Create a description string with contact and general info
    let description = `
    <div class = descImg>
        <img class="selectedPetImg" src="${selectedPetImg.src}" alt="Defualt pet img"><br>
    </div>
    <div class = descData>
    <strong>Name:</strong> ${animal.name}<br>
    ID:</strong> ${animal.id}<br><br>
    <strong>Description:</strong> <br>${animal.description} <br>
    <br><strong>General Info:</strong><br>
      
    <strong>Type:</strong> ${animal.type}<br>
    <strong>Breed:</strong> ${animal.breeds.primary}<br>
    <strong>Size:</strong> ${animal.size}<br>
    <strong>Age:</strong> ${animal.age} 

    <br><br><strong>Contact Info:</strong><br>
    <strong>Phone:</strong> ${animal.contact.phone}<br>
    <strong>Email:</strong> ${animal.contact.email}<br>
    <strong>Address:</strong> ${animal.contact.address.address1}, 
            ${animal.contact.address.city}, 
            ${animal.contact.address.state}, 
            ${animal.contact.address.postcode}
    </div>`
    ;

  
    petDescription.innerHTML = description;
  }