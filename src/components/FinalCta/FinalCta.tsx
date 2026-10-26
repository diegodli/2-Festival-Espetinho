import './FinalCta.css';

export function FinalCta() {
  return (
    <section className="final-cta section" aria-label="Chamada final">
      <div className="container">
        <div className="final-cta__content">
          <span className="final-cta__icon" aria-hidden="true">🔥</span>

          <h3>O encontro é com você!</h3>

          <p className="final-cta__description">
            Prepare o apetite, convide os amigos e venha celebrar os sabores
            de Maranguape. Do espetinho favorito às descobertas da FANE, tem
            muita coisa para aproveitar!
          </p>

          <div className="final-cta__meta">
            <span>20 e 21 de novembro de 2026</span>
            <span className="final-cta__meta-separator" aria-hidden="true">•</span>
            <span>Praça Capistrano de Abreu</span>
            <span className="final-cta__meta-separator" aria-hidden="true">•</span>
            <span>Entrada gratuita</span>
          </div>

          <div className="final-cta__action">
            <a href="#participar" className="btn btn--accent">
              Quero Visitar o Festival
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
