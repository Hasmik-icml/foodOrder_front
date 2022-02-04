import router from "../routing";
import {registerEventListeners} from "../helpers/eventListeners"
import {setCookie} from "../helpers/storage";
const renderRegisterPage =()=>{
    document.querySelector(".container").innerHTML
        =`<div class="containerReg">
 <select name="tables" id="selectTable" class="table-name">
    <option class="tableNumber" hidden>Սեղանի համար</option>  
   
  </select> 
  <button class="confirm-btn">Ամրագրել</button></div> `

  



    registerEventListeners();
}

export { renderRegisterPage };


