function storeBookmarks(bookmarks) {

    var value = JSON.stringify(bookmarks);
    localStorage.setItem('bookmarks', value);
}

function addBookmark(bookmark) {

    var bookmarks = getBookmarks();
    bookmarks.push(bookmark);
    storeBookmarks(bookmarks);
}

function deleteBookmark(url) {

    var bookmarks = getBookmarks();
    bookmarks = bookmarks.filter(function (bookmark) {
        return bookmark.url != url;
    });
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

        var html =
            '<li>' +
            '<a href="' + bookmark.url + '" target="_blank">' + bookmark.title + '</a>' +
            '<button class="delete-bookmark-btn" data-url="' + bookmark.url + '">削除</button>' +
            '</li>';
        $('#bookmarks-list').append(html);
    });

    $('.delete-bookmark-btn').click(function () {
        var url = $(this).data('url');
        deleteBookmark(url);
        displayBookmarks();
    });
}

function registerBookmark(title, url) {

    var bookmark = {
        url: url,
        title: title
    };
    addBookmark(bookmark);
    displayBookmarks();
}