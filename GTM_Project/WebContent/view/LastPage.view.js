sap.ui.jsview("com.cg.gtm.view.LastPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitscreens.LastPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.LastPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitscreens.LastPage
	*/ 
	createContent : function(oController) {
		
		this.setHeight("100%"); //http://scn.sap.com/thread/3283046
		
		var lblDummy1 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy1.addStyleClass("HideLabel");
		
		var lblMatNo = new sap.m.Label({
			text: "Material Number}"
		});
		lblMatNo.addStyleClass("FontBold");
		
		var lblValMatNo = new sap.m.Label("valMatNo2", {
			//path: "/MD15CollectionMATNR",
			text: "MAT18762"
		});
		
		var lblDummy2 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		
		lblDummy2.addStyleClass("HideLabel");
		
		var lblMatDesc = new sap.m.Label({
			text: "Description"
		});
		lblMatDesc.addStyleClass("FontBold");
		
		var lblValMatDesc = new sap.m.Label("valMatDesc", {
			text: "Bolts"
		});
		
		var lblDummy3 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy3.addStyleClass("HideLabel");
		
		var lblMatManu = new sap.m.Label({
			text: "Manufact"
		});
		lblMatManu.addStyleClass("FontBold");
		
		var lblValMatManu = new sap.m.Label("valMatManu", {
			text: "Manu"
		});
		
		var lblDummy4 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy4.addStyleClass("HideLabel");
		
		var lblMatModNo = new sap.m.Label({
			text: "model"
		});
		lblMatModNo.addStyleClass("FontBold");
		
		var lblValMatModNo = new sap.m.Label("valMatModNo", {
			text: "2009"
		});
		
		var lblDummy5 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy5.addStyleClass("HideLabel");
		
		var lblMatSup = new sap.m.Label({
			text: "Vendor"
		});
		lblMatSup.addStyleClass("FontBold");
		
		var lblValMatSup = new sap.m.Label("valMatSup", {
			text: "Duro"
		});
		
		var lblDummy6 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy6.addStyleClass("HideLabel");
		
		var lblMatSupPartNo = new sap.m.Label({
			text: "Supplier Part No"
		});
		lblMatSupPartNo.addStyleClass("FontBold");
		
		var lblValMatPartNo = new sap.m.Label("valMatPartNo", {
			text: "A3213"
		});
		
		var lblDummy7 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy7.addStyleClass("HideLabel");
		
		var container = new sap.m.FlexBox({
			items: [
			        lblDummy1,
			        lblMatNo,
			        lblValMatNo,
			        lblDummy2,
			        lblMatDesc,
			        lblValMatDesc,
			        lblDummy3,
			        lblMatManu,
			        lblValMatManu,
			        lblDummy4,
			        lblMatModNo,
			        lblValMatModNo,
			        lblDummy5,
			        lblMatSup,
			        lblValMatSup,
			        lblDummy6,
			        lblMatSupPartNo,
			        lblValMatPartNo,
			        lblDummy7
			        ],
			direction:"Column",
			justifyContent:"Center",
			alignItems:"Start"
		});
	 
	 container.addStyleClass("ContainerPaddingLeft");
		
 		return new sap.m.Page({
 			showHeader: false,
			content: [
			          container
			]
		});
	}

});