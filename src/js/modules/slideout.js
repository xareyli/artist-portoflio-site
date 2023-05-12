export default function startSlideout() {
    const panel = document.querySelector('.page');
    const menu = document.querySelector('.slide-menu');

    const slideout = new Slideout({
        'panel': panel,
        'menu': menu,
        'padding': 256,
        'tolerance': 70,
        'side': 'right',
    });

    $('.menu-button').on('click', () => slideout.toggle());
    $('.slide-menu__close-btn').on('click', () => slideout.close());
}
