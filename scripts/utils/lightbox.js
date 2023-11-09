function keyboardEventListener(e) {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        previousSlide();
    } else if (e.key === 'Escape') {
        closeLightBox();
    }
}

function openLightBox() {
    document.getElementById("modal-light-box").style.display = "block";
    document.getElementById("main").style.display = "none";
    document.querySelector(".logo").style.display = "none";
    document.getElementById("daily-rate").style.display = "none";
    document.addEventListener("keydown", keyboardEventListener);
}

function closeLightBox() {
    document.getElementById("modal-light-box").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.querySelector(".logo").style.display = "block";
    document.getElementById("daily-rate").style.display = "block";

    const images = document.querySelectorAll(".media-container-lightbox"); 
    images.forEach((image) => {
        image.style.display = "none"; 
    });;
    document.removeEventListener("keydown", keyboardEventListener)
}

function currentSlide(current) {
    const images = document.querySelectorAll(".media-container-lightbox"); 
    console.log(current)

    images.forEach((image, index) => {
        if (index === current - 1) {
            image.style.display = "flex";
        } else {
            image.style.display = "none";
        }
    });
}

function nextSlide() {
    const images = document.querySelectorAll(".media-container-lightbox"); 

    const imagesArray = Array.from(images);
    let currentIndex = imagesArray.findIndex(image => image.style.display === "flex");

    if (currentIndex !== -1) {
        // hide currently displayed image
        console.log(currentIndex)
        images[currentIndex].style.display = "none";

        // index of the next image
        const nextIndex = (currentIndex + 1) % images.length;

        // next image
        images[nextIndex].style.display = "flex";
    }
}

function previousSlide() {
    const images = document.querySelectorAll(".media-container-lightbox"); 

    const imagesArray = Array.from(images);
    let currentIndex = imagesArray.findIndex(image => image.style.display === "flex");


    if (currentIndex !== -1) {
        console.log(currentIndex)
        // hide currently displayed image

        images[currentIndex].style.display = "none";

        // index of the previous image
        const previousIndex = (currentIndex - 1 + images.length) % images.length;

        // previous image
        images[previousIndex].style.display = "flex";
    }
}

const next = document.querySelector(".fa-chevron-right");

next.addEventListener("click", () => {
        nextSlide();
    }
)

const previous = document.querySelector(".fa-chevron-left");

previous.addEventListener("click", () => {
        previousSlide();
    }
)