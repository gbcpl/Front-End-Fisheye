function getPhotos() {

    for (let i = 0; i < data.media.length; i++) {
        if (data.media[i].photographerId === idPhotographer) {
            console.log(data.media[i].id);
            console.log("ici")
            const photo = `assets/photos/${data.media[i].image}`;
            const videoUrl = `assets/photos/${data.media[i].video}`;
            const listOfPhotos = document.querySelector(".list-photos");
            if (data.media[i].image) {
                console.log("là")
                const img = document.createElement('img');
                img.setAttribute("class", "photo");
                img.setAttribute("src", photo)
                img.setAttribute("alt", data.media[i].title)
                listOfPhotos.appendChild(img);
            } else if (data.media[i].video) {
                const video = document.createElement('video');
                video.setAttribute("class", "video");
                video.setAttribute("src", videoUrl)
                video.setAttribute("aria-label", data.media[i].title)
                video.controls = true;
                listOfPhotos.appendChild(video);
            }
        }
    }
}