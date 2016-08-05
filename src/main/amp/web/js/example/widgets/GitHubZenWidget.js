<!-- Widget to display the message from GitHub Zen -->
define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "alfresco/core/Core",
        "alfresco/core/CoreXhr",
        "dojo/dom-construct",
        "dijit/_TemplatedMixin",
        "dojo/text!./templates/GitHubZenWidget.html"
    ],
    function(declare, _Widget, Core, CoreXhr, domConstruct, _Templated, template) {
        return declare([_Widget, Core, CoreXhr, _Templated], {
            templateString: template,

            postCreate: function postCreate() {
                var url = "https://api.github.com/zen";
                this.serviceXhr({url : url,
                  method: "GET",
                  successCallback: this._onSuccessCallback,
                  callbackScope: this});
            },

            _onSuccessCallback: function onSuccessCallback(response, config) {
                domConstruct.create( "div", { innerHTML: response }, this.containerNode );
            }
        });
    });