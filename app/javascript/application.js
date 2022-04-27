// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "semantic-ui"
import "./channels/index"

window.scroll_bottom = function() {
    if ($('#messages').length > 0) {
        $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
}


document.addEventListener("turbo:load", () => {
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {$(this).closest('.message').transition('fade');});
    scroll_bottom()
});
