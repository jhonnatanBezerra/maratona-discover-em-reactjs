import React from 'react';
import './styles.css';

export const Modal = ({ isOpen, onClose }) => {


  return (
    <>
      <div className={`modal-overlay-day2 ${isOpen ? 'open' : 'closed'}`}>
        <div className="modal-day2">
          <div className="form-day2">
            <h2>Nova Transação</h2>
            <form >

              <div className="input-group-day2">
                <label className="sr-only" htmlFor="description">Descrição</label>
                <input id="description" type="text" placeholder="Descrição" />
              </div>

              <div className="input-group-day2">
                <label className="sr-only" htmlFor="amount">Valor</label>
                <input id="amount" type="number" step="0.01" placeholder="0,00" />
                <small className="help">Use o sinal - (negativo) para despesas e ,
              (vírgula) para casas decimais</small>
              </div>


              <div className="input-group-day2">
                <label htmlFor="date"></label>
                <input id="date" type="date" />
              </div>

              <div className="input-group-day2 actions">
                <button onClick={() => onClose(false)} className="buttons-day2 cancel"> Cancelar </button>
                <button>Salvar</button>
              </div>
            </form>
          </div>
        </div>

      </div >
    </>
  );
}