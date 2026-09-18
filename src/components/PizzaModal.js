import { Button, Modal } from 'react-bootstrap';

function PizzaModal({ pizza, onClose, onAddToCart }) {
  if (pizza === null) {
    return null;
  }

  return (
    <Modal show={true} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{pizza.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={pizza.img} alt={pizza.name} className="img-fluid rounded mb-3" />
        <p>{pizza.desc}</p>
        <p className="mb-1">Cỡ: {pizza.size}</p>
        <p className="mb-1">Loại: {pizza.category}</p>
        <p className="mb-0 text-danger fw-bold fs-5">
          {pizza.price.toLocaleString('vi-VN')} đ
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Đóng
        </Button>
        <Button
          variant="danger"
          disabled={pizza.stock === 0}
          onClick={() => {
            onAddToCart(pizza);
            onClose();
          }}
        >
          Thêm vào giỏ
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PizzaModal;
