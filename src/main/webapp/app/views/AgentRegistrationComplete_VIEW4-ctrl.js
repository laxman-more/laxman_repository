'use strict';

angular.module('agentRegistrationPortletApp').controller('AgentRegistrationComplete_VIEW4-ctrl',
    ['$scope', '$location', '$routeParams', 'sessionService', 'validationProvider', 'webServiceDal',
        function ($scope, $location, $routeParams, sessionService, validationProvider, webServiceDal) {
            $scope.confirmAgentRegistration = function() {
                var onSuccess = function (response) {
                    alert("Success");
                };
                var onError = function (response) {
                    alert("Error");
                };
                var app1 = $http.post('/agent', '').then(onSuccess, onError);

            };
        }]);