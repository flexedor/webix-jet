import {JetView} from "webix-jet";
import status from "views/statuses";
import countries from "views/countries";

export default class DataView extends JetView{
	config(){

		var list = {
			rows: [
				{
					view: "list",
					id: "datalist",
					data: ["Countries","Statuses"],
					autoheight: true,
            		width: 300,
            		scroll: false,
					select: true,
					//select:"Countries",
					on: {
						onAfterSelect: function (id) {
							$$(id).show();
						}
					}
				},
				{}
			]
		};

		var dataCountries = {
            countries
		};

		var dataStatuses ={
            countries
		};

		var multiviewData = {
			cells: [
				{id:"Countries", cols:[ dataCountries]},
				{id:"Statuses", cols: [dataStatuses]}
			  ]
		}

		var ui ={
			cols: [list, multiviewData]
		};

		return ui;
	}


}

