import "./header.scss";
import shield from "../../assets/icons/ShieldCheck.svg";
import truck from "../../assets/icons/Truck.svg";
import creditCard from "../../assets/icons/CreditCard.svg";
import econverseHeader from "../../assets/images/Econverse-header.svg";
import magnifyingGlass from "../../assets/icons/MagnifyingGlass.svg";
import boxIcon from "../../assets/icons/Box.svg";
import hearthIcon from "../../assets/icons/Heart.svg";
import userIcon from "../../assets/icons/UserCircle.svg";
import cartIcon from "../../assets/icons/ShoppingCart.svg";
import crowIcon from "../../assets/icons/CrownSimple.svg";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className="header">
      <div className="container">
        <section className="top-bar">
          <ul className="top-bar_list">
            <li>
              <img src={shield} alt="" aria-hidden="true" />
              <p>
                Compra <span>100% segura</span>
              </p>
            </li>
            <li>
              <img src={truck} alt="" aria-hidden="true" />
              <p>
                <span>Frete grátis</span> acima de R$ 200
              </p>
            </li>
            <li>
              <img src={creditCard} alt="" aria-hidden="true" />

              <p>
                <span>Parcele</span> suas compras
              </p>
            </li>
          </ul>
        </section>

        <section className="main-header">
          <div className="main-button">
            <button
              className={`menu-button ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Abrir menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="main-header_image">
            <img src={econverseHeader} alt="Logo Econverse" />
          </div>
          <div className="main-header_input">
            <input type="text" placeholder="O que você está buscando?" />
            <button>
              <img src={magnifyingGlass} alt="Ícone de lupa" />
            </button>
          </div>
          <div className="main-header_icons">
            <ul>
              <li>
                <button aria-label="Abrir entregas">
                  <img src={boxIcon} alt="" />
                </button>
              </li>
              <li>
                <button aria-label="Abrir favoritos">
                  <img src={hearthIcon} alt="" />
                </button>
              </li>
              <li>
                <button aria-label="Abrir usuário">
                  <img src={userIcon} alt="" />
                </button>
              </li>
              <li>
                <button aria-label="Abrir carrinho">
                  <img src={cartIcon} alt="" />
                </button>
              </li>
            </ul>
          </div>
        </section>

        {isMenuOpen && (
          <section className="mobile-menu">
            <ul>
              <li>
                <img src={hearthIcon} aria-hidden="true" />
                Favoritos
              </li>
              <li>
                <img src={userIcon} alt="" aria-hidden="true" />
                Usuário
              </li>
              <li>
                <img src={cartIcon} alt="" aria-hidden="true" />
                Carrinho
              </li>
              <li>
                <img src={boxIcon} alt="" aria-hidden="true" /> Entregues
              </li>
            </ul>
          </section>
        )}

        <section className="bottom-bar">
          <ul>
            <li>
              <p>Todas Categorias</p>
            </li>
            <li>Supermercado</li>
            <li>Livros</li>
            <li>Moda</li>
            <li>Lançamentos</li>
            <li>
              <span>Ofertas do dia</span>
            </li>
            <li>
              <img src={crowIcon} alt="" aria-hidden="true" />
              Assinatura
            </li>
          </ul>
        </section>
      </div>
    </header>
  );
}
