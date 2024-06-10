document.addEventListener('DOMContentLoaded', function() {
    fetch('./chaussure.json')
   .then(response => response.json())
   .then(data => {
          const boxes = document.querySelectorAll('.box');

          data.forEach((item, index) => {
              if (index >= boxes.length) return;

              const imgBox = boxes[index].querySelector('.imbox');
              const textBox = boxes[index].querySelector('.text');

              imgBox.querySelector('img').src = item.image;
              textBox.querySelector('p').textContent = item.description;
              textBox.querySelector('h3').textContent = item.prix;
          });
      })
   .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
      });
});

