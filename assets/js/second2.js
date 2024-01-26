
let full =100;
let but =document.getElementById("ip2");


function getCurrentDateTime() {
    
    let now = new Date();

    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let day = String(now.getDate()).padStart(2, '0');
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    let timeString =`${year}-${month}-${day}`;
    let timeString2 =`${hours}:${minutes}:${seconds}`;
    if(full == 0){
        document.getElementById("tim2").textContent = "End";
        document.getElementById("tim_").style.backgroundColor="#212529";
        document.getElementById("tim").textContent = "";
        
    }
    else{
        document.getElementById("tim").textContent = timeString;
        document.getElementById("tim2").textContent = timeString2;
    }
    
    for(let j=1;j<4;j++){
        if(document.getElementById(j.toString()).textContent == document.getElementById("tim2").textContent){
            alert("WakeUp");
            document.getElementById(j.toString()).textContent="";
        }else{
            console.log(document.getElementById(j.toString()))
            continue
        }
    }
}

setInterval(getCurrentDateTime, 1000);

function batfer(){
    if(full==0){
        document.getElementById("fer").textContent=0+'%';
        clearInterval(end);
        return;
    }
    full -=1;
    document.getElementById("fer").textContent=full.toString()+'%';
    
}

let end=setInterval(batfer,1000);
let i=1;
but.addEventListener("click", ()=>{
    let inf =document.getElementById("timePicker").value
    if(inf ==""){
        console.log(inf)
    }
    else{
        document.getElementById(i.toString()).textContent=inf;
        i++;
        if(i==4){
            i=1;
        }
    }

})


flatpickr("#timePicker", {
    enableTime: true,
    enableSeconds: true,
    noCalendar: true,
    dateFormat: "H:i:S",
    time_24hr: true
});




