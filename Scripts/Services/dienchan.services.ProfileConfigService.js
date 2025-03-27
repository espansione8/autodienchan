var ProfileConfigService = function ($rootScope, $http, $q) {
    var getAllGenders = function () {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "ProfileConfiguration/LoadGenderData"
        })
        .success(function (response) {
            result.resolve(response);
        })
        .error(function (response) {
            result.reject(response);
        });

        return result.promise;
    }
    var getAllGuestTypes = function () {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "ProfileConfiguration/GetAllGuestType"
        })
        .success(function (response) {
            result.resolve(response);
        })
        .error(function (response) {
            result.reject(response);
        });

        return result.promise;
    }
    var getAllGuestSubTypes = function () {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "ProfileConfiguration/GetAllGuestSubType"
        })
        .success(function (response) {
            result.resolve(response);
        })
        .error(function (response) {
            result.reject(response);
        });

        return result.promise;
    }

    return {
        getAllGenders: getAllGenders,
        getAllGuestTypes: getAllGuestTypes,
        getAllGuestSubTypes: getAllGuestSubTypes
    }
}
ProfileConfigService.$inject = ['$rootScope', '$http', '$q'];