// let name = "SRK";

// console.log(name,'Ye naam hai')


import events from 'events';
// console.log('events:', events)

var eventEmitter = new events.EventEmitter();
// console.log('eventEmitter:', eventEmitter)


let arr = ['textOne','textTwo','textThree','textFour','textFive','textSix','textSeven','textEight','textNine','textTen']


function printText(date, text) {
    
    let n = text.length;


    let splitStr = text.split("");
    let reverseStr = splitStr.reverse();
    

    // console.log(n+"00");
    let limit = +(n+"000")   //Set Delay for event

    // console.log(lemit);
    setTimeout(function () {
        console.log("text: ",reverseStr.join(""),limit,'Mili Sec');
        
    },limit)
}
var myEventHandler = function () {
    // console.log('Hi Rahul This Site Naame To suna Hoga');
    let dt = new Date();
    // console.log('dt:', dt)

    let res= arr.map((e) =>  printText(dt,e))
    
    return res
}


eventEmitter.on('scheduler', myEventHandler);



eventEmitter.emit('scheduler')

