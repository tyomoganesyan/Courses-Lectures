import Image from "next/image";
import styles from "../page.module.css";
import { getAllCourses } from "../lib/api";
import { ShowCourse } from "../lib/components/ShowCourses";

export default function Home() {
 const result = getAllCourses()
  return <>
    <h1 className="is-size-5 is-color-warning">Courses</h1>
    <main className={styles.main}>
      <ShowCourse courses={result}/>
      </main>
      </>
  
}
