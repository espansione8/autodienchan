var MembershipConfigService = function ($rootScope, $http, $q) {
    
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
    function getAllMembershipGroups() {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "MembershipConfiguration/GetAllMembershipGroups",
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

    function addNewMembershipGroup(objMembershipGroupEntity) {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "MembershipConfiguration/AddNewMembershipGroup",
            data: objMembershipGroupEntity,
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

    function updateMembershipGroup(objMembershipGroupEntity) {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "MembershipConfiguration/UpdateMembershipGroup",
            data: objMembershipGroupEntity,
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
   
    function getAllMembershipSubGroups() {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "MembershipConfiguration/GetAllMembershipSubGroups",
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

    function addNewMembershipSubGroup(objMembershipSubGroupEntity) {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "MembershipConfiguration/AddNewMembershipSubGroup",
            data: objMembershipSubGroupEntity,
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

    function updateMembershipSubGroup(objMembershipSubGroupEntity) {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "MembershipConfiguration/UpdateMembershipSubGroup",
            data: objMembershipSubGroupEntity,
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

    function getAllMembershipTypes() {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "MembershipConfiguration/GetAllMembershipTypes",
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

    function getAllVisitControlFrequency() {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "MembershipConfiguration/GetAllVisitControlFrequency"
           
        })
        .success(function (response) {
            result.resolve(response);
        })
        .error(function (response) {
            result.reject(response);
        });

        return result.promise;
    }
    function getAllGenders() {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "MembershipConfiguration/LoadAllGenders"

        })
        .success(function (response) {
            result.resolve(response);
        })
        .error(function (response) {
            result.reject(response);
        });

        return result.promise;
    }
    function addNewMembershipType(objMembershipTypeEntity) {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "MembershipConfiguration/AddNewMembershipType",
            data: objMembershipTypeEntity,
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

    function updateMembershipType(objMembershipTypeEntity) {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "MembershipConfiguration/UpdateMembershipType",
            data: objMembershipTypeEntity,
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

    function getAllMembershipTypes() {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: $rootScope.baseUrl + "MembershipConfiguration/GetAllMembershipTypes",
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
        getAllMembershipGroups: getAllMembershipGroups,
        addNewMembershipGroup: addNewMembershipGroup,
        updateMembershipGroup: updateMembershipGroup,
        getAllMembershipSubGroups: getAllMembershipSubGroups,
        addNewMembershipSubGroup: addNewMembershipSubGroup,
        updateMembershipSubGroup: updateMembershipSubGroup,
        getAllMembershipTypes: getAllMembershipTypes,
        getAllVisitControlFrequency: getAllVisitControlFrequency,
        getAllGenders: getAllGenders,
        addNewMembershipType: addNewMembershipType,
        updateMembershipType: updateMembershipType,
        postData: postData
    };
}
MembershipConfigService.$inject = ['$rootScope', '$http', '$q'];