var APIlink = ' http://localhost:3000/product';

function getData() {
    fetch(APIlink)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            renderProduct(data)
        })
}

function start() {
    getData();
}
start();

function renderProduct(products) {
    var documentItems = document.querySelectorAll('.product');
    var ul = document.createElement("ul");
    ul.classList.add("product-item");
    var html = products.map(function(product) {
        return `
        <li class="books" onmouseenter="showTitle(${product.bookId})" mouseleave="unShowTitle(${product.bookId})">
        <a href="detail.php?id=${product.bookId}">
        <img class="book" src="${product.bookImage}">
        </a>  
        <ul class="booktitle">
       <div class="btn-buy text-center">${product.bookTitle}</div>
       <p>Giá :${product.bookPrice}</p>
       <p>Tác giả  :${product.bookAuthor}</p>
       <div class="form-group text-center">
           <div class="col-sm-10 col-sm-offset-2">
               <button style="font-size: 13px;line-height: 15px;width: 150px;height:35px" type="submit" class="btn btn-buy">Thêm vào giỏ hàng</button>
           </div>
      </div>
      <div class="form-group text-center">
           <div class="col-sm-10 col-sm-offset-2">
              <button style="font-size: 13px;line-height: 15px;width: 150px;;height:35px" type="submit" class="btn btn-buy">Mua ngay</button>
           </div>
      </div>
</ul> 
       </li>   
       
        `;
    })
    ul.innerHTML = html.join("");
    documentItems[0].appendChild(ul);
    console.log(documentItems)
}