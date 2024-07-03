import {Icon} from "../icon/Icon.tsx";
import {Typography} from "../typography/Typography.tsx";

interface GoBackProps {
    title: string
    url:string
}

export const GoBack = ({title, url}:GoBackProps) => {

    return(
        <div className='py-2 px-4'>
            <a href={url} className='flex items-center'>
                <Icon iconId={'chevron-left'} />
                <Typography className = 'text-button text-text-tertiary'>
                    {title}
                </Typography>
            </a>
        </div>

    )


}