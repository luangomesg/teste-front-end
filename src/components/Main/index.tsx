import "./main.scss";
import tecnologyIcon from "../../assets/icons/Tecnology.svg";
import superMarketIcon from "../../assets/icons/supermercados 1.svg";
import drinkIcon from "../../assets/icons/whiskey.svg";
import toolsIcon from "../../assets/icons/ferramentas 1.svg";
import healthIcon from "../../assets/icons/cuidados-de-saude 1.svg";
import sportIcon from "../../assets/icons/corrida 1.svg";
import fashionIcon from "../../assets/icons/moda 1.svg";
import logoBrand from "../../assets/images/logoBrands.svg";
import ProductsCarousel from "../ProductsCarousel";
import Partners from "../Partners";

export function Main() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-content">
          <h1>Venha conhecer nossas promoções</h1>
          <p>
            50% Off<span> nos produtos</span>
          </p>
          <button>
            <span>Ver produto</span>
          </button>
        </div>
      </section>

      <section className="categories">
        <ul className="categories-content">
          <li>
            <div className="category-marked">
              <img src={tecnologyIcon} alt="" aria-hidden="true" />
            </div>
            <h2>
              <span>Tecnologia</span>
            </h2>
          </li>

          <li>
            <div>
              <img src={superMarketIcon} alt="" aria-hidden="true" />
            </div>
            <h2>Supermercado</h2>
          </li>
          <li>
            <div>
              <img src={drinkIcon} alt="" aria-hidden="true" />
            </div>
            <h2>Bebidas</h2>
          </li>
          <li>
            <div>
              <img src={toolsIcon} alt="" aria-hidden="true" />
            </div>
            <h2>Ferramentas</h2>
          </li>
          <li>
            <div>
              <img src={healthIcon} alt="" aria-hidden="true" />
            </div>
            <h2>Saúde</h2>
          </li>
          <li>
            <div>
              <img src={sportIcon} alt="" aria-hidden="true" />
            </div>
            <h2>Esportes e Fitness</h2>
          </li>
          <li>
            <div>
              <img src={fashionIcon} alt="" aria-hidden="true" />
            </div>
            <h2>Moda</h2>
          </li>
        </ul>
      </section>

      <section className="products">
        <h2 className="products_title">Produtos relacionados</h2>

        <div className="products_tabs">
          <button className="active">Celular</button>
          <button>Acessórios</button>
          <button>Tablets</button>
          <button>Notebooks</button>
          <button>TVs</button>
          <button>Ver todos</button>
        </div>

        <ProductsCarousel />
      </section>

      <section className="partners">
        <Partners />
      </section>

      <section className="products">
        <h2 className="products_title">Produtos relacionados</h2>
        <span>Ver todos</span>
        <ProductsCarousel />
      </section>

      <section className="partners">
        <Partners />
      </section>

      <section className="brands">
        <h2>Navegue por marcas</h2>

        <ul>
          <li>
            <img src={logoBrand} alt="Logo da marca Econverse" />
          </li>
          <li>
            <img src={logoBrand} alt="Logo da marca Econverse" />
          </li>
          <li>
            <img src={logoBrand} alt="Logo da marca Econverse" />
          </li>
          <li>
            <img src={logoBrand} alt="Logo da marca Econverse" />
          </li>
          <li>
            <img src={logoBrand} alt="Logo da marca Econverse" />
          </li>
        </ul>
      </section>

      <section className="products">
        <h2 className="products_title">Produtos relacionados</h2>
        <span>Ver todos</span>
        <ProductsCarousel />
      </section>

      <section className="newsletter">
        <div className="newsletter_text">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter_form">
          <div className="form_top">
            <input type="text" placeholder="Digite seu nome" />
            <input type="email" placeholder="Digite seu e-mail" />
            <button>INSCREVER</button>
          </div>

          <div className="form_bottom">
            <input type="checkbox" />
            <p>Aceito os termos e condições</p>
          </div>
        </form>
      </section>
    </main>
  );
}
