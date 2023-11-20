# PetLink: HomeFinder

PetLink: HomeFinder is a platform dedicated to connecting pets with loving homes. With an extensive database of pets and partnering animal welfare organizations, this platform makes it easy to discover and adopt a furry companion, providing them with a forever home. By leveraging PetLink: HomeFinder, you champion responsible pet adoption while finding your perfect match among a variety of deserving pets.

## Getting Started

1. **Installation:** 
   - Install [CORS Unblock Extension](https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?pli=1).

2. **API Access:**
   - Request `api_ID.js` and add the file to the main directory of PetLink_Homefinder.

3. **Launch:**
   - Visit [PetLink HomeFinder](https://michaelarestrepoross.github.io/PetLink_HomeFinder).

## Uses

Discover your new furry friend using various search criteria:

### Search Filters
- **Type of Pet:** Explore a range of pet types including dogs, cats, birds, rabbits, and more.
- **Gender:** Filter pets based on their gender.
- **Age Range:** Search for pets within specific age groups.
- **Pet Size:** Find pets that fit your living space and lifestyle.
- **Location:** Discover pets available in specific states, connecting with local adoption opportunities.

PetLink: HomeFinder simplifies the adoption process with an intuitive interface and robust search functionalities, making it seamless to find and connect with your ideal pet companion.

## What API's Used
------------------

### Petfinder API
The Petfinder API is a powerful tool utilized in PetLink: HomeFinder to access a vast database of pets ready for adoption and over ten thousand animal welfare organizations. This API allows dynamic websites or applications to access the same data used on Petfinder.com.

[PetFinder API Link](https://www.petfinder.com/developers/v2/docs/)

#### Capabilities
For instance, it empowers you to:
- Showcase random selections of available pets on a webpage.
- Set up pages to display pets in different categories.
- Enable visitors to search for adoptable pets based on various criteria.
- Display profiles of local organizations.

#### How It Works
The API operates as a RESTful service, utilizing predictable URLs to access resources and returning meaningful HTTP response codes. It supports GET, POST, and HTTP authentication, ensuring secure usage from client-side web applications. With cross-origin resource sharing support, it offers a secure integration method. Requests to the servers follow a specific structure, employing access tokens for API requests.

#### Usage
Primarily, the Petfinder API was utilized as a tool to create search functionalities and maintain an updated database of adoptable pets. It plays a pivotal role in powering the search functions and maintaining an up-to-date repository of pet data available for adoption.

## Stretch Goals
------------------

1. **Modular JavaScript:** Organize JavaScript files by functions and purpose, implementing a clear separation of concerns, possibly creating a main file and specific fetch functions.
   
2. **Custom Error Handling:** Develop custom error handling that provides appropriate feedback when incorrect inputs are made in the form. Ensure errors disappear upon the correct input submission.

3. **Selection-Triggered Pet Data Updates:** Implementing a feature where selecting a pet from the pet list updates its data in a separate section, though this may not count as a more stretch goal.

