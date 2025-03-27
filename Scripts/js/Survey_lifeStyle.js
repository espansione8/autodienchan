
var iCurrent = 2;
var iGetValue = 0;
var i;
var nametype;
var inumQues = 0;

function add_menu() {
    //var icount = $('#questions' + iGroup).children().length;
    var icount = $('.survey-page-body').find('.question_row').length;
    if (icount == 0) {
        inumQues = 1;
    }
    else {
        icount++;
        inumQues = icount;
    }

    var content_ques = $(document.createElement('div')).attr("id", 'tab_ContentEdit' + inumQues);
    content_ques.addClass("bgContentTab row padd0");
    content_ques.after().html('<div class="ContentQues col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0">' +
                                '<p class="qNumType"><strong>Q<span id="numberofQues' + inumQues + '" class="questionPos">' + inumQues + '</span>:</strong><span id="categoryQues' + inumQues + '">Multiple Choice</span></p>' +
                                '<input type="text" class="editinput" id="txtQuesmain' + inumQues + '" placeholder="Enter your question" ></div>' +/*onfocus="Editor_Control(' + inumQues + ')" onblur="onblur_Control(' + inumQues + ')"*/
                                '<div id="ContentAnser' + inumQues + '" class="ContentAnser col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0"><div class="titleAnswer"><strong>Answer Choices</strong></div>' +
                                '<div id="divContentAnser' + inumQues + '1" class="rowQues col-xs-12 col-sm-12 col-md-12 col-lg-12 ">' +
                                ' <div class="choiceType col-xs-1 col-sm-1 col-md-1 col-lg-1 padd0 ">' +
                                '<input type="radio" name="btnRadio" id="btnradio' + inumQues + '1" disabled /></div>' +
                                '<div class="choiceText col-xs-10 col-sm-10 col-md-10 col-lg-10 padd0">' +
                                '<input type="text" class="editinput" name="txtradio' + inumQues + '" id="txtradio' + inumQues + '1" placeholder="Enter an answer choice" /></div>' +
                                '<div class="choiceActions col-xs-2 col-sm-2 col-md-2 col-lg-2 padd0 ">' +
                                '<a class="btnAR btnAdd" href="javascript:AddControl2();" id="btnAdd' + inumQues + '"><span class="glyphicon glyphicon-plus"></span></a></div></div>' +
                                '<div id="divContentAnser' + inumQues + '2" class="rowQues col-xs-12 col-sm-12 col-md-12 col-lg-12 "><div class="choiceType col-xs-1 col-sm-1 col-md-1 col-lg-1 padd0 ">' +
                                '<input type="radio" name="btnRadio" id="btnradio' + inumQues + '2" disabled /></div>' +
                                '<div class="choiceText col-xs-10 col-sm-10 col-md-10 col-lg-10 padd0"><input type="text" class="editinput" name="txtradio' + inumQues + '" id="txtradio' + inumQues + '2" placeholder="Enter an answer choice" /></div>' +
                                '<div class="choiceActions col-xs-2 col-sm-2 col-md-2 col-lg-2 padd0"><a class="btnAR btnAdd" href="javascript:AddControl2();" id="btnAdd' + inumQues + '"><span class="glyphicon glyphicon-plus"></span></a></div></div></div>' +
                                '<div class="changeRadCheck col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0"><input id="chkradiotoCheckbox" onchange="TickAll()"  name="RadiotoCheckbox" type="checkbox" /><span class="pageSubtitleLabel">Allow more than one answer to this question (use checkboxes)</span></div>' +

                                '<div id="Group_ques" class="Group_ques col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0">' +
                                '<div id="List_group"></div>' +
                                '<div id="divchangeRadCheck" class="changeRadCheck col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0" style="border:none;">' +
                                '<input type="checkbox" name="ChkCreatenewdagn_group" id="ChkCreatenews_g" onchange="onchange_CreateGroup();">' +
                                '<span class="pageSubtitleLabel">Do you want to create a new Category Group?</span></div>' +
                                '<div id="Create_group_ques" class="Create_group_ques col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0 hidden">' +
                                '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 padd0">' +
                                '<input type="text" class="editinput" id="txtnew_Group" placeholder="Enter your group a name."></div>' +
                                '<div class="btnCreate_group col-xs-6 col-sm-6 col-md-6 col-lg-6 padd0 hidden"><a id="btnCreatenewGroup" class="logic-button k-button" onclick="Create_newgroup()" href="#"><span class="iconspan glyphicon glyphicon-plus"></span>' +
                                '<span class="textspan">Create</span></a><label id="val_combo"></label></div></div>' +
                                '</div>' +
                                '<div id="Show_error" class="Show_error col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0"><p><lable id="lblShowerror"></label></p></div>' +
                                '<div class="btn">' +
                                '<a id="btnSaveAddNew" class="btn btnSave k-primary" href="javascript:save_createQues();">Save</a>' +
                                '<a id="btnCancelAddNew" class="btn btnCancel k-primary" href="javascript:btn_Cancel();" style="margin-left: 10px;">Cancel</a>' +
                                '</div>'
        );

    content_ques.appendTo("#tabstripEditQues-1");

    var List_group = $(document.getElementById('List_group'));

    //var inum_nameGroup = $('.survey-page-body').find('.name_group').length;
    //if (inum_nameGroup == 0) {
    //    List_group.addClass("List_group_ques col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0 hidden");
    //    List_group.after().html('<lable>Select Group: </label><input id="cbList_groupname">');
    //    namecb_Group = "";
    //}
    //else {
    List_group.addClass("List_group_ques col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0");
    List_group.after().html('<span class="pageSubtitleLabel">Select Group: </span><input id="cbList_groupname"><script>call_kendo();</script>');
    //}

    List_group.appendTo("#List_group");
    //call_kendo();
    $(document.getElementById('greeting_section')).addClass('hidden');
    $(document.getElementById('aboutyou')).addClass('hidden');
    $(document.getElementById('appofday')).addClass('hidden');
    $(document.getElementsByClassName('survey-page-body')).addClass('hidden');
    $('#Show_error').addClass("hidden");
};

