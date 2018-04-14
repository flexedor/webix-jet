import {JetView} from "webix-jet";
import {statuses} from "models/statuses";

export default class status_1 extends JetView{
    config(){
        return {
            rows: [
                {
                    view: "datatable",
                    id: "dataStatuses:datatable",
                    scrollX: false,
                    select: "row",
                    editable: true,
                    multiselect: true,
                    columns: [
                        {id: "id", header: "", width: 40, },
                        {id: "Name", header: "Name", fillspace: true, editor:"text",},
                        {id: "Icon", header: "Icon", editor:"text",}
                    ]
                },
                {},
                {
                    cols: [
                        { view: "button", value: "Add", click:
                                function () {
                                    var id = $$("dataStatuses:datatable").getLastId() + 1;
                                    $$("dataStatuses:datatable").add({id: id, Name: "Change name", Icon: "user"});
                                }
                        },
                        { view: "button", value: "Delete", click:
                                function () {
                                    $$("dataStatuses:datatable").remove($$("dataStatuses:datatable").getSelectedId());
                                }
                        }
                    ]
                }
            ]
        }

    }
    init (){
    this.$$("dataStatuses:datatable").parse(statuses);
}

}