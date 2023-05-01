import { useForm } from 'react-hook-form';
import { UserContext } from '../../providers/User/UserContext';
import { useContext } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, TLoginValues } from '../../schemas/UserSchemas';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginValues>({
    resolver: zodResolver(LoginSchema),
  });
  const { UserLogin } = useContext(UserContext);

  const submit = (data: TLoginValues) => {
    UserLogin(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor='email'>Email</label>
        <input type='text' placeholder='email' {...register('email')} />
        <p>{errors.email?.message}</p>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          placeholder='Password'
          {...register('password')}
        />
        <p>{errors.password?.message}</p>
        <button type='submit'>enviar</button>
      </form>
    </>
  );
};

export default Login;
