$(document).ready(function () {

    $('#add-favorite-form').on('submit', function (event) {
        event.preventDefault();
        var url = $(this).find('input[name="add-favorite-url"]').val();
        registerFavorite(url);
    });

    $('#feed-filter').on('input', function () {

        var word = $(this).val();
        filterFeed(word);
    });

    displayFavorites();
    displayBookmarks();
});