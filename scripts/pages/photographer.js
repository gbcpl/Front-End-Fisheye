let data;
let params = new URL(document.location).searchParams;
let idPhotographer = parseInt(params.get("id"));
let arrayMedia = [];
let newArrayLikes = [];
let newArrayDate = [];
let f = 0;

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
    const presentation = photographerModel.getInfosOfPhotographer();
    return presentation;
}

function displayPhotos(data, idPhotographer) {
    const listOfPhotos = document.querySelector(".list-photos");
    const mediaList = document.getElementById("light-box");

    const indexMedia = data.media.filter((media) => media.photographerId === idPhotographer);

    indexMedia.forEach((media, index) => {
        if (media.photographerId === idPhotographer) {
            arrayMedia.push(media);
            console.log(arrayMedia);

            const date = new Date(media.date);
            media.date = date;
            const mediaObject = MediaFactory.createMedia(media);

            mediaObject.render(listOfPhotos, index + 1);
            console.log(index);
            mediaObject.render(mediaList);
        }
    });
}



async function init() {
    // Datas are saved in photographers and displayed thanks to the called displayData function

    const { photographers } = await getPhotographers();
    displayData(photographers);
    displayPhotos(data, idPhotographer)
}

init();