function getReture_Alltype(e) {
    var val_label = $('#lblradio' + e).text; //get text of label of input
    $('#choice_Text' + e + ' .row_choiseanswer input').each(function () {

        var $textBox = $(this);
        var idcontrol = $textBox.attr("id"); //get id of input
        var regex = /\d+/;
        var obj_txtinput = $textBox.val();
        var myArray = idcontrol.match(regex);
        var type_choise = $textBox.attr('type');

        alert('type choise' + e + ': ' + type_choise + ", value=" + val_label);
        //if (obj_txtinput != '') {
        //    if (type_choise == "checkbox") {
        //        content_Choise.append('<div class="row_choiseanswer col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0"><p>' +
        //                                '<input type="' + type_choise + '" name="btncheckbox' + myArray + '" id="btncheckbox' + myArray + '" />' +
        //                                '<lable id="lblcheckbox' + myArray + '" class="lableradio" for="btncheckbox' + myArray + '">' + obj_txtinput + '</lable>' +
        //                                '</p></div>');
        //    }
        //    else {
        //        content_Choise.append('<div class="row_choiseanswer col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0"><p>' +
        //                              '<input type="' + type_choise + '" name="btnradio' + inumQues + '" id="btnradio' + myArray + '" />' +
        //                              '<lable  id="lblradio' + myArray + '" class="lableradio" for="btnradio' + myArray + '">' + obj_txtinput + '</lable>' +
        //                              '</p></div>');
        //    }
        //}
    });
}

function add_menu_e(e) {

    $(document.createElement('div')).attr("id", 'tab_ContentEdit' + e).remove();
    var val_Q_e = $('#Q' + e).text();
    var count_numQues_added = $('#choice_Text' + e).find('.row_choiseanswer').length;//number of input added
    var type_checked = $('#type_choise' + e).text();
    var number_answer = $('#numrow' + e).text();
    var type_input = $('#choice_Text' + e + ' .row_choiseanswer input').attr('type');//type input :radio or checkbox

    var contentquesEdit = $(document.createElement('div')).attr("id", 'tab_ContentEdit' + e);
    contentquesEdit.addClass("bgContentTab row padd0");
    contentquesEdit.after().html('<div class="ContentQues col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0">' +
                                '<p class="qNumType"><strong>Q<span id="numberofQues' + e + '" class="questionPos">' + e + '</span>:</strong><span id="categoryQues' + e + '">Multiple Choice</span></p>' +
                                '<input type="text" class="editinput" id="txtQuesmain' + e + '" value="' + val_Q_e + '" onfocus="Editor_Control(' + e + ')" onblur="onblur_Control(' + e + ')"></div>' +

                                '<div id="ContentAnser' + e + '" class="ContentAnser col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0">' +
                                '<div class="titleAnswer"><strong>Answer Choices</strong></div>' +
                                /*insert here*/
                                '<div id="question-body">' +

                                '</div></div>' +

                                '<div id="Group_ques" class="Group_ques col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0">' +
                                '<div id="List_group"></div>' +
                                '<div id="divchangeRadCheck" class="changeRadCheck col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0" style="border:none;">' +
                                '<input type="checkbox" name="ChkCreatenewdagn_group" id="ChkCreatenews_g" onchange="onchange_CreateGroup();">' +
                                '<span class="pageSubtitleLabel">Do you want to create a new Category Group?</span></div>' +
                                '<div id="Create_group_ques" class="Create_group_ques col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0 hidden">' +
                                '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 padd0">' +
                                '<input type="text" class="editinput" id="txtnew_Group" placeholder="Enter your group a name."></div>' +
                                '<div class="btnCreate_group col-xs-6 col-sm-6 col-md-6 col-lg-6 padd0 hidden"><a id="btnCreatenewGroup" class="logic-button k-button" onclick="Create_newgroup()" href="#"><span class="iconspan glyphicon glyphicon-plus"></span>' +
                                '<span class="textspan">Create</span></a><label id="val_combo"></label></div></div>' +
                                '</div>' +
                                '<div id="Show_error" class="Show_error col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0"><p><lable id="lblShowerror"></label></p></div>' +

                                '<div class="btn">' +
                                '<a id="btnSaveAddNew" class="btn btnSave k-primary" href="javascript:btn_Save();">Save</a>' +
                                '<a id="btnCancelAddNew" class="btn btnCancel k-primary" href="javascript:btn_Cancel();" style="margin-left: 10px;">Cancel</a>' +
                                '</div>'
        );
    contentquesEdit.appendTo("#tabstripEditQues-1");
    var contentChoise = $(document.createElement('div'));
    if (type_checked == "checkbox") {
        for (i = 1; i <= number_answer; i++) {
            var val_anser = $('#lblcheckbox' + e + i).text();
            contentChoise.attr('id', 'divContentAnser' + e + i);
            contentChoise.addClass("rowQues col-xs-12 col-sm-12 col-md-12 col-lg-12");
            contentChoise.after().html('<div class="choiceType col-xs-1 col-sm-1 col-md-1 col-lg-1 padd0 ">' +
                                '<input type="' + type_checked + '" value="" id="btnRadio' + e + i + '" class="class_radiocheck" disabled="" name="btnRadio">' +
                                '</div><div class="choiceText col-xs-10 col-sm-10 col-md-10 col-lg-10 padd0">' +
                                '<input type="text" value="' + val_anser + '" id="txtradio' + e + i + '" name="txtradio' + i + '" class="editinput">' +
                                '</div>' +
                                '<div class="choiceActions col-xs-2 col-sm-2 col-md-2 col-lg-2 padd0 ">' +
                                '<a href="javascript:AddControl2();" class="btnAR btnAdd" id="btnAdd' + e + i + '">' +
                                '<span class="glyphicon glyphicon-plus"></span></a>' +
                                '<a href="javascript:RemoveControl(' + e + ');" class="btnAR btnRemove" id="btnRemove' + e + i + '">' +
                                '<span class="glyphicon glyphicon-remove"></span></a>' +
                                '</div>');

        }
    }
    else {
        for (i = 1; i <= number_answer; i++) {
            var val_ansers = $('#lblradio' + e + i).text();
            contentChoise.attr('id', 'divContentAnser' + e + i);
            contentChoise.addClass("rowQues col-xs-12 col-sm-12 col-md-12 col-lg-12");
            contentChoise.after().html('<div class="choiceType col-xs-1 col-sm-1 col-md-1 col-lg-1 padd0 ">' +
                                 '<input type="' + type_checked + '" value="" id="btnRadio' + e + i + '" class="class_radiocheck" disabled="" name="btnRadio">' +
                                 '</div>' +
                                 '<div class="choiceText col-xs-10 col-sm-10 col-md-10 col-lg-10 padd0">' +
                                 '<input type="text" value="' + val_ansers + '" id="txtradio' + e + i + '" name="txtradio' + i + '" class="editinput">' +
                                 '</div>' +
                                 '<div class="choiceActions col-xs-2 col-sm-2 col-md-2 col-lg-2 padd0 ">' +
                                 '<a href="javascript:AddControl2();" class="btnAR btnAdd" id="btnAdd' + e + i + '">' +
                                 '<span class="glyphicon glyphicon-plus"></span></a>' +
                                 '<a href="javascript:RemoveControl(' + e + ');" class="btnAR btnRemove" id="btnRemove' + e + i + '">' +
                                 '<span class="glyphicon glyphicon-remove"></span></a>' +
                                 '</div>');

        }
    }

    contentChoise.append("#question-body");
    $('#Show_error').addClass("hidden");
}



