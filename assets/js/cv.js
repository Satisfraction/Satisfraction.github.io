var ctx = document.getElementById('skillsChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
    data: {
        labels: [
            "Python",
            "HTML",
            "CSS",
            "JavaScript",
            "Docker",
            "Terraform",
            "Ruby",
            "SQL",
            "AWS",
            "Linux",
            "Git",
            "MongoDB",
            "Scrum",
        ],
        datasets: [
            {
                label: "Kenntnisse in % ",
                data: [62, 57, 50, 43, 24, 23, 15, 35, 32, 29, 47, 19, 25],
                backgroundColor: [
                    "rgba(85, 255, 0, 1)",
                    "rgba(255, 85, 0, 1)",
                    "rgba(0, 0, 255, 1)",
                    "rgba(255, 255, 0, 1)",
                    "rgba(22, 22, 160, 0.6)",
                    "rgba(210, 180, 140, 0.6)",
                    "rgba(255, 0, 0, 1)",
                    "rgba(128, 0, 128, 1)",
                    "rgba(255, 165, 0, 1)",
                    "rgba(0, 128, 0, 1)",
                    "rgba(255, 192, 203, 1)",
                    "rgba(255, 0, 0, 1)",
                    "rgba(210, 180, 140, 0.6)"
                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(22, 22, 160, 1)",
                    "rgba(210, 180, 140, 1)",
                    "rgba(255, 0, 0, 1)",
                    "rgba(128, 0, 128, 1)",
                    "rgba(255, 165, 0, 1)",
                    "rgba(0, 128, 0, 1)",
                    "rgba(255, 192, 203, 1)",
                    "rgba(255, 0, 0, 1)",
                    "rgba(210, 180, 140, 0.6)"
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
        x: {
            beginAtZero: true,
            max: 100,
        },
        },
        plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: "Fähigkeiten und Kenntnisse in %",
        },
        },
    },
});

var ctx = document.getElementById('skillsChart2').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
    data: {
        labels: [
            "Python",
            "HTML",
            "CSS",
            "JavaScript",
            "Docker",
            "Terraform",
            "Ruby",
            "SQL",
            "AWS",
            "Linux",
            "Git",
            "MongoDB",
            "Scrum",
        ],
        datasets: [
            {
                label: "Knowledge in % ",
                data: [62, 57, 50, 43, 24, 23, 15, 35, 32, 29, 47, 19, 25],
                backgroundColor: [
                    "rgba(85, 255, 0, 1)",
                    "rgba(255, 85, 0, 1)",
                    "rgba(0, 0, 255, 1)",
                    "rgba(255, 255, 0, 1)",
                    "rgba(22, 22, 160, 0.6)",
                    "rgba(210, 180, 140, 0.6)",
                    "rgba(255, 0, 0, 1)",
                    "rgba(128, 0, 128, 1)",
                    "rgba(255, 165, 0, 1)",
                    "rgba(0, 128, 0, 1)",
                    "rgba(255, 192, 203, 1)",
                    "rgba(255, 0, 0, 1)",
                    "rgba(210, 180, 140, 0.6)"
                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(22, 22, 160, 1)",
                    "rgba(210, 180, 140, 1)",
                    "rgba(255, 0, 0, 1)",
                    "rgba(128, 0, 128, 1)",
                    "rgba(255, 165, 0, 1)",
                    "rgba(0, 128, 0, 1)",
                    "rgba(255, 192, 203, 1)",
                    "rgba(255, 0, 0, 1)",
                    "rgba(210, 180, 140, 0.6)"
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
        x: {
            beginAtZero: true,
            max: 100,
        },
        },
        plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: "Skills and Knowledge in % ",
        },
        },
    },
});
