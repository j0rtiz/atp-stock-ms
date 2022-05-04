const joi = require('joi');

module.exports = () =>
    joi
        .object({
            body: joi
                .object({
                    productId: joi.string().guid({ version: 'uuidv4' }).required(),
                    amount: joi.number().positive().integer().required()
                })
                .required()
        })
        .required();
