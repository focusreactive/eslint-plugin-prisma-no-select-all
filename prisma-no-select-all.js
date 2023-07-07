module.exports = {
    meta: {
        messages: {
            noSelectAll: 'Every find call should have non empty select clause',
        },
    },
    create(context) {
        return {
            CallExpression: (node) => {
                const propertyName = node?.callee?.property?.name || null;
                if (propertyName === 'findUnique' || propertyName === 'findMany' || propertyName === 'findFirst') {
                    const args = node?.arguments[0]?.properties || [];
                    const select = args.find((arg) => arg.key.name === 'select');
                    if (!select) {
                        context.report({
                            node,
                            messageId: 'noSelectAll',
                        });
                    }
                }
            },
        }
    }
};