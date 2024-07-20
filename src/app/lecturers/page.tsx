import { getAllLectureres } from "../lib/api"
import { ShowLecturers } from "../lib/components/ShowLecturers"

export default function Lecturers() {
    const result = getAllLectureres()
    return <>
        <h1 className="is-size-5 is-color-warning">Lecturers</h1>
        <main>
            <ShowLecturers lecturers={result} />
        </main>
    </>
}