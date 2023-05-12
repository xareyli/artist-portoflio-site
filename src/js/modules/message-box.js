
let messageBox;

$(document).on('DOMContentLoaded', function() {
    messageBox = $('.message-box')

    if (messageBox.length != 0) {
        $('.message-box__close').on('click', function() {
            messageBox.removeClass('message-box__shown');
        });
    }
})

export default function showMessageBox(title, message) {
    if (messageBox.length == 0) {
        console.error('Message box doesn\'t exist on the page!');
        return;
    }

    messageBox.addClass('message-box__shown');

    $(messageBox.find('.message-box__title')).text(title);
    $(messageBox.find('.message-box__text')).text(message);
}
