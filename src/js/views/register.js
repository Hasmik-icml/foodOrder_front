const renderRegisterPage =()=>{
  console.log(4)
    const container =` <select name="tables" id="selectTable" class="table-name">
    <option value="Սեղանի համար" class="tableNumber"selected>Սեղանի համար</option>  
    <option value="1">1</option>  
    <option value="2">2</option>
    <option value="3">3</option>
  </select> 
  <button class="confirm-btn">Ամրագրել</button> `
  document.querySelector(".container").innerHTML = container;
};

export { renderRegisterPage };

