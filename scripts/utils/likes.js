function incrementLikes() {
    const addLikes = document.querySelectorAll(".fa-heart");
    
    addLikes.forEach((like, index) => {
        let likeAdded = 0;

        like.addEventListener("click", () => {

            if (likeAdded == 0) {
                
                const hearts = document.querySelectorAll(".hearts");
                const currentLikes = parseInt(hearts[index].textContent);
                console.log(currentLikes);
                
                hearts[index].textContent = currentLikes + 1;
                likeAdded = 1;
    }});

    
});
}

function getTotalLikes() {
    const hearts = document.querySelectorAll(".hearts");
    let total = 0;
    hearts.forEach((like) => {
        console.log(like);
        let currentLikes = parseInt(like.textContent);
        console.log(currentLikes)
        console.log(total = total + currentLikes);
        total = total + currentLikes;
        const totalLikes = document.getElementById("total-likes")
        return totalLikes.innerHTML = total + `<i class="fa-solid fa-heart"></i>`;
    });
}

