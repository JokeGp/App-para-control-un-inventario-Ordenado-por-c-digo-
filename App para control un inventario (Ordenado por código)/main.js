import Product from "./Class/product.js"
import Inventary from "./Class/inventary.js"
import Ui from "./Class/ui.js"

class App{
    constructor(){
        this.btnBrowse = document.getElementById('btnBrowse');
        this.btnBrowse.addEventListener('click', this.searchForProduct);
        this.btnRegister = document.getElementById('btnRegister');
        this.btnRegister.addEventListener('click', this.add);
        this.list = document.getElementById('btnList');
        this.listInverse = document.getElementById('btnListInverse');
        this.btnInsert = document.getElementById('btnInsert');
        this.list.addEventListener('click', this.theList);
        this.listInverse.addEventListener('click', this.inverseList);
        this.btnInsert.addEventListener('click', this.insertSelectedProduct);
        this.inventary = new Inventary()
        this.table = document.getElementById('forTable');
        this.divAct = document.getElementById('actions');
        this.btnDelete = document.getElementById('btnDelete');
        this.btnDelete.addEventListener('click', this.delete);
    }


    searchForProduct = () =>{
        let identifier = document.getElementById('id').value;
        let ui = new Ui(this.table, this.divAct, this.inventary);
        let product = this.inventary.searchId(identifier);
        if(product !== null){
            ui.showHistory(`The ${product.naMe()} exist`)
        }
    }


    add = () =>{
        let addUi = new Ui(this.table, this.divAct, this.inventary);
        let product = this.makeProduct()
        if(product == null){
            addUi.showHistory('Please add al de values');
            return null
        }

        let added = this.inventary.add(product);
        console.log(added);

            if(added !== null && added !== false){
                this.inventary.getInventaryByOrder()
                addUi.showHistory(`The product ${product.naMe()} has been added`)
            } else if(added === null){
                addUi.showHistory(`The product ${product.naMe()} has not been added`)
            } else if(added === false){
                addUi.showHistory(`The product ${product.naMe()} already exists`)
            }
    }


    makeProduct = () => {
        let id = document.getElementById('id').value;
        let name = document.getElementById('name').value;
        let quantity = document.getElementById('mount').value;
        let price = document.getElementById('price').value;
        if(id && name && quantity && price){
            var product = new Product(id, name, quantity, price)
            return product;
        }
        return null
    }


    insertSelectedProduct = () => {
        let insert = false;
        let product = this.makeProduct()
        let position = document.getElementById('insertValue').value;
        if(product !== null){
            insert = this.inventary.insertProduct(product, position);
        }
        if(product == null){
            alert('Please enter a product')
        }
        if(insert){
            let insertInUi = new Ui(this.table, this.divAct, this.inventary);
            insertInUi.showHistory(`You inserted${product.naMe()} in the position ${position}`)
        }
    }


    delete = () => {
        let deleteUi = new Ui(this.table, this.divAct, this.inventary);
        let id = document.getElementById('id').value;
        let pas = this.inventary.deleteProduct(id);
        if(pas == null){
            deleteUi.showHistory("please ingress a product ID");
            return null;
        } else if(pas == false){
            deleteUi.showHistory(`that ${id} dont exist`)
            return false
        }
        deleteUi.showHistory(`the product ${pas.naMe()} has been eliminated`)

    }


    theList = () => {
        let listUi = new Ui(this.table, this.divAct, this.inventary.getInventary());
        listUi.list()
    }


    inverseList = () => {
        let uiListInverse = new Ui(this.table, this.divAct, this.inventary.getInventary());
        uiListInverse.inverseList()
    }
}

new App();