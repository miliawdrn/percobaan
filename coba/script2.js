/* monthly-statistics */
var canvasElement = document.querySelector("monthly-statistics");

var config = 
{
    type : "bar",
    data : 
    {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], 
        datasets: [
            {
                label : "Total" ,
                data : [5 , 20 , 15 , 13, 21, 50, 21, 17, 11, 0, 1, 3],
                backgroundColor : [
                    "#9F2927"
                ],
                borderColor : [
                    "#9F2927"
                ],
            },
        ],
    },
};

var chart = new Chart(canvasElement, config);

/* yearly-statistics */
var canvasElement = document.querySelector("yearly-statistics");

var config = 
{
    type : "bar",
    data : 
    {
        labels: ["2019", "2020", "2021", "2022"], 
        datasets: [
            {
                label : "Total" ,
                data : [5 , 20 , 15 , 13],
                backgroundColor : [
                    "#9F2927"
                ],
                borderColor : [
                    "#9F2927"
                ],
            },
        ],
    },
};

var chart = new Chart(canvasElement, config);

/* statistics-by-category
var canvasElement = document.getElementById("statistics");

var config = 
{
    type : "pie",
    data : 
    {
        labels: ["2019"], 
        datasets: [
            {
                label : "Total" ,
                data : [5],
                backgroundColor : [
                    "#9F2927"
                ],
                borderColor : [
                    "#9F2927"
                ],
            },
        ],
    },
};

var chart = new Chart(canvasElement, config);*/

var canvasElement = document.getElementById("statistics-priority");

var config = 
{
    type : "bar",
    data : 
    {
        labels: ["2019", "2020", "2021", "2022"], 
        datasets: [
            {
                label : "blue" ,
                data : [5, 3, 7],
                backgroundColor : [
                    "#9F2927"
                ],
                borderColor : [
                    "#9F2927"
                ],
            },
            {
                label : "red" ,
                data : [7, 10, 15],
                backgroundColor : [
                    "#00000"
                ],
                borderColor : [
                    "#00000"
                ],
            },
            {
                label : "red" ,
                data : [0, 1, 5],
                backgroundColor : [
                    "#00000"
                ],
                borderColor : [
                    "#00000"
                ],
            },
        ],
    },
};

var chart = new Chart(canvasElement, config);
