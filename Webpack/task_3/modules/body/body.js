import $ from 'jquery';
import _ from 'lodash';
import './body.css';


let count = 0;

// Function to update the counter and display it in the paragraph
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`)
}

    // Add the button
    $('body').append('<button id="startButton">Click here to get started</button>');
    // Add the paragraph with the id 'count'
    $('body').append('<p id="count"></p>');
    // Add the click event to the button with a 500 millisecond debounce
    $('#startButton').on('click', _.debounce(updateCounter, 500))



