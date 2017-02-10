function storeBookmarks(bookmarks) {

    var value = JSON.stringify(bookmarks);
    localStorage.setItem('bookmarks', value);
}

function addBookmark(url) {

    var bookmarks = getBookmarks();
    bookmarks.push(url);
    storeBookmarks(bookmarks);
}

function getBookmarks() {

    var value = localStorage.getItem('bookmarks');
    var bookmarks = JSON.parse(value);

    if (bookmarks == null)
        bookmarks = [];
    return bookmarks;
}

function displayBookmarks() {

    $('#bookmarks-list').html('');

    var bookmarks = getBookmarks();
    $.each(bookmarks, function (i, bookmark) {

        var html = '<li><a href=""></a>' + bookmark.title + '</li>';
        $('#bookmarks-list').append(html);
    });

    $('.download-btn').on('click', function () {

        var url = $(this).data('url');
        download(url, displayFeedResults);
    });
}

function registerBookmark(url, title) {

    var bookmark = {
        url: url,
        title: title
    };
    addBookmark(bookmark);
}