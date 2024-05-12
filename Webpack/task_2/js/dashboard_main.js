import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';
// Counter for the number of clicks on the button
let count = 0;

// Function to update the counter and display it in the paragraph
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`)
}

// Function to add the HTML elements to the body of the document
function addDashboardElements() {
    $('body').append('<div id="logo"></div>');
    // Add the first paragraph
    $('body').append('<p>Holberton Dashboard</p>');
    // Add the second paragraph
    $('body').append('<p>Dashboard data for the students</p>');
    // Add the button
    $('body').append('<button id="startButton">Click here to get started</button>');
    // Add the paragraph with the id 'count'
    $('body').append('<p id="count"></p>');
    // Add the last paragraph
    $('body').append('<p>Copyright - Holberton School</p>');
    // Add the click event to the button with a 500 millisecond debounce
    $('#startButton').on('click', _.debounce(updateCounter, 500));
};

// Call the function to add the elements when loading the document
$(document).ready(function() {
    addDashboardElements();
});
