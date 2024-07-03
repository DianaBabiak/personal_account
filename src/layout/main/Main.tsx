import {GoBack} from "../../components/ui/goback/GoBack.tsx";
import {CardProfile} from "../../components/cardProfile/CardProfile.tsx";
import {PersonalInfoForm} from "../../components/cardPersonalInfo/CardPersonalInfo.tsx";
import {useState} from "react";
import {CardTeamInfo} from "../../components/cardTeamInfo/CardTeamInfo.tsx";
import {InfoTeamModal} from "../../components/infoTeamModal/InfoTeamModal.tsx";
import {PartialCurrentUserWithoutAvatar} from "../../data/type.ts";
import {CURRENT_USER} from "../../data/data.ts";

export const Main = () => {
    const [isOpenModalInfoForm, setIsOpenModalInfoForm] = useState(false);
    const [isOpenModalTeam , setIsOpenModalTeam] = useState(false);
    const [currentUser,  setCurrentUser] = useState<PartialCurrentUserWithoutAvatar>(CURRENT_USER);

   const openModalInfoFormHandler = ()=>{
       setIsOpenModalInfoForm(true);
   }

    const closeModalInfoFormHandler = ()=>{
        setIsOpenModalInfoForm(false);
    }

    const openModalTeamHandler = ()=>{
        setIsOpenModalTeam(true);
    }

    const closeModalTeamHandler = ()=>{
        setIsOpenModalTeam(false);
    }

    const changeCurrentUserInfoHandler = (userInfo:PartialCurrentUserWithoutAvatar)=>{
       setCurrentUser(userInfo)
    }

    if(isOpenModalInfoForm){
        return <PersonalInfoForm closeModal={closeModalInfoFormHandler}
                                 isModal={isOpenModalInfoForm}
                                 changeCurrentUserInfo={changeCurrentUserInfoHandler}
                                 currentUser={currentUser}/>
    }

    if(isOpenModalTeam){
        return <InfoTeamModal closeModalTeam={closeModalTeamHandler}/>
    }
    return (
        <main className='relative flex flex-col gap-4 md:grid md:grid-cols-2'>
            <GoBack title={'Вернуться к сотрудникам'} url={'#'}/>
            <CardProfile/>
            <PersonalInfoForm openModal={openModalInfoFormHandler} currentUser={currentUser}/>
            <CardTeamInfo openModalTeam={openModalTeamHandler}/>
        </main>
    )
}
