/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/infra/repository/stockRepository')} ctx.stockRepository
 * @param {import('src/infra/logging/logger')} ctx.logger
 */
module.exports = ({ stockRepository, logger }) => ({
    execute: (data) => {
        const result = stockRepository.findOne(data);

        logger.info({ stock: result });

        return result;
    }
});
