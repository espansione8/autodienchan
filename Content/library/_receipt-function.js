
$(document).ready(function () {

    BindDataGridGuest();

    $("input[name='qty']").TouchSpin({
        initval: 40,
        min: -1000000000,
        decimals: 2,
        step: 0.01
    });

    /* For selected Payment type */
    $(".r1 li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.ptSelectedR1').html(selText);
    });
    $(".r2 li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.ptSelectedR2').html(selText);
    });
    $(".r3 li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.ptSelectedR3').html(selText);
    });
    $(".r4 li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.ptSelectedR4').html(selText);
    });
    $(".r5 li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.ptSelectedR5').html(selText);
    });
    /* For selected Currency  */
    $(".currencyR1 li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.currencySelectedR1').html(selText);
    });
    $(".currencyR2 li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.currencySelectedR2').html(selText);
    });
    $(".currencyR3 li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.currencySelectedR3').html(selText);
    });
    $(".currencyR4 li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.currencySelectedR4').html(selText);
    });
    $(".currencyR5 li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.currencySelectedR5').html(selText);
    });


    $('input#chkDiscount').removeClass('checked');
    isCheckTotalDiscount();
    $('input#chkDiscount').change(function () {
        if ($('input#chkDiscount').is(':checked')) {
            $('#ctr1').addClass('hidden');
            $('#divAmount').addClass('hidden');
            $('#divPersent').removeClass('hidden');
        } else {
            $('#ctr1').removeClass('hidden');
            $('#divAmount').removeClass('hidden');
        }
    });
});


function ShowModalInRow() {
    $('#pageDiscount').modal('show');
    $('#ctrlBox').removeClass('hidden');
    $('#titleDis').html('Discount');
    $('#txtItem').html(' - Aroma Stone Masage');
    $('#titleTotalDiscount').html('Discount Method');
    $('#divPersent').addClass('hidden');
}

function isCheckTotalDiscount() {
    if ($('input#chkDiscount').is(':checked')) {
        $('#ctr1').addClass('hidden');
        $('#divAmount').addClass('hidden');
        $('#divPersent').removeClass('hidden');
    } else {
        $('#ctr1').removeClass('hidden');
        $('#divAmount').removeClass('hidden');
    }
}

function BindDataGridGuest() {
    gdMembershipModal = $("#gdMembershipModal").kendoGrid({
        dataSource: { pageSize: 15 },
        sortable: true,
        scrollable: true,
        selectable: true,
        groupable: false,
        pageable: true,
        columns: [
            {
                title: "",
                headerTemplate: "<input type='checkbox' id='chkSelectAllModal' />",
                template: "<input type=\"checkbox\" class='checkbox' />",
                width: "35px"
            },
             {
                 field: "AutoID",
                 title: "ID",
                 hidden: true
             },
                            {
                                field: "GuestNo",
                                title: "Guest No."

                            },
                            {
                                field: "GuestName",
                                title: "Guest Name"

                            },
                            {
                                field: "GuestType",
                                title: "Guest Type"

                            },
                            {
                                field: "JoinDate",
                                title: "Join Date",
                                template: "#= JoinDate == null ? '' : kendo.toString(kendo.parseDate(JoinDate, 'yyyy-MM-dd'), 'MM-dd-yyyy') #"

                            },
                            {
                                field: "MembershipMobile",
                                title: "Mobile"

                            },
                            {
                                field: "MembershipEmail",
                                title: "Email"

                            }

        ]
    }).data("kendoGrid");

}

function ReceiptManagement() {
    var url = '@Url.Action("iPOS", "Home")';
    window.location.href = url;
}
