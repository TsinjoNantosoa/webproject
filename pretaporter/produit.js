document.addEventListener("DOMContentLoaded", function () {
    fetch('./produits.json')
  .then(response => response.json())
  .then(data => {
        const produitsDiv = document.getElementById('produits'); 

        // Suppression du contenu HTML statique
        produitsDiv.innerHTML = ''; // Cette ligne efface le contenu existant

        data.forEach(produit => {
            // Création des éléments HTML pour chaque produit
            const box = document.createElement('div');
            box.classList.add('box');

            const imbox = document.createElement('div');
            imbox.classList.add('imbox');

            const img = document.createElement('img');
            img.src = produit.image;
            img.alt = produit.nom;

            const text = document.createElement('div');
            text.classList.add('text');

            const p = document.createElement('p');
            p.textContent = produit.nom;

            const h3 = document.createElement('h3');
            h3.textContent = produit.prix;

            // Ajout des éléments à leur parent
            imbox.appendChild(img);
            text.appendChild(p);
            text.appendChild(h3);
            box.appendChild(imbox);
            box.appendChild(text);

            // Ajout de l'élément box au div des produits
            produitsDiv.appendChild(box);
        });
    })
  .catch(error => console.error('Erreur lors de la récupération des données:', error));
});
