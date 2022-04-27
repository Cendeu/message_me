// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "semantic-ui"
import "./channels/index"

window.scroll_bottom = function() {
    if ($('#messages').length > 0) {
        $('#messages').scrollTop($('#messages')[0].scrollHeight);
    };
};

const clear_on_submit = function() {
    document.getElementById('new_message').addEventListener('turbo:submit-start', (e) => {
        document.getElementById('message_body').value = '';
        console.log(e);
    });
};


document.addEventListener("turbo:load", () => {
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {$(this).closest('.message').transition('fade');});
    scroll_bottom();
    clear_on_submit();

});
