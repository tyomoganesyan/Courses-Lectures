"use server"

import { createWriteStream } from "fs"
import { ICourse, InputCourse, addCourse, updateCourse } from "../api"
import { redirect } from "next/navigation"

export const handleAdd = async (data: FormData) => {
    let photo = data.get('cover') as File
    const filename = Date.now() + "." + photo.type.split('/').at(-1)
    const stream = createWriteStream('public/images/' + filename)
    const bufferdImage = await photo.arrayBuffer()
    stream.write(Buffer.from(bufferdImage))
    let course: InputCourse = {
        name: data.get('name') as string,
        cover: '/images/' + filename,
        price: +(data.get('price') as string),
        duration: +(data.get('duration') as string)
    }

    addCourse(course)
    redirect("/courses")
}


export const handleUpdate = async (id: number, cover: string, data: FormData) => {
    let photo = data.get('cover') as File
    const filename = Date.now() + "." + photo.type.split('/').at(-1)
    const stream = createWriteStream('public/images/' + filename)
    const bufferdImage = await photo.arrayBuffer()
    stream.write(Buffer.from(bufferdImage))

    let file = data.get('cover') as File


    if (!file.size) {
       cover = cover
    }
    else {
        cover = '/images/' + filename
    }

    let course: InputCourse = {
        name: data.get('name') as string,
        cover: cover,
        price: +(data.get('price') as string),
        duration: +(data.get('duration') as string)
    }

    updateCourse(id, course)

    redirect("/courses")
}