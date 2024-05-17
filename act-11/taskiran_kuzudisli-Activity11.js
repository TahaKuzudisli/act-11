$(document).ready(function() {
    $('#nav_list a').on('click', function(e) {
        e.preventDefault();

        var fileName = $(this).attr('title');
        var jsonFilePath = 'json_files/' + fileName + '.json';

        $.getJSON(jsonFilePath, function(data) {
            var speaker = data.speakers[0];

            $('main').empty();

            var htmlContent = `<h1>${speaker.title}</h1>
                               <img src="${speaker.image}" alt="${speaker.speaker}">
                               <h2>${speaker.month}<br>${speaker.speaker}</h2>
                               <p>${speaker.text}</p>`;

            $('main').html(htmlContent);
        }).fail(function() {
            console.log("Error: JSON file could not be loaded.");
        });
    });
});
