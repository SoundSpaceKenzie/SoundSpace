import { Button } from "../Button"
import { Input } from "../Input/Input"
import { StyledFormRegister } from "./styled"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {schema} from "../../pages/RegisterPage/validator"
import { useContext } from "react"

export interface IRegisterFormData{
  name:string;
  email:string;
  avatar:string;
  password:string;
  confirm: string;
}

export const FormRegister = () =>{
  const {register, handleSubmit, formState:{errors}} = useForm<IRegisterFormData>({ resolver:zodResolver(schema)})

  //const { handleRegister } = useContext(UserContext);

  //const submit = (data)=>{}

  return(
<StyledFormRegister onSubmit={handleSubmit}>
  <Input type="text" label="Nome" placeholder="Digite aqui seu nome" id='name' error={errors?.name?.message} {...register('name')}/>

  <Input type="email" label="Email" placeholder="Digite aqui seu e-mail" id='email' error={errors?.email?.message} {...register('email')}/>

  <Input type="text" label="Avatar de Perfil" placeholder="url de uma imagem" id='avatar' error={errors?.avatar?.message} {...register('avatar')}/>

  <Input type="password" label="Senha" placeholder="Digite aqui sua senha" id='password' error={errors?.password?.message} {...register('password')}/>

  <Input type="password" label="Confirmar Senha" placeholder="Digite novamente sua senha" id='passwordConfirm' error={errors?.confirm?.message} {...register('confirm')}/>

  <Button text="Cadastrar" backgroundC={"var(--color-secundary)"} textColor={"var(--color-primary)"} />
  <Button text="Voltar" backgroundC={"var(--grey-2)"} textColor={"var(--grey-3)"} />

</StyledFormRegister>
)
}