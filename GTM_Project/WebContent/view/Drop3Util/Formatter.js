jQuery.sap.declare("com.cg.gtm.view.Drop3Util.Formatter");

com.cg.gtm.view.Drop3Util.Formatter = {
		
		statusTextMap: {
			"DISP": "Assigned",
			"HOLD": "On Hold",
			"ACPT": "Accepted",
			"COMP": "Completed"
		},
		
		statusStateMap: {
			"DISP": "Error",
			"HOLD": "Warning",
			"ACPT": "Warning",
			"COMP": "Success"
		},
		
		priorityTextMap: {
			"1": "Very High",
			"2": "High",
			"3": "Medium",
			"4": "Low"
		},
		
		toolValueStateMap: {
		    "Locked": "Error",
		    "Unlocked": "Success"
		},
		
		toolStateIconMap: {
			"Locked": "sap-icon://locked",
			"Unlocked": "sap-icon://unlocked"
		},
		
		statusText: function(value) {
			return com.cg.gtm.view.Drop3Util.Formatter.statusTextMap[value];
		},
		
		statusState: function(value) {
			return com.cg.gtm.view.Drop3Util.Formatter.statusStateMap[value];
		},
		
		priorityText: function(value) {
			if(value!="")
			return com.cg.gtm.view.Drop3Util.Formatter.priorityTextMap[value];
			else{
				return "";
			}
		},
		
		toolValueState: function(value) {
			return com.cg.gtm.view.Drop3Util.toolValueStateMap[value];
		},
		
		toolStateIcon: function(value) {
			return com.cg.gtm.view.Drop3Util.toolStateIconMap[value];
		}
		
};