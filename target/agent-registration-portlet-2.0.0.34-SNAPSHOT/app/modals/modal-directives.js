'use strict';

/**
 * @ngdoc overview
 * @name agentRegistrationPortletApp
 * @description
 *
 * Main module of the application.
 */
//TODO: UPDATE DIRECTIVE NAME (xxModal1)
angular.module('agentRegistrationPortletApp').directive('xxModal1', ['config',
    function (config) {
        return {
            restrict: 'E',
            templateUrl: config.portletPath + config.modalsDir + 'XX_MODAL1.html'
        };
    }]);