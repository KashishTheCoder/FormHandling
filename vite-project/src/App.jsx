import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './MyForm'
import FormHandling from './Form'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <FormHandling />
    </>
  )
}

export default App
