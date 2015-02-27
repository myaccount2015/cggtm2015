sap.ui.jsview("com.cg.gtm.view.Drop1_MOB24.MaterialView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitscreens.MaterialView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB24.MaterialView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitscreens.MaterialView
	*/ 
	createContent : function(oController) {
		
		this.setHeight("100%"); // http://scn.sap.com/thread/3283046
		
		var result = {"results":[{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='31')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='31')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"10001","Description":"MY MATERIAL","Uom":"","Plant":"","Materialno":"31","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='32')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='32')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"10001","Description":"ASH MATERIAL","Uom":"","Plant":"","Materialno":"32","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='MOBILE%20MATERIAL')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='MOBILE%20MATERIAL')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"10001","Description":"MOBILE MATERIAL","Uom":"","Plant":"","Materialno":"MOBILE MATERIAL","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='44')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='44')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"4000000","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"2006","Description":"TEST MATERIAL","Uom":"","Plant":"","Materialno":"44","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='54')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='54')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"10001","Description":"STO TEST MATERIAL","Uom":"","Plant":"","Materialno":"54","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='11')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='11')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"VENDOR1","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"UTILITIES","Description":"CONSUMABLE MATERIAL1","Uom":"","Plant":"","Materialno":"11","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='LAPTOP')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='LAPTOP')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"VENDOR1","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"I.S","Description":"LAPTOP-IT SERVICES","Uom":"","Plant":"","Materialno":"LAPTOP","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='SALES%20NON-TRADE')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='SALES%20NON-TRADE')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"4000000","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"PASSENGER","Description":"SALES NON-TRADE TEST MATERAL","Uom":"","Plant":"","Materialno":"SALES NON-TRADE","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='TEST%202000')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='TEST%202000')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"4000000","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"I.S","Description":"LAPTOP-IT SERVICES","Uom":"","Plant":"","Materialno":"TEST 2000","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='TEST34')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='TEST34')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"","Description":"TEST34","Uom":"","Plant":"","Materialno":"TEST34","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='45')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='45')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"VENDOR_KJ","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"1008","Description":"BOGIE MANUFACTURING","Uom":"","Plant":"","Materialno":"45","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='200000000001')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='200000000001')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"VENDOR_KJ","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"12010","Description":"PANTOGRAPH","Uom":"","Plant":"","Materialno":"200000000001","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='200000000002')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='200000000002')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"VENDOR_KJ","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"1008","Description":"BOGIE ASSEMBLY","Uom":"","Plant":"","Materialno":"200000000002","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='200000000003')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='200000000003')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"VENDOR_KJ","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"6001","Description":"HVAC UNIT","Uom":"","Plant":"","Materialno":"200000000003","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='200000000005')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='200000000005')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"VENDOR_KJ","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"6001","Description":"SMOKING FREE SEAL","Uom":"","Plant":"","Materialno":"200000000005","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='200000000006')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='200000000006')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"VENDOR_KJ","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"12002","Description":"PIPE","Uom":"","Plant":"","Materialno":"200000000006","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='200000000007')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='200000000007')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"VENDOR_KJ","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"1005","Description":"DAMPER","Uom":"","Plant":"","Materialno":"200000000007","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='300000000001')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='300000000001')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"VENDOR_KJ","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"14002","Description":"TORQUE WRENCH NUMBER 1","Uom":"","Plant":"","Materialno":"300000000001","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='400000000001')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='400000000001')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"VENDOR_KJ","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"10003","Description":"NUTS","Uom":"","Plant":"","Materialno":"400000000001","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='SERVICE%20MATERIAL')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='SERVICE%20MATERIAL')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"PASSENGER","Description":"SALES NON-TRADE SERVICE MATERIAL","Uom":"","Plant":"","Materialno":"SERVICE MATERIAL","VendorPartNumber":"","ManufacturerPartNumber":""},{"__metadata":{"id":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='KSD-GD')","uri":"http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections(Plant='',Materialno='KSD-GD')","type":"ZGW_QM_MOBILEAPP_SRV.Material"},"Vendor":"2000001","Manufacturer":"","ExternalMaterialGroup":"","MaterialGroup":"17004","Description":"3RD PARTY MATERIAL FOR JAPAN","Uom":"","Plant":"","Materialno":"KSD-GD","VendorPartNumber":"","ManufacturerPartNumber":""}]}; //Getting JSON response body
		
		var oJSONModelMatSearch = new sap.ui.model.json.JSONModel(result, "MD15MATCollModel");
		    
		var listMatNo = new sap.m.List("listMatNo", {
			
		      mode: sap.m.ListMode.SingleSelectMaster,
		      includeItemInSelection: true,
		      select : oController.matSel,
		      rememberSelections : false,
		      items: {
		        path: "/results",
		        template: 
		        	[
		        	new sap.m.StandardListItem({
				          title: "{Materialno}",
				          description: "{Description}",
				          iconDensityAware: false,
				          iconInset: false ,
				         
				        }),
				      
				        
		        	
		        	]
		           
		      }
		 }).addStyleClass("paddingBottom");
		
		listMatNo.setModel(oJSONModelMatSearch);
		
		/*var matnrModel = new sap.ui.model.json.JSONModel(oMD15DataMATNR);
		listMatNo.setModel(matnrModel);*/
		 
		 var b =  new sap.m.Button({
	         
	         type: sap.m.ButtonType.Emphasized,
	         text: "{i18n>cancel}",
	         tap : function() {
	        	 
	        	 var app = sap.ui.getCore().byId("splitAppMaterial");  
	        	 app.toMaster("idMob24MaterialSearchInput");
	        	 app.toDetail("idMATSRBlank");
	         }
		 
	});
		 
		 var lblDummy2 = new sap.m.Label({
				text: "{i18n>DumyTxt}"
			});
			
			lblDummy2.addStyleClass("HideLabel");
		 
		 var btnSelMat = new sap.m.Button({
             text: "Select Material",
             type: sap.m.ButtonType.Accept,
             layoutData: new sap.m.FlexItemData({growFactor: 1})
           });
		  
		 
		 var container = new sap.m.FlexBox({
				items: [
				        	 btnSelMat
				        ],
				direction:"Column",
				justifyContent:"Center",
				alignItems:"Start"
			});
		 
		 container.addStyleClass("ContainerPaddingLeft");
		 
 		return new sap.m.Page({
			title: "Title",
 			showHeader: true,
			showNavButton : false, // boolean
			headerContent:[btnSelMat],
			content: [
			          	listMatNo
			          //	container
			],
			
			navButtonTap:function(){  
				
           } 
		});
	}

});