/* eslint-disable react/no-unescaped-entities */
import {logo} from '../assets'

const Herro = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='sumz_logo' className='w-28 object-contain'/>

            <button 
                type='button' 
                onClick={() => window.open('https://github.com/Zozer253')}
                className='black_btn'
            >
                Github
            </button>
        </nav>
        <h1 className='head_text'>
        résumer des articles avec <br/> 
            <span className='orange_gradient'>
                GPT-4 OPENAI
            </span>
        </h1>
        <h2 className='desc'>
            Simplifiez votre lecture avec summize, un résumeur 
            d'articles open-source qui transforme les articles 
            longs en résumés clairs et concis.
        </h2>
    </header>
  )
}

export default Herro