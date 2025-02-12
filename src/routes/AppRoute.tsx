import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "@/pages/Home";
import AboutUs from "@/pages/About";
import Courses from "@/pages/Courses";
import LoginPage from "@/features/Login/page/Loginpage";
import Layout from "@/components/layout/Layout";
import SignupPage from "@/features/Signup/page/SignupPage";

export default function AppRoute() {
  return (
       <>
       <Router>
        <Layout>
        <Routes>
         <Route path="/login" element={<LoginPage/>}/>
         <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Courses" element={<Courses/>} />
        </Routes>
        </Layout>
      </Router>
       </>
   
  )
}
