import turnWebp from "./modules/functions.js"
import "./libs/slick.js"
import "./libs/slideout.min.js"
import startSlideout from "./modules/slideout.js"
import previewableImagesInit from "./modules/previewable-images.js"
import showMessageBox from "./modules//message-box.js"
import dropdownMenusInit from "./modules/dropdown-menu.js"
import scrollAnchorInit from "./modules/scroll-anchor.js"


function ibg() {
    let ibg = document.querySelectorAll(".ibg");

    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}

function dynamicHeader() {
    const dynamicHeader = document.querySelector('.dynamic-header');

    if (!dynamicHeader) {
        return;
    }

    document.addEventListener('scroll', function(e) {
        if (window.pageYOffset > 200) {
            dynamicHeader.classList.remove('dynamic-header--hidden');
        } else {
            dynamicHeader.classList.add('dynamic-header--hidden');
        }
    });
}

$(document).on('DOMContentLoaded', function() {
    turnWebp();
    ibg();
    dynamicHeader();
    startSlideout();
    previewableImagesInit();
    dropdownMenusInit();
    scrollAnchorInit();

    $('a[href="/blog.html"]').on('click', function(e) {
        e.preventDefault()
    
        showMessageBox('Attention.', 'Comming soon :)');
    });

    window.addEventListener('load', function() {
        document.querySelector('body').classList.remove('preload');
    });

    setTimeout(() => {
        $('.preloader').addClass('preloader--done');
    }, 450);
});
