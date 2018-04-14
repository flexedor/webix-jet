import {JetView} from "webix-jet";
import status_1 from "views/statuses";
import countries_1 from "views/countries";

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



		var multiviewData = {
			cells: [
				{id:"Countries", cols:[ countries_1]},
				{id:"Statuses", cols: [   status_1]}
			  ]
		}

		var ui ={
			cols: [list, multiviewData]
		};

		return ui;
	}


}

