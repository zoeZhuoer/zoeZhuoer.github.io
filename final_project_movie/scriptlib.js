$(document).ready(function(){

     $("button#requirement").click(function() {
       var table1_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appf0n9BCBawOuIqk/%E7%94%B5%E5%BD%B1?api_key=keyLbyY2mbRiEm11i";
       var table1_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table1_items = [];
                      table1_items.push(value.fields.Name);
                      table1_items.push(value.fields.director);
                      table1_items.push(value.fields.country);
                      table1_items.push(value.fields.briefintro);
                      table1_items.push(value.fields.prize);
                      table1_dataSet.push(table1_items);
                      console.log(table1_items);
               }); // end .each
               console.log(table1_dataSet);

            $('#table1').DataTable( {
                data: table1_dataSet,
                retrieve: true,
                columns: [
                    { title: "片名",
                      defaultContent:""},
                    { title: "导演",
                        defaultContent:"" },
                    { title: "制片地区",
                      defaultContent:"" },
                    { title: "简介",
                      defaultContent:""},
                    { title: "奖项",
                        defaultContent:""},

                ]
            } );
       }); // end .getJSON
    }); // end button

        $("button#roll_up").click(function() {
          var table2_items = [];
           var i = 0;
           var airtable_read_endpoint =
           "https://api.airtable.com/v0/app0OMe22mp6O0OBh/choose%20a%20suitable%20US%20school%20for%20your%20phd%20study?api_key=keyLbyY2mbRiEm11i";
           var table2_dataSet = [];
           $.getJSON(airtable_read_endpoint, function(result) {
                  $.each(result.records, function(key,value) {
                      table2_items = [];
                          table2_items.push(value.fields.SchoolName);
                          table2_items.push(value.fields.QS_ranking);
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
                          { title: "ranking",
                            defaultContent:""},
                      ] // rmf columns
                  } ); // end dataTable

                  var chart = c3.generate({
                       data: {
                           columns: table2_dataSet,
                           type : 'bar'
                       },
                       axis: {
                         x: {label: 'schoolname'},
                         y: {label: '# of ranking'}
                       },
                       bar: {
                           title: "Tasks for Each Stage:",
                       }
                   });

            }); // end .getJSON
         }); // end button

          // $.getJSON('http://localhost/d756a/data_export.json/Computer+TV', function(obj) {

  }); // document ready
