let count = 0;
function clicked(){
    count+=1;
    // console.log(count);
if(count % 2 ==0 ){
    document.getElementById("input1").value = "off";

}
else{
    document.getElementById("input1").value = "on"
}

};

let volumeup = 0;
function volume(){
    volumeup += 1;
    // console.log(volumeup);
    document.getElementById("input1").value = "volume is: " + volumeup;
}
function volumedown(){
    volumeup -= 1;
    console.log(volumeup);
    document.getElementById("input1").value = "volume is: " + volumeup;
}

function clear(){
    document.getElementById("input1").value = '';
}

function zero(){
    document.getElementById("input1").value = 0;
}
function one(){
    document.getElementById("input1").value = 1;
}function two(){
    document.getElementById("input1").value = 2;
}
function three(){
    document.getElementById("input1").value = 3;
}
function four(){
    document.getElementById("input1").value = 4;
}
function five(){
    document.getElementById("input1").value = 5;
}




