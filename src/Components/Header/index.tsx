import { useSelector } from "react-redux"
import { RootState } from "../../data/store"
import { useEffect, useState } from "react"
import './index.css'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Modal from "../Modal"
import { courses } from "../../Util/Constant"

export default function Header(){
    const {coursesData}=useSelector((state:RootState)=> state.courses)
    const addedElements= coursesData?.filter((course)=>course.isAdded === true)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [isAdded,setIsAdded]=useState(false)
    
    

    

    


    return (
        <header>
        <h1>LOGO</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home </NavLink></li> 
                    <li><NavLink to="/aboutus">about us</NavLink></li> 
                    <li><NavLink to="/contactus">contact us</NavLink></li> 
                    <li><NavLink to="/courses">courses</NavLink></li> 
                </ul>     
           </nav>   
        <div className="buttons">
            <button>sign in</button>
            <button>sign up</button>
        </div>
        <div className='cart' onClick={() => setIsModalOpen(true)} >
                <FontAwesomeIcon icon={faCartShopping}/>
                <div id="added-items">{addedElements?.length}</div>
        </div>
        {
            isModalOpen && (
                <Modal onClose={()=> setIsModalOpen(false)}>
                    <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Duration</th>
                <th>Description</th>
                <th>Action</th>

            </tr>
        </thead>
        <tbody>
            {addedElements.map(course => (
                <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>{course.title}</td>
                    <td>{course.price}</td>
                    <td>{course.duration}</td>
                    <td>{course.description}</td>
                    <td>
                        <button className="RemoveBtn">Remove</button>

                    </td>

                </tr>
            ))}
        </tbody>
    </table>             
                </Modal>
            )
        }
        </header>
    )
}