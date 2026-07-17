import PropTypes from 'prop-types';

function Header({ onOpenNewOrder, onToggleSidebar, activeView = 'orders' }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={onToggleSidebar}
          aria-label="Abrir menú de navegación"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <h1 className="topbar-title">
          {activeView === 'orders' ? 'Gestión de Pedidos' : ' '}
        </h1>
      </div>
      <div className="topbar-right">
        {activeView === 'orders' && (
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
            <span className="btn-primary-label">Nuevo Pedido</span>
          </button>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  onOpenNewOrder: PropTypes.func.isRequired,
  onToggleSidebar: PropTypes.func.isRequired,
  activeView: PropTypes.string,
};

export default Header;

