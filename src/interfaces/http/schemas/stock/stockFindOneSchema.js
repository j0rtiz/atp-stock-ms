const joi = require('joi');

module.exports = () =>
    joi
        .object({
            query: joi
                .object({
                    productId: joi.string().guid({ version: 'uuidv4' }).required(),
                    amount: joi.number().positive().integer().required()
                })
                .required()
        })
        .required();
