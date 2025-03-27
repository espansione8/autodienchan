function AdminController($scope, $rootScope, $filter, $q, $http, $timeout, $window, $modal, blockUI, $log, $location, ENUMS, BaseService) {
    $scope.screenWidth = 1024;
    $scope.screenHeight = 768;
    $scope.menuWidth = 200;
    $scope.limLeft =2 * $scope.menuWidth;
    $scope.menuHeight = 200;
    $scope.sceneWidth = 200;
    $scope.sceneHeight = 300;
    $scope.heightOfHeader = 40;
    $scope.heightOfContent = 40;
    $scope.shadowBodyOn = "1 0 20px rgba(0,255,0, 1.0)"
    $scope.shadowBodyOff = "0 0 1px rgba(0,255,0, 0.0)"
    $scope.hasError = false;
    $scope.msgError = '';
    $scope.isUserOn = false;
    $scope.isHelpOn = false;
    $scope.isSettingOn = false;
    $scope.isGroupOn = false;
    $scope.isAddItemForGroupPoints = false;
    $scope.isLoaded = false;
    $scope.pageSize = 13;
    $scope.pageSizeGroup = 13;
    $scope.currentPage = 1;
    $scope.currentPageGroup = 1;
    $scope.currentGroup = null;
    $scope.baseURL = $rootScope.baseUrl;

    $scope.helpOption = {
        Point: true,
        PointGroup: false,
        HumanBody: false,
        User: false,
    }

    // menu
    $scope.panelHeaderMenu = null;
    $scope.panelMenuContent = null;
    $scope.paddingVeticalMenu = 4;
    $scope.heightMenuButton = 36;
    $scope.colorSelectedMenuButton = "#FF0000";
    $scope.bgColorMenu = "#2A2D35";
    $scope.mouseEnterStateColorButton = "1px #999";
    $scope.mouseLeaveStateColorButton = "1px #000";

    // scene
    $scope.panelHeaderScene = null;
    $scope.panelPoints = null;
    $scope.panelHeaderPoints = null;
    $scope.panelPointGroup = null;
    $scope.panelHeaderPointGroup = null;
    $scope.panelHumanBody = null;
    $scope.panelHeaderHumanBody = null;
    $scope.panelContent = null;
    $scope.panelHeaderSceneContent = null;

    // gender
    $scope.GenderType = 1;
    $scope.panelManBodyButton = null;
    $scope.panelFemaleBodyButton = null;
    $scope.imgThumbWidth = 50;
    $scope.imgThumbHeight = 130;
    $scope.imgIndexFirst = 4;
    $scope.imgPadding = 10;
    $scope.imgIndex = 0;
    $scope.panelHumanItem = null;
    $scope.imgBodyWidthOrg = 500;
    $scope.imgBodyHeightOrg = 1300;
    $scope.imgWidth = 0;
    $scope.imgHeight = 0;
    $scope.panelHuumanPoints = null;
    $scope.factor = 0.0;
    $scope.isBodyPointItemEnter = false;
    $scope.currentBodyPointItem = null;
    $scope.panelBodyPointItemControl = null;

    $scope.BodyItemDescription = '';
    $scope.lstViewBodyItems = [];
    $scope.isEdit = false;
    $scope.panelvisceraHuman = null;
    $scope.panelStartUp = null;
    // panel point
    $scope.panelGrid = null;
    $scope.panelBackground = null;
    $scope.WidthOfFrontFace = 899;
    $scope.HeightOfFrontFace = 1138;
    $scope.WidthOfHafFace = 956;
    $scope.HeightOfHafFace = 1129;
    $scope.WidthOfNose = 420;
    $scope.HeightOfNose = 269;
    $scope.WidthOfEar = 261;
    $scope.HeightOfEar = 453;
    $scope.ItemThumbHeight = 91;
    $scope.ItemThumbWidth = 112;
    $scope.BoxTitleHeight = 25;
    $scope.BoxContentHeigth = 15;
    $scope.panelThumB = null;
    $scope.currentBackground = null;
    $scope.offset = 0.0;
    $scope.panelGrid = null;
    $scope.padding = 50;
    $scope.panelListPoints = null;
    $scope.currentPoint = null;
    $scope.currentDataPoint = null;
    $scope.currentDataPointBackup = null;
    $scope.panelPointItemControl = null;
    $scope.viewPoint = false;
    $scope.showAddMirron = false;
    $scope.timeOut = 50;

    $scope.MirronState = {
        isAddMirronPoint: false,
    }
    $scope.thumBSelectColor = "rgba(255,0,0, 1.0)";
    $scope.thumBHolderColor = "rgba(0,200,255, 1.0)";
    $scope.thumBLeaveColor = "rgba(0,0,0, 0.0)";
    $scope.disableColor = "rgba(0,0,0,0.5)";
    $scope.enableColor = "rgba(0,0,0, 0.0)";

    var faceGrid_Ver = [0, 10, 25, 52, 70, 110, 148, 185, 222, 262];
    var strFaceGrid_ver = ['0', 'A', 'B', 'C', 'D', 'E', 'G', 'H', 'K', 'L'];
    var faceGrid_Hor = [220, 280, 345, 417, 487, 555, 625, 690, 755, 840, 918, 990, 1070];
    var strFaceGrid_Hor = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

    var hafFaceGrid_Ver = [280, 335, 448, 540, 631];
    var strHafFaceGrid_Ver = ['L', 'M', 'N', 'P', 'Q'];
    var hafFaceGrid_Hor = [181, 249, 316, 391, 461, 521, 590, 656, 726, 802, 875, 951, 1030];
    var limitWithCenter = 10;
    $scope.points = [];

    // link
    $scope.linkData = {
        linkID: 0,
        GroupID: 0,
        Link: '',
        Frame:'',
        Description:'',
    }

    $scope.linkDatas = [];
    // modal

    $scope.BodyItemData = {
        PositionID: 0,
        Gender: 1,
        Type: 1,
        Description: '',
        X: 0,
        Y: 0,
        Item: [],
    };

    $scope.data = {
        lstBoHuyetOrg: [],
        lstBoHuyet: [],
        lstPoints: [],
        lstSubBody: [],
        lstUsers: [],
        lstSex:[],
    }

    $scope.SubBodyItemData = {
        PositionID: 0,
        Description: '',
        Items: [],
    };

    $scope.pointInfo = {
        Description: '',
        CongDung: '',
        ChuTri: '',
        Region: '',
        Number: '',
        Position:'',
        IsMirron: '',
        X: 0,
        Y: 0,
        XReal: 0,
        YReal: 0,
        AutoID: ''
    }

    $scope.userInfo = {
        UserName: '',
        Password: '',
        LicenseKey: '',
        Name: '',
        Mail: '',
        Tel: '',
        Address: '',
        Country: '',
        Sex: '',
        BOD: new Date(),
        BODString: '',
        Description: '',
        Active: '0',
        Admin: '0'
    };

    $scope.UserDlgState = '1';
    $scope.currentUser = null;
    $scope.PointsLoaded = false;
    $scope.PointGroupLoader = false;
    $scope.BodyHumanLoaded = false;
    $scope.SubBodyHumanLoaded = false;
    $scope.UserDataLoaded = false;
    $scope.sysParaLoaded = false;

    $scope.isAddGroup = false;
    $scope.isEditGroup = false;
    $scope.isViewGroup = false;
    $scope.GroupNameTemp = '';
    $scope.GroupDescriptionTemp = '';

    // group point info
    $scope.groupPointInfoButton = [];
    $scope.groupPointInfoFace = null;
    $scope.widthOfGroupPointInfoButton = 0;
    $scope.heightOfGroupPointInfoButton = 80;
    $scope.numberOfGroupPointInfoOfBUtton = 6;
    $scope.currentgroupPointIndex = 2;
    $scope.currentGroupPointButton = null;
    $scope.currentGroupPointFace = null;
    $scope.panelFindGroupPoint = null;
    $scope.pointInGroupResult = [];
    $scope.currentPointInGroup = null;
    $scope.PointsBackupOfGroup = null;
    $scope.PointToAddToGroup = null;
    $scope.PointToAddToGroupData = {
        action: 'An',
        countAction: 30,
        index: 0,
    }
    $scope.PointInGroup = {
        number: '',
        points:[],
    }

    $scope.sysPara = null;

    $scope.groupPointFaceStatus = {
        earLeft: true,
        haftFaceLeft: true,
        face: true,
        haftFaceRight: true,
        earRight: true,
        nose: true,
    }
    
    $scope.SetChangedData = function () {
        $timeout(function () {
            $scope.isUserOn = false;
            $scope.isSettingOn = false;
            $scope.isGroupOn = false;
            $scope.isHelpOn = false;
        }, $scope.timeOut);
    }

    $scope.SetShowGroup = function () {
        $timeout(function () {
            $scope.isUserOn = false;
            $scope.isSettingOn = false;
            $scope.isGroupOn = true;
            $scope.isHelpOn = false;
        }, $scope.timeOut);
    }

    $scope.SetShowUser = function()
    {
        $timeout(function () {
            $scope.isUserOn = true;
            $scope.isSettingOn = false;
            $scope.isGroupOn = false;
            $scope.isHelpOn = false;
        }, $scope.timeOut);
    }

    $scope.SetSettingShow = function()
    {
        $timeout(function () {
            $scope.isUserOn = false;
            $scope.isSettingOn = true;
            $scope.isGroupOn = false;
            $scope.isHelpOn = false;
        }, $scope.timeOut);
    }

    $scope.SetHelpShow = function () {
        $timeout(function () {
            $scope.isUserOn = false;
            $scope.isSettingOn = false;
            $scope.isGroupOn = false;
            $scope.isHelpOn = true;
        }, $scope.timeOut);
    }

    // help

    $scope.listHelp = [];

    $scope.initHelp = function()
    {
        var obj = {
            isSelected: true,
            Name: 'Point',
            ID: 0,
        }

        $scope.listHelp.push(obj);

        var obj = {
            isSelected: false,
            Name: 'Points Group',
            ID: 1,
        }

        $scope.listHelp.push(obj);

        var obj = {
            isSelected: false,
            Name: 'Human Body',
            ID: 2,
        }

        $scope.listHelp.push(obj);

        var obj = {
            isSelected: false,
            Name: 'Users',
            ID: 3,
        }

        $scope.listHelp.push(obj);
    }

    $scope.selectTab = function(item)
    {
        $scope.helpOption = {
            Point: false,
            PointGroup: false,
            HumanBody: false,
            User: false,
        }

        var ii= item.ID;

        for(var i=0;i<$scope.listHelp.length;i++)
        {
            $scope.listHelp[i].isSelected = false;

            if ($scope.listHelp[i].ID == ii)
            {
                $scope.listHelp[i].isSelected = true;
            }
        }

        if (ii==0)
        {
            $scope.helpOption.Point = true;
        }
        else if (ii==1)
        {
            $scope.helpOption.PointGroup = true;
        }
        else if (ii == 2) {
            $scope.helpOption.HumanBody = true;
        }
        else if (ii == 3) {
            $scope.helpOption.User = true;
        }
    }

    $scope.SetChangeStateMachine = function () {
        $timeout(function () {
            $scope.isLoaded = true;
            $scope.initHeader();
            $scope.intGroupPointsInfo();
            $scope.SetDataBody();
            $scope.RenderPanelViscera();
        }, $scope.timeOut);
    }

    $scope.confirmData = {
        type: 'remove',
        content:'',
    }
    $scope.removeRightClick = function () {
        $('body').on('contextmenu', function () { return false; });
    }

    $scope.enableRightClick = function () {
        $('body').on('contextmenu', function () { return true; });
    }

    $scope.loadSexCbo = function()
    {
        $scope.data.lstSex = [];
        var obj = {
            ID: 1,
            Value: 'Male',
        }

        $scope.data.lstSex.push(obj);

        var obj = {
            ID: 2,
            Value: 'Female',
        }

        $scope.data.lstSex.push(obj);
    }


    $scope.load = function () {
        $scope.removeRightClick();
        $scope.initHelp();
        $scope.intiScreen();
        $scope.initCanvas();
        $scope.loadSexCbo();

        BaseService.postData("Admin", "GetSysPara", false, null)
        .then(function (response) {
            if (response.success == true) {
                $scope.sysPara = response.lstData;
                console.log("load sys para");
                $scope.sysParaLoaded = true;
                $scope.SetMachineLoaded();
            }
            else {
                if (response.reLogin == true) {
                    var url = $scope.baseURL + "Home/LogOut";
                    $window.location.href = url;
                }
            }
        }).finally(function () {

        }, function () { });

        // Get Huyet
        BaseService.postData("Home", "GetHuyet", false, null)
        .then(function (response) {
            if (response.success == true) {
                $scope.points = response.lstData;
                console.log("load Points");
                $scope.PointsLoaded = true;
                $scope.SetMachineLoaded();
            }
            else {
                if (response.reLogin == true) {
                    var url = $scope.baseURL + "Home/LogOut";
                    $window.location.href = url;
                }
            }
        }).finally(function () {
            
        }, function () { });
        
        // Get Bo huyet
        BaseService.postData("Home", "GetBoHuyet", false, null)
        .then(function (response) {
            if (response.success == true) {
                $scope.data.lstBoHuyetOrg = response.lstData;
                $scope.data.lstBoHuyet = angular.copy($scope.data.lstBoHuyetOrg);
                console.log("load Bo Huyet");
            }
            else {
                if (response.reLogin == true) {
                    var url = $scope.baseURL + "Home/LogOut";
                    $window.location.href = url;
                }
            }

            $scope.PointGroupLoader = true;
            $scope.SetMachineLoaded();
        }).finally(function () {
            
        }, function () { });

        BaseService.postData("Admin", "GetAllBodyItems", false, null)
        .then(function (response) {
            if (response.success == true) {
                $scope.data.lstPoints = response.lstData;
                console.log("load Points in body");
                $scope.BodyHumanLoaded = true;
                $scope.SetMachineLoaded();
            }
            else {
                if (response.reLogin == true) {
                    var url = $scope.baseURL + "Home/LogOut";
                    $window.location.href = url;
                }
            }
        }).finally(function () {

        }, function () { });

        // Get Body human
        BaseService.postData("Admin", "GetAllSubBodyItems", false, null)
        .then(function (response) {
            if (response.success == true) {
                $scope.data.lstSubBody = response.lstData;
                console.log("load Sub Body item");
                $scope.SubBodyHumanLoaded = true;
                $scope.SetMachineLoaded();
            }
            else {
                if (response.reLogin == true) {
                    var url = $scope.baseURL + "Home/LogOut";
                    $window.location.href = url;
                }
            }
        }).finally(function () {
            
        }, function () { });

        // Get User
        $scope.UserDataLoaded = false;
        $scope.loadUser();
    }

    $scope.$watch('userInfo.BOD', function (newValue, oldValue) {
        $scope.userInfo.BODString = BaseService.formatDate(newValue);
        console.log($scope.userInfo.BODString);
    });

    $scope.loadUser = function()
    {
        BaseService.postData("Admin", "GetAllUser", false, null)
        .then(function (response) {
            if (response.success == true) {
                $scope.data.lstUsers = response.lstData;
                console.log("load User");
                $scope.UserDataLoaded = true;
                $scope.SetMachineLoaded();
            }
            else {
                if (response.reLogin == true) {
                    var url = $scope.baseURL + "Home/LogOut";
                    $window.location.href = url;
                }
            }
        }).finally(function () {

        }, function () { });
    }
    $scope.SetMachineLoaded = function()
    {
        if ($scope.PointsLoaded
            && $scope.PointGroupLoader
            && $scope.BodyHumanLoaded
            && $scope.UserDataLoaded
            && $scope.SubBodyHumanLoaded
            && $scope.sysParaLoaded
            )
        {
            $scope.SetChangeStateMachine();
           
        }
    }
    $scope.reGetAllBodyItems = function()
    {
        BaseService.postData("Admin", "GetAllBodyItems", false, null)
                .then(function (response) {
                    if (response.success == true) {
                        $scope.data.lstPoints = response.lstData;
                        console.log("re load points");
                        $scope.SetDataBody();
                    }
                    else {
                        if (response.reLogin == true) {
                            var url = $scope.baseURL + "Home/LogOut";
                            $window.location.href = url;
                        }
                    }
                }).finally(function () {
                }, function () { });
    }

    $scope.reGetAllSubBodyItems = function()
    {
        BaseService.postData("Admin", "GetAllSubBodyItems", false, null)
                .then(function (response) {
                    if (response.success == true) {
                        $scope.data.lstSubBody = response.lstData;
                        console.log("re load Sub Body");
                    }
                    else {
                        if (response.reLogin == true) {
                            var url = $scope.baseURL + "Home/LogOut";
                            $window.location.href = url;
                        }
                    }
                }).finally(function () {
                }, function () { });
    }

    $scope.intiScreen = function()
    {
        $scope.screenWidth = document.documentElement.clientWidth+20;
        $scope.screenHeight = document.documentElement.clientHeight-6;
        $scope.sceneWidth = $scope.screenWidth - $scope.menuWidth;
        $scope.menuHeight = $scope.screenHeight;
        $scope.sceneHeight = $scope.screenHeight;
        $scope.heightOfContent = $scope.screenHeight - $scope.heightOfHeader;
    }

    $scope.initCanvas = function()
    {
        menuCan = document.getElementById('myMenuCanvas');
        MenuCanvas = oCanvas.create({
            canvas: menuCan,
            fps: 30,
            background: $scope.bgColorMenu,
        });

        MenuCanvas.width = $scope.menuWidth;
        MenuCanvas.height = $scope.menuHeight;

        sceneCan = document.getElementById('mySceneCanvas');
        SceneCanvas = oCanvas.create({
            canvas: sceneCan,
            fps: 30,
            background: "#000",
        });

        SceneCanvas.width = $scope.sceneWidth;
        SceneCanvas.height = $scope.sceneHeight;
       
        
    }

    $scope.intGroupPointsInfo = function()
    {
        BaseService.postData("Admin", "AllowAddGroupPointInfo", false, null)
               .then(function (response) {
                   if (response.success == true) {
                       canGroupPoint = document.getElementById('groupCanvas');
                       GroupPointCanvas = oCanvas.create({
                           canvas: canGroupPoint,
                           fps: 30,
                           background: "#000",
                       });

                       GroupPointCanvas.width = 400;
                       GroupPointCanvas.height = 500;

                       canGroupPointIcon = document.getElementById('groupIconCanvas');
                       GroupPointIconCanvas = oCanvas.create({
                           canvas: canGroupPointIcon,
                           fps: 30,
                           background: "#000",
                       });

                       GroupPointIconCanvas.width = 400;
                       GroupPointIconCanvas.height = 70;

                       $scope.widthOfGroupPointInfoButton = GroupPointIconCanvas.width / $scope.numberOfGroupPointInfoOfBUtton;
                       $scope.renderGroupPointOfButton();
                       $scope.renderGroupPointFace();

                       $scope.resetGroupPointButtonSelected();
                       $scope.resetGroupPointFaceSelected();
                       $scope.currentgroupPointIndex = 2;
                       $scope.currentGroupPointButton = GroupPointIconCanvas.children[$scope.currentgroupPointIndex];
                       $scope.currentGroupPointFace = $scope.groupPointInfoFace.children[$scope.currentgroupPointIndex];
                       $scope.setGroupPointButtonSelected();
                       $scope.setGroupPointFaceSelected();
                       GroupPointIconCanvas.redraw();
                       GroupPointCanvas.redraw();
                   }
                   else {
                       if (response.reLogin == true) {
                           var url = $scope.baseURL + "Home/LogOut";
                           $window.location.href = url;
                       }
                   }
               }).finally(function () {
               }, function () { });
    }

    $scope.resetGroupPointButtonSelected = function()
    {
        if ($scope.currentGroupPointButton != null) {
            $scope.currentGroupPointButton.children[0].fill = $scope.thumBLeaveColor;
            $scope.currentGroupPointButton = null;
        }
    }

    $scope.resetGroupPointFaceSelected = function () {
        if ($scope.currentGroupPointFace!=null)
        {
            $scope.currentGroupPointFace.x = -2*GroupPointCanvas.width;
            $scope.currentGroupPointFace = null;
        }
    }

    $scope.setGroupPointButtonSelected = function()
    {
        if ($scope.currentGroupPointButton != null) {
            $scope.currentGroupPointButton.children[0].fill = $scope.thumBSelectColor;
        }
    }

    $scope.setGroupPointFaceSelected = function()
    {
        if ($scope.currentGroupPointFace != null) {
            $scope.currentGroupPointFace.x = GroupPointCanvas.width / 2 - $scope.currentGroupPointFace.width/2;
        }
    }

    $scope.setGroupPointFaceView= function()
    {
        $scope.resetGroupPointButtonSelected();
        $scope.resetGroupPointFaceSelected();
        $scope.currentGroupPointButton = GroupPointIconCanvas.children[$scope.currentgroupPointIndex];
        $scope.currentGroupPointFace = $scope.groupPointInfoFace.children[$scope.currentgroupPointIndex];
        $scope.setGroupPointButtonSelected();
        $scope.setGroupPointFaceSelected();
        GroupPointIconCanvas.redraw();
        GroupPointCanvas.redraw();
    }

    $scope.renderGroupPointFace = function()
    {
        var xCenter = GroupPointCanvas.width / 2;
        var yCenter = GroupPointCanvas.height / 2;

        

        $scope.groupPointInfoFace = GroupPointCanvas.display.rectangle({
            x: 0,
            y: 0,
            stroke: "0px #000",
            fill: "#000",
            width: GroupPointCanvas.width,
            height: GroupPointCanvas.height,
        });

        // Ear left
        var factor = GroupPointCanvas.height / $scope.HeightOfEar;
        var w = $scope.WidthOfEar * factor;
        var h = $scope.HeightOfEar * factor;
        var img = GroupPointCanvas.display.image({
            x: -2*GroupPointCanvas.width,
            y: yCenter - h/2,
            image: renderEarLeftImg(),
            width: w,
            height: h,
            itemType: 'background',
            objectType: "EarLeft",
            itemIndex: 0,
            offset: factor,
        });
        $scope.groupPointInfoFace.addChild(img);


        // Haft face left
        var factor = GroupPointCanvas.height / $scope.HeightOfHafFace;
        var w = $scope.WidthOfHafFace * factor;
        var h = $scope.HeightOfHafFace * factor;
        var img = GroupPointCanvas.display.image({
            x: -2*GroupPointCanvas.width,
            y: yCenter - h / 2,
            image: renderHafFaceLeftImg(),
            width: w,
            height: h,
            itemType: 'background',
            objectType: "HaftFaceRight",
            itemIndex: 1,
            offset: factor,
        });
        $scope.groupPointInfoFace.addChild(img);

        //  face 
        var factor = GroupPointCanvas.height / $scope.HeightOfFrontFace;
        var w = $scope.WidthOfFrontFace * factor;
        var h = $scope.HeightOfFrontFace * factor;
        var img = GroupPointCanvas.display.image({
            x: -2*GroupPointCanvas.width,
            y: yCenter - h / 2,
            image: renderFontFaceImg(),
            width: w,
            height: h,
            itemType: 'background',
            objectType: "FontFace",
            itemIndex: 2,
            offset: factor,
        });
        $scope.groupPointInfoFace.addChild(img);

        //  haft face  right
        var factor = GroupPointCanvas.height / $scope.HeightOfHafFace;
        var w = $scope.WidthOfHafFace * factor;
        var h = $scope.HeightOfHafFace * factor;
        var img = GroupPointCanvas.display.image({
            x: -2*GroupPointCanvas.width,
            y: yCenter - h / 2,
            image: renderHafFaceRightImg(),
            width: w,
            height: h,
            itemType: 'background',
            objectType: "FontFace",
            itemIndex: 3,
            offset: factor,
        });
        $scope.groupPointInfoFace.addChild(img);

        // Ear right
        var factor = GroupPointCanvas.height / $scope.HeightOfEar;
        var w = $scope.WidthOfEar * factor;
        var h = $scope.HeightOfEar * factor;
        var img = GroupPointCanvas.display.image({
            x: -2*GroupPointCanvas.width,
            y: yCenter - h / 2,
            image: renderEarRightImg(),
            width: w,
            height: h,
            itemType: 'background',
            objectType: "EarRight",
            itemIndex: 4,
            offset: factor,
        });

        $scope.groupPointInfoFace.addChild(img);

        // Nose
        var factor = GroupPointCanvas.width / $scope.WidthOfNose;
        var w = $scope.WidthOfNose * factor;
        var h = $scope.HeightOfNose * factor;
        var img = GroupPointCanvas.display.image({
            x: -2*GroupPointCanvas.width,
            y: yCenter - h / 2,
            image: renderNoseImg(),
            width: w,
            height: h,
            itemType: 'background',
            objectType: "Nose",
            itemIndex: 5,
            offset: factor,
        });

        $scope.groupPointInfoFace.addChild(img);

        GroupPointCanvas.addChild($scope.groupPointInfoFace);

        $scope.panelFindGroupPoint = GroupPointCanvas.display.rectangle({
            x: 0,
            y: 0,
            stroke: "0px #000",
            fill: "rgba(0,0,0,0)",
            width: GroupPointCanvas.width,
            height: GroupPointCanvas.height,
        });
        GroupPointCanvas.addChild($scope.panelFindGroupPoint);
    }

    $scope.renderGroupPointOfButton = function()
    {
        var xPos = 0;
        var btn = GroupPointIconCanvas.display.rectangle({
            x: xPos,
            y: 0,
            stroke: "0px #000",
            fill: "#000",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70,
            itemIndex: 0,
        });

        var btn1 = GroupPointIconCanvas.display.rectangle({
            x: 0,
            y: 0,
            stroke: "0px #000",
            fill: "rgba(0,0,0,0)",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70

        });

        btn.addChild(btn1);

        var img = GroupPointIconCanvas.display.image({
            x: 3,
            y: 15,
            image: renderEarLeftThumb(),
            width: $scope.widthOfGroupPointInfoButton-6,
            height: 40,
        });

        btn.addChild(img);

        var btn1 = GroupPointIconCanvas.display.rectangle({
            x: 0,
            y: 0,
            stroke: "0px #000",
            fill: "rgba(0,0,0,0)",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70

        });

        btn.addChild(btn1);

        btn.bind("mouseenter touchenter", function () {
            if ($scope.groupPointFaceStatus.earLeft == false) return;

            GroupPointIconCanvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            GroupPointIconCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            if ($scope.groupPointFaceStatus.earLeft == false) return;

            GroupPointIconCanvas.mouse.cursor("default");

            if ($scope.currentgroupPointIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            GroupPointIconCanvas.redraw();
        }).bind("click tap ", function () {
            if ($scope.groupPointFaceStatus.earLeft == false) return;

            if ($scope.PointInGroup.points != null
                && $scope.PointInGroup.points.length > 0)
            {
                var index = 0;
                for (var i = 0; i < $scope.PointInGroup.points.length; i++)
                {
                    var obj = $scope.PointInGroup.points[i];

                    if (obj.Region == '0')
                    {
                        index = i;
                        break;
                    }
                }

                $scope.viewResultPointInPointGroup(index);
            }
            else {
                $scope.currentgroupPointIndex = 0;
                $scope.setGroupPointFaceView();
            }

        });

        GroupPointIconCanvas.addChild(btn);

        xPos += $scope.widthOfGroupPointInfoButton;
        var btn = GroupPointIconCanvas.display.rectangle({
            x: xPos,
            y: 0,
            stroke: "0px #000",
            fill: "#000",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70,
            itemIndex: 1,
        });

        var btn1 = GroupPointIconCanvas.display.rectangle({
            x: 0,
            y: 0,
            stroke: "0px #000",
            fill: "rgba(0,0,0,0)",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70

        });


        btn.addChild(btn1);

        

        var img = GroupPointIconCanvas.display.image({
            x: 3,
            y: 5,
            image: renderHafFaceLeftThumb(),
            width: $scope.widthOfGroupPointInfoButton - 6,
            height: 60,
        });

        btn.addChild(img);

        var btn1 = GroupPointIconCanvas.display.rectangle({
            x: 0,
            y: 0,
            stroke: "0px #000",
            fill: "rgba(0,0,0,0)",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70

        });

        btn.addChild(btn1);

        btn.bind("mouseenter touchenter", function () {
            if ($scope.groupPointFaceStatus.haftFaceLeft == false) return;

            GroupPointIconCanvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            GroupPointIconCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            if ($scope.groupPointFaceStatus.haftFaceLeft == false) return;

            GroupPointIconCanvas.mouse.cursor("default");

            if ($scope.currentgroupPointIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            GroupPointIconCanvas.redraw();
        }).bind("click tap ", function () {
            if ($scope.groupPointFaceStatus.haftFaceLeft == false) return;

            if ($scope.PointInGroup.points != null
                && $scope.PointInGroup.points.length > 0) {
                var index = 0;
                for (var i = 0; i < $scope.PointInGroup.points.length; i++) {
                    var obj = $scope.PointInGroup.points[i];

                    if (obj.Region == '1') {
                        index = i;
                        break;
                    }
                }

                $scope.viewResultPointInPointGroup(index);
            }
            else {
                $scope.currentgroupPointIndex = 1;
                $scope.setGroupPointFaceView();
            }
        });

        GroupPointIconCanvas.addChild(btn);

        xPos += $scope.widthOfGroupPointInfoButton;
        var btn = GroupPointIconCanvas.display.rectangle({
            x: xPos,
            y: 0,
            stroke: "0px #000",
            fill: "#000",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70,
            itemIndex: 2,
        });

        var btn1 = GroupPointIconCanvas.display.rectangle({
            x: 0,
            y: 0,
            stroke: "0px #000",
            fill: "rgba(0,0,0,0)",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70

        });

        btn.addChild(btn1);

        

        var img = GroupPointIconCanvas.display.image({
            x: 3,
            y: 5,
            image: renderFrontFaceThumb(),
            width: $scope.widthOfGroupPointInfoButton - 6,
            height: 60,
        });

        btn.addChild(img);

        var btn1 = GroupPointIconCanvas.display.rectangle({
            x: 0,
            y: 0,
            stroke: "0px #000",
            fill: "rgba(0,0,0,0)",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70

        });

        btn.addChild(btn1);

        btn.bind("mouseenter touchenter", function () {
            if ($scope.groupPointFaceStatus.face == false) return;

            GroupPointIconCanvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            GroupPointIconCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            if ($scope.groupPointFaceStatus.face == false) return;

            GroupPointIconCanvas.mouse.cursor("default");

            if ($scope.currentgroupPointIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }
            
            GroupPointIconCanvas.redraw();
        }).bind("click tap ", function () {
            if ($scope.groupPointFaceStatus.face == false) return;

            if ($scope.PointInGroup.points != null
                && $scope.PointInGroup.points.length > 0) {
                $scope.viewResultPointInPointGroup(0);
            }
            else {
                $scope.currentgroupPointIndex = 2;
                $scope.setGroupPointFaceView();
            }
        });

        GroupPointIconCanvas.addChild(btn);

        xPos += $scope.widthOfGroupPointInfoButton;
        var btn = GroupPointIconCanvas.display.rectangle({
            x: xPos,
            y: 0,
            stroke: "0px #000",
            fill: "#000",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70,
            itemIndex: 3,
        });

        var btn1 = GroupPointIconCanvas.display.rectangle({
            x: 0,
            y: 0,
            stroke: "0px #000",
            fill: "rgba(0,0,0,0)",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70

        });

        btn.addChild(btn1);

        

        var img = GroupPointIconCanvas.display.image({
            x: 3,
            y: 5,
            image: renderHafFaceRightThumb(),
            width: $scope.widthOfGroupPointInfoButton - 6,
            height: 60,
        });

        btn.addChild(img);

        var btn1 = GroupPointIconCanvas.display.rectangle({
            x: 0,
            y: 0,
            stroke: "0px #000",
            fill: "rgba(0,0,0,0)",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70

        });

        btn.addChild(btn1);

        btn.bind("mouseenter touchenter", function () {
            if ($scope.groupPointFaceStatus.haftFaceRight == false) return;

            GroupPointIconCanvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            GroupPointIconCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            if ($scope.groupPointFaceStatus.haftFaceRight == false) return;

            GroupPointIconCanvas.mouse.cursor("default");

            if ($scope.currentgroupPointIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            GroupPointIconCanvas.redraw();
        }).bind("click tap ", function () {
            if ($scope.groupPointFaceStatus.haftFaceRight == false) return;

            if ($scope.PointInGroup.points != null
                && $scope.PointInGroup.points.length > 0) {
                var index = 0;
                for (var i = 0; i < $scope.PointInGroup.points.length; i++) {
                    var obj = $scope.PointInGroup.points[i];

                    if (obj.Region == '3') {
                        index = i;
                        break;
                    }
                }

                $scope.viewResultPointInPointGroup(index);
            }
            else {
                $scope.currentgroupPointIndex = 3;
                $scope.setGroupPointFaceView();
            }
        });

        GroupPointIconCanvas.addChild(btn);

        xPos += $scope.widthOfGroupPointInfoButton;
        var btn = GroupPointIconCanvas.display.rectangle({
            x: xPos,
            y: 0,
            stroke: "0px #000",
            fill: "#000",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70,
            itemIndex: 4,
        });

        var btn1 = GroupPointIconCanvas.display.rectangle({
            x: 0,
            y: 0,
            stroke: "0px #000",
            fill: "rgba(0,0,0,0)",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70

        });

        btn.addChild(btn1);

        

        var img = GroupPointIconCanvas.display.image({
            x: 3,
            y: 15,
            image: renderEarRightThumb(),
            width: $scope.widthOfGroupPointInfoButton - 6,
            height: 40,
        });

        btn.addChild(img);

        var btn1 = GroupPointIconCanvas.display.rectangle({
            x: 0,
            y: 0,
            stroke: "0px #000",
            fill: "rgba(0,0,0,0)",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70

        });

        btn.addChild(btn1);

        btn.bind("mouseenter touchenter", function () {
            if ($scope.groupPointFaceStatus.earRight == false) return;

            GroupPointIconCanvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            GroupPointIconCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            if ($scope.groupPointFaceStatus.earRight == false) return;

            GroupPointIconCanvas.mouse.cursor("default");

            if ($scope.currentgroupPointIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            GroupPointIconCanvas.redraw();
        }).bind("click tap ", function () {
            if ($scope.groupPointFaceStatus.earRight == false) return;

            if ($scope.PointInGroup.points != null
                && $scope.PointInGroup.points.length > 0) {
                var index = 0;
                for (var i = 0; i < $scope.PointInGroup.points.length; i++) {
                    var obj = $scope.PointInGroup.points[i];

                    if (obj.Region == '4') {
                        index = i;
                        break;
                    }
                }

                $scope.viewResultPointInPointGroup(index);
            }
            else {
                $scope.currentgroupPointIndex = 4;
                $scope.setGroupPointFaceView();
            }
        });

        GroupPointIconCanvas.addChild(btn);

        xPos += $scope.widthOfGroupPointInfoButton;
        var btn = GroupPointIconCanvas.display.rectangle({
            x: xPos,
            y: 0,
            stroke: "0px #000",
            fill: "#000",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70,
            itemIndex: 5,
        });

        var btn1 = GroupPointIconCanvas.display.rectangle({
            x: 0,
            y: 0,
            stroke: "0px #000",
            fill: "rgba(0,0,0,0)",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70

        });

        btn.addChild(btn1);

        

        var img = GroupPointIconCanvas.display.image({
            x: 3,
            y: 15,
            image: renderNoseThumb(),
            width: $scope.widthOfGroupPointInfoButton - 6,
            height: 40,
        });

        btn.addChild(img);

        var btn1 = GroupPointIconCanvas.display.rectangle({
            x: 0,
            y: 0,
            stroke: "0px #000",
            fill: "rgba(0,0,0,0)",
            width: $scope.widthOfGroupPointInfoButton,
            height: 70

        });

        btn.addChild(btn1);

        btn.bind("mouseenter touchenter", function () {
            if ($scope.groupPointFaceStatus.nose == false) return;

            GroupPointIconCanvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            GroupPointIconCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            if ($scope.groupPointFaceStatus.nose == false) return;

            GroupPointIconCanvas.mouse.cursor("default");

            if ($scope.currentgroupPointIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            GroupPointIconCanvas.redraw();
        }).bind("click tap ", function () {
            if ($scope.groupPointFaceStatus.nose == false) return;

            if ($scope.PointInGroup.points != null
                && $scope.PointInGroup.points.length > 0) {
                $scope.viewResultPointInPointGroup(0);
            }
            else {
                $scope.currentgroupPointIndex = 5;
                $scope.setGroupPointFaceView();
            }
        });

        GroupPointIconCanvas.addChild(btn);
    }

    $scope.initHeader = function()
    {
        // menu
        $scope.renderMenuHeader();

        $scope.renderContentHeader();

        // menu content
        $scope.renderMenuButton();

        // scene //////////////////////////////////////////////////////
        $scope.renderContent();
        
    }

    $scope.renderContentHeader = function ()
    {
        $scope.panelHeaderScene = SceneCanvas.display.rectangle({
            x: 0,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfHeader,
            stroke: "0px #000",
            fill: "rgba(0,0,0, 0.7)",
            itemType: 'panel',
            objectType: "control",
        });

        var img = SceneCanvas.display.image({
            x: 0,
            y: 0,
            image: backgroundHeader(),
            width: $scope.sceneWidth,
            height: $scope.heightOfHeader,
        });

        $scope.panelHeaderScene.addChild(img);

        $scope.panelHeaderSceneContent = SceneCanvas.display.rectangle({
            x: 0,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfHeader,
            stroke: "0px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });

        //panel header point
        $scope.panelHeaderPoints = SceneCanvas.display.rectangle({
            x: 0,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfHeader,
            stroke: "0px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });

        $scope.panelPointItemControl = SceneCanvas.display.rectangle({
            x: 10,
            y: -$scope.heightOfHeader,
            width: 120,
            height: $scope.heightOfHeader,
            stroke: "0px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });

        var img = SceneCanvas.display.image({
            x: 20,
            y: $scope.heightOfHeader / 2,
            image: InfoIcon50(),
            width: 30,
            height: 30,
            origin: { x: "left", y: "center" },
        });

        img.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.viewPoint = true;
            $scope.showAddOrEditPointModal();
        });

        $scope.panelPointItemControl.addChild(img);

        var img = SceneCanvas.display.image({
            x: 60,
            y: $scope.heightOfHeader / 2,
            image: UpdateIcon50(),
            width: 30,
            height: 30,
            origin: { x: "left", y: "center" },
        });

        img.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.viewPoint = false;
            $scope.isEdit = true;
            $scope.showAddOrEditPointModal();
        });

        $scope.panelPointItemControl.addChild(img);

        var img = SceneCanvas.display.image({
            x: 100,
            y: $scope.heightOfHeader / 2,
            image: RemoveIcon50(),
            width: 30,
            height: 30,
            origin: { x: "left", y: "center" },
        });

        img.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.confirmData = {
                type: '1',
                title: 'Remove Point',
                content: 'Are you sure remove this Point?',
            }

            $scope.MirronState.isAddMirronPoint = false;

            var objs = $filter('filter')($scope.points, { Number: $scope.currentPoint.number }, true);
            if (objs.length > 1) {
                $scope.showAddMirron = true;
            }
            else {
                $scope.showAddMirron = false;
            }

            $scope.showConfirmModal();
        });

        $scope.panelPointItemControl.addChild(img);

        $scope.panelHeaderPoints.addChild($scope.panelPointItemControl);

        $scope.panelHeaderSceneContent.addChild($scope.panelHeaderPoints);

        //////////////////////////////////////////////////////////////////
        // panel header point group
        $scope.panelHeaderPointGroup = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfHeader,
            stroke: "0px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });

        $scope.panelHeaderSceneContent.addChild($scope.panelHeaderPointGroup);

        //////////////////////////////////////////////////////////////////////
        // panel Header human body
        $scope.panelHeaderHumanBody = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfHeader,
            stroke: "0px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });

        var img = SceneCanvas.display.image({
            x: 20,
            y: $scope.heightOfHeader/2,
            image: renderGenderIcon(1),
            width: 32,
            height: 32,
            origin: { x: "left", y: "center" },
            shadow: $scope.shadowBodyOn,
        });

        img.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodyPointItemSelected();
            $scope.GenderType = 1;
            $scope.setGenderSelected();
            $scope.selectBody($scope.imgIndex);
        });

        $scope.panelHeaderHumanBody.addChild(img);

        var img = SceneCanvas.display.image({
            x: 60,
            y: $scope.heightOfHeader / 2,
            image: renderGenderIcon(2),
            width: 32,
            height: 32,
            origin: { x: "left", y: "center" },
        });

        img.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodyPointItemSelected();
            $scope.GenderType = 2;
            $scope.setGenderSelected();
            $scope.selectBody($scope.imgIndex);
        });

        $scope.panelHeaderHumanBody.addChild(img);

        // panelBodyPointItemcontrol
        $scope.panelBodyPointItemControl = SceneCanvas.display.rectangle({
            x: 100,
            y: -$scope.heightOfHeader,
            width: 120,
            height: $scope.heightOfHeader,
            stroke: "0px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });

        var img = SceneCanvas.display.image({
            x: 20,
            y: $scope.heightOfHeader / 2,
            image: InfoIcon50(),
            width: 30,
            height: 30,
            origin: { x: "left", y: "center" },
        });

        img.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.showViewBodyItemModal();
        });

        $scope.panelBodyPointItemControl.addChild(img);

        var img = SceneCanvas.display.image({
            x: 60,
            y: $scope.heightOfHeader / 2,
            image: UpdateIcon50(),
            width: 30,
            height: 30,
            origin: { x: "left", y: "center" },
        });

        img.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.isEdit = true;
            $scope.data.lstBoHuyet = angular.copy($scope.data.lstBoHuyetOrg);
            console.log($scope.currentBodyPointItem);

            if ($scope.currentBodyPointItem != null)
            {
                $scope.BodyItemData = {
                    PositionID: parseInt($scope.currentBodyPointItem.valueTemp1.PositionID),
                    Gender: $scope.currentBodyPointItem.valueTemp1.Gender,
                    Type: $scope.currentBodyPointItem.valueTemp1.Type,
                    Description: $scope.currentBodyPointItem.valueTemp1.Description,
                    X: $scope.currentBodyPointItem.valueTemp1.X,
                    Y: $scope.currentBodyPointItem.valueTemp1.Y,
                    Item: [],
                };

                console.log($scope.BodyItemData);

                if ($scope.currentBodyPointItem.valueTemp1.Item!=null)
                {
                    for(var i=0;i<$scope.currentBodyPointItem.valueTemp1.Item.length;i++)
                    {
                        var obj = $filter('filter')($scope.data.lstBoHuyet, { AutoID: $scope.currentBodyPointItem.valueTemp1.Item[i].BoHuyetID }, true);

                        if (obj != null && obj.length>0)
                        {
                            obj[0].isSelected = true;
                        }
                    }
                }
            }

            $scope.showAddBodyItemModal();
        });

        $scope.panelBodyPointItemControl.addChild(img);

        var img = SceneCanvas.display.image({
            x: 100,
            y: $scope.heightOfHeader / 2,
            image: RemoveIcon50(),
            width: 30,
            height: 30,
            origin: { x: "left", y: "center" },
        });

        img.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.confirmData = {
                type: '2',
                title: 'Remove item',
                content: 'Are you sure remove item?',
            }
            $scope.showConfirmModal();
        });

        $scope.panelBodyPointItemControl.addChild(img);

        $scope.panelHeaderHumanBody.addChild($scope.panelBodyPointItemControl);

        $scope.panelHeaderSceneContent.addChild($scope.panelHeaderHumanBody);

        $scope.panelHeaderScene.addChild($scope.panelHeaderSceneContent);

        SceneCanvas.addChild($scope.panelHeaderScene);
    }

    $scope.setGenderSelected = function()
    {
        $scope.panelHeaderHumanBody.children[0].shadow = $scope.shadowBodyOff;
        $scope.panelHeaderHumanBody.children[1].shadow = $scope.shadowBodyOff;
        $scope.panelManBodyButton.x = $scope.sceneWidth;
        $scope.panelFemaleBodyButton.x = $scope.sceneWidth;

        if ($scope.GenderType == 1)
        {
            $scope.panelHeaderHumanBody.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelManBodyButton.x = 0;
        }
        else
        {
            $scope.panelHeaderHumanBody.children[1].shadow = $scope.shadowBodyOn;
            $scope.panelFemaleBodyButton.x = 0;
        }

        SceneCanvas.redraw();
    }

    $scope.renderMenuHeader = function()
    {
        $scope.panelHeaderMenu = MenuCanvas.display.rectangle({
            x: 0,
            y: 0,
            width: $scope.menuWidth,
            height: $scope.heightOfHeader,
            stroke: "0px #000",
            fill: "rgba(0,0,0, 0.7)",
            itemType: 'panel',
            objectType: "control",
        });

        var img = MenuCanvas.display.image({
            x: 0,
            y: 0,
            image: backgroundHeader(),
            width: $scope.menuWidth,
            height: $scope.heightOfHeader,
        });

        $scope.panelHeaderMenu.addChild(img);

        var text = MenuCanvas.display.text({
            x: $scope.menuWidth / 2,
            y: $scope.heightOfHeader / 2,
            font: "bold 16px sans-serif",
            text: "Administrator",
            fill: "#FFF",
            origin: { x: "center", y: "center" },
            shadow: "0 0 10px rgba(255,255,255,1.0)",
        });

        $scope.panelHeaderMenu.addChild(text);

        MenuCanvas.addChild($scope.panelHeaderMenu);
    }

    $scope.renderMenuButton = function()
    {
        $scope.panelMenuContent = MenuCanvas.display.rectangle({
            x: 0,
            y: $scope.heightOfHeader,
            width: $scope.menuWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });

        var yPos = 10;
        var btn = MenuCanvas.display.rectangle({
            x: 3 * $scope.paddingVeticalMenu,
            y: yPos,
            width: $scope.menuWidth - 4 * $scope.paddingVeticalMenu,
            height: $scope.heightMenuButton,
            stroke: "1px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });
        var img = MenuCanvas.display.image({
            x: 5,
            y: $scope.heightMenuButton / 2,
            image: PosisionIcon32(),
            width: 28,
            height: 28,
            origin: { x: "left", y: "center" },
        });
        btn.addChild(img);
        var text = MenuCanvas.display.text({
            x: 40,
            y: $scope.heightMenuButton / 2,
            font: "bold 12px sans-serif",
            text: "Points",
            fill: "#FFF",
            origin: { x: "left", y: "center" },
        });
        btn.addChild(text);

        btn.bind("mouseenter touchenter", function () {
            MenuCanvas.mouse.cursor("pointer");
            this.stroke = $scope.mouseEnterStateColorButton;
            MenuCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            MenuCanvas.mouse.cursor("default");
            this.stroke = $scope.mouseLeaveStateColorButton;
            MenuCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.removeStartUp();
            $scope.SetChangedData();
            $scope.resetSelectedMenuButton();
            $scope.resetSelectedContent();
            this.fill = $scope.colorSelectedMenuButton;
            $scope.panelPoints.x = 0;
            $scope.panelHeaderPoints.x = 0;
            MenuCanvas.redraw();
            SceneCanvas.redraw();
        });

        $scope.panelMenuContent.addChild(btn);
        ////////////////////////////////////////////////////////////////////
        yPos += $scope.heightMenuButton;
        var btn = MenuCanvas.display.rectangle({
            x: 3 * $scope.paddingVeticalMenu,
            y: yPos,
            width: $scope.menuWidth - 4 * $scope.paddingVeticalMenu,
            height: $scope.heightMenuButton,
            stroke: "1px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });
        var img = MenuCanvas.display.image({
            x: 5,
            y: $scope.heightMenuButton / 2,
            image: groupIcon32(),
            width: 28,
            height: 28,
            origin: { x: "left", y: "center" },
        });
        btn.addChild(img);
        var text = MenuCanvas.display.text({
            x: 40,
            y: $scope.heightMenuButton / 2,
            font: "bold 12px sans-serif",
            text: "Point s Groups",
            fill: "#FFF",
            origin: { x: "left", y: "center" },
        });
        btn.addChild(text);

        btn.bind("mouseenter touchenter", function () {
            MenuCanvas.mouse.cursor("pointer");
            this.stroke = $scope.mouseEnterStateColorButton;
            MenuCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            MenuCanvas.mouse.cursor("default");
            this.stroke = $scope.mouseLeaveStateColorButton;
            MenuCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.SetShowGroup();
            $scope.resetSelectedMenuButton();
            //$scope.resetSelectedContent();
            this.fill = $scope.colorSelectedMenuButton;
            //$scope.panelPointGroup.x = 0;
            MenuCanvas.redraw();
            //SceneCanvas.redraw();
        });

        $scope.panelMenuContent.addChild(btn);
        ////////////////////////////////////////////////////////////////
        yPos += $scope.heightMenuButton;
        var btn = MenuCanvas.display.rectangle({
            x: 3 * $scope.paddingVeticalMenu,
            y: yPos,
            width: $scope.menuWidth - 4 * $scope.paddingVeticalMenu,
            height: $scope.heightMenuButton,
            stroke: "1px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });
        var img = MenuCanvas.display.image({
            x: 5,
            y: $scope.heightMenuButton / 2,
            image: humanIcon32(),
            width: 28,
            height: 28,
            origin: { x: "left", y: "center" },
        });
        btn.addChild(img);
        var text = MenuCanvas.display.text({
            x: 40,
            y: $scope.heightMenuButton / 2,
            font: "bold 12px sans-serif",
            text: "Human Body",
            fill: "#FFF",
            origin: { x: "left", y: "center" },
        });
        btn.addChild(text);

        btn.bind("mouseenter touchenter", function () {
            MenuCanvas.mouse.cursor("pointer");
            this.stroke = $scope.mouseEnterStateColorButton;
            MenuCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            MenuCanvas.mouse.cursor("default");
            this.stroke = $scope.mouseLeaveStateColorButton;
            MenuCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.removeStartUp();
            $scope.SetChangedData();
            $scope.resetSelectedMenuButton();
            $scope.resetSelectedContent();
            this.fill = $scope.colorSelectedMenuButton;
            $scope.panelHumanBody.x = 0;
            $scope.panelHeaderHumanBody.x = 0;
            MenuCanvas.redraw();
            SceneCanvas.redraw();
        });

        $scope.panelMenuContent.addChild(btn);

        ////////////////////////////////////////////////////////////////
        yPos += $scope.heightMenuButton;
        var btn = MenuCanvas.display.rectangle({
            x: 3 * $scope.paddingVeticalMenu,
            y: yPos,
            width: $scope.menuWidth - 4 * $scope.paddingVeticalMenu,
            height: $scope.heightMenuButton,
            stroke: "1px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });
        var img = MenuCanvas.display.image({
            x: 5,
            y: $scope.heightMenuButton / 2,
            image: UsersIcon50(),
            width: 28,
            height: 28,
            origin: { x: "left", y: "center" },
        });
        btn.addChild(img);
        var text = MenuCanvas.display.text({
            x: 40,
            y: $scope.heightMenuButton / 2,
            font: "bold 12px sans-serif",
            text: "Users",
            fill: "#FFF",
            origin: { x: "left", y: "center" },
        });
        btn.addChild(text);

        btn.bind("mouseenter touchenter", function () {
            MenuCanvas.mouse.cursor("pointer");
            this.stroke = $scope.mouseEnterStateColorButton;
            MenuCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            MenuCanvas.mouse.cursor("default");
            this.stroke = $scope.mouseLeaveStateColorButton;
            MenuCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.SetShowUser();
            $scope.resetSelectedMenuButton();
            this.fill = $scope.colorSelectedMenuButton;
            MenuCanvas.redraw();
        });

        $scope.panelMenuContent.addChild(btn);

        ////////////////////////////////////////////////////////////////
        yPos += $scope.heightMenuButton;
        var btn = MenuCanvas.display.rectangle({
            x: 3 * $scope.paddingVeticalMenu,
            y: yPos,
            width: $scope.menuWidth - 4 * $scope.paddingVeticalMenu,
            height: $scope.heightMenuButton,
            stroke: "1px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });
        var img = MenuCanvas.display.image({
            x: 5,
            y: $scope.heightMenuButton / 2,
            image: renderSettingIcon50(),
            width: 28,
            height: 28,
            origin: { x: "left", y: "center" },
        });
        btn.addChild(img);
        var text = MenuCanvas.display.text({
            x: 40,
            y: $scope.heightMenuButton / 2,
            font: "bold 12px sans-serif",
            text: "Setting",
            fill: "#FFF",
            origin: { x: "left", y: "center" },
        });
        btn.addChild(text);

        btn.bind("mouseenter touchenter", function () {
            MenuCanvas.mouse.cursor("pointer");
            this.stroke = $scope.mouseEnterStateColorButton;
            MenuCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            MenuCanvas.mouse.cursor("default");
            this.stroke = $scope.mouseLeaveStateColorButton;
            MenuCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.SetSettingShow();
            $scope.resetSelectedMenuButton();
            this.fill = $scope.colorSelectedMenuButton;
            MenuCanvas.redraw();
        });

        $scope.panelMenuContent.addChild(btn);

        ////////////////////////////////////////////////////////////////
        yPos += $scope.heightMenuButton;
        var btn = MenuCanvas.display.rectangle({
            x: 3 * $scope.paddingVeticalMenu,
            y: yPos,
            width: $scope.menuWidth - 4 * $scope.paddingVeticalMenu,
            height: $scope.heightMenuButton,
            stroke: "1px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });
        var img = MenuCanvas.display.image({
            x: 5,
            y: $scope.heightMenuButton / 2,
            image: renderHelpIcon50(),
            width: 28,
            height: 28,
            origin: { x: "left", y: "center" },
        });
        btn.addChild(img);
        var text = MenuCanvas.display.text({
            x: 40,
            y: $scope.heightMenuButton / 2,
            font: "bold 12px sans-serif",
            text: "Help",
            fill: "#FFF",
            origin: { x: "left", y: "center" },
        });
        btn.addChild(text);

        btn.bind("mouseenter touchenter", function () {
            MenuCanvas.mouse.cursor("pointer");
            this.stroke = $scope.mouseEnterStateColorButton;
            MenuCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            MenuCanvas.mouse.cursor("default");
            this.stroke = $scope.mouseLeaveStateColorButton;
            MenuCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.SetHelpShow();
            $scope.resetSelectedMenuButton();
            this.fill = $scope.colorSelectedMenuButton;
            MenuCanvas.redraw();
        });

        $scope.panelMenuContent.addChild(btn);

        ////////////////////////////////////////////////////////////////
        yPos += $scope.heightMenuButton + 10;
        var btn = MenuCanvas.display.rectangle({
            x: 3 * $scope.paddingVeticalMenu,
            y: yPos,
            width: $scope.menuWidth - 4 * $scope.paddingVeticalMenu,
            height: $scope.heightMenuButton,
            stroke: "1px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });

        var img = MenuCanvas.display.image({
            x: 5,
            y: $scope.heightMenuButton / 2,
            image: renderHomeIcon50(),
            width: 28,
            height: 28,
            origin: { x: "left", y: "center" },
        });
        btn.addChild(img);
        var text = MenuCanvas.display.text({
            x: 40,
            y: $scope.heightMenuButton / 2,
            font: "bold 12px sans-serif",
            text: "Go To Main Page",
            fill: "#FFF",
            origin: { x: "left", y: "center" },
        });
        btn.addChild(text);

        btn.bind("mouseenter touchenter", function () {
            MenuCanvas.mouse.cursor("pointer");
            this.fill = $scope.colorSelectedMenuButton;
            MenuCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            MenuCanvas.mouse.cursor("default");
            this.fill = $scope.bgColorMenu;
            MenuCanvas.redraw();
        }).bind("click tap ", function () {
            var url = $scope.baseURL + "Home/Index";
            $window.location.href = url;
        });

        $scope.panelMenuContent.addChild(btn);

        ////////////////////////////////////////////////////////////////
        yPos += $scope.heightMenuButton;
        var btn = MenuCanvas.display.rectangle({
            x: 3 * $scope.paddingVeticalMenu,
            y: yPos,
            width: $scope.menuWidth - 4 * $scope.paddingVeticalMenu,
            height: $scope.heightMenuButton,
            stroke: "1px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });

        var img = MenuCanvas.display.image({
            x: 7,
            y: $scope.heightMenuButton / 2,
            image: renderLogoutIcon50(),
            width: 24,
            height: 24,
            origin: { x: "left", y: "center" },
        });
        btn.addChild(img);
        var text = MenuCanvas.display.text({
            x: 40,
            y: $scope.heightMenuButton / 2,
            font: "bold 12px sans-serif",
            text: "Logout",
            fill: "#FFF",
            origin: { x: "left", y: "center" },
        });
        btn.addChild(text);

        btn.bind("mouseenter touchenter", function () {
            MenuCanvas.mouse.cursor("pointer");
            this.fill = $scope.colorSelectedMenuButton;
            MenuCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            MenuCanvas.mouse.cursor("default");
            this.fill = $scope.bgColorMenu;
            MenuCanvas.redraw();
        }).bind("click tap ", function () {
            var url = $scope.baseURL + "Home/LogOut";
            $window.location.href = url;
        });

        $scope.panelMenuContent.addChild(btn);

        MenuCanvas.addChild($scope.panelMenuContent);
    }

    $scope.renderPanelPoints = function()
    {
        //$scope.panelPoints

        //render back ground 
        $scope.renderBackgroundPanelPoint();

        $scope.renderGridPanelPoints();

        $scope.renderPointsInPanelPoints();
        $scope.renderThumb();

         $scope.currentBackground = $scope.panelBackground.children[2];
        $scope.currentBackground .x = $scope.sceneWidth / 2 - $scope.panelBackground.children[2].width / 2;
        $scope.currentBackground .y = 0
        $scope.offset = $scope.currentBackground.offset;
        $scope.panelThumB.children[$scope.currentBackground.itemIndex + 1].children[0].fill = $scope.thumBSelectColor;
        $scope.panelListPoints.children[$scope.currentBackground.itemIndex].x = 0;
        $scope.panelGrid.children[$scope.currentBackground.itemIndex].x = 0;
    }

    $scope.renderBackgroundPanelPoint = function()
    {
        $scope.panelBackground = renderPanelBackgroundAdmin(0, 0, $scope.sceneWidth, $scope.heightOfContent);

        var img = renderEarLeftAdmin(2 * $scope.sceneWidth, 0, $scope.WidthOfEar, $scope.HeightOfEar, 0);
        $scope.setBackground(img);
        $scope.panelBackground.addChild(img);
        var img = renderHaftFaceLeftAdmin(2 * $scope.sceneWidth, 0, $scope.WidthOfHafFace, $scope.HeightOfHafFace, 1);
        $scope.setBackground(img);
        $scope.panelBackground.addChild(img);
        var img = renderFrontFaceAdmin(2 * $scope.sceneWidth, 0, $scope.WidthOfFrontFace, $scope.HeightOfFrontFace, 2);
        $scope.setBackground(img);
        $scope.panelBackground.addChild(img);
        var img = renderHaftFaceRightAdmin(2 * $scope.sceneWidth, 0, $scope.WidthOfHafFace, $scope.HeightOfHafFace, 3);
        $scope.setBackground(img);
        $scope.panelBackground.addChild(img);
        var img = renderEarRightAdmin(2 * $scope.sceneWidth, 0, $scope.WidthOfEar, $scope.HeightOfEar, 4);
        $scope.setBackground(img);
        $scope.panelBackground.addChild(img);
        var img = renderNoseAdmin(2 * $scope.sceneWidth, 0, $scope.WidthOfNose, $scope.HeightOfNose, 5);
        $scope.setBackground(img);
        $scope.panelBackground.addChild(img);
        $scope.panelPoints.addChild($scope.panelBackground);
    }

    $scope.setBackground = function (item) {

        if ($scope.heightOfContent < item.height) {
            item.offset = $scope.heightOfContent / item.height;
        }

        item.width = item.width * item.offset;
        item.height = item.height * item.offset;

    }

    $scope.convertToPointOfScreen = function(point, xCenter, yCenter, offset)
    {
        try {
            point.X = Math.floor(point.XReal * offset) + xCenter;
            point.Y = Math.floor(point.YReal * offset) + yCenter;
        }
        catch (err) {
            console.log(err.message);
        }
    }

    $scope.resetSelectedCurrentPoint = function()
    {
        if($scope.currentPoint != null)
        {
            $scope.panelPointItemControl.y = -$scope.heightOfHeader;
            $scope.currentPoint.fill = "#F00";
            $scope.currentPoint.radius = 4;
            $scope.currentPoint = null;
            $scope.currentDataPoint = null;
            SceneCanvas.redraw();
        }
    }

    $scope.onPointClick= function(item)
    {
        $scope.resetSelectedCurrentPoint();
        $scope.currentPoint = item;
        $scope.currentDataPoint = item.valueTemp1;
        $scope.currentPoint.fill = "#FF0";
        $scope.currentPoint.radius = 6;
        $scope.panelPointItemControl.y = 0;
        SceneCanvas.redraw();
    }

    $scope.MakeNewPoint = function (e) {
        $scope.resetSelectedCurrentPoint();
        $scope.isEdit = false;
        $scope.viewPoint = false;
        $scope.MirronState.isAddMirronPoint = false;
        $scope.showAddMirron = false;

        console.log(e.x, e.y,$scope.currentBackground.x,$scope.currentBackground.y, e.x - $scope.currentBackground.x, e.y - $scope.currentBackground.y);
        $scope.pointInfo = {
            Description: '',
            CongDung: '',
            ChuTri: '',
            Region: $scope.currentBackground.itemIndex,
            Number: '',
            Position: '',
            IsMirron: '',
            X: e.x - $scope.currentBackground.x,
            Y: e.y - $scope.currentBackground.y - $scope.heightOfHeader,
            XReal: 0,
            YReal: 0,
            AutoID: ''
        }

        $scope.currentPoint = $scope.pointInfo;

        $scope.showAddOrEditPointModal();
    }

    $scope.renderPointsInPanelPoints = function()
    {
        $scope.panelListPoints = renderPanelBackgroundAdmin(0, 0, $scope.sceneWidth, $scope.sceneHeight);

        // ear left
        var pn = renderPanelListPointItemAdmin(2*$scope.sceneWidth, 0, $scope.sceneWidth, $scope.sceneHeight, 0);

        var objs = $filter('filter')($scope.points, { Region: '0' }, true);
        
        var posX = $scope.sceneWidth / 2 - $scope.panelBackground.children[0].width / 2;
        var posY = $scope.sceneHeight / 2 - $scope.panelBackground.children[0].height / 2;

        if (objs.length > 0)
        {
            for(var i=0;i<objs.length;i++)
            {
                var obj = objs[i];
                $scope.convertToPointOfScreen(obj, posX, posY, $scope.panelBackground.children[0].offset);
                var h = renderPointItemAdmin(obj.X, obj.Y, obj.Number);
               h.xReal = obj.XReal;
                h.yReal = obj.YReal;
             h.valueTemp1 = obj;
              h.number = obj.Number;
                h.regionType = '0';
                h.positionType = '0';
                h.bind("mouseenter touchenter", function () {
                    SceneCanvas.mouse.cursor("pointer");
                    this.stroke = "2px #0f0";
                    SceneCanvas.redraw();
                }).bind("mouseleave touchleave", function () {
                    SceneCanvas.mouse.cursor("default");
                    this.stroke = "0px #0f0";
                    SceneCanvas.redraw();
                }).bind("click tap ", function () {
                    $scope.onPointClick(this);
                });
                pn.addChild(h);
            }
        }

        pn.bind("click tap ", function (e) {
            if ((e.button == 2 || e.which == 2))
            {
                $scope.MakeNewPoint(e);
            }
        });

        $scope.panelListPoints.addChild(pn);

        // HafFace left
        var pn = renderPanelListPointItemAdmin(2*$scope.sceneWidth, 0, $scope.sceneWidth, $scope.sceneHeight, 1);
        var objs = $filter('filter')($scope.points, { Region: '1' }, true);
        var posX = $scope.sceneWidth / 2 - $scope.panelBackground.children[1].width / 2;
        var posY = 0;
        if (objs.length > 0) {
            for (var i = 0; i < objs.length; i++) {
                var obj = objs[i];
                $scope.convertToPointOfScreen(obj, posX, posY, $scope.panelBackground.children[1].offset);
                var h = renderPointItemAdmin(obj.X, obj.Y, obj.Number);
                h.xReal = obj.XReal;
                h.yReal = obj.YReal;
                h.valueTemp1 = obj;
                h.number = obj.Number;
                h.regionType = '1';
                h.positionType = '0';
                h.bind("mouseenter touchenter", function () {
                    SceneCanvas.mouse.cursor("pointer");
                    this.stroke = "2px #0F0";
                    SceneCanvas.redraw();
                }).bind("mouseleave touchleave", function () {
                    SceneCanvas.mouse.cursor("default");
                    this.stroke = "0px #0F0";
                    SceneCanvas.redraw();
                }).bind("click tap ", function () {
                    $scope.onPointClick(this);
                });
                pn.addChild(h);
            }
        }

        pn.bind("click tap ", function (e) {
            if ((e.button == 2 || e.which == 2))
            {
                $scope.MakeNewPoint(e);
            }
        });

        $scope.panelListPoints.addChild(pn);

         // face
        var pn = renderPanelListPointItemAdmin(2*$scope.sceneWidth, 0, $scope.sceneWidth, $scope.sceneHeight, 2);
        var objs = $filter('filter')($scope.points, { Region: '2' }, true);
        var posX = $scope.sceneWidth / 2 - $scope.panelBackground.children[2].width / 2;
        var posY = 0;

        if (objs.length > 0) {
            for (var i = 0; i < objs.length; i++) {
                var obj = objs[i];
                $scope.convertToPointOfScreen(obj, posX, posY, $scope.panelBackground.children[2].offset);
                var h = renderPointItemAdmin(obj.X, obj.Y, obj.Number);
                h.xReal = obj.XReal;
                h.yReal = obj.YReal;
                h.valueTemp1 = obj;
                h.number = obj.Number;
                h.regionType = '2';
                h.positionType = '0';
                h.bind("mouseenter touchenter", function () {
                    SceneCanvas.mouse.cursor("pointer");
                    this.stroke = "2px #0F0";
                    SceneCanvas.redraw();
                }).bind("mouseleave touchleave", function () {
                    SceneCanvas.mouse.cursor("default");
                    this.stroke = "0px #0F0";
                    SceneCanvas.redraw();
                }).bind("click tap ", function () {
                   $scope.onPointClick(this);
                });
                pn.addChild(h);
            }
        }

        pn.bind("click tap ", function (e) {
            if ((e.button == 2 || e.which == 2))
            {
                $scope.MakeNewPoint(e);
            }
        });

        $scope.panelListPoints.addChild(pn);

         // Haft face right
        var pn = renderPanelListPointItemAdmin(2*$scope.sceneWidth, 0, $scope.sceneWidth, $scope.sceneHeight, 3);
        var objs = $filter('filter')($scope.points, { Region: '3' }, true);
        var posX = $scope.sceneWidth / 2 - $scope.panelBackground.children[3].width / 2;
        var posY = 0;
        if (objs.length > 0) {
            for (var i = 0; i < objs.length; i++) {
                var obj = objs[i];
                $scope.convertToPointOfScreen(obj, posX, posY, $scope.panelBackground.children[3].offset);
                var h = renderPointItemAdmin(obj.X, obj.Y, obj.Number);
                h.xReal = obj.XReal;
                h.yReal = obj.YReal;
                h.valueTemp1 = obj;
                h.number = obj.Number;
                h.regionType = '3';
                h.positionType = '0';
                h.bind("mouseenter touchenter", function () {
                    SceneCanvas.mouse.cursor("pointer");
                    this.stroke = "2px #0F0";
                    SceneCanvas.redraw();
                }).bind("mouseleave touchleave", function () {
                    SceneCanvas.mouse.cursor("default");
                    this.stroke = "0px #0F0";
                    SceneCanvas.redraw();
                }).bind("click tap ", function () {
                    $scope.onPointClick(this);
                });
                pn.addChild(h);
            }
        }

        pn.bind("click tap ", function (e) {
            if ((e.button == 2 || e.which == 2))
            {
                $scope.MakeNewPoint(e);
            }
        });

        $scope.panelListPoints.addChild(pn);

        // Ear right
        var pn = renderPanelListPointItemAdmin(2*$scope.sceneWidth, 0, $scope.sceneWidth, $scope.sceneHeight, 4);
        var objs = $filter('filter')($scope.points, { Region: '4' }, true);
        var posX = $scope.sceneWidth / 2 - $scope.panelBackground.children[4].width / 2;
        var posY = $scope.sceneHeight / 2 - $scope.panelBackground.children[4].height / 2;
        if (objs.length > 0) {
            for (var i = 0; i < objs.length; i++) {
                var obj = objs[i];
                $scope.convertToPointOfScreen(obj, posX, posY, $scope.panelBackground.children[4].offset);
                var h = renderPointItemAdmin(obj.X, obj.Y, obj.Number);
                h.xReal = obj.XReal;
                h.yReal = obj.YReal;
                h.valueTemp1 = obj;
                h.number = obj.Number;
                h.regionType = '4';
                h.positionType = '0';
                h.bind("mouseenter touchenter", function () {
                    SceneCanvas.mouse.cursor("pointer");
                    this.stroke = "2px #0F0";
                    SceneCanvas.redraw();
                }).bind("mouseleave touchleave", function () {
                    SceneCanvas.mouse.cursor("default");
                    this.stroke = "0px #0F0";
                    SceneCanvas.redraw();
                }).bind("click tap ", function () {
                    $scope.onPointClick(this);
                });
                pn.addChild(h);
            }
        }

        pn.bind("click tap ", function (e) {
            if ((e.button == 2 || e.which == 2))
            {
                $scope.MakeNewPoint(e);
            }
        });

        $scope.panelListPoints.addChild(pn);

        // Nose
        var pn = renderPanelListPointItemAdmin(2*$scope.sceneWidth, 0, $scope.sceneWidth, $scope.sceneHeight, 5);
        var objs = $filter('filter')($scope.points, { Region: '5' }, true);
        var posX = $scope.sceneWidth / 2 - $scope.panelBackground.children[5].width / 2;
        var posY = $scope.sceneHeight / 2 - $scope.panelBackground.children[5].height / 2;
        if (objs.length > 0) {
            for (var i = 0; i < objs.length; i++) {
                var obj = objs[i];
                $scope.convertToPointOfScreen(obj, posX, posY, $scope.panelBackground.children[5].offset);
                var h = renderPointItemAdmin(obj.X, obj.Y, obj.Number);
                h.xReal = obj.XReal;
                h.yReal = obj.YReal;
                h.valueTemp1 = obj;
                h.number = obj.Number;
                h.regionType = '5';
                h.positionType = '0';
                h.bind("mouseenter touchenter", function () {
                    SceneCanvas.mouse.cursor("pointer");
                    this.stroke = "2px #0F0";
                    SceneCanvas.redraw();
                }).bind("mouseleave touchleave", function () {
                    SceneCanvas.mouse.cursor("default");
                    this.stroke = "0px #0F0";
                    SceneCanvas.redraw();
                }).bind("click tap ", function () {
                    $scope.onPointClick(this);
                });
                pn.addChild(h);
            }
        }

        pn.bind("click tap ", function (e) {
            if ((e.button == 2 || e.which == 2))
            {
                $scope.MakeNewPoint(e);
            }
        });

        $scope.panelListPoints.addChild(pn);

        $scope.panelPoints.addChild($scope.panelListPoints);
    }

    $scope.renderThumb = function () {
        $scope.panelThumB = renderPanelThumbAdmin(0, 0, $scope.ItemThumbWidth,
            6 * $scope.ItemThumbHeight, $scope.BoxTitleHeight, $scope.BoxContentHeigth);

        $scope.panelThumB.children[1]
        .bind("mouseenter touchenter", function () {
           // if (!$scope.EarLeftEnable) return;

            SceneCanvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
          //  if (!$scope.EarLeftEnable) return;

            SceneCanvas.mouse.cursor("default");

            if ($scope.currentBackground.itemIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            SceneCanvas.redraw();
        }).bind("click tap ", function () {
          //  if (!$scope.EarLeftEnable) return;

            $scope.SetCurrentBackground(this);
        });

        $scope.panelThumB.children[2]
        .bind("mouseenter touchenter", function () {
           // if (!$scope.HafFaceLeftEnable) return;

            SceneCanvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
           // if (!$scope.HafFaceLeftEnable) return;

            SceneCanvas.mouse.cursor("default");

            if ($scope.currentBackground.itemIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            SceneCanvas.redraw();
        }).bind("click tap ", function () {
           // if (!$scope.HafFaceLeftEnable) return;

            $scope.SetCurrentBackground(this);
        });


        $scope.panelThumB.children[3]
        .bind("mouseenter touchenter", function () {
            //if (!$scope.FaceEnable) return;

            SceneCanvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
          //  if (!$scope.FaceEnable) return;

            SceneCanvas.mouse.cursor("default");

            if ($scope.currentBackground.itemIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            SceneCanvas.redraw();
        }).bind("click tap ", function () {
          //  if (!$scope.FaceEnable) return;

            $scope.SetCurrentBackground(this);
        });

        $scope.panelThumB.children[4]
        .bind("mouseenter touchenter", function () {
           // if (!$scope.HafFaceRightEnable) return;

            SceneCanvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
           // if (!$scope.HafFaceRightEnable) return;

            SceneCanvas.mouse.cursor("default");

            if ($scope.currentBackground.itemIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            SceneCanvas.redraw();
        }).bind("click tap ", function () {
           // if (!$scope.HafFaceRightEnable) return;

           $scope.SetCurrentBackground(this);
        });

        $scope.panelThumB.children[5]
        .bind("mouseenter touchenter", function () {
          //  if (!$scope.EarRightEnable) return;

            SceneCanvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
          //  if (!$scope.EarRightEnable) return;

            SceneCanvas.mouse.cursor("default");

            if ($scope.currentBackground.itemIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            SceneCanvas.redraw();
        }).bind("click tap ", function () {
         //   if (!$scope.EarRightEnable) return;

           $scope.SetCurrentBackground(this);
        });

        $scope.panelThumB.children[6]
        .bind("mouseenter touchenter", function () {
          //  if (!$scope.NoseEnable) return;

            SceneCanvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
          //  if (!$scope.NoseEnable) return;

            SceneCanvas.mouse.cursor("default");

            if ($scope.currentBackground.itemIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            SceneCanvas.redraw();
        }).bind("click tap ", function () {
          //  if (!$scope.NoseEnable) return;

            $scope.SetCurrentBackground(this);
        });

        $scope.panelThumB.x = 5;
        $scope.panelThumB.y = 10;
        $scope.panelPoints.addChild($scope.panelThumB);
    }

    $scope.SetCurrentBackground = function(obj)
    {
        if ($scope.currentBackground.itemIndex != this.itemIndex) {
            $scope.panelThumB.children[$scope.currentBackground.itemIndex + 1].children[0].fill = $scope.thumBLeaveColor;
            $scope.currentBackground.x = 2 * $scope.sceneWidth + 10;
            //$scope.panelFindResultPoint.children[$scope.currentBackground.itemIndex].x = 2 * $scope.frameWidth + 10;
            $scope.panelListPoints.children[$scope.currentBackground.itemIndex].x = 2 * $scope.sceneWidth + 10;
            $scope.panelGrid.children[$scope.currentBackground.itemIndex].x = 2 * $scope.sceneWidth + 10;
            // $scope.panelDoHinh.children[$scope.currentBackground.itemIndex].x = 2 * $scope.frameWidth + 10;
            $scope.currentBackground = $scope.panelBackground.children[obj.itemIndex];
            $scope.currentBackground.x = $scope.sceneWidth / 2 - $scope.currentBackground.width / 2;

            if ($scope.currentBackground.itemIndex == 1 || $scope.currentBackground.itemIndex == 2 || $scope.currentBackground.itemIndex == 3)
            {
                $scope.currentBackground.y = 0;
            }
            else
            {
                $scope.currentBackground.y = $scope.sceneHeight / 2 - $scope.currentBackground.height / 2;
            }
            
            $scope.offset = $scope.currentBackground.offset;
            //$scope.panelFindResultPoint.children[$scope.currentBackground.itemIndex].x = 0;
            $scope.panelListPoints.children[$scope.currentBackground.itemIndex].x = 0;
            $scope.panelGrid.children[$scope.currentBackground.itemIndex].x = 0;
           // $scope.panelDoHinh.children[$scope.currentBackground.itemIndex].x = 0;
            obj.children[0].fill = $scope.thumBSelectColor;
            SceneCanvas.redraw();
        }
    }

    $scope.renderGridPanelPoints = function()
    {
        $scope.panelGrid = renderPanelGridAdmin(0, 0, $scope.sceneWidth, $scope.sceneHeight);

         //ear left
        var pn = renderPanelGridAdmin($scope.sceneWidth, 0, $scope.sceneWidth, $scope.sceneHeight);
        $scope.panelGrid.addChild(pn);

        // haft face left
        var pn = renderPanelGridAdmin($scope.sceneWidth, 0, $scope.sceneWidth, $scope.sceneHeight);
        var _B_X = $scope.sceneWidth/2 - $scope.panelBackground.children[1].width / 2;
        var _B_Y = 0
        for (var i = 0; i < hafFaceGrid_Ver.length; i++) {
            var grid_X = Math.floor(hafFaceGrid_Ver[i] * $scope.panelBackground.children[1].offset);
            var line1 = SceneCanvas.display.LineShapeVer({
                x: _B_X + $scope.panelBackground.children[1].width - grid_X,
                y: _B_Y,
                width: 0,
                height: $scope.panelBackground.children[1].height,
                stroke: "1px #0ff",
            });

            var cir = SceneCanvas.display.ellipse({
                x: 0,
                y: 0,
                radius: 6,
                stroke: "0px #000",
                fill: "#FFF",
                origin: { x: "center", y: "center" },
            });

            var text0 = SceneCanvas.display.text({
                x: 0,
                y: 0,
                font: "bold 8px sans-serif",
                text: strHafFaceGrid_Ver[i],
                fill: "#000",
                origin: { x: "center", y: "center" },
            });

            cir.addChild(text0);

            line1.addChild(cir);

            pn.addChild(line1);
        }

        for (var i = 0; i < hafFaceGrid_Hor.length; i++) {
            var grid_Y = Math.floor(hafFaceGrid_Hor[i] * $scope.panelBackground.children[1].offset);

            var line1 = SceneCanvas.display.LineShapeHor({
                x: _B_X + $scope.padding,
                y: _B_Y + grid_Y,
                width: $scope.panelBackground.children[1].width - 2 * $scope.padding,
                height: 0,
                stroke: "1px #0ff",
            });

            var cir = SceneCanvas.display.ellipse({
                x: 0,
                y: 0,
                radius: 12,
                stroke: "0px #000",
                fill: "#FFF",
                origin: { x: "center", y: "center" },
            });

            var text0 = SceneCanvas.display.text({
                x: 0,
                y: 0,
                font: "bold 11px sans-serif",
                text: strFaceGrid_Hor[i],
                fill: "#000",
                origin: { x: "center", y: "center" },
            });

            cir.addChild(text0);

            line1.addChild(cir);

            pn.addChild(line1);
        }

        $scope.panelGrid.addChild(pn);

        // Face
        var pn = renderPanelGridAdmin($scope.sceneWidth, 0, $scope.sceneWidth, $scope.sceneHeight);

        var _B_X = $scope.sceneWidth/2 - $scope.panelBackground.children[2].width / 2;
        var _B_Y =0
        for (var i = 0; i < faceGrid_Ver.length; i++) {
            var grid_X = Math.floor(faceGrid_Ver[i] * $scope.panelBackground.children[2].offset);
            var line1 = SceneCanvas.display.LineShapeVer({
                x: $scope.sceneWidth/2 - grid_X,
                y: _B_Y,
                width: 0,
                height: $scope.panelBackground.children[2].height,
                stroke: "1px #0ff",
                objectType: 'v1',
                itemIndex: i,
            });

            var cir = SceneCanvas.display.ellipse({
                x: 0,
                y: 0,
                radius: 6,
                stroke: "0px #000",
                fill: "#FFF",
                origin: { x: "center", y: "center" },
            });

            var text0 = SceneCanvas.display.text({
                x: 0,
                y: 0,
                font: "bold 8px sans-serif",
                text: strFaceGrid_ver[i],
                fill: "#000",
                origin: { x: "center", y: "center" },
            });

            cir.addChild(text0);

            line1.addChild(cir);

            pn.addChild(line1);

            if (i > 0) {
                var line1 = SceneCanvas.display.LineShapeVer({
                    x: $scope.sceneWidth/2 + grid_X,
                    y: _B_Y,
                    width: 0,
                    height: $scope.panelBackground.children[2].height,
                    stroke: "1px #0ff",
                    objectType: 'v2',
                    itemIndex: i,
                });

                var cir = SceneCanvas.display.ellipse({
                    x: 0,
                    y: 0,
                    radius: 6,
                    stroke: "0px #000",
                    fill: "#FFF",
                    origin: { x: "center", y: "center" },
                });

                var text0 = SceneCanvas.display.text({
                    x: 0,
                    y: 0,
                    font: "bold 8px sans-serif",
                    text: strFaceGrid_ver[i],
                    fill: "#000",
                    origin: { x: "center", y: "center" },
                });

                cir.addChild(text0);

                line1.addChild(cir);

                pn.addChild(line1);
            }
        }

        for (var i = 0; i < faceGrid_Hor.length; i++) {
            var grid_Y = Math.floor(faceGrid_Hor[i] * $scope.panelBackground.children[2].offset);
            var line1 = SceneCanvas.display.LineShapeHor({
                x: _B_X + $scope.padding,
                y: _B_Y + grid_Y,
                width: $scope.panelBackground.children[2].width- 2* $scope.padding,
                height: 0,
                stroke: "1px #0ff",
                objectType: 'h',
                itemIndex: i,
            });

            var cir = SceneCanvas.display.ellipse({
                x: $scope.panelBackground.children[2].width - 2*$scope.padding,
                y: 0,
                radius: 12,
                stroke: "0px #000",
                fill: "#FFF",
                origin: { x: "center", y: "center" },
            });

            var text0 = SceneCanvas.display.text({
                x: 0,
                y: 0,
                font: "bold 11px sans-serif",
                text: strFaceGrid_Hor[i],
                fill: "#000",
                origin: { x: "center", y: "center" },
            });

            cir.addChild(text0);

            line1.addChild(cir);
            pn.addChild(line1);
        }

        $scope.panelGrid.addChild(pn);

        // Haft face right
        var pn = renderPanelGridAdmin($scope.sceneWidth, 0, $scope.sceneWidth, $scope.screenHeight);

        var _B_X = $scope.sceneWidth/2 - $scope.panelBackground.children[3].width / 2;
        var _B_Y =0
        for (var i = 0; i < hafFaceGrid_Ver.length; i++) {
            var grid_X = Math.floor(hafFaceGrid_Ver[i] * $scope.panelBackground.children[3].offset);
            var line1 = SceneCanvas.display.LineShapeVer({
                x: _B_X + grid_X,
                y: _B_Y,
                width: 0,
                height: $scope.panelBackground.children[3].height,
                stroke: "1px #0ff",
            });

            var cir = SceneCanvas.display.ellipse({
                x: 0,
                y: 0,
                radius: 6,
                stroke: "0px #000",
                fill: "#FFF",
                origin: { x: "center", y: "center" },
            });

            var text0 = SceneCanvas.display.text({
                x: 0,
                y: 0,
                font: "bold 8px sans-serif",
                text: strHafFaceGrid_Ver[i],
                fill: "#000",
                origin: { x: "center", y: "center" },
            });

            cir.addChild(text0);

            line1.addChild(cir);

            pn.addChild(line1);
        }

        for (var i = 0; i < hafFaceGrid_Hor.length; i++) {
            var grid_Y = Math.floor(hafFaceGrid_Hor[i] * $scope.panelBackground.children[3].offset);

            var line1 = SceneCanvas.display.LineShapeHor({
                x: _B_X + $scope.padding,
                y: _B_Y + grid_Y,
                width: $scope.panelBackground.children[3].width - 2 * $scope.padding,
                height: 0,
                stroke: "1px #0ff",
            });

            var cir = SceneCanvas.display.ellipse({
                x: $scope.panelBackground.children[3].width - 2 * $scope.padding,
                y: 0,
                radius: 12,
                stroke: "0px #000",
                fill: "#FFF",
                origin: { x: "center", y: "center" },
            });

            var text0 = SceneCanvas.display.text({
                x: 0,
                y: 0,
                font: "bold 11px sans-serif",
                text: strFaceGrid_Hor[i],
                fill: "#000",
                origin: { x: "center", y: "center" },
            });

            cir.addChild(text0);

            line1.addChild(cir);

            pn.addChild(line1);
        }
        $scope.panelGrid.addChild(pn);

        // ear right
        var pn = renderPanelGridAdmin($scope.sceneWidth, 0, $scope.sceneWidth, $scope.screenHeight);

        $scope.panelGrid.addChild(pn);


        // nose

        var pn = renderPanelGridAdmin($scope.sceneWidth, 0, $scope.sceneWidth, $scope.screenHeight);

        $scope.panelGrid.addChild(pn);

        $scope.panelPoints.addChild($scope.panelGrid);
    }

    $scope.renderContent = function ()
    {       
        $scope.panelContent = SceneCanvas.display.rectangle({
            x: 0,
            y: $scope.heightOfHeader,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000",
            fill: "rgba(0,0,0, 1.0)",
            itemType: 'panel',
            objectType: "control",
        });

        

        // panel point
        $scope.panelPoints = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'panel',
            objectType: "control",
        });

        $scope.renderPanelPoints();

        $scope.panelContent.addChild($scope.panelPoints);

        // panel point group
        $scope.panelPointGroup = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000",
            fill: "rgba(0,255,0, 1.0)",
            itemType: 'panel',
            objectType: "control",
        });

        $scope.panelContent.addChild($scope.panelPointGroup);

        // panel Humal
        $scope.panelHumanBody = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000",
            fill: "rgba(0,0,0, 1.0)",
            itemType: 'panel',
            objectType: "control",
        });

        $scope.renderContentOfPanelHumanBody();

        $scope.panelContent.addChild($scope.panelHumanBody);

        SceneCanvas.addChild($scope.panelContent);

        $scope.panelStartUp = SceneCanvas.display.rectangle({
            x: 0,
            y: $scope.heightOfHeader,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000",
            fill: "rgba(0,0,0, 1.0)",
            itemType: 'panel',
            objectType: "control",
        });

        var img = SceneCanvas.display.image({
            x: $scope.sceneWidth / 2 - 288,
            y: 10,
            width: 576,
            height: 376,
            image: renderBitmapLogo(),
        });

        $scope.panelStartUp.addChild(img);

        SceneCanvas.addChild($scope.panelStartUp);
    }

    $scope.removeStartUp = function()
    {
        if($scope.panelStartUp != null)
        {
            SceneCanvas.removeChild($scope.panelStartUp);
            $scope.panelStartUp = null;
        }
    }

    $scope.RenderPanelViscera = function () {
        var n = 5;
        var nItem = $scope.heightOfContent / n;
        var w = 80;
        var imgRadius = 60;
        $scope.panelvisceraHuman = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth / 2 - $scope.imgWidth / 2 - w,
            y: $scope.imgPadding ,
            width: 5,
            height: 5,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        // left
        var p1 = SceneCanvas.display.rectangle({
            x: 0,
            y: 0,
            width: w,
            height: nItem,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        // brain
        var yPos = nItem / 2;
        var cir = SceneCanvas.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });

        var line = SceneCanvas.display.line({
            start: { x: w / 2, y: 0 },
            end: { x: w / 2+20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);

        var img = SceneCanvas.display.image({
            x: -imgRadius / 2,
            y: -imgRadius / 2,
            image: renderBrainIcon(),
            width: imgRadius,
            height: imgRadius,
            itemType: 'Image',
            objectType: "Image",
            orgin: { x: "center", y: "center" },
        });
        cir.addChild(img);

        cir.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(1);
        });
        p1.addChild(cir);

        //lung
        yPos += nItem;
        var cir = SceneCanvas.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = SceneCanvas.display.line({
            start: { x: w / 2, y: 0 },
            end: { x: w / 2 + 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = SceneCanvas.display.image({
            x: -imgRadius / 2,
            y: -imgRadius / 2,
            image: renderLungsIcon(),
            width: imgRadius,
            height: imgRadius,
            itemType: 'Image',
            objectType: "Image",
            orgin: { x: "center", y: "center" },
        });
        cir.addChild(img);

        cir.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(3);
        });

        p1.addChild(cir);

        //Heart
        yPos += nItem;
        var cir = SceneCanvas.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = SceneCanvas.display.line({
            start: { x: w / 2, y: 0 },
            end: { x: w / 2 + 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = SceneCanvas.display.image({
            x: -imgRadius / 2,
            y: -imgRadius / 2,
            image: renderHeartIcon(),
            width: imgRadius,
            height: imgRadius,
            itemType: 'Image',
            objectType: "Image",
            orgin: { x: "center", y: "center" },
        });
        cir.addChild(img);

        cir.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(5);
        });

        p1.addChild(cir);

        //liver
        yPos += nItem;
        var cir = SceneCanvas.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = SceneCanvas.display.line({
            start: { x: w / 2, y: 0 },
            end: { x: w / 2 + 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = SceneCanvas.display.image({
            x: -imgRadius / 2,
            y: -imgRadius / 2,
            image: renderLiverIcon(),
            width: imgRadius,
            height: imgRadius,
            itemType: 'Image',
            objectType: "Image",
            orgin: { x: "center", y: "center" },
        });
        cir.addChild(img);

        cir.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(7);
        });

        p1.addChild(cir);

        //bone
        yPos += nItem;
        var cir = SceneCanvas.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = SceneCanvas.display.line({
            start: { x: w / 2, y: 0 },
            end: { x: w / 2 + 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = SceneCanvas.display.image({
            x: -imgRadius / 2,
            y: -imgRadius / 2,
            image: renderBoneIcon(),
            width: imgRadius,
            height: imgRadius,
            itemType: 'Image',
            objectType: "Image",
            orgin: { x: "center", y: "center" },
        });
        cir.addChild(img);

        cir.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(9);
        });

        p1.addChild(cir);

        //right
        var p2 = SceneCanvas.display.rectangle({
            x: w + $scope.imgWidth,
            y: 0,
            width: w,
            height: nItem,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        // eye
        var yPos = nItem / 2;
        var cir = SceneCanvas.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = SceneCanvas.display.line({
            start: { x: -w / 2, y: 0 },
            end: { x: -w / 2 - 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = SceneCanvas.display.image({
            x: -imgRadius / 2,
            y: -imgRadius / 2,
            image: renderEyeIcon(),
            width: imgRadius,
            height: imgRadius,
            itemType: 'Image',
            objectType: "Image",
            orgin: { x: "center", y: "center" },
        });
        cir.addChild(img);

        cir.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(2);
        });

        p2.addChild(cir);

        // colom
        yPos += nItem;
        var cir = SceneCanvas.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = SceneCanvas.display.line({
            start: { x: -w / 2, y: 0 },
            end: { x: -w / 2 - 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = SceneCanvas.display.image({
            x: -imgRadius / 2,
            y: -imgRadius / 2,
            image: renderColonIcon(),
            width: imgRadius,
            height: imgRadius,
            itemType: 'Image',
            objectType: "Image",
            orgin: { x: "center", y: "center" },
        });
        cir.addChild(img);

        cir.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(4);
        });

        p2.addChild(cir);

        // ruot
        yPos += nItem;
        var cir = SceneCanvas.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = SceneCanvas.display.line({
            start: { x: -w / 2, y: 0 },
            end: { x: -w / 2 - 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = SceneCanvas.display.image({
            x: -imgRadius / 2,
            y: -imgRadius / 2,
            image: renderLargeIntestineIcon(),
            width: imgRadius,
            height: imgRadius,
            itemType: 'Image',
            objectType: "Image",
            orgin: { x: "center", y: "center" },
        });
        cir.addChild(img);

        cir.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(6);
        });

        p2.addChild(cir);

        // than
        yPos += nItem;
        var cir = SceneCanvas.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = SceneCanvas.display.line({
            start: { x: -w / 2, y: 0 },
            end: { x: -w / 2 - 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = SceneCanvas.display.image({
            x: -imgRadius / 2,
            y: -imgRadius / 2,
            image: renderKidneyIcon(),
            width: imgRadius,
            height: imgRadius,
            itemType: 'Image',
            objectType: "Image",
            orgin: { x: "center", y: "center" },
        });
        cir.addChild(img);

        cir.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(8);
        });

        p2.addChild(cir);

        // bang quang
        yPos += nItem;
        var cir = SceneCanvas.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = SceneCanvas.display.line({
            start: { x: -w / 2, y: 0 },
            end: { x: -w / 2 - 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = SceneCanvas.display.image({
            x: -imgRadius / 2,
            y: -imgRadius / 2,
            image: renderBangQuangIcon(),
            width: imgRadius,
            height: imgRadius,
            itemType: 'Image',
            objectType: "Image",
            orgin: { x: "center", y: "center" },
        });
        cir.addChild(img);

        cir.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            SceneCanvas.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(10);
        });

        p2.addChild(cir);

        $scope.panelvisceraHuman.addChild(p1);
        $scope.panelvisceraHuman.addChild(p2);

        $scope.panelHumanBody.addChild($scope.panelvisceraHuman);
    }

    $scope.renderContentOfPanelHumanBody = function ()
    {
        // content
        $scope.panelHumanItem = SceneCanvas.display.rectangle({
            x: 0,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        $scope.factor = $scope.imgBodyHeightOrg / ($scope.heightOfContent - 2 * $scope.imgPadding);

        $scope.imgWidth = $scope.imgBodyWidthOrg / $scope.factor;
        $scope.imgHeight = $scope.imgBodyHeightOrg / $scope.factor;
        var xPos = $scope.sceneWidth / 2 - $scope.imgWidth / 2;

        // man 1
        var reg = SceneCanvas.display.rectangle({
            x: 0,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderManBody(1),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        // man 2
        var reg = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderManBody(2),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        // man 3
        var reg = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderManBody(3),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        // man 4
        var reg = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderManBody(4),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        // female1
        var reg = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderFemaleBody(1),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        // female2
        var reg = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderFemaleBody(2),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        // female3
        var reg = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderFemaleBody(3),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        // female4
        var reg = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderFemaleBody(4),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        $scope.panelHumanBody.addChild($scope.panelHumanItem);

        // Human Point
        $scope.panelHuumanPoints = SceneCanvas.display.rectangle({
            x: 0,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        // male1
        var reg = SceneCanvas.display.rectangle({
            x: 0,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var regChild = SceneCanvas.display.rectangle({
            x: xPos,
            y: $scope.imgPadding,
            width: $scope.imgWidth,
            height: $scope.imgHeight,
            stroke: "0px #000000",
            fill: "rgba(255,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        regChild.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function (e) {
            $scope.openRightMenuOfHumanItem(e, 1, 1, this);
        });

        reg.addChild(regChild);

        $scope.panelHuumanPoints.addChild(reg);

        // male2
        var reg = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var regChild = SceneCanvas.display.rectangle({
            x: xPos,
            y: $scope.imgPadding,
            width: $scope.imgWidth,
            height: $scope.imgHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        regChild.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function (e) {
            $scope.openRightMenuOfHumanItem(e, 2, 1, this);
        });
        reg.addChild(regChild);

        $scope.panelHuumanPoints.addChild(reg);

        // male3
        var reg = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var regChild = SceneCanvas.display.rectangle({
            x: xPos,
            y: $scope.imgPadding,
            width: $scope.imgWidth,
            height: $scope.imgHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        regChild.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function (e) {
            $scope.openRightMenuOfHumanItem(e, 3, 1, this);
        });

        reg.addChild(regChild);

        $scope.panelHuumanPoints.addChild(reg);

        // male4
        var reg = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var regChild = SceneCanvas.display.rectangle({
            x: xPos,
            y: $scope.imgPadding,
            width: $scope.imgWidth,
            height: $scope.imgHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        regChild.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function (e) {
            $scope.openRightMenuOfHumanItem(e, 4, 1, this);
        });
        reg.addChild(regChild);

        $scope.panelHuumanPoints.addChild(reg);

        // Female1
        var reg = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var regChild = SceneCanvas.display.rectangle({
            x: xPos,
            y: $scope.imgPadding,
            width: $scope.imgWidth,
            height: $scope.imgHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        regChild.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function (e) {
            $scope.openRightMenuOfHumanItem(e, 1, 2, this);
        });
        reg.addChild(regChild);

        $scope.panelHuumanPoints.addChild(reg);

        // Female2
        var reg = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var regChild = SceneCanvas.display.rectangle({
            x: xPos,
            y: $scope.imgPadding,
            width: $scope.imgWidth,
            height: $scope.imgHeight,
            stroke: "0px #000000",
            fill: "rgba(0,60,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        regChild.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function (e) {
            $scope.openRightMenuOfHumanItem(e, 2, 2, this);
        });

        reg.addChild(regChild);

        $scope.panelHuumanPoints.addChild(reg);

        // Female3
        var reg = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var regChild = SceneCanvas.display.rectangle({
            x: xPos,
            y: $scope.imgPadding,
            width: $scope.imgWidth,
            height: $scope.imgHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,90, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        regChild.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function (e) {
            $scope.openRightMenuOfHumanItem(e, 3, 2, this);
        });

        reg.addChild(regChild);

        reg.addChild(regChild);
        $scope.panelHuumanPoints.addChild(reg);

        // Female4
        var reg = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.sceneWidth,
            height: $scope.heightOfContent,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });
        var regChild = SceneCanvas.display.rectangle({
            x: xPos,
            y: $scope.imgPadding,
            width: $scope.imgWidth,
            height: $scope.imgHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });
        regChild.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function (e) {
            $scope.openRightMenuOfHumanItem(e, 4, 2, this);
        });

        reg.addChild(regChild);
        $scope.panelHuumanPoints.addChild(reg);

        $scope.panelHumanBody.addChild($scope.panelHuumanPoints);

        // button
        // man
        $scope.panelManBodyButton = SceneCanvas.display.rectangle({
            x: 0,
            y: 0,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight * 4 + $scope.imgPadding * 4,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var yPos = $scope.imgPadding;
        var reg = SceneCanvas.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: 0,
            y: 0,
            image: renderManBodyThumb(1),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            shadow: $scope.shadowBodyOn,
        });
        reg.addChild(img);

        reg.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelFemaleBodyButton.children[0].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 0;
            $scope.selectBody($scope.imgIndex);
        });

        $scope.panelManBodyButton.addChild(reg);

        yPos += $scope.imgThumbHeight + $scope.imgPadding;
        var reg = SceneCanvas.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: 0,
            y: 0,
            image: renderManBodyThumb(2),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
        });
        reg.addChild(img);

        reg.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelFemaleBodyButton.children[1].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 1;
            $scope.selectBody($scope.imgIndex);
        });
        $scope.panelManBodyButton.addChild(reg);

        yPos += $scope.imgThumbHeight + $scope.imgPadding;
        var reg = SceneCanvas.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: 0,
            y: 0,
            image: renderManBodyThumb(3),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
        });
        reg.addChild(img);

        reg.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelFemaleBodyButton.children[2].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 2;
            $scope.selectBody($scope.imgIndex);
        });
        $scope.panelManBodyButton.addChild(reg);

        yPos += $scope.imgThumbHeight + $scope.imgPadding;
        var reg = SceneCanvas.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: 0,
            y: 0,
            image: renderManBodyThumb(4),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
        });
        reg.addChild(img);

        reg.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelFemaleBodyButton.children[3].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 3;
            $scope.selectBody($scope.imgIndex);
        });
        $scope.panelManBodyButton.addChild(reg);

        $scope.panelHumanBody.addChild($scope.panelManBodyButton);

        // Female
        $scope.panelFemaleBodyButton = SceneCanvas.display.rectangle({
            x: $scope.sceneWidth,
            y: 0,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight * 4 + $scope.imgPadding * 4,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var yPos = $scope.imgPadding;
        var reg = SceneCanvas.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: 0,
            y: 0,
            image: renderFemaleBodyThumb(1),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            shadow: $scope.shadowBodyOn,
        });
        reg.addChild(img);

        reg.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelManBodyButton.children[0].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 0;
            $scope.selectBody($scope.imgIndex);
        });

        $scope.panelFemaleBodyButton.addChild(reg);

        yPos += $scope.imgThumbHeight + $scope.imgPadding;
        var reg = SceneCanvas.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: 0,
            y: 0,
            image: renderFemaleBodyThumb(2),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
        });
        reg.addChild(img);

        reg.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelManBodyButton.children[1].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 1;
            $scope.selectBody($scope.imgIndex);
        });
        $scope.panelFemaleBodyButton.addChild(reg);

        yPos += $scope.imgThumbHeight + $scope.imgPadding;
        var reg = SceneCanvas.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: 0,
            y: 0,
            image: renderFemaleBodyThumb(3),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
        });
        reg.addChild(img);

        reg.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelManBodyButton.children[2].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 2;
            $scope.selectBody($scope.imgIndex);
        });
        $scope.panelFemaleBodyButton.addChild(reg);

        yPos += $scope.imgThumbHeight + $scope.imgPadding;
        var reg = SceneCanvas.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = SceneCanvas.display.image({
            x: 0,
            y: 0,
            image: renderFemaleBodyThumb(4),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
        });
        reg.addChild(img);

        reg.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelManBodyButton.children[3].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 3;
            $scope.selectBody($scope.imgIndex);
        });
        $scope.panelFemaleBodyButton.addChild(reg);

        $scope.panelHumanBody.addChild($scope.panelFemaleBodyButton);

    }

    $scope.openRightMenuOfHumanItem = function(e, index, type, item)
    {
        if ((e.button == 2 || e.which == 2) && $scope.isBodyPointItemEnter == false)
        {
            console.log(e, index, type, item);
            var xScene = e.x;
            var yScene = e.y;
            var xItem = xScene - item.x;
            var yItem = yScene - item.y - $scope.heightOfHeader;
            var xReal = Math.round(xItem * $scope.factor);
            var yReal = Math.round(yItem * $scope.factor);

            $scope.BodyItemData = {
                PositionID: 0,
                Gender: type,
                Type: index,
                Description: '',
                X: xReal,
                Y: yReal,
                Item: [],
            };
            $scope.data.lstBoHuyet = angular.copy($scope.data.lstBoHuyetOrg);

            $scope.showAddBodyItemModal();
        }
    }

    $scope.showAddOrEditPointModal = function () {
        $scope.MirronState.isAddMirronPoint = false;

        if ($scope.isEdit)
        {
            var objs = $filter('filter')($scope.points, { Number: $scope.currentPoint.number }, true);
            if (objs.length > 1)
            {
                $scope.showAddMirron = true;
            }
            else
            {
                $scope.showAddMirron = false;
            }

            $scope.currentDataPointBackup = angular.copy($scope.currentDataPoint);
        }
        else {
            $scope.showAddMirron = false;
            
            if ($scope.currentBackground.itemIndex == 2 || $scope.currentBackground.itemIndex == 5)
            {
                var xBCenter = $scope.currentBackground.width / 2;
                var offerCenter = limitWithCenter * $scope.currentBackground.offset;
                if (Math.abs(xBCenter - $scope.currentPoint.X)>offerCenter)
                {
                    $scope.showAddMirron = true;

                    if (xBCenter - $scope.currentPoint.X>0)
                    {
                        $scope.currentPoint.Position = 1;
                    }
                    else
                    {
                        $scope.currentPoint.Position = 0;
                    }
                }
                else
                {
                    $scope.currentPoint.Position = 2;
                    $scope.currentPoint.X = xBCenter;
                }
            }
            else {
                $scope.showAddMirron = true;
                if ($scope.currentBackground.itemIndex == 1)
                {
                    $scope.currentPoint.Position = 0;
                }
                else if ($scope.currentBackground.itemIndex == 3)
                {
                    $scope.currentPoint.Position = 1;
                }
                else if ($scope.currentBackground.itemIndex == 0)
                {
                    $scope.currentPoint.Position = 0;
                }
                else if ($scope.currentBackground.itemIndex == 4) {
                    $scope.currentPoint.Position = 1;
                }
            }

            $scope.currentPoint.YReal = $scope.currentPoint.Y / $scope.currentBackground.offset;
            $scope.currentPoint.XReal = $scope.currentPoint.X / $scope.currentBackground.offset;

            $scope.currentDataPoint = angular.copy($scope.currentPoint);
        }
        console.log($scope.currentDataPoint);

        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'AddOrEditPointModal.html',
            scope: $scope,
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
        });

        $scope.SavePointInfo = function () {
            if ($scope.isEdit)
            {
                BaseService.postData("Admin", "UpdateDataPoint", false, { obj: $scope.currentDataPoint, isSaveMirron: $scope.MirronState.isAddMirronPoint })
                .then(function (response) {
                    if (response.success == true) {

                        if ($scope.isAddMirronPoint)
                        {
                            var objMirrons = $filter('filter')($scope.points, { Number: $scope.currentDataPoint.Number }, true);

                            if (objMirrons.length>0)
                            {
                                for(var i = 0;i<objMirrons.length;i++)
                                {
                                    if (objMirrons[i].AutoID != $scope.currentDataPoint.AutoID)
                                    {
                                        objMirrons[i].Description = $scope.currentDataPoint.Description;
                                        objMirrons[i].ChuTri = $scope.currentDataPoint.ChuTri;
                                        objMirrons[i].CongDung = $scope.currentDataPoint.CongDung;
                                        break;
                                    }
                                }
                            }
                        }

                        $scope.dialogDis = false;
                        $scope.modalInstance.dismiss('cancel');
                    }
                    else {
                        if (response.reLogin == true) {
                            var url = $scope.baseURL + "Home/LogOut";
                            $window.location.href = url;
                        }
                    }
                }).finally(function () {

                }, function () { });
            }
            else {
                console.log("add", $scope.currentDataPoint);
                BaseService.postData("Admin", "AddNewDataPoint", false, { obj: $scope.currentDataPoint, isSaveMirron: $scope.MirronState.isAddMirronPoint })
                .then(function (response) {
                    if (response.success == true) {
                        var objs = response.lstData;

                        if (objs.length > 0)
                        {
                            for(var i=0;i<objs.length;i++)
                            {
                                var ob = objs[i];
                                $scope.points.push(ob);
                                var idex = parseInt(ob.Region);
                                var posX = $scope.sceneWidth / 2 - $scope.panelBackground.children[idex].width / 2;
                                var posY = 0;

                                if (idex == 0 || idex == 4 || idex == 5)
                                {
                                    posY = $scope.sceneHeight / 2 - $scope.panelBackground.children[idex].height / 2;
                                }
                                
                                $scope.convertToPointOfScreen(ob, posX, posY, $scope.panelBackground.children[idex].offset);
                                var h = renderPointItemAdmin(ob.X, ob.Y, ob.Number);
                                h.xReal = ob.XReal;
                                h.yReal = ob.YReal;
                                h.valueTemp1 = ob;
                                h.number = ob.Number;
                                h.regionType = ob.Region;
                                h.positionType = ob.Position;
                                h.bind("mouseenter touchenter", function () {
                                    SceneCanvas.mouse.cursor("pointer");
                                    this.stroke = "2px #0f0";
                                    SceneCanvas.redraw();
                                }).bind("mouseleave touchleave", function () {
                                    SceneCanvas.mouse.cursor("default");
                                    this.stroke = "0px #0f0";
                                    SceneCanvas.redraw();
                                }).bind("click tap ", function () {
                                    $scope.onPointClick(this);
                                });
                                $scope.panelListPoints.children[idex].addChild(h);

                            }

                            SceneCanvas.redraw();
                        }
                        
                        $scope.dialogDis = false;
                        $scope.modalInstance.dismiss('cancel');
                    }
                    else {
                        if (response.reLogin == true) {
                            var url = $scope.baseURL + "Home/LogOut";
                            $window.location.href = url;
                        }
                    }
                }).finally(function () {

                }, function () { });
            }
        }

        $scope.closeAddOrEditPoint = function () {
            $scope.dialogDis = false;

            if ($scope.isEdit)
            {
                $scope.currentDataPoint.Description = $scope.currentDataPointBackup.Description;
                $scope.currentDataPoint.CongDung = $scope.currentDataPointBackup.CongDung;
                $scope.currentDataPoint.ChuTri = $scope.currentDataPointBackup.ChuTri;
            }
            
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.showConfirmModal = function()
    {
        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'ConfirmModal.html',
            scope: $scope,
            size: 'md',
            backdrop: 'static',
            keyboard: false,
        });

        $scope.okConfirm = function()
        {
            if ($scope.confirmData.type == '2')
            {
                if ($scope.currentBodyPointItem != null)
                {
                    var id = parseInt($scope.currentBodyPointItem.valueTemp1.PositionID);

                    BaseService.postData("Admin", "RemoveBodyItem", false, { positionID: id })
                    .then(function (response) {
                        if (response.success == true) {

                            $scope.reGetAllBodyItems();
                            $scope.closeConfirmModal();
                        }
                        else {
                            if (response.reLogin == true) {
                                var url = $scope.baseURL + "Home/LogOut";
                                $window.location.href = url;
                            }
                        }
                    }).finally(function () {

                    }, function () { });
                }
            }
            else if ($scope.confirmData.type == '1')
            {
                if ($scope.currentPoint != null)
                {
                    console.log("ok remove", $scope.currentPoint);
                    BaseService.postData("Admin", "RemoveDataPoint", false, { obj: $scope.currentPoint.valueTemp1, isMirron: $scope.MirronState.isAddMirronPoint })
                    .then(function (response) {
                        if (response.success == true) {
                            if ($scope.MirronState.isAddMirronPoint)
                            {
                                var objs = $filter('filter')($scope.points, { Number: $scope.currentPoint.valueTemp1.Number }, true);
                                console.log(objs);
                                if (objs.length>0)
                                {
                                    for(var i=0;i<objs.length;i++)
                                    {
                                        var obj = objs[i];

                                        var idex = parseInt(obj.Region);
                                        var pos = $filter('filter')($scope.panelListPoints.children[idex].children, { number: obj.Number }, true);

                                        if (pos.length > 0)
                                        {
                                            for(var j = 0;j<pos.length;j++)
                                            {
                                                $scope.panelListPoints.children[idex].removeChild(pos[j]);
                                            }
                                        }
                                    }
                                }
                            }
                            else
                            {
                                var idex = parseInt($scope.currentPoint.valueTemp1.Region);
                                $scope.panelListPoints.children[idex].removeChild($scope.currentPoint);
                            }

                            $scope.resetSelectedCurrentPoint();
                            $scope.currentPoint = null;
                            $scope.closeConfirmModal();
                        }
                        else {
                            if (response.reLogin == true) {
                                var url = $scope.baseURL + "Home/LogOut";
                                $window.location.href = url;
                            }
                        }
                    }).finally(function () {

                    }, function () { });
                }
            }
            else if ($scope.confirmData.type == '3')
            {
                BaseService.postData("Admin", "RemoveGroupInfo", false, $scope.currentGroup)
                    .then(function (response) {
                        if (response.success == true) {
                            BaseService.postData("Home", "GetBoHuyet", false, null)
                            .then(function (response) {
                                if (response.success == true) {
                                    $scope.data.lstBoHuyetOrg = response.lstData;
                                    $scope.data.lstBoHuyet = angular.copy($scope.data.lstBoHuyetOrg);
                                }
                                else {
                                    $scope.data.lstBoHuyetOrg = [];
                                }
                                $scope.closeConfirmModal();
                            }).finally(function () {
                            }, function () { });
                            
                        }
                        else {
                            if (response.reLogin == true) {
                                var url = $scope.baseURL + "Home/LogOut";
                                $window.location.href = url;
                            }
                        }
                    }).finally(function () {

                    }, function () { });
            }
            else if ($scope.confirmData.type == '4') {
                var index = -1;

                for(var i = 0;i<$scope.currentGroup.Huyets.length;i++)
                {
                    var obj = $scope.currentGroup.Huyets[i];
                    
                    if(obj.AutoID == $scope.currentPointInGroup.AutoID)
                    {
                        index = i;
                        break;
                    }
                }

                if (index>-1)
                {
                    $scope.currentGroup.Huyets.splice(index, 1);
                    $scope.reorderPoints();
                    $scope.closeConfirmModal();
                }
            }
            else if ($scope.confirmData.type == '5') {
                BaseService.postData("Admin", "RemoveUser", false, $scope.userInfo)
                .then(function (response) {
                    if (response.success == true) {
                        $scope.loadUser();
                        $scope.closeConfirmModal();
                        BaseService.displaySuccess("Remove success!", 5000);
                        
                    }
                    else {
                        BaseService.displayError("Remove Error!", 5000);
                    }
                }).finally(function () {

                }, function () { });
            }
        }
        
        $scope.closeConfirmModal = function () {
            $scope.dialogDis = false;
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.showAddSubBodyItemModal = function(id)
    {
        var obj = $filter('filter')($scope.data.lstSubBody, { PositionID: id }, true);

        if (obj == null || obj.length == 0)
        {
            return;
        }

        $scope.SubBodyItemData = {
            PositionID: id,
            Description: obj[0].Description,
            Items: [],
        };

        $scope.data.lstBoHuyet = angular.copy($scope.data.lstBoHuyetOrg);

        if (obj[0].Items.length > 0)
        {
            for(var i=0; i<obj[0].Items.length;i++)
            {
                var it = $filter('filter')($scope.data.lstBoHuyet, { AutoID: obj[0].Items[i].BoHuyetID }, true);

                if (it.length > 0)
                {
                    it[0].isSelected = true;
                }
            }
        }

        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'AddSubBodyItemModal.html',
            scope: $scope,
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
        });

        $scope.saveSubBodyItem = function()
        {
            if ($scope.data.lstBoHuyet.length > 0) {
                $scope.SubBodyItemData.Items = [];
                for (var i = 0; i < $scope.data.lstBoHuyet.length; i++) {
                    var obj = $scope.data.lstBoHuyet[i];
                    if (obj.isSelected == true) {
                        var subit = {
                            AutoID: 0,
                            SubBody: $scope.SubBodyItemData.PositionID,
                            Description: obj.Description,
                            BoHuyetID: obj.AutoID
                        }
                        $scope.SubBodyItemData.Items.push(subit);
                    }
                }
            }

            BaseService.postData("Admin", "UpdateSubBodyItem", false, $scope.SubBodyItemData)
                .then(function (response) {
                    if (response.success == true) {
                        $scope.reGetAllSubBodyItems();
                        $scope.closeAddSubBodyItemModal();
                    }
                    else {
                        if (response.reLogin == true) {
                            var url = $scope.baseURL + "Home/LogOut";
                            $window.location.href = url;
                        }
                    }
                }).finally(function () {

                }, function () { });
        }

        $scope.closeAddSubBodyItemModal = function () {
            $scope.dialogDis = false;
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.showAddBodyItemModal =function()
    {
        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'AddBodyItemModal.html',
            scope: $scope,
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
        });

        $scope.saveBodyItem = function()
        {
            if ($scope.data.lstBoHuyet.length>0)
            {
                $scope.BodyItemData.Item = [];
                for(var i=0;i<$scope.data.lstBoHuyet.length;i++)
                {
                    var obj = $scope.data.lstBoHuyet[i];
                    if (obj.isSelected == true)
                    {
                        $scope.BodyItemData.Item.push(obj);
                    }
                }
            }

            if ($scope.isEdit)
            {
                BaseService.postData("Admin", "UpdateBodyItem", false, $scope.BodyItemData)
                .then(function (response) {
                    if (response.success == true) {
                        $scope.reGetAllBodyItems();
                        $scope.closeAddBodyItemModal();
                        $scope.isEdit = false;
                    }
                    else {
                        if (response.reLogin == true) {
                            var url = $scope.baseURL + "Home/LogOut";
                            $window.location.href = url;
                        }
                    }
                }).finally(function () {

                }, function () { });
            }
            else
            {
                BaseService.postData("Admin", "AddBodyItem", false, $scope.BodyItemData)
                .then(function (response) {
                    if (response.success == true) {
                        $scope.reGetAllBodyItems();
                        $scope.closeAddBodyItemModal();
                    }
                    else {
                        if (response.reLogin == true) {
                            var url = $scope.baseURL + "Home/LogOut";
                            $window.location.href = url;
                        }
                    }
                }).finally(function () {

                }, function () { });
            }
            
        }

        $scope.closeAddBodyItemModal = function () {
            $scope.dialogDis = false;
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.showViewBodyItemModal = function () {

        console.log($scope.currentBodyPointItem);
        $scope.BodyItemDescription = '';
        $scope.lstViewBodyItems = [];

        if ($scope.currentBodyPointItem != null)
        {
            $scope.BodyItemDescription = $scope.currentBodyPointItem.valueTemp1.Description;

            if ($scope.currentBodyPointItem.valueTemp1.Item != null && $scope.currentBodyPointItem.valueTemp1.Item.length > 0) {
                for (var i = 0; i < $scope.currentBodyPointItem.valueTemp1.Item.length; i++) {
                    var ob = $scope.currentBodyPointItem.valueTemp1.Item[i];
                    var get = $filter('filter')($scope.data.lstBoHuyetOrg, { AutoID: ob.BoHuyetID }, true);

                    if (get.length > 0) {
                        $scope.lstViewBodyItems.push(get[0]);
                    }
                }
            }
        }

        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'ViewBodyItemModal.html',
            scope: $scope,
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
        });

        $scope.closeViewBodyItemModal = function () {
            $scope.dialogDis = false;
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.SetDataForPointItem = function(item)
    {
        item.bind("mouseenter touchenter", function () {
            SceneCanvas.mouse.cursor("pointer");
            $scope.isBodyPointItemEnter = true;
            this.stroke = "3px #0F0";
            SceneCanvas.redraw();
        }).bind("mouseleave touchleave", function () {
            SceneCanvas.mouse.cursor("default");
            $scope.isBodyPointItemEnter = false;
            this.stroke = "1px #0F0";
            SceneCanvas.redraw();
        }).bind("click tap ", function (e) {
            $scope.resetBodyPointItemSelected();
            $scope.currentBodyPointItem = this;
            $scope.currentBodyPointItem.fill = "#FF0";
            $scope.panelBodyPointItemControl.y = 0;
            SceneCanvas.redraw();
        });
    }

    $scope.resetBodyPointItemSelected = function()
    {
        if ($scope.currentBodyPointItem != null)
        {
            $scope.panelBodyPointItemControl.y = -$scope.heightOfHeader;
            $scope.currentBodyPointItem.fill = "#F00";
            $scope.currentBodyPointItem = null
        }
    }

    $scope.clearpanelHumanPoints = function()
    {
        console.log("clearpanelHumanPoints", $scope.panelHuumanPoints);

        if ($scope.isLoaded == false)
        {
            return;
        }

        if ($scope.panelHuumanPoints == null)
        {
            return;
        }

        for (var i=0;i<$scope.panelHuumanPoints.children.length;i++)
        {
            $scope.panelHuumanPoints.children[i].children[0].children = [];
        }
    }

    $scope.SetDataBody = function()
    {
        console.log("SetDataBody", $scope.data.lstPoints);
        if ($scope.data.lstPoints != null && $scope.data.lstPoints.length>0)
        {
            $scope.clearpanelHumanPoints();

            for(var i =0;i<$scope.data.lstPoints.length;i++)
            {
                
                var obj = $scope.data.lstPoints[i];
                var point = SceneCanvas.display.ellipse({
                    x: obj.X / $scope.factor,
                    y: obj.Y / $scope.factor,
                    radius: 10,
                    stroke: "1px #0F0",
                    fill: "#F00",
                    valueTemp1: obj,
                    orgin: {x:"center", y:"center"},
                });

                $scope.SetDataForPointItem(point);

                if (obj.Gender == 1)
                {
                    $scope.panelHuumanPoints.children[obj.Type - 1].children[0].addChild(point);
                }
                else {
                    $scope.panelHuumanPoints.children[obj.Type - 1 + $scope.imgIndexFirst].children[0].addChild(point);
                }
            }
            SceneCanvas.redraw();
        }
    }

    $scope.selectBody = function (index) {
        for (var i = 0; i < $scope.panelHumanItem.children.length; i++) {
            $scope.panelHumanItem.children[i].x = 2 * $scope.sceneWidth;
            $scope.panelHuumanPoints.children[i].x = 2 * $scope.sceneWidth;
        }

        if ($scope.GenderType == 1) {
            $scope.panelHumanItem.children[index].x = 0;
            $scope.panelHuumanPoints.children[index].x = 0;
        }
        else {
            $scope.panelHumanItem.children[index + $scope.imgIndexFirst].x = 0;
            $scope.panelHuumanPoints.children[index + $scope.imgIndexFirst].x = 0;
        }
        SceneCanvas.redraw();
    }

    $scope.resetBodySelected = function () {
        $scope.resetBodyPointItemSelected();

        for (var i = 0; i < $scope.panelManBodyButton.children.length; i++) {
            $scope.panelManBodyButton.children[i].children[0].shadow = $scope.shadowBodyOff;
            $scope.panelFemaleBodyButton.children[i].children[0].shadow = $scope.shadowBodyOff;
        }

    }
    $scope.resetSelectedMenuButton = function()
    {
        if ($scope.panelMenuContent.children.length >0)
        {
            for(var i=0;i<$scope.panelMenuContent.children.length;i++)
            {
                $scope.panelMenuContent.children[i].fill = $scope.bgColorMenu;
            }
        }
    }

    $scope.resetSelectedContent = function()
    {
        if ($scope.panelContent.children.length > 0) {
            for (var i = 0; i < $scope.panelContent.children.length; i++) {
                $scope.panelContent.children[i].x = $scope.sceneWidth;
                $scope.panelHeaderSceneContent.children[i].x = $scope.sceneWidth;
            }
        }
    }

    $scope.showUserInfoModal = function () {
        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'UserInfo.html',
            scope: $scope,
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
        });

        $scope.SaveUserInfo = function()
        {
            if ($scope.UserDlgState =='2')
            {
                // update
                BaseService.postData("Admin", "UpdateUserInfo", false, $scope.userInfo)
                .then(function (response) {
                    if (response.success == true) {
                        $scope.closeUserInfo();
                        $scope.loadUser();
                        BaseService.displaySuccess("Save success!", 5000);
                    }
                    else {
                        BaseService.displayError("Save Error!", 5000);
                    }
                }).finally(function () {

                }, function () { });
            }
            else if ($scope.UserDlgState == '3')
            {
                // Add new
                BaseService.postData("Admin", "AddUserInfo", false, $scope.userInfo)
                .then(function (response) {
                    if (response.success == true) {
                        $scope.closeUserInfo();
                        $scope.loadUser();
                        BaseService.displaySuccess("Save success!", 5000);
                    }
                    else {
                        BaseService.displayError("Save Error!", 5000);
                    }
                }).finally(function () {

                }, function () { });
            }
        }


        $scope.closeUserInfo = function () {
            $scope.dialogDis = false;
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.onViewUser = function (item) {
        console.log(item);
        $scope.userInfo = angular.copy(item);
        $scope.UserDlgState = '1';
        $scope.showUserInfoModal();
    }

    $scope.onUpdateUser = function (item) {
        $scope.currentUser = item;
        $scope.userInfo = angular.copy(item);
        $scope.UserDlgState = '2';
        $scope.showUserInfoModal();
    }

    $scope.onRemoveUser = function (item) {
        $scope.userInfo = angular.copy(item);
        $scope.confirmData = {
            type: '5',
            title: 'Remove User',
            content: 'Are you sure remove this User?',
        }
        $scope.showConfirmModal();

        
    }

    $scope.onChangePassword = function(item)
    {
        $scope.userInfo = angular.copy(item);

        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'ChangePasswordModal.html',
            scope: $scope,
            size: 'sd',
            backdrop: 'static',
            keyboard: false,
        });

        $scope.SavePassChanged= function()
        {
            BaseService.postData("Admin", "ChangePassword", false, $scope.userInfo)
                .then(function (response) {
                    if (response.success == true) {
                        $scope.loadUser();
                        $scope.closeChangedPass();
                        BaseService.displaySuccess("Changed Password success!", 5000);
                    }
                    else {
                        $scope.closeChangedPass();
                        BaseService.displayError("Changed Password Error!", 5000);
                    }
                }).finally(function () {

                }, function () { });
        }

        $scope.closeChangedPass = function () {
            $scope.dialogDis = false;
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.onAddUser = function()
    {
        $scope.UserDlgState = '3';
        $scope.userInfo = {
            UserName: '',
            Password: '',
            LicenseKey: '',
            Name: '',
            Mail: '',
            Tel: '',
            Address: '',
            Country: '',
            Sex: '',
            BOD: new Date(),
            BODString: '',
            Description: '',
            Active: '0',
            Admin: '0'
        };

        $scope.userInfo.BODString = BaseService.formatDate($scope.userInfo.BOD);
        $scope.showUserInfoModal();
    }

    $scope.onViewGroup = function (item)
    {
        console.log("view", item);
        $scope.isAddGroup = false;
        $scope.isEditGroup = false;
        $scope.isViewGroup = true;
        $scope.currentGroup = item;
        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'ViewGroupModal.html',
            scope: $scope,
            size: 'sd',
            backdrop: 'static',
            keyboard: false,
        });



        $scope.closeGroupInfo = function () {
            $scope.dialogDis = false;
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.onUpdateGroup = function(item)
    {
        console.log("update", item);
        $scope.currentGroup = item;
        $scope.isAddGroup = false;
        $scope.isEditGroup = true;
        $scope.isViewGroup = false;
        $scope.GroupNameTemp = $scope.currentGroup.Name
        $scope.GroupDescriptionTemp = $scope.currentGroup.Description;
        $scope.showGroupInfo();
    }

    $scope.showGroupInfo = function()
    {
        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'ViewGroupModal.html',
            scope: $scope,
            size: 'sd',
            backdrop: 'static',
            keyboard: false,
        });

        $scope.SaveGroupInfo = function()
        {
            if ($scope.isEditGroup)
            {
                BaseService.postData("Admin", "UpdateGroupInfo", false, $scope.currentGroup)
                .then(function (response) {
                    if (response.success == true) {
                        $scope.dialogDis = false;
                        $scope.modalInstance.dismiss('cancel');
                        BaseService.displaySuccess("Save success!", 5000);
                    }
                    else {
                        BaseService.displayError("Save Error!", 5000);
                    }
                }).finally(function () {

                }, function () { });
            }
            else if ($scope.isAddGroup)
            {
                BaseService.postData("Admin", "AddGroupInfo", false, $scope.currentGroup)
                .then(function (response) {
                    if (response.success == true) {
                        BaseService.postData("Home", "GetBoHuyet", false, null)
                            .then(function (response) {
                                if (response.success == true) {
                                    $scope.data.lstBoHuyetOrg = response.lstData;
                                    $scope.data.lstBoHuyet = angular.copy($scope.data.lstBoHuyetOrg);
                                    BaseService.displaySuccess("Save success!", 5000);
                                }
                                else {
                                    $scope.data.lstBoHuyetOrg = [];
                                    BaseService.displayError("Save Error!", 5000);
                                }

                                $scope.dialogDis = false;
                                $scope.modalInstance.dismiss('cancel');
                            }).finally(function () {
                            }, function () { });
                    }
                    else {

                    }
                }).finally(function () {

                }, function () { });
            }
        }

        $scope.closeGroupInfo = function () {
            if ($scope.isEditGroup)
            {
                $scope.currentGroup.Name = $scope.GroupNameTemp;
                $scope.currentGroup.Description = $scope.GroupDescriptionTemp;
            }
           
            $scope.dialogDis = false;
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }
    $scope.onAddGroup = function()
    {
        $scope.isAddGroup = true;
        $scope.isEditGroup = false;
        $scope.isViewGroup = false;

        $scope.currentGroup = {
            Name: '',
            Description: '',
            AutoID: 0,
        };

        $scope.showGroupInfo();
    }

    $scope.onRemoveGroup = function(item)
    {
        console.log("remove", item);
        $scope.confirmData = {
            type: '3',
            title: 'Remove group',
            content: 'Are you sure remove group?'
        }
        $scope.currentGroup = item;
        $scope.showConfirmModal();
    }

    $scope.onPointsGroup = function(item)
    {
        $scope.currentGroup = item;
        console.log($scope.currentGroup);
        $scope.isAddItemForGroupPoints = true;
        $scope.PointsBackupOfGroup = angular.copy($scope.currentGroup.Huyets);
    }

    $scope.onSaveGroupPoints = function()
    {
        BaseService.postData("Admin", "UpdatePointsInGroupInfo", false, $scope.currentGroup)
                .then(function (response) {
                    if (response.success == true) {
                        $scope.PointsBackupOfGroup = angular.copy($scope.currentGroup.Huyets);
                        BaseService.displaySuccess("Save success!", 5000);
                    }
                    else
                    {
                        BaseService.displayError("Save Error", 5000);
                    }
                }).finally(function () {
                }, function () { });
    }

    $scope.onCancelSaveGroupPoints = function()
    {
        $scope.currentGroup.Huyets = $scope.PointsBackupOfGroup;
        $scope.currentGroup = null;
        $scope.isAddItemForGroupPoints = false;
    }

    $scope.onRemovePointGroup = function(item)
    {
        $scope.currentPointInGroup = item;
        console.log("remove", item);
        $scope.confirmData = {
            type: '4',
            title: 'Remove point in group',
            content: 'Are you sure remove this item?'
        }
       
        $scope.showConfirmModal();
    }

    $scope.onEditPointsGroup = function(item)
    {
        $scope.currentPointInGroup = item;
    }

    $scope.onUpPointGroup = function(item)
    {
        $scope.currentPointInGroup = item;

        var index = 0;

        for (var i = 0; i < $scope.currentGroup.Huyets.length; i++) {
            var obj = $scope.currentGroup.Huyets[i];
            
            if (obj.AutoID == $scope.currentPointInGroup.AutoID) {
                index = i;
                break;
            }
        }

        var temp1 = $scope.currentGroup.Huyets[index - 1];
        var temp2 = $scope.currentGroup.Huyets[index];

        $scope.currentGroup.Huyets.splice(index - 1, 2, temp2, temp1);

        $scope.reorderPoints();

    }

    $scope.onDownPointGroup = function (item)
    {
        $scope.currentPointInGroup = item;

        var index = 0;

        for (var i = 0; i < $scope.currentGroup.Huyets.length; i++) {
            var obj = $scope.currentGroup.Huyets[i];

            if (obj.AutoID == $scope.currentPointInGroup.AutoID) {
                index = i;
                break;
            }
        }

        var temp1 = $scope.currentGroup.Huyets[index + 1];
        var temp2 = $scope.currentGroup.Huyets[index];

        $scope.currentGroup.Huyets.splice(index, 2, temp1, temp2);

        $scope.reorderPoints();
    }

    $scope.reorderPoints = function()
    {
        var index = 0;

        for(var i = 0;i<$scope.currentGroup.Huyets.length;i++)
        {
            var obj = $scope.currentGroup.Huyets[i];
            index += 1;
            obj.PointIndex = index;
        }
    }

    $scope.clearFindPointGroup = function()
    {
        $scope.PointInGroup.points = [];
        $scope.panelFindGroupPoint.children = [];
        GroupPointCanvas.redraw();
        $scope.groupPointFaceStatus = {
            earLeft: true,
            haftFaceLeft: true,
            face: true,
            haftFaceRight: true,
            earRight: true,
            nose: true,
        }

    
        $scope.setPointGroupButtonStatus();
    }

    $scope.setStatusForItemButtonPointGroup = function(item, state)
    {
        if (state) {
            item.fill = $scope.enableColor;
        }
        else {
            item.fill = $scope.disableColor;
        }
    }

    $scope.setPointGroupButtonStatus = function()
    {
        for (var i = 0; i < GroupPointIconCanvas.children.length; i++) {
            var child = GroupPointIconCanvas.children[i];

            if (child.itemIndex == 0) {
                //ear left
                $scope.setStatusForItemButtonPointGroup(child.children[2], $scope.groupPointFaceStatus.earLeft);
            }
            else if (child.itemIndex == 1) {
                //haf face left
                $scope.setStatusForItemButtonPointGroup(child.children[2], $scope.groupPointFaceStatus.haftFaceLeft);
            }
            else if (child.itemIndex == 2) {
                // face
                $scope.setStatusForItemButtonPointGroup(child.children[2], $scope.groupPointFaceStatus.face);
            }
            else if (child.itemIndex == 3) {
                // haf face right
                $scope.setStatusForItemButtonPointGroup(child.children[2], $scope.groupPointFaceStatus.haftFaceRight);
            }
            else if (child.itemIndex == 4) {
                // ear right
                $scope.setStatusForItemButtonPointGroup(child.children[2], $scope.groupPointFaceStatus.earRight);
            }
            else if (child.itemIndex == 5) {
                // nose
                $scope.setStatusForItemButtonPointGroup(child.children[2], $scope.groupPointFaceStatus.nose);
            }
        }

        GroupPointIconCanvas.redraw();
    }

    $scope.viewResultPointInPointGroup = function(index)
    {      
        $scope.panelFindGroupPoint.children = [];
        $scope.currentgroupPointIndex = parseInt($scope.PointInGroup.points[index].Region);
        console.log($scope.PointInGroup.points[index], $scope.currentgroupPointIndex);
        $scope.setGroupPointFaceView();
       
        var xCenter = GroupPointCanvas.width / 2;
        var yCenter = GroupPointCanvas.height / 2;
        
        if ($scope.groupPointFaceStatus.face || $scope.groupPointFaceStatus.nose)
        {
            for(var i = 0;i<$scope.PointInGroup.points.length;i++)
            {
                var obj = $scope.PointInGroup.points[i];

                var x = obj.XReal * $scope.currentGroupPointFace.offset;
                var y = obj.YReal * $scope.currentGroupPointFace.offset;

                if ($scope.groupPointFaceStatus.nose)
                {
                    y = $scope.currentGroupPointFace.y + y;
                }

                var po = GroupPointCanvas.display.ellipse({
                    x: x,
                    y: y,
                    stroke: "0px #000",
                    fill: "#F00",
                    radius: 5,
                    origin: { x: "center", y: "center" },
                    valueTemp1: obj,
                });

                po.bind("mouseenter touchenter", function () {
                    GroupPointCanvas.mouse.cursor("pointer");
                    this.stroke = "2px #FF0";
                    GroupPointCanvas.redraw();
                }).bind("mouseleave touchleave", function () {
                    GroupPointCanvas.mouse.cursor("default");

                    this.stroke = "0px #FF0";

                    GroupPointCanvas.redraw();
                }).bind("click tap ", function () {
                    $scope.onSelectPointInGroupPoint(this.valueTemp1);
                });

                $scope.panelFindGroupPoint.addChild(po);
            }
        }
        else
        {
            var obj = $scope.PointInGroup.points[index];
            var x = obj.XReal * $scope.currentGroupPointFace.offset;
            var y = obj.YReal * $scope.currentGroupPointFace.offset;
            x = $scope.currentGroupPointFace.x + x;

            var po = GroupPointCanvas.display.ellipse({
                x: x,
                y: y,
                stroke: "0px #000",
                fill: "#F00",
                radius: 5,
                origin: { x: "center", y: "center" },
                valueTemp1: obj,
            });

            po.bind("mouseenter touchenter", function () {
                GroupPointCanvas.mouse.cursor("pointer");
                this.stroke = "2px #FF0";
                GroupPointCanvas.redraw();
            }).bind("mouseleave touchleave", function () {
                GroupPointCanvas.mouse.cursor("default");

                this.stroke = "0px #FF0";

                GroupPointCanvas.redraw();
            }).bind("click tap ", function () {
                $scope.onSelectPointInGroupPoint(this.valueTemp1);
            });

            $scope.panelFindGroupPoint.addChild(po);
        }

        GroupPointCanvas.redraw();
    }

    $scope.onSelectPointInGroupPoint = function(item)
    {

        $scope.PointToAddToGroupData = {
            action: 'An',
            countAction: 30,
            index: ($scope.currentGroup.Huyets != null)?($scope.currentGroup.Huyets.length + 1):1,
        }

        $scope.PointToAddToGroup = item;
        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'AddPointsToGroupPointModal.html',
            scope: $scope,
            size: 'sd',
            backdrop: 'static',
            keyboard: false,
        });

        $scope.SaveAddPointToGroupInfo = function()
        {
            var addData = {
                Action: $scope.PointToAddToGroupData.action,
                AutoID: 0,
                BoHuyetID: $scope.currentGroup.AutoID,
                CountAction: $scope.PointToAddToGroupData.countAction,
                Number: $scope.PointToAddToGroup.Number,
                PointID: $scope.PointToAddToGroup.AutoID,
                PointIndex: $scope.PointToAddToGroupData.index,
            };

            console.log(addData);

            $scope.currentGroup.Huyets.push(addData);
            $scope.closeAddPointGroupInfo();
        }

        $scope.closeAddPointGroupInfo = function () {
            $scope.dialogDis = false;
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.onFindPoint = function () {
        if ($scope.PointInGroup.number == null
            || $scope.PointInGroup.number == '')
        {
            $scope.clearFindPointGroup();
        }
        else {
            $scope.PointInGroup.points = $filter('filter')($scope.points, { Number: $scope.PointInGroup.number }, true);
            if ($scope.PointInGroup.points != null && $scope.PointInGroup.points.length > 0)
            {
                $scope.groupPointFaceStatus = {
                    earLeft: false,
                    haftFaceLeft: false,
                    face: false,
                    haftFaceRight: false,
                    earRight: false,
                    nose: false,
                }

                for (var i = 0; i < $scope.PointInGroup.points.length; i++)
                {
                    var obj = $scope.PointInGroup.points[i];

                    if (obj.Region == '0')
                    {
                        $scope.groupPointFaceStatus.earLeft = true;
                    }
                    else if (obj.Region == '1')
                    {
                        $scope.groupPointFaceStatus.haftFaceLeft = true;
                    }
                    else if (obj.Region == '2') {
                        $scope.groupPointFaceStatus.face = true;
                    }
                    else if (obj.Region == '3') {
                        $scope.groupPointFaceStatus.haftFaceRight = true;
                    }
                    else if (obj.Region == '4') {
                        $scope.groupPointFaceStatus.earRight = true;
                    }
                    else if (obj.Region == '5') {
                        $scope.groupPointFaceStatus.nose = true;
                    }
                }

                $scope.setPointGroupButtonStatus();
                $scope.viewResultPointInPointGroup(0);
            }
            else
            {
                $scope.clearFindPointGroup();
            }
        }
    }

    $scope.getRegionOfPoint = function(id)
    {
        var objs = $filter('filter')($scope.points, { AutoID: parseInt(id) }, true);

        if (objs != null && objs.length>0)
        {
            var obj = objs[0];

            if (obj.Region == '0')
            {
                return renderEarLeftThumb();
            }
            else if (obj.Region == '1')
            {
                return renderHafFaceLeftThumb();
            }
            else if (obj.Region == '2') {
                return renderFrontFaceThumb();
            }
            else if (obj.Region == '3') {
                return renderHafFaceRightThumb();
            }
            else if (obj.Region == '4') {
                return renderEarRightThumb();
            }
            else if (obj.Region == '5') {
                return renderNoseThumb();
            }

        }

        return '';
    }

    $scope.getPositionOfPoint = function(id)
    {
        var objs = $filter('filter')($scope.points, { AutoID: parseInt(id) }, true);

        if (objs != null && objs.length > 0) {
            var obj = objs[0];

            if (obj.Position == '0') {
                return 'fa-align-right';
            }
            else if (obj.Position == '1') {
                return 'fa-align-left';
            }
            else if (obj.Position == '2') {
                return 'fa-align-center';
            }
        }
        return "";s
    }

    $scope.getHelpImage = function(id)
    {
        if (id == 1)
        {
            return renderHelpPoint1();
        }
        else if(id == 2)
        {
            return renderHelpPoint2();
        }
        else if (id == 3) {
            return renderHelpPoint3();
        }
        else if (id == 4) {
            return renderHelpPoint4();
        }
        else if (id == 5) {
            return renderHelpPoint5();
        }
        else if (id == 6) {
            return renderHelpPoint6();
        }
        else if (id == 7) {
            return renderHelpPoint7();
        }
        else if (id == 8) {
            return renderHelpPoint8();
        }
        else if (id == 9) {
            return renderHelpPoint9();
        }
        else if (id == 10) {
            return renderGenderIcon(1);
        }
        else if (id == 11) {
            return renderGenderIcon(2);
        }
       
        
    }

    $scope.onSaveSetting = function()
    {
        BaseService.postData("Admin", "SaveSysPara", false, $scope.sysPara)
                .then(function (response) {
                    if (response.success == true) {
                        BaseService.displaySuccess("Save Setting success!", 5000);
                    }
                    else
                    {
                        BaseService.displayError("Save Setting Error!", 5000);
                    }
                }).finally(function () {
                }, function () { });
    }

    $scope.loadAllGroupLink = function(item)
    {
        BaseService.postData("Admin", "GetAllLinks", true, { groupID: item.AutoID}).then(function (response) {
            if (response.success == true) {
                $scope.linkDatas = response.lstData;
            }
        }).finally(function () {
        }, function () { });
    }
    $scope.onPointsGroupLink = function(item)
    {
        $scope.currentGroup = item;
        $scope.loadAllGroupLink($scope.currentGroup);

        $scope.linkData = {
            linkID: 0,
            GroupID: $scope.currentGroup.AutoID,
            Link: '',
            Frame: '',
            Description: '',
        }

        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'AddLinkYoutubeModal.html',
            scope: $scope,
            size: 'md',
            backdrop: 'static',
            keyboard: false,
        });

        $scope.addYoutubeLink = function()
        {
            if ($scope.linkData.Link != '')
            {
                BaseService.postData("Admin", "AddGroupLink", true, $scope.linkData).then(function (response) {
                    if (response.success == true) {
                        $scope.linkData = {
                            LinkID: 0,
                            GroupID: $scope.currentGroup.AutoID,
                            Link: '',
                            Frame: '',
                            Description: '',
                        }
                        $scope.loadAllGroupLink($scope.currentGroup)
                    }
                }).finally(function () {
                }, function () { });
            }
        }

        $scope.onRemovePointGroupLink = function(item)
        {
            BaseService.postData("Admin", "RemoveGroupLink", true, { linkID: item.LinkID }).then(function (response) {
                if (response.success == true) {
                    $scope.loadAllGroupLink($scope.currentGroup)
                }
            }).finally(function () {
            }, function () { });
        }

        $scope.closeAddYouTube = function () {
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }
    //document ready  
    $scope.load();

}
AdminController.$inject = ['$scope', '$rootScope', '$filter', '$q', '$http', '$timeout', '$window', '$modal', 'blockUI', '$log', '$location', 'ENUMS', 'BaseService'];