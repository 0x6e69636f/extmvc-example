/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Tl.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Tl'
    }
    ,

    stores: {
        translate: {
            model: 'Translate',
            autoLoad: true
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});