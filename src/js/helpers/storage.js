export const setCookie = (name, value, expDate = 30) => {
  let date = new Date();
  let time = date.getTime() + expDate * 24 * 60 * 60 * 1000;
  date.setTime(time);
  let expireDate = date.toUTCString();
  document.cookie = `${name} = ${value} ; expires = ${expireDate}`;
   // console.log(document.cookie);
}

export const getCookie = (name) =>{
  // console.log(document.cookie);
 console.log(document.cookie);
  if (document.cookie.indexOf(";") >= 0){
  return document.cookie.split(";").map(item => { 
    
    if (item.split("=")[0] === name) { 
      console.log("item.split", item.split("="));
      return item.split("="); 
    }
   })[1]; 
}
else{
  return document.cookie.split("=")[1];

}
}

