Ext.define('Tl.store.Translate', {
    extend: 'Ext.data.Store',
    model: 'Tl.model.Translate',
    autoLoad: true,
    proxy: {
        type: 'memory',
        data: [
            {
                key: 'auth.username',
                en: 'Username',
                zh: '用户名'
            }
        ]
    }
 });