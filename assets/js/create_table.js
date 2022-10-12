$(document).ready(function () {
    $('#table').DataTable(
        {
            "data": db,
            "dom": '<"wrapper"flipt>',
            "paging": false,
            "columns": [
                { title: "Name" },
                { title: "Task" },
                { title: "Visual Category" },
                { title: "Training Dataset(s)" },
                { title: "Min. Resolution" },
                { title: "License" },
                { title: "Parameters" },
                { title: "Filesize" },
                { title: "" }
            ],
            "columnDefs": [
                {
                    // The `data` parameter refers to the data for the cell (defined by the
                    // `data` option, which defaults to the column being worked with, in
                    // this case `data: 0`.
                    "render": function (data, type, row) {
                        return "<a href=\"" + row[8] + "\" alt=\"View Paper\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i></a>"
                            + "&nbsp;<a href=\"" + row[9] + "\" alt=\"View GitHub Repository\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a>";
                    },
                    "targets": 8
                },
                { "visible": false, "targets": [9] }
            ],
            "initComplete": function () {
                this.api()
                    .columns([1, 2, 3, 4, 5])
                    .every(function () {
                        var column = this;
                        var select = $('<select><option value="">-- Show all -- </option></select>')
                            .appendTo($(column.header()))
                            .on('change', function (e) {
                                var val = $.fn.dataTable.util.escapeRegex($(this).val());
                                column.search(val ? '^' + val + '$' : '', true, false).draw();
                            })
                            .on('click', function (e) {
                                e.stopPropagation();
                            });

                        column
                            .data()
                            .unique()
                            .sort()
                            .each(function (d, j) {
                                var val = $('<div/>').html(d).text();
                                select.append('<option value="' + val + '">' + val + '</option>');
                            });
                    });
            },
        }
    );
});