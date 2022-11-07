google.charts.load("current", {'packages': ['corechart', 'bar', 'scatter']});
google.charts.setOnLoadCallback(drawCOxMAPChart);
// google.charts.setOnLoadCallback(drawCOxETCO2Chart);
google.charts.setOnLoadCallback(drawRSO2Chart);
google.charts.setOnLoadCallback(drawMAPChart);
// google.charts.setOnLoadCallback(drawETCO2Chart);
google.charts.setOnLoadCallback(drawSJVO2Chart);
// google.charts.setOnLoadCallback(drawAJDLChart);
// google.charts.setOnLoadCallback(drawLOIChart);
google.charts.setOnLoadCallback(drawAJDO2Chart);
google.charts.setOnLoadCallback(drawCEO2Chart);
// google.charts.setOnLoadCallback(drawAJglcChart);
// google.charts.setOnLoadCallback(drawAJCO2Chart);
// google.charts.setOnLoadCallback(drawRQChart);
google.charts.setOnLoadCallback(drawNPIChart);
google.charts.setOnLoadCallback(drawPupilChart);
google.charts.setOnLoadCallback(drawModalMAPLeftChart);
google.charts.setOnLoadCallback(drawModalMAPRightChart);
google.charts.setOnLoadCallback(drawModalMAPMeanChart);
google.charts.setOnLoadCallback(drawMAPRSO2Chart);
google.charts.setOnLoadCallback(drawModalETCO2LeftChart);
google.charts.setOnLoadCallback(drawModalETCO2RightChart);
google.charts.setOnLoadCallback(drawModalETCO2MeanChart);
google.charts.setOnLoadCallback(drawETCO2RSO2Chart);


let jsonData = $.ajax({
    url: "./../data/2_common.json",
    dataType: "json",
    async: false
}).responseText;

jsonData = JSON.parse(jsonData)
const dataValue = Object.values(jsonData)

// 5분 단위로 CoxMAP, CoxETCO2 등이 찍히는 시간표
let nullArray_CoxTime = []
for (let i in dataValue[14]) {
    nullArray_CoxTime.push(null)
}

// 1분 단위로 MAP, RSO2 등이 찍히는 시간표
let nullArray_timestamp = []
for (let i in dataValue[5]) {
    nullArray_timestamp.push(null)
}

let minInterval = -1
let maxInterval = 1

arrayCoxTime_1 = [...nullArray_CoxTime]
arrayCoxTime_2 = [...nullArray_CoxTime]
arrayCoxTime_3 = [...nullArray_CoxTime]

arrayTimestamp_1 = [...nullArray_timestamp]
arrayTimestamp_2 = [...nullArray_timestamp]
arrayTimestamp_3 = [...nullArray_timestamp]

const interventionCoxTime = (minInterval, maxInterval) => {
// 2020/3/4  14:59
    arrayCoxTime_1[6] = minInterval
    arrayCoxTime_2[6] = maxInterval
    arrayCoxTime_3[6] = "shivering control"

// 2020/3/4 15:46
    arrayCoxTime_1[15] = minInterval
    arrayCoxTime_2[15] = maxInterval
    arrayCoxTime_3[15] = "increase sedation"

// 2020/3/4 15:57
    arrayCoxTime_1[17] = minInterval
    arrayCoxTime_2[17] = maxInterval
    arrayCoxTime_3[17] = "fluid infusion"

// 2020/3/4 16:00
    arrayCoxTime_1[18] = minInterval
    arrayCoxTime_2[18] = maxInterval
    arrayCoxTime_3[18] = "adjust ventilation"

// 2020/3/4 16:01
    arrayCoxTime_1[19] = minInterval
    arrayCoxTime_2[19] = maxInterval
    arrayCoxTime_3[19] = "increase sedation"

// 2020/3/4 16:30
    arrayCoxTime_1[24] = minInterval
    arrayCoxTime_2[24] = maxInterval
    arrayCoxTime_3[24] = "start NMB"

// 2020/3/4 17:00
    arrayCoxTime_1[30] = minInterval
    arrayCoxTime_2[30] = maxInterval
    arrayCoxTime_3[30] = "TTM Target temperature"

// 2020/3/4 19:00
    arrayCoxTime_1[54] = minInterval
    arrayCoxTime_2[54] = maxInterval
    arrayCoxTime_3[54] = "adjust ventilation"

// 2020/3/5 02:27
    arrayCoxTime_1[144] = minInterval
    arrayCoxTime_2[144] = maxInterval
    arrayCoxTime_3[144] = "vasopressor increase"

// 2020/3/5 04:12
    arrayCoxTime_1[164] = minInterval
    arrayCoxTime_2[164] = maxInterval
    arrayCoxTime_3[164] = "vasopressor increase"

// 2020/3/5 06:00
    arrayCoxTime_1[186] = minInterval
    arrayCoxTime_2[186] = maxInterval
    arrayCoxTime_3[186] = "increase sedation"

// 2020/3/5 07:40
    arrayCoxTime_1[206] = minInterval
    arrayCoxTime_2[206] = maxInterval
    arrayCoxTime_3[206] = "vasopressor increase"

// 2020/3/5 09:00
    arrayCoxTime_1[222] = minInterval
    arrayCoxTime_2[222] = maxInterval
    arrayCoxTime_3[222] = "adjust ventilation"

// 2020/3/5 09:20
    arrayCoxTime_1[226] = minInterval
    arrayCoxTime_2[226] = maxInterval
    arrayCoxTime_3[226] = "vasopressor increase"

// 2020/3/5 09:56 * 3
    arrayCoxTime_1[233] = minInterval
    arrayCoxTime_2[233] = maxInterval
    arrayCoxTime_3[233] = "increase sedation, stop NMB, fluid infusion"

// 2020/3/5 10:22
    arrayCoxTime_1[238] = minInterval
    arrayCoxTime_2[238] = maxInterval
    arrayCoxTime_3[238] = "fluid infusion"

// 2020/3/5 11:01
    arrayCoxTime_1[246] = minInterval
    arrayCoxTime_2[246] = maxInterval
    arrayCoxTime_3[246] = "fluid infusion"

// 2020/3/5 12:02
    arrayCoxTime_1[258] = minInterval
    arrayCoxTime_2[258] = maxInterval
    arrayCoxTime_3[258] = "fluid infusion"

// 2020/3/5 12:27
    arrayCoxTime_1[264] = minInterval
    arrayCoxTime_2[264] = maxInterval
    arrayCoxTime_3[264] = "increase sedation"

// 2020/3/5 13:10
    arrayCoxTime_1[272] = minInterval
    arrayCoxTime_2[272] = maxInterval
    arrayCoxTime_3[272] = "start sedation"

// 2020/3/5 13:14
    arrayCoxTime_1[273] = minInterval
    arrayCoxTime_2[273] = maxInterval
    arrayCoxTime_3[273] = "vasopressor increase"

// 2020/3/5 13:30 * 2
    arrayCoxTime_1[276] = minInterval
    arrayCoxTime_2[276] = maxInterval
    arrayCoxTime_3[276] = "fluid infusion, increase sedation"

// 2020/3/5 13:36
    arrayCoxTime_1[277] = minInterval
    arrayCoxTime_2[277] = maxInterval
    arrayCoxTime_3[277] = "shivering control"

// 2020/3/5 14:00
    arrayCoxTime_1[282] = minInterval
    arrayCoxTime_2[282] = maxInterval
    arrayCoxTime_3[282] = "adjust ventilation"

// 2020/3/5 14:02
    arrayCoxTime_1[283] = minInterval
    arrayCoxTime_2[283] = maxInterval
    arrayCoxTime_3[283] = "fluid infusion"

// 2020/3/5 14:20
    arrayCoxTime_1[286] = minInterval
    arrayCoxTime_2[286] = maxInterval
    arrayCoxTime_3[286] = "shivering control"

// 2020/3/5 14:30
    arrayCoxTime_1[288] = minInterval
    arrayCoxTime_2[288] = maxInterval
    arrayCoxTime_3[288] = "shivering control"

// 2020/3/5 17:00
    arrayCoxTime_1[318] = minInterval
    arrayCoxTime_2[318] = maxInterval
    arrayCoxTime_3[318] = "TTM start rewarming"

// 2020/3/5 20:01
    arrayCoxTime_1[354] = minInterval
    arrayCoxTime_2[354] = maxInterval
    arrayCoxTime_3[354] = "adjust ventilation"

// 2020/3/6 16:00
    arrayCoxTime_1[594] = minInterval
    arrayCoxTime_2[594] = maxInterval
    arrayCoxTime_3[594] = "TTM start normothermia"

// 2020/3/6 18:00
    arrayCoxTime_1[618] = minInterval
    arrayCoxTime_2[618] = maxInterval
    arrayCoxTime_3[618] = "increase sedation"

// 2020/3/6 19:47
    arrayCoxTime_1[639] = minInterval
    arrayCoxTime_2[639] = maxInterval
    arrayCoxTime_3[639] = "increase sedation"

// 2020/3/6 20:11
    arrayCoxTime_1[644] = minInterval
    arrayCoxTime_2[644] = maxInterval
    arrayCoxTime_3[644] = "increase sedation"

// 2020/3/6 21:10
    arrayCoxTime_1[656] = minInterval
    arrayCoxTime_2[656] = maxInterval
    arrayCoxTime_3[656] = "increase sedation"

// 2020/3/6 21:56
    arrayCoxTime_1[665] = minInterval
    arrayCoxTime_2[665] = maxInterval
    arrayCoxTime_3[665] = "increase sedation"

// 2020/3/6 22:25
    arrayCoxTime_1[671] = minInterval
    arrayCoxTime_2[671] = maxInterval
    arrayCoxTime_3[671] = "dextrose infusion"

// 2020/3/6 23:33
    arrayCoxTime_1[685] = minInterval
    arrayCoxTime_2[685] = maxInterval
    arrayCoxTime_3[685] = "shivering control"

// 2020/3/7 02:43
    arrayCoxTime_1[723] = minInterval
    arrayCoxTime_2[723] = maxInterval
    arrayCoxTime_3[723] = "adjust ventilation"

// 2020/3/7 03:50
    arrayCoxTime_1[736] = minInterval
    arrayCoxTime_2[736] = maxInterval
    arrayCoxTime_3[736] = "adjust ventilation"

// 2020/3/7 06:30
    arrayCoxTime_1[768] = minInterval
    arrayCoxTime_2[768] = maxInterval
    arrayCoxTime_3[768] = "TTM stop"
}

