import { ComponentPropsWithoutRef, forwardRef } from 'react'


export interface CardProps extends ComponentPropsWithoutRef<'div'> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...rest }, ref) => {
    const classNames = `bg-secondary rounded-xl px-4 py-8 w-full md:px-8 ${className}`

    return <div className={classNames} ref={ref} {...rest}></div>
})