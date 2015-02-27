com.cg.gtm.Formatter = {
		
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
			return drop3mockups.util.Formatter.statusTextMap[value];
		},
		
		statusState: function(value) {
			return drop3mockups.util.Formatter.statusStateMap[value];
		},
		
		priorityText: function(value) {
			return drop3mockups.util.Formatter.priorityTextMap[value];
		},
		
		toolValueState: function(value) {
			return drop3mockups.util.Formatter.toolValueStateMap[value];
		},
		
		toolStateIcon: function(value) {
			return drop3mockups.util.Formatter.toolStateIconMap[value];
		}
		
};