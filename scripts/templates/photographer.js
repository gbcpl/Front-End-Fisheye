function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute("id", id)
        const a = document.createElement('a');
        a.href = `photographer.html?id=${id}`;
        const img = document.createElement( 'img' );
        img.setAttribute("class", "imgcover");
        img.setAttribute("src", picture);
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
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(taglinePhotographer);
        article.appendChild(pricePhotographer);
        return (article);
    }
    return { getUserCardDOM }
}