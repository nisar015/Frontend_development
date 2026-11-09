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
    handleinputchange=(event)=>{
        const inputval=[...this.state.Products]
        inputval[event.target.name]=event.target.value
        this.setState({Product:inputval})
    }
    handleaddproduct=()=>{
        const newpro=[...this.state.Product]
        newpro.push(this.state.Product)
        this.setState({Products:newpro})
    }
    handledit=(pro,index)=>{
        this.setState({Product:pro,editindex:index})
    }
    handledelete=(index)=>{
        const prodel=[...this.state.Products]
        prodel.splice(index,1)
        this.setState({Products:prodel})
    }
    render(){
        const {ProductID,ProductName,Category,Price,Quantity,Brand,Description}=this.state.Product
        return <div>
            <form>
                <label htmlFor="">ProductID</label>
                <input type="text" name="ProductID" onChange={(event)=>{this.handleinputchange(event)}} value={ProductID} /><br></br>
                <label htmlFor="">ProductName</label>
                <input type="text" name="ProductName" onChange={(event)=>{this.handleinputchange(event)}} value={ProductName} /><br></br>
                <label htmlFor="">Category</label>
                <input type="text" name="Category" onChange={(event)=>{this.handleinputchange(event)}} value={Category} /><br></br>
                <label htmlFor="">Price</label>
                <input type="text" name="Price" onChange={(event)=>{this.handleinputchange(event)}} value={Price} /><br></br>
                <label htmlFor="">Quantity</label>
                <input type="text" name="Quantity" onChange={(event)=>{this.handleinputchange(event)}} value={Quantity} /><br></br>
                <label htmlFor="">Brand</label>
                <input type="text" name="Brand" onChange={(event)=>{this.handleinputchange(event)}} value={Brand} /><br></br>
                <label htmlFor="">Description</label>
                <input type="text" name="Description" onChange={(event)=>{this.handleinputchange(event)}} value={Description} /><br></br>
                <button type="button" onClick={this.handleaddproduct}>Add Product</button><br></br>
                <button type="button" onClick={this.handleUpdateproduct}>Update Product</button>
            </form>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ProductID</th>
                        <th>ProductName</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Brand</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.Products.map((pro,index)=>{
                            return <tr>
                                <td>{pro.ProductID}</td>
                                <td>{pro.ProductName}</td>
                                <td>{pro.Category}</td>
                                <td>{pro.Price}</td>
                                <td>{pro.Quantity}</td>
                                <td>{pro.Brand}</td>
                                <td>{pro.Description}</td>
                                <td><button onClick={this.handledit(pro,index)}>Edit</button></td>
                                <td><button onClick={this.handledelete(index)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    }
}
export default ProductInventoryManagement