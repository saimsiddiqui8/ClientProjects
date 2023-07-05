import React from 'react'
import logo from "../../assets/logo.png"
import { RxCross1 } from "react-icons/rx"
import { useNavigate } from 'react-router-dom';
import ThemeButton from '../../components/reuseable/ThemeButton';

const PrivacyPolicy = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }
    return (

        <>
            <section className='bg-dark text-light'>
                <div className="text-center py-2">
                    <img src={logo} width={250} alt="" srcset="" />
                </div>
                <div className='text-end container'>
                    <ThemeButton name={<RxCross1 />} click={handleClick} />
                </div>
                <div className="ps-5 pb-5">
                    <div className='w-75 pb-5 ps-5'>
                        <h1>Privacy Policy</h1>
                        <h6 className='mt-3' style={{ color: "#feb414" }}>Overview</h6>
                        <p className='mt-2'>If it&#39;s not too much trouble, note that amazonauthorsolutions just request the data
                            that is expected for the task. We request no extra data. Also, the data is erased not
                            long after we have finished the task. Assuming you continue with working with us if
                            it&#39;s not too much trouble, note that it would be an acknowledgment of the underneath
                            referenced data.</p>
                        <h6 className='mt-3' style={{ color: "#feb414" }}>Reason for collecting required information:</h6>
                        <p> &nbsp; &nbsp; &nbsp; &nbsp; The information we accumulate will be utilized for at least one of the
                            accompanying purposes:</p>
                        <ul>
                            <li>We utilize the data that we gather to all the more likely comprehend and answer your
                                particular necessities.</li>
                            <li>We continually foster our site administrations relying upon the data and remarks we
                                get from you.</li>
                            <li>For fast and fruitful responses to your clients&#39; administration and backing requests,
                                we require explicit data.</li>
                            <li>We associate with you utilizing your email address. We likewise respond to your
                                inquiries or potentially any solicitations or concerns by means of your email address.</li>
                        </ul>
                        <h6 className='mt-3' style={{ color: "#feb414" }}>Protection of information:</h6>
                        <p>We carry out security conventions at all levels to ensure the wellbeing of your own
                            data from the time you make a request or enter or present any of your subtleties.</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default PrivacyPolicy