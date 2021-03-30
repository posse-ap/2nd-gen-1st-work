let modal = document.getElementById("modalOutside");
let modalBefore = document.getElementById("modalInside");
let postComplete = document.getElementById("postComplete");
let inmodalButton = document.getElementById("modalbutton");
function openModal(){
  modal.style.display = "flex";
}

function closeModal(){
  modal.style.display = "none";
  modalBefore.style.display = "flex";
  inmodalButton.style.display = "block";
  postComplete.style.display ="none";
}

function completeModal(){
  modalBefore.style.display ="none";
  inmodalButton.style.display ="none";
  postComplete.style.display ="inline-block";

  console.log('ok');
}
