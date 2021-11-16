// // setting cookie value
let cookieName = "Cookie Counter";
// cookie is set to 0 for initial value
let cookieCounter = 0;

//this function is to create the cookie and by adding no expiration, the cookie is deleted when the browser is closed
function setCookie(cName, cValue) {
  document.cookie = cName + "=" + cValue + "; "
}

//this function allows you to get the cookie value
function getCookie(cName) {
  let cValue = document.cookie;
  let start = cValue.indexOf(" " + cName + "=");
  if(start === -1) {
    start = cValue.indexOf(cName + "=");
  } 
  if(start === -1){
    cValue = null;
  } else {
    start = cValue.indexOf("=", start) + 1;
    let end = cValue.indexOf(";", start);
    if(end === -1) {
      end = cValue.length;
    }
    cValue = unescape(cValue.substring(start, end))
  }
  return cValue
}

//this function is specifically for the button to reset the cookie counter value
function resetValue() {
  setCookie(cookieName, cookieCounter);
  console.log("Cookie is set to 0");
}

//this function is necessary incase it is a brand new browser and no cookie has been created yet
function initialValue() {
  setCookie(cookieName, cookieCounter);
  console.log("Cookie is set to 0");
}

//this function allows the cookie to increment by 1 everytime it reloads
function returnCookie() {
let cookies = getCookie(cookieName);
  if(cookies === null) {
    initialValue();
  } else {
      cookies++;
      setCookie(cookieName, cookies);
      console.log("Cookie is set to " + cookies)
  }
}
returnCookie();





