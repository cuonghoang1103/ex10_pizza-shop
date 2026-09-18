import { useState } from 'react';
import { Alert, Col, Container, Form, Row } from 'react-bootstrap';
import './App.css';
import { pizzas } from './data/pizzas';
import Header from './components/Header';
import PizzaCard from './components/PizzaCard';
import PizzaModal from './components/PizzaModal';
import Footer from './components/Footer';

const categories = ['Tất cả', 'Truyền thống', 'Thịt', 'Gà', 'Chay', 'Combo'];

function App() {
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('Tất cả');
  const [message, setMessage] = useState('');

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
    setMessage('Đã thêm ' + pizza.name + ' vào giỏ hàng');
  };

  const shown = pizzas.filter((p) => {
    const matchName = p.name.toLowerCase().includes(keyword.toLowerCase());
    const matchCategory = category === 'Tất cả' || p.category === category;
    return matchName && matchCategory;
  });

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div>
      <Header cartCount={cart.length} />

      <Container className="py-4">
        <h1 className="text-center mb-4">Thực đơn Pizza</h1>

        {message !== '' && (
          <Alert variant="success" dismissible onClose={() => setMessage('')}>
            {message}
          </Alert>
        )}

        <Row className="mb-4">
          <Col xs={12} md={7} className="mb-2">
            <Form.Control
              type="text"
              placeholder="Tìm pizza theo tên..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </Col>
          <Col xs={12} md={5}>
            <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <Row xs={1} md={2} lg={3} className="g-4">
          {shown.map((pizza) => (
            <Col key={pizza.id}>
              <PizzaCard
                pizza={pizza}
                onShowDetail={setSelected}
                onAddToCart={addToCart}
              />
            </Col>
          ))}
        </Row>

        {shown.length === 0 && (
          <p className="text-center text-muted mt-4">Không tìm thấy pizza nào.</p>
        )}

        {cart.length > 0 && (
          <Alert variant="danger" className="mt-4">
            Giỏ hàng có {cart.length} món - Tổng tiền: {total.toLocaleString('vi-VN')} đ
          </Alert>
        )}
      </Container>

      <PizzaModal
        pizza={selected}
        onClose={() => setSelected(null)}
        onAddToCart={addToCart}
      />

      <Footer />
    </div>
  );
}

export default App;
