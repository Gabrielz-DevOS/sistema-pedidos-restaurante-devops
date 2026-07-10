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
            <input
              aria-label={`Cantidad de ${product.name}`}
              min="0"
              max="20"
              type="number"
              value={quantities[product.id] || 0}
              onChange={(event) => onQuantityChange(product.id, Number(event.target.value))}
            />
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
