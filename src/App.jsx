import Herro from './components/Herro'
import Demo from './components/Demo'

import "./App.css"

const App = () => {
  return (
    <main>
        <div className='main'>
            <div className='gradient' />
        </div>
        <div className='app'>
            <Herro />
            <Demo />
        </div>
    </main>
  )
}

export default App