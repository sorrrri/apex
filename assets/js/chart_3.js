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
    url: "./../data/3_common.json",
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
// 2020/5/5 16:12
    arrayCoxTime_1[82] = minInterval
    arrayCoxTime_2[82] = maxInterval
    arrayCoxTime_3[82] = "vasopressor increase"

// 2020/5/5 21:16
    arrayCoxTime_1[143] = minInterval
    arrayCoxTime_2[143] = maxInterval
    arrayCoxTime_3[143] = "vasopressor increase"

// 2020/5/6 04:00
    arrayCoxTime_1[224] = minInterval
    arrayCoxTime_2[224] = maxInterval
    arrayCoxTime_3[224] = "TTM start normothermia"

// 2020/5/6 09:27
    arrayCoxTime_1[289] = minInterval
    arrayCoxTime_2[289] = maxInterval
    arrayCoxTime_3[289] = "stop NMB"

// 2020/5/6 12:04
    arrayCoxTime_1[321] = minInterval
    arrayCoxTime_2[321] = maxInterval
    arrayCoxTime_3[321] = "vasopressor increase"

// 2020/5/6 16:45
    arrayCoxTime_1[377] = minInterval
    arrayCoxTime_2[377] = maxInterval
    arrayCoxTime_3[377] = "transfusion"

// 2020/5/6 19:02
    arrayCoxTime_1[404] = minInterval
    arrayCoxTime_2[404] = maxInterval
    arrayCoxTime_3[404] = "transfusion"

// 2020/5/7 06:00
    arrayCoxTime_1[536] = minInterval
    arrayCoxTime_2[536] = maxInterval
    arrayCoxTime_3[536] = "stop sedation"

// 2020/5/7 07:00
    arrayCoxTime_1[548] = minInterval
    arrayCoxTime_2[548] = maxInterval
    arrayCoxTime_3[548] = "adjust oxygenation"

// 2020/5/7 07:45
    arrayCoxTime_1[557] = minInterval
    arrayCoxTime_2[557] = maxInterval
    arrayCoxTime_3[557] = "adjust ventilation"

// 2020/5/7 08:42
    arrayCoxTime_1[568] = minInterval
    arrayCoxTime_2[568] = maxInterval
    arrayCoxTime_3[568] = "TTM stop"

// 2020/5/7 09:00
    arrayCoxTime_1[572] = minInterval
    arrayCoxTime_2[572] = maxInterval
    arrayCoxTime_3[572] = "adjust oxygenation"

// 2020/5/7 10:10
    arrayCoxTime_1[586] = minInterval
    arrayCoxTime_2[586] = maxInterval
    arrayCoxTime_3[586] = "increase sedation"

// 2020/5/7 10:31    No Intervention
    arrayCoxTime_1[590] = minInterval
    arrayCoxTime_2[590] = maxInterval
    arrayCoxTime_3[590] = " "
}

