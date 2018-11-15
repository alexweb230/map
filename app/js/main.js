$(document).ready(function () {

    $(".path").hover(
        function () {
            let data = $(this).attr('data-region');
            $('#descr').show();
            $('#descr .h4').html(data);
        },
        function () {
            $('#descr').hide();
        }
    )
    $(".path").mousemove(
        function (pos) {
            $("#descr")
                .css('left', (pos.pageX + 10) + 'px')
                .css('top', (pos.pageY + 10) + 'px');
        }
    );


});
// Load google charts

let first = "П.Порошенко",
    second = "Ю.Тимошенко",
    three = "В.Рабинович";
google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Element');
    data.addColumn('number', 'Percentage');
    data.addRows(
        [
            [first, 60],
            [second, 20],
            [three, 20]
        ]);
    var options = {'width': 600, 'height': 500};
    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
    chart.draw(data, options);
}