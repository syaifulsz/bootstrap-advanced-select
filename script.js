$(document).ready(function() {

    $('#btnDownloadTop').on('click', function() {
        _gaq.push(['_trackEvent', 'Bootstrap Advanced Select', 'Download', 'Button Download - Top']);
    });

    $('#btnDownloadBottom').on('click', function() {
        _gaq.push(['_trackEvent', 'Bootstrap Advanced Select', 'Download', 'Button Download - Bottom']);
    });

    // Chosen
    //==================================================================================================================

    $('.chosen-select-default').chosen({disable_search_threshold: 10});
    $('.chosen-select-search').chosen();

    // Select2
    //==================================================================================================================

    $('.select2-default').select2();

});