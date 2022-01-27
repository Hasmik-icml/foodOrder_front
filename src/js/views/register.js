const renderRegisterPage =()=>{
  
    const container =`<div class="containerReg"> <select name="tables" id="selectTable" class="table-name">
    <option class="tableNumber" hidden>Սեղանի համար</option>  
    <option value="1">1</option>  
    <option value="2">2</option>
    <option value="3">3</option>
  </select> 
  <button class="confirm-btn">Ամրագրել</button></div> `
  document.querySelector(".container").innerHTML = container;
};

export { renderRegisterPage };

