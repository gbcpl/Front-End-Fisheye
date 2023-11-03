const filters = document.getElementById("select-menu");

filters.addEventListener("change", function() {
    const selectedOptions = filters.value;
    if (selectedOptions === "likes") {
        sortMediaByLikes();
    } else if (selectedOptions === "date") {
        sortMediaByDate();
    } else if (selectedOptions === "title") {
        sortMediaByTitle();
    }
});

function sortMediaByLikes() {
    const listOfPhotos = document.querySelector(".list-photos");
    const mediaList = document.getElementById("light-box");

    listOfPhotos.innerHTML = "";
    mediaList.innerHTML = "";
    console.log("yooo")
    // mettre dans photographer.js
    newArrayLikes = arrayMedia.sort((a, b) => b.likes - a.likes);

    newArrayLikes.forEach((media, index) => {

        if (media.photographerId === idPhotographer) {
            const mediaObject = MediaFactory.createMedia(media);

            mediaObject.render(listOfPhotos, index + 1);
            mediaObject.render(mediaList);
        }
    })

}

function sortMediaByDate() {
    const listOfPhotos = document.querySelector(".list-photos");
    const mediaList = document.getElementById("light-box");

    listOfPhotos.innerHTML = "";
    mediaList.innerHTML = "";

    newArrayDate = arrayMedia.sort((a, b) => a.date.getTime() - b.date.getTime());

    newArrayDate.forEach((media, index) => {

        if (media.photographerId === idPhotographer) {
            const mediaObject = MediaFactory.createMedia(media);
            mediaObject.render(listOfPhotos, index + 1);
            mediaObject.render(mediaList);
        }
    })

}

function sortMediaByTitle() {
    const listOfPhotos = document.querySelector(".list-photos");
    const mediaList = document.getElementById("light-box");

    listOfPhotos.innerHTML = "";
    mediaList.innerHTML = "";
    console.log("title")
    newArrayTitle = arrayMedia.sort((a, b) => a.title.localeCompare(b.title));

    newArrayTitle.forEach((media, index) => {

        if (media.photographerId === idPhotographer) {
            console.log("title2")

            const mediaObject = MediaFactory.createMedia(media);
            mediaObject.render(listOfPhotos, index + 1);
            mediaObject.render(mediaList);
        }
    })

}