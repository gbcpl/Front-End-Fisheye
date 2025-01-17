function onKeyUp(e) {
    if (e.key === "Enter") {
        openLightBox();
    }
}

// eslint-disable-next-line no-unused-vars
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
        const div = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("p");
        const likes = document.createElement("p");

        img.setAttribute("src", photo);
        img.setAttribute("alt", this.data.title);
        img.setAttribute("aria-label", this.data.title);

        title.textContent = this.data.title;

        likes.innerHTML = `<span class="hearts">${this.data.likes} </span>` + ' <i class="fa-solid fa-heart" aria-label="likes" tabindex="0"></i>';

        if (listOfPhotos === document.getElementById("light-box")) {
            img.classList.add("medias");
            div.setAttribute("class", "media-container-lightbox");
            div.appendChild(img);
            div.appendChild(title);    
            
        } else if (listOfPhotos === document.querySelector(".list-photos")) {
            img.classList.add("photo");
            img.setAttribute("tabindex", 0);
            div.setAttribute("class", "media-container");
            const description = document.createElement("div");
            description.appendChild(title);
            description.appendChild(likes); 
            description.classList.add("description");
            div.appendChild(img);
            div.appendChild(description);
            img.addEventListener("click", () => {
                openLightBox();
                currentSlide(index);
            });
            img.addEventListener("keydown", () => {
                onKeyUp(event);
                currentSlide(index);
            })
        }

        listOfPhotos.appendChild(div);
    }
}

class VideoMedia {
    constructor(data) {
        this.data = data;
    }

    render(listOfPhotos, index) {
        const videoUrl = `assets/photos/${this.data.video}`;
        const div = document.createElement("div");
        const video = document.createElement("video");
        const title = document.createElement("p");
        const likes = document.createElement("p");

        video.setAttribute("src", videoUrl);
        video.setAttribute("aria-label", this.data.title);
        title.textContent = this.data.title;

        likes.innerHTML = `<span class="hearts">${this.data.likes}</span>` + ' <i class="fa-solid fa-heart" aria-label="likes" tabindex="0"></i>';

        if (listOfPhotos === document.getElementById("light-box")) {
            video.classList.add("medias");
            div.setAttribute("class", "media-container-lightbox");
            video.controls = true;
            div.appendChild(video);
            div.appendChild(title);    

        } else if (listOfPhotos === document.querySelector(".list-photos")) {
            video.classList.add("video");
            video.setAttribute("tabindex", 0);
            div.setAttribute("class", "media-container")
            const description = document.createElement("div");
            description.appendChild(title);
            description.appendChild(likes); 
            description.classList.add("description");
            div.appendChild(video);
            div.appendChild(description);
            video.addEventListener("click", () => {
                openLightBox();
                currentSlide(index);
            });
            video.addEventListener("keydown", () => {
                onKeyUp(event);
                currentSlide(index);
            });
        }

        listOfPhotos.appendChild(div);
    }
}

