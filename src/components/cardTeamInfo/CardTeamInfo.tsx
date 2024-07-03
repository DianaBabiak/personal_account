import {Card} from "../ui/card/Card.tsx";
import {Typography} from "../ui/typography/Typography.tsx";
import {AVATARS, INFO_TEAM_AND_JOB} from "../../data/data.ts";
import {Avatar} from "../ui/avatar/Avatar.tsx";
import {ItemCardTeamInfo} from "./itemCardTeamInfo/ItemCardTeamInfo.tsx";
import {AvatarGroup} from "../ui/avatarGroup/avatarGroup.tsx";
import {Icon} from "../ui/icon/Icon.tsx";
import {Button} from "../ui/button/Button.tsx";

interface PersonalInfoProps {
    openModalTeam: () => void

}

export const CardTeamInfo = ({openModalTeam}: PersonalInfoProps) => {
    const textStyles = 'text-subtitle-1 text-text-primary'

    const openModalTeamHandler = () => {
        openModalTeam();
    }

    return (
        <Card className='flex flex-col gap-8 md:col-span-1 lg:col-span-2'>
            <div className='flex justify-between gap-1'>
                <Typography className='text-title-3 text-text-primary md:text-h-5'>Загрузка сотрудника</Typography>
                <Typography className='text-text-button text-text-extra'>{INFO_TEAM_AND_JOB.employeeLoad}</Typography>
            </div>
            <div className='flex flex-col gap-4 md:gap-10 grid-cols-2 md:grid'>
                <ItemCardTeamInfo title={'Название проекта'}>
                    <Typography className={textStyles}>{INFO_TEAM_AND_JOB.projectName}</Typography>
                </ItemCardTeamInfo>
                <ItemCardTeamInfo title={'Тип проекта'}>
                    <Typography className={textStyles}>{INFO_TEAM_AND_JOB.projectType}</Typography>
                </ItemCardTeamInfo>
                <ItemCardTeamInfo title={'Ответственный'}>
                    <Avatar src={INFO_TEAM_AND_JOB.responsible.avatar} alt={'avatarResponsible'}/>
                    <Typography className={textStyles}>{INFO_TEAM_AND_JOB.responsible.name}</Typography>
                </ItemCardTeamInfo>
                <ItemCardTeamInfo title={'Команда'}>
                    <AvatarGroup avatars={AVATARS} extraCount={AVATARS.length - 7} onClick={openModalTeamHandler}/>
                </ItemCardTeamInfo>
                <ItemCardTeamInfo title={'Сроки работы'}>
                    <div className='flex gap-1'>
                        <Typography className={textStyles}>{INFO_TEAM_AND_JOB.startDate}</Typography>
                        <Icon iconId={'arrow-right'}/>
                        <Typography className={textStyles}>{INFO_TEAM_AND_JOB.endDate}</Typography>
                    </div>
                </ItemCardTeamInfo>
            </div>
            <Button withoutIcon isFullWidth>Посмотреть всю загрузку</Button>

        </Card>

    )
}