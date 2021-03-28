let modal = document.getElementById("modalOutside");
let modalBefore = document.getElementById("modalInside");
let postComplete = document.getElementById("postComplete");
let inmodalButton = document.getElementById("modalbutton");
let modalCalendar = document.getElementById("modalCalendar");
let closeModalButton = document.getElementById("closeModal");
let calendarInputBox = document.getElementById("modal_calendar");

function openModal(){
  modal.style.display = "flex";
  closeModalButton.style.display = "block";

  if(window.innerWidth<750){
    modalBefore.style.display = "block";
  }else{
    modalBefore.style.display = "flex";
  }

  inmodalButton.style.display = "block";
  postComplete.style.display ="none";
  modalCalendar.style.display="none";
}

function closeModal(){
  modal.style.display = "none";
}

function completeModal(){
  modalBefore.style.display ="none";
  inmodalButton.style.display ="none";
  postComplete.style.display ="inline-block";
closeModalButton.style.display = "block";
  console.log('ok');
}

function openCalendar(){
  modalBefore.style.display = "none";
  modalCalendar.style.display = "block";
  inmodalButton.style.display ="none";
  closeModalButton.style.display = "none";
  // flatpickr('.modal_calendar');

}

function submitDate(){
  calendarInputBox.value = "2021/04";

  if(window.innerWidth<750){
    modalBefore.style.display = "block";
  }else{
    modalBefore.style.display = "flex";
  }
  modalCalendar
}

function dateclicked(index){
  let clickedDate = index;
  console.log(clickedDate);
}

// function submitDate(clickedDate){
//   console.log(clickedDate);
// }

