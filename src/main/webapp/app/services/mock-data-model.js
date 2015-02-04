'use strict';
//TODO: UPDATE MODULE NAME (xxxYyyPortlet)
angular.module('agentRegistrationPortletApp')
    .config(['config', '$provide', function (config, $provide) {
        if (config.useMocks) {
            $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
        }
    }])
    .run(['$httpBackend', 'config', 'mockDataModel', function ($httpBackend, config, mockDataModel) {
        // usefull snippets
        // get request object
        //var requestObject = angular.fromJson(data);
        // parse the matching URL to pull out the param (/path/:param)
        //var param1 = url.split('/')[2];
        if (!config.useMocks) return;
        // FOR REQUESTING VIEWS
        $httpBackend.whenGET(/views\/.*/).passThrough();
        $httpBackend.whenGET(/modals\/.*/).passThrough();

        //TODO: ADD MOCKS FOR POST CALLS
        $httpBackend.whenPOST(config.endpointDict['getBasketItems']).respond(function (method, url, data) {
            var basketId = angular.fromJson(data).ListBasketItemAppRequest.basketId;
            var response = mockDataModel.getBasketItems.errorResponse;
            if (basketId == 1) {
                response = mockDataModel.getBasketItems.responseWithTravelcard;
            } else if (basketId == 2) {
                response = mockDataModel.getBasketItems.responseWithTopup;
            }
            return [200, response, {}];
        });
        $httpBackend.whenPOST(config.endpointDict['doFinaliseCheckout']).respond(function (method, url, data) {
            var response = mockDataModel.doFinaliseCheckout.validResponse;
            return [200, response, {}];
        });
    }])
    .factory('mockDataModel', [function () {
        //TODO: HERE ADD ENDPOINT AND VARIOUS JSON RESPONSES FOR PARTICULAR CALL IN WEB SERVICE DAL
        return {
            doFinaliseCheckout: {
                validResponse: {
                    FinaliseCheckoutResponse: {
                        errorFlag: false,
                        returnCode: '',
                        returnMsg: ''
                    }
                }
            },
            getBasketItems: {
                emptyResponse: {},
                errorResponse: {
                    ListBasketItemAppResponse: {
                        errorFlag: true,
                        returnCode: 'ERR_287',
                        returnMsg: 'User friendly message.'
                    }
                },
                responseWithTopup: {
                    ListBasketItemAppResponse: {
                        errorFlag: false,
                        returnCode: null,
                        returnMsg: null,
                        basketId: 1,
                        totalLineItems: 1,
                        totalListPrice: 20,
                        totalDiscount: 5,
                        basketItems: {
                            basketItem: [
                                {
                                    cardName: 'Geofrey\'s favourite',
                                    cardNumber: '633597012500000007',
                                    basketLineItemList: {
                                        basketLineItem: [
                                            {
                                                lineItemId: 212,
                                                lineItemType: "LITYPE01",
                                                lineItemPrice: 25,
                                                lineItemDiscount: 5,
                                                lineItemPriceWithDiscount: 20,
                                                lineItemVisible: true,
                                                lineItemRemovable: true,
                                                collectionDetails: {
                                                    locationId: 2,
                                                    locationName: 'Eccles - Piccadilly',
                                                    startDate: 'Sun 22 Sept 13',
                                                    endDate: 'Thu 26 Sept 13'
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                },
                responseWithTravelcard: {
                    ListBasketItemAppResponse: {
                        errorFlag: false,
                        returnCode: null,
                        returnMsg: null,
                        basketId: 2,
                        totalLineItems: 1,
                        totalListPrice: 15,
                        totalDiscount: 0,
                        basketItems: {
                            basketItem: [
                                {
                                    cardName: 'Geofrey\'s favourite',
                                    cardNumber: '633597012500000007',
                                    basketLineItemList: {
                                        basketLineItem: [
                                            {
                                                lineItemId: 213,
                                                lineItemType: "LITYP02",
                                                lineItemCpiType: "REGISTRATION",
                                                lineItemPrice: 15,
                                                lineItemDiscount: 0,
                                                lineItemPriceWithDiscount: 15,
                                                lineItemVisible: true,
                                                lineItemRemovable: true,
                                                lineItemPeriodicity: "Weekly",
                                                lineItemMaturity: "Adult",
                                                lineItemZones: "All Zones",
                                                lineItemHours: "Peak",
                                                lineItemTransport: "Tram Only",
                                                lineItemValidity: 'Fri 22/03/2015', //Display as returned from UC-SYS048
                                                collectionDetails: {
                                                    locationId: 2,
                                                    locationName: 'Eccles - Piccadilly',
                                                    startDate: 'Sun 22 Sept 13',
                                                    endDate: 'Thu 26 Sept 13'
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        };
    }]);