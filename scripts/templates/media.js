
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
        img.setAttribute("role", "link");

        if (listOfPhotos === document.getElementById("light-box")) {
            img.classList.add("medias");
        } else if (listOfPhotos === document.querySelector(".list-photos")) {
            img.classList.add("photo");
            img.addEventListener("click", () => {
                openLightBox();
                currentSlide(index);
            });
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

        if (listOfPhotos === document.getElementById("light-box")) {
            video.classList.add("medias");
            video.controls = true;
        } else if (listOfPhotos === document.querySelector(".list-photos")) {
            video.classList.add("photo");
            video.addEventListener("click", () => {
                openLightBox();
                currentSlide(index);
            });
        }

        listOfPhotos.appendChild(video);
    }
}

function sortMediaByLikes() {
    const listOfPhotos = document.querySelector(".list-photos");
    const mediaList = document.getElementById("light-box");

    listOfPhotos.innerHTML = "";
    mediaList.innerHTML = "";
    
    // mettre dans photographer.js
    newArrayLikes = arrayMedia.sort((a, b) => a.likes - b.likes);

    newArrayLikes.forEach((media, index) => {

        if (media.photographerId === idPhotographer) {
            const mediaObject = MediaFactory.createMedia(media);

            console.log(media);
            mediaObject.render(listOfPhotos, index + 1);
            console.log(index);
            mediaObject.render(mediaList);
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