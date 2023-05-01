import React from 'react'
import logo from "../../assets/logo.png"
import ThemeButton from '../../components/reuseable/ThemeButton'

const ErrorPage = () => {
    return (
        <div className="bg-dark" style={{paddingBottom: "20rem"}}>
            
        <div className='container'>
            <div className="text-center pt-4">
            <img src={logo} alt="" style={{width: "40%"}}/>
            </div>
            <div>
                <h1 className="text-center text-white mt-4" style={{ fontSize: "8rem", fontWeight: 1000 }}>ERROR 404</h1>
                <div className="text-center">
                <ThemeButton  name="Back to home"/>

                </div>
        </div>
    </div >
        </div>
  )
}

export default ErrorPage