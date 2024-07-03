import {Typography} from "../../ui/typography/Typography.tsx";
import {ComponentPropsWithoutRef} from "react";

export interface ItemCardTeamInfoProps extends ComponentPropsWithoutRef<'div'> {
    title: string
}

export const ItemCardTeamInfo = ({children, title, className}: ItemCardTeamInfoProps) => {

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <Typography className='text-subtitle-1 text-text-tertiary'>{title}</Typography>
            {children}
        </div>
    )
}