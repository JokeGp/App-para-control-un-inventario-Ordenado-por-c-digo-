export default class Inventary{
    constructor(){
        this.inventary = new Array();
    }

    getInventary(){
      return this.inventary;
    }


    getPositionById(id){
        for(let i = 0; i < this.inventary.length; i++){

          if(this.inventary[i].iD() == id){
            return i;
          }
        }
      }


      setLimit(pos){
        if(pos <= 0){
          alert('Theres no position 0')
          return false;
        }
        if(pos > this.inventary.length){
          alert('Theres no room for that position');
          return false;
        }
        return true;
      }


      searchId(id) {
        id = Number(id);
        let number = null;
        for (let i = 0; i < this.inventary.length; i++) {
          if (this.inventary[i].iD() == id) {
            number = this.inventary[i]
          }
        }
        return number;
    }


    searchRepeatId(product){
        let pos = true;
        for(let i = 0; i < this.inventary.length; i++){
          if(this.inventary[i].iD() === product.iD()){
            pos = false;
          }
        }
        return pos
    }


    getInventaryByOrder(){
        let pos = this.inventary.length - 1;
        for (let i = 0; i < this.inventary.length; i++) {

            if (this.inventary[pos].iD() < this.inventary[i].iD()) {
                let value = this.inventary[pos];
                this.inventary[pos] = this.inventary[i];
                this.inventary[i] = value;
            }
        }
    }


    add(product){
        let add = false;
        if(this.inventary.length <= 0){
          add = this.inventary.push(product);
        } else if(this.inventary.length < 20){
          let pas = this.searchRepeatId(product);
          if(pas === true){
            add = this.inventary.push(product);
          }
        } else {
          add = null;
        }
        return add;
      }


      deleteProduct(idToDelete){
        if(!idToDelete){
          return null;
        }
        if(!this.searchId(idToDelete)){
          return false;
        }

        let pos = this.getPositionById(idToDelete)
        let nextPos = pos + 1;

        while(nextPos < this.inventary.length){
          let change = this.inventary[pos]
          this.inventary[pos] = this.inventary[nextPos];
          this.inventary[nextPos] = change
          pos++;
          nextPos++;
        }
        return this.inventary.pop()
        }


        insertProduct(product, pos) {
            if(!this.setLimit(pos)){
              return false;
            }

            let end = this.inventary.length + 1; 
            let position = pos - 1;

            for(; end > position; end--){
              this.inventary[end] = this.inventary[end - 1];
            }

            this.inventary[position] = product;
            return true;
          }
          
    


}