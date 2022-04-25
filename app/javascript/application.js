// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "semantic-ui"



document.addEventListener("turbo:load", () => {
    
    $('.ui.dropdown').dropdown();
});

document.addEventListener("turbo:load", () => {
    $('.message .close').on('click', function() {$(this).closest('.message').transition('fade');});
});