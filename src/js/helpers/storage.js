export const setCookie = (name, value, expDate = 30) => {
  let date = new Date();
  let time = date.getTime() + expDate * 24 * 60 * 60 * 1000;
  date.setTime(time);
  let expireDate = date.toUTCString();
  document.cookie = `${name} = ${value} ; expires = ${expireDate}`;
   // console.log(document.cookie);
}

export const getCookie = (name) =>{//table=3 ====>[table , 3] 
  // console.log(document.cookie); 
  return document.cookie.split(";").map(item => { 
    if (item.split("=")[0] === name) { 
      return item.split("="); 
    }
   })[1]; 
}

