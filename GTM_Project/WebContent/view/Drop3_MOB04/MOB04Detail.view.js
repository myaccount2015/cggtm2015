jQuery.sap.require("com.cg.gtm.view.Drop3Util.Formatter");

sap.ui.jsview("com.cg.gtm.view.Drop3_MOB04.MOB04Detail", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB04.MOB04Detail
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB04.MOB04Detail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB04.MOB04Detail
	 */
	createContent: function (oController) {
		
		
		  var notiflistTree=  new sap.m.List("codeList1",{
			    
		        height: "100%",
		        items: {
		          path: "/",
		          template: new sap.m.ObjectListItem("",{
		            visible: true,type: "Navigation",
		          //  title: "{Kurztextcd}",
		            intro: "{}",
		          press: oController.handleListItemPress,
		          }),
		        
		        }
		      });	
			
			
			

			  var notiflistTree1=  new sap.m.List({
				  visible: false,
				  id: "codeList2",
			        title:"test Title",
			        height: "100%",
			        items: {
			          path: "/",
			          template: new sap.m.ObjectListItem("",{
			            visible: true,type: "Active",
			            press: oController.handleListItemPress1,
			          title: "{Kurztextcd}",
			            intro: "{Code}",
			          }),
			        
			         
			        
			        }
			      });	
			
			
		var dialog=	new sap.m.Dialog({
				id: "mob04ReasonCodeDialog",
				
				content:[
	notiflistTree,notiflistTree1
	] ,
				endButton: new sap.m.Button({
					text: "Cancel",
					press: function () {
						sap.ui.getCore().byId("mob04ReasonCodeDialog").close();
					}
				}),
				beginButton: new sap.m.Button({
					
					text: "Back",
					press: function(){
						sap.ui.getCore().byId("codeList2").setVisible(false);
						
						sap.ui.getCore().byId("codeList1").setVisible(true);
						sap.ui.getCore().byId("mob04ReasonCodeDialog").setTitle("CodeList");
					}
				}),
			});
		return new sap.m.Page({
			title: "{i18n>MOB04DetailTitle}",
			showNavButton: true,
			navButtonTap: oController.handleNavButtonPress,
			navButtonPress: oController.handleNavButtonPress,
			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
			content: [
				new sap.m.ObjectHeader("MOB04DetObjHdr",{
					title: "{OpearionText}",
					number: "{OrderNo} / {ActivityNo}",
					attributes: [
						new sap.m.ObjectAttribute({
							id : "MOB04PRI",
							title: "Revision",
							text: "{Priority}"
						}),
						new sap.m.ObjectAttribute({
							id : "MOB04ESD",
							title: "Start Date",
							text: "{EarliestStartDate}"
						}),
						/*new sap.m.ObjectAttribute({
							id : "MOB04EFD",
							title: "Finish Date",
							text: "{EarliestFinishDate}"
						})*/
					],
					statuses: [
						new sap.m.ObjectStatus({
							text: "{StandardTextKey}"
						}),
						new sap.m.ObjectStatus({
							text: {
								path: "CurrentStatus",
								formatter: com.cg.gtm.view.Drop3Util.Formatter.statusText
							}
						})
					]
				}),
				new sap.m.IconTabBar({
					expandable: false,
					items: [
						new sap.m.IconTabFilter({
							text: "Detail",
							icon: "sap-icon://request",
							content: [
								new sap.ui.layout.form.SimpleForm({
									layout: "ResponsiveGridLayout",
									editable: true,
									emptySpanL: 6,
									emptySpanM: 6,
									breakpointM: 1000,
									content: [
										new sap.m.Label({
											text: "{i18n>MOB04FaultyPartLabel}",
											design: "Bold"
										}),
										new sap.m.Input({
											id: "MOB04FaultyPartInput",
											name: "{i18n>MOB04FaultyPartLabel}",
											showValueHelp: true,
											valueHelpOnly: true,
											valueHelpRequest: oController.handleFaultyPartValueHelp
										}),
										new sap.m.Label({
											text: "{i18n>MOB04TypeOfDamageLabel}",
											design: "Bold"
										}),
										new sap.m.Input({
											id: "MOB04DamageInput",
											name: "{i18n>MOB04TypeOfDamageLabel}",
											showValueHelp: true,
											valueHelpOnly: true,
											valueHelpRequest: oController.handleFaultyPartValueHelp
										}),
										new sap.m.Label({
											text: "{i18n>MOB04CauseLabel}",
											design: "Bold"
										}),
										new sap.m.Input({
											id: "MOB04CauseInput",
											name: "{i18n>MOB04CauseLabel}",
											showValueHelp: true,
											valueHelpOnly: true,
											valueHelpRequest: oController.handleFaultyPartValueHelp
										}),
										new sap.m.Label({
											text: "{i18n>MOB04Damage&VandalismLabel}",
											design: "Bold"
										}),
										new sap.m.CheckBox({
											id : "MOB03DAMAGE"

										}),
										new sap.m.Label({
											text: "{i18n>MOB04CommentsLabel}",
											design: "Bold"
										}),
										new sap.m.TextArea({
											placeholder: "{i18n>MOB04CommentsPlaceholder}",
											rows: 5,
											id : "MOB03COMMENTS"
										})
									]
								})
							]
						})
					]
				})
			],
			footer: new sap.m.Toolbar({
				content: [
					new sap.m.ToolbarSpacer(),
					new sap.m.Button({
						text: "{i18n>MOB04CompleteButton}",
						type: "Emphasized",
						press: oController.handleCompleteButtonPress
					})
				]
			})
		});
	}
});