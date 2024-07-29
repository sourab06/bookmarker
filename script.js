const heading=document.getElementsByClassName('heading-button')[0];
const modal_container=document.getElementsByClassName('modal-container')[0];
const close_button=document.getElementsByClassName('closebutton')[0];
// console.log(heading);
function startmodal(){
modal_container.hidden= false;
}
function closemodal(){
    modal_container.hidden= true;
}
heading.addEventListener('click',startmodal);
close_button.addEventListener('click',closemodal);