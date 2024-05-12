import $ from 'jquery';

$(document).ready(function() {
  const parrafo1 = $('<p>').text('Holberton Dashboard');
  const parrafo2 = $('<p>').text('Dashboard data for the students');
  const parrafo3 = $('<p>').text('Copyright - Holberton School');

  $('body').append(parrafo1, parrafo2, parrafo3);
});
