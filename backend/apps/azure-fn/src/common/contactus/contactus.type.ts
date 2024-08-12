import Joi = require("joi");

export interface ContactUs{
    name: string,
    email: string;
    message: string;
    phone: string;
}

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required(),
    phone: Joi.string().required()
})

export function validateContactUs(contactUs: ContactUs): Joi.ValidationResult {
    return schema.validate(contactUs);
}