var data_namegroup = [{ text: "Group Default", value: "0" }];
var name_group_cb;
var val_name = 0;
var index_nameGroup = 0;
function Create_newgroup() {
    if (namenew_Group != '') {
        var iarray = { text: namenew_Group, value: val_name };
        data_namegroup.push(iarray);
        index_nameGroup++;
    }
};

function call_kendo() {
    $("#cbList_groupname").kendoComboBox(
        {
            //placeholder: "Select...",
            dataTextField: "text",
            dataValueField: "value",
            filter: "startswith",
            select: onSelect_nameGroup,
            change: onChange_nameGroup,
            dataSource: data_namegroup,
            index: index_nameGroup
        });
};
var index_change;
function onSelect_nameGroup(e) {
    var ChkCreatenews_g = document.getElementById("ChkCreatenews_g");
    if (ChkCreatenews_g.checked) {
        ChkCreatenews_g.checked = false;
        $("#Create_group_ques").addClass("hidden");
        $(document.getElementById('txtnew_Group')).val("");
    }
    var dataItem = this.dataItem(e.item.index());
    $(document.getElementById('val_combo')).val(dataItem.text);
    namecb_Group = $(document.getElementById('val_combo')).val();
    index_change = e.item.index();
};
function onChange_nameGroup(e) {
    index_nameGroup = index_change;
}

function Edit_question(e) {
    $('#tabstripEditQues-1').empty();
    add_menu_e(e);

    var lblTittleAddQues = $(document.getElementById('lblTittleAddQues'));
    var icon_spanadd = $(document.getElementById('icon_spanadd'));
    lblTittleAddQues.text("Edit question");
    lblTittleAddQues.css({ "font-weight": "bold" });
    icon_spanadd.removeClass("glyphicon glyphicon-plus");
    icon_spanadd.addClass("glyphicon glyphicon-edit");

    $('#editQuestion').removeClass("hidden");
    $('#Ques_option' + e).addClass("hidden");
    $(document.getElementById('greeting_section')).removeClass('hidden');
    $(document.getElementById('aboutyou')).removeClass('hidden');
    $(document.getElementById('appofday')).removeClass('hidden');
    $(document.getElementsByClassName('survey-page-body')).removeClass('hidden');

}
function Delete_question(e) {
    var main_showdialog = $(document.getElementById('main_showdialog'));
    main_showdialog.removeClass('hidden');
    var btn_del = $(document.getElementById('btn_Delete_del'));
    var btn_cal = $(document.getElementById('btn_Cancel_del'));

    if (btn_del.click) {
        $('#questions' + e).empty();
        main_showdialog.addClass('hidden');
    }
    if (btn_cal.click) {
        main_showdialog.addClass('hidden');
    }
}

/*hover show edit question*/
function Hover_showhide(e) {
    $('#question-container' + e).addClass("editor_Ques_hover");
    $('#Ques_option' + e).removeClass("hidden");
}

function Outhover_showhide(e) {
    $('#question-container' + e).removeClass("editor_Ques_hover");
    $('#Ques_option' + e).addClass("hidden");
}
/*end */

/*hover show edit label group*/
function OnHover_showlblGroup(e) {
    $('#name_group' + e).removeClass("name_group");
    $('#name_group' + e).addClass("editor_lblGroup_hover");
    $('#lblGroup_option' + e).removeClass("hidden");
}

function OutHover_showlblGroup(e) {
    $('#name_group' + e).removeClass("editor_lblGroup_hover");
    $('#name_group' + e).addClass("name_group");
    $('#lblGroup_option' + e).addClass("hidden");
}
/*end */