const interventionTimestamp = (minInterval, maxInterval) => {

// 2020/3/4  14:59
    arrayTimestamp_1[30] = minInterval
    arrayTimestamp_2[30] = maxInterval
    arrayTimestamp_3[30] = "shivering control"

// 2020/3/4 15:46
    arrayTimestamp_1[75] = minInterval
    arrayTimestamp_2[75] = maxInterval
    arrayTimestamp_3[75] = "increase sedation"

// 2020/3/4 15:57
    arrayTimestamp_1[85] = minInterval
    arrayTimestamp_2[85] = maxInterval
    arrayTimestamp_3[85] = "fluid infusion"

// 2020/3/4 16:00
    arrayTimestamp_1[90] = minInterval
    arrayTimestamp_2[90] = maxInterval
    arrayTimestamp_3[90] = "adjust ventilation"

// 2020/3/4 16:01
    arrayTimestamp_1[95] = minInterval
    arrayTimestamp_2[95] = maxInterval
    arrayTimestamp_3[95] = "increase sedation"

// 2020/3/4 16:30
    arrayTimestamp_1[120] = minInterval
    arrayTimestamp_2[120] = maxInterval
    arrayTimestamp_3[120] = "start NMB"

// 2020/3/4 17:00
    arrayTimestamp_1[150] = minInterval
    arrayTimestamp_2[150] = maxInterval
    arrayTimestamp_3[150] = "TTM Target temperature"

// 2020/3/4 19:00
    arrayTimestamp_1[270] = minInterval
    arrayTimestamp_2[270] = maxInterval
    arrayTimestamp_3[270] = "adjust ventilation"

// 2020/3/5 02:27
    arrayTimestamp_1[720] = minInterval
    arrayTimestamp_2[720] = maxInterval
    arrayTimestamp_3[720] = "vasopressor increase"

// 2020/3/5 04:12
    arrayTimestamp_1[820] = minInterval
    arrayTimestamp_2[820] = maxInterval
    arrayTimestamp_3[820] = "vasopressor increase"

// 2020/3/5 06:00
    arrayTimestamp_1[930] = minInterval
    arrayTimestamp_2[930] = maxInterval
    arrayTimestamp_3[930] = "increase sedation"

// 2020/3/5 07:40
    arrayTimestamp_1[1030] = minInterval
    arrayTimestamp_2[1030] = maxInterval
    arrayTimestamp_3[1030] = "vasopressor increase"

// 2020/3/5 09:00
    arrayTimestamp_1[1110] = minInterval
    arrayTimestamp_2[1110] = maxInterval
    arrayTimestamp_3[1110] = "adjust ventilation"

// 2020/3/5 09:20
    arrayTimestamp_1[1130] = minInterval
    arrayTimestamp_2[1130] = maxInterval
    arrayTimestamp_3[1130] = "vasopressor increase"

// 2020/3/5 09:56 * 3
    arrayTimestamp_1[1170] = minInterval
    arrayTimestamp_2[1170] = maxInterval
    arrayTimestamp_3[1170] = "increase sedation, stop NMB, fluid infusion"

// 2020/3/5 10:22
    arrayTimestamp_1[1190] = minInterval
    arrayTimestamp_2[1190] = maxInterval
    arrayTimestamp_3[1190] = "fluid infusion"

// 2020/3/5 11:01
    arrayTimestamp_1[1230] = minInterval
    arrayTimestamp_2[1230] = maxInterval
    arrayTimestamp_3[1230] = "fluid infusion"

// 2020/3/5 12:02
    arrayTimestamp_1[1290] = minInterval
    arrayTimestamp_2[1290] = maxInterval
    arrayTimestamp_3[1290] = "fluid infusion"

// 2020/3/5 12:27
    arrayTimestamp_1[1320] = minInterval
    arrayTimestamp_2[1320] = maxInterval
    arrayTimestamp_3[1320] = "increase sedation"

// 2020/3/5 13:10
    arrayTimestamp_1[1360] = minInterval
    arrayTimestamp_2[1360] = maxInterval
    arrayTimestamp_3[1360] = "start sedation"

// 2020/3/5 13:14
    arrayTimestamp_1[1365] = minInterval
    arrayTimestamp_2[1365] = maxInterval
    arrayTimestamp_3[1365] = "vasopressor increase"

// 2020/3/5 13:30 * 2
    arrayTimestamp_1[1380] = minInterval
    arrayTimestamp_2[1380] = maxInterval
    arrayTimestamp_3[1380] = "fluid infusion, increase sedation"

// 2020/3/5 13:36
    arrayTimestamp_1[1385] = minInterval
    arrayTimestamp_2[1385] = maxInterval
    arrayTimestamp_3[1385] = "shivering control"

// 2020/3/5 14:00
    arrayTimestamp_1[1410] = minInterval
    arrayTimestamp_2[1410] = maxInterval
    arrayTimestamp_3[1410] = "adjust ventilation"

// 2020/3/5 14:02
    arrayTimestamp_1[1415] = minInterval
    arrayTimestamp_2[1415] = maxInterval
    arrayTimestamp_3[1415] = "fluid infusion"

// 2020/3/5 14:20
    arrayTimestamp_1[1430] = minInterval
    arrayTimestamp_2[1430] = maxInterval
    arrayTimestamp_3[1430] = "shivering control"

// 2020/3/5 14:30
    arrayTimestamp_1[1440] = minInterval
    arrayTimestamp_2[1440] = maxInterval
    arrayTimestamp_3[1440] = "shivering control"

// 2020/3/5 17:00
    arrayTimestamp_1[1590] = minInterval
    arrayTimestamp_2[1590] = maxInterval
    arrayTimestamp_3[1590] = "TTM start rewarming"

// 2020/3/5 20:01
    arrayTimestamp_1[1770] = minInterval
    arrayTimestamp_2[1770] = maxInterval
    arrayTimestamp_3[1770] = "adjust ventilation"

// 2020/3/6 16:00
    arrayTimestamp_1[2970] = minInterval
    arrayTimestamp_2[2970] = maxInterval
    arrayTimestamp_3[2970] = "TTM start normothermia"

// 2020/3/6 18:00
    arrayTimestamp_1[3090] = minInterval
    arrayTimestamp_2[3090] = maxInterval
    arrayTimestamp_3[3090] = "increase sedation"

// 2020/3/6 19:47
    arrayTimestamp_1[3200] = minInterval
    arrayTimestamp_2[3200] = maxInterval
    arrayTimestamp_3[3200] = "increase sedation"

// 2020/3/6 20:11
    arrayTimestamp_1[3220] = minInterval
    arrayTimestamp_2[3220] = maxInterval
    arrayTimestamp_3[3220] = "increase sedation"

// 2020/3/6 21:10
    arrayTimestamp_1[3280] = minInterval
    arrayTimestamp_2[3280] = maxInterval
    arrayTimestamp_3[3280] = "increase sedation"

// 2020/3/6 21:56
    arrayTimestamp_1[3325] = minInterval
    arrayTimestamp_2[3325] = maxInterval
    arrayTimestamp_3[3325] = "increase sedation"

// 2020/3/6 22:25
    arrayTimestamp_1[3355] = minInterval
    arrayTimestamp_2[3355] = maxInterval
    arrayTimestamp_3[3355] = "dextrose infusion"

// 2020/3/6 23:33
    arrayTimestamp_1[3425] = minInterval
    arrayTimestamp_2[3425] = maxInterval
    arrayTimestamp_3[3425] = "shivering control"

// 2020/3/7 02:43
    arrayTimestamp_1[3615] = minInterval
    arrayTimestamp_2[3615] = maxInterval
    arrayTimestamp_3[3615] = "adjust ventilation"

// 2020/3/7 03:50
    arrayTimestamp_1[3680] = minInterval
    arrayTimestamp_2[3680] = maxInterval
    arrayTimestamp_3[3680] = "adjust ventilation"

// 2020/3/7 06:30
    arrayTimestamp_1[3840] = minInterval
    arrayTimestamp_2[3840] = maxInterval
    arrayTimestamp_3[3840] = "TTM stop"
}


