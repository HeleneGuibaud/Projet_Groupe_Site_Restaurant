(function() {
    var slides = [
        {
            "id": "carousel-slide-1",
            "elem": document.getElementById("carousel-slide-1")
        },
        {
            "id": "carousel-slide-2",
            "elem": document.getElementById("carousel-slide-2")
        },
        {
            "id": "carousel-slide-3",
            "elem": document.getElementById("carousel-slide-3")
        },
        {
            "id": "carousel-slide-4",
            "elem": document.getElementById("carousel-slide-4")
        },
        {
            "id": "carousel-slide-5",
            "elem": document.getElementById("carousel-slide-5")
        },
        {
            "id": "carousel-slide-6",
            "elem": document.getElementById("carousel-slide-6")
        },
    ];

    function displaySlide(linkHref){
        slides.forEach(slide => {
            if(slide.id === linkHref){
                console.log(linkHref + " matches " + slide.id)
                slide.elem.style.display = "block";
            } else {
                console.log(linkHref + " does not matches " + slide.id)
                slide.elem.style.display = "none";
            }
        });
    };

    function applyEventListenersToClass(className) {
        Array.from( document.getElementsByClassName( className ) )
            .forEach( function( $lnk ) {
                $lnk.preventDefault
                $lnk.addEventListener( "click", function() {
                    displaySlide( $lnk.href.split('#')[1] );
                } );
            } );
    }

    displaySlide("carousel-slide-1");
    applyEventListenersToClass("carousel-prev");
    applyEventListenersToClass("carousel-next");
    applyEventListenersToClass("carousel-navigation-button");
})();
