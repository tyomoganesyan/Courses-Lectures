import Image from "next/image"
import { ICourse } from "../api"
import Link from "next/link"
interface IProps {
    courses: ICourse[]
}

export const ShowCourse = ({ courses }: IProps) => {
    return <>
        <div className="column" style={{ display: "flex", flexWrap: "wrap" }}>
            {
                courses.map(c =>
                    <div key={c.id} className="box" style={{ margin: 20, backgroundColor: '#81689D' }} >
                        <Image
                            src={c.cover}
                            width={200}
                            height={200}
                            alt="course photo"
                        />
                        <p className="is-color-info">{c.name}</p>
                        <p>{c.price} AMD</p>
                        <p>For {c.duration} Months</p>
                        <Link href={'courses/edit/' + c.id} >Edit</Link>
                    </div>
                )
            }
        </div>
    </>
}