document.addEventListener('DOMContentLoaded', function() {
    fetch('./bijoux.json') 
      .then(response => response.json())
      .then(data => {
            const contenu = document.getElementById('contenu');
            data.forEach(item => {
                const box = document.createElement('div');
                box.classList.add('box');

                const imbox = document.createElement('div');
                imbox.classList.add('imbox');
                const img = document.createElement('img');
                img.src = item.image;
                imbox.appendChild(img);

                const text = document.createElement('div');
                text.classList.add('text');
                const p = document.createElement('p');
                p.textContent = item.description;
                const h3 = document.createElement('h3');
                h3.textContent = `${item.nom} - ${item.prix}`;
                text.appendChild(p);
                text.appendChild(h3);

                box.appendChild(imbox);
                box.appendChild(text);
                contenu.appendChild(box);
            });
        })
      .catch(error => console.error('Erreur lors de la lecture du fichier JSON:', error));
});