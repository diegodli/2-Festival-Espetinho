import './Participate.css';
import bento1 from '../../assets/bento1.webp';
import bento2 from '../../assets/bento2.webp';
import bento3 from '../../assets/bento3.webp';
import bento4 from '../../assets/bento4.webp';

export function Participate() {
  return (
    <section id="participar" className="participate section" aria-labelledby="participate-title">
      <div className="container">
        {/* Header Centralizado */}
        <div className="participate__header">
          <span className="section__subtitle">
            Seja um Churrasqueiro Participante
          </span>
          <h2 id="participate-title" className="participate__title">
            Seu espetinho pode conquistar Maranguape!
          </h2>
        </div>

        {/* Bento Grid — 4 Cards com Película Vermelha */}
        <div className="participate__bento">
          {/* CARD 01 */}
          <div className="participate__bento-card participate__bento-card--1">
            <img
              src={bento1}
              alt="Mostre seu talento na brasa"
              className="participate__bento-img"
              loading="lazy"
            />
            <div className="participate__bento-overlay" aria-hidden="true" />
            <div className="participate__bento-content">
              <h3 className="participate__bento-title">Mostre seu talento na brasa</h3>
              <p className="participate__bento-text">
                Participe do festival e conquiste o paladar de Maranguape.
              </p>
            </div>
          </div>

          {/* CARD 02 */}
          <div className="participate__bento-card participate__bento-card--2">
            <img
              src={bento2}
              alt="18 vagas para churrasqueiros"
              className="participate__bento-img"
              loading="lazy"
            />
            <div className="participate__bento-overlay" aria-hidden="true" />
            <div className="participate__bento-content">
              <h3 className="participate__bento-title">18 vagas para churrasqueiros</h3>
              <p className="participate__bento-text">
                Inscreva-se de 3 a 7 de novembro e garanta sua chance.
              </p>
            </div>
          </div>

          {/* CARD 03 */}
          <div className="participate__bento-card participate__bento-card--3">
            <img
              src={bento3}
              alt="R$ 2.000 em prêmios"
              className="participate__bento-img"
              loading="lazy"
            />
            <div className="participate__bento-overlay" aria-hidden="true" />
            <div className="participate__bento-content">
              <h3 className="participate__bento-title">R$ 2.000 em prêmios</h3>
              <p className="participate__bento-text">
                Os três primeiros colocados recebem prêmios em dinheiro e brindes.
              </p>
            </div>
          </div>

          {/* CARD 04 */}
          <div className="participate__bento-card participate__bento-card--4">
            <img
              src={bento4}
              alt="Seu sabor merece destaque"
              className="participate__bento-img"
              loading="lazy"
            />
            <div className="participate__bento-overlay" aria-hidden="true" />
            <div className="participate__bento-content">
              <h3 className="participate__bento-title">Seu sabor merece destaque</h3>
              <p className="participate__bento-text">
                Conquiste visibilidade, concorra ao troféu e receba seu certificado.
              </p>
            </div>
          </div>
        </div>

        {/* Botões de Ação Centralizados */}
        <div className="participate__actions">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeUBXNWJPUKk3ngQMzHcUd3H5MAduq9ERUZDSPSFlYVRm1PLA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="participate__btn-gold"
          >
            Quero me Inscrever como Churrasqueiro
          </a>
          <a href="#edital" className="participate__btn-outline">
            Consultar o Edital Completo
          </a>
        </div>
      </div>
    </section>
  );
}
