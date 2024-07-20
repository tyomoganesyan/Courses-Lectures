
import Image from "next/image";
import { ILecturer } from "../api";
import Link from "next/link";

interface IProps {
    lecturers: ILecturer[]
}

export const ShowLecturers = ({ lecturers }: IProps) => {
    return <>
        <div className="column" style={{ display: "flex", flexWrap: "wrap" }}>
            {
                lecturers.map(l =>
                    <div key={l.id} className="box" style={{ margin: 20, backgroundColor: '#81689D' }}>
                        <Image
                        src={l.photo}
                        width={200}
                        height={200}
                        alt="Lecturer Photo"
                        />
                        <p>{l.name}</p>
                        <p>{l.surname}</p>
                        <p>{l.age}</p>
                        <p>{l.profession}</p>
                        <Link href={'lecturers/edit/' + l.id} >Edit</Link>
                    </div>


                )
            }
        </div>
    </>
} 