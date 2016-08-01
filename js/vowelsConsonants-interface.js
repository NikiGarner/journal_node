var Entry = require('./../js/vowelsConsonants.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var entry = new Entry(title, body);
    var answer = entry.vowelsConsonants(body);
    $('#solution').prepend("<p>" + answer + "</p>");
  });
});
