module.exports = {
    name: "eslint-plugin-prisma-no-select-all",
    version: "1.0.0",
    rules: {
        'prisma-no-select-all': require('./prisma-no-select-all'),
    }
};