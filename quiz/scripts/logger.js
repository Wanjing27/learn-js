// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg(obj){
    console.error(obj.errMsg);
}
var myObject = { errMsg: "This is an error message." };
logMsg(myObject);