function drawCOxMAPChart() {
    const data = new google.visualization.DataTable(jsonData);
    interventionCoxTime(-1, 1)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'normal range');
    data.addColumn('number', 'Left');
    data.addColumn('number', 'Right');
    data.addColumn('number', 'average');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn({'type': 'string', 'role': 'tooltip'});

    for (let i in dataValue[14]) {
        let timestamp = String(dataValue[14][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            0.3,
            parseFloat(dataValue[15][i]),
            parseFloat(dataValue[16][i]),
            parseFloat(dataValue[17][i]),
            parseInt(arrayCoxTime_1[i]),
            parseInt(arrayCoxTime_1[i]),
            parseInt(arrayCoxTime_2[i]),
            parseInt(arrayCoxTime_2[i]),
            arrayCoxTime_3[i],
        ]);
    }

    const options = {
        colors: ['darkslategray', '#FAA7B8', '#6096FD', 'darkseagreen', '#a29380'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: 'none',
        fontSize: 15,
        pointSize: 0,
        lineWidth: 0.5,
        seriesType: 'line',
        series: {
            0: {
                type: 'area',
                areaOpacity: 0.6
            },
            3: {
                lineWidth: 2
            },
            4: {
                type: 'candlesticks',
            },
        },
        candlestick: {
            fallingColor: {strokeWidth: 0, fill: 'transparent'},
            risingColor: {strokeWidth: 0, fill: 'transparent'},
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                },
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            },
        },
        vAxis: {
            title: "COx MAP",
            ticks: [-1, 0, 0.3, 1],
            baseline: -1,
            gridlineColor: '#777',
        },
        chartArea: {
            width: '97%',
            height: '73%'
        }
    };

    var chart_COxMAP = new google.visualization.ComboChart(document.getElementById('chart_COxMAP'));
    chart_COxMAP.draw(data, options);
}

