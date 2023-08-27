import './Top.css'
import logo from '../img/logo.png'
import search from '../img/search.png'

import { useState } from 'react'

function Top({ outerSubmit }) {
  const [word, setWord] = useState('')

  const innerSubmit = e => {
    outerSubmit(e)
    setWord('')
  }

  return (
    <header className='Top'>
      <nav className='Top-1'>
        <img src={logo} alt='logo' />
        &nbsp;&nbsp;
        <h1>Real-Dictionary</h1>
      </nav>
      <section className='Top-2'>
        <form onSubmit={innerSubmit}>
          <input
            autoFocus
            value={word}
            placeholder='Please type the word you want to get definition of'
            type='text'
            onChange={e => {
              setWord(e.target.value)
            }}
          />
          <button>
            <img src={search} alt='search' />
          </button>
        </form>
      </section>
    </header>
  )
}

export default Top
