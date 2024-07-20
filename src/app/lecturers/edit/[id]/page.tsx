import { handleUpdateLecturer } from "@/app/lib/actions/lecturer-actions";
import { getLecturerById } from "@/app/lib/api";
import { ImagePicker } from "@/app/lib/components/image-picker";
import Image from "next/image";

interface IProps{
    params:{id:number}
}


export default  function EditPage({params}:IProps) {
    const lecturer = getLecturerById(params.id)
    return <>
        <h1 className="is-size-5 is-color-warning">Edit lecturer</h1>
        <div className="columns">
            <div className="column  is-two-fifths my-4">
                <form className="box" action={handleUpdateLecturer.bind(null,lecturer.id,lecturer.photo)}>
                    <div className="field my-4">
                        <input 
                            type="text"
                            className="input is-primary"
                            name="name"
                            placeholder="enter a name"
                            defaultValue={lecturer.name}
                        />
                    </div>
                    <div className="field my-4">
                        <input 
                            type="text"
                            className="input is-primary"
                            name="surname"
                            placeholder="enter a surname"
                            defaultValue={lecturer.surname}
                        />
                    </div>
                    <div className="field my-4">
                        <input 
                            type="text"
                            className="input is-primary"
                            name="age"
                            placeholder="enter age"
                            defaultValue={lecturer.age}
                        />
                    </div>
                    <div className="field my-4">
                        <input 
                            type="text"
                            className="input is-primary"
                            name="profession"
                            placeholder="enter profession"
                            defaultValue={lecturer.profession}
                        />
                    </div>
                    <Image
                        src={lecturer.photo}
                        width={100}
                        height={100}
                        alt="Lecturer Photo"
                        />
                    <div className="field my-4">
                        <ImagePicker/>
                    </div>
                    <div className="field my-4">
                        <button className="button is-danger">submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}