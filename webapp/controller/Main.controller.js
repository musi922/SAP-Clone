sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("newproject.controller.Main", {
		onPayPress(){
			this.byId("payDialog").open();
		},
		onCancelPayement(){
			this.byId("payDialog").close();
		},
		onConfirmPayement(){
			const payementAmount = this.byId("payementAmount").getValue();
			const payementMethod = this.byId("payementMethod").getSelectedKey();
			if (!payementAmount || !payementMethod) {
				MessageBox.error("Please enter amount and select payement method");
			}else if(payementAmount <= 20000){
				MessageBox.error("Amount of Money Entered is less than 20000");
			}
			else{MessageBox.success(
				"Amount : " + payementAmount + " Payement Method : " + payementMethod + "Confirmed"
			)}
		},
		onDialogClose(){
			this.byId("payementAmount").setValue("");
			this.byId("payementMethod").setSelectedKey(null);
			this.byId("payDialog").close();
		}
	});
});
