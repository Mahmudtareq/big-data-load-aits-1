import React, { useEffect, useState } from 'react';
import ProductsPage from '../ProductsPage/ProductsPage';
import './Products.css';

const Products = () => {
    const [itemLists, setItemLists] = useState([]);
    useEffect(() => {
        fetch('./bigData.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setItemLists(data));
    },[])
    return (
        <div>
            <h2>Total length of data:{itemLists.length }</h2>
            {
                itemLists.slice(0,10).map(itemList =>
                    <ProductsPage
                        itemList={itemList}
                        key={itemList.id}
                    
                    ></ProductsPage>
            )
           }
            
        </div>
    );
};

export default Products;