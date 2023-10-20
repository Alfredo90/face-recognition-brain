import { useState } from 'react'
import Navigation from './components/navigation/Navigation'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      {/* <Logo/>
      <ImageLinkForm/>
      <FaceRecognition/> */}
    </>
  )
}

export default App
