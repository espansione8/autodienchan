var BaseService = function ($rootScope, $http, $q, $filter) {

    function postData(controller, action, isValidateToken, data) {
        var result = $q.defer();
        if (isValidateToken) {
            $http({
                method: 'POST',
                url: $rootScope.baseUrl + controller + "/" + action,
                data: data,
                headers: {
                    'RequestVerificationToken': $(':input:hidden[id*="antiForgeryToken"]').val()
                }
            })
            .success(function (response) {
                result.resolve(response);
            })
            .error(function (response) {
                result.reject(response);
            });


        } else {
            $http({
                method: 'POST',
                url: $rootScope.baseUrl + controller + "/" + action,
                data: data

            })
            .success(function (response) {
                result.resolve(response);
            })
            .error(function (response) {
                result.reject(response);
            });
        }
        return result.promise;
    }

    function gestData(controller, action, isValidateToken, data) {
        var result = $q.defer();
        if (isValidateToken) {
            $http({
                method: 'GET',
                url: $rootScope.baseUrl + controller + "/" + action,
                data: data,
                headers: {
                    'RequestVerificationToken': $(':input:hidden[id*="antiForgeryToken"]').val()
                }
            })
            .success(function (response) {
                result.resolve(response);
            })
            .error(function (response) {
                result.reject(response);
            });


        } else {
            $http({
                method: 'GET',
                url: $rootScope.baseUrl + controller + "/" + action,
                data: data

            })
            .success(function (response) {
                result.resolve(response);
            })
            .error(function (response) {
                result.reject(response);
            });
        }
        return result.promise;
    }

    function postDataWithJsonStringify(controller, action, data) {
        var result = $q.defer();
        $http({
            method: 'POST',
            url: $rootScope.baseUrl + controller + "/" + action,
            data: JSON.stringify(data),
            headers: {
                'RequestVerificationToken': $(':input:hidden[id*="antiForgeryToken"]').val()
            }
        })
           .success(function (response) {
               result.resolve(response);
           })
           .error(function (response) {
               result.reject(response);
           });
        return result.promise;
    }

    function ValidatorForm(form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {

            },
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
            fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
        .on('err.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };

    function ValidatorFormNumber(form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {

            },
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
            fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
        .on('err.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };


    function formatDate(sDate) {

        if (sDate != undefined && sDate != null && sDate != "") {
            return $filter('jsDate')(sDate, $filter('uppercase')('MM/dd/yyyy'));
        } else {
            return "";
        }


    }

    function formatMonth(sDate) {
        if (sDate != "" && sDate != undefined) {
            return $filter('jsDate')(sDate, $filter('uppercase')('MM/dd/yyyy'));
        } else {
            return "";
        }
    }


    function formatFullDateTime(sDate) {
        if (sDate != "" && sDate != undefined) {
            return $filter('jsDate')(sDate, $filter('uppercase')('MM/dd/yyyy') + ' HH:mm');
        } else {
            return "";
        }

    }

    function canculateAgeByDOB(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    function displaySuccess(message, timeOut) {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "onclick": null,
            "fadeIn": 300,
            "fadeOut": 1000,
            "timeOut": timeOut == null ? 3000 : timeOut,
            "extendedTimeOut": 1000,
            "showMethod": "slideDown",
            "hideMethod": "slideUp"
        };
        toastr.success(message);
    }

    function displayError(error, timeOut) {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "onclick": null,
            "fadeIn": 300,
            "fadeOut": 1000,
            "timeOut": timeOut == null ? 3000 : timeOut,
            "extendedTimeOut": 1000,
            "showMethod": "slideDown",
            "hideMethod": "slideUp"
        };
        if (Array.isArray(error)) {
            error.each(function (err) {
                toastr.error(err);
            });
        }
        else {
            toastr.error(error);
        }
    }

    function displayWarning(message, timeOut) {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "onclick": null,
            "fadeIn": 300,
            "fadeOut": 1000,
            "timeOut": timeOut == null ? 3000 : timeOut,
            "extendedTimeOut": 1000,
            "showMethod": "slideDown",
            "hideMethod": "slideUp"
        };
        toastr.warning(message);
    }

    function displayInfo(message, timeOut) {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "onclick": null,
            "fadeIn": 300,
            "fadeOut": 1000,
            "timeOut": timeOut == null ? 3000 : timeOut,
            "extendedTimeOut": 1000,
            "showMethod": "slideDown",
            "hideMethod": "slideUp"
        };
        toastr.info(message);
    }

    function getJsonDateObj(jsonDate) {
        if (jsonDate == null) {
            return null;
        } else {
            return new Date(parseInt(jsonDate.replace('/Date(', '')));
        }

    }

    return {
        postData: postData,
        gestData: gestData,
        ValidatorForm: ValidatorForm,
        formatDate: formatDate,
        formatMonth: formatMonth,
        formatFullDateTime: formatFullDateTime,
        postDataWithJsonStringify: postDataWithJsonStringify,
        canculateAgeByDOB: canculateAgeByDOB,
        displaySuccess: displaySuccess,
        displayError: displayError,
        displayWarning: displayWarning,
        displayInfo: displayInfo,
        getJsonDateObj: getJsonDateObj
    };
}
BaseService.$inject = ['$rootScope', '$http', '$q', '$filter'];