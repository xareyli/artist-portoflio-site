export default function dropdownMenusInit() {
    document.querySelectorAll('.dropdown-menu-holder').forEach(element => {
        element.addEventListener('mouseenter', onMouseEnter());
    });

    function onMouseEnter() {
        let elementIn = false;

        return function(e) {
            elementIn = true;
            const self = $(this);

            self.find('.dropdown-menu').addClass('dropdown-menu--shown');

            self.on('mouseleave', function() {
                elementIn = false;

                setTimeout(() => {
                    if (!elementIn) {
                        self.find('.dropdown-menu').removeClass('dropdown-menu--shown');
                    }
                }, 200);
            });
        }
    }
}
