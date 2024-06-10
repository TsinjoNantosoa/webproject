         document.addEventListener("DOMContentLoaded", function () {
            fetch('./donnees.json') 
         .then(response => response.json())
         .then(data => {
                const produitsDiv = document.getElementById('container');
                produitsDiv.innerHTML = ''; // Supprime le contenu HTML existant
        
                // Accéder au tableau "nouveautes" dans les données
                const nouveautes = data.nouveautes;
        
                nouveautes.forEach(produit => {
                    afficherProduit(produit, produitsDiv);
                });
            })
         .catch(error => console.error('Erreur lors de la récupération des données:', error));
        });
        
        function afficherProduit(produit, produitsDiv) {
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
            p.textContent = produit.description; // Affiche la description du produit
        
            const h3 = document.createElement('h3');
            h3.textContent = produit.prix + "€"; // Affiche le prix du produit
        
            
            imbox.appendChild(img);
            text.appendChild(p);
            text.appendChild(h3);
            box.appendChild(imbox);
            box.appendChild(text);
        
            // Ajout de l'élément box au div des produits
            produitsDiv.appendChild(box);
        }
        
