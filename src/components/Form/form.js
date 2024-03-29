import React, { useState } from "react";
import "./form.css";

const Formulario = ({ generateOrder }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    generateOrder(form);
  }
  

  const disabled = !(
    form.name.length > 0 &&
    form.email.length > 0 &&
    form.address.length > 0 &&
    form.city.length > 0 &&
    form.state.length > 0 &&
    form.zip.length > 0 &&
    form.country.length > 0
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Dirección</label>
        <input
          type="text"
          className="form-control"
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">Ciudad</label>
        <input
          type="text"
          className="form-control"
          id="city"
          name="city"
          value={form.city}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">Provincia</label>
        <input
          type="text"
          className="form-control"
          id="state"
          name="state"
          value={form.state}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="zip">Codigo Postal</label>
        <input
          type="text"
          className="form-control"
          id="zip"
          name="zip"
          value={form.zip}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="country">País</label>
        <input
          type="text"
          className="form-control"
          id="country"
          name="country"
          value={form.country}
          onChange={handleChange}
        />
      </div>
      <button disabled={disabled} type="submit" className="btn btn-primary">
        FINALIZAR COMPRA
      </button>
    </form>
  );
}


export default Formulario;



   