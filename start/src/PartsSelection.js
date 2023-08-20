import { Fragment } from 'react';
import i1 from "./i1.jpg"
import i2 from "./i2.jpg"
import i3 from "./i3.jpg"
import i4 from "./i4.jpg"
import i5 from "./i5.jpg"
import InputGroup from 'react-bootstrap/InputGroup'
import classes from "./Description.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function PartsSelection() {
  return (
      <Fragment>
        <Navbar expand="lg" className={classes.sticky}>
      <Container>
        <Link style={{textDecoration:"none"}} to="/"><Navbar.Brand>Robot character Parts</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to="/" style={{textDecoration:"none",color:"rgb(83, 59, 67)"}}>Home</Link></Nav.Link>
            <Nav.Link href="#home">Parts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>          
          <div style={{margin: "20px",display:"-webkit-inline-flex"}}>
              <Card style={{marginInline:"20px", width: '40rem' }}>
                <Card.Img variant="top" src={i1} />
                <Card.Body>
                    <Card.Title>Robot Head</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </Card.Body>
            </Card>
              <Card style={{marginInline:"20px" }}>
                <Card.Img variant="top" src={i2} />
                <Card.Body>
                    <Card.Title>Robot Eye</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </Card.Body>
            </Card>
              <Card style={{ marginInline:"20px" }}>
                <Card.Img variant="top" src={i3} />
                <Card.Body>
                    <Card.Title>Robot Legs</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </Card.Body>
            </Card>
              <Card style={{marginInline:"20px" }}>
                <Card.Img variant="top" src={i4}style={{ width: '100px' }} />
                <Card.Body>
                    <Card.Title>Robot Hand</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </Card.Body>
            </Card>
              <Card style={{marginInline:"20px" }}>
                <Card.Img variant="top" src={i5}style={{ width: '100px' }} />
                <Card.Body>
                    <Card.Title>Robot Hand</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </Card.Body>
              </Card>
          </div>
          <Button variant='dark' style={{marginInline:"20%",margin:"20px"}}>Next</Button>
    </Fragment>
  );
}

export default PartsSelection;