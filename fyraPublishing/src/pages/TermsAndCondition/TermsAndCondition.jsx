import React from 'react'
import logo from "../../assets/logo.png"
import { RxCross1 } from "react-icons/rx"
import { useNavigate } from 'react-router-dom';
import ThemeButton from '../../components/reuseable/ThemeButton';

const TermsAndCondition = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1)
    }
    return (

        <>
            <section className='bg-dark text-light'>
                <div className="text-center py-2">
                    <img src={logo} width={200} alt="" srcset="" />
                </div>
                <div className='text-end container'>
                    <ThemeButton name={<RxCross1 />} click={handleClick} />
                </div>
                <div className="ps-5 pb-5">
                    <div className='w-75 pb-5 ps-5'>
                        <h1>Terms and Conditions</h1>
                        <p className='mt-2'>Fyra Publishing treats your security in a serious way. This security strategy makes sense of
                            how we gather, use, and safeguard your own data when you utilize our administrations.</p>

                        <h6 className='mt-3' style={{color: "#feb414"}}>Data We Gather</h6>
                        <p>At the point when you utilize our administrations, we gather data you give to us straightforwardly,
                            for example, your name, email address, and telephone number. We may likewise gather data about
                            your book, including the title, writer name, and sort. Moreover, we gather data about your
                            connections with our administrations, for example, the pages you visit and the elements you use.nbsp; The information we accumulate will be utilized for at least one of the
                            accompanying purposes:
                        </p>
                        <h6 className='mt-3' style={{color: "#feb414"}}>How We Utilize Your Data</h6>
                        <p>We utilize the data we gather to offer our types of assistance to you, including writer instructing,
                            altering, book plan, and showcasing administrations. We may likewise utilize your data to speak with
                            you about our administrations, advancements, and different subjects of interest. Furthermore, we
                            might utilize your data to work on our administrations, tweak your experience, and break down
                            patterns and use designs.
                        </p>
                        <h6 className='mt-3' style={{color: "#feb414"}}>Data Sharing</h6>
                        <p>We might impart your data to outsider specialist organizations who assist us with offering our types
                            of assistance to you, like instalment processors, showcasing accomplices, and client support
                            suppliers. We may likewise impart your data to our associates, auxiliaries, or different organizations
                            inside the Fyra gathering of organizations. We don&#39;t offer or lease your own data to outsiders.
                        </p>
                        <h6 className='mt-3' style={{color: "#feb414"}}>Security</h6>
                        <p>We go to sensible lengths to safeguard your data from unapproved access, divulgence, or change. In
                            any case, no technique for transmission over the web or electronic stockpiling is totally secure, and
                            we can&#39;t ensure the outright security of your data.
                        </p>
                        <h6 className='mt-3' style={{color: "#feb414"}}>Cookies</h6>
                        <p>We use cookies and similar technologies</p>

                    </div>
                </div>

            </section>
        </>
    )
}

export default TermsAndCondition;