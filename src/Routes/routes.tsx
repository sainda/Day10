import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import HomePage from "../Pages/HomePage";
import ContactUs from "../Pages/ContactUs/Index";
import Courses from "../Pages/Courses";
import SingleCourse from "../Pages/SingleCourse";
import NotFound from "../Pages/NotFound";




export default function AppRoutes(){

    return (
        <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/aboutus"/>
                <Route path="/contactus" element={<ContactUs/>}/>
                <Route path="/courses/">
                    <Route path="" element={<Courses/>}/>
                    <Route path=":id" element={<SingleCourse/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Layout>
        </Router>
    )
}