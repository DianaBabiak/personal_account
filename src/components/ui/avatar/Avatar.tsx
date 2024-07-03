import {Icon} from "../icon/Icon.tsx";

interface AvatarProps {
    src: string;
    alt: string;
    size?: 'xxl' | 'xl' | 'lg2' | 'lg' | 'md2' | 'md' | 'sm2' | 'sm' | 'xs2' | 'xs' | 'xxs';
    showIcon?: boolean;
}

const sizeClasses: { [key in NonNullable<AvatarProps['size']>]: string } = {
    xxl: 'w-40 h-40',  // 160px
    xl: 'w-24 h-24',   // 96px
    lg2: 'w-22 h-22',  // 88px
    lg: 'w-20 h-20',   // 80px
    md2: 'w-18 h-18',  // 72px
    md: 'w-16 h-16',   // 64px
    sm2: 'w-14 h-14',  // 56px
    sm: 'w-12 h-12',   // 48px
    xs2: 'w-10 h-10',  // 40px
    xs: 'w-8 h-8',     // 32px
    xxs: 'w-6 h-6'     // 24px
};

export const Avatar = ({src, alt, size = 'sm', showIcon = false}: AvatarProps) => {
    const sizeClass = sizeClasses[size as NonNullable<AvatarProps['size']>];

    return (
        <div className={`relative rounded-full border-2 border-b-border-secondary overflow-hidden ${sizeClass}`}>
            <img src={src} alt={alt} className="w-full h-full object-cover"/>
            {showIcon && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <Icon iconId={'camera'}/>
                </div>
            )}
        </div>
    )
}
