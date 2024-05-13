import $ from 'jquery';
import './footer.css';

$(document).ready(function() {
    // Create the <footer> tag
    var footerElement = $('<footer></footer>');

    // Add the content to the footer
    footerElement.prepend('<p>Copyright - Holberton School</p>');

    // Add the footer after the last element in the document
    $('body').after(footerElement);
});
