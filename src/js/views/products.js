const renderProductsPage=()=>{
  const container= ` <div class="grid-item">Տաք ուտեստ</div>
    <div class="grid-item">Խորտիկներ</div>
    <div class="grid-item">Քաղցրավենիք</div>
    <div class="grid-item">Ըմպելիք</div>
    <div class="grid-item">Պիցցաներ</div>
    <div class="grid-item">Աղցաններ</div>`
    document.querySelector(".container").innerHTML = container;
};
export { renderProductsPage };