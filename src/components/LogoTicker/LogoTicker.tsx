import './LogoTicker.css';
import logo1 from '../../assets/logos/logo1.webp';
import logo2 from '../../assets/logos/logo2.webp';
import logo3 from '../../assets/logos/logo3.webp';
import logo4 from '../../assets/logos/logo4.webp';

interface LogoItem {
  id: number;
  src: string;
  alt: string;
  isWide?: boolean;
}

const logos: LogoItem[] = [
  { id: 1, src: logo1, alt: 'Brasão de Maranguape' },
  { id: 2, src: logo2, alt: 'Secretaria de Desenvolvimento Econômico', isWide: true },
  { id: 3, src: logo3, alt: 'FANE - Feira de Arte e Negócios' },
  { id: 4, src: logo4, alt: 'Prefeitura de Maranguape - 175 Anos' },
  { id: 5, src: logo1, alt: 'Brasão de Maranguape' },
  { id: 6, src: logo2, alt: 'Secretaria de Desenvolvimento Econômico', isWide: true },
  { id: 7, src: logo3, alt: 'FANE - Feira de Arte e Negócios' },
  { id: 8, src: logo4, alt: 'Prefeitura de Maranguape - 175 Anos' },
];

export function LogoTicker() {
  return (
    <section className="logo-ticker" aria-label="Parceiros e Realização">
      {/* Container holding the scrolling tracks */}
      <div className="logo-ticker__container">
        {/* Track 1 */}
        <div className="logo-ticker__track">
          {logos.map((logo) => (
            <div
              key={`track1-${logo.id}`}
              className={`logo-ticker__item ${logo.isWide ? 'logo-ticker__item--wide' : ''}`}
            >
              <img
                src={logo.src}
                alt={logo.alt || `Logo parceiro ${logo.id}`}
                className={`logo-ticker__image ${logo.isWide ? 'logo-ticker__image--wide' : ''}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Track 2 (duplicate for seamless loop) */}
        <div className="logo-ticker__track" aria-hidden="true">
          {logos.map((logo) => (
            <div
              key={`track2-${logo.id}`}
              className={`logo-ticker__item ${logo.isWide ? 'logo-ticker__item--wide' : ''}`}
            >
              <img
                src={logo.src}
                alt={logo.alt || `Logo parceiro ${logo.id}`}
                className={`logo-ticker__image ${logo.isWide ? 'logo-ticker__image--wide' : ''}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoTicker;