/*hover question-container*/
function Editor_Control(e) {
    $('#txtQuesmain' + e).kendoEditor();
    $('#txtQuesmain' + inumQues).removeAttr('style', 'border: 1px solid red;');
    $('#Show_error').addClass('hidden');
    $('#Show_error').removeClass('animated left in bounce');

}
function onblur_Control(e) {
    //$('#txtQuesmain' + e).kendoEditor().attr('contenteditable', false);

}
/*end hover question-container*/
function TickAll() {
    var checkrad = document.getElementById('chkradiotoCheckbox');
    var radios = document.getElementsByName('btnRadio');
    //var checkStatus = $("#chkradiotoCheckbox").is(":checked");
    if (checkrad.checked) {
        for (i = 0; i < radios.length; i++) {
            radios[i].type = "checkbox";
        }
        type_choise = "checkbox";
        nametype = "btnRadio" + inumQues;
    }
    else {
        for (i = 0; i < radios.length; i++) {
            radios[i].type = "radio";
        }
        type_choise = "radio";
        nametype = "btnRadio";
    }
}
function RemoveControl(e) {
    $('#divContentAnser' + inumQues + e).remove();
}
function AddControl() {
    if (iCnt <= 100) {
        iCnt++;
        var newdivbox = $(document.createElement('div')).attr("id", 'divContentAnser' + inumQues + iCnt);
        newdivbox.addClass("rowQues col-xs-12 col-sm-12 col-md-12 col-lg-12 ");
        newdivbox.after().html('<div class="choiceType col-xs-1 col-sm-1 col-md-1 col-lg-1 padd0 ">' +
                               '<input type="radio" name="btnRadio" disabled="" id="btnRadio' + inumQues + iCnt + '" value="" /> </div>' +
                               '<div class="choiceText col-xs-10 col-sm-10 col-md-10 col-lg-10 padd0">' +
                               '<input class="editinput" type="text" name="txtradio' + iCnt + '" id="textbox' + inumQues + iCnt + '" value="" placeholder="Enter an answer choice"></div>' +
                               '<div class="choiceActions col-xs-2 col-sm-2 col-md-2 col-lg-2 padd0 "><a id="btnAdd' + inumQues + iCnt + '" class="btnAR btnAdd" href="javascript:AddControl2();"><span class="glyphicon glyphicon-plus"></span></a>' +
                               '<a id="btnRemove' + inumQues + iCnt + '" class="btnAR btnRemove" href="javascript:RemoveControl(' + iCnt + ');"><span class="glyphicon glyphicon-remove"></span></a></div>');
        newdivbox.appendTo("#ContentAnser");
    }
}
var numrow = 2;
function AddControl2() {
    if (iCurrent <= 100) {
        iCurrent++;
        var new_rowanswer = $(document.createElement('div')).attr("id", 'divContentAnser' + inumQues + iCurrent);
        new_rowanswer.addClass("rowQues col-xs-12 col-sm-12 col-md-12 col-lg-12 ");
        new_rowanswer.after().html('<div class="choiceType col-xs-1 col-sm-1 col-md-1 col-lg-1 padd0 ">' +
                               '<input type="radio" name="btnRadio" disabled="" class="class_radiocheck" id="btnRadio' + inumQues + iCurrent + '" value="" /></div>' +
                               '<div class="choiceText col-xs-10 col-sm-10 col-md-10 col-lg-10 padd0">' +
                               '<input class="editinput" type="text" name="txtradio' + iCurrent + '" id="txtradio' + inumQues + iCurrent + '" value="" placeholder="Enter an answer choice"></div>' +
                               '<div class="choiceActions col-xs-2 col-sm-2 col-md-2 col-lg-2 padd0 ">' +
                               '<a id="btnAdd' + inumQues + iCurrent + '" class="btnAR btnAdd" href="javascript:AddControl2();"><span class="glyphicon glyphicon-plus"></span></a>' +
                               '<a id="btnRemove' + inumQues + iCurrent + '" class="btnAR btnRemove" href="javascript:RemoveControl(' + iCurrent + ');"><span class="glyphicon glyphicon-remove"></span></a></div>');
    }
    new_rowanswer.appendTo(".ContentAnser");
    numrow++;
    TickAll();
}

/*btn Save and Cancel add new Question*/
/*Menu click*/
var color_selected, colorGreeting_selected;
var align_selected, alignselected;
var color_textGrouptitle, backcolor_textGrouptitle;
function preview(e) {
    color_selected = e.value;
}
function setcolor_texttitle(e) {
    color_textselected = e.value;
    var txtGroup_Name = document.getElementById('txt_Name');
    txtGroup_Name.style.color = color_textselected;
}
function setcolor_Grouptitle(e) {
    color_textGrouptitle = e.value;
    var txtGroup_Name = document.getElementById('txtGroup_Name');
    txtGroup_Name.style.color = color_textGrouptitle;
}
function setBackcolor_Grouptitle(e) {
    backcolor_textGrouptitle = e.value;
    var txtGroup_Name = document.getElementById('txtGroup_Name');
    txtGroup_Name.style.backgroundColor = backcolor_textGrouptitle;
}
function seleceted_pickerGreeting(e) {
    colorGreeting_selected = e.value;
    var txtGroup_Name = document.getElementById('txt_Name');
    txtGroup_Name.style.backgroundColor = colorGreeting_selected;
}
function save_editTitleSurvey() {
    var Title_newNamePro = $('#txtName').val();
    $('#lblTitlePage').text(Title_newNamePro);
    $('#surveyTitleEditForm').addClass('hidden');
    $('.survey-page-body').removeClass('hidden');
    $('.btn-booter').removeClass('hidden');
    var btntitle_subSurver = document.getElementById('btntitle_subSurver');
    btntitle_subSurver.style.backgroundColor = color_selected;
    btntitle_subSurver.style.textAlign = align_selected;
    lblTitlePage.style.color = color_textselected;
};

function cancel_editTitleSurvey() {
    $('#surveyTitleEditForm').addClass('hidden');
    $('.survey-page-body').removeClass('hidden');
    $('.btn-booter').removeClass('hidden');
};


function onSelect_align(e) {
    var txtName = document.getElementById('txtName');
    var dataItem = this.dataItem(e.item.index());
    align_selected = dataItem.value;
    txtName.style.textAlign = align_selected;
};
var Groupalign_selected;

function onSelect_aligntitleGroup(e) {
    var txtGroup_Name = document.getElementById('txtGroup_Name');
    var dataItem = this.dataItem(e.item.index());
    Groupalign_selected = dataItem.value;
    txtGroup_Name.style.textAlign = Groupalign_selected;
};
function onSelect_alignGreeting(e) {
    var txtgreeting = document.getElementById('txtgreeting');
    var dataItem = this.dataItem(e.item.index());
    alignselected = dataItem.value;
    txtgreeting.style.textAlign = alignselected;
}

function save_editGreeting() {
    var con_newgreeting = $('#txtgreeting').val();
    $('#lblcontent_greeting').text(con_newgreeting);
    $('#greetingEditForm').addClass('hidden');
    var greeting_section = document.getElementById('greeting_section');
    greeting_section.style.backgroundColor = colorGreeting_selected;
    greeting_section.style.textAlign = alignselected;

};
function cancel_editGreeting() {
    $('#greetingEditForm').addClass('hidden');
};
function show_editGreeting() {
    $('#greeting_section').addClass("editor_Ques_hover");
    $('#Greeting_option').removeClass("hidden");

};
function Outhover_editGreeting() {
    $('#greeting_section').removeClass("editor_Ques_hover");
    $('#Greeting_option').addClass("hidden");
};

function show_editheader() {
    //$('#title_subSurvey').addClass("editor_Ques_hover");
    $('#page-header-option').removeClass("hidden");
    $("#title_subSurvey").addClass('editor_Ques_hover');
};
function Outhover_editheader() {
    //$('#title_subSurvey').removeClass("editor_Ques_hover");
    $('#page-header-option').addClass("hidden");
    $("#title_subSurvey").removeClass('editor_Ques_hover');
};

