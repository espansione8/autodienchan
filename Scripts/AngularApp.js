var dienchanApp = angular.module('dienchan', ['ngRoute', 'angular.chosen', 'angularUtils.directives.dirPagination', "kendo.directives", 'ngSanitize', 'ngAnimate', 'ui.bootstrap', 'blockUI', 'growlNotifications', 'angularjs-dropdown-multiselect', 'frapontillo.bootstrap-switch']);

// Config
dienchanApp.controller('MainController', MainController); 
dienchanApp.controller('LoginController', LoginController); 
dienchanApp.controller('AdminController', AdminController);
dienchanApp.service('BaseService', BaseService);

dienchanApp.config(['blockUIConfig', function (blockUIConfig) {
    // Change the default overlay message
    blockUIConfig.message = 'Loading...';
    blockUIConfig.autoInjectBodyBlock = false;
    // Change the default delay to 100ms before the blocking is visible
    blockUIConfig.delay = 100;

}]).run(['$rootScope', '$modal', function ($rootScope, $modal) {

    var baseUrl = $('baseurl').attr('value');
    $rootScope.baseUrl = baseUrl;
    $rootScope.RootScopeDateFormat = $('dateformat').attr('value');

    $rootScope.openErrorMessageModal = function (size, message) {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: $rootScope.baseUrl + 'Template/errorMessageModal.html',
            controller: 'ModalErrorMessageController',
            size: null,
            resolve: {
                item: function () {
                    return message;
                }
            }
        });

        modalInstance.result.then(function (response) {
            //$scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
}]);
dienchanApp.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
}]);
dienchanApp.filter('truncateFilter', function () {
    return function (value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
                value = value.substr(0, lastspace);
            }
        }
        return value + (tail || ' …');
    };
});
dienchanApp.directive('bootstrapSwitch', [
        function () {
            return {
                restrict: 'A',
                require: '?ngModel',
                link: function (scope, element, attrs, ngModel) {
                    element.bootstrapSwitch();

                    element.on('switchChange.bootstrapSwitch', function (event, state) {
                        if (ngModel) {
                            scope.$apply(function () {
                                ngModel.$setViewValue(state);
                            });
                        }
                    });

                    scope.$watch(attrs.ngModel, function (newValue, oldValue) {
                        if (newValue) {
                            element.bootstrapSwitch('state', true, true);
                        } else {
                            element.bootstrapSwitch('state', false, true);
                        }
                    });
                }
            };
        }
]);

dienchanApp.directive('onlyDigits', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attr, ctrl) {
            function inputValue(val) {
                if (val) {
                    var digits = val.replace(/[^0-9]/g, '');

                    if (digits !== val) {
                        ctrl.$setViewValue(digits);
                        ctrl.$render();
                    }
                    return parseInt(digits, 10);
                }
                return undefined;
            }
            ctrl.$parsers.push(inputValue);
        }
    };
});
dienchanApp.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});

dienchanApp.filter("jsDate", function ($log) {
    return function (x, formatDate) {
        return moment(x).format(formatDate);

    };
});

dienchanApp.filter('groupBy', function () {
    return _.memoize(function (items, field) {
        return _.groupBy(items, field);
    }
    );
});

dienchanApp.constant('ENUMS',
    {
        MainTab: {
            SelectTreatment: 1,
            TreatmentDetail: 2,
            AnyRequest: 3,
            MedicalIssues: 4,
            Authenticate: 5,
            Booking: 6,
            BookingSuccess: 7
        },
        
    }

)


