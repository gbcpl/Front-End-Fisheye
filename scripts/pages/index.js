

    async function getPhotographers() {
        // On récupère les données JSON à l'aide de fetch
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

        // On retourne photographers sous forme de tableau contenant les informations des photographeurs.  
        return ({
            photographers: [...data.photographers]})

    }
  
  // On doit appeller la fonction getPhotographers pour récupérer les photographes

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
