'use strict';
function Account() {
    return {
        email: 'tester2@liferAy.com',
        password: '',
        passwordReTyped: '',
        questionId: '',
        answer: '',
        isConditionsAgreement: false
    };
}

function Basket() {
    return {
        basketId: null
    };
}

angular.module('agentRegistrationPortletApp')
    .value('sessionService', {
        account: new Account(),
        basket: new Basket(),
        clear: function () {
            this.account = new Account();
            this.basket = new Basket();
        },
        save: function (session) {
            this.account = session.account;
            this.basket = session.basket;
        }
    });