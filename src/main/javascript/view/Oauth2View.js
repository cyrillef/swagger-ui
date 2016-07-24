'use strict';

SwaggerUi.Views.Oauth2View = Backbone.View.extend({
    events: {
        'change .oauth-scope': 'scopeChange',
        'change .oauth2_auth__client_id': 'clientIdChange',
        'change .oauth2_auth__client_secret': 'clientSecretChange'
    },

    selectors: {
        oauth2ClientID: '.oauth2_auth__client_id',
        oauth2ClientSecret: '.oauth2_auth__client_secret'
    },

    template: Handlebars.templates.oauth2,

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    scopeChange: function (e) {
        var val = $(e.target).prop('checked');
        var scope = $(e.target).data('scope');

        this.model.setScopes(scope, val);
    },

    clientIdChange: function (e) {
        var val =$(e.target).val () ;
        if ( val ) {
            this.$(this.selectors.oauth2ClientID).removeClass ('error') ;
    }
        this.model.set ('client_id', val) ;
    },

    clientSecretChange: function (e) {
        var val =$(e.target).val () ;
        if ( val ) {
            this.$(this.selectors.oauth2ClientSecret).removeClass ('error') ;
        }
        this.model.set ('client_secret', val) ;
    },

    isValid: function () {
        return (this.model.validate ()) ;
    },

    highlightInvalid: function () {
        if ( !this.isValid () ) {
            this.$(this.selectors.oauth2ClientID).addClass ('error') ;
            this.$(this.selectors.oauth2ClientSecret).addClass ('error') ;
        }
    }

});