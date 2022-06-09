const joi = require("joi");

class userValidation  {
    static validateUserRegistation = (data) => {
        const schema = joi.object({
            name : joi.string().required(),
            username : joi.string().required(),
            email : joi.string().email({minDomainSegments: 2, tlds: {allow : ["com", "org"]}})
        })
    }
}