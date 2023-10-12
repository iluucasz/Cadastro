import { forwardRef } from "react"

export const Input = forwardRef(({ error, label, id, ...rest }, ref) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input ref={ref} {...rest} />
            {error ? <span>{error.message}</span> : null}
        </div>
    )
});