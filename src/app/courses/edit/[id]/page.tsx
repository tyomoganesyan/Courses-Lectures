import { handleUpdate } from "@/app/lib/actions/course-actions";
import { InputCourse, getCourseById } from "@/app/lib/api";
import { ImagePicker } from "@/app/lib/components/image-picker";
import Image from "next/image";
interface IProps{
    params:{id:number}
}

export default function EditPage({params}:IProps) {
    // const id = params.id
    const course = getCourseById(params.id)
    return <>
        <h1 className="is-color-warning is-color-warning">Edit Course</h1>
        <div className="column  is-two-fifths my-4">
                <form className="box" action={handleUpdate.bind(null,course.id,course.cover)}>
                    <div className="field my-4">
                        <input 
                            type="text"
                            className="input is-primary"
                            name="name"
                            placeholder="enter a name"
                         defaultValue={course.name}
                        />
                    </div>
                    <div className="field my-4">
                        <input 
                            type="text"
                            className="input is-primary"
                            name="price"
                            placeholder="enter a price"
                            defaultValue={course.price}
                        />
                    </div>
                    <div className="field my-4">
                        <input 
                            type="text"
                            className="input is-primary"
                            name="duration"
                            placeholder="enter a duration"
                            defaultValue={course.duration}
                        />
                    </div>
                        <Image
                        src={course.cover}
                        width={100}
                        height={100}
                        alt="course picture"
                        />
                    <div className="field my-4">
                         <ImagePicker/> 
                    </div>
                    <div className="field my-4">
                        <button className="button is-danger">submit</button>
                    </div>
                </form>
            </div>
    </>
}