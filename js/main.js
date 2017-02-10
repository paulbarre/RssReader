$(document).ready(function () {
    var feed_url = 'http://feeds.feedburner.com/hatena/b/hotentry';
    // var feed_url = 'http://www.commitstrip.com/fr/feed/';

    // download(feed_url, displayFeedResults);

    $('#add-favorite-form').on('submit', function (event) {
        event.preventDefault();
        var url = $(this).find('input[name="add-favorite-url"]').val();
        registerFavorite(url);
    });

    displayFavorites();
    displayBookmarks();
});