function drawCOxETCO2Chart() {
    const data = new google.visualization.DataTable(jsonData);
    interventionCoxTime(-1, 1)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'Left');
    data.addColumn('number', 'Right');
    data.addColumn('number', 'Average');

    for (let i in dataValue[14]) {
        let timestamp = String(dataValue[14][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseFloat(dataValue[18][i]),
            parseFloat(dataValue[19][i]),
            parseFloat(dataValue[20][i]),
        ]);
    }

    const options = {
        colors: ['#FAA7B8', '#6096FD', 'darkseagreen'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: 'none',
        fontSize: 15,
        pointSize: 1.5,
        lineWidth: 2,
        intervals: {
            color: "#a29380"
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "COx ETCO2",
            ticks: [-1, 0, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '97%',
            height: '73%'
        }
    };

    var chart_COxETCO2 = new google.visualization.LineChart(document.getElementById('chart_COxETCO2'));
    chart_COxETCO2.draw(data, options);
}

function drawRSO2Chart() {
    const data = new google.visualization.DataTable(jsonData);
    interventionTimestamp(0, 100)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'normal range')
    data.addColumn('number', 'Left');
    data.addColumn('number', 'Right');
    data.addColumn('number', 'average');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn({'type': 'string', 'role': 'tooltip'});

    for (let i in dataValue[5]) {
        let timestamp = String(dataValue[5][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            58.99,
            parseFloat(dataValue[1][i]),
            parseFloat(dataValue[2][i]),
            parseFloat(dataValue[3][i]),
            parseInt(arrayTimestamp_1[i]),
            parseInt(arrayTimestamp_1[i]),
            parseInt(arrayTimestamp_2[i]),
            parseInt(arrayTimestamp_2[i]),
            arrayTimestamp_3[i],
        ]);
    }

    const options = {
        colors: ['darkslategray', '#FAA7B8', '#6096FD', 'darkseagreen', '#a29380', '#FAA7B8', '#6096FD'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: '100%',
        legend: 'none',
        fontSize: 15,
        pointSize: 0,
        lineWidth: 0.5,
        seriesType: 'line',
        series: {
            0: {
                type: 'area',
                areaOpacity: 0.6
            },
            3: {
                lineWidth: 2
            },
            4: {
                type: 'candlesticks',
            },
        },
        candlestick: {
            fallingColor: {strokeWidth: 0, fill: 'transparent'},
            risingColor: {strokeWidth: 0, fill: 'transparent'},
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                },
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "RSO2",
            baseline: 100,
            baselineColor: '#777',
            gridlineColor: '#777',
            ticks: [0, 50, 100],
        },
        chartArea: {
            width: '97%',
            height: '73%'
        }
    };

    var chart_RSO2 = new google.visualization.ComboChart(document.getElementById('chart_RSO2'));
    chart_RSO2.draw(data, options);
}

function drawMAPChart() {
    var data = new google.visualization.DataTable();
    interventionTimestamp(0, 200)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'OP_BP_min1');
    data.addColumn('number', 'OP_BP_min2');
    data.addColumn('number', 'OP_BP_max1');
    data.addColumn('number', 'OP_BP_max2');
    data.addColumn('number', 'MAP');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn({'type': 'string', 'role': 'tooltip'});

    for (let i in dataValue[5]) {
        let timestamp = String(dataValue[5][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseInt(dataValue[21].min[i]),
            parseInt(dataValue[21].max[i]),
            parseInt(dataValue[21].min[i]),
            parseInt(dataValue[21].max[i]),
            parseFloat(dataValue[0][i]),
            parseInt(arrayTimestamp_1[i]),
            parseInt(arrayTimestamp_1[i]),
            parseInt(arrayTimestamp_2[i]),
            parseInt(arrayTimestamp_2[i]),
            arrayTimestamp_3[i],
        ]);
    }

    var options = {
        colors: ['#FAA7B8', 'darkseagreen', '#a29380'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 0,
        lineWidth: 2,
        seriesType: 'candlesticks',
        series: {
            1: {
                type: 'line',
            },
        },
        candlestick: {
            fallingColor: {strokeWidth: 0, fill: 'transparent'},
            risingColor: {strokeWidth: 0, fill: 'transparent'}
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "MAP",
            ticks: [0, 50, 100, 150, 200],
            baselineColor: '#777',
            gridlineColor: '#777',
        },
        chartArea: {
            width: '97%',
            height: '73%'
        },
    };

    var chart_MAP = new google.visualization.ComboChart(document.getElementById('chart_MAP'));
    chart_MAP.draw(data, options);
}

function drawETCO2Chart() {
    var data = new google.visualization.DataTable();
    interventionTimestamp(0, 60)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'OP_BP_min1');
    data.addColumn('number', 'OP_BP_min2');
    data.addColumn('number', 'OP_BP_max1');
    data.addColumn('number', 'OP_BP_max2');
    data.addColumn('number', 'ETCO2');

    for (let i in dataValue[5]) {
        let timestamp = String(dataValue[5][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseFloat(dataValue[22].min[i]),
            parseFloat(dataValue[22].max[i]),
            parseFloat(dataValue[22].min[i]),
            parseFloat(dataValue[22].max[i]),
            parseFloat(dataValue[4][i]),
        ]);
    }

    var options = {
        colors: ['#FAA7B8', '#6096FD'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 0,
        lineWidth: 2,
        intervals: {
            color: "#a29380"
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "ETCO2",
            ticks: [0, 10, 20, 30, 40, 50, 60],
            baselineColor: '#777',
            gridlineColor: '#777',
        },
        chartArea: {
            width: '97%',
            height: '73%'
        },
        seriesType: 'candlesticks',
        series: {
            1: {
                type: 'line',
                color: 'darkseagreen'
            },
        },
        bar: {groupWidth: '20%'},
        candlestick: {
            fallingColor: {strokeWidth: 0, fill: '#FAA7B8'},
            risingColor: {strokeWidth: 0, fill: '#FAA7B8'}
        }
    };

    var chart_ETCO2 = new google.visualization.ComboChart(document.getElementById('chart_ETCO2'));
    chart_ETCO2.draw(data, options);
}


let jsonData_input = $.ajax({
    url: "./../data/2_input.json",
    dataType: "json",
    async: false
}).responseText;

jsonData_input = JSON.parse(jsonData_input)
const dataValue_input = Object.values(jsonData_input)

// input에 의해 SJVO2, AJDO2 등이 찍히는 시간표
let nullArray_inputChart = []
for (let i in dataValue_input[0]) {
    nullArray_inputChart.push(null)
}

dataValue_input[4] = [...nullArray_inputChart]
dataValue_input[5] = [...nullArray_inputChart]
dataValue_input[6] = [...nullArray_inputChart]

