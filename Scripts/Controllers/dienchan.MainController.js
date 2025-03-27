function MainController($scope, $rootScope, $sce, $filter, $q, $http, $timeout, $interval, $window, $modal, blockUI, $log, $location, ENUMS, BaseService) {
    $scope.baseURL = $rootScope.baseUrl;
    $scope.WidthOfFrontFace = 899;
    $scope.HeightOfFrontFace = 1138;
    $scope.WidthOfHafFace = 956;
    $scope.HeightOfHafFace = 1129;
    $scope.WidthOfNose = 420;
    $scope.HeightOfNose = 269;
    $scope.WidthOfEar = 261;
    $scope.HeightOfEar = 453;
    $scope.heightOfShow = 0;
    $scope.bottomMargin = 60;
    $scope.topMargin = 10;
    $scope.offset = 1.0;
    $scope.ItemThumbHeight =80;
    $scope.ItemThumbWidth = 80;
    $scope.BoxTitleHeight = 25;
    $scope.BoxContentHeigth = 15;
    $scope.DoHinhWidth = 899;
    $scope.DoHinhHeight = 1129;
    $scope.padding = 50;
    $scope.frameWidth = 1024;
    $scope.frameHeight = 1024;
    $scope.xCenter = 0;
    $scope.yCenter = 0;
    $scope.faces = [];
    $scope.currentBackground = null;
    $scope.currentPoint = null;
    $scope.currentBoHuyet = null;
    $scope.tmDf = 100;
    $scope.showLoading = true;
    $scope.showMain = false;
    $scope.showHuman = false;
    $scope.currentDoHinh = null;
    $scope.linkData = null;
    $scope.linkDataURL = null;
    $scope.panelBackground = null;
    $scope.panelThumB = null;
    $scope.panelListPoints = null;
    $scope.panelGrid = null;
    $scope.panelDoHinh = null;
    $scope.panelButton = null;
    $scope.panelFindResultPoint = null;
    $scope.panelTitle = null;
    $scope.panelControl = null;
    $scope.panelTreatmentInfo = null;
    $scope.panelLoading = null;
    // status
    $scope.showDoHinh = true;
    $scope.FindStatus = false;
    $scope.FindBoHuyet = false;
    $scope.isPlay = false;
    $scope.numberAction = 0;
    $scope.action = '';
    $scope.indexOfPointPlay = -1;
    $scope.currentPointIsPlay = null;
    $scope.actionIndex = -1;
    $scope.actionRunIndex = -1;
    $scope.accessControl = null;
    $scope.roleAccessControl = 1;
    $scope.roleAccessControlCount = 0;
    $scope.isAdmin = false;
    $scope.sysPara = null;
    $scope.screenStatus = true;
    
    // search state
    $scope.EarLeftEnable = true;
    $scope.EarRightEnable = true;
    $scope.NoseEnable = true;
    $scope.HafFaceLeftEnable = true;
    $scope.HafFaceRightEnable = true;
    $scope.FaceEnable = true;

    // do hinh
    $scope.dohinhData = {
        dh1: '',
        dh2: '',
        dh3: '',
        dh4: '',
        dh5: '',
        dh6: '',
        dh7: '',
        dh8: '',
        dh9: '',
        dh10: '',
        dh11: '',
        dh12: '',
    }

    //search
    $scope.findPoint = {
        number:''
    }

    $scope.SearchInfo = {
        fullTextSearch: '',
    }

    $scope.setting = {
        showGrid: true,
        dohinh: true,
    }

    // machine state
    $scope.getUserStateLoaded = false;
    $scope.getSysParaLoaded = false;
    $scope.getHuyetLoaded = false;
    $scope.getBoHuyetLoaded = false;
    $scope.getAllBodyItemsLoaded = false;
    $scope.getAllSubBodyItemsLoaded = false;

    // color
    $scope.thumBSelectColor = "rgba(255,0,0, 1.0)";
    $scope.thumBHolderColor = "rgba(0,200,255, 1.0)";
    $scope.thumBLeaveColor = "rgba(0,0,0, 0.0)";

    var faceGrid_Ver = [0, 10, 25, 52, 70, 110, 148, 185, 222, 262];
    var strFaceGrid_ver = ['0', 'A', 'B', 'C', 'D', 'E', 'G', 'H', 'K', 'L'];
    var faceGrid_Hor = [220, 280, 345, 417, 487, 555, 625, 690, 755, 840, 918, 990, 1070];
    var strFaceGrid_Hor = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

    var hafFaceGrid_Ver = [280, 335, 448, 540, 631];
    var strHafFaceGrid_Ver = ['L', 'M', 'N', 'P', 'Q'];
    var hafFaceGrid_Hor = [181, 249, 316, 391, 461, 521, 590, 656, 726, 802, 875, 951, 1030];

    $scope.points = [];
    $scope.boHuyet = [];
    $scope.boHuyetProcess = [];
    $scope.listBodyPoints = [];
    $scope.BodyItems = [];
    $scope.BodyItemDescription = '';
    $scope.lstSubBody = [];

    // Gender button
    $scope.maleButton = null;
    $scope.femaleButton = null;
    $scope.Gender = 1;
    $scope.panelHumanButton = null;
    $scope.panelHumanItem = null;
    $scope.imgBodyWidthOrg = 500;
    $scope.imgBodyHeightOrg = 1300;
    $scope.imgPadding = 10;
    $scope.imgWidth = 0;
    $scope.imgHeight = 0;
    $scope.panelManBodyButton = null;
    $scope.panelFemaleBodyButton = null;
    $scope.imgThumbWidth = 50;
    $scope.imgThumbHeight = 130;
    $scope.imgIndexFirst = 4;
    $scope.imgIndex = 0;
    $scope.shadowBodyOn = "1 0 20px rgba(0,255,0, 1.0)";
    $scope.shadowBodyOff = "0 0 1px rgba(0,255,0, 0.0)";
    $scope.bodyItemFactor = 0.0;

    $scope.panelvisceraHuman = null;
    
    $scope.setDoHinhStatus = function () {
        if ($scope.setting.dohinh) {
            $scope.panelDoHinh.x = 0;
        }
        else {
            $scope.panelDoHinh.x = 2 * $scope.frameWidth;
        }
    }

    //do hinh
    $scope.onShowDH1 = function()
    {
        $scope.panelDoHinh.children[2].children = [];

        var w = $scope.DoHinhWidth * $scope.panelBackground.children[2].offset;
        var h = $scope.DoHinhHeight * $scope.panelBackground.children[2].offset;
        $scope.currentDoHinh = canvas.display.image({
            x: $scope.xCenter - w/2,
            y: $scope.yCenter - h/2,
            image: renderDH1(),
            width: w,
            height: h,
        });

        $scope.panelDoHinh.children[2].addChild($scope.currentDoHinh);

        $scope.setDoHinhStatus();
       
        canvas.redraw();
        $scope.closeDoHinh();
    }

    $scope.onShowDH2 = function () {
        $scope.panelDoHinh.children[2].children = [];

        var w = $scope.DoHinhWidth * $scope.panelBackground.children[2].offset;
        var h = $scope.DoHinhHeight * $scope.panelBackground.children[2].offset;
        $scope.currentDoHinh = canvas.display.image({
            x: $scope.xCenter - w / 2,
            y: $scope.yCenter - h / 2,
            image: renderDH2(),
            width: w,
            height: h,
        });

        $scope.panelDoHinh.children[2].addChild($scope.currentDoHinh);
        
        $scope.setDoHinhStatus();

        canvas.redraw();
        $scope.closeDoHinh();
    }

    $scope.onShowDH3 = function () {
        $scope.panelDoHinh.children[2].children = [];

        var w = $scope.DoHinhWidth * $scope.panelBackground.children[2].offset;
        var h = $scope.DoHinhHeight * $scope.panelBackground.children[2].offset;
        $scope.currentDoHinh = canvas.display.image({
            x: $scope.xCenter - w / 2,
            y: $scope.yCenter - h / 2,
            image: renderDH3(),
            width: w,
            height: h,
        });

        $scope.panelDoHinh.children[2].addChild($scope.currentDoHinh);
       
        $scope.setDoHinhStatus();

        canvas.redraw();
        $scope.closeDoHinh();
    }

    $scope.onShowDH4 = function () {
        $scope.panelDoHinh.children[2].children = [];

        var w = $scope.DoHinhWidth * $scope.panelBackground.children[2].offset;
        var h = $scope.DoHinhHeight * $scope.panelBackground.children[2].offset;
        $scope.currentDoHinh = canvas.display.image({
            x: $scope.xCenter - w / 2,
            y: $scope.yCenter - h / 2,
            image: renderDH4(),
            width: w,
            height: h,
        });

        $scope.panelDoHinh.children[2].addChild($scope.currentDoHinh);
        
        $scope.setDoHinhStatus();

        canvas.redraw();
        $scope.closeDoHinh();
    }

    $scope.onShowDH5 = function () {
        $scope.panelDoHinh.children[2].children = [];

        var w = $scope.DoHinhWidth * $scope.panelBackground.children[2].offset;
        var h = $scope.DoHinhHeight * $scope.panelBackground.children[2].offset;
        $scope.currentDoHinh = canvas.display.image({
            x: $scope.xCenter - w / 2,
            y: $scope.yCenter - h / 2,
            image: renderDH5(),
            width: w,
            height: h,
        });

        $scope.panelDoHinh.children[2].addChild($scope.currentDoHinh);
       
        $scope.setDoHinhStatus();

        canvas.redraw();
        $scope.closeDoHinh();
    }

    $scope.onShowDH6 = function () {
        $scope.panelDoHinh.children[2].children = [];

        var w = $scope.DoHinhWidth * $scope.panelBackground.children[2].offset;
        var h = $scope.DoHinhHeight * $scope.panelBackground.children[2].offset;
        $scope.currentDoHinh = canvas.display.image({
            x: $scope.xCenter - w / 2,
            y: $scope.yCenter - h / 2,
            image: renderDH6(),
            width: w,
            height: h,
        });

        $scope.panelDoHinh.children[2].addChild($scope.currentDoHinh);
        
        $scope.setDoHinhStatus();

        canvas.redraw();
        $scope.closeDoHinh();
    }

    $scope.onShowDH7 = function () {
        $scope.panelDoHinh.children[2].children = [];

        var w = $scope.DoHinhWidth * $scope.panelBackground.children[2].offset;
        var h = $scope.DoHinhHeight * $scope.panelBackground.children[2].offset;
        $scope.currentDoHinh = canvas.display.image({
            x: $scope.xCenter - w / 2,
            y: $scope.yCenter - h / 2,
            image: renderDH7(),
            width: w,
            height: h,
        });

        $scope.panelDoHinh.children[2].addChild($scope.currentDoHinh);
        
        $scope.setDoHinhStatus();

        canvas.redraw();
        $scope.closeDoHinh();
    }

    $scope.onShowDH8 = function () {
        $scope.panelDoHinh.children[2].children = [];

        var w = $scope.DoHinhWidth * $scope.panelBackground.children[2].offset;
        var h = $scope.DoHinhHeight * $scope.panelBackground.children[2].offset;
        $scope.currentDoHinh = canvas.display.image({
            x: $scope.xCenter - w / 2,
            y: $scope.yCenter - h / 2,
            image: renderDH8(),
            width: w,
            height: h,
        });

        $scope.panelDoHinh.children[2].addChild($scope.currentDoHinh);
       
        $scope.setDoHinhStatus();

        canvas.redraw();
        $scope.closeDoHinh();
    }

    $scope.onShowDH9 = function () {
        $scope.panelDoHinh.children[2].children = [];

        var w = $scope.DoHinhWidth * $scope.panelBackground.children[2].offset;
        var h = $scope.DoHinhHeight * $scope.panelBackground.children[2].offset;
        $scope.currentDoHinh = canvas.display.image({
            x: $scope.xCenter - w / 2,
            y: $scope.yCenter - h / 2,
            image: renderDH9(),
            width: w,
            height: h,
        });

        $scope.panelDoHinh.children[2].addChild($scope.currentDoHinh);
       
        $scope.setDoHinhStatus();

        canvas.redraw();
        $scope.closeDoHinh();
    }

    $scope.onShowDH10 = function () {
        $scope.panelDoHinh.children[2].children = [];

        var w = $scope.DoHinhWidth * $scope.panelBackground.children[2].offset;
        var h = $scope.DoHinhHeight * $scope.panelBackground.children[2].offset;
        $scope.currentDoHinh = canvas.display.image({
            x: $scope.xCenter - w / 2,
            y: $scope.yCenter - h / 2,
            image: renderDH10(),
            width: w,
            height: h,
        });

        $scope.panelDoHinh.children[2].addChild($scope.currentDoHinh);
        
        $scope.setDoHinhStatus();

        canvas.redraw();
        $scope.closeDoHinh();
    }

    $scope.onShowDH11 = function () {
        console.log("DH11");
        $scope.panelDoHinh.children[2].children = [];

        var w = $scope.DoHinhWidth * $scope.panelBackground.children[2].offset;
        var h = $scope.DoHinhHeight * $scope.panelBackground.children[2].offset;
        $scope.currentDoHinh = canvas.display.image({
            x: $scope.xCenter - w / 2,
            y: $scope.yCenter - h / 2,
            image: renderDH11(),
            width: w,
            height: h,
        });

        $scope.panelDoHinh.children[2].addChild($scope.currentDoHinh);
       
        $scope.setDoHinhStatus();
        canvas.redraw();
        $scope.closeDoHinh();
    }

    $scope.onShowDH12 = function () {
        $scope.panelDoHinh.children[2].children = [];

        var w = $scope.DoHinhWidth * $scope.panelBackground.children[2].offset;
        var h = $scope.DoHinhHeight * $scope.panelBackground.children[2].offset;
        $scope.currentDoHinh = canvas.display.image({
            x: $scope.xCenter - w / 2,
            y: $scope.yCenter - h / 2,
            image: renderDH12(),
            width: w,
            height: h,
        });

        $scope.panelDoHinh.children[2].addChild($scope.currentDoHinh);
       
        $scope.setDoHinhStatus();

        canvas.redraw();
        $scope.closeDoHinh();
    }

    $scope.InitUserStatus =function()
    {
        BaseService.postData("Home", "GetUserState", false, null)
        .then(function (response) {
            if (response.success == true) {
                $scope.isAdmin = response.isAdmin;
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

    $scope.langPara = null;

    $scope.getLang = function () {
        BaseService.postData("NAV", "GetLangMain", false,null)
                .then(function (response) {
                    if (response.success == true) {
                        $scope.langPara = response.lstData;
                    }
                    else {
                        BaseService.displayError("Error when load language!", 5000);
                    }
                }).finally(function () {
                }, function () { });
    }
    
    // load
    $scope.load = function () {
       // var myBlockUI = blockUI.instances.get('BlockUI');
        // myBlockUI.start();
        //$scope.InitUserStatus();
        $scope.getLang();
        $scope.dohinhData = {
            dh1: renderDHThumb1(),
            dh2: renderDHThumb2(),
            dh3: renderDHThumb3(),
            dh4: renderDHThumb4(),
            dh5: renderDHThumb5(),
            dh6: renderDHThumb6(),
            dh7: renderDHThumb7(),
            dh8: renderDHThumb8(),
            dh9: renderDHThumb9(),
            dh10: renderDHThumb10(),
            dh11: renderDHThumb11(),
            dh12: renderDHThumb12(),
        }

        // User state
        BaseService.postData("Home", "GetUserState", false, null)
        .then(function (response) {
            if (response.success == true) {
                $scope.isAdmin = response.isAdmin;
                $scope.getUserStateLoaded = true;
                $scope.startMachine();
            }
            else {
                if (response.reLogin == true) {
                    var url = $scope.baseURL + "Home/LogOut";
                    $window.location.href = url;
                }
            }
        }).finally(function () {
        }, function () { });

        // Sys Para
        BaseService.postData("Admin", "GetSysPara", false, null)
        .then(function (response) {
            if (response.success == true) {
                $scope.sysPara = response.lstData;
                $scope.getSysParaLoaded = true;
                $scope.startMachine();
            }
            else {
                if (response.reLogin == true) {
                    var url = $scope.baseURL + "Home/LogOut";
                    $window.location.href = url;
                }
            }
        }).finally(function () {
        }, function () { });

        // GetHuyet
        BaseService.postData("Home", "GetHuyet", false, null)
        .then(function (response) {
            if (response.success == true) {
                $scope.points = response.lstData;
                $scope.getHuyetLoaded = true;
                $scope.startMachine();
            }
            else {
                if (response.reLogin == true) {
                    var url = $scope.baseURL + "Home/LogOut";
                    $window.location.href = url;
                }
            }
        }).finally(function () {
        }, function () { });

        // GetHuyet
        BaseService.postData("Home", "GetBoHuyet", false, { isPass: true })
        .then(function (response) {
            if (response.success == true) {
                $scope.boHuyet = response.lstData;
                $scope.boHuyetProcess = $scope.boHuyet;
                $scope.getBoHuyetLoaded = true;
                $scope.startMachine();
            }
            else {
                if (response.reLogin == true) {
                    var url = $scope.baseURL + "Home/LogOut";
                    $window.location.href = url;
                }
            }
        }).finally(function () {
        }, function () { });

        // GetAllBodyItems
        BaseService.postData("Admin", "GetAllBodyItems", false, null)
        .then(function (response) {
            if (response.success == true) {
                $scope.listBodyPoints = response.lstData;
                $scope.getAllBodyItemsLoaded = true;
                $scope.startMachine();
            }
            else {
                if (response.reLogin == true) {
                    var url = $scope.baseURL + "Home/LogOut";
                    $window.location.href = url;
                }
            }
        }).finally(function () {
        }, function () { });

        // GetAllSubBodyItems
        BaseService.postData("Admin", "GetAllSubBodyItems", false, null)
        .then(function (response) {
            if (response.success == true) {
                $scope.lstSubBody = response.lstData;
                $scope.getAllSubBodyItemsLoaded = true;
                $scope.startMachine();
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

    $scope.startMachine = function()
    {
        if ($scope.getUserStateLoaded 
            && $scope.getSysParaLoaded
            && $scope.getHuyetLoaded
            && $scope.getBoHuyetLoaded
            && $scope.getAllBodyItemsLoaded
            && $scope.getAllSubBodyItemsLoaded
            )
        {
            console.log("start machine");
            $scope.InitCanvas();
            console.log("InitCanvas");
            $scope.initHumanCanvas();
            console.log("initHumanCanvas");
            $scope.initScreen();
            console.log("initScreen");
            $scope.InitRender();
            console.log("InitRender");
            $scope.initDoHinh();
            console.log("initDoHinh");
            $scope.initGrid();
            console.log("initGrid");
            $scope.initTitle();
            console.log("initTitle");
            $scope.InitPanelListPoints();
            console.log("InitPanelListPoints");
            $scope.initFindPoint();
            console.log("initFindPoint");
            $scope.initPanelControl();
            console.log("initPanelControl");
            $scope.initTreatmentPointInfo();
            console.log("initTreatmentPointInfo");
            $scope.renderThumb();
            console.log("renderThumb");
            $scope.renderPanelButton();
            console.log("renderPanelButton");
            $scope.InitAccessControl();
            console.log("InitAccessControl");
            $scope.renderPanelBody();
            console.log("renderPanelBody");
            $scope.renderHuman();
            console.log("renderHuman");
            $scope.SetDataBody();
            console.log("SetDataBody");
            $scope.RenderPanelViscera();
            console.log("RenderPanelViscera");
            $scope.currentBackground = $scope.panelBackground.children[2];
            $scope.currentBackground.x = $scope.frameWidth / 2 - $scope.currentBackground.width / 2;
            $scope.currentBackground.y = $scope.frameHeight / 2 - $scope.currentBackground.height / 2;
            $scope.offset = $scope.currentBackground.offset;
            $scope.panelThumB.children[$scope.currentBackground.itemIndex + 1].children[0].fill = $scope.thumBSelectColor;
            $scope.panelListPoints.children[$scope.currentBackground.itemIndex].x = 0;
            $scope.panelGrid.children[$scope.currentBackground.itemIndex].x = 0;
            canvas.redraw();
            $scope.showLoading = false;
            $scope.showMain = true;
            $scope.showHuman = false;
        }
    }

    $interval(function () { $scope.timer(); }, $scope.tmDf);

    $scope.timer = function()
    {
        if ($scope.FindBoHuyet && $scope.indexOfPointPlay == $scope.currentBoHuyet.Huyets.length)
        {
            $scope.currentPointIsPlay.stroke = "0px #0F0";
            $scope.removeTreatmentInfo();
            $scope.indexOfPointPlay = -1;
            $scope.isPlay = false;
            canvas.redraw();
        }
           

        if ($scope.FindBoHuyet && $scope.isPlay)
        {
            $scope.actionRunIndex += 1;
            
            $scope.currentPointIsPlay.stroke = ($scope.actionRunIndex + 1).toString() + "px #0F0";

            if ($scope.roleAccessControlCount == 4)
            {
                $scope.roleAccessControl = -$scope.roleAccessControl;
                $scope.roleAccessControlCount = 0;
            }
           
            $scope.roleAccessControlCount += 1;
            $scope.accessControl.x = $scope.currentPointIsPlay.x + $scope.roleAccessControl * $scope.roleAccessControlCount;
            $scope.accessControl.y = $scope.currentPointIsPlay.y+6;
            canvas.redraw();

            if ($scope.actionRunIndex == 6)
            {
                
                $scope.currentPointIsPlay.stroke = "0px #0F0";
                $scope.actionIndex += 1;
                $scope.actionRunIndex = 0;
            }

            if ($scope.numberAction == $scope.actionIndex)
            {
                $scope.indexOfPointPlay += 1;
                $scope.actionRunIndex = 0;

                if ($scope.indexOfPointPlay < $scope.currentBoHuyet.Huyets.length)
                {
                    $scope.getCurrentPointToPlay();
                    $scope.displayTreatmentInfo();
                }
            }
            
        }
    }

    $scope.InitAccessControl = function()
    {
        $scope.accessControl = renderAccessControl(-100, 0);

        canvas.addChild($scope.accessControl);
    }

    $scope.initTreatmentPointInfo = function()
    {
        try
        {
            $scope.panelTreatmentInfo = canvas.display.rectangle({
                x: 0,
                y: -80,
                width: 200,
                height: 80,
                stroke: "1px #0FF",
                fill: "rgba(0,0,0, 0.7)",
                itemType: 'panel',
                objectType: "control",
            });

            var text0 = canvas.display.text({
                x: 10,
                y: 20,
                font: "normal 14px sans-serif",
                text: "",
                fill: "#FFF",
                origin: { x: "left", y: "center" },
            });

            $scope.panelTreatmentInfo.addChild(text0);

            var text0 = canvas.display.text({
                x: 10,
                y: 40,
                font: "normal 14px sans-serif",
                text: "",
                fill: "#FFF",
                origin: { x: "left", y: "center" },
            });

            $scope.panelTreatmentInfo.addChild(text0);

            var text0 = canvas.display.text({
                x: 10,
                y: 60,
                font: "normal 14px sans-serif",
                text: "",
                fill: "#FFF",
                origin: { x: "left", y: "center" },
            });

            $scope.panelTreatmentInfo.addChild(text0);

            canvas.addChild($scope.panelTreatmentInfo);
        }
        catch (err) {
            console.log(err.message);
        }
    }

    $scope.reInitPanelControl = function()
    {
        $scope.panelControl.x = $scope.xCenter;
    }

    $scope.initPanelControl = function()
    {
        try{
            $scope.panelControl = canvas.display.rectangleArc({
                x: $scope.xCenter,
                y: -80,
                width: 160,
                height: 40,
                radius: 20,
                stroke: "0px #000000",
                fill: "rgba(255,255,255, 0.5)",
                itemType: 'panel',
                objectType: "control",
                origin: { x: "center", y: "center" },
            });

            //back
            var btn = canvas.display.image({
                x: -60,
                y: 0,
                image: renderBackIcon32(),
                width: 32,
                height: 32,
                origin: { x: "center", y: "center" },
            });

            btn.bind("mouseenter touchenter", function () {
                canvas.mouse.cursor("pointer");
                this.width = 36;
                this.height = 36;
                canvas.redraw();
            }).bind("mouseleave touchleave", function () {
                canvas.mouse.cursor("default");
                this.width = 32;
                this.height = 32;
                canvas.redraw();
            }).bind("click tap ", function () {
                if ($scope.indexOfPointPlay - 1 > -1 && $scope.isPlay) {
                    $scope.currentPointIsPlay.stroke = "0px #0F0";
                    $scope.indexOfPointPlay -= 1;
                    $scope.actionRunIndex = 0;
                    $scope.getCurrentPointToPlay();
                    $scope.displayTreatmentInfo();
                }
            });

            $scope.panelControl.addChild(btn);
            //pause
            var btn = canvas.display.image({
                x: -20,
                y: 0,
                image: renderPauseIcon32(),
                width: 32,
                height: 32,
                origin: { x: "center", y: "center" },
            });

            btn.bind("mouseenter touchenter", function () {
                canvas.mouse.cursor("pointer");
                this.width = 36;
                this.height = 36;
                canvas.redraw();
            }).bind("mouseleave touchleave", function () {
                canvas.mouse.cursor("default");
                this.width = 32;
                this.height = 32;
                canvas.redraw();
            }).bind("click tap ", function () {
                $scope.isPlay = false;
            });

            $scope.panelControl.addChild(btn);
            //play
            var btn = canvas.display.image({
                x: 20,
                y: 0,
                image: renderPlayIcon32(),
                width: 32,
                height: 32,
                origin: { x: "center", y: "center" },
            });

            btn.bind("mouseenter touchenter", function () {
                canvas.mouse.cursor("pointer");
                this.width = 36;
                this.height = 36;
                canvas.redraw();
            }).bind("mouseleave touchleave", function () {
                canvas.mouse.cursor("default");
                this.width = 32;
                this.height = 32;
                canvas.redraw();
            }).bind("click tap ", function () {
                $scope.isPlay = true;
                $scope.displayTreatmentInfo();
            });

            $scope.panelControl.addChild(btn);
            //next
            var btn = canvas.display.image({
                x: 60,
                y: 0,
                image: rendernexIcon32(),
                width: 32,
                height: 32,
                origin: { x: "center", y: "center" },
            });
            btn.bind("mouseenter touchenter", function () {
                canvas.mouse.cursor("pointer");
                this.width = 36;
                this.height = 36;
                canvas.redraw();
            }).bind("mouseleave touchleave", function () {
                canvas.mouse.cursor("default");
                this.width = 32;
                this.height = 32;
                canvas.redraw();
            }).bind("click tap ", function () {
                if ($scope.indexOfPointPlay + 1 < $scope.currentBoHuyet.Huyets.length && $scope.isPlay) {
                    $scope.currentPointIsPlay.stroke = "0px #0F0";
                    $scope.indexOfPointPlay += 1;
                    $scope.actionRunIndex = 0;
                    $scope.getCurrentPointToPlay();
                    $scope.displayTreatmentInfo();
                }
            });

            $scope.panelControl.addChild(btn);
            canvas.addChild($scope.panelControl);
        }
        catch (err) {
            console.log(err.message);
        }
    }


    $scope.initTitle = function ()
    {
        $scope.panelTitle = canvas.display.text({
            x: $scope.xCenter,
            y:  $scope.padding+5,
            font: "bold 18px sans-serif",
            text: "",
            fill: "#FF0",
            origin: { x: "center", y: "center" },
            shadow:  "5px 5px 20px #000",
        });

        canvas.addChild($scope.panelTitle);
    }

    $scope.reinitTitle = function()
    {
        $scope.panelTitle.x = $scope.xCenter;
    }

    $scope.onShowHideGrid = function()
    {
        
        if ($scope.setting.showGrid)
        {
            $scope.panelGrid.x = 0;
        }
        else
        {
            $scope.panelGrid.x = 2 * $scope.frameWidth;
        }

        canvas.redraw();
    }

    $scope.onShowHideDoHinh = function()
    {
        if ($scope.setting.dohinh) {
            $scope.panelDoHinh.x = 0;
        }
        else {
            $scope.panelDoHinh.x = 2 * $scope.frameWidth;
        }

        canvas.redraw();
    }

    $scope.onSearch = function()
    {
        if ($scope.SearchInfo.fullTextSearch != '')
        {
            $scope.boHuyetProcess = $filter('filter')($scope.boHuyet, { Name: $scope.SearchInfo.fullTextSearch }, false);
        }
        else {
            $scope.boHuyetProcess = $scope.boHuyet;
        }
    }

    

    $window.onresize = function () {
        $scope.onResize();
    }

    $scope.InitCanvas = function()
    {
        can = document.getElementById('myCanvas');
        canvas = oCanvas.create({
            canvas: can,
            fps: 30,
            background: "#000",
        });
    }

    $scope.initHumanCanvas = function()
    {
        canHuman = document.getElementById('myCanvasHuman');
        canvasHumann = oCanvas.create({
            canvas: canHuman,
            fps: 30,
            background: "#000",
        });
    }

    $scope.resetBodySelected = function()
    {
        for(var i =0; i<$scope.panelManBodyButton.children.length;i++)
        {
            $scope.panelManBodyButton.children[i].children[0].shadow = $scope.shadowBodyOff;
            $scope.panelFemaleBodyButton.children[i].children[0].shadow = $scope.shadowBodyOff;
        }
    }

    $scope.selectBody = function (index) {
        for (var i = 0; i < $scope.panelHumanItem.children.length; i++)
        {
            $scope.panelHumanItem.children[i].x = 2 * $scope.frameWidth;
        }

        if ($scope.Gender == 1)
        {
            $scope.panelHumanItem.children[index].x = 0;
        }
        else {
            $scope.panelHumanItem.children[index+$scope.imgIndexFirst].x = 0;
        }
        canvasHumann.redraw();
    }

    $scope.SetDataBody = function()
    {
        if ($scope.listBodyPoints != null && $scope.listBodyPoints.length > 0) {

            for (var i = 0; i < $scope.listBodyPoints.length; i++) {

                var obj = $scope.listBodyPoints[i];
                
                var point = canvasHumann.display.ellipse({
                    x: obj.X / $scope.bodyItemFactor,
                    y: obj.Y / $scope.bodyItemFactor,
                    radius: parseInt($scope.sysPara.PointHumanRadius.Value),
                    stroke: "0px #0F0",
                    fill: $scope.sysPara.ColorPointHuman.Value,
                    valueTemp1: obj,
                    origin: {x:"center", y: "center"},
                });

                point.bind("mouseenter touchenter", function () {
                    canvasHumann.mouse.cursor("pointer");
                    this.stroke = "3px " + $scope.sysPara.BorderColotPointHuman.Value;
                    canvasHumann.redraw();
                }).bind("mouseleave touchleave", function () {
                    canvasHumann.mouse.cursor("default");
                    this.stroke = "0px #0F0";
                    canvasHumann.redraw();
                }).bind("click tap ", function (e) {
                    $scope.BodyItems = [];
                    
                    if (this.valueTemp1.Item != null && this.valueTemp1.Item.length > 0)
                    {
                        for(var i=0;i<this.valueTemp1.Item.length;i++)
                        {
                            var ob = this.valueTemp1.Item[i];
                            var get = $filter('filter')($scope.boHuyetProcess, { AutoID: ob.BoHuyetID }, true);

                            if (get.length>0)
                            {
                                $scope.BodyItems.push(get[0]);
                            }
                        }

                        $scope.BodyItemDescription = this.valueTemp1.Description;
                    }
                    $scope.showBodyItemInfoModal();
                });

                if (obj.Gender == 1) {
                    $scope.panelHumanItem.children[obj.Type - 1].children[0].addChild(point);
                }
                else {
                    $scope.panelHumanItem.children[obj.Type - 1 + $scope.imgIndexFirst].children[0].addChild(point);
                }
            }
            canvasHumann.redraw();
        }
    }

    $scope.showBodyItemInfoModal = function () {
        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'BodyInfoModal.html',
            scope: $scope,
            size: '',
            backdrop: 'static',
            keyboard: false,
        });

        $scope.onSelectBoHuyetInBody = function(item)
        {
            $scope.treatmentProcess(item);
            $scope.closeInfoModal();
            $scope.showHuman = false;
            $scope.showMain = true;
        }

        $scope.closeInfoModal = function () {
            $scope.dialogDis = false;
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.showAddSubBodyItemModal = function (id) {
        var obj = $filter('filter')($scope.lstSubBody, { PositionID: id }, true);

        if (obj == null || obj.length == 0) {
            return;
        }

        $scope.BodyItems = [];

        if (obj[0].Items != null && obj[0].Items.length > 0) {
            for (var i = 0; i < obj[0].Items.length; i++) {
                var ob = obj[0].Items[i];
                var get = $filter('filter')($scope.boHuyetProcess, { AutoID: ob.BoHuyetID }, true);

                if (get.length > 0) {
                    $scope.BodyItems.push(get[0]);
                }
            }
        }

        $scope.BodyItemDescription = obj[0].Description;

        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'SubBodyInfoModal.html',
            scope: $scope,
            size: '',
            backdrop: 'static',
            keyboard: false,
        });

        $scope.OkSubBodyItem = function (item) {
            $scope.treatmentProcess(item);
            $scope.closeAddSubBodyItemModal();
            $scope.showHuman = false;
            $scope.showMain = true;
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

    
    $scope.RenderPanelViscera = function()
    {
        var n = 5;
        var nItem = $scope.imgHeight / n;
        var w = 80;
        var imgRadius = 60;
        $scope.panelvisceraHuman = canvasHumann.display.rectangle({
            x: $scope.frameWidth/2 - $scope.imgWidth/2 -w,
            y: $scope.imgPadding,
            width: 5,
            height: 5,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        // left
        var p1 = canvasHumann.display.rectangle({
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
        var cir = canvasHumann.display.ellipse({
            x: w/2,
            y: yPos,
            radius: w/2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: {x: "center", y: "center"},
        });
        var line = canvasHumann.display.line({
            start: { x: w / 2, y: 0 },
            end: { x: w / 2 + 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = canvasHumann.display.image({
            x: -imgRadius/2,
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
            canvasHumann.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            canvasHumann.redraw();
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            canvasHumann.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(1);
        });
        p1.addChild(cir);

        //lung
        yPos += nItem;
        var cir = canvasHumann.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = canvasHumann.display.line({
            start: { x: w / 2, y: 0 },
            end: { x: w / 2 + 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = canvasHumann.display.image({
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
            canvasHumann.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            canvasHumann.redraw();
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            canvasHumann.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(3);
        });

        p1.addChild(cir);

        //Heart
        yPos += nItem;
        var cir = canvasHumann.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = canvasHumann.display.line({
            start: { x: w / 2, y: 0 },
            end: { x: w / 2 + 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = canvasHumann.display.image({
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
            canvasHumann.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            canvasHumann.redraw();
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            canvasHumann.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(5);
        });

        p1.addChild(cir);

        //liver
        yPos += nItem;
        var cir = canvasHumann.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = canvasHumann.display.line({
            start: { x: w / 2, y: 0 },
            end: { x: w / 2 + 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = canvasHumann.display.image({
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
            canvasHumann.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            canvasHumann.redraw();
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            canvasHumann.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(7);
        });

        p1.addChild(cir);

        //bone
        yPos += nItem;
        var cir = canvasHumann.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = canvasHumann.display.line({
            start: { x: w / 2, y: 0 },
            end: { x: w / 2 + 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = canvasHumann.display.image({
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
            canvasHumann.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            canvasHumann.redraw();
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            canvasHumann.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(9);
        });

        p1.addChild(cir);

        //right
        var p2 = canvasHumann.display.rectangle({
            x: w+$scope.imgWidth,
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
        var cir = canvasHumann.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = canvasHumann.display.line({
            start: { x: -w / 2, y: 0 },
            end: { x: -w / 2 - 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = canvasHumann.display.image({
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
            canvasHumann.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            canvasHumann.redraw();
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            canvasHumann.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(2);
        });

        p2.addChild(cir);

        // colom
        yPos += nItem;
        var cir = canvasHumann.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = canvasHumann.display.line({
            start: { x: -w / 2, y: 0 },
            end: { x: -w / 2 - 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = canvasHumann.display.image({
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
            canvasHumann.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            canvasHumann.redraw();
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            canvasHumann.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(4);
        });

        p2.addChild(cir);

        // ruot
        yPos += nItem;
        var cir = canvasHumann.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = canvasHumann.display.line({
            start: { x: -w / 2, y: 0 },
            end: { x: -w / 2 - 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = canvasHumann.display.image({
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
            canvasHumann.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            canvasHumann.redraw();
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            canvasHumann.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(6);
        });

        p2.addChild(cir);

        // than
        yPos += nItem;
        var cir = canvasHumann.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = canvasHumann.display.line({
            start: { x: -w / 2, y: 0 },
            end: { x: -w / 2 - 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = canvasHumann.display.image({
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
            canvasHumann.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            canvasHumann.redraw();
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            canvasHumann.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(8);
        });

        p2.addChild(cir);

        // bang quang
        yPos += nItem;
        var cir = canvasHumann.display.ellipse({
            x: w / 2,
            y: yPos,
            radius: w / 2,
            fill: "rgba(0,0,0,0.0)",
            stroke: "2px #FFF",
            orgin: { x: "center", y: "center" },
        });
        var line = canvasHumann.display.line({
            start: { x: -w / 2, y: 0 },
            end: { x: -w / 2 - 20, y: 0 },
            stroke: "2px #FFF",
        });
        cir.addChild(line);
        var img = canvasHumann.display.image({
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
            canvasHumann.mouse.cursor("pointer");
            this.shadow = $scope.shadowBodyOn;
            canvasHumann.redraw();
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
            this.shadow = $scope.shadowBodyOff;
            canvasHumann.redraw();
        }).bind("click tap ", function () {
            $scope.showAddSubBodyItemModal(10);
        });

        p2.addChild(cir);

        $scope.panelvisceraHuman.addChild(p1);
        $scope.panelvisceraHuman.addChild(p2);

        canvasHumann.addChild($scope.panelvisceraHuman);
    }

    $scope.renderHuman = function()
    {
        $scope.panelHumanButton = canvasHumann.display.rectangle({
            x: 0,
            y: 0,
            width: 80,
            height: $scope.frameHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var yPos = 10;
        var btn = canvasHumann.display.rectangle({
            x: 6,
            y: yPos,
            width: 60,
            height: 60,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: 6,
            y: 6,
            image: renderHomeIcon48(),
            width: 48,
            height: 48,
        });

        btn.addChild(img);

        btn.bind("mouseenter touchenter", function () {
            canvasHumann.mouse.cursor("pointer");
            this.children[0].width = 52;
            this.children[0].height = 52;
            canvasHumann.redraw();
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
            this.children[0].width = 48;
            this.children[0].height = 48;
            canvasHumann.redraw();
        }).bind("click tap ", function () {
            $scope.hideCanvasHuman();
        });

        $scope.panelHumanButton.addChild(btn);

        yPos += 70;
        var line = canvasHumann.display.line({
            start: { x: 12, y: yPos },
            end: { x: 60, y: yPos },
            stroke: "1px #CCC",
        });

        $scope.panelHumanButton.addChild(line);

        yPos += 10;
        $scope.maleButton = canvasHumann.display.rectangle({
            x: 6,
            y: yPos,
            width: 60,
            height: 60,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });
        
        var img = canvasHumann.display.image({
            x: 3,
            y: 3,
            image: renderGenderIcon(1),
            width: 54,
            height: 54,
           
        });
        $scope.maleButton.addChild(img);
        $scope.maleButton.children[0].shadow = $scope.shadowBodyOn;
        $scope.maleButton.bind("mouseenter touchenter", function () {
            canvasHumann.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.panelFemaleBodyButton.x = $scope.frameWidth;
            $scope.panelManBodyButton.x = $scope.frameWidth - $scope.imgThumbWidth;
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.femaleButton.children[0].shadow = $scope.shadowBodyOff;
            $scope.Gender = 1;
            $scope.selectBody($scope.imgIndex);
        });

        $scope.panelHumanButton.addChild($scope.maleButton);

        yPos += 60;
        $scope.femaleButton = canvasHumann.display.rectangle({
            x: 6,
            y: yPos,
            width: 60,
            height: 60,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: 3,
            y: 3,
            image: renderGenderIcon(2),
            width: 54,
            height: 54,

        });
        $scope.femaleButton.addChild(img);

        $scope.femaleButton.bind("mouseenter touchenter", function () {
            canvasHumann.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.panelFemaleBodyButton.x = $scope.frameWidth - $scope.imgThumbWidth;
            $scope.panelManBodyButton.x = $scope.frameWidth;
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.maleButton.children[0].shadow = $scope.shadowBodyOff;
            $scope.Gender = 2;
            $scope.selectBody($scope.imgIndex);
        });

        $scope.panelHumanButton.addChild($scope.femaleButton);

        $scope.panelManBodyButton = canvasHumann.display.rectangle({
            x: $scope.frameWidth - $scope.imgThumbWidth,
            y: 0,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight*4+$scope.imgPadding*4,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var yPos = $scope.imgPadding;
        var reg = canvasHumann.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: 0,
            y: 0,
            image: renderManBodyThumb(1),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
        });
        reg.addChild(img);

        reg.bind("mouseenter touchenter", function () {
            canvasHumann.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelFemaleBodyButton.children[0].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 0;
            $scope.selectBody($scope.imgIndex);
        });

        $scope.panelManBodyButton.addChild(reg);

        yPos += $scope.imgThumbHeight + $scope.imgPadding;
        var reg = canvasHumann.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: 0,
            y: 0,
            image: renderManBodyThumb(2),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
        });
        reg.addChild(img);

        reg.bind("mouseenter touchenter", function () {
            canvasHumann.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelFemaleBodyButton.children[1].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 1;
            $scope.selectBody($scope.imgIndex);
        });
        $scope.panelManBodyButton.addChild(reg);

        yPos += $scope.imgThumbHeight + $scope.imgPadding;
        var reg = canvasHumann.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: 0,
            y: 0,
            image: renderManBodyThumb(3),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
        });
        reg.addChild(img);

        reg.bind("mouseenter touchenter", function () {
            canvasHumann.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelFemaleBodyButton.children[2].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 2;
            $scope.selectBody($scope.imgIndex);
        });
        $scope.panelManBodyButton.addChild(reg);

        yPos += $scope.imgThumbHeight + $scope.imgPadding;
        var reg = canvasHumann.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: 0,
            y: 0,
            image: renderManBodyThumb(4),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
        });
        reg.addChild(img);

        reg.bind("mouseenter touchenter", function () {
            canvasHumann.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelFemaleBodyButton.children[3].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 3;
            $scope.selectBody($scope.imgIndex);
        });
        $scope.panelManBodyButton.addChild(reg);

        canvasHumann.addChild($scope.panelManBodyButton);

        $scope.panelFemaleBodyButton = canvasHumann.display.rectangle({
            x: $scope.frameWidth,
            y: 0,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight * 4 + 4* $scope.imgPadding,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var yPos = $scope.imgPadding;
        var reg = canvasHumann.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: 0,
            y: 0,
            image: renderFemaleBodyThumb(1),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
        });
        reg.addChild(img);
        reg.bind("mouseenter touchenter", function () {
            canvasHumann.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelManBodyButton.children[0].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 0;
            $scope.selectBody($scope.imgIndex);
        });
        $scope.panelFemaleBodyButton.addChild(reg);

        yPos += $scope.imgThumbHeight + $scope.imgPadding;
        var reg = canvasHumann.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: 0,
            y: 0,
            image: renderFemaleBodyThumb(2),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
        });
        reg.addChild(img);
        reg.bind("mouseenter touchenter", function () {
            canvasHumann.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelManBodyButton.children[1].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 1;
            $scope.selectBody($scope.imgIndex);
        });
        $scope.panelFemaleBodyButton.addChild(reg);

        yPos += $scope.imgThumbHeight + $scope.imgPadding;
        var reg = canvasHumann.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: 0,
            y: 0,
            image: renderFemaleBodyThumb(3),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
        });
        reg.addChild(img);
        reg.bind("mouseenter touchenter", function () {
            canvasHumann.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelManBodyButton.children[2].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 2;
            $scope.selectBody($scope.imgIndex);
        });
        $scope.panelFemaleBodyButton.addChild(reg);

        yPos += $scope.imgThumbHeight + $scope.imgPadding;
        var reg = canvasHumann.display.rectangle({
            x: 0,
            y: yPos,
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: 0,
            y: 0,
            image: renderFemaleBodyThumb(4),
            width: $scope.imgThumbWidth,
            height: $scope.imgThumbHeight,
        });
        reg.addChild(img);
        reg.bind("mouseenter touchenter", function () {
            canvasHumann.mouse.cursor("pointer");
        }).bind("mouseleave touchleave", function () {
            canvasHumann.mouse.cursor("default");
        }).bind("click tap ", function () {
            $scope.resetBodySelected();
            this.children[0].shadow = $scope.shadowBodyOn;
            $scope.panelManBodyButton.children[3].children[0].shadow = $scope.shadowBodyOn;
            $scope.imgIndex = 3;
            $scope.selectBody($scope.imgIndex);
        });
        $scope.panelFemaleBodyButton.addChild(reg);

        canvasHumann.addChild($scope.panelFemaleBodyButton);

        canvasHumann.addChild($scope.panelHumanButton);
    }


    $scope.renderPanelBody = function()
    {
        $scope.panelHumanItem = canvasHumann.display.rectangle({
            x: 0,
            y: 0,
            width: $scope.frameWidth,
            height: $scope.frameHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        $scope.bodyItemFactor = $scope.imgBodyHeightOrg / ($scope.frameHeight - 2 * $scope.imgPadding);

        $scope.imgWidth = $scope.imgBodyWidthOrg / $scope.bodyItemFactor;
        $scope.imgHeight = $scope.imgBodyHeightOrg / $scope.bodyItemFactor;
        var xPos = $scope.frameWidth / 2 - $scope.imgWidth / 2;
        
       // $scope.bodyItemFactor =$scope.imgBodyHeightOrg/ $scope.imgHeight;

        // man 1
        var reg = canvasHumann.display.rectangle({
            x: 0,
            y: 0,
            width: $scope.frameWidth,
            height: $scope.frameHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderManBody(1),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        // man 2
        var reg = canvasHumann.display.rectangle({
            x: $scope.frameWidth,
            y: 0,
            width: $scope.frameWidth,
            height: $scope.frameHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderManBody(2),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        // man 3
        var reg = canvasHumann.display.rectangle({
            x: $scope.frameWidth,
            y: 0,
            width: $scope.frameWidth,
            height: $scope.frameHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderManBody(3),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        // man 4
        var reg = canvasHumann.display.rectangle({
            x: $scope.frameWidth,
            y: 0,
            width: $scope.frameWidth,
            height: $scope.frameHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderManBody(4),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        // female1
        var reg = canvasHumann.display.rectangle({
            x: $scope.frameWidth,
            y: 0,
            width: $scope.frameWidth,
            height: $scope.frameHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderFemaleBody(1),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        // female2
        var reg = canvasHumann.display.rectangle({
            x: $scope.frameWidth,
            y: 0,
            width: $scope.frameWidth,
            height: $scope.frameHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderFemaleBody(2),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        // female3
        var reg = canvasHumann.display.rectangle({
            x: $scope.frameWidth,
            y: 0,
            width: $scope.frameWidth,
            height: $scope.frameHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderFemaleBody(3),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        // female4
        var reg = canvasHumann.display.rectangle({
            x: $scope.frameWidth,
            y: 0,
            width: $scope.frameWidth,
            height: $scope.frameHeight,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvasHumann.display.image({
            x: xPos,
            y: $scope.imgPadding,
            image: renderFemaleBody(4),
            width: $scope.imgWidth,
            height: $scope.imgHeight,
        });
        reg.addChild(img);

        $scope.panelHumanItem.addChild(reg);

        canvasHumann.addChild($scope.panelHumanItem);
    }

    $scope.initScreen = function()
    {
        $scope.frameWidth = document.documentElement.clientWidth;
        $scope.frameHeight = document.documentElement.clientHeight - 5;
        $scope.xCenter = $scope.frameWidth / 2;
        $scope.yCenter = $scope.frameHeight / 2;
        canvas.width = $scope.frameWidth;
        canvas.height = $scope.frameHeight;
        
        if ($scope.frameWidth >= $scope.frameHeight)
        {
            $scope.screenStatus = true;
        }
        else
        {
            $scope.screenStatus = false;
        }

        $scope.heightOfShow = $scope.frameHeight - $scope.bottomMargin - $scope.topMargin;

        canvasHumann.width = $scope.frameWidth;
        canvasHumann.height = $scope.frameHeight;
    }

    $scope.reInitGrid = function()
    {
        $scope.panelGrid.width = $scope.frameWidth;
        $scope.panelGrid.height = $scope.frameHeight;

        // ear left
        $scope.panelGrid.children[0].width = $scope.frameWidth;
        $scope.panelGrid.children[0].height = $scope.frameHeight;

        // haf face left
        $scope.panelGrid.children[1].width = $scope.frameWidth;
        $scope.panelGrid.children[1].height = $scope.frameHeight;
        var _B_X = $scope.xCenter - $scope.panelBackground.children[1].width / 2;
        var _B_Y = $scope.yCenter - $scope.panelBackground.children[1].height / 2;
        // ver
        for(var i=0; i < hafFaceGrid_Ver.length; i++)
        {
            var grid_X = Math.floor(hafFaceGrid_Ver[i] * $scope.panelBackground.children[1].offset);
            var obj = $scope.panelGrid.children[1].children[i];
            obj.x = _B_X + $scope.panelBackground.children[1].width - grid_X;
            obj.y = _B_Y;
            obj.width = 0;
            obj.height = $scope.panelBackground.children[1].height;

            obj.children[0].x = 0;
            obj.children[0].y = 0;
        }

        // hor
        for(var i = hafFaceGrid_Ver.length;i<hafFaceGrid_Ver.length+hafFaceGrid_Hor.length;i++)
        {
            var grid_Y = Math.floor(hafFaceGrid_Hor[i - hafFaceGrid_Ver.length] * $scope.panelBackground.children[1].offset);
            var obj = $scope.panelGrid.children[1].children[i];

            obj.x = _B_X + $scope.padding;
            obj.y = _B_Y + grid_Y;
            obj.width = $scope.panelBackground.children[1].width - 2 * $scope.padding;
            obj.height = 0;

            obj.children[0].x = 0;
            obj.children[0].y = 0;
        }

        // face
        $scope.panelGrid.children[2].width = $scope.frameWidth;
        $scope.panelGrid.children[2].height = $scope.frameHeight;
        var _B_X = $scope.xCenter - $scope.panelBackground.children[2].width / 2;
        var _B_Y = $scope.yCenter - $scope.panelBackground.children[2].height / 2;

        // ver

        var objs = $filter('filter')($scope.panelGrid.children[2].children, { objectType: 'v1' }, true);

        for (var i = 0; i < objs.length; i++)
        {
            var grid_X = Math.floor(faceGrid_Ver[objs[i].itemIndex] * $scope.panelBackground.children[2].offset);
            objs[i].x = $scope.xCenter - grid_X;
            objs[i].y = _B_Y;
            objs[i].width = 0;
            objs[i].height = $scope.panelBackground.children[2].height;

            objs[i].children[0].x = 0;
            objs[i].children[0].y = 0;
        }

        var objs = $filter('filter')($scope.panelGrid.children[2].children, { objectType: 'v2' }, true);

        for (var i = 0; i < objs.length; i++) {
            var grid_X = Math.floor(faceGrid_Ver[objs[i].itemIndex] * $scope.panelBackground.children[2].offset);
            objs[i].x = $scope.xCenter + grid_X;
            objs[i].y = _B_Y;
            objs[i].width = 0;
            objs[i].height = $scope.panelBackground.children[2].height;

            objs[i].children[0].x = 0;
            objs[i].children[0].y = 0;
        }
        
        var objs = $filter('filter')($scope.panelGrid.children[2].children, { objectType: 'h' }, true);

        for (var i = 0; i < objs.length; i++) {
            var grid_Y = Math.floor(faceGrid_Hor[objs[i].itemIndex] * $scope.panelBackground.children[2].offset);
            objs[i].x = _B_X + $scope.padding;
            objs[i].y = _B_Y + grid_Y;
            objs[i].width = $scope.panelBackground.children[2].width - 2 * $scope.padding;
            objs[i].height = 0;

            objs[i].children[0].x = $scope.panelBackground.children[2].width - 2*$scope.padding;
            objs[i].children[0].y = 0;
        }
       
        // haf face right
        $scope.panelGrid.children[3].width = $scope.frameWidth;
        $scope.panelGrid.children[3].height = $scope.frameHeight;
        var _B_X = $scope.xCenter - $scope.panelBackground.children[3].width / 2;
        var _B_Y = $scope.yCenter - $scope.panelBackground.children[3].height / 2;

        // ver
        for (var i = 0; i < hafFaceGrid_Ver.length; i++) {
            var grid_X = Math.floor(hafFaceGrid_Ver[i] * $scope.panelBackground.children[3].offset);
            var obj = $scope.panelGrid.children[3].children[i];
            obj.x = _B_X + grid_X;
            obj.y = _B_Y;
            obj.width = 0;
            obj.height = $scope.panelBackground.children[3].height;

            obj.children[0].x = 0;
            obj.children[0].y = 0;
        }

        // hor
        for (var i = hafFaceGrid_Ver.length; i < hafFaceGrid_Ver.length + hafFaceGrid_Hor.length; i++) {
            var grid_Y = Math.floor(hafFaceGrid_Hor[i - hafFaceGrid_Ver.length] * $scope.panelBackground.children[3].offset);
            var obj = $scope.panelGrid.children[3].children[i];

            obj.x = _B_X + $scope.padding;
            obj.y = _B_Y + grid_Y;
            obj.width = $scope.panelBackground.children[3].width - 2 * $scope.padding;
            obj.height = 0;

            obj.children[0].x = $scope.panelBackground.children[3].width - 2 * $scope.padding;
            obj.children[0].y = 0;
        }
        
        // ear right
        $scope.panelGrid.children[4].width = $scope.frameWidth;
        $scope.panelGrid.children[4].height = $scope.frameHeight;

         // nose
        $scope.panelGrid.children[5].width = $scope.frameWidth;
        $scope.panelGrid.children[5].height = $scope.frameHeight;
    }

    $scope.initGrid = function()
    {
        $scope.panelGrid = renderPanelGrid(0, 0, $scope.frameWidth, $scope.frameHeight);

        //ear left
        var pn = renderPanelGrid($scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);
        $scope.panelGrid.addChild(pn);

        // haft face left
        var pn = renderPanelGrid($scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);
        var _B_X = $scope.xCenter - $scope.panelBackground.children[1].width / 2;
        var _B_Y = $scope.yCenter - $scope.panelBackground.children[1].height / 2;
        for (var i = 0; i < hafFaceGrid_Ver.length; i++) {
            var grid_X = Math.floor(hafFaceGrid_Ver[i] * $scope.panelBackground.children[1].offset);
            var line1 = canvas.display.LineShapeVer({
                x: _B_X + $scope.panelBackground.children[1].width - grid_X,
                y: _B_Y,
                width: 0,
                height: $scope.panelBackground.children[1].height,
                stroke: "1px #0ff",
            });

            var cir = canvas.display.ellipse({
                x: 0,
                y: 0,
                radius: 6,
                stroke: "0px #000",
                fill: "#FFF",
                origin: { x: "center", y: "center" },
            });

            var text0 = canvas.display.text({
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

            var line1 = canvas.display.LineShapeHor({
                x: _B_X + $scope.padding,
                y: _B_Y + grid_Y,
                width: $scope.panelBackground.children[1].width - 2 * $scope.padding,
                height: 0,
                stroke: "1px #0ff",
            });

            var cir = canvas.display.ellipse({
                x: 0,
                y: 0,
                radius: 12,
                stroke: "0px #000",
                fill: "#FFF",
                origin: { x: "center", y: "center" },
            });

            var text0 = canvas.display.text({
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
        var pn = renderPanelGrid($scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);

        var _B_X = $scope.xCenter - $scope.panelBackground.children[2].width / 2;
        var _B_Y = $scope.yCenter - $scope.panelBackground.children[2].height / 2;
        for (var i = 0; i < faceGrid_Ver.length; i++) {
            var grid_X = Math.floor(faceGrid_Ver[i] * $scope.panelBackground.children[2].offset);
            var line1 = canvas.display.LineShapeVer({
                x: $scope.xCenter - grid_X,
                y: _B_Y,
                width: 0,
                height: $scope.panelBackground.children[2].height,
                stroke: "1px #0ff",
                objectType: 'v1',
                itemIndex: i,
            });

            var cir = canvas.display.ellipse({
                x: 0,
                y: 0,
                radius: 6,
                stroke: "0px #000",
                fill: "#FFF",
                origin: { x: "center", y: "center" },
            });

            var text0 = canvas.display.text({
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
                var line1 = canvas.display.LineShapeVer({
                    x: $scope.xCenter + grid_X,
                    y: _B_Y,
                    width: 0,
                    height: $scope.panelBackground.children[2].height,
                    stroke: "1px #0ff",
                    objectType: 'v2',
                    itemIndex: i,
                });

                var cir = canvas.display.ellipse({
                    x: 0,
                    y: 0,
                    radius: 6,
                    stroke: "0px #000",
                    fill: "#FFF",
                    origin: { x: "center", y: "center" },
                });

                var text0 = canvas.display.text({
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
            var line1 = canvas.display.LineShapeHor({
                x: _B_X + $scope.padding,
                y: _B_Y + grid_Y,
                width: $scope.panelBackground.children[2].width- 2* $scope.padding,
                height: 0,
                stroke: "1px #0ff",
                objectType: 'h',
                itemIndex: i,
            });

            var cir = canvas.display.ellipse({
                x: $scope.panelBackground.children[2].width - 2*$scope.padding,
                y: 0,
                radius: 12,
                stroke: "0px #000",
                fill: "#FFF",
                origin: { x: "center", y: "center" },
            });

            var text0 = canvas.display.text({
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
        var pn = renderPanelGrid($scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);

        var _B_X = $scope.xCenter - $scope.panelBackground.children[3].width / 2;
        var _B_Y = $scope.yCenter - $scope.panelBackground.children[3].height / 2;
        for (var i = 0; i < hafFaceGrid_Ver.length; i++) {
            var grid_X = Math.floor(hafFaceGrid_Ver[i] * $scope.panelBackground.children[3].offset);
            var line1 = canvas.display.LineShapeVer({
                x: _B_X + grid_X,
                y: _B_Y,
                width: 0,
                height: $scope.panelBackground.children[3].height,
                stroke: "1px #0ff",
            });

            var cir = canvas.display.ellipse({
                x: 0,
                y: 0,
                radius: 6,
                stroke: "0px #000",
                fill: "#FFF",
                origin: { x: "center", y: "center" },
            });

            var text0 = canvas.display.text({
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

            var line1 = canvas.display.LineShapeHor({
                x: _B_X + $scope.padding,
                y: _B_Y + grid_Y,
                width: $scope.panelBackground.children[3].width - 2 * $scope.padding,
                height: 0,
                stroke: "1px #0ff",
            });

            var cir = canvas.display.ellipse({
                x: $scope.panelBackground.children[3].width - 2 * $scope.padding,
                y: 0,
                radius: 12,
                stroke: "0px #000",
                fill: "#FFF",
                origin: { x: "center", y: "center" },
            });

            var text0 = canvas.display.text({
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
        var pn = renderPanelGrid($scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);

        $scope.panelGrid.addChild(pn);


        // nose

        var pn = renderPanelGrid($scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);

        $scope.panelGrid.addChild(pn);

        canvas.addChild($scope.panelGrid);
    }
    
    $scope.onResize= function()
    {
        $scope.initScreen();
        console.log("Reinit Sreen");
        $scope.reInitRender();
        console.log("reinit Render");
        $scope.reInitDoHinh();
        console.log("reInitDoHinh");
        $scope.reInitGrid();
        console.log("reinit Grid");
        $scope.reinitTitle();
        console.log("reinitTitle");
        $scope.reInitPanelListPoints();
        console.log("reInitPanelListPoints");
        $scope.reInitFindPoint();
        console.log("reInitFindPoint");
        $scope.reRenderThumB();
        console.log("reinit thumb");
        $scope.reDisplayTreatmentInfo();
        $scope.reInitPanelControl();
        canvas.redraw();
    }
    
    $scope.reInitRender= function()
    {
        if ($scope.panelBackground != null)
        {
            $scope.panelBackground.width = $scope.frameWidth;
            $scope.panelBackground.height = $scope.frameHeight;

            $scope.panelBackground.children[0].width = $scope.WidthOfEar;
            $scope.panelBackground.children[0].height = $scope.HeightOfEar;
            $scope.setBackground($scope.panelBackground.children[0]);
            $scope.panelBackground.children[0].x = 2*$scope.panelBackground.width;

            $scope.panelBackground.children[1].width = $scope.WidthOfHafFace;
            $scope.panelBackground.children[1].height = $scope.HeightOfHafFace;
            $scope.setBackground($scope.panelBackground.children[1]);
            $scope.panelBackground.children[1].x = 2*$scope.panelBackground.width;

            $scope.panelBackground.children[2].width = $scope.WidthOfFrontFace;
            $scope.panelBackground.children[2].height = $scope.HeightOfFrontFace;
            $scope.setBackground($scope.panelBackground.children[2]);
            $scope.panelBackground.children[2].x = 2*$scope.panelBackground.width;

            $scope.panelBackground.children[3].width = $scope.WidthOfHafFace;
            $scope.panelBackground.children[3].height = $scope.HeightOfHafFace;
            $scope.setBackground($scope.panelBackground.children[3]);
            $scope.panelBackground.children[3].x = 2*$scope.panelBackground.width;

            $scope.panelBackground.children[4].width = $scope.WidthOfEar;
            $scope.panelBackground.children[4].height = $scope.HeightOfEar;
            $scope.setBackground($scope.panelBackground.children[4]);
            $scope.panelBackground.children[4].x = 2*$scope.panelBackground.width;

            $scope.panelBackground.children[5].width = $scope.WidthOfNose;
            $scope.panelBackground.children[5].height = $scope.HeightOfNose;
            $scope.setBackground($scope.panelBackground.children[5]);
            $scope.panelBackground.children[5].x =2* $scope.panelBackground.width;

            $scope.currentBackground.x = $scope.frameWidth / 2 - $scope.currentBackground.width / 2;
            $scope.currentBackground.y = $scope.frameHeight / 2 - $scope.currentBackground.height / 2;
            $scope.offset = $scope.currentBackground.offset;
        }
    }

    $scope.reRenderThumB = function()
    {
        $scope.panelThumB.x = $scope.frameWidth - $scope.panelThumB.width - 1;
        $scope.panelThumB.y = $scope.frameHeight / 2 - $scope.panelThumB.height / 2;
    }

    $scope.renderThumb = function()
    {
        $scope.panelThumB = renderPanelThumb(0, 0, $scope.ItemThumbWidth, 6 * $scope.ItemThumbHeight, $scope.BoxTitleHeight, $scope.BoxContentHeigth);
        $scope.panelThumB.children[1]
        .bind("mouseenter touchenter", function () {
            if (!$scope.EarLeftEnable || $scope.isPlay) return;

            canvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            canvas.redraw();
        }).bind("mouseleave touchleave", function () {
            if (!$scope.EarLeftEnable || $scope.isPlay) return;

            canvas.mouse.cursor("default");

            if ($scope.currentBackground.itemIndex == this.itemIndex)
            {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else
            {
                this.children[0].fill = $scope.thumBLeaveColor;
            }
           
            canvas.redraw();
        }).bind("click tap ", function () {
            if (!$scope.EarLeftEnable || $scope.isPlay) return;

            $scope.SetCurrentBackground(this);
        });

        $scope.panelThumB.children[2]
        .bind("mouseenter touchenter", function () {
            if (!$scope.HafFaceLeftEnable || $scope.isPlay) return;

            canvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            canvas.redraw();
        }).bind("mouseleave touchleave", function () {
            if (!$scope.HafFaceLeftEnable || $scope.isPlay) return;

            canvas.mouse.cursor("default");

            if ($scope.currentBackground.itemIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            canvas.redraw();
        }).bind("click tap ", function () {
            if (!$scope.HafFaceLeftEnable || $scope.isPlay) return;

            $scope.SetCurrentBackground(this);
        });


        $scope.panelThumB.children[3]
        .bind("mouseenter touchenter", function () {
            if (!$scope.FaceEnable || $scope.isPlay) return;

            canvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            canvas.redraw();
        }).bind("mouseleave touchleave", function () {
            if (!$scope.FaceEnable || $scope.isPlay) return;

            canvas.mouse.cursor("default");
            
            if ($scope.currentBackground.itemIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            canvas.redraw();
        }).bind("click tap ", function () {
            if (!$scope.FaceEnable || $scope.isPlay) return;

            $scope.SetCurrentBackground(this);
        });

        $scope.panelThumB.children[4]
        .bind("mouseenter touchenter", function () {
            if (!$scope.HafFaceRightEnable || $scope.isPlay) return;

            canvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            canvas.redraw();
        }).bind("mouseleave touchleave", function () {
            if (!$scope.HafFaceRightEnable || $scope.isPlay) return;

            canvas.mouse.cursor("default");
            
            if ($scope.currentBackground.itemIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            canvas.redraw();
        }).bind("click tap ", function () {
            if (!$scope.HafFaceRightEnable || $scope.isPlay) return;

            $scope.SetCurrentBackground(this);
        });

        $scope.panelThumB.children[5]
        .bind("mouseenter touchenter", function () {
            if (!$scope.EarRightEnable || $scope.isPlay) return;

            canvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            canvas.redraw();
        }).bind("mouseleave touchleave", function () {
            if (!$scope.EarRightEnable || $scope.isPlay) return;

            canvas.mouse.cursor("default");
            
            if ($scope.currentBackground.itemIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            canvas.redraw();
        }).bind("click tap ", function () {
            if (!$scope.EarRightEnable || $scope.isPlay) return;

            $scope.SetCurrentBackground(this);
        });

        $scope.panelThumB.children[6]
        .bind("mouseenter touchenter", function () {
            if (!$scope.NoseEnable || $scope.isPlay) return;

            canvas.mouse.cursor("pointer");
            this.children[0].fill = $scope.thumBHolderColor;
            canvas.redraw();
        }).bind("mouseleave touchleave", function () {
            if (!$scope.NoseEnable || $scope.isPlay) return;

            canvas.mouse.cursor("default");
           
            if ($scope.currentBackground.itemIndex == this.itemIndex) {
                this.children[0].fill = $scope.thumBSelectColor;
            }
            else {
                this.children[0].fill = $scope.thumBLeaveColor;
            }

            canvas.redraw();
        }).bind("click tap ", function () {
            if (!$scope.NoseEnable || $scope.isPlay) return;

            $scope.SetCurrentBackground(this);
        });

        $scope.panelThumB.x = $scope.frameWidth - $scope.panelThumB.width - 1;
        $scope.panelThumB.y = $scope.frameHeight / 2 - $scope.panelThumB.height / 2;
        canvas.addChild($scope.panelThumB);
    }

    $scope.SetCurrentBackground = function(obj)
    {
        if ($scope.currentBackground.itemIndex != this.itemIndex) {
            $scope.panelThumB.children[$scope.currentBackground.itemIndex + 1].children[0].fill = $scope.thumBLeaveColor;
            $scope.currentBackground.x = 2 * $scope.frameWidth + 10;
            $scope.panelFindResultPoint.children[$scope.currentBackground.itemIndex].x = 2 * $scope.frameWidth + 10;
            $scope.panelListPoints.children[$scope.currentBackground.itemIndex].x = 2 * $scope.frameWidth + 10;
            $scope.panelGrid.children[$scope.currentBackground.itemIndex].x = 2 * $scope.frameWidth + 10;
            $scope.panelDoHinh.children[$scope.currentBackground.itemIndex].x = 2 * $scope.frameWidth + 10;
            $scope.currentBackground = $scope.panelBackground.children[obj.itemIndex];
            $scope.currentBackground.x = $scope.frameWidth / 2 - $scope.currentBackground.width / 2;
            $scope.currentBackground.y = $scope.frameHeight / 2 - $scope.currentBackground.height / 2;
            $scope.offset = $scope.currentBackground.offset;
            $scope.panelFindResultPoint.children[$scope.currentBackground.itemIndex].x = 0;
            $scope.panelListPoints.children[$scope.currentBackground.itemIndex].x = 0;
            $scope.panelGrid.children[$scope.currentBackground.itemIndex].x = 0;
            $scope.panelDoHinh.children[$scope.currentBackground.itemIndex].x = 0;
            obj.children[0].fill = $scope.thumBSelectColor;
            canvas.redraw();
        }
    }

    $scope.InitRender = function()
    {
        $scope.panelBackground = renderPanelBackground(0, 0, $scope.frameWidth, $scope.frameHeight);

        var img = renderEarLeft(2*$scope.frameWidth, 0, $scope.WidthOfEar, $scope.HeightOfEar, 0);
        $scope.setBackground(img);
        $scope.panelBackground.addChild(img);
        var img = renderHaftFaceLeft(2*$scope.frameWidth, 0, $scope.WidthOfHafFace, $scope.HeightOfHafFace, 1);
        $scope.setBackground(img);
        $scope.panelBackground.addChild(img);
        var img = renderFrontFace(2*$scope.frameWidth, 0, $scope.WidthOfFrontFace, $scope.HeightOfFrontFace, 2);
        $scope.setBackground(img);
        $scope.panelBackground.addChild(img);
        var img = renderHaftFaceRight(2*$scope.frameWidth, 0, $scope.WidthOfHafFace, $scope.HeightOfHafFace, 3);
        $scope.setBackground(img);
        $scope.panelBackground.addChild(img);
        var img = renderEarRight(2*$scope.frameWidth, 0, $scope.WidthOfEar, $scope.HeightOfEar, 4);
        $scope.setBackground(img);
        $scope.panelBackground.addChild(img);
        var img = renderNose(2*$scope.frameWidth, 0, $scope.WidthOfNose, $scope.HeightOfNose, 5);
        $scope.setBackground(img);
        $scope.panelBackground.addChild(img);
        canvas.addChild($scope.panelBackground);
    }

    $scope.setBackground = function(item)
    {

        if ($scope.heightOfShow < item.height)
        {
            item.offset = $scope.heightOfShow / item.height;
        }
        
        item.width = item.width * item.offset;
        item.height = item.height * item.offset;
       
    }

    $scope.reInitPanelListPoints = function()
    {
        for(var i=0;i<$scope.panelListPoints.children.length;i++)
        {
            var ps = $scope.panelListPoints.children[i];
            var posX = $scope.frameWidth / 2 - $scope.panelBackground.children[i].width / 2;
            var posY = $scope.frameHeight / 2 - $scope.panelBackground.children[i].height / 2;

            for(var j=0;j<ps.children.length;j++)
            {
                var p = ps.children[j];
                p.x = Math.floor(p.xReal * $scope.panelBackground.children[i].offset) + posX;
                p.y = Math.floor(p.yReal * $scope.panelBackground.children[i].offset) + posY;
            }
        }
    }

    $scope.InitPanelListPoints = function()
    {
         
        $scope.panelListPoints = renderPanelBackground(0, 0, $scope.frameWidth, $scope.frameHeight);

        // Ear left
        var pn = renderPanelListPointItem(2*$scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight, 0);

        var objs = $filter('filter')($scope.points, { Region: '0' }, true);
        
        var posX = $scope.frameWidth / 2 - $scope.panelBackground.children[0].width / 2;
        var posY = $scope.frameHeight / 2 - $scope.panelBackground.children[0].height / 2;
        if (objs.length > 0)
        {
            for(var i=0;i<objs.length;i++)
            {
                var obj = objs[i];
                $scope.convertToPointOfScreen(obj, posX, posY, $scope.panelBackground.children[0].offset);
                var h = renderPointItem(obj.X, obj.Y, obj.Number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                h.xReal = obj.XReal;
                h.yReal = obj.YReal;
                h.valueTemp1 = obj;
                h.number = obj.Number;
                h.regionType = '0';
                h.positionType = '0';
                h.bind("mouseenter touchenter", function () {
                    canvas.mouse.cursor("pointer");
                    this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                    canvas.redraw();
                }).bind("mouseleave touchleave", function () {
                    canvas.mouse.cursor("default");
                    this.stroke = "0px #0F0";
                    canvas.redraw();
                }).bind("click tap ", function () {
                    $scope.onPointClick(this.valueTemp1);
                });
                pn.addChild(h);
            }
        }

        $scope.panelListPoints.addChild(pn);

        // HafFace left
        var pn = renderPanelListPointItem(2*$scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight, 1);
        var objs = $filter('filter')($scope.points, { Region: '1' }, true);
        var posX = $scope.frameWidth / 2 - $scope.panelBackground.children[1].width / 2;
        var posY = $scope.frameHeight / 2 - $scope.panelBackground.children[1].height / 2;
        if (objs.length > 0) {
            for (var i = 0; i < objs.length; i++) {
                var obj = objs[i];
                $scope.convertToPointOfScreen(obj, posX, posY, $scope.panelBackground.children[1].offset);
                var h = renderPointItem(obj.X, obj.Y, obj.Number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                h.xReal = obj.XReal;
                h.yReal = obj.YReal;
                h.valueTemp1 = obj;
                h.number = obj.Number;
                h.regionType = '1';
                h.positionType = '0';
                h.bind("mouseenter touchenter", function () {
                    canvas.mouse.cursor("pointer");
                    this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                    canvas.redraw();
                }).bind("mouseleave touchleave", function () {
                    canvas.mouse.cursor("default");
                    this.stroke = "0px #0F0";
                    canvas.redraw();
                }).bind("click tap ", function () {
                    $scope.onPointClick(this.valueTemp1);
                });
                pn.addChild(h);
            }
        }

        $scope.panelListPoints.addChild(pn);

        // face
        var pn = renderPanelListPointItem(2*$scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight, 2);
        var objs = $filter('filter')($scope.points, { Region: '2' }, true);
        var posX = $scope.frameWidth / 2 - $scope.panelBackground.children[2].width / 2;
        var posY = $scope.frameHeight / 2 - $scope.panelBackground.children[2].height / 2;
        if (objs.length > 0) {
            for (var i = 0; i < objs.length; i++) {
                var obj = objs[i];
                $scope.convertToPointOfScreen(obj, posX, posY, $scope.panelBackground.children[2].offset);
                var h = renderPointItem(obj.X, obj.Y, obj.Number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                h.xReal = obj.XReal;
                h.yReal = obj.YReal;
                h.valueTemp1 = obj;
                h.number = obj.Number;
                h.regionType = '2';
                h.positionType = '0';
                h.bind("mouseenter touchenter", function () {
                    canvas.mouse.cursor("pointer");
                    this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                    canvas.redraw();
                }).bind("mouseleave touchleave", function () {
                    canvas.mouse.cursor("default");
                    this.stroke = "0px #0F0";
                    canvas.redraw();
                }).bind("click tap ", function () {
                    $scope.onPointClick(this.valueTemp1);
                });
                pn.addChild(h);
            }
        }

        $scope.panelListPoints.addChild(pn);

        // Haft face right
        var pn = renderPanelListPointItem(2*$scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight, 3);
        var objs = $filter('filter')($scope.points, { Region: '3' }, true);
        var posX = $scope.frameWidth / 2 - $scope.panelBackground.children[3].width / 2;
        var posY = $scope.frameHeight / 2 - $scope.panelBackground.children[3].height / 2;
        if (objs.length > 0) {
            for (var i = 0; i < objs.length; i++) {
                var obj = objs[i];
                $scope.convertToPointOfScreen(obj, posX, posY, $scope.panelBackground.children[3].offset);
                var h = renderPointItem(obj.X, obj.Y, obj.Number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                h.xReal = obj.XReal;
                h.yReal = obj.YReal;
                h.valueTemp1 = obj;
                h.number = obj.Number;
                h.regionType = '3';
                h.positionType = '0';
                h.bind("mouseenter touchenter", function () {
                    canvas.mouse.cursor("pointer");
                    this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                    canvas.redraw();
                }).bind("mouseleave touchleave", function () {
                    canvas.mouse.cursor("default");
                    this.stroke = "0px #0F0";
                    canvas.redraw();
                }).bind("click tap ", function () {
                    $scope.onPointClick(this.valueTemp1);
                });
                pn.addChild(h);
            }
        }

        $scope.panelListPoints.addChild(pn);

        // Ear right
        var pn = renderPanelListPointItem(2*$scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight, 4);
        var objs = $filter('filter')($scope.points, { Region: '4' }, true);
        var posX = $scope.frameWidth / 2 - $scope.panelBackground.children[4].width / 2;
        var posY = $scope.frameHeight / 2 - $scope.panelBackground.children[4].height / 2;
        if (objs.length > 0) {
            for (var i = 0; i < objs.length; i++) {
                var obj = objs[i];
                $scope.convertToPointOfScreen(obj, posX, posY, $scope.panelBackground.children[4].offset);
                var h = renderPointItem(obj.X, obj.Y, obj.Number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                h.xReal = obj.XReal;
                h.yReal = obj.YReal;
                h.valueTemp1 = obj;
                h.number = obj.Number;
                h.regionType = '4';
                h.positionType = '0';
                h.bind("mouseenter touchenter", function () {
                    canvas.mouse.cursor("pointer");
                    this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                    canvas.redraw();
                }).bind("mouseleave touchleave", function () {
                    canvas.mouse.cursor("default");
                    this.stroke = "0px #0F0";
                    canvas.redraw();
                }).bind("click tap ", function () {
                    $scope.onPointClick(this.valueTemp1);
                });
                pn.addChild(h);
            }
        }

        $scope.panelListPoints.addChild(pn);

        // Nose
        var pn = renderPanelListPointItem(2*$scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight, 5);
        var objs = $filter('filter')($scope.points, { Region: '5' }, true);
        var posX = $scope.frameWidth / 2 - $scope.panelBackground.children[5].width / 2;
        var posY = $scope.frameHeight / 2 - $scope.panelBackground.children[5].height / 2;
        if (objs.length > 0) {
            for (var i = 0; i < objs.length; i++) {
                var obj = objs[i];
                $scope.convertToPointOfScreen(obj, posX, posY, $scope.panelBackground.children[5].offset);
                var h = renderPointItem(obj.X, obj.Y, obj.Number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                h.xReal = obj.XReal;
                h.yReal = obj.YReal;
                h.valueTemp1 = obj;
                h.number = obj.Number;
                h.regionType = '5';
                h.positionType = '0';
                h.bind("mouseenter touchenter", function () {
                    canvas.mouse.cursor("pointer");
                    this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                    canvas.redraw();
                }).bind("mouseleave touchleave", function () {
                    canvas.mouse.cursor("default");
                    this.stroke = "0px #0F0";
                    canvas.redraw();
                }).bind("click tap ", function () {
                    $scope.onPointClick(this.valueTemp1);
                });
                pn.addChild(h);
            }
        }

        $scope.panelListPoints.addChild(pn);

        canvas.addChild($scope.panelListPoints);
    }

    $scope.renderPanelButton = function()
    {
        $scope.panelButton =  canvas.display.rectangle({
            x: 0,
            y: 10,
            width: 60,
            height: 180,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        
        // setting
        var yPos = 0;
        var btn = canvas.display.rectangle({
            x: 6,
            y: yPos,
            width: 60,
            height: 60,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvas.display.image({
            x: 6,
            y: 6,
            image: renderSettingIcon48(),
            width: 48,
            height: 48,
        });

        btn.addChild(img);

        btn.bind("mouseenter touchenter", function () {
            canvas.mouse.cursor("pointer");
            this.children[0].shadow = $scope.shadowBodyOn;
            canvas.redraw();
        }).bind("mouseleave touchleave", function () {
            canvas.mouse.cursor("default");
            this.children[0].shadow = $scope.shadowBodyOff;
            canvas.redraw();
        }).bind("click tap ", function () {
            $scope.SettingModal();
        });

        $scope.panelButton.addChild(btn);

        yPos += 60;
        var btn = canvas.display.rectangle({
            x: 6,
            y: yPos,
            width: 60,
            height: 60,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvas.display.image({
            x: 6,
            y: 6,
            image: renderDohinhIcon48(),
            width: 48,
            height: 48,
        });

        btn.addChild(img);

        $scope.panelButton.addChild(btn);

        btn.bind("mouseenter touchenter", function () {
            canvas.mouse.cursor("pointer");
            this.children[0].shadow = $scope.shadowBodyOn;
            canvas.redraw();
        }).bind("mouseleave touchleave", function () {
            canvas.mouse.cursor("default");
            this.children[0].shadow = $scope.shadowBodyOff;
            canvas.redraw();
        }).bind("click tap ", function () {
            $scope.DoHinhModal();
        });

        yPos += 60;
        var btn = canvas.display.rectangle({
            x: 6,
            y: yPos,
            width: 60,
            height: 60,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvas.display.image({
            x: 6,
            y: 6,
            image: renderSearchIcon48(),
            width: 48,
            height: 48,
        });

        btn.addChild(img);

        btn.bind("mouseenter touchenter", function () {
            canvas.mouse.cursor("pointer");
            this.children[0].shadow = $scope.shadowBodyOn;
            canvas.redraw();
        }).bind("mouseleave touchleave", function () {
            canvas.mouse.cursor("default");
            this.children[0].shadow = $scope.shadowBodyOff;
            canvas.redraw();
        }).bind("click tap ", function () {
            $scope.findPointModal();
        });


        $scope.panelButton.addChild(btn);

        

        yPos += 60;
        var btn = canvas.display.rectangle({
            x: 6,
            y: yPos,
            width: 60,
            height: 60,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvas.display.image({
            x: 6,
            y: 6,
            image: renderBoHuyetIcon48(),
            width: 48,
            height: 48,
        });

        btn.addChild(img);

        $scope.panelButton.addChild(btn);

        btn.bind("mouseenter touchenter", function () {
            canvas.mouse.cursor("pointer");
            this.children[0].shadow = $scope.shadowBodyOn;
            canvas.redraw();
        }).bind("mouseleave touchleave", function () {
            canvas.mouse.cursor("default");
            this.children[0].shadow = $scope.shadowBodyOff;
            canvas.redraw();
        }).bind("click tap ", function () {
            $scope.findBHModal();
        });

        yPos += 60;
        var btn = canvas.display.rectangle({
            x: 6,
            y: yPos,
            width: 60,
            height: 60,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvas.display.image({
            x: 6,
            y: 6,
            image: renderBodyIcon50(),
            width: 48,
            height: 48,
        });

        btn.addChild(img);

        $scope.panelButton.addChild(btn);

        btn.bind("mouseenter touchenter", function () {
            canvas.mouse.cursor("pointer");
            this.children[0].shadow = $scope.shadowBodyOn;
            canvas.redraw();
        }).bind("mouseleave touchleave", function () {
            canvas.mouse.cursor("default");
            this.children[0].shadow = $scope.shadowBodyOff;
            canvas.redraw();
        }).bind("click tap ", function () {
            $scope.showCanvasHuman();
        });

        yPos += 65;
        var btn = canvas.display.rectangle({
            x: 6,
            y: yPos,
            width: 60,
            height: 60,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvas.display.image({
            x: 6,
            y: 6,
            image: renderLogoutIcon50(),
            width: 48,
            height: 48,
        });

        btn.addChild(img);

        $scope.panelButton.addChild(btn);

        btn.bind("mouseenter touchenter", function () {
            canvas.mouse.cursor("pointer");
            this.children[0].shadow = $scope.shadowBodyOn;
            canvas.redraw();
        }).bind("mouseleave touchleave", function () {
            canvas.mouse.cursor("default");
            this.children[0].shadow = $scope.shadowBodyOff;
            canvas.redraw();
        }).bind("click tap ", function () {
            var url = $scope.baseURL + "Home/LogOut";
            $window.location.href = url;
        });


        if ($scope.isAdmin != 0)
        {
            yPos += 60;
            var btn = canvas.display.rectangle({
                x: 6,
                y: yPos,
                width: 60,
                height: 60,
                stroke: "0px #000000",
                fill: "rgba(0,0,0, 0.0)",
                itemType: 'pgbutton',
                objectType: "button",
            });

            var img = canvas.display.image({
                x: 6,
                y: 6,
                image: renderAdminIcon60(),
                width: 48,
                height: 48,
            });

            btn.addChild(img);

            $scope.panelButton.addChild(btn);

            btn.bind("mouseenter touchenter", function () {
                canvas.mouse.cursor("pointer");
                this.children[0].shadow = $scope.shadowBodyOn;
                canvas.redraw();
            }).bind("mouseleave touchleave", function () {
                canvas.mouse.cursor("default");
                this.children[0].shadow = $scope.shadowBodyOff;
                canvas.redraw();
            }).bind("click tap ", function () {
                var url = $scope.baseURL + "Admin/Admin";
                $window.location.href = url;
            });
        }
        
        canvas.addChild($scope.panelButton);
    }

    $scope.showCanvasHuman = function()
    {
        $scope.showMain = false;
        $scope.showHuman = true;
    }

    $scope.hideCanvasHuman = function () {
        $scope.showMain = true;
        $scope.showHuman = false;
    }

    $scope.findBHModal = function () {
        $scope.growlMessage = {
            success: false,
            message: ""
        }

        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'FindBoHuyetInfoModal.html',
            scope: $scope,
            size: '',
            backdrop: 'static',
            keyboard: false,
        });

        $scope.onSelectBoHuyet = function (item) {
            $scope.treatmentProcess(item);
            $scope.closeFindBHInfo();
        }

        $scope.closeFindBHInfo = function () {
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.getCurrentPointToPlay = function () {
        var objOrg = $scope.currentBoHuyet.Huyets[$scope.indexOfPointPlay];
        $scope.numberAction = objOrg.CountAction;
        $scope.action = objOrg.Action;
        $scope.actionIndex = -1;

        if ($scope.FaceEnable) {
            var obj = $filter('filter')($scope.panelFindResultPoint.children[2].children, { itemID:  objOrg.PointID }, true)[0];

            if (obj != null) {
                $scope.currentPointIsPlay = obj;
                $scope.SetCurrentPage(2);
            }
        }

        if ($scope.HafFaceLeftEnable) {
            var obj = $filter('filter')($scope.panelFindResultPoint.children[1].children, { itemID: objOrg.PointID }, true)[0];

            if (obj != null) {
                $scope.currentPointIsPlay = obj;
                $scope.SetCurrentPage(1);
            }
        }

        if ($scope.HafFaceRightEnable) {
            var obj = $filter('filter')($scope.panelFindResultPoint.children[3].children, { itemID:  objOrg.PointID }, true)[0];
            if (obj != null) {
                $scope.currentPointIsPlay = obj;
                $scope.SetCurrentPage(3);
            }
        }

        if ($scope.EarLeftEnable) {
            var obj = $filter('filter')($scope.panelFindResultPoint.children[0].children, { itemID:  objOrg.PointID }, true)[0];
            if (obj != null) {
                $scope.currentPointIsPlay = obj;
                $scope.SetCurrentPage(0);
            }

        }

        if ($scope.EarRightEnable) {
            var obj = $filter('filter')($scope.panelFindResultPoint.children[4].children, { itemID:  objOrg.PointID }, true)[0];
            if (obj != null) {
                $scope.currentPointIsPlay = obj;
                $scope.SetCurrentPage(4);
            }

        }

        if ($scope.NoseEnable) {
            var obj = $filter('filter')($scope.panelFindResultPoint.children[5].children, { itemID:  objOrg.PointID }, true)[0];
            if (obj != null) {
                $scope.currentPointIsPlay = obj;
                $scope.SetCurrentPage(5);
            }
        }
    }

    $scope.treatmentProcess = function(item)
    {
        var myBlockUI = blockUI.instances.get('BlockUI');
        $scope.currentBoHuyet = item;
       
        myBlockUI.start();
        console.log("Begin start search");

        $scope.EarLeftEnable = true;
        $scope.EarRightEnable = true;
        $scope.NoseEnable = true;
        $scope.HafFaceLeftEnable = true;
        $scope.HafFaceRightEnable = true;
        $scope.FaceEnable = true;

        $scope.FindStatus = true;
        $scope.FindBoHuyet = true;

        for (var i = 0; i < 6; i++) {
            $scope.panelFindResultPoint.children[i].children = [];
        }

        $scope.panelTitle.text = item.Name;

        for (var ih = 0; ih < item.Huyets.length; ih++) {
            // ear left
            var hTemp = item.Huyets[ih];
            var obj = $filter('filter')($scope.panelListPoints.children[0].children, { number: hTemp.Number }, true);
            
            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {
                    var h = renderPointItem(obj[i].x, obj[i].y, obj[i].number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                    h.xReal = obj[i].xReal;
                    h.yReal = obj[i].yReal;
                    h.valueTemp1 = obj[i].valueTemp1;
                    h.itemID = obj[i].valueTemp1.AutoID;
                    h.number = obj[i].number;
                    h.regionType = obj[i].valueTemp1.Region;
                    h.positionType = obj[i].valueTemp1.PositionID;
                    h.bind("mouseenter touchenter", function () {
                        canvas.mouse.cursor("pointer");
                        this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                        canvas.redraw();
                    }).bind("mouseleave touchleave", function () {
                        canvas.mouse.cursor("default");
                        this.stroke = "0px #0F0";
                        canvas.redraw();
                    }).bind("click tap ", function () {
                        $scope.onPointClick(this.valueTemp1);
                    });

                    $scope.panelFindResultPoint.children[0].addChild(h);
                }
            }


            //haf left
            var obj = $filter('filter')($scope.panelListPoints.children[1].children, { number: hTemp.Number }, true);
            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {
                    var h = renderPointItem(obj[i].x, obj[i].y, obj[i].number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                    h.xReal = obj[i].xReal;
                    h.yReal = obj[i].yReal;
                    h.valueTemp1 = obj[i].valueTemp1;
                    h.itemID = obj[i].valueTemp1.AutoID;
                    h.number = obj[i].number;
                    h.regionType = obj[i].valueTemp1.Region;
                    h.positionType = obj[i].valueTemp1.PositionID;
                    h.bind("mouseenter touchenter", function () {
                        canvas.mouse.cursor("pointer");
                        this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                        canvas.redraw();
                    }).bind("mouseleave touchleave", function () {
                        canvas.mouse.cursor("default");
                        this.stroke = "0px #0F0";
                        canvas.redraw();
                    }).bind("click tap ", function () {
                        $scope.onPointClick(this.valueTemp1);
                    });

                    $scope.panelFindResultPoint.children[1].addChild(h);
                }
            }


            //face
            var obj = $filter('filter')($scope.panelListPoints.children[2].children, { number: hTemp.Number }, true);
            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {

                    var h = renderPointItem(obj[i].x, obj[i].y, obj[i].number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                    h.xReal = obj[i].xReal;
                    h.yReal = obj[i].yReal;
                    h.valueTemp1 = obj[i].valueTemp1;
                    h.itemID = obj[i].valueTemp1.AutoID;
                    h.number = obj[i].number;
                    h.regionType = obj[i].valueTemp1.Region;
                    h.positionType = obj[i].valueTemp1.PositionID;
                    h.bind("mouseenter touchenter", function () {
                        canvas.mouse.cursor("pointer");
                        this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                        canvas.redraw();
                    }).bind("mouseleave touchleave", function () {
                        canvas.mouse.cursor("default");
                        this.stroke = "0px #0F0";
                        canvas.redraw();
                    }).bind("click tap ", function () {
                        $scope.onPointClick(this.valueTemp1);
                    });

                    $scope.panelFindResultPoint.children[2].addChild(h);
                }
            }


            //haf right
            var obj = $filter('filter')($scope.panelListPoints.children[3].children, { number: hTemp.Number }, true);
            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {
                    var h = renderPointItem(obj[i].x, obj[i].y, obj[i].number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                    h.xReal = obj[i].xReal;
                    h.yReal = obj[i].yReal;
                    h.valueTemp1 = obj[i].valueTemp1;
                    h.itemID = obj[i].valueTemp1.AutoID;
                    h.number = obj[i].number;
                    h.regionType = obj[i].valueTemp1.Region;
                    h.positionType = obj[i].valueTemp1.PositionID;
                    h.bind("mouseenter touchenter", function () {
                        canvas.mouse.cursor("pointer");
                        this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                        canvas.redraw();
                    }).bind("mouseleave touchleave", function () {
                        canvas.mouse.cursor("default");
                        this.stroke = "0px #0F0";
                        canvas.redraw();
                    }).bind("click tap ", function () {
                        $scope.onPointClick(this.valueTemp1);
                    });

                    $scope.panelFindResultPoint.children[3].addChild(h);
                }
            }


            //ear right
            var obj = $filter('filter')($scope.panelListPoints.children[4].children, { number: hTemp.Number }, true);
            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {
                    var h = renderPointItem(obj[i].x, obj[i].y, obj[i].number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                    h.xReal = obj[i].xReal;
                    h.yReal = obj[i].yReal;
                    h.valueTemp1 = obj[i].valueTemp1;
                    h.itemID = obj[i].valueTemp1.AutoID;
                    h.number = obj[i].number;
                    h.regionType = obj[i].valueTemp1.Region;
                    h.positionType = obj[i].valueTemp1.PositionID;
                    h.bind("mouseenter touchenter", function () {
                        canvas.mouse.cursor("pointer");
                        this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                        canvas.redraw();
                    }).bind("mouseleave touchleave", function () {
                        canvas.mouse.cursor("default");
                        this.stroke = "0px #0F0";
                        canvas.redraw();
                    }).bind("click tap ", function () {
                        $scope.onPointClick(this.valueTemp1);
                    });

                    $scope.panelFindResultPoint.children[4].addChild(h);
                }
            }


            // nose
            var obj = $filter('filter')($scope.panelListPoints.children[5].children, { number: hTemp.Number }, true);
            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {
                    var h = renderPointItem(obj[i].x, obj[i].y, obj[i].number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                    h.xReal = obj[i].xReal;
                    h.yReal = obj[i].yReal;
                    h.valueTemp1 = obj[i].valueTemp1;
                    h.itemID = obj[i].valueTemp1.AutoID;
                    h.number = obj[i].number;
                    h.regionType = obj[i].valueTemp1.Region;
                    h.positionType = obj[i].valueTemp1.PositionID;
                    h.bind("mouseenter touchenter", function () {
                        canvas.mouse.cursor("pointer");
                        this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                        canvas.redraw();
                    }).bind("mouseleave touchleave", function () {
                        canvas.mouse.cursor("default");
                        this.stroke = "0px #0F0";
                        canvas.redraw();
                    }).bind("click tap ", function () {
                        $scope.onPointClick(this.valueTemp1);
                    });

                    $scope.panelFindResultPoint.children[5].addChild(h);
                }
            }

        }
        if ($scope.panelFindResultPoint.children[0].children.length == 0) {
            $scope.EarLeftEnable = false;
        }

        if ($scope.panelFindResultPoint.children[1].children.length == 0) {
            $scope.HafFaceLeftEnable = false;
        }

        if ($scope.panelFindResultPoint.children[2].children.length == 0) {
            $scope.FaceEnable = false;
        }

        if ($scope.panelFindResultPoint.children[3].children.length == 0) {
            $scope.HafFaceRightEnable = false;
        }

        if ($scope.panelFindResultPoint.children[4].children.length == 0) {
            $scope.EarRightEnable = false;
        }

        if ($scope.panelFindResultPoint.children[5].children.length == 0) {
            $scope.NoseEnable = false;
        }

        if ($scope.FaceEnable) {
            if ($scope.currentBackground.itemIndex != 2) {
                $scope.SetCurrentPage(2);
            }
        }
        else if ($scope.HafFaceRightEnable || $scope.HafFaceLeftEnable) {
            $scope.SetCurrentPage(1);
        }
        else if ($scope.EarRightEnable || $scope.EarLeftEnable) {
            $scope.SetCurrentPage(0);
        }
        else if ($scope.NoseEnable) {
            if ($scope.currentBackground.itemIndex != 5) {
                $scope.SetCurrentPage(5);
            }
        }


        $scope.panelListPoints.x = 2 * $scope.frameWidth;
        $scope.panelFindResultPoint.x = 0;
        $scope.panelFindResultPoint.children[$scope.currentBackground.itemIndex].x = 0;
        $scope.panelButton.x = -2 * $scope.panelButton.width;
        $scope.FindStatus = true;
        $scope.SetFindPointButtonStatus();
        $scope.panelControl.y = 2 * $scope.padding - 5;
        $scope.indexOfPointPlay = 0;
        $scope.isPlay = false;
        $scope.getCurrentPointToPlay();
        $scope.removeTreatmentInfo();
        canvas.redraw();

        myBlockUI.stop();
    }

    $scope.displayTreatmentInfo = function()
    {
        $scope.panelTreatmentInfo.x = $scope.currentPointIsPlay.x + 10;
        $scope.panelTreatmentInfo.y = $scope.currentPointIsPlay.y;
        $scope.panelTreatmentInfo.children[0].text = $scope.langPara.Key_Number.Value + ": " + $scope.currentPointIsPlay.number;
        $scope.panelTreatmentInfo.children[1].text = $scope.langPara.Key_Action.Value + ": " + $scope.action;
        $scope.panelTreatmentInfo.children[2].text = $scope.langPara.Key_CountAction.Value + ": " + $scope.numberAction;
    }

    $scope.removeTreatmentInfo = function()
    {
        $scope.panelTreatmentInfo.y = -200;
        $scope.panelTreatmentInfo.children[0].text = "";
        $scope.panelTreatmentInfo.children[1].text = "";
        $scope.panelTreatmentInfo.children[2].text = "";
        $scope.accessControl.x = -100;
    }

    $scope.reDisplayTreatmentInfo = function()
    {
        if ($scope.panelTreatmentInfo.y>0)
        {
            $scope.panelTreatmentInfo.x = $scope.currentPointIsPlay.x + 10;
            $scope.panelTreatmentInfo.y = $scope.currentPointIsPlay.y;
        }
    }

    $scope.findPointModal = function()
    {
        $scope.growlMessage = {
            success: false,
            message: ""
        }

        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'FindPointInfoModal.html',
            scope: $scope,
            size: '',
            backdrop: 'static',
            keyboard: false,
        });

        $scope.FindPointInfo = function () {
            $scope.EarLeftEnable = true;
            $scope.EarRightEnable = true;
            $scope.NoseEnable = true;
            $scope.HafFaceLeftEnable = true;
            $scope.HafFaceRightEnable = true;
            $scope.FaceEnable = true;

            for (var i = 0; i < 6; i++) {
                $scope.panelFindResultPoint.children[i].children = [];
            }

            // ear left
            var obj = $filter('filter')($scope.panelListPoints.children[0].children, { number:  $scope.findPoint.number }, true);
            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {
                    var h = renderPointItem(obj[i].x, obj[i].y, obj[i].number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                    h.xReal = obj[i].xReal;
                    h.yReal = obj[i].yReal;
                    h.valueTemp1 = obj[i].valueTemp1;
                    h.number = obj[i].number;
                    h.regionType = '2';
                    h.positionType = '0';
                    h.bind("mouseenter touchenter", function () {
                        canvas.mouse.cursor("pointer");
                        this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                        canvas.redraw();
                    }).bind("mouseleave touchleave", function () {
                        canvas.mouse.cursor("default");
                        this.stroke = "0px #0F0";
                        canvas.redraw();
                    }).bind("click tap ", function () {
                        $scope.onPointClick(this.valueTemp1);
                    });

                    $scope.panelFindResultPoint.children[0].addChild(h);
                }
            }
            else {
                $scope.EarLeftEnable = false;
            }

            //haf left
            var obj = $filter('filter')($scope.panelListPoints.children[1].children, { number:  $scope.findPoint.number }, true);
            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {
                    var h = renderPointItem(obj[i].x, obj[i].y, obj[i].number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                    h.xReal = obj[i].xReal;
                    h.yReal = obj[i].yReal;
                    h.valueTemp1 = obj[i].valueTemp1;
                    h.number = obj[i].number;
                    h.regionType = '2';
                    h.positionType = '0';
                    h.bind("mouseenter touchenter", function () {
                        canvas.mouse.cursor("pointer");
                        this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                        canvas.redraw();
                    }).bind("mouseleave touchleave", function () {
                        canvas.mouse.cursor("default");
                        this.stroke = "0px #0F0";
                        canvas.redraw();
                    }).bind("click tap ", function () {
                        $scope.onPointClick(this.valueTemp1);
                    });

                    $scope.panelFindResultPoint.children[1].addChild(h);
                }
            }
            else
            {
                $scope.HafFaceLeftEnable = false;
            }

            //face
            var obj = $filter('filter')($scope.panelListPoints.children[2].children, { number: $scope.findPoint.number }, true);
            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {
                    
                    var h = renderPointItem(obj[i].x, obj[i].y, obj[i].number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                    h.xReal = obj[i].xReal;
                    h.yReal = obj[i].yReal;
                    h.valueTemp1 = obj[i].valueTemp1;
                    h.number = obj[i].number;
                    h.regionType = '2';
                    h.positionType = '0';
                    h.bind("mouseenter touchenter", function () {
                        canvas.mouse.cursor("pointer");
                        this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                        canvas.redraw();
                    }).bind("mouseleave touchleave", function () {
                        canvas.mouse.cursor("default");
                        this.stroke = "0px #0F0";
                        canvas.redraw();
                    }).bind("click tap ", function () {
                        $scope.onPointClick(this.valueTemp1);
                    });

                    $scope.panelFindResultPoint.children[2].addChild(h);
                }
            }
            else
            {
                $scope.FaceEnable = false;
            }

            //haf right
            var obj = $filter('filter')($scope.panelListPoints.children[3].children, { number:  $scope.findPoint.number }, true);
            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {
                    var h = renderPointItem(obj[i].x, obj[i].y, obj[i].number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                    h.xReal = obj[i].xReal;
                    h.yReal = obj[i].yReal;
                    h.valueTemp1 = obj[i].valueTemp1;
                    h.number = obj[i].number;
                    h.regionType = '2';
                    h.positionType = '0';
                    h.bind("mouseenter touchenter", function () {
                        canvas.mouse.cursor("pointer");
                        this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                        canvas.redraw();
                    }).bind("mouseleave touchleave", function () {
                        canvas.mouse.cursor("default");
                        this.stroke = "0px #0F0";
                        canvas.redraw();
                    }).bind("click tap ", function () {
                        $scope.onPointClick(this.valueTemp1);
                    });

                    $scope.panelFindResultPoint.children[3].addChild(h);
                }
            }
            else {
                $scope.HafFaceRightEnable = false;
            }

            //ear right
            var obj = $filter('filter')($scope.panelListPoints.children[4].children, { number:  $scope.findPoint.number }, true);
            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {
                    var h = renderPointItem(obj[i].x, obj[i].y, obj[i].number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                    h.xReal = obj[i].xReal;
                    h.yReal = obj[i].yReal;
                    h.valueTemp1 = obj[i].valueTemp1;
                    h.number = obj[i].number;
                    h.regionType = '2';
                    h.positionType = '0';
                    h.bind("mouseenter touchenter", function () {
                        canvas.mouse.cursor("pointer");
                        this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                        canvas.redraw();
                    }).bind("mouseleave touchleave", function () {
                        canvas.mouse.cursor("default");
                        this.stroke = "0px #0F0";
                        canvas.redraw();
                    }).bind("click tap ", function () {
                        $scope.onPointClick(this.valueTemp1);
                    });

                    $scope.panelFindResultPoint.children[4].addChild(h);
                }
            }
            else {
                $scope.EarRightEnable = false;
            }

            // nose
            var obj = $filter('filter')($scope.panelListPoints.children[5].children, { number:  $scope.findPoint.number }, true);
            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {
                    var h = renderPointItem(obj[i].x, obj[i].y, obj[i].number, parseInt($scope.sysPara.PointRadius.Value), $scope.sysPara.ColorPoint.Value);
                    h.xReal = obj[i].xReal;
                    h.yReal = obj[i].yReal;
                    h.valueTemp1 = obj[i].valueTemp1;
                    h.number = obj[i].number;
                    h.regionType = '2';
                    h.positionType = '0';
                    h.bind("mouseenter touchenter", function () {
                        canvas.mouse.cursor("pointer");
                        this.stroke = "2px " + $scope.sysPara.BorderColorPoint.Value;
                        canvas.redraw();
                    }).bind("mouseleave touchleave", function () {
                        canvas.mouse.cursor("default");
                        this.stroke = "0px #0F0";
                        canvas.redraw();
                    }).bind("click tap ", function () {
                        $scope.onPointClick(this.valueTemp1);
                    });

                    $scope.panelFindResultPoint.children[5].addChild(h);
                }
            }
            else {
                $scope.NoseEnable = false;
            }

            if ($scope.FaceEnable)
            {
                if ($scope.currentBackground.itemIndex != 2)
                {
                    $scope.SetCurrentPage(2);
                }
            }
            else if ($scope.HafFaceRightEnable || $scope.HafFaceLeftEnable)
            {
                $scope.SetCurrentPage(1);
            }
            else if ($scope.EarRightEnable || $scope.EarLeftEnable)
            {
                $scope.SetCurrentPage(0);
            }
            else if ($scope.NoseEnable)
            {
                if ($scope.currentBackground.itemIndex != 5) {
                    $scope.SetCurrentPage(5);
                }
            }


            $scope.panelListPoints.x = 2 * $scope.frameWidth;
            $scope.panelFindResultPoint.x = 0;
            $scope.panelFindResultPoint.children[$scope.currentBackground.itemIndex].x = 0;
            $scope.panelButton.x = -2 * $scope.panelButton.width;
            $scope.FindStatus = true;
            $scope.SetFindPointButtonStatus();
            canvas.redraw();
            $scope.closeFindPointInfo();
        }

        $scope.closeFindPointInfo = function () {
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.SetCurrentPage = function(index)
    {
        $scope.panelThumB.children[$scope.currentBackground.itemIndex + 1].children[0].fill = $scope.thumBLeaveColor;
        $scope.currentBackground.x = 2 * $scope.frameWidth + 10;
        $scope.panelGrid.children[$scope.currentBackground.itemIndex].x = 2 * $scope.frameWidth + 10;
        $scope.panelListPoints.children[$scope.currentBackground.itemIndex].x = 2 * $scope.frameWidth + 10;
        $scope.panelFindResultPoint.children[$scope.currentBackground.itemIndex].x = 2 * $scope.frameWidth + 10;
        $scope.panelDoHinh.children[$scope.currentBackground.itemIndex].x = 2 * $scope.frameWidth + 10;
        $scope.currentBackground = $scope.panelBackground.children[index];
        $scope.currentBackground.x = $scope.frameWidth / 2 - $scope.currentBackground.width / 2;
        $scope.currentBackground.y = $scope.frameHeight / 2 - $scope.currentBackground.height / 2;
        $scope.offset = $scope.currentBackground.offset;
        $scope.panelListPoints.children[$scope.currentBackground.itemIndex].x = 0;
        $scope.panelGrid.children[$scope.currentBackground.itemIndex].x = 0;
        $scope.panelFindResultPoint.children[$scope.currentBackground.itemIndex].x = 0;
        $scope.panelDoHinh.children[$scope.currentBackground.itemIndex].x = 0;
        $scope.panelThumB.children[$scope.currentBackground.itemIndex + 1].children[0].fill = $scope.thumBSelectColor;
    }

    $scope.SetFindPointButtonStatus = function()
    {
        if ($scope.NoseEnable)
        {
            $scope.panelThumB.children[6].children[2].fill = "rgba(0,0,0,0.0)";
        }
        else
        {
            $scope.panelThumB.children[6].children[2].fill = "rgba(0,0,0,0.8)";
        }

        if($scope.FaceEnable)
        {
            $scope.panelThumB.children[3].children[2].fill = "rgba(0,0,0,0.0)";
        }
        else {
            $scope.panelThumB.children[3].children[2].fill = "rgba(0,0,0,0.8)";
        }

        if ($scope.HafFaceLeftEnable)
        {
            $scope.panelThumB.children[2].children[2].fill = "rgba(0,0,0,0.0)";
        }
        else {
            $scope.panelThumB.children[2].children[2].fill = "rgba(0,0,0,0.8)";
        }

        if ($scope.HafFaceRightEnable)
        {
            $scope.panelThumB.children[4].children[2].fill = "rgba(0,0,0,0.0)";
        }
        else {
            $scope.panelThumB.children[4].children[2].fill = "rgba(0,0,0,0.8)";
        }

        if ($scope.EarRightEnable)
        {
            $scope.panelThumB.children[5].children[2].fill = "rgba(0,0,0,0.0)";
        }
        else {
            $scope.panelThumB.children[5].children[2].fill = "rgba(0,0,0,0.8)";
        }
        if ($scope.EarLeftEnable) {
            $scope.panelThumB.children[1].children[2].fill = "rgba(0,0,0,0.0)";
        }
        else {
            $scope.panelThumB.children[1].children[2].fill = "rgba(0,0,0,0.8)";
        }
    }

    $scope.onPointClick= function(data)
    {
        $scope.currentPoint = data;

        $scope.growlMessage = {
            success: false,
            message: ""
        }

        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'PointInfoModal.html',
            scope: $scope,
            size: '',
            backdrop: 'static',
            keyboard: false,
        });

        

        $scope.closePointInfo = function () {
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.initDoHinh =  function()
    {
        $scope.panelDoHinh = renderPanelDoHinh(0, 0, $scope.frameWidth, $scope.frameHeight);

        var pn = renderPanelDoHinh(2 * $scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);
        $scope.panelDoHinh.addChild(pn);
        var pn = renderPanelDoHinh(2 * $scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);
        $scope.panelDoHinh.addChild(pn);
        var pn = renderPanelDoHinh(0, 0, $scope.frameWidth, $scope.frameHeight);
        $scope.panelDoHinh.addChild(pn);
        var pn = renderPanelDoHinh(2 * $scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);
        $scope.panelDoHinh.addChild(pn);
        var pn = renderPanelDoHinh(2 * $scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);
        $scope.panelDoHinh.addChild(pn);
        var pn = renderPanelDoHinh(2 * $scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);
        $scope.panelDoHinh.addChild(pn);
        canvas.addChild($scope.panelDoHinh);
    }

    $scope.reInitDoHinh = function()
    {
        $scope.panelDoHinh.width = $scope.frameWidth;
        $scope.panelDoHinh.height = $scope.frameHeight;

        for(var i =0;i<6;i++)
        {
            $scope.panelDoHinh.children[i].width = $scope.frameWidth;
            $scope.panelDoHinh.children[i].height = $scope.frameHeight;

            if (i==2)
            {
                if ($scope.panelDoHinh.children[i].children.length>0)
                {
                    $scope.panelDoHinh.children[i].children[0].width = $scope.DoHinhWidth * $scope.panelBackground.children[2].offset;
                    $scope.panelDoHinh.children[i].children[0].height = $scope.DoHinhHeight * $scope.panelBackground.children[2].offset;
                    $scope.panelDoHinh.children[i].children[0].x = $scope.xCenter - $scope.panelDoHinh.children[i].children[0].width / 2;
                    $scope.panelDoHinh.children[i].children[0].y = $scope.yCenter - $scope.panelDoHinh.children[i].children[0].height / 2;
                }
            }
        }
    }

    $scope.initFindPoint = function()
    {
        $scope.panelFindResultPoint = renderPanelDoHinh(2 * $scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);


        var pn = renderPanelDoHinh(2 * $scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);
        $scope.panelFindResultPoint.addChild(pn);
        var pn = renderPanelDoHinh(2 * $scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);
        $scope.panelFindResultPoint.addChild(pn);
        var pn = renderPanelDoHinh(2 * $scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);
        $scope.panelFindResultPoint.addChild(pn);
        var pn = renderPanelDoHinh(2 * $scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);
        $scope.panelFindResultPoint.addChild(pn);
        var pn = renderPanelDoHinh(2 * $scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);
        $scope.panelFindResultPoint.addChild(pn);
        var pn = renderPanelDoHinh(2 * $scope.frameWidth, 0, $scope.frameWidth, $scope.frameHeight);
        $scope.panelFindResultPoint.addChild(pn);

        var yPos = 10;
        var btn = canvas.display.rectangle({
            x: 6,
            y: yPos,
            width: 60,
            height: 60,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvas.display.image({
            x: 6,
            y: 6,
            image: renderHomeIcon48(),
            width: 48,
            height: 48,
        });

        btn.addChild(img);

        btn.bind("mouseenter touchenter", function () {
            canvas.mouse.cursor("pointer");
            this.children[0].shadow = $scope.shadowBodyOn;
            canvas.redraw();
        }).bind("mouseleave touchleave", function () {
            canvas.mouse.cursor("default");
            this.children[0].shadow = $scope.shadowBodyOff;
            canvas.redraw();
        }).bind("click tap ", function () {
            $scope.goHome();
        });

        $scope.panelFindResultPoint.addChild(btn);

        yPos += 60;
        var btn = canvas.display.rectangle({
            x: 6,
            y: yPos,
            width: 60,
            height: 60,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvas.display.image({
            x: 6,
            y: 6,
            image: renderBoHuyetIcon48(),
            width: 48,
            height: 48,
        });

        btn.addChild(img);

        btn.bind("mouseenter touchenter", function () {
            canvas.mouse.cursor("pointer");
            this.children[0].shadow = $scope.shadowBodyOn;
            canvas.redraw();
        }).bind("mouseleave touchleave", function () {
            canvas.mouse.cursor("default");
            this.children[0].shadow = $scope.shadowBodyOff;
            canvas.redraw();
        }).bind("click tap ", function () {
            if ($scope.FindBoHuyet)
            {
                $scope.findBHModal();
            }
            else
            {
                $scope.findPointModal();
            }
        });

        $scope.panelFindResultPoint.addChild(btn);

        yPos += 60;
        var btn = canvas.display.rectangle({
            x: 6,
            y: yPos,
            width: 60,
            height: 60,
            stroke: "0px #000000",
            fill: "rgba(0,0,0, 0.0)",
            itemType: 'pgbutton',
            objectType: "button",
        });

        var img = canvas.display.image({
            x: 6,
            y: 6,
            image: renderBodyIcon50(),
            width: 48,
            height: 48,
        });

        btn.addChild(img);

        btn.bind("mouseenter touchenter", function () {
            canvas.mouse.cursor("pointer");
            this.children[0].shadow = $scope.shadowBodyOn;
            canvas.redraw();
        }).bind("mouseleave touchleave", function () {
            canvas.mouse.cursor("default");
            this.children[0].shadow = $scope.shadowBodyOff;
            canvas.redraw();
        }).bind("click tap ", function () {
            $scope.showCanvasHuman();
        });

        $scope.panelFindResultPoint.addChild(btn);


        // iFame youtube
        if (true) {
            yPos += 60;
            var btn = canvas.display.rectangle({
                x: 6,
                y: yPos,
                width: 60,
                height: 60,
                stroke: "0px #000000",
                fill: "rgba(0,0,0, 0.0)",
                itemType: 'pgbutton',
                objectType: "button",
            });

            var img = canvas.display.image({
                x: 6,
                y: 6,
                image: renderVideoIcon50(),
                width: 48,
                height: 48,
            });

            btn.addChild(img);

            btn.bind("mouseenter touchenter", function () {
                canvas.mouse.cursor("pointer");
                this.children[0].shadow = $scope.shadowBodyOn;
                canvas.redraw();
            }).bind("mouseleave touchleave", function () {
                canvas.mouse.cursor("default");
                this.children[0].shadow = $scope.shadowBodyOff;
                canvas.redraw();
            }).bind("click tap ", function () {
                $scope.renderIFameYoutubeLayout();
            });

            $scope.panelFindResultPoint.addChild(btn);
        }

        // khoa chuc nang in
        if (false)
        {
            yPos += 60;
            var btn = canvas.display.rectangle({
                x: 6,
                y: yPos,
                width: 60,
                height: 60,
                stroke: "0px #000000",
                fill: "rgba(0,0,0, 0.0)",
                itemType: 'pgbutton',
                objectType: "button",
            });

            var img = canvas.display.image({
                x: 6,
                y: 6,
                image: renderPrintIcon50(),
                width: 48,
                height: 48,
            });

            btn.addChild(img);

            btn.bind("mouseenter touchenter", function () {
                canvas.mouse.cursor("pointer");
                this.children[0].shadow = $scope.shadowBodyOn;
                canvas.redraw();
            }).bind("mouseleave touchleave", function () {
                canvas.mouse.cursor("default");
                this.children[0].shadow = $scope.shadowBodyOff;
                canvas.redraw();
            }).bind("click tap ", function () {
                $scope.renderBitmapLayout();
            });

            $scope.panelFindResultPoint.addChild(btn);
        }
        

        canvas.addChild($scope.panelFindResultPoint);
    }

    $scope.goHome = function()
    {
        $scope.panelTitle.text = "";
        $scope.panelListPoints.x = 0;
        $scope.panelFindResultPoint.x = 2*$scope.frameWidth;
       // $scope.panelFindResultPoint.children[$scope.currentBackground.itemIndex].x = 0;
        $scope.panelButton.x = 0;
     //   $scope.panelListPoints.children[$scope.currentBackground.itemIndex].x = 0;
        $scope.panelGrid.children[$scope.currentBackground.itemIndex].x = 0;

        $scope.EarLeftEnable = true;
        $scope.EarRightEnable = true;
        $scope.NoseEnable = true;
        $scope.HafFaceLeftEnable = true;
        $scope.HafFaceRightEnable = true;
        $scope.FaceEnable = true;
        $scope.FindStatus = false;
        $scope.FindBoHuyet = false;
        $scope.SetFindPointButtonStatus();
        $scope.currentBoHuyet = null;
        $scope.panelControl.y = -80;
        $scope.removeTreatmentInfo();
        canvas.redraw();
    }

    $scope.SetItemForPanelFindPoint = function()
    {

    }

    $scope.SettingModal = function () {
        $scope.growlMessage = {
            success: false,
            message: ""
        }

        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'SettingModal.html',
            scope: $scope,
            size: '',
            backdrop: 'static',
            keyboard: false,
        });


        $scope.closeSetting = function () {
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.DoHinhModal = function () {
        $scope.growlMessage = {
            success: false,
            message: ""
        }

        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'DoHinhModal.html',
            scope: $scope,
            size: '',
            backdrop: 'static',
            keyboard: false,
        });


        $scope.closeDoHinh = function () {
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }
    
    $scope.reInitFindPoint = function()
    {
        $scope.panelFindResultPoint.width = $scope.frameWidth;
        $scope.panelFindResultPoint.height = $scope.frameHeight;

        for (var i = 0; i < 6; i++)
        {
            var of = $scope.panelBackground.children[i].offset;
            var posX = $scope.frameWidth / 2 - $scope.panelBackground.children[i].width / 2;
            var posY = $scope.frameHeight / 2 - $scope.panelBackground.children[i].height / 2;
            $scope.panelFindResultPoint.children[i].width = $scope.frameWidth;
            $scope.panelFindResultPoint.children[i].height = $scope.frameHeight;
            for(var j=0;j<$scope.panelFindResultPoint.children[i].children.length;j++)
            {
                var obj = $scope.panelFindResultPoint.children[i].children[j];
                obj.x = Math.floor(obj.xReal * of) + posX;
                obj.y = Math.floor(obj.yReal * of) + posY;
            }
        }

        if ($scope.panelFindResultPoint.x > 0)
        {
            $scope.panelFindResultPoint.x = 2 * $scope.frameWidth;
        }
    }

    $scope.load();

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

    $scope.renderBitmapLayout = function()
    {
        console.log($scope.currentBoHuyet);
        BaseService.postData("Home", "RenderBitmapLayout", true,$scope.currentBoHuyet).then(function (response) {
                    if (response.success == true) {
                        $scope.exportPdf(response.lstData);
                    }
                }).finally(function () {
                }, function () { });
    }

    $scope.renderIFameYoutubeLayout = function()
    {
        $scope.linkData = $scope.currentBoHuyet.Links[0];
        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'YoutubeModal.html',
            scope: $scope,
            size: 'md',
            backdrop: 'static',
            keyboard: false,
        });

        $scope.modalInstance.rendered.then(function () {
            
            $scope.linkDataURL = $sce.trustAsResourceUrl($scope.linkData.Link);
        });

        $scope.onViewVideo = function (item) {
            $scope.linkData = item;
            $scope.linkDataURL = $sce.trustAsResourceUrl($scope.linkData.Link);
        }

        $scope.closeYoutubeModal = function () {
            $scope.modalInstance.dismiss('cancel');
        };

        $scope.modalInstance.result.then(function (response) {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    

    $scope.exportPdf = function (imageData) {
        $scope.repost = $sce.trustAsHtml("");
        var frmLogin = angular.element(document.querySelector('#divPrintPrevew'));
        frmLogin.html("");

        $scope.modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'printRepostModel.html',
            scope: $scope,
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
        });

        var fileName = "Report";

        $scope.modalInstance.rendered.then(function () {

            var str = '';
            for (var i = 0; i < ($scope.currentBoHuyet.Huyets.length - 1); i++)
            {
                str += $scope.currentBoHuyet.Huyets[i].Number + ', ';
            }

            str += $scope.currentBoHuyet.Huyets[$scope.currentBoHuyet.Huyets.length - 1].Number;

            var searchResvEntity = {
                name: $scope.currentBoHuyet.Name,
                lstPoint: str,
                imageLayout: imageData,
            };

            var data = {
                "ReportFileName": "Layout",
                "parameterVals": JSON.stringify(searchResvEntity)
            }
            BaseService.postData("Home", "ReportPartialView", true, data).then(function (response) {
                $scope.repost = $sce.trustAsHtml(response);
                frmLogin.html($scope.repost);
            });

        });

        $scope.okPrint = function () {
            $window.open($scope.baseURL + "Home/ExportFilePrint");
        };


        $scope.okPdf = function () {
            $window.open($scope.baseURL + "Home/ExportFilePdf");
        };

        $scope.close = function () {
            $scope.modalInstance.dismiss('cancel');
        };
    }
}
MainController.$inject = ['$scope', '$rootScope','$sce', '$filter', '$q', '$http', '$timeout','$interval', '$window', '$modal', 'blockUI', '$log', '$location', 'ENUMS', 'BaseService'];