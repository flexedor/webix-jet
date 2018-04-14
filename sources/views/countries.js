import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class countries_1 extends JetView{
    config(){
        return {
            rows: [
                {
                    view: "datatable",
                    id: "dataCountries:datatable",
                    scrollX: false,
                    select: "row",
                    editable: true,
                    multiselect: true,
                    columns: [
                        {id: "id", header: "", width: 40 },
                        {id: "Name", header: "Country", fillspace: true, editor:"text",}
                    ]
                },
                {},
                {
                    cols: [
                        { view: "button", value: "Add", click:
                                function () {
                                    var id = $$("dataCountries:datatable").getLastId() + 1;
                                    $$("dataCountries:datatable").add({id: id, Name: "Change country"});
                                }
                        },
                        { view: "button", value: "Delete", click:
                                function () {
                                    $$("dataCountries:datatable").remove($$("dataCountries:datatable").getSelectedId());
                                }
                        }
                    ]
                }
            ]
        }
        }
    init(){
        this.$$("dataCountries:datatable").parse(countries);
    }
}