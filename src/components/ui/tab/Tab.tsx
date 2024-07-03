import {Icon} from "../icon/Icon.tsx";
import {Typography} from "../typography/Typography.tsx";

type TabProps = {
    label: string;
    onClick: () => void;
    isActive?: boolean;
    number?: number
    isShowChevron?: boolean
    isShowNumber?: boolean
};

export const Tab = ({
                        label,
                        onClick,
                        isActive = false,
                        number,
                        isShowNumber = false,
                        isShowChevron = false
                    }: TabProps) => {
    const baseClasses = `focus-visible:outline px-4 py-2 focus:outline-none focus:ring-2 
                                ${isActive ? 'border-b-2 border-border-accent border-solid text-text-primary' : ''}`
    const defaultClasses = "text-text-secondary"
    const hoverClasses = "hover:text-text-primary"

    return (
        <div
            onClick={onClick}
            className={`${baseClasses} ${defaultClasses} ${hoverClasses}`}
        >
            <Typography className="flex items-center gap-2 text-button">
                {label}
                {isShowNumber && <div className="rounded-full bg-accent py-0.5 px-2">
                    {number}
                </div>}
                {isShowChevron && <Icon iconId="chevron-down" width={'16'} height={'16'} viewBox={'0 0 16 16'}/>}
            </Typography>
        </div>
    )
}
