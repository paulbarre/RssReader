function storeFavorites(favorites) {

    var value = JSON.stringify(favorites);
    localStorage.setItem('favorites', value);
}

function addFavorite(url) {

    var favorites = getFavorites();
    favorites.push(url);
    storeFavorites(favorites);
}

function getFavorites() {

    var value = localStorage.getItem('favorites');
    var favorites = JSON.parse(value);

    if (favorites == null)
        favorites = [];
    return favorites;
}

function displayFavorites() {

    $('#favorites-list').html('');

    var favorites = getFavorites();
    $.each(favorites, function (i, favorite) {

        var html = '<li>' + favorite.title + '<button class="download-btn" data-url="' + favorite.url + '">ダウンロード</button></li>';
        $('#favorites-list').append(html);
    });

    $('.download-btn').on('click', function () {

        var url = $(this).data('url');
        download(url, displayFeedResults);
    });
}

function registerFavorite(url) {

    download(url, function (xmlData) {

        var favorite = {
            url: url,
            title: $(xmlData).find('title:first').text(),
            link: $(xmlData).find('link:first').text(),
            description: $(xmlData).find('description:first').text()
        };

        console.log('-- 登録: ' + favorite.url);
        console.log('title: ' + favorite.title);
        console.log('link: ' + favorite.link);
        console.log('description: ' + favorite.description);

        // addFavorite(favorite);
        // displayFavorites();
    });
}