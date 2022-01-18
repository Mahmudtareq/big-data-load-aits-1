import React, { useEffect, useState } from 'react';
import ProductsPage from '../ProductsPage/ProductsPage';
import './Products.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
const Products = () => {
    const [itemLists, setItemLists] = useState([]);
    // const [searchText, setSearchText] = useState('');
    useEffect(() => {
        fetch('./bigData.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setItemLists(data));
    }, []);

    const SearchList = (e) => {
        let keyword = e.target.value;
        if (keyword !== "") {
            const results = itemLists.filter((search) => {
                return search.first_name
                    .toLowerCase()
                    .startsWith(keyword.toLowerCase());
            });
            setItemLists( results);
            // setSearchText(results);
            // console.log(results);
        } 
        else {
            // setSearchText(searchText);
            setItemLists(itemLists);
        }
    };
        
    return (
        <Container>
            <h2>Total length of data:{itemLists.length}</h2>
            <Container  style={{position: "relative"}}   className=''>
                  <Row>
                        <Col md={6} lg={12} sm={3} xs={12}>
                             <input
                             placeholder="Search By First Name"
                             className="form-control cursor"
                             onChange={SearchList}
                             type="text"
                        />

                        </Col>
                    </Row>
            </Container>
        

            <Container fluid={true} className='card-grid my-5'>
            {
                itemLists.slice(0,30).map(itemList =>
                    <ProductsPage
                        itemList={itemList}
                        key={itemList.id}
                    ></ProductsPage>)
                }
            </Container>
    </Container>
    );
};

export default Products;