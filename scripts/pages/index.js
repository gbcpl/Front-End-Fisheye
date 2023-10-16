    async function getPhotographers() {
        // JSON datas are recovered thanks to the fetch method
        let data;
        try {
        const response = await fetch('../data/photographers.json');
        if (!response.ok) {
            throw new Error('Erreur HTTP ' + response.status);
        }
        data = await response.json();
      
        } catch (error) {
        console.error('Erreur :', error);
        }

        return ({
            photographers: [...data.photographers]})

    }
  
  // Datas are integrated in the index.html page in the .photographer_section div

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Datas are saved in photographers and displayed thanks to the called displayData function

        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