function fEditHeader() {   /*Edit Titile*/
    var Title_NamePro = $('#lblTitlePage').text();
    $('#txtName').val(Title_NamePro);
    $("#surveyTitleEditForm").removeClass("hidden");
    $('#greetingEditForm').addClass('hidden');
    $("#editQuestion").addClass("hidden");
    $(".survey-page-body").addClass("hidden");
    /*End Edit Titile*/
};
var inum_idGroup;
/*Edit Titile group*/
function Edit_lblGroup(e) {
    var Title_NamePro = $('#lblnamegroup' + e).text();
    $('#txtGroup_Name').val(Title_NamePro);
    var e_align = $('#name_group' + e).css("text-align");
    var e_background = $('#name_group' + e).css("background-color");
    var e_color = $('#lblnamegroup' + e).css("color");
    $('#txtGroup_Name').attr('style', 'text-align:' + e_align);

    var e_aligns = $('#txtGroup_Name').css("text-align");
    if (e_aligns == "start") {
        $("#txtalign_titleGroup").data("kendoComboBox").value("Left Aligned");
    }
    else {
        $("#txtalign_titleGroup").data("kendoComboBox").value(e_aligns);
    }
    $("#picker_color_titleGroup").data("kendoColorPicker").value(e_color);
    $("#picker_Backcolor_titleGroup").data("kendoColorPicker").value(e_background);


    $('#TittleGroup_EditForm').removeClass('hidden');
    $("#surveyTitleEditForm").addClass("hidden");
    $('#greetingEditForm').addClass('hidden');
    $("#editQuestion").addClass("hidden");
    $(".survey-page-body").addClass("hidden");
    $('.btn-booter').addClass("hidden");
    inum_idGroup = e;


};
/*End Edit Titile group*/
function save_editTitleGroup() {

    var Title_newgroup = $('#txtGroup_Name').val();
    $('#lblnamegroup' + inum_idGroup).text(Title_newgroup);

    $('#TittleGroup_EditForm').addClass('hidden');
    $('.survey-page-body').removeClass('hidden');
    $('.btn-booter').removeClass('hidden');

    $('#name_group' + inum_idGroup).attr('style', 'background:' + backcolor_textGrouptitle + ';text-align:' + Groupalign_selected + ';');
    $('#lblnamegroup' + inum_idGroup).attr('style', 'color:' + color_textGrouptitle + ';');
};

function cancel_editTitleGroup(e) {
    $('#TittleGroup_EditForm').addClass('hidden');
    $('.survey-page-body').removeClass('hidden');
    $('.btn-booter').removeClass('hidden');
};

function fEditGreeting() {
    var content_greeting = $('#lblcontent_greeting').text();
    $('#txtgreeting').val(content_greeting);
    $("#greetingEditForm").removeClass("hidden");
    $('#surveyTitleEditForm').addClass('hidden');
    $("#editQuestion").addClass("hidden");
};
/*end menu click*/
function btn_Cancel() {
    $('#editQuestion').addClass("hidden");
    $(document.getElementById('greeting_section')).removeClass('hidden');
    $(document.getElementById('aboutyou')).removeClass('hidden');
    $(document.getElementById('appofday')).removeClass('hidden');
    $(document.getElementsByClassName('survey-page-body')).removeClass('hidden');
};




function onchange_CreateGroup() {
    var Chk_Createnew_group = document.getElementById("ChkCreatenews_g");
    var i_numGroup = $('.survey-page-body').find('.name_group').length;
    if (Chk_Createnew_group.checked) {
        $("#Create_group_ques").removeClass("hidden");
        namecb_Group = "";
        $(document.getElementById('List_group')).addClass('hidden');
    }
    else {
        $("#Create_group_ques").addClass("hidden");
        if (i_numGroup >= 1) {
            $(document.getElementById('List_group')).removeClass('hidden');
        }
        else {
            $(document.getElementById('List_group')).addClass('hidden');
        }

    }
};
var namenew_Group, namecb_Group, index_name;
var iGroup = 0;

