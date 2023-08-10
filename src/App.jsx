import { useRef } from 'react'
import './App.css'
import { Header } from './Header';
import { useForm } from 'react-hook-form'

function App() {

  const { register, handleSubmit } = useForm()
 
  function handleSave(data){
   
    console.log(data) // tudo junto
    console.log(data.nome) // ou pegar algo
  }
  
 

  return (
    <div className="container">
      <h1>React</h1>
      <Header/>

      <form className="form" onSubmit={handleSubmit(handleSave)}>
        <input
          type="text"
          placeholder="Digite seu nome..."
          {...register("name", { required: true })} // é obrigatório preencher
          className="input"
        />

        <input
          type="text"
          placeholder="Digite seu email..."
          {...register("email", {required: true})}
          className="input"
        />

        <input
          type="text"
          placeholder="Digite seu username..."
          {...register("username")}
          className="input"
        />


        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
