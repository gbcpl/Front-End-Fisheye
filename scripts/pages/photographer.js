let data;
let params = new URL(document.location).searchParams;
let idPhotographer = parseInt(params.get("id"));

async function getPhotographers() {
    // JSON datas are recovered thanks to the fetch method
    
    try {
    const response = await fetch('data/photographers.json');
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

async function displayData(photographers) {

    const photographerModel = photographerTemplate(photographers);
    const presentation = photographerModel.getId();
    return presentation;
}

async function init() {
    // Datas are saved in photographers and displayed thanks to the called displayData function

    const { photographers } = await getPhotographers();
    displayData(photographers);
    getPhotos();
}

init();
