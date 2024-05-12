import $ from "jquery";


$(document).ready(function() {
    var parrafo1 = $("<p>").text("Holberton Dashboard");
    var parrafo2 = $("<p>").text("Dashboard data for the students");
    var parrafo3 = $("<p>").text("Copyright - Holberton School");

    $("body").append(parrafo1, parrafo2, parrafo3);
});