'use strict';

angular.module('agentRegistrationPortletApp').controller('ConfirmAgentDetails_VIEW3-ctrl',
    ['$scope', '$location', '$routeParams', 'sessionService', 'validationProvider', 'webServiceDal', 'portletUtils',
        function ($scope, $location, $routeParams, sessionService, validationProvider, webServiceDal, portletUtils) {

                $scope.agentViewModel = {
                    firstName: "Laxman",
                    lastName: "More",
                    email: "laxman.more@atos.net",
                    password: "123",
                    phoneNumber : "9503485361",
                    officeLocation: {
                        lineOne: "B-104",
                        lineTwo: "2nd Circle",
                        lineThree: "Dombivali (E)",
                        lineFour: "Mumbai (E)",
                        lineFive: "Maharashtra",
                        lineSix: "India",
                        postCode: "400100"
                    },
                    gender: "Male"
                };

                $scope.completeAgentRegistration = function() {
                    var onSuccess = function (response) {
                        alert("Success");
                    };
                    var onError = function (response) {
                        alert("Error");
                    };
                    var app1 = $http.post('/agent', $scope.agentViewModel).then(onSuccess, onError);
                    alert("submit");
                    //$location.path('/newValue');
                };
                $scope.cancelConfirmAgentDetails = function() {
                    alert("Cancel Confirm Agent Details");
                };

        }]);
