$(document).ready(function() {
                    
    // create a template
    var template = kendo.template($("#template").html());
    var dataSource = new kendo.data.DataSource({
        transport: {
            read: {
                url: "/get_movies",
                dataType: "json"
            }
        },
        change: function() { // subscribe to the CHANGE event of the data source
            $("#movies_table tbody").html(kendo.render(template, this.view())); // populate the table
        }
    });

    // read data from the "movies" array
    dataSource.read();
    
});