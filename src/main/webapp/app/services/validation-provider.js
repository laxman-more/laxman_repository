'use strict';

angular.module('agentRegistrationPortletApp').factory('validationProvider', function () {
    return {
        firstName: {
            pattern: "/^[A-Za-z '-]{1,35}$/",
            patternErrorMessage: "Your entry contains invalid characters. The only symbols that can be used in your name is a space, a hyphen (-) or an apostrophe (').",
            requiredErrorMessage: "This field is required. Please enter your first name and try again."
        },
        lastName: {
            pattern: "/^[A-Za-z '-]{1,35}$/",
            patternErrorMessage: "Your entry contains invalid characters. The only symbols that can be used in your name is a space, a hyphen (-) or an apostrophe (').",
            requiredErrorMessage: "This field is required. Please enter your last name and try again."
        },
        required: {
            requiredErrorMessage: "This field is required. Please complete and try again.",
            colDtRequiredErrorMessage: "This field is required. Please select your preferred update period and try again.",
            locationRequiredErrorMessage: "This field is required. Please select your preferred update location and try again.",
            travelDtRequiredErrorMessage: "This field is required. Please choose the date you'd like your travelcard to start and try again.",
            titleReqErrMsg: "This field is required. Please enter your gender and try again."
        },
        password: {
            pattern: "/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,20}$/",
            patternErrorMessage: "Your new password must be between 8 and 20 characters in length and must contain the following:<br />- one upper case letter<br />- one number<br />- one lower case letter<br />Please re-enter and try again.",
            requiredErrorMessage: "This field is required. Please enter a password and try again."
        },
        passwordReTyped: {
            pattern: null,
            patternErrorMessage: "Your new password entries don't match. Please re-enter and try again.",
            requiredErrorMessage: "This field is required. Please re-enter your password and try again."
        },
        email: {
            pattern: "/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/",
            patternErrorMessage: 'You have entered an invalid email address. Please make sure your email address is in a valid format.',
            existErrorMessage: "We've found an existing account with this email address. Please enter another email address to create a new account or sign in to your existing account and choose 'Register another card'.",
            requiredErrorMessage: "This field is required. Please enter your email address and try again."
        },
        telephone: {
            pattern: "/^[0-9x \\\-+()]{1,25}$/",
            patternErrorMessage: "Please make sure your telephone or mobile  number uses only numbers, spaces and the characters - + ( ) x"
        },

        birthDate: {
            pattern: null,
            patternErrorMessage: "Sorry – the date you've selected isn't valid. Please check that you've selected a valid date in the past.",
            requiredErrorMessage: "This field is required. Please enter the day, month and year of your birth and try again."
        },
        address: {
            pattern: "/^[a-zA-Z0-9 \\\-&()'#]{1,35}$/",
            patternErrorMessage: "Please make sure your address uses only numbers, letters, spaces and the characters - & # ' ( )",
            requiredErrorMessage: "This field is required, if you wish to use the address look-up. Please enter a postcode and re-select 'Look up my address'. Alternatively you can enter a new address in full by selecting the relevant link",
            requiredErrorMessageLine1: "This field is required. Please enter the first line of your address and try again.",
            requiredErrorMessageLine2: "This field is required. Please enter the second line of your address and try again."
        },
        postCode: {
            pattern: "/[A-Za-z]{1,2}[0-9][0-9A-Za-z]? ?[0-9][A-Za-z]{2}/",
            patternErrorMessage: "Please re-enter your postcode using only letters numbers and spaces, e.g. M1 3BN",
            requiredErrorMessage: "This field is required, if you wish to use the address look-up. Please enter a postcode and re-select 'Look up my address'. Alternatively you can enter a new address in full by selecting the relevant link.",
            homeErrorMessage: "This field is required. Please select your address and try again."
        }
    }
});