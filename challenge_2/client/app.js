document.getElementById('import').onclick = function(e) {
  var files = document.getElementById('selectFiles').value;
  console.log(files);
  e.preventDefault();
}

// window.addEventListener("load", function () {
//   function sendData() {
//     const XHR = new XMLHttpRequest();

//     // Bind the FormData object and the form element
//     const FD = new FormData(form);
//     console.log(FD);
//     // Define what happens on successful data submission
//     XHR.addEventListener("load", function (event) {
//       alert(event.target.responseText);
//     });

//     // Define what happens in case of error
//     XHR.addEventListener("error", function (event) {
//       alert('Oops! Something went wrong.');
//     });

//     // Set up our request
//     XHR.open("POST", '/upload_json');

//     // The data sent is what the user provided in the form
//     XHR.send(FD);
//   }

//   // Access the form element...
//   const form = document.getElementById("formdata");
//   console.log(form);
//   // ...and take over its submit event.
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     sendData();
//   });
// });




