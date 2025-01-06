sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: newproject",
		defaults: {
			page: "ui5://test-resources/newproject/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "newproject/",
				never: "test-resources/newproject/"
			},
			loader: {
				paths: {
					"newproject": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for newproject"
			},
			"integration/opaTests": {
				title: "Integration tests for newproject"
			}
		}
	};
});
