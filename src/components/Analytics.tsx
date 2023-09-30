import React from "react"
import Laptop from "../assets/laptop.jpg"

type AnalyticsProps = {}

const Analytics: React.FC<AnalyticsProps> = () => {
    return (
        <div className="w-full bg-white px-4 py-16">
            <div className="mx-auto grid max-w-[1240px] md:grid-cols-2">
                <img className="mx-auto my-4 w-[1500px]" src={Laptop} alt="" />
                <div className="flex flex-col justify-center">
                    <p className="font-bold text-[#00df9a]">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                        Mange Data Ananlytics Centrally
                    </h1>
                    <p>description here</p>
                    <button className="mx-auto md:mx-0 my-5 w-[200px] rounded-md bg-black py-3 font-medium text-[#00df9a]">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Analytics
