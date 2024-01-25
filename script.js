import data from '/data/data.js';

let icons = document.querySelectorAll('#iconCarousel .icon-carousel')

icons.forEach((el) => {
    const minPerSlide = 12;
    let next = el.nextElementSibling
    for (var i = 0; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = icons[0];
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let items = document.querySelectorAll('#carousel .icon-carousel')

items.forEach((el) => {
    const minPerSlide = 1;
    let next = el.nextElementSibling
    for (var i = 0; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0];
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

// // ---------------------------------------------------------------- CAROUSEL ----------------------------------------------------------------
// // GLOBAL SCOPES ----------------------------------------------------------------
// const mainContainer = document.getElementById('mainContainer');

// const cardsCount = data.length;

// const cardsImagesCount = data[0].images.length;

// const cardsInARow = 6;

// const creationCarousel = () => {
//     for (let i = 0; i < data.length; i++) {
//         // Crea una nuova riga ogni volta che viene raggiunto il conteggio massimo di cards per riga
//         if (i % cardsInARow === 0) {
//             const rowDiv = document.createElement('div');
//             rowDiv.classList.add('row');
//             mainContainer.appendChild(rowDiv);
//         }

//     // Creazione di un elemento div figlio con le classi specificate
//     const colDiv = document.createElement('div');
//         colDiv.classList.add('my-3', 'col-lg-2', 'col-md-3', 'col-sm-6', 'col-12');

//     // Creazione di un elemento div figlio con l'id 'carousel' e le classi specificate
//     const carouselDiv = document.createElement('div');
//         carouselDiv.setAttribute('id', 'carousel');
//         carouselDiv.classList.add('carousel', 'slide');

//         // Aggiunta dei div figli al div padre
//         rowDiv.appendChild(colDiv);
//         colDiv.appendChild(carouselDiv);

//         // Aggiunta del div padre (con i div figli annidati) a mainContainer
//         mainContainer.appendChild(rowDiv);

//     // Creazione dell'indicatore del carousel
//     const carouselIndicator = document.createElement('div');
//         carouselIndicator.classList.add('carousel-indicators');
//     }
// }

// creationCarousel();

// // Utilizzo di forEach per iterare su ogni elemento dell'array data
// data.forEach((item) => {
//     console.log('Title:', item.title);
//     console.log('Rating:', item.rating);
//     console.log('Description:', item.description);

//     // Utilizzo di forEach per iterare su ogni oggetto all'interno dell'array images
//     item.images.forEach((image) => {
//         console.log('Image:', image);
//     });

//     console.log('Dates:', item.dates);
//     console.log('Price:', item.price);
// });