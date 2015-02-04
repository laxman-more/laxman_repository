'use strict';
function AgentViewModel() {
    return {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        officeLocation: {
            lineOne: "",
            lineTwo: "",
            lineThree: "",
            lineFour: "",
            lineFive: "",
            lineSix: "",
            postCode: ""
        },
        gender: ""
    };
}


angular.module('agentRegistrationPortletApp')
    .value('sessionService', {
        agentViewModel: new AgentViewModel(),

        clear: function () {
            this.agentViewModel = new AgentViewModel();
        },
        save: function (session) {
            this.agentViewModel = session.agentViewModel;
        }
    });