function openLightBox() {
    document.getElementById("light-box").style.display = "block";
    document.getElementById("main").style.display = "none";
}

function closeLightBox() {
    document.getElementById("light-box").style.display = "none";
    document.getElementById("main").style.display = "block";
    const images = document.querySelectorAll(".medias"); 
    images.forEach((image) => {
        image.style.display = "none"; 
    });;

}

function currentSlide(n) {
    const images = document.querySelectorAll(".medias"); 
    console.log(n)

    for (let i = 0; i < images.length; i++) {
        if (i === n) {
            images[i - 1].style.display = "block";
        } 
    }
}