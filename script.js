let slideIndexMalaisie = 0;
let slideIndexAustralie = 0;

showSlides('malaisie');
showSlides('australie');

function showSlides(type) {
    let slides;
    if (type === 'malaisie') {
        slides = document.querySelectorAll("#malaisie-slideshow .mySlides");
    } else {
        slides = document.querySelectorAll("#australie-slideshow .mySlides");
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    if (type === 'malaisie') {
        slideIndexMalaisie++;
        if (slideIndexMalaisie > slides.length) { slideIndexMalaisie = 1; }
        slides[slideIndexMalaisie - 1].style.display = "block";  
        setTimeout(() => showSlides('malaisie'), 5000); // Change image every 5 seconds
    } else {
        slideIndexAustralie++;
        if (slideIndexAustralie > slides.length) { slideIndexAustralie = 1; }
        slides[slideIndexAustralie - 1].style.display = "block";  
        setTimeout(() => showSlides('australie'), 5000); // Change image every 5 seconds
    }
}

function plusSlides(n, type) {
    if (type === 'malaisie') {
        slideIndexMalaisie += n - 1; // Adjust for zero-based index
        showSlides('malaisie');
    } else {
        slideIndexAustralie += n - 1; // Adjust for zero-based index
        showSlides('australie');
    }
}
