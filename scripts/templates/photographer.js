// eslint-disable-next-line no-unused-vars
function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait, title } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute("id", id)
        const a = document.createElement('a');
        a.href = `photographer.html?id=${id}`;
        const img = document.createElement( 'img' );
        img.setAttribute("class", "imgcover");
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Photo de profil de ${name}`);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city + ", " + country;
        const taglinePhotographer = document.createElement( 'p' );
        taglinePhotographer.setAttribute("class", "tagline")
        taglinePhotographer.textContent = tagline;
        const pricePhotographer = document.createElement('p');
        pricePhotographer.setAttribute("class", "price");
        pricePhotographer.textContent = price + "€/jour";
        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(taglinePhotographer);
        article.appendChild(pricePhotographer);
        return (article);
    }

    function getInfosOfPhotographer() {
        const findId = data.find((e) => e.id === idPhotographer)
    
        const picture = `assets/photographers/${findId.portrait}`;
        const photographersHeader = document.querySelector(".photograph-presentation");
        const photographersPicture = document.querySelector(".photograph-img");
        const img = document.createElement( 'img' );
        img.setAttribute("class", "photograph-picture");
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Photo de profil de ${findId.name}`);    
        const h1 = document.createElement('h1');
        h1.textContent = findId.name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = findId.city + ", " + findId.country;
        const taglinePhotographer = document.createElement( 'p' );
        taglinePhotographer.textContent = findId.tagline;
        photographersHeader.appendChild(h1);
        photographersHeader.appendChild(h3);
        photographersHeader.appendChild(taglinePhotographer);
        photographersPicture.appendChild(img);

        const priceOfPhotographer = document.getElementById("price-photograph");
        priceOfPhotographer.textContent = findId.price + "€ / jour";
               
    }    
    return { getUserCardDOM, getInfosOfPhotographer }

}