const { RuleTester } = require('eslint');
const prismaNoSelectAllRule = require('../prisma-no-select-all');
const ruleTester = new RuleTester();
ruleTester.run('prisma-no-select-all', prismaNoSelectAllRule, {
    valid: [
        {
            code: 'console.log(); db.user.findUnique({ where: { id: 1 }, select: { id: true } })',
        },
    ],
    invalid: [
        {
            code: 'function a() {db.user.findUnique({ where: { id: 1 }})}; a();',
            errors: [{ messageId: 'noSelectAll' }],
        },
    ],
});
