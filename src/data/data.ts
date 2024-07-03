import {Avatar, CurrentUser, InfoTeamAndJob} from "./type.ts";

const avatarSrc = 'data:image/jpeg;base64,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'

export const AVATARS: Avatar[] = [
    {id: 1, src: avatarSrc, alt: 'Avatar 1'},
    {id: 2, src: avatarSrc, alt: 'Avatar 2'},
    {id: 3, src: avatarSrc, alt: 'Avatar 3'},
    {id: 4, src: avatarSrc, alt: 'Avatar 4'},
    {id: 5, src: avatarSrc, alt: 'Avatar 5'},
    {id: 6, src: avatarSrc, alt: 'Avatar 6'},
    {id: 7, src: avatarSrc, alt: 'Avatar 7'},
    {id: 8, src: avatarSrc, alt: 'Avatar 8'},
    {id: 9, src: avatarSrc, alt: 'Avatar 9'},
    {id: 10, src: avatarSrc, alt: 'Avatar 10'},
    {id: 11, src: avatarSrc, alt: 'Avatar 11'},
    {id: 12, src: avatarSrc, alt: 'Avatar 12'},
    {id: 13, src: avatarSrc, alt: 'Avatar 12'}
];

export const CURRENT_USER: CurrentUser = {
    name: 'Диана',
    surname: 'Бабяк',
    patronymic: 'Александровна',
    birthday: '20.05.1996',
    employmentDate: '10.07.2024',
    country: 'Польша',
    city: 'Варшава',
    position: 'Frontend developer',
    email: 'dibabiak@gmail.com',
    avatar: 'https://masterpiecer-images.s3.yandex.net/e15c1514640f11ee9adaf6f8c1ba65ae:upscaled'
}

export const INFO_TEAM_AND_JOB: InfoTeamAndJob = {
    employeeLoad: '100%',
    projectName: 'MedPoint 24',
    projectType: 'Коммерческий',
    responsible: {
        avatar: avatarSrc,
        name: 'Олег Петров'
    },
    team: [
        {
            "id": 1,
            "avatar": avatarSrc,
            "name": "Ivan Ivanov",
            "position": "Developer"
        },
        {
            "id": 2,
            "avatar": avatarSrc,
            "name": "Petr Petrov",
            "position": "Designer"
        },
        {
            "id": 3,
            "avatar": avatarSrc,
            "name": "Sergey Sergeev",
            "position": "Project Manager"
        },
        {
            "id": 4,
            "avatar": avatarSrc,
            "name": "Anna Smirnova",
            "position": "Tester"
        },
        {
            "id": 5,
            "avatar": avatarSrc,
            "name": "Elena Nikolaeva",
            "position": "HR Manager"
        },
        {
            "id": 6,
            "avatar": avatarSrc,
            "name": "Dmitry Kuznetsov",
            "position": "DevOps Engineer"
        },
        {
            "id": 7,
            "avatar": avatarSrc,
            "name": "Olga Sokolova",
            "position": "Business Analyst"
        },
        {
            "id": 8,
            "avatar": avatarSrc,
            "name": "Mikhail Popov",
            "position": "Product Owner"
        },
        {
            "id": 9,
            "avatar": avatarSrc,
            "name": "Maria Lebedeva",
            "position": "Scrum Master"
        },
        {
            "id": 10,
            "avatar": avatarSrc,
            "name": "Nikolay Kiselev",
            "position": "Software Architect"
        },
        {
            "id": 11,
            "avatar": avatarSrc,
            "name": "Svetlana Morozova",
            "position": "QA Engineer"
        },
        {
            "id": 12,
            "avatar": avatarSrc,
            "name": "Yuri Vorobyov",
            "position": "Support Engineer"
        },
        {
            "id": 13,
            "avatar": avatarSrc,
            "name": "Tatiana Fedorova",
            "position": "Content Manager"
        },
        {
            "id": 14,
            "avatar": avatarSrc,
            "name": "Alexey Borodin",
            "position": "Marketing Specialist"
        }
    ],
    startDate: '03 марта 2023',
    endDate: '23 марта 2023'
}