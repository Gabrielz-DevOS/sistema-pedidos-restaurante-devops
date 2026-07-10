import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ProductSelector from './ProductSelector.jsx';
import { menuItems } from '../data/menu.js';
import { calculateOrderTotal, formatCurrency, validateOrder } from '../utils/orderUtils.js';

const initialQuantities = menuItems.reduce((accumulator, product) => {
  accumulator[product.id] = 0;
  return accumulator;
}, {});

function OrderForm({ nextOrderCode, onCreateOrder }) {
  const [customerName, setCustomerName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [quantities, setQuantities] = useState(initialQuantities);
  const [errorMessage, setErrorMessage] = useState('');

  const selectedItems = useMemo(
    () =>
      menuItems
        .map((product) => ({
          ...product,
          quantity: Number(quantities[product.id] || 0),
        }))
        .filter((product) => product.quantity > 0),
    [quantities],
  );

  const orderTotal = calculateOrderTotal(selectedItems);

  function handleQuantityChange(productId, quantity) {
    setQuantities((currentQuantities) => ({
      ...currentQuantities,
      [productId]: quantity,
    }));
  }

  function resetForm() {
    setCustomerName('');
    setTableNumber('');
    setQuantities(initialQuantities);
    setErrorMessage('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validation = validateOrder({ customerName, items: selectedItems });
    if (!validation.isValid) {
      setErrorMessage(validation.message);
      return;
    }

    onCreateOrder({
      customerName,
      tableNumber,
      items: selectedItems,
      total: orderTotal,
    });
    resetForm();
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="order-code">Código</label>
        <input id="order-code" type="text" value={nextOrderCode} readOnly />
      </div>

      <div className="form-row">
        <label htmlFor="customer-name">Cliente</label>
        <input
          id="customer-name"
          type="text"
          value={customerName}
          onChange={(event) => setCustomerName(event.target.value)}
          placeholder="Nombre del cliente"
        />
      </div>

      <div className="form-row">
        <label htmlFor="table-number">Mesa</label>
        <input
          id="table-number"
          type="text"
          value={tableNumber}
          onChange={(event) => setTableNumber(event.target.value)}
          placeholder="Ej. 4"
        />
      </div>

      <ProductSelector quantities={quantities} onQuantityChange={handleQuantityChange} />

      <div className="form-total">
        <span>Total del pedido</span>
        <strong>{formatCurrency(orderTotal)}</strong>
      </div>

      {errorMessage ? <p className="form-error">{errorMessage}</p> : null}

      <button className="primary-button" type="submit">
        Registrar pedido
      </button>
    </form>
  );
}

OrderForm.propTypes = {
  nextOrderCode: PropTypes.string.isRequired,
  onCreateOrder: PropTypes.func.isRequired,
};

export default OrderForm;
