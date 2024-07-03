import { ComponentPropsWithoutRef, ElementRef, ElementType, ReactNode, forwardRef } from 'react'

type TypographyProps<T extends ElementType> = {
    as?: T
    children: ReactNode
} & ComponentPropsWithoutRef<T>

export const Typography = forwardRef<ElementRef<ElementType>, TypographyProps<ElementType>>(
    (
        {
            as: Component = 'span',
            children,
            className,
            ...restProps
        },
        ref
    ) => {
        return (
            <Component
                className={className}
                ref={ref}
                {...restProps}
            >
                {children}
            </Component>
        )
    }
)
