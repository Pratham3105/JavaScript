// Dates

let myDate = new Date();
console.log(typeof myDate); // object

console.log(myDate); // 2024-09-21T10:11:39.567Z
console.log(myDate.toString()); // Sat Sep 21 2024 15:42:47 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Sat Sep 21 2024
console.log(myDate.toLocaleDateString()); //21/9/2024
console.log(myDate.toISOString()); //2024-09-21T10:15:15.445Z
console.log(myDate.toJSON()); // 2024-09-21T10:16:22.145Z
console.log(myDate.toLocaleString()); // 21/9/2024, 3:46:58 pm
console.log(myDate.toLocaleTimeString()); //3:47:42 pm
console.log(myDate.toUTCString()); // Sat, 21 Sep 2024 10:19:02 GMT

let myCreatedDate = new Date(2023,10,23);
console.log(myCreatedDate.toDateString()); // Thu Nov 23 2023

let myCreated = new Date(2023,10,23,5,3); // staring month with the zero
console.log(myCreated.toLocaleString()); // 23/11/2023, 5:03:00 am

let Created = new Date("2023-01-14"); //(yyyy,mm,dd)
console.log(Created.toDateString()); // Sat Jan 14 2023

let CreatedDate = new Date("01-14-2023"); // (mm,dd,yyyy)
console.log(CreatedDate.toDateString()); //  Sat Jan 14 2023

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1726921306000 // in milisecond from 1 jan 1970
console.log(CreatedDate.getTime()); // 1673634600000
console.log(Math.floor(Date.now()/1000)); // 1726921566 in seconds
console.log(CreatedDate.getDay()); // 6
console.log(CreatedDate.getMonth()); // 0

console.log(CreatedDate.toLocaleString('default',{
    weekday: "long",
})); // Saturday















