function displayFeedResults(xmlData) {

    $('#feed-articles').html('');

    var items = $(xmlData).find('item');
    items.each(function(n) {

        var title = $(this).find('title').text();
        var description = $(this).find('description').text();
        var link = $(this).find('link').text();

        var html =
            '<article>' +
            '<h3>' + title + '</h3>' +
            '<p>' + description + '</p>' +
            '<a href="' + link + ' target="_blank">See</a>' +
            '<button>登録</button>' +
            '</article>';

        $('#feed-articles').append(html);
    });
}