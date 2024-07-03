import { useForm } from 'react-hook-form';
import {Typography} from "../ui/typography/Typography.tsx";
import {FormValues, PersonalInfoSchema} from "./schema.ts";
import { zodResolver } from '@hookform/resolvers/zod'
import {Card} from "../ui/card/Card.tsx";
import {ControlledTextField} from "../ui/controlledTextField/ControlledTextField.tsx";
import {fieldLabels} from "./uttils.ts";
import {Icon} from "../ui/icon/Icon.tsx";
import {Button} from "../ui/button/Button.tsx";
import {PartialCurrentUserWithoutAvatar} from "../../data/type.ts";

interface PersonalInfoProps {
    isModal?:boolean
    openModal?:()=>void
    closeModal?:()=>void
    changeCurrentUserInfo?:(info:PartialCurrentUserWithoutAvatar)=>void
    currentUser:PartialCurrentUserWithoutAvatar
}

export const PersonalInfoForm = ({isModal=false, openModal, closeModal,changeCurrentUserInfo, currentUser}:PersonalInfoProps) => {

    const initialFormValues = {
        name: currentUser.name,
        surname: currentUser.surname,
        patronymic: currentUser.patronymic,
        birthday: currentUser.birthday,
        employmentDate: currentUser.employmentDate,
        country: currentUser.country,
        city: currentUser.city,
        position:currentUser.position,
        email: currentUser.email,
    }

    const textFieldItems = Object.keys(initialFormValues) as (keyof FormValues)[]

    const containerStyles = 'flex flex-col gap-6'

    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<FormValues>({
        defaultValues: initialFormValues,
        resolver: zodResolver(PersonalInfoSchema),
    })

    const onSubmit = async (data: FormValues) => {
        changeCurrentUserInfo?.(data)
    }

    const openModalHandler = ()=>{
        openModal?.()
    }

    const closeModalHandler = ()=>{
        closeModal?.()
    }


    return (
        <Card className={`${containerStyles} md:col-span-1 lg:col-span-3`}>
            <div className={'flex justify-between items-center gap-2'}>
                <Typography className = 'text-title-3 text-text-primary md:text-h-5'>Персональная информация</Typography>
                {isModal
                    ? <div onClick={closeModalHandler}><Icon iconId={'exit'} /></div>
                    : <Typography onClick={openModalHandler} as={'div'}
                                  className='text-subtitle-2 text-text-tertiary cursor-pointer'>Изменить</Typography>}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={`${containerStyles} md:grid-cols-2 md:grid`}>
                {textFieldItems.map(item => (
                        <ControlledTextField
                            key={item}
                            control={control}
                            errorMessage={errors[item]?.message}
                            label={fieldLabels[item]}
                            name={item}
                            disabled={!isModal}
                            className={item ==='patronymic' ? 'md:col-span-2' :''}
                        />
                    ))}
                {isModal && <Button isFullWidth withoutIcon className={'md:col-span-2'}>Сохранить</Button>}
            </form>
        </Card>
    )
}
