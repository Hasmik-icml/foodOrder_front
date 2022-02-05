import router from "../routing";

import {registerEventListeners} from "../helpers/eventListeners"
import {setCookie} from "../helpers/storage";
import  CONSTANTS from "../helpers/constants";

const renderRegisterPage =()=>{
    document.querySelector(".container").innerHTML
        =`<div class="containerReg">
 <select name="tables" id="selectTable" class="table-name">
    <option class="tableNumber" hidden>Սեղանի համար</option>  
   
  </select> 
  <button class="confirm-btn">Ամրագրել</button></div> `

  fetch(`${CONSTANTS.HOST}/table?url=get-all`)  
    
  .then(function (response){
        return response.json()
    }).then(function(data){
        let id = data.reduce((acc,current) => {
            return acc += `<option value="${current.id}">${current.number}</option> `
    }, "");
        document.getElementById("selectTable")
            .insertAdjacentHTML("beforeend", id);
})

   registerEventListeners();
}

export {
    renderRegisterPage
};


/*<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>*/

