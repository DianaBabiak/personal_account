import logo from '../../assets/Logo.png'
import {Avatar} from "../../components/ui/avatar/Avatar.tsx";
import {Icon} from "../../components/ui/icon/Icon.tsx";
import {CURRENT_USER} from "../../data/data.ts";

export const Header = () => {

    return (
        <header className='flex justify-between items-center px-4 py-7'>
            <img src={logo} alt='logo' className='h-full min-w-38 object-cover max-w-36 md:max-w-44' />
            <div className='flex justify-center items-center gap-2'>
                <div className='flex justify-center items-center px-4 py-1.5 border border-border-primary rounded-2xl'>
                    <Avatar src={CURRENT_USER.avatar} alt={'userAvatar'} size={'xxs'}/>
                    <Icon iconId={'arrow-down'}/>
                </div>
                <Icon iconId={'burger'}/>
            </div>

        </header>
    )
}
