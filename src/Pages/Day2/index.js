import React, { useState } from 'react';
import { Modal } from './Modal';

import { FiArrowUpCircle, FiArrowDownCircle, FiDollarSign, FiMinusCircle } from 'react-icons/fi';
import { IoAddCircleOutline } from 'react-icons/io5'

import './styles.css';

export const Day2 = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toogleModal = () => {
    setIsOpen((previousState) => !previousState);
  }




  return (
    <>
      <header className="day2">
        <h1>DEV Finances$</h1>
      </header>

      <main className="containers-day2">
        <section className="balance-day2">
          <h2 className="sr-only">Balanço</h2>

          <div className="cards-day2">
            <h3>
              <span>Entradas</span>
              <FiArrowUpCircle className="income-icon" />
            </h3>
            <p>R$ 5.000,00</p>
          </div>

          <div className="cards-day2">
            <h3>
              <span>Saídas</span>
              <FiArrowDownCircle className="expanse-icon" />

            </h3>
            <p>R$ 2.000,00</p>
          </div>

          <div className="cards-day2 total-day2">
            <h3>
              <span>Total</span>
              <FiDollarSign />

            </h3>
            <p>R$ 3.000,00</p>
          </div>

        </section>

        <section className="transaction-day2">
          <h2 className="sr-only">Transações</h2>
          <a onClick={() => toogleModal()}><IoAddCircleOutline /> Nova Transação</a>
          <table className="data-table-day2">

            <thead>

              <tr>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Data</th>
                <th></th>
              </tr>

            </thead>

            <tbody>
              <tr>
                <td className="description-day2">Luz</td>
                <td className="expanse-day2">- R$ 500,00</td>
                <td className="date-day2"> 23/12/2021</td>
                <td><FiMinusCircle /></td>
              </tr>

              <tr>
                <td className="description-day2">Criação Website</td>
                <td className="income-day2">R$ 5.000,00</td>
                <td className="date-day2"> 23/12/2021</td>
                <td><FiMinusCircle /></td>
              </tr>

              <tr>
                <td className="description-day2">Internet</td>
                <td className="expanse-day2">- R$ 200,00</td>
                <td className="date-day2"> 23/12/2021</td>
                <td><FiMinusCircle /></td>
              </tr>
            </tbody>

          </table>

        </section>

      </main>

      <footer className="container-day2">
        <p>dev.finance$</p>
      </footer>
      <Modal isOpen={isOpen} onClose={setIsOpen} />
    </>
  )
}
