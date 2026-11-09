import './Stats.css';

interface StatItem {
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  /*
  {
    value: '+R$ 2.000,00',
    label: 'Em Prêmios',
  },
  */
  {
    value: '16',
    label: 'Churrasqueiros Participantes',
  },
  {
    value: '100%',
    label: 'Gratuito',
  },
  {
    value: '60',
    label: 'Expositores Feira',
  },
];

export function Stats() {
  return (
    <section className="stats" aria-label="Destaques do Festival em Números">
      <div className="container">
        <div className="stats__grid">
          {STATS.map((stat, index) => (
            <div key={index} className="stats__item">
              <span className="stats__number">{stat.value}</span>
              <span className="stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
