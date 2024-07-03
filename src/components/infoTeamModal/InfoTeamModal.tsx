import {Card} from "../ui/card/Card.tsx";
import {Typography} from "../ui/typography/Typography.tsx";
import {Icon} from "../ui/icon/Icon.tsx";
import {INFO_TEAM_AND_JOB} from "../../data/data.ts";
import {TeamMember} from "./teamMember/TeamMember.tsx";

interface InfoTeamModalProps {
    closeModalTeam:() => void
}
export const InfoTeamModal = ({closeModalTeam}:InfoTeamModalProps) => {
    const containerStyles = 'flex flex-col gap-4'

    return(
        <Card className={`${containerStyles} md:z-10 md:max-w-screen-sm md:mx-auto`}>
            <div className='flex justify-between gap-1'>
                <Typography className = 'text-title-3 text-text-primary md:text-h-4' >Команда</Typography>
                <div onClick={closeModalTeam}>
                    <Icon iconId={'exit'}/>
                </div>

            </div>
            <div className={containerStyles}>
                {INFO_TEAM_AND_JOB.team.map(member=><TeamMember key={member.id} member={member}/>)}
            </div>

        </Card>

    )
}