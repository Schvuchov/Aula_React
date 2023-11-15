import "./style.css"
import imgLogo from '../../imgs/logo.jpg';
import Wave from '../../imgs/Wave.png';

export function Home(){
  return( 
    <>
      <main>
        <div className="caixa1">
          <img className='imgLogo' src={imgLogo} />

          <h1>O seu próximo destino pode estar aqui...</h1>

          <p>Aqui você encontra uma seleção de <span>pacotes completos</span> para as suas férias!</p>

          <p>No ConnectFlight você encontra pacotes de viagens nacionais e internacionais que incluem: passagens aéreas, hotéis, café da manhã, e até seguro viagem com <span>preços arrasadores</span> !</p>

          <p>Se você ainda não tem um destino definido, confira nossa seção de ofertas.</p>
        </div>

        <div className="caixa2">
          <a href="">Destinos</a>
          <a href="">Ofertas</a>
          <a href="">Contato</a>
        </div>
      </main>
      <footer>
        <img className="wave" src={Wave} />
      </footer>
    </>
  )
}