export default class Ui{

    constructor(divTable, divAct, inventary){
        this.table = divTable;
        this.divAct = divAct;
        this.inventary = inventary;
    }


    clean(){
        let table = document.getElementById('tbProducts');
        table.innerHTML = '<tr><th id="product">Product</th><th id="id">ID</th><th id="amount">Quantity</th><th id="price">Price</th><th id="totalPrice">Total</th></tr>'
    }


    showHistory(action){
        this.divAct.innerHTML += `<label>${action}</label>`
      }


    revealProduct(product){
        if(product){
            let table = document.getElementById('tbProducts')
            let row = table.insertRow(-1);
            let colID = row.insertCell(0);
            let colName = row.insertCell(1);
            let colQuantity = row.insertCell(2);
            let colPrice = row.insertCell(3)
            let colValue = row.insertCell(4);
            row.setAttribute('id', `row${product.iD()}`);
            colName.setAttribute('id', `colName${product.iD()}`);
            colID.setAttribute('id', `colId${product.iD()}`);
            colQuantity.setAttribute('id', `colMount${product.iD()}`);
            colPrice.setAttribute('id', `colPrice${product.iD()}`);
            colValue.setAttribute('id', `colTotalPrice${product.iD()}`);
          
            colName.innerHTML = product.naMe();
            colID.innerHTML = product.iD();
            colQuantity.innerHTML = product.quantitY();
            colPrice.innerHTML = product.priCe();
            colValue.innerHTML = product.priceOfProduct();
          }
    }


    list(){
        this.clean()

          if(this.inventary.length !== 0){
            for(var i=0; i < this.inventary.length; i++){
              if(this.inventary[i] !== null){
                let product = this.inventary[i]
                this.revealProduct(product)
              }
            }
          }
      }

      inverseList(){
        var end = this.inventary.length
        var count = end
        this.clean()

        if(this.inventary.length !== 0){
          for(var i = 0; end > i; i++){
            count--
            if(this.inventary[count] !== null){
                this.revealProduct(this.inventary[count])
            }
          }
        }
    }
}