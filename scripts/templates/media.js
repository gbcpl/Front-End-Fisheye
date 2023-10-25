
class MediaFactory {
    static createMedia(data) {
        if (data.image) {
            return new ImageMedia(data);
        } else if (data.video) {
            return new VideoMedia(data);
        }
    }
}

class ImageMedia {
    constructor(data) {
        this.data = data;
    }

    render(listOfPhotos, index) {
        const photo = `assets/photos/${this.data.image}`;
        const img = document.createElement('img');
        img.setAttribute("src", photo);
        img.setAttribute("alt", this.data.title);

        img.addEventListener("click", () => {
            openLightBox();
            currentSlide(index);
        });

        if (listOfPhotos === document.getElementById("light-box")) {
            img.classList.add("medias");
        } else if (listOfPhotos === document.querySelector(".list-photos")) {
            img.classList.add("photo");

        }

        listOfPhotos.appendChild(img);
    }
}

class VideoMedia {
    constructor(data) {
        this.data = data;
    }

    render(listOfPhotos, index) {
        const videoUrl = `assets/photos/${this.data.video}`;
        const video = document.createElement('video');
        video.setAttribute("class", "video");
        video.setAttribute("src", videoUrl);
        video.setAttribute("aria-label", this.data.title);

        video.addEventListener("click", () => {
            openLightBox();
            currentSlide(index + 1);
        });

        if (listOfPhotos === document.getElementById("light-box")) {
            video.classList.add("medias");
        }

        video.controls = true;
        listOfPhotos.appendChild(video);
    }
}

function sortMediaByLikes() {
    const listOfPhotos = document.querySelector(".list-photos");

    listOfPhotos.innerHTML = "";
    
    // mettre dans photographer.js, rappeler classes medias dans le if
    newArrayLikes = arrayMedia.sort((a, b) => a.likes - b.likes);

    newArrayLikes.forEach((media) => {

        if (media.photographerId === idPhotographer) {
            const mediaObject = MediaFactory.createMedia(media);

            console.log(media);
            mediaObject.render(listOfPhotos);
        }
    })

}

function sortMediaByDate() {
    const listOfPhotos = document.querySelector(".list-photos");

    listOfPhotos.innerHTML = "";
    
    newArrayDate = arrayMedia.sort((a, b) => a.date.getTime() - b.date.getTime());

    newArrayDate.forEach((media) => {

        if (media.photographerId === idPhotographer) {
            console.log("ici")
            const mediaObject = MediaFactory.createMedia(media);
            mediaObject.render(listOfPhotos);
        }
    })

}