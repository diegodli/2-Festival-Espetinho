import { useState, useEffect } from 'react';
import './Hero.css';
import fundoHero from '../../assets/Fundo-hero.png';
import imgHero from '../../assets/img-hero-espetinhos.png';
import logoFestEspetinho from '../../assets/logohero.webp';

/* ── Data-alvo: 20 de novembro de 2026, 00:00 (horário de Brasília) ── */
const TARGET_DATE = new Date('2026-11-20T00:00:00-03:00').getTime();

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

function calcTimeLeft(): TimeLeft {
  const diff = Math.max(TARGET_DATE - Date.now(), 0);
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

export function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="hero"
      aria-label="Seção principal do festival"
      style={{ backgroundImage: `url(${fundoHero})` }}
    >
      <div className="hero__container">
        {/* ── Lado esquerdo — Texto ── */}
        <div className="hero__text">
          {/* Logo exibida apenas no mobile */}
          <div className="hero__mobile-logo">
            <img
              src={logoFestEspetinho}
              alt="Logo Festival Gastronômico de Espetinhos"
              className="hero__mobile-logo-img"
            />
          </div>

          <h1 className="hero__title">
            Festival de Espetinhos:
            <span className="hero__title-sub">Encontro de Sabores</span>
          </h1>

          <p className="hero__subtitle">
            Maranguape vai sentir esse sabor!
          </p>

          <p className="hero__date">20 E 21 DE NOVEMBRO</p>

          {/* Contagem regressiva inspirada no anexo */}
          <div className="hero__countdown-wrapper">
            <span className="hero__countdown-heading">Dias para o Festival</span>
            <div className="hero__countdown" aria-label="Contagem regressiva para o festival">
              <div className="hero__countdown-col">
                <span className="hero__countdown-val">{String(timeLeft.dias).padStart(2, '0')}</span>
                <span className="hero__countdown-lbl">Dias</span>
              </div>
              <div className="hero__countdown-col">
                <span className="hero__countdown-val">{String(timeLeft.horas).padStart(2, '0')}</span>
                <span className="hero__countdown-lbl">Horas</span>
              </div>
              <div className="hero__countdown-col">
                <span className="hero__countdown-val">{String(timeLeft.minutos).padStart(2, '0')}</span>
                <span className="hero__countdown-lbl">Minutos</span>
              </div>
              <div className="hero__countdown-col">
                <span className="hero__countdown-val">{String(timeLeft.segundos).padStart(2, '0')}</span>
                <span className="hero__countdown-lbl">Segundos</span>
              </div>
            </div>
          </div>

          <div className="hero__actions">
            <a href="#participar" className="hero__cta-btn">
              Inscreva-se
            </a>
          </div>
        </div>

        {/* ── Lado direito — Imagem ── */}
        <div className="hero__image-area">
          <img
            src={imgHero}
            alt="Espetinhos artesanais na grelha — Festival de Espetinhos de Maranguape"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
}
