import $ from 'jquery';
import './header.css';

$(document).ready(function() {
    // Create the <header> tag
    var headerElement = $('<header></header>');

    // Add the content to the header
    headerElement.prepend('<h1>Holberton Dashboard</h1>');
    headerElement.prepend('<div id="logo"></div>');
    
    // Add the header before the first element in the document
    $('body').before(headerElement);

    console.log('Init header');
});
