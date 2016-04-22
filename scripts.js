var modal;

window.onload = function(){

  var modal = document.getElementsByClassName('modal-link');

  for(var i = 0 ; i < modal.length ; i++) { // let's create a loop so that we can attach an event to the link

      var modallink = modal[i];   // grab the current element that we are going to iterate through

        modallink.addEventListener("click", displayModal); // letting js/browser know to listen out for a click on the trigger

    }
  };

//function displayModal() {

//  modal[i].classList.add(".modal-container.active");
//  modal[i].classList.remove(".modal-container");

//};
  function displayModal(event) {
    var trigger = event.target; //grab the elment that was just clicked
    var modalTarget = trigger.getAttribute("data-modal-target");

    var modalcontainer = document.getElementById(modalTarget);
    modalcontainer.classList.add("active");
  };


var clsmodal = document.getElementsByClassName('modal-close-btn');

for(var i = 0 ; i < clsmodal.length ; i++) { // let's create a loop so that we can attach an event to the link

  var clsmodallink = clsmodal[i];   // grab the current element that we are going to iterate through

  clsmodallink.addEventListener("click", closeModal); // letting js/browser know to listen out for a click on the trigger

};

function closeModal(event) {
  var clsetrigger = event.target; //grab the elment that was just clicked
  //var clsemodalTarget = clsetrigger.getAttribute("data-modal-target");

  var modalcontainer = clsetrigger.closest('.modal-container');
  modalcontainer.classList.remove("active");
};
