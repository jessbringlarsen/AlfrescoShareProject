var header = widgetUtils.findObject(model.jsonModel, "id", "SHARE_VERTICAL_LAYOUT");
if(header != null) {
  header.config.widgets.push(
    {
      name: "alfresco/layout/LeftAndRight",
      config: {
        widgetsLeft: [
          {
            id: "GitHubZenWidget",
            name: "example/widgets/GitHubZenWidget"
          }
        ],
        widgetsRight: []
      }
    }
  );
}