import React, { useEffect, useState } from 'react';
import ProductsPage from '../ProductsPage/ProductsPage';
import './Products.css';
import axios from 'axios';
import { Button, Col, Container, Row } from 'react-bootstrap';
import SearchResult from '../SearchResult/SearchResult';
import AddNewItems from '../AddnewItems/AddNewItems';
import { Link, NavLink } from "react-router-dom";
const Products = () => {
    const [itemLists, setItemLists] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [loading, setLoading] = useState(false);
   
    useEffect(() => {
        setLoading(true);
        axios.get(`./bigData.json`)
            .then((res) => {
                setItemLists(res.data);
                setLoading(false);
        })
    }, []);

    useEffect(() => {
        setFilteredResults(
            itemLists.filter(person => {
                return person.first_name.toLowerCase().includes(searchInput.toLowerCase())
            })

        )
        
    },[searchInput,itemLists])

    if (loading) {
       return <p>Loading employee....</p>
   }
    
    return (
        <Container>
            <h2>Total length of data:{itemLists.length}</h2>
            <h2>match data length:{filteredResults.length}</h2>
            <Container  style={{position: "relative"}}   className=''>
                  <Row>
                        <Col md={8} lg={8} sm={3} xs={12}>
                             <input
                             placeholder="Search By First Name"
                             className="form-control cursor"
                            //  onChange={SearchList}
                             onChange={(e) =>setSearchInput(e.target.value)}
                             type="text"
                        />

                    </Col>
                    <Col md={4} lg={4} sm={3} xs={12}>
                          <Link style={{ textDecoration: 'none', backgroundColor: 'green', padding: '10px', textAlign: 'center' }} to="/addNewItem">Add New Item</Link>
                       
                    </Col>
                    </Row>
            </Container>
            
         <Container>
            <div className="search-container">
                <div className=''>
                    { searchInput ?  (
                        <Container className='card-grid my-5'>
                            {
                           filteredResults ? (
                                        filteredResults.map(employee => <SearchResult
                                            employee={employee}
                                            key={employee.id}
                                                ></SearchResult>)
                                                ):
                                                
                                        (
                                           <p>hello</p>
                
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
            
        </Container>
    );
};

export default Products;