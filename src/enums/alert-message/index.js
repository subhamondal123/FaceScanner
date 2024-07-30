// Define all the alert and error messages

export const MESSAGE = Object.freeze({
    EXIT_APP: {
        PRESS_AGAIN: "press again to exit the application !"
    },
    SERVER: {
        INTERNAL_SERVER_ERROR: "Network error !"
    },
    NETWORK: {
        ERROR: "Network error Please check your network !"
    },
    EMAIL: {
        EMAIL_EMPTY: "Please enter email !",
        EMAIL_INVALID: "Please enter valid email id !",
    },
    EMAIL_PASSWORD: {
        INCORRECT: "Incorrect email or password"
    },
    PASSWORD: {
        PASSWORD_EMPTY: "Please enter Password",
        PASSWORD_NOT_VALID: "Password must contains Minimum seven characters, at least one uppercase letter, one lowercase letter, one number and one special character",
        PASSWORD_WRONG: "You have enter a wrong password",
        PASSWORD_NOT_MATCH: "Password not matching !",
        CONFIRM_PASSWORD_EMPTY: "Please enter the password again !",
        PASSWORD_NOT_SAME_AS_CURRENT: "Current password and New password cannot be same !",
        NEW_PASSWORD_CONFIRM_PASSWORD_MISMATCH: "New Password & Confirm Password not matched !"
    },
    MOBILE: {
        MOBILE_EMPTY: "Please enter your mobile no !",
        MOBILE_LESS: "Mobile no is less than 10 Digits !",
        MOBILE_GREATER: "Mobile no cannot exceed 14 digits !",
        MOBILE_ZERO_CHECK: "Mobile no cannot start with 0 !",
        MOBILE_NOT_MATCH: "Given mobile does not match !",
        MOBILE_VALID: "Mobile number must be a minimum 10 !",
        MOBILE_EXSIST: "Mobile no already exsists !",
        MOBILE_EMAIL_BOTH_EMPTY: "Please enter your mobile no or email Id !"
    },
    CHOOSE_CAMERA_TYPE: {
        SELECT: "Please select any one"
    },
    GENDER: {
        GENDER_ERROR: "Please select Gender !"
    },
    DATE_OF_BIRTH: {
        DOB_ERROR: "Please select Date of Birth !"
    },

    OTP: {
        OTP_VERIFY_SUCCESS: "OTP Verified Succesfully !",
        INVALID_OTP: "Invalid OTP !",
        EMPTY_OTP: "Please enter OTP !"
    },

    BRANDING: {
        NEW_ENTRY: {
            BRANDING_NAME_ERROR: "Please enter Branding Name!",
            CHOOSE_ITEM_ERROR: "Please select Branding Type!",
            CHOSE_DESCRIPTION_ERROR: "Please enter Description!",
            QUANTITY_ERROR: "Please enter quantity!",
            UNIT_ERROR: "Please enter Unit!",
            IMAGE_ERROR: "Please choose Photo!"
        },
    },

    // StockUpdate Add Atart Message

    STOCK_UPDATE_ADD: {
        BRANDING_ITEM_ERROR: "Please Select Brand Type !",
        TYPE_ITEM_ERROR: "Please Select Item Type!",
        SIZE_SPECS_ITEM_ERROR: "Please Select Size Specs !",
        QUANTITY_NAME_ERROR: "Please Enter Quantity !",
        UNIT_ITEM_ERROR: "Please Select Unit !"
    },

    // CONTACT_DETAILS_CRM_CONTACT: {
    //     CONTACT_BUSINESS_ERROR: "Please select contact business type !",
    //     FRIST_NAME_ERROR: "Please enter frist name !",
    //     LAST_NAME_ERROR: "Please enter last name !",
    //     PHONE_NUMBER: "Please enter phone number !",
    //     EMAIL_ID_ERROR: "Please enter email ID !",
    //     TITLE_ERROR: "Please enter title!",
    //     CONTACT_TYPE_ERROR: "Please select contact type !",
    //     STATUS_ERROR: "Please select status !"
    // },
    // ADDRESS_DETAILS_CRM_CONTACT: {
    //     ADDRESS_ERROR: "Please enter address !",
    //     COUNTRY_ERROR: "Please select country !",
    //     STATE_ERROR: "Please select STATE !",
    //     DISTRICT_CITY_ERROR: "Please select district/city !",
    //     ZONE_ERROR: "Please select zone!",
    // },
    ORDER_DETAILS: {
        VEHICLE_LOAD_ERROR: "Please enter vehicle load amount!",
        TR_WEIGHT_ERROR: "Please enter TR Weight amount!",
        QUANTITY_ERROR: "Please enter Quantity!",
        UNIT_ERROR: "Please select unit!",
        REMARK_ERROR: "Please enter remarks!",
        QPHOTO_ERROR: "Please enter image!",
        DOC_BLANK_ERROR: "Please Choose Document"

    },
    USER_WARNING: {
        ACTION_TO_LOGOUT_TITLE: "WARNING",
        ACTION_TO_LOGOUT_BODY: "For security reasons, we have disabled Back option. \n\n Are you sure you want to Logout?",
        ACTION_TO_WROING_USER: "You are not a valid user. \n\n Please login with a valid credential.",
        ROOT_DEVICE: "You can not use this application in a root device.",
        ENABLE_DEVELOPER_MODE: "You heve to disable the develper mode."
    },

    CREATE_ENQUIRY: {
        SOURCE_INFO: {
            VISITOR_TYPE_ERROR: "Please select Customer type !",
            STATE_ERROR: "Please select State !",
            DISTRICT_ERROR: "Please select District !",
            ZONE_ERROR: "Please select Zone !",
        },
    },



});