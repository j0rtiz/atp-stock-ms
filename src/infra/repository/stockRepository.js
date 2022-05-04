/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/infra/database/fakeDatabase')} ctx.fakeDatabase
 * @param {import('src/infra/error/exception')} ctx.exception
 */
module.exports = ({ fakeDatabase, exception }) => ({
    createOrUpdate(data) {
        try {
            const product = fakeDatabase.stocks.find((product) => product.productId === data.productId);

            if (product) {
                Object.assign(product, data, { updatedAt: new Date() });

                return product;
            }

            Object.assign(data, { createdAt: new Date(), updatedAt: new Date() });
            fakeDatabase.stocks.push(data);

            return data;
        } catch (error) {
            throw exception.database(error);
        }
    },
    findOne(data) {
        try {
            const product = fakeDatabase.stocks.find((product) => product.productId === data.productId);

            return { product, hasAvailability: product?.amount > 0 && product?.amount >= data?.amount };
        } catch (error) {
            throw exception.database(error);
        }
    }
});