const interventionInput = (minInterval, maxInterval) => {
// 2020/3/4  14:59
    dataValue_input[4][6] = minInterval
    dataValue_input[5][6] = maxInterval
    dataValue_input[6][6] = "shivering control"

// 2020/3/4 15:46
    dataValue_input[4][15] = minInterval
    dataValue_input[5][15] = maxInterval
    dataValue_input[6][15] = "increase sedation"

// 2020/3/4 15:57
    dataValue_input[4][17] = minInterval
    dataValue_input[5][17] = maxInterval
    dataValue_input[6][17] = "fluid infusion"

// 2020/3/4 16:00
    dataValue_input[4][18] = minInterval
    dataValue_input[5][18] = maxInterval
    dataValue_input[6][18] = "adjust ventilation"

// 2020/3/4 16:01
    dataValue_input[4][19] = minInterval
    dataValue_input[5][19] = maxInterval
    dataValue_input[6][19] = "increase sedation"

// 2020/3/4 16:30
    dataValue_input[4][24] = minInterval
    dataValue_input[5][24] = maxInterval
    dataValue_input[6][24] = "start NMB"

// 2020/3/4 17:00
    dataValue_input[4][30] = minInterval
    dataValue_input[5][30] = maxInterval
    dataValue_input[6][30] = "TTM Target temperature"

// 2020/3/4 19:00
    dataValue_input[4][54] = minInterval
    dataValue_input[5][54] = maxInterval
    dataValue_input[6][54] = "adjust ventilation"

// 2020/3/5 02:27
    dataValue_input[4][144] = minInterval
    dataValue_input[5][144] = maxInterval
    dataValue_input[6][144] = "vasopressor increase"

// 2020/3/5 04:12
    dataValue_input[4][164] = minInterval
    dataValue_input[5][164] = maxInterval
    dataValue_input[6][164] = "vasopressor increase"

// 2020/3/5 06:00
    dataValue_input[4][186] = minInterval
    dataValue_input[5][186] = maxInterval
    dataValue_input[6][186] = "increase sedation"

// 2020/3/5 07:40
    dataValue_input[4][206] = minInterval
    dataValue_input[5][206] = maxInterval
    dataValue_input[6][206] = "vasopressor increase"

// 2020/3/5 09:00
    dataValue_input[4][222] = minInterval
    dataValue_input[5][222] = maxInterval
    dataValue_input[6][222] = "adjust ventilation"

// 2020/3/5 09:20
    dataValue_input[4][226] = minInterval
    dataValue_input[5][226] = maxInterval
    dataValue_input[6][226] = "vasopressor increase"

// 2020/3/5 09:56 * 3
    dataValue_input[4][233] = minInterval
    dataValue_input[5][233] = maxInterval
    dataValue_input[6][233] = "increase sedation, stop NMB, fluid infusion"

// 2020/3/5 10:22
    dataValue_input[4][238] = minInterval
    dataValue_input[5][238] = maxInterval
    dataValue_input[6][238] = "fluid infusion"

// 2020/3/5 11:01
    dataValue_input[4][246] = minInterval
    dataValue_input[5][246] = maxInterval
    dataValue_input[6][246] = "fluid infusion"

// 2020/3/5 12:02
    dataValue_input[4][258] = minInterval
    dataValue_input[5][258] = maxInterval
    dataValue_input[6][258] = "fluid infusion"

// 2020/3/5 12:27
    dataValue_input[4][264] = minInterval
    dataValue_input[5][264] = maxInterval
    dataValue_input[6][264] = "increase sedation"

// 2020/3/5 13:10
    dataValue_input[4][272] = minInterval
    dataValue_input[5][272] = maxInterval
    dataValue_input[6][272] = "start sedation"

// 2020/3/5 13:14
    dataValue_input[4][273] = minInterval
    dataValue_input[5][273] = maxInterval
    dataValue_input[6][273] = "vasopressor increase"

// 2020/3/5 13:30 * 2
    dataValue_input[4][276] = minInterval
    dataValue_input[5][276] = maxInterval
    dataValue_input[6][276] = "fluid infusion, increase sedation"

// 2020/3/5 13:36
    dataValue_input[4][277] = minInterval
    dataValue_input[5][277] = maxInterval
    dataValue_input[6][277] = "shivering control"

// 2020/3/5 14:00
    dataValue_input[4][282] = minInterval
    dataValue_input[5][282] = maxInterval
    dataValue_input[6][282] = "adjust ventilation"

// 2020/3/5 14:02
    dataValue_input[4][283] = minInterval
    dataValue_input[5][283] = maxInterval
    dataValue_input[6][283] = "fluid infusion"

// 2020/3/5 14:20
    dataValue_input[4][286] = minInterval
    dataValue_input[5][286] = maxInterval
    dataValue_input[6][286] = "shivering control"

// 2020/3/5 14:30
    dataValue_input[4][288] = minInterval
    dataValue_input[5][288] = maxInterval
    dataValue_input[6][288] = "shivering control"

// 2020/3/5 17:00
    dataValue_input[4][318] = minInterval
    dataValue_input[5][318] = maxInterval
    dataValue_input[6][318] = "TTM start rewarming"

// 2020/3/5 20:01
    dataValue_input[4][354] = minInterval
    dataValue_input[5][354] = maxInterval
    dataValue_input[6][354] = "adjust ventilation"

// 2020/3/6 16:00
    dataValue_input[4][594] = minInterval
    dataValue_input[5][594] = maxInterval
    dataValue_input[6][594] = "TTM start normothermia"

// 2020/3/6 18:00
    dataValue_input[4][618] = minInterval
    dataValue_input[5][618] = maxInterval
    dataValue_input[6][618] = "increase sedation"

// 2020/3/6 19:47
    dataValue_input[4][639] = minInterval
    dataValue_input[5][639] = maxInterval
    dataValue_input[6][639] = "increase sedation"

// 2020/3/6 20:11
    dataValue_input[4][644] = minInterval
    dataValue_input[5][644] = maxInterval
    dataValue_input[6][644] = "increase sedation"

// 2020/3/6 21:10
    dataValue_input[4][656] = minInterval
    dataValue_input[5][656] = maxInterval
    dataValue_input[6][656] = "increase sedation"

// 2020/3/6 21:56
    dataValue_input[4][665] = minInterval
    dataValue_input[5][665] = maxInterval
    dataValue_input[6][665] = "increase sedation"

// 2020/3/6 22:25
    dataValue_input[4][671] = minInterval
    dataValue_input[5][671] = maxInterval
    dataValue_input[6][671] = "dextrose infusion"

// 2020/3/6 23:33
    dataValue_input[4][685] = minInterval
    dataValue_input[5][685] = maxInterval
    dataValue_input[6][685] = "shivering control"

// 2020/3/7 02:43
    dataValue_input[4][723] = minInterval
    dataValue_input[5][723] = maxInterval
    dataValue_input[6][723] = "adjust ventilation"

// 2020/3/7 03:50
    dataValue_input[4][736] = minInterval
    dataValue_input[5][736] = maxInterval
    dataValue_input[6][736] = "adjust ventilation"

// 2020/3/7 06:30
    dataValue_input[4][768] = minInterval
    dataValue_input[5][768] = maxInterval
    dataValue_input[6][768] = "TTM stop"
}

function drawSJVO2Chart() {
    var data = new google.visualization.DataTable(jsonData_input);
    interventionInput(0, 100)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'normal range')
    data.addColumn('number', 'SJVO2');

    for (let i in dataValue_input[0]) {
        let timestamp = String(dataValue_input[0][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            80,
            parseFloat(dataValue_input[1][i]),
        ]);
    }

    var options = {
        colors: ['darkslategray', 'bisque', '#a29380'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: '100%',
        legend: 'none',
        fontSize: 15,
        pointSize: 5,
        seriesType: 'line',
        series: {
            0: {
                type: 'area',
                pointSize: 0,
                areaOpacity: 0.6
            },
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "SJVO2",
            ticks: [0, 20, 40, 60, 80, 100],
            baseline: 50,
            baselineColor: '#777',
            gridlineColor: '#777',
        },
        chartArea: {
            width: '97%',
            height: '73%'
        }
    };

    var chart_SJVO2 = new google.visualization.ComboChart(document.getElementById('chart_SJVO2'));
    chart_SJVO2.draw(data, options);
}

function drawAJDLChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'AJDL');

    for (let i in dataValue_input[0]) {
        let timestamp = String(dataValue_input[0][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseFloat(dataValue_input[2][i]),
        ]);
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: '#a29380'
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "AJDL",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '97%',
            height: '73%'
        }
    };

    var chart_AJDL = new google.visualization.LineChart(document.getElementById('chart_AJDL'));

    chart_AJDL.draw(data, options);
}

