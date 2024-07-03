export interface Avatar {
    id: number
    src: string
    alt: string
}

export interface CurrentUser {
    name: string
    surname: string
    patronymic: string
    birthday: string
    employmentDate: string
    country: string
    city: string
    position: string
    email: string
    avatar: string
}

export type CurrentUserWithoutAvatar = Omit<CurrentUser, 'avatar'>
export type PartialCurrentUserWithoutAvatar = Partial<CurrentUserWithoutAvatar>

export interface ITeamMember {
    id: number
    avatar: string
    name: string
    position: string
}

interface Responsible {
    avatar: string
    name: string
}

export interface InfoTeamAndJob {
    employeeLoad: string
    projectName: string
    projectType: string
    responsible: Responsible
    team: ITeamMember[]
    startDate: string
    endDate: string
}
