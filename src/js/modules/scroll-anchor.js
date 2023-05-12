export default function scrollAnchorInit() {
    $('.scroll-down-link').on('click', function(e) {
        const fullscreen = e.target.closest('.fullscreen');

        const header = document.querySelector('.dynamic-header');

        $(document.documentElement).animate({
            scrollTop: fullscreen.offsetHeight - header.offsetHeight + 1,
        }, 500);
    });

    $('.top-anchor').on('click', function() {
        $(document.documentElement).animate({
            scrollTop: 0,
        }, 1000);
    });
}
