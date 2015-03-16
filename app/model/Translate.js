Ext.define('Tl.model.Translate', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'key',    type: 'string'},
        { name: 'en',     type: 'string'},
        { name: 'zh-cn',  type: 'string'}
    ]
});
