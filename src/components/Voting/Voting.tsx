import imgVotacao from '../../assets/img-votacao.jpg';
import './Voting.css';

export function Voting() {
  return (
    <section 
      id="votacao" 
      className="voting section" 
      aria-labelledby="voting-title"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(20, 10, 8, 0.82), rgba(74, 14, 14, 0.86), rgba(15, 10, 8, 0.92)), url(${imgVotacao})`
      }}
    >
      <div className="container">
        <div className="section__header">
          <h3 id="voting-title" className="voting__title">
            Você prova. Você vota. Você escolhe o campeão!
          </h3>
          <p className="voting__description">
            Experimente os espetinhos dos participantes e escolha o seu favorito
            por meio do QR Code disponível em cada estande. Sua opinião define
            quem leva o título de Melhor Espetinho de Maranguape!
          </p>
        </div>
      </div>
    </section>
  );
}
