import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeService from './bike-services';

//Business

function getStolen(zip) {
  let promise = BikeService.getStolen(zip);
  promise.then(function(stolenBikes) {
    printElements(stolenBikes);
  }, function(error){
    printError(error);
  });
}

//UI Logic

function printElements(data) {
  document.getElementById("output").innerText = `The thieves have thieved ${data.proximity} times in your area. Outrageous!`;
}


function printError(error) {
  document.getElementById("output").innerText = `There was an error accessing thief behavior for ${error.error}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const zip = document.getElementById("zip-code").value;
  document.getElementById("zip-code").value = null;
  getStolen(zip);
}

window.addEventListener("load", function(){
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});