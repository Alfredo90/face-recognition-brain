import './App.css'

import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Logo from './components/Logo/Logo'
import Navigation from './components/navigation/Navigation'
import ParticlesBg from 'particles-bg'
import Rank from './components/Rank/Rank'

function App() {




  return (
    <>
      <Navigation />
      <ParticlesBg type="square" num={200} bg={true} />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition/>  */}
    </>
  )
}

export default App
