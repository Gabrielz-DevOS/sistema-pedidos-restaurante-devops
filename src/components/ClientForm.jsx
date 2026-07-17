import { useState } from 'react';
import PropTypes from 'prop-types';

function ClientForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    creditLimit: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('El nombre del cliente es obligatorio');
      return;
    }

    if (formData.creditLimit && isNaN(Number(formData.creditLimit))) {
      setError('El límite de crédito debe ser un número válido');
      return;
    }

    onSubmit({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      creditLimit: formData.creditLimit,
    });

    setFormData({ name: '', phone: '', email: '', creditLimit: '' });
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      {error && <p className="form-error" role="alert">{error}</p>}
      
      <div className="form-row">
        <label htmlFor="clientName">Nombre del Cliente *</label>
        <input
          id="clientName"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Ej. Juan Pérez"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="clientPhone">Teléfono</label>
        <input
          id="clientPhone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="Ej. 0991234567"
        />
      </div>

      <div className="form-row">
        <label htmlFor="clientEmail">Correo Electrónico</label>
        <input
          id="clientEmail"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Ej. juan@ejemplo.com"
        />
      </div>

      <div className="form-row">
        <label htmlFor="clientCredit">Límite de Crédito ($)</label>
        <input
          id="clientCredit"
          type="number"
          min="0"
          step="0.01"
          value={formData.creditLimit}
          onChange={(e) => setFormData({ ...formData, creditLimit: e.target.value })}
          placeholder="Ej. 500.00"
        />
      </div>

      <button type="submit" className="primary-button" style={{ marginTop: '10px' }}>
        Guardar Cliente
      </button>
    </form>
  );
}

ClientForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ClientForm;
