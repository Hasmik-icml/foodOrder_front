const renderBasketPage = () => {
    const card = `<i class="arrow">🡄</i>
    <div class="card">
    <div><img src="../img/cheesePizza.png" width="60px" height="60px"/></div>
    <div><h5>Պեպպերոնի</h5></div>
    <div><label>Գին։</label> <label>350դր</label></div>
    <div>
      <label>Քանակ։</label>
      <label>-</label>
      <label>5</label>
      <label>+</label>
    </div>

    <div><label>Արժեք</label> <label>700դր</label></div>
    <div><h5 class="deleteProduct">X</h5></div>
  </div>
  <div class="card">
    <div><img src="../img/pepperoniPizza.png" width="60px" height="60px" /></div>
    <div><h5>Իտալական</h5></div>
    <div><label>Գին։</label> <label>350դր</label></div>
    <div>
      <label>Քանակ։</label>
      <label>-</label>
      <label>5</label>
      <label>+</label>
    </div>

    <div><label>Արժեք</label> <label>700դր</label></div>
    <div><h5 class="deleteProduct">X</h5></div>
  </div>
  <div class="card">
    <div><img src="../img/pepperoniPizza.png" width="60px" height="60px" /></div>
    <div><h5>Բուխարի</h5></div>
    <div><label>Գին։</label> <label>350դր</label></div>
    <div>
      <label>Քանակ։</label>
      <label>-</label>
      <label>5</label>
      <label>+</label>
    </div>

    <div><label>Արժեք</label> <label>700դր</label></div>
    <div><h5 class="deleteProduct">X</h5></div>
  </div>
  <div class="total"><label>Ընդհանուր:</label> <label>2100դր</label></div>
  <button class="confirm-btn">Հաստատել</button>`;

  document.querySelector(".container").innerHTML = card;
};

export {renderBasketPage};