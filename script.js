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

/* ricordarsi di cambiare id per questo carosello e non scombinare quelli delle altre pagine */
let rooms = document.querySelectorAll('#roomsCarousel.carousel .carousel-item')

		rooms.forEach((el) => {
			const minPerSlide = 3
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = rooms[0]
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
/*
// ---------------------------------------------------------------- CAROUSEL ----------------------------------------------------------------
// GLOBAL SCOPES ----------------------------------------------------------------
const mainContainer = document.getElementById('mainContainer');

const creationCarousel = () => {
    // Creazione di un elemento div padre con la classe 'row'
    const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

    // Creazione di un elemento div figlio con le classi specificate
    const colDiv = document.createElement('div');
        colDiv.classList.add('my-3', 'col-lg-2', 'col-md-3', 'col-sm-6', 'col-12');

    // Creazione di un elemento div figlio con l'id 'carousel' e le classi specificate
    const carouselDiv = document.createElement('div');
        carouselDiv.setAttribute('id', 'carousel');
        carouselDiv.classList.add('carousel', 'slide');

        // Aggiunta dei div figli al div padre
        rowDiv.appendChild(colDiv);
        colDiv.appendChild(carouselDiv);

        // Aggiunta del div padre (con i div figli annidati) a mainContainer
        mainContainer.appendChild(rowDiv);

    // Creazione dell'indicatore del carousel
    const carouselInner = document.createElement('div');
        carouselInner.classList.add('carousel-inner');
        carouselInner.setAttribute('role', 'listbox');
        carouselInner.setAttribute('id', 'img-carousel');
        carouselDiv.appendChild(carouselInner);

    // Creazione di un elemento div per ogni immagine
    for (let i = 0; i < data.length; i++) {
        for (let k = 0; k < data[i].images.length; k++) {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item', i === 0 ? 'active' : ''); // Aggiungi la classe 'active' solo al primo elemento
        carouselInner.appendChild(carouselItem);

        const carouselCard = document.createElement('div');
        carouselCard.classList.add('card');
        carouselItem.appendChild(carouselCard);

        const carouselCardImg = document.createElement('div');
        carouselCardImg.classList.add('card-img');
        carouselCard.appendChild(carouselCardImg);

        // Assumi che 'data' sia un array di oggetti con la proprietà 'images' contenente un array di URL delle immagini.
        const images = data[i].images;

        // Aggiungi le immagini al carouselCard
        for (let j = 0; j < images.length; j++) {
            const img = document.createElement('img');
            img.src = images[j];
            img.alt = ''; // Puoi impostare un testo alternativo appropriato
            img.loading = 'lazy';
            img.classList.add('img-fluid', 'rounded', 'object-fit-cover');
            carouselCardImg.appendChild(img);
        }
    }
}
}
creationCarousel();

console.log(data[0].images.length);

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
*/
