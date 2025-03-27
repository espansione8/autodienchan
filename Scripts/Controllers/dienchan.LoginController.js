function LoginController($scope, $rootScope, $filter, $q, $http, $timeout, $window, $modal, blockUI, $log, $location, ENUMS, BaseService) {

    $scope.UserData = {
        UserName: '',
        Password: '',
        LicenseKey: '',
        followUserName: true,
        LangID: '0',
        isAdminCheckbox: false,
    }

    $scope.data = {
        langPara:null,
        listLang:[],
    }

    $scope.lang = {
        language:'0',
    }
    $scope.OnLogin =function()
    {
        $scope.UserData.LangID = $scope.lang.language;

        if (!$scope.UserData.isAdminCheckbox) {
            $scope.UserData.UserName = 'Riflessologo';
            $scope.UserData.Password = 'dc2017';
        }

        console.log("username", $scope.UserData.UserName);
        console.log("password", $scope.UserData.Password);
        console.log("lang", $scope.lang.language);
        console.log("chk", $scope.UserData.isAdminCheckbox);

        BaseService.postData("Home", "GetLogin", false, $scope.UserData)
        .then(function (response) {
            if (response.success == true) {
                $window.location.href = $scope.baseUrl + 'Home/Index';
            }
            else
            {
                BaseService.displayError("Login Information Is Not Correct!", 5000);
            }
        }).finally(function () {
        }, function () { });
    }

    $scope.initListLang = function()
    {
        var obj = {
            ID: '0',
            Value: 'Italiano',
        }

        $scope.data.listLang.push(obj);

        var obj = {
            ID: '1',
            Value: 'English',
        }

        $scope.data.listLang.push(obj);

        var obj = {
            ID: '2',
            Value: 'Vietnamese',
        }

        $scope.data.listLang.push(obj);

        var obj = {
            ID: '3',
            Value: 'Deutch',
        }

        $scope.data.listLang.push(obj);

        var obj = {
            ID: '4',
            Value: 'Espanol',
        }

        $scope.data.listLang.push(obj);
    }

    $scope.load = function () {
        $scope.initListLang();

        $scope.getLang();
    }

    $scope.getLang = function()
    {
        BaseService.postData("NAV", "GetLangSignIn", false, { "langID": $scope.lang.language })
                .then(function (response) {
                    if (response.success == true) {
                        $scope.data.langPara = response.lstData;
                    }
                    else {
                        BaseService.displayError("Error when load language!", 5000);
                    }
                }).finally(function () {
                }, function () { });
    }

    $scope.onLanguageChanged = function()
    {
        $scope.getLang();
    }

    //document ready  
    $scope.load();

}
LoginController.$inject = ['$scope', '$rootScope', '$filter', '$q', '$http', '$timeout', '$window', '$modal', 'blockUI', '$log', '$location', 'ENUMS', 'BaseService'];