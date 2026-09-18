import { Badge, Container, Nav, Navbar } from 'react-bootstrap';

function Header({ cartCount }) {
  return (
    <Navbar bg="danger" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">🍕 Pizza SE2059</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="me-auto">
            <Nav.Link href="#menu">Thực đơn</Nav.Link>
            <Nav.Link href="#about">Giới thiệu</Nav.Link>
            <Nav.Link href="#contact">Liên hệ</Nav.Link>
          </Nav>
          <Navbar.Text className="text-white">
            Giỏ hàng <Badge bg="light" text="dark">{cartCount}</Badge>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
