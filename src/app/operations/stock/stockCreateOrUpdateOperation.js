/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/app/services/stock/stockCreateOrUpdateService')} ctx.stockCreateOrUpdateService
 */
module.exports = ({ stockCreateOrUpdateService }) => ({
    execute: (data) => stockCreateOrUpdateService.execute(data)
});
