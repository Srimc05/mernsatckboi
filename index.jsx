import ReactDOM from "react-dom/client";
import "./index.css";

/*import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer"
import Body from "./component/Body/Body";
import { useState } from "react";
import Comment from "./component/Comment/Comment";
import Intcard from "./component/Intcard/Intcard";
import Intbody from "./component/IntBody/Intbody";
import Button from "./component/Button/Button";
import Search from "./component/Search/Search";
import Login from "./component/Login/Login";
import Filter from "./component/Filter/Filter";
import Navbar from "./component/Navbar/Navbar";
import Navbar2 from "./component/Navbar/Navbar2";
import Home from "./component/Home/Home";
import Coffecard from "./component/Home/Coffecard";
import Banner from "./component/Home/Banner";
import { Coffee } from "lucide-react";

import CounterSection from "./component/Home/CounterSection";
import Test from "./component/Home/Test";
import Testi from "./component/Home/Testi";
import Foooter from "./component/Home/Foooter";
import Header from "./component/Guvi/Header";
import Body from "./component/Guvi/Body";
import Card from "./component/Guvi/Card";
import Art from "./component/Guvi/Art";
import Section from "./component/Guvi/Section";
import CourseSection from "./component/Guvi/CourseSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./component/Guvi/Signup";
import CourseList from "./component/Guvi/Coursecard";
import Coursecard from "./component/Guvi/Coursecard";
import CourseSlider from "./component/Guvi/CourseSlider";
*/



import Bodycard from "./component/Codegalatta/Bodycard";
import Testi from "./component/Home/Testi";
import Testimonialcard from "./component/Codegalatta/Testimonialcard";
import Clientcount from "./component/Codegalatta/Clientcount";
import Blogbody from "./component/Codegalatta/Blogbody";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./component/Codegalatta/Form";
import Card2 from "./component/Codegalatta/Card2";
import Homecard from "./component/Codegalatta/Homecard";
import Homebody from "./component/Codegalatta/Homebody";
import Footer from "./component/Codegalatta/Footer";
import Hard from "./component/Codegalatta/Hard";
import LandingPage from "./component/Codegalatta/Landingpage";


const Applayout = () => {
  return (
    <>
    <Card2/>
      <Homebody/>
      <LandingPage/>
      <Hard/>
      <Clientcount />
      <Testimonialcard />
      <Bodycard />
      <Blogbody />
      <Form />
      <Footer/>

      
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/Body",
    element: <Bodycard />,
  },
  {
    path:"/",
    element:<Applayout/>
  },
  {
    path: "/Signup",
    element: <Form />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

