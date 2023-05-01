import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react"

interface IInputsProps extends InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  error?: string;
}

export const Input = forwardRef(({id, label, error, children, ...rest}:IInputsProps, ref:ForwardedRef<HTMLInputElement>)=>{
  return(
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input id={id} ref={ref} {...rest}/>
      {error ? <p>{error}</p> : null}
      {children}
    </div>
  )
})