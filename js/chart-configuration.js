(function(window, document, $, undefined) {
    "use strict";
    $(function() {

            /*monthly-statistics*/
            if ($('#monthly-statistics').length) 
            {
                var ctx = document.getElementById('monthly-statistics').getContext('2d');

                var myChart = new Chart
                (ctx, 
                    {
                        type: 'bar',

                        data: 
                        {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: 
                            [
                                {
                                    label: 'Report',
                                    data: [5 , 20 , 15 , 13, 21, 50, 21, 17, 11, 0, 1, 3],

                                    backgroundColor: "#9F2927",
                                    borderColor: "#9F2927",
                                    borderWidth: 2
                                }, 
                            ]
                        },
                    }
                );
            }

            /*yearly-statistics*/
            if ($('#yearly-statistics').length) 
            {
                var ctx = document.getElementById("yearly-statistics").getContext('2d');
                var myChart = new Chart
                (ctx, 
                    {
                        type: 'bar',
                        data: 
                        {
                            labels: ['2019', '2020', '2021', '2022'],
                            datasets: 
                            [
                                {
                                    label: 'Report',
                                    data: [12, 19, 3, 17],
                                    backgroundColor: "#9F2927",
                                    borderColor: "#9F2927",
                                    borderWidth: 2
                                }, 
                            ]
                        },
                    }   
                );
            }

            /*statistics-by-category*/
            if ($('#statistics-by-category').length) 
            {
                var ctx = document.getElementById("statistics-by-category");
                var myChart = new Chart
                (ctx, 
                    {
                            type: 'pie',
                            data: 
                        {
                            labels: ['Threats', 'Revenge Porn Help', 'Defamation'],
                            datasets: 
                                [
                                    {
                                        label: 'Report',
                                        backgroundColor: ["#FCE4E4","#548687","#9F2927"],
                                        /*borderColor: "",*/
                                        data: [25, 25, 50],
                                        borderWidth: 2
                                    }, 
                                ]
                        }, 
                    }
                );
            }

            /*statistics-by-priority*/
            if ($('#statistics-by-priority').length)
            {
                var ctx = document.getElementById("statistics-by-priority").getContext('2d');
                var myChart = new Chart
                (ctx, 
                    {
                        type: 'bar',
                        data: 
                        {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: 
                            [
                                {
                                    label: 'High',
                                    data: [12, 19, 3, 17, 28, 24, 7, 4, 9, 12, 14, 5],
                                    backgroundColor: "#9F2927",
                                    borderColor: "#9F2927",
                                    borderWidth: 2
                                }, 
                                {
                                    label: 'Moderate',
                                    data: [30, 29, 5, 5, 20, 3, 10, 6, 11, 9, 27, 34],
                                    backgroundColor: "#FCE4E4",
                                    borderColor: "#FCE4E4",
                                    borderWidth: 2
                                },
                                {
                                    label: 'Low',
                                    data : [12, 6, 8, 21, 12, 4, 0, 0, 8, 16, 11, 12],
                                    backgroundColor : "#838383",
                                    borderColor : "#838383",
                                    borderWidth : 2
                                }
                            ]
                        },
                    }
                );
            }

            /*statistics-by-gender*/
            if ($('#statistics-by-gender').length)
            {
                var ctx = document.getElementById("statistics-by-gender").getContext('2d');
                var myChart = new Chart
                (ctx, 
                    {
                        type: 'bar',
                        data: 
                        {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: 
                            [
                                {
                                    label: 'Woman',
                                    data: [12, 19, 3, 17, 28, 24, 7, 4, 9, 12, 14, 5],
                                    backgroundColor: "#9F2927",
                                    borderColor: "#9F2927",
                                    borderWidth: 2
                                }, 
                                {
                                    label: 'Men',
                                    data: [30, 29, 5, 5, 20, 3, 10, 6, 11, 9, 27, 34],
                                    backgroundColor: "#FCE4E4",
                                    borderColor: "#FCE4E4",
                                    borderWidth: 2
                                },
                                {
                                    label: 'Prefer Not To Say',
                                    data : [12, 6, 8, 21, 12, 4, 0, 0, 8, 16, 11, 12],
                                    backgroundColor : "#838383",
                                    borderColor : "#838383",
                                    borderWidth : 2
                                }
                            ]
                        },
                    }
                );
            }

            /*typesof-support-users*/
            if ($('#typesof-support-users').length)
            {
                var ctx = document.getElementById("typesof-support-users").getContext('2d');
                var myChart = new Chart
                (ctx, 
                    {
                        type: 'bar',
                        data: 
                        {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: 
                            [
                                {
                                    label: 'Legal Support',
                                    data: [12, 19, 3, 17, 28, 24, 7, 4, 9, 12, 14, 5],
                                    backgroundColor: "#9F2927",
                                    borderColor: "#9F2927",
                                    borderWidth: 2
                                }, 
                                {
                                    label: 'Psychological Support',
                                    data: [30, 29, 5, 5, 20, 3, 10, 6, 11, 9, 27, 34],
                                    backgroundColor: "#FCE4E4",
                                    borderColor: "#FCE4E4",
                                    borderWidth: 2
                                },
                            ]
                        },
                    }
                );
            }

            /*methodsof-support-users*/
            if ($('#methodsof-support-users').length)
            {
                var ctx = document.getElementById("methodsof-support-users").getContext('2d');
                var myChart = new Chart
                (ctx, 
                    {
                        type: 'bar',
                        data: 
                        {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: 
                            [
                                {
                                    label: 'Message',
                                    data: [12, 19, 3, 17, 28, 24, 7, 4, 9, 12, 14, 5],
                                    backgroundColor: "#9F2927",
                                    borderColor: "#9F2927",
                                    borderWidth: 2
                                }, 
                                {
                                    label: 'Video Call',
                                    data: [30, 29, 5, 5, 20, 3, 10, 6, 11, 9, 27, 34],
                                    backgroundColor: "#FCE4E4",
                                    borderColor: "#FCE4E4",
                                    borderWidth: 2
                                },
                                {
                                    label: 'Telephone',
                                    data : [12, 6, 8, 21, 12, 4, 0, 0, 8, 16, 11, 12],
                                    backgroundColor : "#838383",
                                    borderColor : "#838383",
                                    borderWidth : 2
                                }
                            ]
                        },
                    }
                );
            }

            /*anonimity-reports*/
            if ($('#anonimity-reports').length) 
            {
                var ctx = document.getElementById('anonimity-reports').getContext('2d');

                var myChart = new Chart
                (ctx, 
                    {
                        type: 'bar',

                        data: 
                        {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: 
                            [
                                {
                                    label: 'Anonimity',
                                    data: [5 , 20 , 15 , 13, 21, 50, 21, 17, 11, 0, 1, 3],

                                    backgroundColor: "#9F2927",
                                    borderColor: "#9F2927",
                                    borderWidth: 2
                                }, 
                            ]
                        },
                    }
                );
            }

    });

})(window, document, window.jQuery);