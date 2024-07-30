const heading=document.getElementsByClassName('heading-button')[0];
const modal_container=document.getElementsByClassName('modal-container')[0];
const close_button=document.getElementsByClassName('closebutton')[0];
const save_button=document.getElementById('Bookmarker');
const screen_elements=document.getElementsByClassName('screen-elements')[0];
const url = document.getElementById('url');
const title= document.getElementById('title');
// const deletebutton =document.getElementsByClassName('deletebutton')[0];
var i=0;
let saveddata=[];
let saveditems=[];
// console.log(save_button);
function startmodal(){
modal_container.hidden= false;
}
function closemodal(){
    modal_container.hidden= true;
}
function addbookmarkafterclick(e){
    modal_container.hidden= true;
   
    e.preventDefault();
    i++;
    const a=e.srcElement[0].value;
    const b=e.srcElement[1].value;
    saveddata[i]={
        title:e.srcElement[0].value,
        url:e.srcElement[1].value
    }
    localStorage.setItem(`${i}`,JSON.stringify(saveddata[i]));
    // console.log(saveddata);
    addbookmark(a,b);
   
   
    
}
function addbookmark(a,b){
    const newdiv = document.createElement('div');
    newdiv.classList.add('bookmark-containers');
    newdiv.setAttribute('id',i);


    const divimg = document.createElement('img');
    divimg.src="https://www.google.com/s2/u/0/favicons?domain=css-tricks.com";

    const diva = document.createElement('a');
    diva.href=b;
    diva.target="_blank";
    diva.innerHTML=a;

    const divb = document.createElement('button');
    divb.classList.add("deletebutton");
    divb.setAttribute('id',i);
    divb.setAttribute("onclick","delete_element(this.id)");
    divb.innerHTML='X'

    

    newdiv.append(divimg);
    newdiv.append(diva);
    newdiv.append(divb);

    screen_elements.append(newdiv);
    url.value=' ';
    title.value=' ';
    
}
function delete_element(clicked_id){
    // console.log("hello");
    // alert(clicked_id);
    // const elementid= clicked_id;
    const parentclass= document.getElementsByClassName('bookmark-containers');
    for(j=0;j<=i;j++){
        if(parentclass[j].id == clicked_id){
            screen_elements.removeChild(parentclass[j]);
        }
    
        
    }
    // console.log(parentid);
    // screen_elements.remove(parentid);
}
function restorepreviousdata(){
    // console.log(saveditems);
       
    //     for(k=1;k<=i;k++){
    //         saveddata[1]=JSON.parse(localStorage.getItem(`${k}`));
    //     console.log(saveddata[1]);
    //     // addbookmark(saveditems[k].title,saveditems[k].url);
    // }
    for ( var k = 0, len = localStorage.length; k < len; ++k ) {
        // console.log( JSON.parse(localStorage.getItem( localStorage.key( k ) )) );
        saveddata[k]=JSON.parse(localStorage.getItem( localStorage.key( k ) ));
        addbookmark(saveddata[k].title,saveddata[k].url);
      }

   
}
heading.addEventListener('click',startmodal);
close_button.addEventListener('click',closemodal);
save_button.addEventListener("submit",addbookmarkafterclick);
// deletebutton.addEventListener('click',delete_element);
restorepreviousdata();