'use strict';

/**
 * @ngdoc overview
 * @name agentRegistrationPortletApp
 * @description
 *
 * Main module of the application.
 */
//var liferayUserContext = liferayUserContext || alert('Critical Error: "liferayUserContext" variable is missing in liferay view.');

var app = angular.module('agentRegistrationPortletApp',
    ['ngRoute']);

app
    .constant('config', {
        debug: false,
        useMocks: checkMock,
        viewsDir: '/views/',
        modalsDir: '/modals/',
        portletPath: liferayPortletPath,
        applicationServiceAddress: appAddr,
        // userContext: themePortletUtils.getUserContext(liferayUserContext),
        endpointDict: {
            //TODO: modify service names as per your requirement
            doFinaliseCheckout: this.applicationServiceAddress + '/BasketApplicationService/doFinaliseCheckout',
            getBasketItems: this.applicationServiceAddress + '/BasketApplicationService/listBasketItems'
        }
    })
   // .value('portletUtils', themePortletUtils)
    .config(['$routeProvider', 'config', function ($routeProvider, config) {
        $routeProvider
            //TODO: CONFIGURE ROUTING FOR VIEWS
            //TODO: Remove or add params as per requirement
            .when('/AdminDashboard_VIEW1', {
                templateUrl: config.portletPath + config.viewsDir + 'AdminDashboard_VIEW1.html',
                controller: 'AdminDashboard_VIEW1-ctrl'
            })
            .when('/EnterAgentDetails_VIEW2', {
                templateUrl: config.portletPath + config.viewsDir + 'EnterAgentDetails_VIEW2.html',
                controller: 'EnterAgentDetails_VIEW2-ctrl'
            })
            .when('/ConfirmAgentDetails_VIEW3', {
                templateUrl: config.portletPath + config.viewsDir + 'ConfirmAgentDetails_VIEW3.html',
                controller: 'ConfirmAgentDetails_VIEW3-ctrl'
            })
            .when('/AgentRegistrationComplete_VIEW4', {
                templateUrl: config.portletPath + config.viewsDir + 'AgentRegistrationComplete_VIEW4.html',
                controller: 'AgentRegistrationComplete_VIEW4-ctrl'
            })
            .otherwise({
                redirectTo: '/EnterAgentDetails_VIEW2'
            });
    }])
    .factory('sessionTokenService', function () {
        var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var _uuid = function (len, radix) {
            var chars = CHARS, uuid = [], i;
            radix = radix || chars.length;

            if (len) {
                // Compact form
                for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
            } else {
                // rfc4122, version 4 form
                var r;

                // rfc4122 requires these characters
                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                uuid[14] = '4';

                // Fill in random data.  At i==19 set the high bits of clock sequence as
                // per rfc4122, sec. 4.1.5
                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r = 0 | Math.random() * 16;
                        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                    }
                }
            }

            return uuid.join('');
        };

        var _sessionToken = _uuid();

        return {
            getToken: function () {
                return _sessionToken;
            },
            refreshToken: function () {
                _sessionToken = _uuid();
            }
        };
    });