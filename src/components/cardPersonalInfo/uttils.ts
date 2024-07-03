import {FormValues} from "./schema.ts";

export const fieldLabels: { [key in keyof FormValues]: string } = {
    name: 'Имя',
    surname: 'Фамилия',
    patronymic: 'Отчество',
    birthday: 'Дата Рождения',
    employmentDate: 'Дата трудоустройства',
    country: 'Страна',
    city: 'Город',
    position: 'Должность',
    email: 'Электронная почта',
}