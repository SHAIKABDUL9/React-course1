import React from "react";

function Products({products}){
    return(
        <div>
            <h1>products</h1>
            <p>List of products will be displayed here:</p>
            <ul>
                {products.map((product, index)=>(
                    <li key ={index}>
                        <h2>{product.name}</h2>
                        <p>price: INR{product.price}</p>
                        <p>Description: {product.Description}</p>

                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Products;