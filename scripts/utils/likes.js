function incrementLikes() {
    const addLikes = document.querySelectorAll(".fa-heart");
    
    addLikes.forEach((like, index) => {
        let likeAdded = 0;

        like.addEventListener("click", () => {
            const hearts = document.querySelectorAll(".hearts");
            const currentLikes = parseInt(hearts[index].textContent);
            console.log(currentLikes);

            if (likeAdded === 0) {
                                
                hearts[index].textContent = currentLikes + 1;
                likeAdded = 1;
                getTotalLikes();

            } else if (likeAdded === 1) {
                hearts[index].textContent = currentLikes - 1;

                likeAdded = 0;
                getTotalLikes();
            }
});
});
}

function getTotalLikes() {
    const hearts = document.querySelectorAll(".hearts");
    let total = 0;
    hearts.forEach((like) => {
        console.log(like);
        let currentLikes = parseInt(like.textContent);
        total = total + currentLikes;
        const totalLikes = document.getElementById("total-likes")
        return totalLikes.innerHTML = total + `<i class="fa-solid fa-heart"></i>`;
    });
}

