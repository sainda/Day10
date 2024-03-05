import { useSelector } from "react-redux";
import Course from "../../Components/Course";
import { courses } from "../../Util/Constant";
import './index.css'
import { RootState } from "../../data/store";


export default function Courses(){

    const {coursesData} =useSelector((state:RootState)=>state.courses)

    return (
     <div className="courses">
         {
             coursesData?.length>0 && coursesData?.map(({title,price,id})=>(
                    <Course title={title} price={price} id={id}/>
             ))
         }
     </div>
    ) 
 }