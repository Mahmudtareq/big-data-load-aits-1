import React from 'react';
import { Col, Container, Row,Card  } from 'react-bootstrap';
import { FixedSizeGrid as Grid } from 'react-window';

const SearchResult = ({employee}) => {
    const { country, thumbnailUrl, url, des, first_name ,email} = employee;
  const Cell = ({ style }) => (
            <Row className='' xs={1} md={2}>
              <Col className=''>
                  <Card style={{ width: '16rem' }}>
                      <Card.Img variant="top" height={170} src={url} />
                        <Card.Body>
                            <Card.Title className='text-start'>Name:{ first_name}</Card.Title>
                            <Card.Text  className='justify'>
                           {des.slice(0,50)}
                            </Card.Text>
                            <Card.Text  className='text-start'>{email}
                            </Card.Text>
                        </Card.Body>
                  </Card>
              </Col>
    </Row>
);
    return (
        <div>
            <Container className=''> 
                
                <Container fluid={true} className="">
               <Grid
                        columnCount={1}
                        columnWidth={250}
                        height={400}
                        rowCount={1}
                        rowHeight={1}
                        className="grid-div"
                        width={330}
                  >
                     {Cell}
                </Grid>  
                </Container>
                
        </Container>
        </div>
    );
};

export default SearchResult;