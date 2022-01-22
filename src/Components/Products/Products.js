import React, { useEffect, useState } from 'react';
import ProductsPage from '../ProductsPage/ProductsPage';
import './Products.css';
import axios from 'axios';
import { Button, Col, Container, Row } from 'react-bootstrap';
import SearchResult from '../SearchResult/SearchResult';
import AddNewItems from '../AddnewItems/AddNewItems';
const Products = () => {
    const [itemLists, setItemLists] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
   
    useEffect(() => {
        axios.get(`./bigData.json`)
            .then((res) => {
                setItemLists(res.data);
        })
    }, []);
    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        if (searchInput !== '') {
            const filteredData = itemLists.filter((item) => {
                // return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
                return item.first_name.toLowerCase().includes(searchInput.toLowerCase());
            
            })
            // console.log(filteredData);
            setFilteredResults(filteredData);
            // setItemLists(filteredData);
        } 
        else {
            setFilteredResults(itemLists);
        //    setItemLists(itemLists);
        }
    }
   
    
    return (
        <Container>
            <h2>Total length of data:{itemLists.length}</h2>
            <h2>match data length:{filteredResults.length}</h2>
            <Container  style={{position: "relative"}}   className=''>
                  <Row>
                        <Col md={6} lg={12} sm={3} xs={12}>
                             <input
                             placeholder="Search By First Name"
                             className="form-control cursor"
                            //  onChange={SearchList}
                             onChange={(e) =>searchItems(e.target.value)}
                             type="text"
                        />

                        </Col>
                    </Row>
            </Container>
            
         <Container>
            <div className="search-container">
                <div className=''>
                    { searchInput ?  (
                        <Container className='card-grid my-5'>
                            {
                                itemLists ? (
                                        filteredResults.map(employee => <SearchResult
                                            employee={employee}
                                            key={employee.id}
                                                ></SearchResult>)
                                                )
                                                    :
                                        (
                                            <AddNewItems></AddNewItems>
                
                                        )
                                        }
                        </Container>
                        )
                        :
                        (
                    
             <Container fluid={true} className='card-grid my-5'>
            {
                itemLists.slice(0,30).map(itemList =>
                    <ProductsPage
                        itemList={itemList}
                        key={itemList.id}
                    ></ProductsPage>)
                }
             </Container>

                        )}

            </div>
         </div> 
            </Container>

             {/* <Container fluid={true} className='card-grid my-5'>
            {
                itemLists.slice(0,30).map(itemList =>
                    <ProductsPage
                        itemList={itemList}
                        key={itemList.id}
                    ></ProductsPage>)
                }
             </Container> */}
    
        </Container>
    );
};

export default Products;