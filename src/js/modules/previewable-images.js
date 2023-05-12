export default function previewableImagesInit() {
    const galleryImages = document.querySelectorAll('.js-previewable');
    const galleryPopup = $('.image-popup-preview');

    let currentImgId = -1;

    $('.js-previewable').on('click', function(e) {
        galleryImages.forEach((item, index) => item.isEqualNode(e.target) == true && (currentImgId = index));

        updateGalleryImage();
    });

    $('.image-popup-preview__close').on('click', function() {
        galleryPopup.removeClass('image-popup-preview__shown');
    });

    $('.image-popup-preview__arrows').on('click', function(e) {
        if ($(e.target).attr('data-direction') == 'left') {
            currentImgId -= 1;
        } else {
            currentImgId += 1
        }

        if (currentImgId < 0) currentImgId = 0;
        if (currentImgId >= galleryImages.length) currentImgId = galleryImages.length - 1;

        updateGalleryImage();
    });

    function updateGalleryImage() {
        const imgSrc = $(galleryImages.item(currentImgId)).attr('data-img-src');
        $('.image-popup-preview__image-wrapper img').attr('src', imgSrc);

        galleryPopup.addClass('image-popup-preview__shown');

        $('.image-popup-preview__image-wrapper').css('background-image', `url(${imgSrc})`);
    }
}
