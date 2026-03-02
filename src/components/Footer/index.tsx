import "./footer.scss";
import logoFooter from "../../assets/images/logoFooter.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="section_top">
        <div className="footer_socials">
          <img src={logoFooter} alt="" aria-hidden="true" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="icons">
            <button>
              <a href=""></a>
              <img
                src={instagramIcon}
                alt="Botão que leva até o instagram da Econverse"
              />
            </button>
            <button>
              <img
                src={facebookIcon}
                alt="Botão que leva até o facebook da Econverse"
              />
            </button>
            <button>
              <img
                src={linkedinIcon}
                alt="Botão que leva até o linkedin da Econverse"
              />
            </button>
          </div>
        </div>

        <hr />

        <nav className="footer_links">
          <section>
            <h3>Institucional</h3>
            <p>Sobre Nós</p>
            <p>Movimento</p>
            <p>Trabalhe conosco</p>
          </section>
          <section>
            <h3>Ajuda</h3>
            <p>Suporte</p>
            <p>Fale Conosco</p>
            <p>Perguntas Frequentes</p>
          </section>
          <section>
            <h3>Termos</h3>
            <p>Termos e Condições</p>
            <p>Política de Privacidade</p>
            <p>Troca e Devolução</p>
          </section>
        </nav>
      </section>

      <section className="section_bottom">
        <div className="footer_bottom">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>
    </footer>
  );
}
