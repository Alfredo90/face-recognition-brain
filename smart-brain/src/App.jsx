import './App.css'

import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Logo from './components/Logo/Logo'
import Navigation from './components/navigation/Navigation'
import Rank from './components/Rank/Rank'

function App() {


  return (
    <>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition/>  */}
    </>
  )
}

export default App
