import React from "react";
import Header from '../Components/Header';
import SideBar from '../Components/SideBar';
import About1Games from "../Components/About1Game";
import News from "../Components/News";
const CategoryPage = () =>{
    return(
    <>
    <div>
        <Header/>
        <SideBar/>
        <News/>
        <About1Games/>

    </div>
    </>
    )
}
export default CategoryPage;