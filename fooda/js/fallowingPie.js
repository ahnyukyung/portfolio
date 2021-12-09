am4core.ready(function () {
    am4core.useTheme(am4themes_frozen);
    am4core.useTheme(am4themes_animated);
    am4core.options.autoSetClassName = true;

    const chart = am4core.create("fallowPie", am4charts.PieChart);
    chart.radius = am4core.percent(80);
    chart.innerRadius = am4core.percent(40);

    const color = [
        "#C348FD", "#9848FD", "#6148FD", "#3E1FFF", "#487BFD", 
        "#00A3FF", "#3CC1EB", "#3CD6EB", "#25D294", "#3DC282"
    ];
    chart.data = [
        {
            "product": "고기", "rate": 30,
            "color": color[0],
            "info": "info1"
        },
        {
            "product": "낙농품 및 조란", "rate": 36.6,
            "color": color[1],
            "info": "info2"
        },
        {
            "product": "채소 가공품", "rate": 6.6,
            "color": color[2],
            "info": "info3"
        },
        {
            "product": "채소 가공품", "rate": 10,
            "color": color[3],
            "info": "info4"
        },
        {
            "product": "콩류", "rate": 24.4,
            "color": color[4],
            "info": "info5"
        },
    ];

    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.category = "product";
    pieSeries.dataFields.value = "rate";

    const slice = pieSeries.slices.template;
    const tick = pieSeries.ticks.template;
    const label = pieSeries.labels.template;
    const tooltip = pieSeries.tooltip;

    slice.propertyFields.fill = "color";
    slice.tooltipText = "{info}"
    slice.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    tick.propertyFields.stroke = "color";
    tick.strokeWidth = 3;
    tick.strokeOpacity = 1;
    tick.length = 40;

    label.text = "{category}\n{value}%"
    label.propertyFields.fill = "color";
    label.tooltipText = "{info}";
    label.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    tooltip.getFillFromObject = false;
    tooltip.pointerOrientation = "up";
    tooltip.background.strokeWidth = 2;
    tooltip.background.stroke = "#4b48fd";
    tooltip.background.fill = "#ffffff";
    tooltip.label.fill = "#383838";
    tooltip.label.fontSize = 14;
    tooltip.dy = 20;

    const hs = slice.states.getKey("hover");
    hs.properties.scale = 1.15;
    hs.properties.innerRadius = 50;

    const as = pieSeries.slices.template.states.getKey("active");
    as.properties.shiftRadius = 0;

    const radius = 115.2;

    pieSeries.slices.template.events.on("hit", function (ev) {
        const series = ev.target.dataItem.component;
        series.slices.each(function (item) {
            console.log(item.radius);
            if (item == ev.target && item.hoverable) {
                item.radius = radius;
                item.hoverable = false;
            }
            else if (item == ev.target && !item.hoverable) {
                item.radius = radius;
                item.hoverable = true;
            }
            else {
                item.radius = radius;
                item.hoverable = true;
            }
        })
    });
});