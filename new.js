let namastebtn= document.querySelector('button.a');
namastebtn.addEventListener('click',showmsg);

function showmsg(){
    alert("namaste world");
}
let inputbtn= document.querySelector('button.b');
inputbtn.addEventListener('click',showmsg);

function showmsg(){
    // alert("namaste world");
    let name=prompt('enter name of the student');
    inputbtn.textContent='Roll no 21'+name;
}