const { Router } = require('express');
const Status = require('http-status');

/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/interfaces/http/schemas/stock/stockCreateOrUpdateSchema')} ctx.stockCreateOrUpdateSchema
 * @param {import('src/app/operations/stock/stockCreateOrUpdateOperation')} ctx.stockCreateOrUpdateOperation
 * @param {import('src/interfaces/http/middlewares/validatorMiddleware')} ctx.validatorMiddleware
 * @param {import('src/interfaces/http/schemas/stock/stockFindOneSchema')} ctx.stockFindOneSchema
 * @param {import('src/app/operations/stock/stockFindOneOperation')} ctx.stockFindOneOperation
 */
module.exports = ({
    stockCreateOrUpdateOperation,
    stockCreateOrUpdateSchema,
    stockFindOneOperation,
    validatorMiddleware,
    stockFindOneSchema
}) => ({
    stockCreateOrUpdate: (req, res, next) => {
        try {
            const data = { ...req.body };
            const response = stockCreateOrUpdateOperation.execute(data);

            return res.status(Status.OK).json(response);
        } catch (err) {
            next(err);
        }
    },
    stockFindOne: (req, res, next) => {
        try {
            const data = { ...req.query };
            const response = stockFindOneOperation.execute(data);

            return res.status(Status.OK).json(response);
        } catch (err) {
            next(err);
        }
    },
    get router() {
        return Router()
            .post('/', validatorMiddleware(stockCreateOrUpdateSchema), this.stockCreateOrUpdate)
            .get('/', validatorMiddleware(stockFindOneSchema), this.stockFindOne);
    }
});
