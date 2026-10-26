import './Footer.css';
import fundoHero from '../../assets/Fundo-hero.png';
import logoFestEspetinho from '../../assets/logo-fest-espetinho.png';

export function Footer() {
  return (
    <footer
      className="footer"
      role="contentinfo"
      style={{ backgroundImage: `url(${fundoHero})` }}
    >
      <div className="footer__overlay" aria-hidden="true" />
      <div className="container footer__container">
        <div className="footer__main">
          {/* Informações Institucionais */}
          <div className="footer__brand">
            <img
              src={logoFestEspetinho}
              alt="Festival Gastronômico de Espetinhos — Maranguape"
              className="footer__logo"
            />
            <div className="footer__institutional">
              <h4 className="footer__entity">Prefeitura Municipal de Maranguape</h4>
              <p className="footer__dept">Secretaria de Desenvolvimento Econômico — SDEC</p>
              <p className="footer__festival">
                Festival Gastronômico de Espetinhos • Integrado ao <strong>Festival Viva Maranguape — 175 Anos</strong>
              </p>
            </div>
          </div>

          {/* Redes Sociais apenas com ícones */}
          <div className="footer__social-area">
            <span className="footer__social-label">Redes Oficiais</span>
            <div className="footer__social-icons" aria-label="Redes sociais oficiais">
              <a
                href="https://www.instagram.com/sdecmaranguape/"
                className="footer__social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da SDEC Maranguape"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://sdec.maranguape.ce.gov.br/"
                className="footer__social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portal da SDEC Maranguape"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Copyright Institucional */}
        <div className="footer__bottom">
          <p>© 2026 Prefeitura Municipal de Maranguape — Secretaria de Desenvolvimento Econômico (SDEC).</p>
        </div>
      </div>
    </footer>
  );
}
