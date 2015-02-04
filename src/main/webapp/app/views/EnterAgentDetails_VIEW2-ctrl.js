'use strict';

angular.module('agentRegistrationPortletApp').controller('EnterAgentDetails_VIEW2-ctrl',
    ['$scope', '$location', '$routeParams', 'sessionService', 'validationProvider', 'webServiceDal', 'portletUtils','$window',
        function ($scope, $location, $routeParams, sessionService, validationProvider, webServiceDal, portletUtils, $window) {
            $scope.sessionData = sessionService;
            $scope.validationViewModel = validationProvider;
            $scope.globalError = null;
            document.getElementById('password_patternErrorMessage').innerHTML = $scope.validationViewModel.password.patternErrorMessage;
            document.getElementById('passwordReTyped_patternErrorMessage').innerHTML = $scope.validationViewModel.passwordReTyped.patternErrorMessage;
            //TODO: GLOBAL ERROR CALLBACK
            var globalErrorCallback = function (error) {
                $scope.globalError = 'Connection to application server has failed: ' + error.statusText;
            };

            $scope.genders = [
                {genderDisplay: 'Male', genderValue: 'Male'},
                {genderDisplay: 'Female', genderValue: 'Female'}
            ];
            $scope.confirmPassword = '';
            $scope.complexity = "Weak";
            //webServiceDal.getBasketItems(param1).then(getBasketItemsSuccess, globalErrorCallback);
            //TODO: ON PAGE LOAD :: (ADD A NEW ONE PLACEHOLDER)

            //TODO: USER ON CLICK ACTION PATHS
            //var proceedPath = 'second-view';
            //var continueShoppingPath = portletUtils.getPathToLiferay('my-account');
            //the above will generate this http://localhost:8080/group/tfgm_admin/my-account
            //var cancelPath = portletUtils.getPathToLiferay('home');
            //TODO: USER ON CLICK ACTION CALLBACKS


            $scope.cancelEdit = function() {
                $window.history.back();

            };

            $scope.passwordValidate = function($value){
                return $value % 2;
            }


            $scope.phoneNumberPattern = (function() {
                //var regexp = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
                var regexp = /\d{3}/;
                return {
                    test: function(value) {
                        return regexp.test(value);
                    }
                };
            })();

            $scope.nextStep = function (){
                sessionService.save($scope.sessionData);
                $location.path( '/ConfirmAgentDetails_VIEW3' );
            };





        }])

    .directive("passwordVerify", function() {
        return {
            require: "ngModel",
            scope: {
                passwordVerify: '='
            },
            link: function(scope, element, attrs, ctrl) {
                scope.$watch(function() {
                    var combined;

                    if (scope.passwordVerify || ctrl.$viewValue) {
                        combined = scope.passwordVerify + '_' + ctrl.$viewValue;
                    }
                    return combined;
                }, function(value) {
                    if (value) {
                        ctrl.$parsers.unshift(function(viewValue) {
                            var origin = scope.passwordVerify;
                            if (origin !== viewValue) {
                                ctrl.$setValidity("passwordVerify", false);
                                return undefined;
                            } else {
                                ctrl.$setValidity("passwordVerify", true);
                                return viewValue;
                            }
                        });
                    }
                });
            }
        };
    });