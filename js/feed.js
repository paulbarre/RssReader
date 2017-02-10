function displayFeedResults(xmlData) {

    $('#feed-articles').html('');

    var items = $(xmlData).find('item');
    items.each(function(n) {

        var title = $(this).find('title').text();
        var description = $(this).find('description').text();
        var link = $(this).find('link').text();

        var html =
            '<article>' +
            '<h3 class="article-title">' + title + '</h3>' +
            '<p>' + description + '</p>' +
            '<a href="' + link + '" target="_blank" class="see-article-link">See</a>' +
            '<button class="save-bookmark-btn">登録</button>' +
            '</article>';

        $('#feed-articles').append(html);
    });

    $('.save-bookmark-btn').on('click', function () {
        var article = $(this).parent();
        var title = article.find('.article-title').text();
        var url = article.find('.see-article-link').attr('href');

        registerBookmark(title, url);
    });
}