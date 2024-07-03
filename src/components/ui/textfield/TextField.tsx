import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState, useEffect } from 'react';
import { Typography } from "../typography/Typography.tsx";
import { Icon } from "../icon/Icon.tsx";

export type Props = {
    errorMessage?: string
    inputType?: 'search' | 'text'
    label?: string
    onValueChange?: (value: string) => void
    value?: string
    successMessage?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, Props>(
    (
        {
            className,
            disabled,
            errorMessage,
            inputType = 'text' ,
            label,
            onChange,
            onValueChange,
            placeholder,
            value,
            successMessage
        },
        ref
    ) => {
        const [isFocused, setIsFocused] = useState(false)
        const [inputValue, setInputValue] = useState(value || '')
        const inputSearch = inputType === 'search'

        const inputBaseStyles = "relative flex items-center rounded border px-4 py-2.5 gap-x-1.5 hover:border-text-primary active:border-border-accent"

        const inputContainerStyles = `${inputBaseStyles} ${disabled 
                                             ? 'opacity-90' 
                                             :''} 
                                             ${errorMessage ? 'border-border-error' : successMessage 
                                             ? 'border-border-success' 
                                             : 'border-border-primary'}`

        const inputStyles = "bg-secondary w-full text-text-secondary focus:outline-none"

        const labelStyles = `absolute transition-all text-text-secondary text-caption left-4 
                                    ${inputValue || isFocused 
                                    ? 'top-0 transform -translate-y-1/2' 
                                    : ` top-1/2 transform -translate-y-1/2 ' ${inputSearch ? 'translate-x-6' : '' }`}`

        const errorMessageStyles = "text-text-error text-caption"

        const successMessageStyles = "text-text-success text-caption"


        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            const newValue = e.currentTarget.value;
            setInputValue(newValue)
            onChange?.(e)
            onValueChange?.(newValue)
        }

        useEffect(() => {
            setInputValue(value || '')
        }, [value])

        return (
            <div className={`space-y-1 ${className}`}>
                <div className={inputContainerStyles}>
                    {inputSearch && (
                        <div>
                            <Icon iconId={'search'} height={'20'} width={'20'} viewBox={'0 0 20 20'}/>
                        </div>
                    )}
                    {label && (
                        <Typography
                            className={labelStyles}
                        >
                            {label}
                        </Typography>
                    )}
                    <input
                        type={inputType}
                        autoFocus
                        className={inputStyles}
                        disabled={disabled}
                        onChange={onChangeHandler}
                        placeholder={isFocused ? '' : placeholder}
                        ref={ref}
                        value={inputValue}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </div>
                {errorMessage && (
                    <Typography as={'div'} className={errorMessageStyles}>
                        {errorMessage}
                    </Typography>
                )}
                {successMessage && (
                    <Typography as={'div'} className={successMessageStyles}>
                        {successMessage}
                    </Typography>
                )}
            </div>
        )
    }
);
