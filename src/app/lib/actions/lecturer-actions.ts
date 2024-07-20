"use server"

import { createWriteStream } from "fs"
import { InputLecturer, addLecturer, updateLecturer } from "../api"
import { redirect } from "next/navigation"


export const handleAddLecturer = async (data: FormData) => {
    let photo = data.get('cover') as File
    const filename = Date.now() + "." + photo.type.split('/').at(-1)
    const stream = createWriteStream('public/images/' + filename)
    const bufferdImage = await photo.arrayBuffer()
    stream.write(Buffer.from(bufferdImage))
    let lecturer: InputLecturer = {
        name: data.get('name') as string,
        surname: data.get('surname') as string,
        age: +(data.get('age') as string),
        profession: data.get('profession') as string,
        photo: '/images/' + filename,
    }

    addLecturer(lecturer)
    redirect("/lecturers")
}

export const handleUpdateLecturer = async (id: number, cover: string, data: FormData) => {
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

    let lecturer: InputLecturer = {
        name: data.get('name') as string,
        surname: data.get('surname') as string,
        age: +(data.get('age') as string),
        profession: data.get('profession') as string,
        photo: cover,
    }

    updateLecturer(id, lecturer)

    redirect("/lecturers")
}