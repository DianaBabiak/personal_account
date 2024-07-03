import {Avatar} from "../avatar/Avatar.tsx";
import {UserAvatar} from "../avatar/types.ts";
import {Typography} from "../typography/Typography.tsx";
import {ComponentPropsWithoutRef} from "react";

interface AvatarGroupProps extends ComponentPropsWithoutRef<'div'> {
    avatars: UserAvatar[]
    extraCount: number
}

export const AvatarGroup= ({ avatars, extraCount, ...rest }:AvatarGroupProps) => {
    return (
        <div className="flex gap-1" {...rest}>
            <div className="flex -space-x-4 overflow-hidden">
                {avatars.slice(0, 7).map((avatar) => (
                    <Avatar key={avatar.id} src={avatar.src} alt={avatar.alt} />
                ))}
            </div>
            {extraCount > 0 && (
                <Typography as={'div'} className="flex items-center justify-center rounded-full text-body-1 text-text-primary">
                    +{extraCount}
                </Typography>
            )}
        </div>
    )
}