function drawLOIChart() {
    var data_LOI = new google.visualization.DataTable();
    data_LOI.addColumn('date', 'Time of Day');
    data_LOI.addColumn('number', 'LOI');
    data_LOI.addColumn({'type': 'number', 'role': 'interval'});
    data_LOI.addColumn({'type': 'number', 'role': 'interval'});
    data_LOI.addRows([
        [new Date(2020, 4, 20, 13), 0, null, null],
        [new Date(2020, 4, 20, 14), 1, null, null],
        [new Date(2020, 4, 20, 15), 3, null, null],
        [new Date(2020, 4, 20, 16), 7, null, null],
        [new Date(2020, 4, 20, 17), 5, null, null],
        [new Date(2020, 4, 20, 18), 0, null, null],
        [new Date(2020, 4, 20, 19), 2, null, null],
        [new Date(2020, 4, 20, 20), 3, null, null],
        [new Date(2020, 4, 20, 21), 1, null, null],
        [new Date(2020, 4, 20, 22), 8, -5, 10],
        [new Date(2020, 4, 20, 23), 6, null, null],
        [new Date(2020, 4, 20, 24), 5, null, null],
        [new Date(2020, 4, 21, 1), 2, null, null],
        [new Date(2020, 4, 21, 2), 3, null, null],
        [new Date(2020, 4, 21, 3), 7, null, null],
        [new Date(2020, 4, 21, 4), 0, null, null],
        [new Date(2020, 4, 21, 5), 1, null, null],
        [new Date(2020, 4, 21, 6), 6, null, null],
        [new Date(2020, 4, 21, 7), 4, null, null],
        [new Date(2020, 4, 21, 8), 7, null, null],
        [new Date(2020, 4, 21, 9), 8, null, null],
        [new Date(2020, 4, 21, 10), 4, null, null],
        [new Date(2020, 4, 21, 11), 6, null, null],
        [new Date(2020, 4, 21, 12), 7, null, null],
        [new Date(2020, 4, 21, 13), 8, null, null],
        [new Date(2020, 4, 21, 14), 7, null, null],
        [new Date(2020, 4, 21, 15), 4, null, null],
        [new Date(2020, 4, 21, 16), 0, null, null],
        [new Date(2020, 4, 21, 17), 5, null, null],
        [new Date(2020, 4, 21, 18), 3, null, null],
        [new Date(2020, 4, 21, 19), 2, null, null],
        [new Date(2020, 4, 21, 20), 1, null, null],
        [new Date(2020, 4, 21, 21), 4, null, null],
        [new Date(2020, 4, 21, 22), 7, null, null],
        [new Date(2020, 4, 21, 23), 4, null, null],
        [new Date(2020, 4, 21, 24), 6, null, null],
        [new Date(2020, 4, 22, 1), 8, null, null],
        [new Date(2020, 4, 22, 2), 4, null, null],
        [new Date(2020, 4, 22, 3), 1, null, null],
        [new Date(2020, 4, 22, 4), 2, null, null],
    ]);

    var options_LOI = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: '#a29380'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "LOI",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '97%',
            height: '73%'
        }
    };

    var chart_LOI = new google.visualization.ScatterChart(document.getElementById('chart_LOI'));

    chart_LOI.draw(data_LOI, options_LOI);
}

function drawAJDO2Chart() {
    var data = new google.visualization.DataTable(jsonData_input);
    interventionInput(0, 8)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'normal range');
    data.addColumn('number', 'AJDO2');

    for (let i in dataValue_input[0]) {
        minInterval = 0
        maxInterval = 5
        let timestamp = String(dataValue_input[0][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            8,
            parseFloat(dataValue_input[2][i]),
        ]);
    }

    var options = {
        colors: ['darkslategray', 'bisque', '#a29380'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        seriesType: 'line',
        series: {
            0: {
                type: 'area',
                pointSize: 0,
                areaOpacity: 0.6
            },
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "AJDO2",
            ticks: [0, 2, 4, 6, 8],
            baseline: 4,
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '97%',
            height: '73%'
        }
    };

    var chart_AJDO2 = new google.visualization.LineChart(document.getElementById('chart_AJDO2'));

    chart_AJDO2.draw(data, options);
}

function drawCEO2Chart() {
    var data = new google.visualization.DataTable(jsonData_input);
    interventionInput(0, 60)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'normal range');
    data.addColumn('number', 'CEO2');

    for (let i in dataValue_input[0]) {
        let timestamp = String(dataValue_input[0][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            40,
            parseFloat(dataValue_input[3][i]),
        ]);
    }

    var options = {
        colors: ['darkslategray','bisque', '#a29380'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        seriesType: 'line',
        series: {
            0: {
                type: 'area',
                pointSize: 0,
                areaOpacity: 0.6
            },
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "CEO2",
            ticks: [0, 10, 20, 30, 40, 50, 60],
            baseline: 20,
            baselineColor: '#777',
            gridlineColor: '#777',
        },
        chartArea: {
            width: '97%',
            height: '73%'
        }
    };

    var chart_CEO2 = new google.visualization.LineChart(document.getElementById("chart_CEO2"));
    chart_CEO2.draw(data, options);
}

function drawAJglcChart() {
    var data_AJglc = new google.visualization.DataTable();
    data_AJglc.addColumn('date', 'Time of Day');
    data_AJglc.addColumn('number', 'AJglc');
    data_AJglc.addColumn({'type': 'number', 'role': 'interval'});
    data_AJglc.addColumn({'type': 'number', 'role': 'interval'});
    data_AJglc.addRows([
        [new Date(2020, 4, 20, 13), 0, null, null],
        [new Date(2020, 4, 20, 14), 1, null, null],
        [new Date(2020, 4, 20, 15), 3, null, null],
        [new Date(2020, 4, 20, 16), 7, null, null],
        [new Date(2020, 4, 20, 17), 5, null, null],
        [new Date(2020, 4, 20, 18), 0, null, null],
        [new Date(2020, 4, 20, 19), 2, null, null],
        [new Date(2020, 4, 20, 20), 3, null, null],
        [new Date(2020, 4, 20, 21), 1, null, null],
        [new Date(2020, 4, 20, 22), 8, -5, 10],
        [new Date(2020, 4, 20, 23), 6, null, null],
        [new Date(2020, 4, 20, 24), 5, null, null],
        [new Date(2020, 4, 21, 1), 2, null, null],
        [new Date(2020, 4, 21, 2), 3, null, null],
        [new Date(2020, 4, 21, 3), 7, null, null],
        [new Date(2020, 4, 21, 4), 0, null, null],
        [new Date(2020, 4, 21, 5), 1, null, null],
        [new Date(2020, 4, 21, 6), 6, null, null],
        [new Date(2020, 4, 21, 7), 4, null, null],
        [new Date(2020, 4, 21, 8), 7, null, null],
        [new Date(2020, 4, 21, 9), 8, null, null],
        [new Date(2020, 4, 21, 10), 4, null, null],
        [new Date(2020, 4, 21, 11), 6, null, null],
        [new Date(2020, 4, 21, 12), 7, null, null],
        [new Date(2020, 4, 21, 13), 8, null, null],
        [new Date(2020, 4, 21, 14), 7, null, null],
        [new Date(2020, 4, 21, 15), 4, null, null],
        [new Date(2020, 4, 21, 16), 0, null, null],
        [new Date(2020, 4, 21, 17), 5, null, null],
        [new Date(2020, 4, 21, 18), 3, null, null],
        [new Date(2020, 4, 21, 19), 2, null, null],
        [new Date(2020, 4, 21, 20), 1, null, null],
        [new Date(2020, 4, 21, 21), 4, null, null],
        [new Date(2020, 4, 21, 22), 7, null, null],
        [new Date(2020, 4, 21, 23), 4, null, null],
        [new Date(2020, 4, 21, 24), 6, null, null],
        [new Date(2020, 4, 22, 1), 8, null, null],
        [new Date(2020, 4, 22, 2), 4, null, null],
        [new Date(2020, 4, 22, 3), 1, null, null],
        [new Date(2020, 4, 22, 4), 2, null, null],
    ]);

    var options_AJglc = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: '#a29380'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "AJglc",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '97%',
            height: '73%'
        }
    };

    var chart_AJglc = new google.visualization.ScatterChart(document.getElementById('chart_AJglc'));

    chart_AJglc.draw(data_AJglc, options_AJglc);
}

