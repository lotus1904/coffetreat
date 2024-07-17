// JavaScript to handle the scroll event and add/remove zoom class
var lastScrollTop = 0;
window.addEventListener('scroll', function() {
    var image = document.getElementById('zoomImage');
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;
    var currentScrollTop = window.scrollY;

    // Change this value as per your design needs
    var triggerHeight = 200; // Height where zoom effect triggers

    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        image.classList.add('image-zoom');
    } else {
        // Scrolling up
        image.classList.remove('image-zoom');
    }
    
    // Update last scroll position
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});


// JavaScript to handle the scroll event and add/remove zoom class and background color change
window.addEventListener('scroll', function() {
    var image = document.getElementById('zoomImage');
    var shadowBox = document.getElementById('shadowBox');
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;

    // Change this value as per your design needs
    var triggerHeight = 200; // Height where zoom effect triggers

    if (distanceY > triggerHeight) {
        image.classList.add('image-zoom');
        shadowBox.style.backgroundColor = '#f0e6d2'; // Example background color
    } else {
        image.classList.remove('image-zoom');
        shadowBox.style.backgroundColor = '#fff'; // Original background color
    }
});