function save_createQues() {
    var val_Quesmain = $('#txtQuesmain' + inumQues).val();
    var iGroup = $('.survey-page-body').find('.name_group').length;//count number current group name
    var i_groupDefault = $('.survey-page-body').find('#group0').length;//count number current group default
    namenew_Group = $(document.getElementById('txtnew_Group')).val();

    var Chk_Createnew_group = document.getElementById("ChkCreatenews_g");
    if (val_Quesmain == '') {
        $('#Show_error').removeClass("hidden");
        $('#Show_error').addClass("animated left in bounce");
        $('#lblShowerror').text("Please Enter the conent main question");
        $('#txtQuesmain' + inumQues).attr('style', 'border: 1px solid red;');
    }
    else {
        $('#Show_error').addClass("hidden");
        $('#Show_error').removeClass("animated left in bounce");
        $('#txtQuesmain' + inumQues).removeAttr('style', 'border: 1px solid red;');
        if (Chk_Createnew_group.checked) {
            if (namenew_Group == '') {
                $(document.getElementById('txtnew_Group')).attr('style', 'border: 1px solid red;');
                $('#Show_error').removeClass("hidden");
                $('#Show_error').addClass("animated left in bounce");
                $('#lblShowerror').text("Please Enter the group name.");
                $(document.getElementById('txtnew_Group')).focus();
            }
            else {
                var group_row = $(document.createElement('div')).attr('id', 'group' + iGroup);
                group_row.addClass("numGroup_row");
                group_row.after().html('<div id="name_group' + iGroup + '" class="name_group col-xs-12 col-sm-12 col-md-12 col-lg-12" onmouseout="OutHover_showlblGroup(' + iGroup + ')" onmouseover="OnHover_showlblGroup(' + iGroup + ')">' +
                    '<h4><label id="lblnamegroup' + iGroup + '">' + namenew_Group + '</label></h4><label id="lblnumG' + iGroup + '" class="hidden hiddenlbl">' + iGroup + '</label>' +
                    '<div id="lblGroup_option' + iGroup + '" class="lblGroup_option col-xs-12 col-sm-12 col-md-12 col-lg-12 hidden">' +
                    '<div class="buttons">' +
                    '<a id="btnEdit_lblGroup' + iGroup + '" onclick="Edit_lblGroup(' + iGroup + ')" class="edit-button k-button" href="#"><span class="iconspan glyphicon glyphicon-edit"></span><span class="textspan">Edit</span></a>' +
                    '</div></div>' +
                    '</div>' +
                    '<div id="questions' + inumQues + '"></div>');
                group_row.appendTo('.survey-page-body');
                val_name++;
                Create_newgroup();
                $(document.getElementById('txtnew_Group')).attr('style', 'border: 1px solid #cdcdcd;');
                AddQuestion();
                $("#editQuestion").addClass("hidden");
            }
        }
        else {
            if (index_nameGroup == 0) {
                if (i_groupDefault == 0) {

                    namecb_Group = "Group Default";
                    var group_rows = $(document.createElement('div')).attr('id', 'group0');
                    group_rows.addClass("numGroup_row");
                    group_rows.after().html('<div id="name_group0" class="name_group col-xs-12 col-sm-12 col-md-12 col-lg-12" onmouseout="OutHover_showlblGroup(0)" onmouseover="OnHover_showlblGroup(0)">' +
                        '<h4><label id="lblnamegroup0">' + namecb_Group + '</label></h4><label id="lblnumG' + iGroup + '" class="hidden hiddenlbl">' + iGroup + '</label>' +
                        '<div id="lblGroup_option0" class="lblGroup_option col-xs-12 col-sm-12 col-md-12 col-lg-12 hidden">' +
                    '<div class="buttons">' +
                    '<a id="btnEdit_lblGroup0" onclick="Edit_lblGroup(0)" class="edit-button k-button" href="#"><span class="iconspan glyphicon glyphicon-edit"></span><span class="textspan">Edit</span></a>' +
                    '</div></div>' +
                        '</div>' +
                    '<div id="questions' + inumQues + '"></div>');

                    var i_group1 = $('.survey-page-body').find('#group1').length;

                    if (i_group1 == 1) {
                        group_rows.insertBefore('#group1');
                    }
                    else {
                        group_rows.appendTo('.survey-page-body');
                    }

                }

                else {
                    var ques_row01 = $(document.createElement('div')).attr('id', 'questions' + inumQues);
                    ques_row01.appendTo('#group0');
                }

            }
            else {
                var ques_row02 = $(document.createElement('div')).attr('id', 'questions' + inumQues);
                ques_row02.appendTo('#group' + index_nameGroup);
            }
            AddQuestion();
            $("#editQuestion").addClass("hidden");
        }

        $(document.getElementById('greeting_section')).removeClass('hidden');
        $(document.getElementById('aboutyou')).removeClass('hidden');
        $(document.getElementById('appofday')).removeClass('hidden');
        $(document.getElementsByClassName('survey-page-body')).removeClass('hidden');
        call_kendo();
    }
};

function btn_Save() {
    var val_Quesmain = $('#txtQuesmain' + inumQues).val();

    if (val_Quesmain == '') {
        $('#Show_error').removeClass("hidden");
        $('#Show_error').addClass("animated left in bounce");
        $('#lblShowerror').text("Please Enter the conent question and the group name.");
        $('#txtQuesmain' + inumQues).attr('style', 'border: 1px solid red;');

    }
    else {
        $('#Show_error').addClass("hidden");
        $('#Show_error').removeClass("animated left in bounce");
        $('#txtQuesmain' + inumQues).removeAttr('style', 'border: 1px solid red;');
        AddQuestion();
        $("#editQuestion").addClass("hidden");
        iCurrent = 2;
        //onSelect_nameGroup(e);
    }
};
/*End */

function AddQuestion() {
    if (inumQues <= 100) {
        var question_row = $(document.createElement('div'));
        var option_row = $(document.createElement('div')).attr("id", 'Ques_option' + inumQues);
        var val_Quesmain = $('#txtQuesmain' + inumQues).val();
        var inumChoise;
        //var count_div = $('#ContentAnser' + inumQues).children().length;
        var i;
        question_row.addClass('question_row row-fluid col-xs-12 col-sm-12 col-md-12 col-lg-12');
        question_row.after().html('<div id="question-container' + inumQues + '" class="question-container col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0" onmouseover="Hover_showhide(' + inumQues + ')" onmouseout="Outhover_showhide(' + inumQues + ')" >' +
                                    '<div class="question-fieldset">' +
                                    '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0">' +
                                    '<h4 class="question-title-container">Q' +
                                    '<span class="question-number">' + inumQues + '.</span>' +
                                    '<span id="Q' + inumQues + '" class="user-generated">' + val_Quesmain + '</span><span>?</span><lable class="hidden" id="numrow' + inumQues + '" value=' + iCurrent + '>' + iCurrent + '</lable><lable class="hidden" id="type_choise' + inumQues + '" value=' + type_choise + '>' + type_choise + '</lable></h4>' +
                                   '<div id="choice_Text' + inumQues + '" class="choiceText col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0">' +
                                   '</div></div></div>');
        question_row.appendTo('#questions' + inumQues);
        Save_input();
        option_row.addClass("question_option col-xs-12 col-sm-12 col-md-12 col-lg-12 hidden");
        option_row.after().html('<div class="buttons">' +
            '<a href="#" class="edit-button k-button" onclick="Edit_question(' + inumQues + ')" id="btnEditQues' + inumQues + '"><span class="iconspan glyphicon glyphicon-edit"></span><span class="textspan">Edit</span></a>' +
            //'<a href="#" class="option-button k-button" id="btnOptionQues' + inumQues + '"><span class="iconspan glyphicon glyphicon-cog"></span><span class="textspan">Option</span></a>' +
            //'<a href="#" class="logic-button k-button " id="btnLogicQues' + inumQues + '"><span class="iconspan glyphicon glyphicon-flash"></span><span class="textspan">Logic</span></a>' +
            //'<a href="#" class="move-button k-button " id="btnMoveQues' + inumQues + '"><span class="iconspan glyphicon glyphicon-move"></span><span class="textspan">Move</span></a>' +
            '<a href="#" class="copy-button k-button " id="btnCopyQues' + inumQues + '"><span class="iconspan glyphicon glyphicon-book"></span><span class="textspan">Copy</span></a>' +
            '<a href="#" class="delete-button k-button" onclick="Delete_question(' + inumQues + ')" id="btnDeleteQues' + inumQues + '"><span class="iconspan glyphicon glyphicon-remove"></span><span class="textspan">Delete</span></a>' +
            '</div>');
        option_row.appendTo('#question-container' + inumQues);
    }
}


