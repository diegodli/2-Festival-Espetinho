import imgFane from '../../assets/img-fane.png';
import './Fane.css';

export function Fane() {
  return (
    <section id="fane" className="fane section" aria-labelledby="fane-title">
      <div className="container">
        <div className="fane__grid">
          {/* Texto */}
          <div className="fane__text">
            <span className="section__subtitle">FANE — Feira de Arte &amp; Negócios</span>
            <h3 id="fane-title" className="fane__title">
              Sabores, talentos e negócios em um só lugar!
            </h3>

            <p>
              A VII Edição Especial da FANE — Feira de Arte &amp; Negócios reunirá{' '}
              <span className="fane__highlight-number">60 expositores</span>,
              oferecendo ao público a oportunidade de conhecer produtos, descobrir
              novos negócios e prestigiar empreendedores.
            </p>

            {/* Apenas o botão abaixo do texto */}
            <div className="fane__action">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSchAR4hzo_v3pfJRywHjO0zKu_RH2aqDjrgYKogAUl6OgIpQA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="fane__btn"
              >
                Quero me Inscrever na FANE
              </a>
            </div>
          </div>

          {/* Visual - Apenas a Imagem img-fane.png */}
          <div className="fane__visual">
            <img
              src={imgFane}
              alt="Feira de Arte & Negócios - FANE"
              className="fane__img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
