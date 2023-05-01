import { FormRegister } from "../../componentes/Form/Form"


export const RegisterPage = () =>{

  return(
    <main>
      <div>
        <div>
          <img src="../assets/logoSpaceSound.svg" alt="logoSpaceSound"/>
        </div>
        <div>
          <header>
            <h1>Cadastro</h1>
          </header>
          <FormRegister/>
        </div>
      </div>
    </main>
  )
}