var type_choise;
function Save_input() {
    var content_Choise = $(document.createElement('div'));
    content_Choise.addClass("question-body");
    var checkrad = document.getElementById('chkradiotoCheckbox');

    if (checkrad.checked) {
        type_choise = "checkbox";
        nametype = "btncheckbox" + inumQues;
    }
    else {
        type_choise = "radio";
        nametype = "btnRadio";
    }

    $('#ContentAnser' + inumQues + ' .rowQues input[type="text"]').each(function () {
        var $textBox = $(this);
        var idcontrol = $textBox.attr("id")
        var regex = /\d+/;
        var obj_txtinput = $textBox.val();
        var myArray = idcontrol.match(regex);
        if (obj_txtinput != '') {
            if (type_choise == "checkbox") {
                content_Choise.append('<div class="row_choiseanswer col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0"><p>' +
                                        '<input type="' + type_choise + '" name="btncheckbox' + myArray + '" id="btncheckbox' + myArray + '" />' +
                                        '<lable id="lblcheckbox' + myArray + '" class="lableradio" for="btncheckbox' + myArray + '">' + obj_txtinput + '</lable>' +
                                        '</p></div>');
            }
            else {
                content_Choise.append('<div class="row_choiseanswer col-xs-12 col-sm-12 col-md-12 col-lg-12 padd0"><p>' +
                                      '<input type="' + type_choise + '" name="btnradio' + inumQues + '" id="btnradio' + myArray + '" />' +
                                      '<lable  id="lblradio' + myArray + '" class="lableradio" for="btnradio' + myArray + '">' + obj_txtinput + '</lable>' +
                                      '</p></div>');
            }
        }
    });
    content_Choise.appendTo('#choice_Text' + inumQues);
}

function RequireAnswer() {
    var chk_RequireAnswer = document.getElementById('chkRequireAnswer');

    if (chk_RequireAnswer.checked) {
        $('#option_choise_RequireAnswer').removeClass("hidden");
        $('#check_option_RequireAnswer').addClass("bgcfeae7");
    }
    else {
        $('#option_choise_RequireAnswer').addClass("hidden");
        $('#check_option_RequireAnswer').removeClass("bgcfeae7");
    }
}

function Changelayout() {
    var chk_Changelayout = document.getElementById('chkChangelayout');

    if (chk_Changelayout.checked) {
        $('#option_choise_Changelayout').removeClass("hidden");
        $('#check_option_Changelayout').addClass("bgcfeae7");
    }
    else {
        $('#option_choise_Changelayout').addClass("hidden");
        $('#check_option_Changelayout').removeClass("bgcfeae7");
    }
}

function SortRand() {
    var chk_SortRand = document.getElementById('chkSortRand');
    if (chk_SortRand.checked) {
        $('#option_choise_SortRand').removeClass("hidden");
        $('#option_choise_SortRand2').removeClass("hidden");
        $('#check_option_SortRand').addClass("bgcfeae7");
    }
    else {
        $('#option_choise_SortRand').addClass("hidden");
        $('#option_choise_SortRand2').addClass("hidden");
        $('#check_option_SortRand').removeClass("bgcfeae7");
    }
}

function AdjustSize() {
    var chk_AdjustSize = document.getElementById('chkAdjustSize');
    if (chk_AdjustSize.checked) {
        $('#option_choise_AdjustSize').removeClass("hidden");
        $('#check_option_AdjustSize').addClass("bgcfeae7");
    }
    else {
        $('#option_choise_AdjustSize').addClass("hidden");
        $('#check_option_AdjustSize').removeClass("bgcfeae7");
    }
}
//function ShowControlInfo() {
//    $('#aboutyou').removeClass('hidden');
//    $('#sign').removeClass('hidden');
//    $('#appofday').removeClass('hidden');
//}

function check_Medical_menu() {
    var chkMedical = document.getElementById('chk_Medical');
    if (chkMedical.checked) {
        chkMedical.checked = false;
    }
    else {
        chkMedical.checked = true;
    }
    var id_Medical = $(document.createElement('div'));
    id_Medical.addClass("col-sm-12 col-md-12 col-lg-12 padd0");
    if (chkMedical.checked) {
        $(document.getElementById('appofday')).removeClass('hidden');
        id_Medical.after().html('<div class="form-group-about">' +
            '<div class="aboutyou">APPOINTMENT OF DAY</div><div class="col-sm-12 col-md-12 col-lg-12 div-padding">' +
            '<div class="col-md-1 nopadding-about"><label class=" col-sm-12 control-label padding-0">Date:</label></div>' +
            '<div class="col-md-2 width-oc"><input type="text" class="form-control" placeholder="Date"></div>' +
            '<div class="col-md-1 nopadding-about"><label class=" col-sm-12 control-label padding-0">Time:</label></div>' +
            '<div class="col-md-2 width-oc"><input type="text" class="form-control" placeholder="Time"></div></div>' +
            '<div class="col-sm-12 col-md-12 col-lg-12 div-padding"><div style="width:130px;" class="col-md-1 nopadding-about">' +
            '<label class=" col-sm-12 control-label padding-0">Treatment/Package:</label></div>' +
            '<div class="col-md-2 width-oc"><input type="text" class="form-control" placeholder="Treatment/Package">' +
            '</div><div class="col-md-1 nopadding-about">' +
            '<label class=" col-sm-12 control-label padding-0">Therapist:</label></div>' +
            '<div style="width:300px;" class="col-md-2 width-oc"><input type="text" class="form-control" placeholder="Therapist">' +
            '</div></div></div>');
        id_Medical.appendTo('#appofday');
    }
    else {
        $(document.getElementById('appofday')).empty();
        $(document.getElementById('appofday')).addClass('hidden');
    }
}

