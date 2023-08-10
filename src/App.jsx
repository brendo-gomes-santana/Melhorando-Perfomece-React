import "./App.css";
import { Header } from "./Header";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().nonempty("O campo é obrigatório"),
  email: z
    .string()
    .email("Digite um email valido.")
    .nonempty("O campos é obrigatório"),
  username: z
    .string()
    .min(3, "o username dever ter pelo menos 3 caracteres")
    .max(10, "o username dever no maximo 3 caracteres")
    .nonempty("o campos é obrigatório"),
});

//nonempty é obrigatório
//min quando eu coloquei o numero e depois mensagem, e tipo o min e caso não tenha isso, a mensagem de error

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  function handleSave(data) {
    console.log(data); // tudo junto
    console.log(data.nome); // ou pegar algo
  }

  return (
    <div className="container">
      <h1>React</h1>
      <Header />

      <form className="form" onSubmit={handleSubmit(handleSave)}>
        <input
          type="text"
          style={errors.name && { border: '1px solid red'}}
          placeholder={ errors.name ? errors.name.message : 'Digite seu nome' }
          {...register("name", { required: true })} // é obrigatório preencher - tipo de validação pelo react-hook-form
          className="input"
        />
        <input
          type="text"
          placeholder="Digite seu email..."
          {...register("email")}
          className="input"
        />
        {errors.email && <span>{errors.email.message}</span> /*outra formar de fazer*/}
        <input
          type="text"
          placeholder="Digite seu username..."
          {...register("username")}
          className="input"
        />

        <button className="button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
