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
  console.log(brilli);
}

function showWinner() {
    
}

// document.getElementById('trump-button').addEventListener('keypree', function () {
//   trump++;
//   refreshResults();
// });

// document.getElementById('hillary-button').addEventListener('click', function () {
//   hillary++;
//   refreshResults();
// });

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
});
