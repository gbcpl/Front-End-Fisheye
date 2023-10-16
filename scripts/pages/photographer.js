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

async function getId() {
    await getPhotographers();

    for (let i = 0; i < data.photographers.length; i++) {
        console.log(i)
        const picture = `assets/photographers/${data.photographers[i].portrait}`;

        if (data.photographers[i].id === idPhotographer) {
            const photographersHeader = document.querySelector(".photograph-presentation");
            const photographersPicture = document.querySelector(".photograph-img");
            const img = document.createElement( 'img' );
            img.setAttribute("class", "photograph-picture");
            img.setAttribute("src", picture);    
            const h1 = document.createElement('h1');
            h1.textContent = data.photographers[i].name;
            const h3 = document.createElement( 'h3' );
            h3.textContent = data.photographers[i].city + ", " + data.photographers[i].country;
            const taglinePhotographer = document.createElement( 'p' );
            taglinePhotographer.textContent = data.photographers[i].tagline;
            photographersHeader.appendChild(h1);
            photographersHeader.appendChild(h3);
            photographersHeader.appendChild(taglinePhotographer);
            photographersPicture.appendChild(img)
            console.log(data.photographers[i].name);
        }    
    }    
}

getId();


async function getPhotos() {
    await getPhotographers();

    for (let i = 0; i < data.media.length; i++) {
        if (data.media[i].photographerId === idPhotographer) {
            console.log(data.media[i].id);
            const photo = `assets/photos/${data.media[i].image}`;
            const listOfPhotos = document.querySelector(".list-photos");
            const img = document.createElement('img');
            img.setAttribute("class", "photo");
            img.setAttribute("src", photo)
            listOfPhotos.appendChild(img);
        }
    }
}

getPhotos();