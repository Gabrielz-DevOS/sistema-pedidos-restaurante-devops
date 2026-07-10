import PropTypes from 'prop-types';

function Header({ onOpenNewOrder }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 className="topbar-title">Gestión de Pedidos</h1>
        <span className="topbar-badge">v2.0</span>
      </div>
      <div className="topbar-right">
        <button className="btn-primary" onClick={onOpenNewOrder}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Nuevo Pedido
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  onOpenNewOrder: PropTypes.func.isRequired,
};

export default Header;
