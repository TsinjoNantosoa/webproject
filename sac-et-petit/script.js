document.addEventListener('DOMContentLoaded', function() {
            // Chemin vers le fichier JSON
            const url = './chemin_vers_votre_fichier_json.json';
            // Appel API Fetch pour charger les produits
            fetch(url)
           .then(response => response.json())
           .then(data => {
                
                const productsContainer = document.getElementById('produits');
                data.forEach(product => {
                   
                    const productElement = document.createElement('div');
                    productElement.innerHTML = `
                        <h3>${product.nom}</h3>
                        <p>${product.prix} €</p>
                    `;
                    productsContainer.appendChild(productElement);
                });
            })
           .catch(error => console.error('Erreur lors de la récupération des produits:', error));
        });
