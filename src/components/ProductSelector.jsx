import PropTypes from 'prop-types';
import { menuItems } from '../data/menu.js';
import { formatCurrency } from '../utils/orderUtils.js';

function ProductSelector({ quantities, onQuantityChange }) {
  return (
    <div className="product-selector">
      <div className="subheading">
        <h3>Menú</h3>
        <span>Seleccione productos</span>
      </div>

      <div className="product-list">
        {menuItems.map((product) => (
          <div className="product-row" key={product.id}>
            <div>
              <strong>{product.name}</strong>
              <span>{product.category}</span>
            </div>
            <p>{formatCurrency(product.price)}</p>
            <div className="counter-controls">
              <button
                type="button"
                className="counter-btn"
                onClick={() => onQuantityChange(product.id, Math.max(0, (quantities[product.id] || 0) - 1))}
                aria-label={`Disminuir cantidad de ${product.name}`}
              >
                -
              </button>
              <span className="counter-value">{quantities[product.id] || 0}</span>
              <button
                type="button"
                className="counter-btn"
                onClick={() => onQuantityChange(product.id, Math.min(20, (quantities[product.id] || 0) + 1))}
                aria-label={`Aumentar cantidad de ${product.name}`}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ProductSelector.propTypes = {
  quantities: PropTypes.object.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default ProductSelector;
