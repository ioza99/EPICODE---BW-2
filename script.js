// function slideHome(id) {
//     let items = document.querySelectorAll(id + '.carousel .carousel-item')

//     items.forEach((el) => {
//         const minPerSlide = 1
//         let next = el.nextElementSibling
//         for (var i = 1; i < minPerSlide; i++) {
//             if (!next) {
//                 next = items[0]
//             }
//             let cloneChild = next.cloneNode(true)
//             el.appendChild(cloneChild.children[0])
//             next = next.nextElementSibling
//         }
//     })
// }

// let carousels = document.querySelectorAll('.carousel.slide');
// for (const carousel of carousels) {
//     let id = '#' + carousel.id
//     slideHome(id);
// }

let items = document.querySelectorAll('#iconCarousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 12;
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