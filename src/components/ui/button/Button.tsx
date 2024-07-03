import {ComponentPropsWithoutRef} from 'react';
import {Icon} from "../icon/Icon.tsx";
import {Typography} from "../typography/Typography.tsx";

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    isLeftIcon?: boolean
    withoutIcon?: boolean
    isOnlyIcon?: boolean
    isFullWidth?: boolean
}

const buttonBaseClasses = `text-text-primary py-2.5 px-4 border-none bg-accent`
const buttonHoverClasses = `hover:bg-state-blue-hover`
const buttonFocusClasses = `focus:bg-state-blue-focused `
const buttonDisabledClasses = `disabled:bg-state-accent-disabled`

export const Button = ({
                           children,
                           isFullWidth,
                           className = "",
                           isLeftIcon = false,
                           withoutIcon = false,
                           isOnlyIcon = false,
                           ...rest
                       }: ButtonProps) => {
    const buttonClassName = `text-text-primary py-2.5 px-4 border-none focus-visible:outline focus:outline-none focus:ring-2
                                    ${isFullWidth && 'w-full'} 
                                    ${buttonBaseClasses} 
                                    ${buttonHoverClasses} 
                                    ${buttonFocusClasses} 
                                    ${buttonDisabledClasses} 
                                    ${className}`

    return (
        <button
            className={buttonClassName}
            {...rest}
        >
            {isOnlyIcon ? (
                <Icon iconId="plus"/>
            ) : (
                <Typography
                    className={`flex items-center gap-2 text-button justify-center ${rest.disabled ? 'opacity-30' : ''}`}>
                    {isLeftIcon && !withoutIcon && <Icon iconId="plus"/>}
                    {children}
                    {!isLeftIcon && !withoutIcon && <Icon iconId="plus"/>}
                </Typography>
            )}
        </button>
    )
}
