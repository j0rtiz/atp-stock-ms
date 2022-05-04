/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/app/services/stock/stockFindOneService')} ctx.stockFindOneService
 */
module.exports = ({ stockFindOneService }) => ({
    execute: (data) => stockFindOneService.execute(data)
});
