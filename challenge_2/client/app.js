
document.getElementById('submit').onclick = function(e) {
  const selectedFile = document.getElementById('selectFiles').files[0];
  readFile(selectedFile);
  e.preventDefault();
}

var readFile = (file) => {

  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    event.target.result;
  });
  reader.readAsDataURL(file);
}

// document.getElementById('submit').onclick = function(e) {
//   let file = document.getElementById("selectFiles").files[0];
//   let formData = new FormData();

//   formData.append("file", file);
//   console.log(formData);
//   fetch('/', { method: "POST", body: formData });
//   e.preventDefault();
// }






