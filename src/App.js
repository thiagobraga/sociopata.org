import './styles/theme.scss';
import logo from './images/logo.png';

function App() {
  return (
    <main>
      <img src={logo} alt="Sociopata logo" className='logo' />

      <iframe
        src="https://open.spotify.com/embed/album/4f4suVxwovkeCk2nXbAlLt?theme=0"
        title="Sociopata - Corrosão [2016] [EP]"
        width="320"
        height="270"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </main>
  );
}

export default App;
