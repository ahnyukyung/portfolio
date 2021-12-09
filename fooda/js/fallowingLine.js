am4core.ready(function () {
    am4core.useTheme(am4themes_animated);

    let fallowLineLen = document.getElementsByClassName("fallowLine").length;
    let data = [
        {
            "date": 2019,
            "growth": Math.round(Math.random() * 98 + 1),
            "occupy": Math.round(Math.random() * 98 + 1),
            "dollar": Math.round(Math.random() * 98 + 1)
        },
        {
            "date": 2020,
            "growth": Math.round(Math.random() * 98 + 1),
            "occupy": Math.round(Math.random() * 98 + 1),
            "dollar": Math.round(Math.random() * 98 + 1)
        },
        {
            "date": 2021,
            "growth": 99,
            "occupy": Math.round(Math.random() * 98 + 1),
            "dollar": 1
        },
    ];

    for (let i = 0; i < fallowLineLen; i++) {
        const chart = am4core.create(`fallowLine${i}`, am4charts.XYChart);
        // const chart = am4core.create(`fallowLine`, am4charts.XYChart);
        chart.data = data;
        chart.width = 290;
        chart.dx = -40;
        chart.padding(0, 0, 0, 0);

        const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.disabled = true;
        dateAxis.renderer.labels.template.disabled = true;

        function createAxisAndSeries(field, name, color) {
            const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

            valueAxis.min = 0;
            valueAxis.max = 100;
            valueAxis.renderer.baseGrid.disabled = true;
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;

            const series = chart.series.push(new am4charts.LineSeries());
            series.userClassName = field;
            series.dataFields.valueY = field;
            series.dataFields.dateX = "date";
            series.stroke = color;
            series.strokeWidth = 2;
            series.yAxis = valueAxis;
            series.name = name;
            series.tensionX = 0.8;

            series.tooltip.getFillFromObject = false;
            series.tooltip.dy = -5;
            series.tooltip.background.fill = "#ffffff";
            series.tooltip.background.stroke = "#4b48fd";
            series.tooltip.label.fill = "#383838";
            series.tooltip.label.fontSize = 13;
            series.tooltip.label.textAlign = "middle";
            series.tooltip.pointerOrientation = "down";

            var bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.fill = color;
            bullet.circle.stroke = color;
            bullet.circle.radius = 2;
            bullet.circle.tooltipText = "{name} {valueY}%";
            bullet.circle.cursorOverStyle = am4core.MouseCursorStyle.pointer;
        }
 
        for (let j = 0; j < 2; j++)
            document.getElementsByClassName(`lable${j}`)[i].innerHTML = data[j].date;
        document.getElementsByClassName("lable2")[i].innerHTML = "현재";

        createAxisAndSeries("growth", "성장률", "#4B48FD");
        createAxisAndSeries("occupy", "점유율", "#DD425A");
        createAxisAndSeries("dollar", "수입금액", "#909090");
    }
});