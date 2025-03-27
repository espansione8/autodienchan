var items = [];
var itemsBack = [];
var iTotalItem = 3;
var iTotalItemSplit = 0;

$(document).ready(function () {
    $('#pDetails tbody tr').on('click', function (e) {
        var el = $("#iPOSDetail");
        el.block({
            overlayCSS: {
                backgroundColor: '#fff'
            },
            message: '<img src="/Content/assets/images/dataloading.gif" />',
            css: {
                border: 'none',
                color: '#333',
                background: 'none'
            }
        });

        var sStatus = $(this).find("td:eq(2) div").html();

        if (sStatus == 'Open') {
            $('.panel-title').html('Status -&nbsp;' + ' <div class="label label-success">' + sStatus + '</div>');
            $('#cSplit').removeClass('hidden col-md-2').addClass('col-md-3');
            $('#cMerge').removeClass('hidden col-md-2').addClass('col-md-3');
            $('#cPrint').addClass('col-md-3').removeClass('col-md-2');
            $('#cPOS').addClass('col-md-3').removeClass('col-md-2');
            $('#cVoid').addClass('hidden');
        }
        else
            if (sStatus == 'Closed') {
                $('.panel-title').html('Status -&nbsp;' + ' <div class="label label-danger">' + sStatus + '</div>');
                $('#cPrint').addClass('col-md-4').removeClass('col-md-3 col-md-2');
                $('#cPOS').addClass('col-md-4').removeClass('col-md-3 col-md-2');
                $('#cVoid').removeClass('hidden col-md-2').addClass('col-md-4');
                $('#cSplit').addClass('hidden');
                $('#cMerge').addClass('hidden');
            }
        window.setTimeout(function () {
            el.unblock();
        }, 300);

    });

    $('#btnOkSelected').click(function () {
        $('#pageMerge').modal('hide');
        $('#pageSplit').modal('show');
        $('.modal-title').html('Merge Receipt');
    });
    $('#btnSplit').click(function () {

        $('#pageSplit').modal('show');
        $('.modal-title').html('Split Receipt');
        if ($('.modal-header').is('.title-merge, .title-void')) {
            $('.modal-header').removeClass('title-merge title-void').addClass('title-split');
        }
        else {
            $('.modal-header').addClass('title-split');
        }
    });

    $('#btnMerge').click(function () {
        $('#pageMerge').modal('show');
        $('.modal-title').html('Select Receipt To Merge');
        if ($('.modal-header').is('.title-split, .title-void')) {
            $('.modal-header').removeClass('title-split title-void').addClass('title-merge');
        }
        else {
            $('.modal-header').addClass('title-merge');
        }
    })

   

    $('#rptItem tbody tr').on('click', function (e) {
        var newTr = $(this).closest("tr").clone();
        $(this).remove();
        var sCurrent = iTotalItem - 1;
        iTotalItem = sCurrent;
        var sCurrentPlit = iTotalItemSplit + 1
        iTotalItemSplit = sCurrentPlit;
        $('#totalItem').html(sCurrent);
        $('#totalItemSplit').html(sCurrentPlit);
        items.push(newTr);
        newTr.appendTo($("#rptSplit"));
    });

    $('#rptSplit tbody tr').on('click', function (e) {

        var newTrs = $(this).closest("tr").clone();

        itemsBack.push(newTrs);

        newTrs.appendTo($("#rptItem"));
    });
    $('#lstReceipt  tbody tr').on('click', function (e) {
        var receiptNo = $(this).find("td").eq(1).html();
        $('#lblReceiptSelect').html(receiptNo);
    });

    $('.info-data h4 a').on('click', function (e) {
        $('#pageSplit').modal('hide');
        $('#pageSearchGuest').modal('show');
        $('.modal-title').html('Search Guest');

    });

    $('#cmdSearchGuest').on('click', function (e) {
        $('#pageSplit').modal('show');
        $('.modal-title').html('Split Receipt');
        $('#pageSearchGuest').modal('hide');
    });
    $('#cmdCloseSearchGuest').on('click', function (e) {
        $('#cmdSearchGuest').trigger('click');
    });
    $('#btnBackItem').click(function () {
        $('#itemCollection').addClass('itemlst');
        $('#lstItem').removeClass('itemlst');
        $('#btnBackItem').addClass('hidden');
    })
});


function NewBooking() {
    var url = '@Url.Action("Booking", "GRReservation")';
    window.location.href = url;
}





