import { handleAddLecturer } from "@/app/lib/actions/lecturer-actions";
import { ImagePicker } from "@/app/lib/components/image-picker";



export default function AddLecturer(){
    return <div>
        <h1 className="is-size-5 is-color-warning">Add Lecturer</h1>
        <div className="columns">
            <div className="column  is-two-fifths my-4">
                <form className="box" action={handleAddLecturer}>
                    <div className="field my-4">
                        <input 
                            type="text"
                            className="input is-primary"
                            name="name"
                            placeholder="enter a name"
                        />
                    </div>
                    <div className="field my-4">
                        <input 
                            type="text"
                            className="input is-primary"
                            name="surname"
                            placeholder="enter a surname"
                        />
                    </div>
                    <div className="field my-4">
                        <input 
                            type="text"
                            className="input is-primary"
                            name="age"
                            placeholder="enter age"
                        />
                    </div>
                    <div className="field my-4">
                        <input 
                            type="text"
                            className="input is-primary"
                            name="profession"
                            placeholder="enter profession"
                        />
                    </div>
                    <div className="field my-4">
                        <ImagePicker/>
                    </div>
                    <div className="field my-4">
                        <button className="button is-danger">submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}