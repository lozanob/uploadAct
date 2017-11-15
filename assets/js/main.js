
$(function () {
    'use strict';

    // Initialize the jQuery File Upload widget:
    $('#uploadFilePrioncipal').fileupload({
        url: 'server/php/',
        filesContainer: $('#uploadFilePrioncipal').find(".containerUploadFiles")
    });

    // Initialize the jQuery File Upload widget:
    $('#uploadFileAnnexes').fileupload({
        url: 'server/php/',
        filesContainer: $('#uploadFileAnnexes').find(".containerUploadFiles")
    });

    //Initialize the jQuery File Upload widget:
    $('#uploadFileassocies').fileupload({
        url: 'server/php/',
        filesContainer: $('#uploadFileassocies').find(".containerUploadFiles")
    });

    //Initialize the jQuery File Upload widget:
    $('#uploadFond').fileupload({
        url: 'server/php/',
        filesContainer: $('#uploadFond').find(".containerUp")
    });

});
