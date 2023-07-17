// chnage html content -->
const demo = document.getElementById('demo');
let changeText = demo.innerHTML; 

function changeHtmlContent(){
    changeText = "document.getElementById('id_name').innerHTML= value";
    console.log(changeText);
    alert(changeText);
    demo.innerHTML = changeText;

}


// Change data & time -> click by a button -->
function dateTime(){
    changeText = Date();
    console.log(changeText);
    alert(changeText);
    demo.innerHTML = changeText;
}
