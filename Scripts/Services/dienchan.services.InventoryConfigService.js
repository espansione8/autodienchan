var InventoryConfigService = function ($rootScope, $http, $q) {

    function getAllOthersCategory() {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "Inventory/GetAllOthersCategory",
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

    function getOthersCategoryDisplayMethod() {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "Inventory/GetOthersCategoryDisplayMethod"
        })
        .success(function (response) {
            result.resolve(response);
        })
        .error(function (response) {
            result.reject(response);
        });

        return result.promise;
    }

    function addNewOthersCategory(objOthersCategoryEntity) {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "Inventory/AddNewOthersCategory",
            data: objOthersCategoryEntity,
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

    function updateOthersCategory(objOthersCategoryEntity) {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "Inventory/UpdateOthersCategory",
            data: objOthersCategoryEntity,
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


    function getAllOthersSubCategory() {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "Inventory/GetAllOthersSubCategory",
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

    function addNewOthersSubCategory(objOthersSubCategoryEntity) {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "Inventory/AddNewSubOthersCategory",
            data: objOthersSubCategoryEntity,
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

    function updateOthersSubCategory(objOthersSubCategoryEntity) {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "Inventory/UpdateOthersSubCategory",
            data: objOthersSubCategoryEntity,
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

    function getAllOthers() {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "Inventory/LoadAllOthers",
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

    function getComboIncomeCenter() {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "Inventory/GetComboIncomeCenter"
        })
        .success(function (response) {
            result.resolve(response);
        })
        .error(function (response) {
            result.reject(response);
        });

        return result.promise;
    }

    function getComboTaxProfile() {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "Inventory/GetComboTaxProfile"
        })
        .success(function (response) {
            result.resolve(response);
        })
        .error(function (response) {
            result.reject(response);
        });

        return result.promise;
    }
    function addNewOthers(objOthersEntity) {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "Inventory/AddNewOthers",
            data: objOthersEntity,
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

    function updateOthers(objOthersEntity) {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "Inventory/UpdateOthers",
            data: objOthersEntity,
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
    

    return {
        getAllOthersCategory: getAllOthersCategory,
        getOthersCategoryDisplayMethod: getOthersCategoryDisplayMethod,
        addNewOthersCategory: addNewOthersCategory,
        updateOthersCategory: updateOthersCategory,
        getAllOthersSubCategory: getAllOthersSubCategory,
        addNewOthersSubCategory: addNewOthersSubCategory,
        updateOthersSubCategory: updateOthersSubCategory,
        getAllOthers: getAllOthers,
        getComboIncomeCenter: getComboIncomeCenter,
        getComboTaxProfile: getComboTaxProfile,
        addNewOthers: addNewOthers,
        updateOthers: updateOthers


    };

    // brand
    function getAllBrand() {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "Inventory/GetAllBrand",
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
}
InventoryConfigService.$inject = ['$rootScope', '$http', '$q'];