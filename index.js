

//document.getElementById("count-el").innerHTML = 5



let count = 0;

incBtn = document.getElementById("increment-btn");
incBtn.onclick = function(){
    count += 1;
    document.getElementById("count-el").innerHTML = count;
}

decBtn = document.getElementById("decrement-btn")
decBtn.onclick = function(){
    count -= 1;
    document.getElementById("count-el").innerHTML =count;
}

saveEl = document.getElementById("save-el");
saveEl.innerHTML = "Previous : "

function save() {
    if (saveEl.textContent === "Previous : ") {
        saveEl.textContent = saveEl.textContent + count ;    
    }else{
        
        saveEl.textContent = saveEl.textContent + " ,  " + count ;
    }
    
}
function reset(){
    count = 0;  
    document.getElementById("count-el").innerHTML =count;      
}
// document.getElementById("save-btn").addEventListener('click',save);  // OR :
saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener('click',save);

resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener('click', reset);


