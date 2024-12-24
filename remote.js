let count = 0;
function clicked(){
    count+=1;
    console.log(count);
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
    console.log(volumeup);
    document.getElementById("input1").value = "volume is: " + volumeup;
}
function volumedown(){
    volumeup -= 1;
    console.log(volumeup);
    document.getElementById("input1").value = "volume is: " + volumeup;
}




