import imgSobre from '../../assets/img-sobre.png';
import './About.css';

export function About() {
  return (
    <section id="sobre" className="about section" aria-labelledby="about-title">
      <div className="container">
        <div className="about__grid">
          {/* Lado Esquerdo - Textos e Botão */}
          <div className="about__text">
            <span className="section__subtitle">Sobre o Festival</span>
            <h2 id="about-title" className="about__title">
              Tradição, Sabor e Encontro
            </h2>

            <p className="about__paragraph">
              O Festival Gastronômico de Espetinhos chega reunindo churrasqueiros,
              empreendedores e visitantes em uma celebração viva da gastronomia
              e da cultura local.
            </p>

            <p className="about__paragraph">
              Integrando os 175 anos de Maranguape, é o encontro ideal para
              experimentar sabores inesquecíveis, prestigiar nossos talentos e
              aproveitar dois dias de festa e diversão.
            </p>

            <div className="about__actions">
              <a href="#participar" className="about__btn-gold">
                Inscreva-se
              </a>
            </div>
          </div>

          {/* Lado Direito - Apenas a Imagem com os Números */}
          <div className="about__visual">
            <img
              src={imgSobre}
              alt="2 Dias de evento, 18 Churrasqueiros, +R$2000 em Prêmios"
              className="about__img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
