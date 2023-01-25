/* sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "sap.ui.demo.walkthrough.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
}); */

sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});

/* sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast"
], function (Button, MessageToast, Text) {
	"use strict";

	alert("UI5 is ready");

	new Button({
		text: "Ready...",
		press: function () {
			MessageToast.show("Hello World!");
		}
	}).placeAt("content");

}); */

/* sap.ui.define([
	"sap/m/Text"

], function (Text) {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content");

});  */