const interventionTimestamp = (minInterval, maxInterval) => {
    arrayTimestamp_1[410] = minInterval
    arrayTimestamp_2[410] = maxInterval
    arrayTimestamp_3[410] = "vasopressor increase"

// 2020/5/5 21:16
    arrayTimestamp_1[715] = minInterval
    arrayTimestamp_2[715] = maxInterval
    arrayTimestamp_3[715] = "vasopressor increase"

// 2020/5/6 04:00
    arrayTimestamp_1[1120] = minInterval
    arrayTimestamp_2[1120] = maxInterval
    arrayTimestamp_3[1120] = "TTM start normothermia"

// 2020/5/6 09:27
    arrayTimestamp_1[1445] = minInterval
    arrayTimestamp_2[1445] = maxInterval
    arrayTimestamp_3[1445] = "stop NMB"

// 2020/5/6 12:04
    arrayTimestamp_1[1605] = minInterval
    arrayTimestamp_2[1605] = maxInterval
    arrayTimestamp_3[1605] = "vasopressor increase"

// 2020/5/6 16:45
    arrayTimestamp_1[1885] = minInterval
    arrayTimestamp_2[1885] = maxInterval
    arrayTimestamp_3[1885] = "transfusion"

// 2020/5/6 19:02
    arrayTimestamp_1[2020] = minInterval
    arrayTimestamp_2[2020] = maxInterval
    arrayTimestamp_3[2020] = "transfusion"

// 2020/5/7 06:00
    arrayTimestamp_1[2680] = minInterval
    arrayTimestamp_2[2680] = maxInterval
    arrayTimestamp_3[2680] = "stop sedation"

// 2020/5/7 07:00
    arrayTimestamp_1[2740] = minInterval
    arrayTimestamp_2[2740] = maxInterval
    arrayTimestamp_3[2740] = "adjust oxygenation"

// 2020/5/7 07:45
    arrayTimestamp_1[2785] = minInterval
    arrayTimestamp_2[2785] = maxInterval
    arrayTimestamp_3[2785] = "adjust ventilation"

// 2020/5/7 08:42
    arrayTimestamp_1[2840] = minInterval
    arrayTimestamp_2[2840] = maxInterval
    arrayTimestamp_3[2840] = "TTM stop"

// 2020/5/7 09:00
    arrayTimestamp_1[2860] = minInterval
    arrayTimestamp_2[2860] = maxInterval
    arrayTimestamp_3[2860] = "adjust oxygenation"

// 2020/5/7 10:10
    arrayTimestamp_1[2930] = minInterval
    arrayTimestamp_2[2930] = maxInterval
    arrayTimestamp_3[2930] = "increase sedation"

// 2020/5/7 10:31    No Intervention
    arrayTimestamp_1[2950] = minInterval
    arrayTimestamp_2[2950] = maxInterval
    arrayTimestamp_3[2950] = " "
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
            37.46,
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
            3:  {
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
    url: "./../data/3_input.json",
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
// 2020/5/5 16:12
    dataValue_input[4][82] = minInterval
    dataValue_input[5][82] = maxInterval
    dataValue_input[6][82] = "vasopressor increase"

// 2020/5/5 21:16
    dataValue_input[4][143] = minInterval
    dataValue_input[5][143] = maxInterval
    dataValue_input[6][143] = "vasopressor increase"

// 2020/5/6 04:00
    dataValue_input[4][224] = minInterval
    dataValue_input[5][224] = maxInterval
    dataValue_input[6][224] = "TTM start normothermia"

// 2020/5/6 09:27
    dataValue_input[4][289] = minInterval
    dataValue_input[5][289] = maxInterval
    dataValue_input[6][289] = "stop NMB"

// 2020/5/6 12:04
    dataValue_input[4][321] = minInterval
    dataValue_input[5][321] = maxInterval
    dataValue_input[6][321] = "vasopressor increase"

// 2020/5/6 16:45
    dataValue_input[4][377] = minInterval
    dataValue_input[5][377] = maxInterval
    dataValue_input[6][377] = "transfusion"

// 2020/5/6 19:02
    dataValue_input[4][404] = minInterval
    dataValue_input[5][404] = maxInterval
    dataValue_input[6][404] = "transfusion"

// 2020/5/7 06:00
    dataValue_input[4][536] = minInterval
    dataValue_input[5][536] = maxInterval
    dataValue_input[6][536] = "stop sedation"

// 2020/5/7 07:00
    dataValue_input[4][548] = minInterval
    dataValue_input[5][548] = maxInterval
    dataValue_input[6][548] = "adjust oxygenation"

// 2020/5/7 07:45
    dataValue_input[4][557] = minInterval
    dataValue_input[5][557] = maxInterval
    dataValue_input[6][557] = "adjust ventilation"

// 2020/5/7 08:42
    dataValue_input[4][568] = minInterval
    dataValue_input[5][568] = maxInterval
    dataValue_input[6][568] = "TTM stop"

// 2020/5/7 09:00
    dataValue_input[4][572] = minInterval
    dataValue_input[5][572] = maxInterval
    dataValue_input[6][572] = "adjust oxygenation"

// 2020/5/7 10:10
    dataValue_input[4][586] = minInterval
    dataValue_input[5][586] = maxInterval
    dataValue_input[6][586] = "increase sedation"

// 2020/5/7 10:31    No Intervention
    dataValue_input[4][590] = minInterval
    dataValue_input[5][590] = maxInterval
    dataValue_input[6][590] = " "
}

function drawSJVO2Chart() {
    var data = new google.visualization.DataTable(jsonData_input);

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
    url: "./../data/3_others.json",
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
