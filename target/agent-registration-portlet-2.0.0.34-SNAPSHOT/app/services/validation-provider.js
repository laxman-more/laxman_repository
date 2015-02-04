'use strict';

angular.module('agentRegistrationPortletApp').factory('validationProvider', function () {
    return {
        cardNumber: {
            pattern: "/^[0-9]{12}$/",
            patternErrorMessage: "Your entry either contains invalid characters, or isn't the right length. Please re-enter the last 12 digits of the long number on the front of your card carefully - don't include any spaces or other characters.",
            blockerErrorMessage: "This card is blocked and cannot be registered with your get me there account. Please get in touch with Customer Services for further assistance.",
            doesntExistErrorMessage: "We can't recognise this card number. Please check you've entered it correctly and try again.",
            requiredErrorMessage: "This field is required. Please enter your card number and try again."
        },
        birthDate: {
            pattern: null,
            patternErrorMessage: "Sorry – the date you've selected isn't valid. Please check that you've selected a valid date in the past.",
            requiredErrorMessage: "This field is required. Please enter the day, month and year of your birth and try again."
        },
        email: {
            pattern: "/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/",
            patternErrorMessage: 'You have entered an invalid email address. Please make sure your email address is in a valid format.',
            existErrorMessage: "We've found an existing account with this email address. Please enter another email address to create a new account or sign in to your existing account and choose 'Register another card'.",
            requiredErrorMessage: "This field is required. Please enter your email address and try again."
        },
        friendlyName: {
            pattern: "/^[a-zA-Z0-9 \\\-&()]{1,35}$/",
            patternErrorMessage: "Your entry contains invalid characters. The only symbols that can be used in your name is a space, a hyphen (-) or an apostrophe (').",
            requiredErrorMessage: "This field is required. Please enter your last name and try again."
        },
        lastName: {
            pattern: "/^[A-Za-z '-]*$/",
            patternErrorMessage: "Your entry contains invalid characters. The only symbols that can be used in your name is a space, a hyphen (-) or an apostrophe (‘).",
            requiredErrorMessage: "This field is required. Please enter your last name and try again."
        },
        firstName: {
            pattern: "/^[A-Za-z '-]*$/",
            patternErrorMessage: "Your entry contains invalid characters. The only symbols that can be used in your name is a space, a hyphen (-) or an apostrophe (').",
            requiredErrorMessage: "This field is required. Please enter your last name and try again."
        },
        otherNames: {
            pattern: "/^[A-Za-z '-]*$/",
            patternErrorMessage: "Your entry contains invalid characters. The only symbols that can be used in your name is a space, a hyphen (-) or an apostrophe (')."
        },
        currentPassword: {
            pattern: "/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,20}$/",
            patternErrorMessage: "Your new password must be between 8 and 20 characters in length and must contain the following:\n- one upper case letter\n- one number\n- one lower case letter\nPlease re-enter and try again.",
            requiredErrorMessage: "This field is required. Please enter your current password and try again."
        },
        newPassword: {
            pattern: "/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,20}$/",
            patternErrorMessage: "Your new password must be between 8 and 20 characters in length and must contain the following:\n- one upper case letter\n- one number\n- one lower case letter\nPlease re-enter and try again.",
            requiredErrorMessage: "This field is required. Please enter your new password and try again."
        },
        newPasswordReTyped: {
            pattern: null,
            patternErrorMessage: "Your new password entries don't match. Please re-enter and try again.",
            requiredErrorMessage: "This field is required. Please re-enter your new password and try again."
        },
        password: {
            pattern: "/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,20}$/",
            patternErrorMessage: "Your new password must be between 8 and 20 characters in length and must contain the following: one upper case letter, one number, one lower case letter. Please re-enter and try again.",
            requiredErrorMessage: "This field is required. Please enter a password and try again."
        },
        passwordReTyped: {
            pattern: null,
            patternErrorMessage: "Your new password entries don't match. Please re-enter and try again.",
            requiredErrorMessage: "This field is required. Please re-enter your password and try again."
        },
        postCode: {
            pattern: "/[A-Za-z]{1,2}[0-9][0-9A-Za-z]? ?[0-9][A-Za-z]{2}/",
            patternErrorMessage: "Please re-enter your postcode using only letters numbers and spaces, e.g. M1 3BN",
            requiredErrorMessage: "This field is required. Please enter your postcode and try again."
        },
        required: {
            pattern: null,
            requiredErrorMessage: "This field is required. Please complete and try again."
        },
        memorableQuestion: {
            pattern: null,
            requiredErrorMessage: "Please choose a memorable question."
        },
        memorableQuestionAnswer: {
            pattern: null,
            requiredErrorMessage: "Please enter an answer to your memorable."
        },
        mobile: {
            pattern: "/^[0-9x \\\-+()]{1,25}$/",
            patternErrorMessage: "Please make sure your telephone or mobile  number uses only numbers, spaces and the characters - + ( ) x"
        },
        telephone: {
            pattern: "/^[0-9x \\\-+()]{1,25}$/",
            patternErrorMessage: "Please make sure your telephone or mobile  number uses only numbers, spaces and the characters - + ( ) x"
        },
        terms: {
            pattern: null,
            requiredErrorMessage: "To continue with your registration, please accept our terms & conditions, privacy policy and use of cookies on the get me there website. Alternatively, select 'Cancel'."
        }
    }
});