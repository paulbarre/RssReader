function getYqlRssUrl(url) {
    var yql_url = 'https://query.yahooapis.com/v1/public/yql?q='
        + encodeURIComponent('select * from feednormalizer where url="' + url + '"')
        + '&format=xml';
    return yql_url;
}

function download(url, onSuccess) {

    console.log('-- ダウンロード: ' + url);

    $.ajax({
        url: getYqlRssUrl(url),
        type: 'GET',
        dataType: 'xml',

        success: function(xmlData) {
            console.log('-- ダウンロードを成功しました。');

            // console.log(new XMLSerializer().serializeToString(xmlData));
            onSuccess(xmlData);
        },

        error: function() {
            console.log('-- ダウンロードを失敗しました。');
        }
    });
}