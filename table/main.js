(function ($) {
    

    $(document).ready(function () { 
        var table = $('#example').DataTable({
             "pageLength": 13, // or 14
            "lengthChange": false,
            select: true, // enable select extension
            searching: true,
            dom: 'lrtip', // Remove default search elements
            language: {
                info: ''
            },
            ajax: 'data.json',
            columns: [
                
                { data: 'name' },
                { data: 'agency' },
                { data: 'location' },
                { data: 'date' },
            ],
            columnDefs: [
                { targets: [2], orderable: true },
        { targets: '_all', orderable: false },
                {
                targets: 0,
                    render: function (data, type, row, meta) {
                        // console.log(row);
                    return '<span class="arrow-icon"></span><span class="status '+row.status+'"></span>'+row.name+'<span class="type_c '+row.type+' ">    </span>'
                }
                }
            ],
            drawCallback: function(settings) {
                var api = this.api();
                var pageInfo = api.page.info();
                var info = 'Showing ' + (pageInfo.start + 1) + ' to ' + pageInfo.end + ' of ' + pageInfo.recordsTotal + ' entries';
                if (api.search() && total > 0) {
                    info += ' (filtered from ' + total + ' total entries)';
                }
                $('#searchResults').text(info);
            }
        
        });

        $('#myTable_search').on('keyup', function() {
            table.search(this.value).draw();
        });

        // Add event listener for opening and closing details
        $('#example tbody').on('click', 'tr', function () {
            var tr = $(this).closest('tr');
            var row = table.row(tr);
    
            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            } else {
                // Open this row
                row.child(format(row.data())).show();
                tr.addClass('shown');
            }
        });

        $('#filterSelect').on('change', function() {
            var selectedValue = $(this).val();
            if (selectedValue) {
            // Filter the table by the selected value
            $('#example').DataTable().column(1).search(selectedValue).draw();
            } else {
            // Remove any filters
            $('#example').DataTable().column(1).search('').draw();
            }
        });

    });


})(jQuery)
function format (data) {
    return (
        `<div class="info-container ${ data.status }">
            <p>${data.description}</p>
            <p><span>Alleged or reported connotation:</span> ${data.connotation}</p>
            <p><span>Identity:</span> ${data.identity}</p>
            <p><span>As reported by</span> ${data.source}</p>
        </div>`
    );
}