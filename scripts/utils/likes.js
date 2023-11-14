// eslint-disable-next-line no-unused-vars
function incrementLikes() {
    const addLikes = document.querySelectorAll(".fa-heart");
    
    addLikes.forEach((like, index) => {
        let likeAdded = false;

        like.addEventListener("click", () => {
            const hearts = document.querySelectorAll(".hearts");
            const currentLikes = parseInt(hearts[index].textContent);
            console.log(currentLikes);

            if (!likeAdded) {
                                
                hearts[index].textContent = currentLikes + 1;
                likeAdded = true;
                getTotalLikes();

            } else if (likeAdded) {
                hearts[index].textContent = currentLikes - 1;

                likeAdded = false;
                getTotalLikes();
            }
        });

        like.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const hearts = document.querySelectorAll(".hearts");
                const currentLikes = parseInt(hearts[index].textContent);
                console.log(currentLikes);

                if (!likeAdded) {
                                    
                    hearts[index].textContent = currentLikes + 1;
                    likeAdded = true;
                    getTotalLikes();
                
                } else if (likeAdded) {
                    hearts[index].textContent = currentLikes - 1;
                
                    likeAdded = false;
                    getTotalLikes();
            }
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

