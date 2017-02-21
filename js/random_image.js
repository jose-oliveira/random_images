/**
 * @file
 */
(function () {

    "use strict";

    function random_image(image) {
        var srcs = image.dataset.randomSrcs.split(",");
        var randomIndex = Math.floor(Math.random() * (srcs.length - 1));
        image.src = srcs[randomIndex];
    }

    var images = document.querySelectorAll(".random-image");
    for (var i = 0; i < images.length; i++) {
       random_image(images[i]);
    }

})();