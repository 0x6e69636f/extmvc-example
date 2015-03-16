/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
var store = new Ext.data.Store({
   // model: 'Tl.model.Translate',
    fields: [
        {name: 'key'},
        {name: 'en'},
        {name: 'zh'}
    ],
    data: [
        {
            key: 'auth.username',
            en: 'Username',
            zh: '用户名'
        }
    ]
});

Ext.define('Tl.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Tl.view.main.MainController',
        'Tl.view.main.MainModel',
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        layout: 'fit',
        items:[{
            title: 'Tab 1',
            items: [
                {
                    xtype: 'grid',
                    title: 'Translate Grid',
                    store: store,
                    height: 300,
                    border: true
                }
            ]
        }]
    }]
});



