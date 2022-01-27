export const setCookie = (name, value, expDate = 30) => {
  let date = new Date();
  let time = date.getTime() + expDate * 24 * 60 * 60 * 1000;
  document.cookie = `${name} = ${value} ; expires = ${time.toUTCString()}`;
}

// export const getCookie = () =>{

// }