var farhan = 0;
var ginanjar = 0;
var brilli = 0;
var kosong = 0;


function refreshResults () {
var results = document.getElementById('results');
var one = document.getElementById('candidate-one');
var two = document.getElementById('candidate-two');
var three = document.getElementById('candidate-three');
var zero = document.getElementById('kosong');
results.innerHTML = 'total: ' + (farhan + ginanjar + brilli + kosong);
zero.innerHTML = 'Tanpa suara: ' + kosong;
one.innerHTML = 'Vote: ' + farhan;
two.innerHTML = 'Vote: ' + ginanjar;
three.innerHTML = 'Vote: ' + brilli;
var data = [farhan,ginanjar,brilli,kosong]
addData(data)
}

document.addEventListener('keydown', function (e) {
if(e.code == "Digit1"){
    farhan++;
    refreshResults();
}
else if(e.code == "Digit2"){
    ginanjar++;
    refreshResults();
}
else if(e.code == "Digit3"){
    brilli++;
    refreshResults();
} 
else if(e.code == "Digit4"){
    kosong++;
    console.log(kosong);
    refreshResults();
}
else if(e.code == "KeyR"){
    refresh();
}
});
var chart = new Chart(document.getElementById("bar-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Muhammad Farhan Jibran - XI MM", "Muhammad Ginanjar Mulyo XI TKJ", "Brilliano Yusuf Najma Rasyada XI RPL", "Tanpa Suara"],
        datasets: [
        {
            label: "Total Voting",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#c45850"],
            data: [0,0,0,0]
        }
        ]
    },
    options: {
        legend: { display: false },
        title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
        }
    }
});
function addData(data) {
    chart.data.datasets[0].data = data;
    chart.update();
}