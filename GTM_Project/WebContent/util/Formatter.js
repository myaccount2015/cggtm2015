jQuery.sap.declare("com.cg.gtm.util.Formatter");
jQuery.sap.require("sap.ui.core.format.DateFormat");



com.cg.gtm.Formatter1 = {

  _statusStateMap: {
    1: "Error",
    2: "Error",
    3: "Warning",
    4: "Success",
  },

  _statusTextMap: {
    1: "VeryHigh",
    2: "High",
    3: "Medium",
    4: "Low",
  },

  statusText: function(value) {
    var map = com.cg.gtm.Formatter._statusTextMap;
   
    return (map[value]);
  },

  statusState: function(value) {
    var map = com.cg.gtm.Formatter._statusStateMap;
    return (value && map[value]) ? map[value] : "None";
  },

  date: function(value) {
    if (value) {
      var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
        pattern: "dd/MM/yyyy"
      });
      return oDateFormat.format(new Date(parseInt(value.substr(6))));
    } else {
      return value;
    }
  },

  dateRange: function(date1, date2) {
    return com.cg.gtm.Formatter.date(date1) + " - " + com.cg.gtm.Formatter.date(date2);
  },

  /* Only needed for old version of UI5***************************/
  startDate: function(value) {
    //var bundle = this.getModel("i18n").getResourceBundle();
    return  com.cg.gtm.Formatter.date(value);
  },

  finishDate: function(value) {
   // var bundle = this.getModel("i18n").getResourceBundle();
    return  com.cg.gtm.Formatter.date(value);
  },
  /****************************************************************/

  quantity: function(value) {
    try {
      return (value) ? parseFloat(value).toFixed(0) : value;
    } catch (e) {
      return "Not-A-Number";
    }
  },

};