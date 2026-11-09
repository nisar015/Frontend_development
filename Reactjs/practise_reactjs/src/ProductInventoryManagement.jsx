import { Component } from "react";

class ProductInventoryManagement extends Component{
    constructor(){
        super()
        this.state={
            Products:[
                {ProductID:10,ProductName:"Laptop",Category:"Electronics",Price:55000,Quantity:1,Brand:"Acer",Description:"Good graphic card"},
                {ProductID:11,ProductName:"Mouse",Category:"Accessories",Price:500,Quantity:1,Brand:"Asus",Description:"Good processor"},
                {ProductID:101,ProductName:"Keyboard",Category:"Accessories",Price:1200,Quantity:1,Brand:"Dell",Description:"Good graphic card"}
            ],
            Product:{
                ProductID:"",
                ProductName:"",
                Category:"",
                Price:"",
                Quantity:"",
                Brand:"",
                Description:""
            }
        }
    }
    render(){
        const {ProductID,ProductName,Category,Price,Quantity,Brand,Description}=this.state.Product
        return <div>
            <form>
                <label htmlFor="">ProductID</label>
                <input type="text" name="ProductID" onChange={(event)=>{handleinputchange(event)} value={ProductID}}/>
            </form>
        </div>
    }
}
export default ProductInventoryManagement