function drawAJCO2Chart() {
    var data_AJCO2 = new google.visualization.DataTable();
    data_AJCO2.addColumn('date', 'Time of Day');
    data_AJCO2.addColumn('number', 'AJCO2');
    data_AJCO2.addColumn({'type': 'number', 'role': 'interval'});
    data_AJCO2.addColumn({'type': 'number', 'role': 'interval'});
    data_AJCO2.addRows([
        [new Date(2020, 4, 20, 13), 30, null, null],
        [new Date(2020, 4, 20, 14), 32, null, null],
        [new Date(2020, 4, 20, 15), 26, null, null],
        [new Date(2020, 4, 20, 16), 28, null, null],
        [new Date(2020, 4, 20, 17), 29, null, null],
        [new Date(2020, 4, 20, 18), 33, null, null],
        [new Date(2020, 4, 20, 19), 39, null, null],
        [new Date(2020, 4, 20, 20), 32, null, null],
        [new Date(2020, 4, 20, 21), 31, null, null],
        [new Date(2020, 4, 20, 22), 30, 0, 60],
        [new Date(2020, 4, 20, 23), 37, null, null],
        [new Date(2020, 4, 20, 24), 35, null, null],
        [new Date(2020, 4, 21, 1), 33, null, null],
        [new Date(2020, 4, 21, 2), 34, null, null],
        [new Date(2020, 4, 21, 3), 32, null, null],
        [new Date(2020, 4, 21, 4), 31, null, null],
        [new Date(2020, 4, 21, 5), 30, null, null],
        [new Date(2020, 4, 21, 6), 27, null, null],
        [new Date(2020, 4, 21, 7), 28, null, null],
        [new Date(2020, 4, 21, 8), 31, null, null],
        [new Date(2020, 4, 21, 9), 30, null, null],
        [new Date(2020, 4, 21, 10), 31, null, null],
        [new Date(2020, 4, 21, 11), 34, null, null],
        [new Date(2020, 4, 21, 12), 36, null, null],
        [new Date(2020, 4, 21, 13), 38, null, null],
        [new Date(2020, 4, 21, 14), 37, null, null],
        [new Date(2020, 4, 21, 15), 34, null, null],
        [new Date(2020, 4, 21, 16), 30, null, null],
        [new Date(2020, 4, 21, 17), 35, null, null],
        [new Date(2020, 4, 21, 18), 33, null, null],
        [new Date(2020, 4, 21, 19), 32, null, null],
        [new Date(2020, 4, 21, 20), 31, null, null],
        [new Date(2020, 4, 21, 21), 34, null, null],
        [new Date(2020, 4, 21, 22), 37, null, null],
        [new Date(2020, 4, 21, 23), 34, null, null],
        [new Date(2020, 4, 21, 24), 36, null, null],
        [new Date(2020, 4, 22, 1), 28, null, null],
        [new Date(2020, 4, 22, 2), 24, null, null],
        [new Date(2020, 4, 22, 3), 31, null, null],
        [new Date(2020, 4, 22, 4), 32, null, null],
    ]);

    var options_AJCO2 = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: '#a29380'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "AJCO2",
            ticks: [0, 10, 20, 30, 40, 50, 60],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '97%',
            height: '73%'
        }
    };

    var chart_AJCO2 = new google.visualization.AreaChart(document.getElementById("chart_AJCO2"));
    chart_AJCO2.draw(data_AJCO2, options_AJCO2);
}

function drawRQChart() {
    var data_RQ = new google.visualization.DataTable();
    data_RQ.addColumn('date', 'Time of Day');
    data_RQ.addColumn('number', 'RQ');
    data_RQ.addColumn({'type': 'number', 'role': 'interval'});
    data_RQ.addColumn({'type': 'number', 'role': 'interval'});
    data_RQ.addRows([
        [new Date(2020, 4, 20, 13), 0, null, null],
        [new Date(2020, 4, 20, 14), 1, null, null],
        [new Date(2020, 4, 20, 15), 3, null, null],
        [new Date(2020, 4, 20, 16), 7, null, null],
        [new Date(2020, 4, 20, 17), 5, null, null],
        [new Date(2020, 4, 20, 18), 0, null, null],
        [new Date(2020, 4, 20, 19), 2, null, null],
        [new Date(2020, 4, 20, 20), 3, null, null],
        [new Date(2020, 4, 20, 21), 1, null, null],
        [new Date(2020, 4, 20, 22), 8, -5, 10],
        [new Date(2020, 4, 20, 23), 6, null, null],
        [new Date(2020, 4, 20, 24), 5, null, null],
        [new Date(2020, 4, 21, 1), 2, null, null],
        [new Date(2020, 4, 21, 2), 3, null, null],
        [new Date(2020, 4, 21, 3), 7, null, null],
        [new Date(2020, 4, 21, 4), 0, null, null],
        [new Date(2020, 4, 21, 5), 1, null, null],
        [new Date(2020, 4, 21, 6), 6, null, null],
        [new Date(2020, 4, 21, 7), 4, null, null],
        [new Date(2020, 4, 21, 8), 7, null, null],
        [new Date(2020, 4, 21, 9), 8, null, null],
        [new Date(2020, 4, 21, 10), 4, null, null],
        [new Date(2020, 4, 21, 11), 6, null, null],
        [new Date(2020, 4, 21, 12), 7, null, null],
        [new Date(2020, 4, 21, 13), 8, null, null],
        [new Date(2020, 4, 21, 14), 7, null, null],
        [new Date(2020, 4, 21, 15), 4, null, null],
        [new Date(2020, 4, 21, 16), 0, null, null],
        [new Date(2020, 4, 21, 17), 5, null, null],
        [new Date(2020, 4, 21, 18), 3, null, null],
        [new Date(2020, 4, 21, 19), 2, null, null],
        [new Date(2020, 4, 21, 20), 1, null, null],
        [new Date(2020, 4, 21, 21), 4, null, null],
        [new Date(2020, 4, 21, 22), 7, null, null],
        [new Date(2020, 4, 21, 23), 4, null, null],
        [new Date(2020, 4, 21, 24), 6, null, null],
        [new Date(2020, 4, 22, 1), 8, null, null],
        [new Date(2020, 4, 22, 2), 4, null, null],
        [new Date(2020, 4, 22, 3), 1, null, null],
        [new Date(2020, 4, 22, 4), 2, null, null],
    ]);

    var options_RQ = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: '#a29380'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "RQ",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '97%',
            height: '73%'
        }
    };

    var chart_RQ = new google.visualization.ScatterChart(document.getElementById('chart_RQ'));
    chart_RQ.draw(data_RQ, options_RQ);
}


