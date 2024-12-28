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

// POWER ON OFF FUNCTION FOR THE REMOTE

};

let volumeup = 0;
function volume(){
    volumeup += 1;
    // console.log(volumeup);
    document.getElementById("input1").value = "volume is: " + volumeup;
}
function volumedown(){
    volumeup -= 1;
    // console.log(volumeup);
    document.getElementById("input1").value = "volume is: " + volumeup;
    while(volumeup == 10){
        break;
    }
}

// VOLUME UP AND DOWN FUNCTIPON FOR THE REMOTE





// CHANNEL UP AND DOWN FUNCTION FOR THE REMOTE
function InputDigit(digit){
    const Newdigit = document.getElementById('input1');

    if(Newdigit.value.length < 3){
        
        Newdigit.value += digit; 
    }
}
let channelCount = 0;
function channelUp(){
    channelCount += 1;
    document.getElementById('input1').value = "channel number is: " + channelCount;
}
function channelDown(){
    channelCount -= 1;
    document.getElementById('input1').value = "the channel number is:" + channelCount;

}


// function manual(number){
//     const val = document.getElementById('input1');
//     if(val.value.length < 1000)
//         {
//             const newVal = parseFloat(val.value) || 0;
//             val.value += newVal + number;

//         }
        

    
// }

// SETTING ENTRY LIMIT FOR THE INPUT FIELD TO 3 DIGITS

function clearForm(){
    document.getElementById("input1").value = ' ';
}






