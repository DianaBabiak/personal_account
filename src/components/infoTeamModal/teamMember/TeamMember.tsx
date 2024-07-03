import {ITeamMember} from "../../../data/type.ts";
import {Avatar} from "../../ui/avatar/Avatar.tsx";
import {Typography} from "../../ui/typography/Typography.tsx";


interface TeamMemberProps {
    member: ITeamMember
}
export const TeamMember = ({member}:TeamMemberProps) => {

    return(
        <div className='flex gap-2'>
            <Avatar src={member.avatar} alt={`${member.name}Avatar`}/>
            <div className='flex flex-col'>
                <Typography className='subtitle-1 text-text-primary'>{member.name}</Typography>
                <Typography className='text-body-2 text-text-secondary'>{member.position}</Typography>
            </div>
        </div>

    )
}