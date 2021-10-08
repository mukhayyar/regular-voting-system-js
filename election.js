var farhan = 0;
var ginanjar = 0;
var brilli = 0;

function refreshResults () {
  var results = document.getElementById('results');
  var one = document.getElementById('candidate-one');
  var two = document.getElementById('candidate-two');
  var three = document.getElementById('candidate-three');
  results.innerHTML = 'total: ' + (farhan + ginanjar + brilli);
  one.innerHTML = 'Vote: ' + farhan;
  two.innerHTML = 'Vote: ' + ginanjar;
  three.innerHTML = 'Vote: ' + brilli;
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
});
