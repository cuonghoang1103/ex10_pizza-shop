import { Badge, Button, Card } from 'react-bootstrap';

function PizzaCard({ pizza, onShowDetail, onAddToCart }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start">
          <Card.Title>{pizza.name}</Card.Title>
          <Badge bg="secondary">{pizza.size}</Badge>
        </div>
        <Card.Text className="text-danger fw-bold fs-5">
          {pizza.price.toLocaleString('vi-VN')} đ
        </Card.Text>
        <Card.Text className="text-muted">
          {pizza.stock > 0 ? 'Còn ' + pizza.stock + ' cái' : 'Tạm hết hàng'}
        </Card.Text>
        <div className="mt-auto d-flex gap-2">
          <Button variant="outline-danger" size="sm" onClick={() => onShowDetail(pizza)}>
            Chi tiết
          </Button>
          <Button
            variant="danger"
            size="sm"
            disabled={pizza.stock === 0}
            onClick={() => onAddToCart(pizza)}
          >
            Thêm vào giỏ
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;
