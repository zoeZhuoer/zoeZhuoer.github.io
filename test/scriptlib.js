$(document).ready(function(){

     $("button#requirement").click(function() {
       var table1_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/app0OMe22mp6O0OBh/choose%20a%20suitable%20US%20school%20for%20your%20phd%20study?api_key=keyLbyY2mbRiEm11i";
       var table1_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table1_items = [];
                      table1_items.push(value.fields.SchoolName);
                      table1_items.push(value.fields.program_name);
                      table1_items.push(value.fields.language_requirement);
                      table1_items.push(value.fields.writing_sample_requirement);
                      table1_items.push(value.fields.educational_requirements);
                      table1_items.push(value.fields.application_deadline);
                      table1_dataSet.push(table1_items);
                      console.log(table1_items);
               }); // end .each
               console.log(table1_dataSet);

            $('#table1').DataTable( {
                data: table1_dataSet,
                retrieve: true,
                columns: [
                    { title: "Name",
                      defaultContent:""},
                    { title: "Stage",
                        defaultContent:"" },
                    { title: "Completed",
                      defaultContent:"" },
                    { title: "Time Estimated",
                      defaultContent:""},
                    { title: "Weight Factor",
                        defaultContent:""},
                    { title: "Converted",
                      defaultContent:""},
                ]
            } );
       }); // end .getJSON

         var table2_items = [];
         var i = 0;
         var airtable_read_endpoint =
         "https://api.airtable.com/v0/app0OMe22mp6O0OBh/choose%20a%20suitable%20US%20school%20for%20your%20phd%20study?api_key=keyLbyY2mbRiEm11i";
         var table2_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    table2_items = [];
                        table2_items.push(value.fields.Name);
                        table2_items.push(value.fields.Total_Entries);
                        table2_dataSet.push(table2_items);
                        console.log(table2_items);
                 }); // end .each
                 console.log(table2_dataSet);
                $('#table2').DataTable( {
                    data: table2_dataSet,
                    retrieve: true,
                    ordering: false,
                    columns: [
                        { title: "Name",
                          defaultContent:""},
                        { title: "Total Entries",
                          defaultContent:""},
                    ] // rmf columns
                } ); // end dataTable

                var chart = c3.generate({
                     data: {
                         columns: table2_dataSet,
                         type : 'bar'
                     },
                     bar: {
                         title: "Tasks for Each Stage:",
                     }
                 });

          }); // end .getJSON
       }); // end button

        // $.getJSON('http://localhost/d756a/data_export.json/Computer+TV', function(obj) {

}); // document ready
