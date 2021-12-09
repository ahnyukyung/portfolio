am4core.ready(function() {
    const chart = am4core.create("FTAmap", am4maps.MapChart);
    const excludedCountries = ["AQ"];

    chart.geodata = am4geodata_worldLow;
    chart.projection = new am4maps.projections.Mercator();
    chart.chartContainer.wheelable = false;
    chart.seriesContainer.draggable = false;
    chart.seriesContainer.resizable = false;
    chart.maxZoomLevel = 1;
    chart.deltaLongitude = -10;

    am4core.useTheme(am4themes_frozen);
    am4core.useTheme(am4themes_animated);
    am4core.options.autoSetClassName = true;

    const originCities = [
        {
            "id": "korea",
            "title": "Koera",
            "name": "대한민국",
            "destinations": ["canada", "usa", "uk", "australia", "japan"],
            "latitude": 37.551068,
            "longitude": 126.988225,
            "scale": 1.5,
            "zoomLevel": 1,
            "zoomLongitude": -20.1341,
            "zoomLatitude": 49.1712
        }
    ];

    let destinationCities = [
        {
            "id": "canada",
            "title": "Canada",
            "name": "캐나다",
            "latitude": 49.282729,
            "longitude": -123.120738
        }, {
            "id": "usa",
            "title": "New York",
            "name": "미국",
            "latitude": 40.690381,
            "longitude": -74.056139
        }, {
            "id": "uk",
            "title": "UK",
            "name": "영국",
            "latitude": 51.500686,
            "longitude": -0.124615
        }, {
            "id": "australia",
            "title": "Australia",
            "name": "호주",
            "latitude": -35.282040,
            "longitude": 149.128684
        }, {
            "id": "japan",
            "title": "Japan",
            "name": "일본",
            "latitude": 35.655219,
            "longitude": 139.435991
        }
    ];

    let groupData = [
        {
            "data": [
                {
                    "id": "KR"
                }, {
                    "id": "CA"
                }, {
                    "id": "US"
                }, {
                    "id": "GB"
                }, {
                    "id": "AU"
                }, {
                    "id": "JP"
                }
            ]
        },
    ];

    const worldPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    worldPolygonSeries.useGeodata = true;
    worldPolygonSeries.fillOpacity = 0.8;
    worldPolygonSeries.exclude = excludedCountries;

    let series = chart.series.push(new am4maps.MapPolygonSeries());
    let mapPolygonTemplate = series.mapPolygons.template;
    let includedCountries = [];
    series.useGeodata = true;

    groupData.forEach(function(group) {
        group.data.forEach(function(country) {
            includedCountries.push(country.id);
        });
        
        series.include = includedCountries;
        mapPolygonTemplate.fill = "#ADACFB";
    });

    // Create Korea marker
    const koreaImageSeries = chart.series.push(new am4maps.MapImageSeries());
    const koreaImageTemplate = koreaImageSeries.mapImages.template;
    const korea = koreaImageTemplate.createChild(am4core.Image);
    
    koreaImageTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    korea.propertyFields.href = "flag";
    korea.width = 40;
    korea.height = 30;
    korea.dx = -30;
    korea.dy = 18;
    korea.nonScaling = true;
    korea.horizontalCenter = "middle";
    korea.verticalCenter = "center";

    // tooltip custom
    korea.tooltipText = "{title}";

    koreaImageSeries.tooltip.getFillFromObject = false;
    koreaImageSeries.tooltip.pointerOrientation = "up";
    koreaImageSeries.tooltip.background.fill = "#ffffff";
    koreaImageSeries.tooltip.background.stroke = "#4b48fd";
    koreaImageSeries.tooltip.label.fill = "#4b48fd";
    koreaImageSeries.tooltip.label.fontSize = 14;
    koreaImageSeries.tooltip.label.textAlign = "middle";
    koreaImageSeries.tooltip.dy = 23;

    koreaImageTemplate.propertyFields.latitude = "latitude";
    koreaImageTemplate.propertyFields.longitude = "longitude";

    koreaImageSeries.data = [
        {
            "latitude": 37.551068,
            "longitude": 126.988225,
            "title": "Korea",
            "enName": "korea",
            "name": "대한민국",
            "flag": "/images/flags/KR.gif",
        }
    ];


    // Create marker
    const markerImageSeries = chart.series.push(new am4maps.MapImageSeries());
    const markerImageTemplate = markerImageSeries.mapImages.template;
    var marker = markerImageTemplate.createChild(am4core.Image);
    
    markerImageTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    marker.propertyFields.href = "flag";
    marker.width = 40;
    marker.height = 22;
    marker.dx = 35
    marker.dy = -12
    marker.nonScaling = true;
    marker.horizontalCenter = "middle";
    marker.verticalCenter = "center";

    // tooltip custom
    marker.tooltipText = "{title}\n줄바꿈 가능";

    markerImageSeries.tooltip.getFillFromObject = false;
    markerImageSeries.tooltip.pointerOrientation = "up";
    markerImageSeries.tooltip.background.fill = "#ffffff";
    markerImageSeries.tooltip.background.stroke = "#4b48fd";
    markerImageSeries.tooltip.label.fill = "#4b48fd";
    markerImageSeries.tooltip.label.fontSize = 14;
    markerImageSeries.tooltip.label.textAlign = "middle";
    markerImageSeries.tooltip.dy = 18;
    markerImageSeries.tooltip.always = true;

    // Set property fields
    markerImageTemplate.propertyFields.latitude = "latitude";
    markerImageTemplate.propertyFields.longitude = "longitude";

    markerImageSeries.data = [
        {
            "latitude": 49.282729,
            "longitude": -123.120738,
            "title": "Canada",
            "enName": "canada",
            "name": "캐나다",
            "flag": "/images/flags/CA.gif",
            "clicked": false
        }, {
            "latitude": 40.690381,
            "longitude": -74.005139,
            "title": "New York",
            "enName": "usa",
            "name": "미국",
            "flag": "/images/flags/US.gif",
            "clicked": false
        }, 
        {
            "latitude": 51.500686,
            "longitude": -0.124615,
            "title": "UK",
            "enName": "uk",
            "name": "영국",
            "flag": "/images/flags/GB.gif",
        }, {
            "latitude": -35.282040,
            "longitude": 149.128684,
            "title": "Australia",
            "enName": "australia",
            "name": "호주",
            "flag": "/images/flags/AU.gif",
        }, {
            "latitude": 35.655219,
            "longitude": 139.435991,
            "title": "Japan",
            "enName": "japan",
            "name": "일본",
            "flag": "/images/flags/JP.gif",
        }
    ];

    // Origin series (big targets, Korea)
    const originImageSeries = chart.series.push(new am4maps.MapImageSeries());
    const originImageTemplate = originImageSeries.mapImages.template;
    
    originImageSeries.toBack();
    originImageTemplate.propertyFields.latitude = "latitude";
    originImageTemplate.propertyFields.longitude = "longitude";
    originImageTemplate.propertyFields.id = "id";
    
    const originLabel = originImageTemplate.createChild(am4core.Label);
    originLabel.propertyFields.text = "name";
    originLabel.background.paddingTop = -10;
    originLabel.background.paddingRight = -5;
    originLabel.background.paddingBottom = -8;
    originLabel.background.paddingLeft = -50;
    originLabel.background.strokeWidth = 3;
    originLabel.background.stroke = "#adacfb";
    originLabel.background.fill = "#4b48fd";
    originLabel.fill = "#ffffff";
    originLabel.dx = -5;
    originLabel.dy = 25;

    const originHitCircle = originImageTemplate.createChild(am4core.Circle);
    originHitCircle.radius = 6;
    originHitCircle.fill = "#ffffff";

    const originHitCircle2 = originImageTemplate.createChild(am4core.Circle);
    originHitCircle2.radius = 3;
    originHitCircle2.fill = "#000000";

    // destination series (small targets, each country)
    const destinationImageSeries = chart.series.push(new am4maps.MapImageSeries());
    const destinationImageTemplate = destinationImageSeries.mapImages.template;

    destinationImageSeries.toBack();
    destinationImageTemplate.propertyFields.latitude = "latitude";
    destinationImageTemplate.propertyFields.longitude = "longitude";
    destinationImageTemplate.propertyFields.id = "id";

    const destinationLabel = destinationImageTemplate.createChild(am4core.Label);
    destinationLabel.propertyFields.text = "name";
    destinationLabel.background.paddingTop = -5;
    destinationLabel.background.paddingRight = -5;
    destinationLabel.background.paddingBottom = -5;
    destinationLabel.background.paddingLeft = -50;
    destinationLabel.background.fill = "#383838";
    destinationLabel.background.stroke = "#adacfb";
    destinationLabel.background.strokeWidth = 0;
    destinationLabel.fill = "#ffffff";
    destinationLabel.dx = 60;
    destinationLabel.dy = -10;

    const destinationHitCircle = destinationImageTemplate.createChild(am4core.Circle);
    destinationHitCircle.radius = 6;
    destinationHitCircle.fill = "#7a77ff";

    const destinationHitCircle2 = destinationImageTemplate.createChild(am4core.Circle);
    destinationHitCircle2.radius = 3;
    destinationHitCircle2.fill = "#3230C5";

    const destinationHitCircle3 = destinationImageTemplate.createChild(am4core.Circle);
    destinationHitCircle3.radius = 0;
    destinationHitCircle3.fill = "#3230C5";
    
    destinationHitCircle3.events.on("inited", (event) => {
        animateCircle(event.target);
    });
    function animateCircle(circle) {
        let animation = circle.animate([{ property: "scale", from: 1 / chart.zoomLevel, to: 5 / chart.zoomLevel }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
        animation.events.on("animationended", function (event) {
            animateCircle(event.target.object);
        });
    }

    originImageSeries.data = originCities;
    destinationImageSeries.data = destinationCities;

    // Line series
    const lineSeries = chart.series.push(new am4maps.MapArcSeries());
    lineSeries.toBack();
    lineSeries.strokeWidth = 2;
    lineSeries.strokeDasharray = "2,8";
    lineSeries.mapLines.template.line.strokeOpacity = 1;
    lineSeries.mapLines.template.line.controlPointDistance = -0.3;
    lineSeries.mapLines.template.line.controlPointPosition = 0.4;

    chart.events.on("ready", function() {
        showLines(originImageSeries.dataItems.getIndex(0));
    });

    // marker color change
    let preData, preStyle, dataStyle, overData;
    function className(enName) {
        let class1 = document.getElementsByClassName(`amcharts-${enName}`);
        let class2 = class1[0].firstChild;

        let class3_1 = class2.firstChild;
        let class4_1 = class3_1.firstChild;

        let class3_2 = class2.childNodes[1];
        let class4_2 = class3_2.firstChild;

        let class3_3 = class2.childNodes[2];
        let class4_3 = class3_3.firstChild;

        let class3_4 = class2.childNodes[3];
        let class4_4 = class3_4.firstChild;

        let lineClass = document.getElementsByClassName(enName);

        return [class4_1, class4_2, class4_3, lineClass[0], class4_4];
    }

    let nodeIdx = -1;
    let wholeLine = document.getElementsByClassName("FTAline");

    function lightOn() {
        if (nodeIdx == -1) {
            for(let i = 0; i < wholeLine.length; i++)
                wholeLine[i].id = "";
            nodeIdx++;
        }
        else if (nodeIdx < wholeLine.length) {
            if (nodeIdx != 0) wholeLine[nodeIdx-1].id = "";
    
            wholeLine[nodeIdx].id = "lightOn";
            nodeIdx++;
        }
        else {
            for(let i = 0; i < wholeLine.length; i++) 
                wholeLine[i].id = "lightOn";
            marker.showTooltipOn = "always";
            nodeIdx = -1;
        }
    }
    let lineAnimation = setInterval(lightOn, 1000);

    function lightOff() {
        for (let i = 0; i < wholeLine.length; i ++)
            wholeLine[i].id = "";
        clearInterval(lineAnimation);
    }

    marker.events.on("over", (ev) => {
        console.log(ev);
        let data = ev.target.dataItem.dataContext;
        lightOff();

        if (preData == undefined && !data.clicked) {
            dataStyle = className(data.enName);

            dataStyle[0].style.fill = "#4b48fd";
            dataStyle[0].style.strokeWidth = 3;

            dataStyle[1].style.fill = "#ffffff";
            data.clicked = true;

            dataStyle[3].style.stroke = "#4b48fd";
            dataStyle[3].style.strokeWidth = 4;
            dataStyle[3].style.strokeDasharray = "2,10";

            dataStyle[4].style.r = 5;
            
            preData = data;
            overData = data;
        } else if (preData != undefined && !data.clicked) {
            preStyle = className(preData.enName);

            preStyle[0].style.fill = "#383838";
            preStyle[0].style.strokeWidth = 0;

            if (preData.enName != "korea") preStyle[1].style.fill = "#7a77ff";
            preData.clicked = false;

            preStyle[3].style = "";
            preStyle[4].style.r = 0;

            dataStyle = className(data.enName);

            dataStyle[0].style.fill = "#4b48fd";
            dataStyle[0].style.strokeWidth = 3;

            dataStyle[1].style.fill = "#ffffff";
            data.clicked = true;

            dataStyle[3].style.stroke = "#4b48fd";
            dataStyle[3].style.strokeWidth = 4;
            dataStyle[3].style.strokeDasharray = "2,10";

            dataStyle[4].style.r = 5;

            preData = data;
            overData = data;
        }
    });

    marker.events.on("out", () => {
        overData.clicked = false;
        overStyle = className(overData.enName);

        overStyle[0].style.fill = "#383838";
        overStyle[0].style.strokeWidth = 0;
        overStyle[1].style.fill = "#7a77ff";
        overStyle[3].style = "";
        overStyle[4].style.r = 0;

        lineAnimation = setInterval(lightOn, 1000);
    });

    function showLines(origin) {
        const dataContext = origin.dataContext;
        const destinations = dataContext.destinations;
        
        lineSeries.mapLines.clear();
        worldPolygonSeries.toBack();

        if (destinations) {
            for (let i = 0; i < destinations.length; i++) {
                var line = lineSeries.mapLines.create();
                line.imagesToConnect = [origin.mapImage.id, destinations[i]];
                line.userClassName = "FTAline";
                line.userClassName = destinations[i];
                line.stroke = "#909090";
                line.strokeLinecap = "round";
            }
        }    
    }
    
    const logo1 = document.getElementById("FTAmap");
    const logo2 = logo1.firstChild.firstChild;
    const logo3 = logo2.childNodes[1].childNodes[1].childNodes[1];
    const logo4 = logo3.firstChild.childNodes[2];
    logo4.style.display = "none";

    // filled map to back
    series.toBack();
});