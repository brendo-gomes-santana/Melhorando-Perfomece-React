import { useRef } from 'react'
import './App.css'
import { Header } from './Header';


function App() {

  function handleSave(e){
    e.preventDefault();
    
    console.log({
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      username: userNameRef.current?.value,
      description: descriptionRef.current?.value,
    })
  }
  
  
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const userNameRef = useRef(null)
  const descriptionRef = useRef(null)


  return (
    <div className="container">
      <h1>React</h1>
      <Header/>

      <form className="form" onSubmit={handleSave}>
        <input
          type="text"
          ref={nameRef}
          placeholder="Digite seu nome..."
          className="input"
        />

        <input
          type="text"
          ref={emailRef}
          placeholder="Digite seu email..."
          className="input"
        />

        <input
          type="text"
          ref={userNameRef}
          placeholder="Digite seu username..."
          className="input"
        />

        <textarea
          type="text"
          ref={descriptionRef}
          placeholder="Digite sua descriçao..."
          className="input"
        ></textarea>


        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
