
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