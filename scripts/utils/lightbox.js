function openLightBox() {
    document.getElementById("modal-light-box").style.display = "block";
    document.getElementById("main").style.display = "none";
    document.querySelector(".logo").style.display = "none";
    document.getElementById("daily-rate").style.display = "none";

}

function closeLightBox() {
    document.getElementById("modal-light-box").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.querySelector(".logo").style.display = "block";
    document.getElementById("daily-rate").style.display = "block";

    const images = document.querySelectorAll(".medias"); 
    images.forEach((image) => {
        image.style.display = "none"; 
    });;

}

function currentSlide(current) {
    const images = document.querySelectorAll(".medias"); 
    console.log(current)

    for (let i = 0; i < images.length; i++) {
        if (i === current) {
            images[i - 1].style.display = "block";
        } else {
            images[i].style.display = "none";
        }
    }
}

function nextSlide() {
    const images = document.querySelectorAll(".medias"); 

    // Find the currently displayed image
    let currentIndex = 0;
    for (let i = 1; i < images.length; i++) {
        if (images[i].style.display === "block") {
            currentIndex = i;
            break;
        }
    }

    if (currentIndex !== -1) {
        // hide currently displayed image
        console.log(currentIndex)
        images[currentIndex].style.display = "none";

        // index of the next image
        const nextIndex = (currentIndex + 1) % images.length;

        // next image
        images[nextIndex].style.display = "block";
    }
}

function previousSlide() {
    const images = document.querySelectorAll(".medias"); 

    let currentIndex = 0;
    for (let i = 1; i < images.length; i++) {
        if (images[i].style.display === "block") {
            currentIndex = i;
            break;
        }
    }

    if (currentIndex !== -1) {
        console.log(currentIndex)
        // hide currently displayed image

        images[currentIndex].style.display = "none";

        // index of the previous image
        const previousIndex = (currentIndex - 1 + images.length) % images.length;

        // previous image
        images[previousIndex].style.display = "block";
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