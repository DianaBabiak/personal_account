import {FieldValues, useController, UseControllerProps} from 'react-hook-form'
import {Props as TextFieldProps, TextField} from "../textfield/TextField.tsx";


type Props<T extends FieldValues> = UseControllerProps<T> &
    Omit<TextFieldProps, 'onBlur' | 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
                                                               control,
                                                               defaultValue,
                                                               disabled,
                                                               name,
                                                               shouldUnregister,
                                                               ...rest
                                                           }: Props<T>) => {
    const {
        field: {onBlur, onChange, ref, value = defaultValue},
    } = useController({
        control,
        disabled,
        name,
        shouldUnregister,
    })

    return (
        <TextField
            disabled={disabled}
            id={name}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
            value={value}
            {...rest}
        />
    )
}
