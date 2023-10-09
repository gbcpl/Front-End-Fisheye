let obj;
let photographers;

    async function getPhotographers() {
        // On récupère les données JSON à l'aide de fetch
        try {
        const response = await fetch('../Front-End-Fisheye/data/photographers.json');
        if (!response.ok) {
            throw new Error('Erreur HTTP ' + response.status);
        }
        const data = await response.json();
  
        // On stock le fichier JSON dans un objet "obj", puis l'objet photographers présent dans obj dans une variable photographers 
        obj = data;
        photographers = obj.photographers;
      
        console.log(photographers);
        } catch (error) {
        console.error('Erreur :', error);
        }

        // On retourne photographers sous forme de tableau contenant les informations des photographeurs.  
        return ({
            photographers: [...photographers]})

    }
  
  // On doit appeller la fonction getPhotographers pour récupérer les photographes
  getPhotographers();

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
    
