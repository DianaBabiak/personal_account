import {Avatar} from "../ui/avatar/Avatar.tsx";
import {CURRENT_USER} from "../../data/data.ts";
import {Typography} from "../ui/typography/Typography.tsx";
import {Tab} from "../ui/tab/Tab.tsx";
import {Card} from "../ui/card/Card.tsx";
import {useState} from "react";

export const CardProfile = ()=>{
    const [isActiveInformation, setActiveInformation] = useState<boolean>(true)
    const nameCurrentUserStyles = 'text-text-primary text-h-5-v-2 md:text-custom-headline'
    const subtitleStyles = 'text-text-primary text-subtitle-1'
    const timeStyles = 'text-text-tertiary text-subtitle-1'
    const containerStyles = 'flex flex-col justify-center items-center md:justify-start md:items-start'


    return (
        <Card className={`${containerStyles} gap-4 md:col-span-2 lg:col-span-5`}>
            <div className={`${containerStyles} gap-6 w-full md:flex-row md:justify-start md:gap-x-12 md:items-start`}>
                <Avatar size={'xxl'} alt={'userPhoto'} src={CURRENT_USER.avatar}/>
                <div className={`${containerStyles} gap-6`}>
                    <div className={`${containerStyles} gap-1 md:p-6`}>
                        <Typography className={nameCurrentUserStyles} as={'h5'}>{CURRENT_USER.surname}</Typography>
                        <Typography className={`${nameCurrentUserStyles}`}
                                    as={'h5'}>{CURRENT_USER.name} {CURRENT_USER.patronymic}</Typography>
                    </div>
                    <div className={`${containerStyles} gap-4 md:px-6`}>
                        <Typography className={subtitleStyles}>{CURRENT_USER.position}</Typography>
                        <div className='flex justify-center items-center gap-2'>
                            <Typography className={subtitleStyles}>{CURRENT_USER.country}, {CURRENT_USER.city}</Typography>
                            <Typography className={timeStyles}>•</Typography>
                            <Typography className={timeStyles}>14:03</Typography>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center w-full md:justify-start '>
                <Tab label={'Основная информация'} onClick={() => setActiveInformation(true)}
                     isActive={isActiveInformation}/>
                <Tab label={'Отпуск'} onClick={() => setActiveInformation(false)} isActive={!isActiveInformation}/>
            </div>
        </Card>
    )
}