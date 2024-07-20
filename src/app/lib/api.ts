import Database from 'better-sqlite3'

export interface   ICourse {
    id: number
    name: string
    price: number
    cover: string
    duration: number
}

export interface ILecturer {
    id: number
    name: string
    surname: string
    age: number
    profession: string
    photo: string

}

export type InputCourse = Omit<ICourse, 'id'>
export type InputLecturer = Omit<ILecturer, 'id'>

const db = new Database("courses.db")
const dbL = new Database('lecturers.db')


export const addCourse = (course: InputCourse) => {
    db.prepare(`
            INSERT INTO courses(name, price, cover, duration)
            VALUES(@name, @price, @cover, @duration)
    `).run(course)
}

export const getAllCourses = (): ICourse[] => {
    return db.prepare(`
            SELECT * FROM courses
    `).all() as ICourse[]
}

export const getCourseById = (id: number): ICourse => {
    return db.prepare(`
            SELECT * FROM courses
            WHERE id = ?
        `).get(id) as ICourse
}

export const updateCourse = (id: number, course: InputCourse) => {
    db.prepare(`
         UPDATE courses 
         SET name = @name, price = @price, cover = @cover, duration = @duration
         WHERE id = @id
        `).run({ id, ...course })
}



export const addLecturer = (lecturer:InputLecturer) => {
    dbL.prepare(`
            INSERT INTO lecturers(name, surname, age, profession, photo)
            VALUES(@name, @surname, @age, @profession, @photo)
    `).run(lecturer)
}

export const getAllLectureres = (): ILecturer[] => {
    return dbL.prepare(`
            SELECT * FROM lecturers
    `).all() as ILecturer[]
}

export const getLecturerById = (id: number): ILecturer => {
    return dbL.prepare(`
            SELECT * FROM lecturers
            WHERE id = ?
        `).get(id) as ILecturer
}

export const updateLecturer= (id: number, lecturer: InputLecturer) => {
    dbL.prepare(`
         UPDATE lecturers
         SET name = @name, surname = @surname, age = @age, profession = @profession, photo = @photo
         WHERE id = @id
        `).run({ id, ...lecturer })
}