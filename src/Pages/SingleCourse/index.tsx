import { useParams } from "react-router-dom"
import { courses } from "../../Util/Constant"
import './index.css'

export default function SingleCourse(){

    const {id}=useParams()

    const course=courses?.find((el)=>el.id === Number(id))

    return (
        <div className="single-course-container">
        <h1>SINGLE COURSE PAGE</h1>
            <h1>COURSE TITLE : {course?.title}</h1>
            <h1>COURSE PRICE: {course?.price}</h1>
            <h1>COURSE DURATION: {course?.duration}</h1>
            <h1>COURSE DESCRIPTION: {course?.description}</h1>
        </div>
    )
}