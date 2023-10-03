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
        <a href='/'>
          <img src={logo} alt='logo' />
        </a>
        <h1>REAL DICTIONARY</h1>
      </nav>
      <section className='Top-2'>
        <div className='form-container'>
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
        </div>
      </section>
    </header>
  )
}

export default Top
