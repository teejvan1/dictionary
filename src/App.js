import './App.css'
import Top from './components/Top'
import Result from './components/Result'
import Loading from './components/Loading'
import { useState } from 'react'

function App() {
  const [def, setDef] = useState([])
  const [loading, setLoading] = useState(false)

  const outerSubmit = e => {
    e.preventDefault()
    setLoading(true)
    fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${e.target[0].value}?key=0d58d895-9230-4a04-ad0c-e9473c774433`
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        setLoading(false)
        setDef(data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }
  return (
    <div className='App'>
      <Top outerSubmit={outerSubmit} />
      {loading ? <Loading /> : <Result def={def} />}
    </div>
  )
}

export default App
