'use strict';
//TODO: UPDATE MODULE NAME (xxxYyyPortlet)
angular.module('agentRegistrationPortletApp')
    .factory('webServiceDal', ['$http', '$httpBackend', '$q', 'config', 'sessionTokenService',
        function ($http, $httpBackend, $q, config, sessionTokenService) {
 /*
            //TODO: ADD COMMON DATA USED IN EVERY SERVICE CALL
            var commonRequestData = {
                userContext: 'Customer'
            };

            //OBJECT CONTAINING SERVICE CALLS
            return {
                doFinaliseCheckout: function (basketIdParam) {
                    //TODO: UPDATE SERVICE CALL ENDPOINT
                    var endpoint = config.endpointDict['doFinaliseCheckout'];

                    //TODO: CREATE REQUEST DATA
                    var requestData = {};
                    requestData.basketId = basketIdParam;
                    requestData.customerId = config.userContext.customerId;
                    //EXTENDING REQUEST OBJECT WITH COMMON REQUEST DATA
                    angular.extend(requestData, commonRequestData);

                    //TODO: CREATE REQUEST OBJECT USING REQUEST DATA
                    var requestObject = { FinaliseCheckoutRequest: requestData};

                    //TODO: MAPPING FOR SUCCESSFUL CALL
                    var onSuccess = function (response) {
                        //TODO: INITIALIZE LOCAL VARIABLES HERE
                        var i = 0, len = null; // use in for loops
                        var result = {}, array = [], count = 0; // use for results

                        //TODO: UPDATE FOR VALID RESPONSE OBJECT (ManageShoppingBasketResponse)
                        var responseData = response.data.FinaliseCheckoutResponse;
                        if (!responseData) {
                            result.responseError = 'Missing valid response object.';
                        }
                        else {
                            //TODO: UPDATE MAPPING LOGIC

                            //TODO: CREATE MAPPING RESULT OBJECT
                            result = responseData;
                        }

                        return result;
                    };

                    //TODO: MAPPINGS FOR SERVICE ERRORS ONLY IF NEEDED
                    var onError = function (response) {
                        return $q.reject(response.data);
                    };

                    return $http.post(endpoint, requestObject).then(onSuccess, onError);
                },
                getBasketItems: function getBasketItems (basketIdParam) {
                    //TODO: UPDATE SERVICE CALL ENDPOINT
                    var endpoint = config.endpointDict['getBasketItems'];

                    //TODO: CREATE REQUEST DATA
                    var requestData = {};
                    requestData.basketId = basketIdParam;
                    requestData.customerId = config.userContext.customerId;
                    requestData.sessionToken = sessionTokenService.getToken();
                    //EXTENDING REQUEST OBJECT WITH COMMON REQUEST DATA
                    angular.extend(requestData, commonRequestData);

                    //TODO: CREATE REQUEST OBJECT USING REQUEST DATA
                    var requestObject = { ListBasketItemAppRequest: requestData};

                    //TODO: MAPPING FOR SUCCESSFUL CALL
                    var onSuccess = function (response) {
                        //TODO: INITIALIZE LOCAL VARIABLES HERE
                        var i = 0, len = null; // use in for loops
                        var result = {}, basketItems = [], count = 0; // use for results

                        //TODO: UPDATE FOR VALID RESPONSE OBJECT (ManageShoppingBasketResponse)
                        var responseData = response.data.ListBasketItemAppResponse;
                        if (!responseData) {
                            result.responseError = 'Missing valid response object.';
                        }
                        else {
                            if (responseData.errorFlag) {
                                result.responseError = 'Error flag in server response.';
                            }

                            //TODO: UPDATE MAPPING LOGIC
                            var responseBasketItems = responseData.basketItems && responseData.basketItems.basketItem ?
                                createArrayFromObject(responseData.basketItems.basketItem) : [];

                            if (responseBasketItems.length > 0) {
                                for (i = 0, len = responseBasketItems.length; i < len; i++) {
                                    var basketItem = {
                                        cardName: responseBasketItems[i].cardName,
                                        cardNumber: responseBasketItems[i].cardNumber,
                                        lineItems: (responseBasketItems[i].basketLineItemList && responseBasketItems[i].basketLineItemList.basketLineItem ?
                                            createArrayFromObject(responseBasketItems[i].basketLineItemList.basketLineItem) : [])
                                    };

                                    angular.forEach(basketItem.lineItems, function (value, id) {
                                        if (value.collectionDetails.locationName) {
                                            basketItem.locationName = value.collectionDetails.locationName;
                                        }
                                        if(value.collectionDetails.startDate && value.collectionDetails.endDate) {
                                            basketItem.startDate = value.collectionDetails.startDate;
                                            basketItem.endDate = value.collectionDetails.endDate;
                                        }
                                    });

                                    count += basketItem.lineItems.length;

                                    basketItems.push(basketItem);
                                }
                            }

                            //TODO: CREATE MAPPING RESULT OBJECT
                            result.basketId = responseData.basketId;
                            result.totalListPrice = responseData.totalListPrice;
                            result.basketItems = basketItems;
                            result.totalLineItems = responseData.totalLineItems;
                        }

                        return result;
                    };

                    //TODO: MAPPINGS FOR SERVICE ERRORS ONLY IF NEEDED
                    var onError = function (response) {
                        return $q.reject(response.data);
                    };

                    return $http.post(endpoint, requestObject).then(onSuccess, onError);
                }
            };
            */
        }]);

//////////////////
//HELPER FUNCTIONS
function createArrayFromObject(object) {
    var result = [];
    if (angular.isArray(object)) {
        //it is array
        result = object;
    }
    else if (object) {
        result.push(object);
    }
    return result;
}