let jsonData_others = $.ajax({
    url: "./../data/2_others.json",
    dataType: "json",
    async: false
}).responseText;

jsonData_others = JSON.parse(jsonData_others)
const dataValue_others = Object.values(jsonData_others)

function drawNPIChart() {
    var data = new google.visualization.DataTable(jsonData_others);

    data.addColumn('datetime', 'Time of Day');
    data.addColumn('number', 'normal range');
    data.addColumn('number', 'Left');
    data.addColumn('number', 'Right');

    for (let i in dataValue_others[0]) {
        let timestamp = String(dataValue_others[0][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            3,
            parseFloat(dataValue_others[1][i]),
            parseFloat(dataValue_others[2][i]),
        ]);
    }

    var options = {
        colors: ['darkslategray', '#FAA7B8', '#6096FD'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        seriesType: 'scatter',
        series: {
            0: {
                type: 'area',
                pointSize: 0,
                areaOpacity: 0.6
            },
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "NPI",
            ticks: [0, 1, 2, 3, 4, 5],
            baseline: 5,
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '97%',
            height: '73%'
        }
    };

    var chart_NPI = new google.visualization.ComboChart(document.getElementById('chart_NPI'));
    chart_NPI.draw(data, options);
}

function drawPupilChart() {
    var data = new google.visualization.DataTable(jsonData_others);
    data.addColumn('datetime', 'Time of Day');
    data.addColumn('number', 'Left');
    data.addColumn('number', 'Right');

    for (let i in dataValue_others[0]) {
        let timestamp = String(dataValue_others[0][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseFloat(dataValue_others[3][i]),
            parseFloat(dataValue_others[4][i]),
        ]);
    }

    var options = {
        colors: ['#FAA7B8', '#6096FD'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        seriesType: 'scatter',
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "Pupil Size",
            ticks: [0, 2, 4, 6],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '97%',
            height: '73%'
        }
    };

    var chart_pupil = new google.visualization.ComboChart(document.getElementById('chart_pupil'));
    chart_pupil.draw(data, options);
}

function drawModalMAPLeftChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'MAP');
    data.addColumn('number', 'COx Left');

    for (let i in dataValue[5]) {
        data.addRow([
            parseFloat(dataValue[6][i]),
            parseFloat(dataValue[7][i]),
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
        hAxis: {
            title: "MAP",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "Left",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '80%',
            height: '70%'
        }
    };

    var chart_ModalMAPLeft = new google.visualization.ColumnChart(document.getElementById("chart_ModalMAPLeft"));
    chart_ModalMAPLeft.draw(data, options);
}

function drawModalMAPRightChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'MAP');
    data.addColumn('number', 'COx Right');

    for (let i in dataValue[5]) {
        data.addRow([
            parseFloat(dataValue[6][i]),
            parseFloat(dataValue[8][i]),
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
        hAxis: {
            title: "MAP",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "Right",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '80%',
            height: '70%'
        }
    };

    var chart_ModalMAPRight = new google.visualization.ColumnChart(document.getElementById("chart_ModalMAPRight"));
    chart_ModalMAPRight.draw(data, options);
}

function drawModalMAPMeanChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'MAP');
    data.addColumn('number', 'COx Avg');

    for (let i in dataValue[5]) {
        data.addRow([
            parseFloat(dataValue[6][i]),
            parseFloat(dataValue[9][i]),
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
        hAxis: {
            title: "MAP",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "COx Avg",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '80%',
            height: '70%'
        }
    };

    var chart_ModalMAPMean = new google.visualization.ColumnChart(document.getElementById("chart_ModalMAPMean"));
    chart_ModalMAPMean.draw(data, options);
}

function drawMAPRSO2Chart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'MAP');
    data.addColumn('number', 'RSO2 Left');
    data.addColumn('number', 'RSO2 Right');

    for (let i in dataValue[0]) {
        data.addRow([
            parseFloat(dataValue[0][i]),
            parseFloat(dataValue[1][i]),
            parseFloat(dataValue[2][i])
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        pointSize: 1,
        fontSize: 15,
        hAxis: {
            title: "MAP",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "RSO2",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '80%',
            height: '70%'
        }
    };

    var chart_MAPRSO2 = new google.visualization.ScatterChart(document.getElementById('chart_MAPRSO2'));

    chart_MAPRSO2.draw(data, options);
}

function drawModalETCO2LeftChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'ETCO2');
    data.addColumn('number', 'COx Left');

    for (let i in dataValue[10]) {
        data.addRow([
            parseFloat(dataValue[10][i]),
            parseFloat(dataValue[11][i]),
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
        hAxis: {
            title: "ETCO2",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "Left",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '80%',
            height: '70%'
        }
    };

    var chart_ModalETCO2Left = new google.visualization.ColumnChart(document.getElementById("chart_ModalETCO2Left"));
    chart_ModalETCO2Left.draw(data, options);
}

function drawModalETCO2RightChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'ETCO2');
    data.addColumn('number', 'COx Right');

    for (let i in dataValue[10]) {
        data.addRow([
            parseFloat(dataValue[10][i]),
            parseFloat(dataValue[12][i]),
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
        hAxis: {
            title: "ETCO2",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "Right",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '80%',
            height: '70%'
        }
    };

    var chart_ModalETCO2Right = new google.visualization.ColumnChart(document.getElementById("chart_ModalETCO2Right"));
    chart_ModalETCO2Right.draw(data, options);
}

function drawModalETCO2MeanChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'ETCO2');
    data.addColumn('number', 'COx Avg');

    for (let i in dataValue[10]) {
        data.addRow([
            parseFloat(dataValue[10][i]),
            parseFloat(dataValue[13][i]),
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
        hAxis: {
            title: "ETCO2",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "COx Avg",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '80%',
            height: '70%'
        }
    };

    var chart_ModalETCO2Mean = new google.visualization.ColumnChart(document.getElementById("chart_ModalETCO2Mean"));
    chart_ModalETCO2Mean.draw(data, options);
}

function drawETCO2RSO2Chart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'ETCO2');
    data.addColumn('number', 'RSO2 Left');
    data.addColumn('number', 'RSO2 Right');

    for (let i in dataValue[0]) {
        data.addRow([
            parseFloat(dataValue[3][i]),
            parseFloat(dataValue[1][i]),
            parseFloat(dataValue[2][i])
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        pointSize: 1,
        fontSize: 15,
        hAxis: {
            title: "ETCO2",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "RSO2",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '80%',
            height: '70%'
        }
    };

    var chart_ETCO2RSO2 = new google.visualization.ScatterChart(document.getElementById('chart_ETCO2RSO2'));

    chart_ETCO2RSO2.draw(data, options);
}
