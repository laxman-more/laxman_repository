'use strict';

angular.module('agentRegistrationPortletApp').controller('ConfirmAgentDetails_VIEW3-ctrl',
    ['$scope', '$location', '$routeParams', 'sessionService', 'validationProvider', 'webServiceDal', 'portletUtils',
        function ($scope, $location, $routeParams, sessionService, validationProvider, webServiceDal, portletUtils) {
            $scope.sessionData = sessionService;
            $scope.validationData = validationProvider;


            $scope.completeAgentRegistration = function() {
                var onSuccess = function (response) {
                    alert("Success");
                };
                var onError = function (response) {
                    alert("Error");
                };
                // var app1 = $http.post('/agent', $scope.agentViewModel).then(onSuccess, onError);
                alert("submit");
                //$location.path('/newValue');
            };
            $scope.cancelConfirmAgentDetails = function() {
                alert("Cancel Confirm Agent Details");
            };

        }]);
