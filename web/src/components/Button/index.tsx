import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

import './styles.scss'

export function Button({ ...props }: ButtonProps) {
  return (
    <button className="button" {...props} />
  )
}