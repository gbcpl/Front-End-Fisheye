function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("class", "imgcover");
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city + ", " + country;
        const taglinePhotographer = document.createElement( 'p' );
        taglinePhotographer.textContent = tagline;
        const pricePhotographer = document.createElement('p');
        pricePhotographer.textContent = price + "€/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(taglinePhotographer);
        article.appendChild(pricePhotographer);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}