function checkAboutUs_menu() {
    var chkaboutUs = document.getElementById('chk_aboutUs');
    if (chkaboutUs.checked) {
        chkaboutUs.checked = false;
    }
    else {
        chkaboutUs.checked = true;
    }
    var idAbout_u = $(document.createElement('div'));
    idAbout_u.addClass("col-sm-12 col-md-12 col-lg-12 padd0");
    if (chkaboutUs.checked) {
        $(document.getElementById('aboutyou')).removeClass('hidden');
        idAbout_u.after().html('<div class="form-group-about">' +
                               '<div class="aboutyou">ABOUT YOU</div><div class="col-sm-12 col-md-12 col-lg-12 div-padding">' +
                               '<div class="col-md-1 nopadding-about "><label class=" col-sm-12 control-label padding-0">Title</label></div>' +
                               '<div class="col-md-1 widths"><input type="text" class="form-control" placeholder="Title"></div>' +
                               '<div class="col-md-1 nopadding-about "><label class=" col-sm-12 control-label padding-0">Name</label></div>' +
                               '<div class="col-md-2 widths"><input type="text" class="form-control" placeholder="Name"></div>' +
                               '<div style="width:123px;" class="col-md-1 nopadding-about "><label class=" col-sm-12 control-label padding-0">Membership No.:</label></div>' +
                               '<div class="col-md-2 widths"><input type="text" class="form-control" placeholder="Membership No."></div></div>' +
                               '<div class="col-sm-12 col-md-12 col-lg-12 div-padding"><div class="col-md-1 nopadding-about "><label class=" col-sm-12 control-label padding-0">Age</label></div>' +
                               '<div class="col-md-1"><input type="text" class="form-control" placeholder="Age"></div><div class="col-md-1 width-check"><div class="ckbox ckbox-primary">' +
                               '<input type="checkbox" id="under"><label for="int_mobile">Under 20</label></div></div><div class="col-md-1 width-check">' +
                               '<div class="ckbox ckbox-primary"><input type="checkbox"><label for="int_mobile">20 - 30</label></div></div>' +
                               '<div class="col-md-1 width-check"><div class="ckbox ckbox-primary"><input type="checkbox" value="f" name="int[]"><label for="int_mobile">41 - 50</label></div></div>' +
                               '<div class="col-md-1 width-check"><div class="ckbox ckbox-primary"><input type="checkbox" value="f" name="int[]"><label for="int_mobile">51 - 60</label></div></div>' +
                               '<div class="col-md-1 width-check"><div class="ckbox ckbox-primary"><input type="checkbox" value="f" name="int[]"><label for="int_mobile">Over 60</label></div></div></div>' +
                               '<div class="col-sm-12 col-md-12 col-lg-12 div-padding"><div class="col-md-1 nopadding-about "><label class=" col-sm-12 control-label padding-0">Address</label>' +
                               '</div><div style="width:771px;" class="col-md-6"><input type="text" class="form-control" placeholder="Title"></div></div>' +
                               '<div class="col-sm-12 col-md-12 col-lg-12 div-padding"><div class="col-md-1 nopadding-about ">' +
                               '<label class=" col-sm-12 control-label padding-0">Phone</label></div><div class="col-md-2 special-width"><input type="text" class="form-control" placeholder="Phone"></div>' +
                               '<div class="col-md-1 nopadding-about "><label class=" col-sm-12 control-label padding-0">Mobile</label></div><div class="col-md-2 special-width">' +
                               '<input type="text" class="form-control" placeholder="Mobile"></div><div class="col-md-1 nopadding-about"><label class=" col-sm-12 control-label padding-0">Email</label></div>' +
                               '<div class="col-md-2 special-width"><input type="text" class="form-control" placeholder="Email"></div></div><div class="col-sm-12 col-md-12 col-lg-12 div-padding">' +
                               '<div class="col-md-1 nopadding-about "><label class=" col-sm-12 control-label padding-0">Ocupation</label></div>' +
                               '<div class="col-md-2 width-oc"><input type="text" class="form-control" placeholder="Ocupation"></div><div class="col-md-1 nopadding-about ">' +
                               '<label class=" col-sm-12 control-label padding-0">Company</label></div><div class="col-md-2 width-oc">' +
                               '<input type="text" class="form-control" placeholder="Company"></div></div>' +
                               '<div class="col-sm-12 col-md-12 col-lg-12 div-padding"><div style="width:238px;" class="col-md-1 nopadding">' +
                               '<label class=" col-sm-12 "> In case of emergency contact : Name</label></div><div class="col-md-2 width-fi">' +
                               '<input type="text" class="form-control" placeholder="Name"></div><div class="col-md-1 nopadding">' +
                               '<label class=" col-sm-12 control-label padding-0">Contact:</label></div><div class="col-md-2 width-fi">' +
                               '<input type="text" class="form-control" placeholder="Contact"></div></div></div></div>');
        idAbout_u.appendTo('#aboutyou');
    }
    else {
        $(document.getElementById('aboutyou')).empty();
        $(document.getElementById('aboutyou')).addClass('hidden');
    }
}

function checkfooter_menu() {
    var chkfooter = document.getElementById('chk_footer');
    if (chkfooter.checked) {
        chkfooter.checked = false;
    }
    else {
        chkfooter.checked = true;
    }
    var idfooter_u = $(document.createElement('div'));
    idfooter_u.addClass("col-sm-12 col-md-12 col-lg-12 padd0");
    if (chkfooter.checked) {
        $(document.getElementById('iddivfooter')).removeClass('hidden');
        idfooter_u.after().html('<div class="col-sm-12 col-md-12 col-lg-12">' +
            '<div class="form-group-about">' +
            '<div style="margin-bottom:25px;">I confirm to the best of my knowledge that the answers I have given are correct and that I have not withheld any relevant information………. </div>' +
            '<div class="col-sm-12 col-md-12 col-lg-12 div-padding">' +
            '<div class="col-md-1 nopadding-about">' +
            '<label class=" col-sm-12 control-label padding-0">Signature:</label>' +
            '</div><div class="col-md-2 width-oc">' +
            '<input type="text" placeholder="Signature" class="form-control"></div>' +
            '<div class="col-md-1 nopadding-about">' +
            '<label class=" col-sm-12 control-label padding-0">Date:</label>' +
            '</div><div class="col-md-2 width-oc">' +
            '<input type="text" placeholder="Date" class="form-control">' +
            '</div></div></div></div>');
        idfooter_u.appendTo('#iddivfooter');
    }
    else {
        $(document.getElementById('iddivfooter')).empty();
        $(document.getElementById('iddivfooter')).addClass('hidden');
    }
}