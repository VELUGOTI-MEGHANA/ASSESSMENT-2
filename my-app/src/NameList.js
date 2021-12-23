import React from "react";

function NameList(){
    const names = ['Meghana','Sai','Swathi']
    const nameList = names.map(name=><h1>{name}</h1>)
    const Products= [{id:1, name:'TV', rate:567},
                    {id:2, name:'Mobile', rate:786},
                    {id:2, name:'Laptop', rate:587}]

    const productList = Products.map(product =><h1>{product.id} {product.name}</h1>)

    return(
        <div>
            {nameList}
            {productList}
        </div>
    )


}
export default NameList;