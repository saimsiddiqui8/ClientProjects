import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '@/pages/api/firebase';
import ShadedContainer from "@/components/ShadedContainer";
import styles from '@/styles/ForSale.module.css';
import { TbMathGreater } from "react-icons/tb"
import { MdLocationPin } from "react-icons/md"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiCube } from "react-icons/hi"
import { MdCall } from "react-icons/md"
import { FaBed } from "react-icons/fa"
import { GrContactInfo } from "react-icons/gr";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';

export default function readyProjects() {
    const router = useRouter();
    const [renderData, setRenderData] = useState([]);
    const [fetchingData, setFetchingData] = useState();
    const [filterButtonDisabled, setFilterButtonDisabled] = useState();
    const [filterValues, setFilterValues] = useState({
        bed: "",
        propertyType: "apartment"
    });

    useEffect(() => {
        loadData();
    }, []);

    const applyFilter = async () => {
        try {
            // Disable the button
            setFilterButtonDisabled(true);

            // Show the spinner
            setFetchingData(true);

            // Fetch data using loadData function
            await loadData();
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            // Enable the button and hide the spinner
            setFilterButtonDisabled(false);
            setFetchingData(false);
        }
    };


    const loadData = async () => {
        try {
            let q = collection(db, 'propertyForSale');

            if (filterValues.bed !== '') {
                q = query(q, where('bed', '==', filterValues.bed));
            }

            if (filterValues.propertyType !== '') {
                q = query(q, where('propertyType', '==', filterValues.propertyType));
            }

            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map((doc) => doc.data());
            setRenderData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <>
            <>
                <ShadedContainer mainHeading="Apartments for Sale" currentPage="Apartments for Sale" imgSrc="/images/Apartments-for-Sale.jpg" />

                <Container className="w-75 mt-5">
                    <h2 className={styles.offPlanProjects}>Apartments for Sale in Dubai - Your Gateway to the Perfect Home
                    </h2>
                    <p className={styles.offPlanProjectsParagraph}>
                        Are you looking for a new apartment in Dubai? Look no further than our property portal, where we offer an extensive selection of apartments for sale in Dubai. From chic studio apartments to spacious three-bedroom apartments, we have something to suit every taste and budget.

                    </p> <br />
                    <h2 className={styles.offPlanProjects}>New Apartments for Sale in Dubai - Discover the Latest and Greatest
                    </h2>
                    <p className={styles.offPlanProjectsParagraph}>
                        If you’re looking for the latest and greatest apartments in Dubai, our property portal has you covered. We offer a range of new apartments for sale in Dubai, featuring the latest in modern design and amenities. These apartments are located in some of the most sought-after neighborhoods in the city, offering easy access to all that Dubai has to offer.
                        <br /><br />
                        Our team of experts is dedicated to helping you find the perfect new apartment in Dubai. We work closely with you to understand your specific requirements and preferences, and we use our extensive knowledge and expertise to help you find the perfect apartment that meets all of your needs.
                    </p> <br />
                    <h2 className={styles.offPlanProjects}>Apartments in Dubai for Sale - Find Your Dream Home Today</h2>
                    <p className={styles.offPlanProjectsParagraph}>
                        Whether you’re a first-time buyer or an experienced investor, our property portal is the perfect place to find your dream apartment in Dubai. We offer a wide range of apartments in Dubai for sale, ranging from affordable options to luxurious high-end properties.
                        <br /><br />
                        Our easy-to-use search filters allow you to narrow down your search based on your specific requirements, such as location, price range, and number of bedrooms. This makes it easy for you to find the perfect apartment that meets all of your needs and fits within your budget.
                        <br /><br />
                        At our property portal, we understand that buying an apartment in Dubai can be a complex and challenging process. That’s why our team of experts is here to guide you every step of the way. From initial consultation to final closing, we are here to help you navigate the Dubai real estate market and ensure that your buying experience is as smooth and stress-free as possible.
                    </p> <br />
                    <h2 className={styles.offPlanProjects}>Why Choose Our Property Portal for Your Apartment Search?</h2>
                    <p className={styles.offPlanProjectsParagraph}>
                        At our property portal, we offer more than just an exclusive selection of apartments for sale in Dubai. We also provide a personalized service that is tailored to your specific needs and preferences. Our team of experts is dedicated to helping you find the perfect apartment that meets all of your needs and fits within your budget.
                        <br /><br /><br />
                        <p>We also offer a range of additional services, including mortgage advice, property management, and more. This ensures that your entire buying experience is seamless and stress-free, from start to finish.</p>
                    </p> <br />
                    <h2 className={styles.offPlanProjects}>Why Choose Dubai for Your Apartment Purchase? (H3)</h2>
                    <p className={styles.offPlanProjectsParagraph}>
                        Dubai is a vibrant and cosmopolitan city that attracts people from all over the world. It is known for its luxurious lifestyle, modern architecture, and exciting opportunities. Dubai is a great place to call home, whether you’re a young professional, a growing family, or a retiree looking for a comfortable and convenient place to live.
                        <br /><br />
                        There are many reasons why people choose to purchase apartments in Dubai, including:</p> <br />
                    <h2 className={styles.offPlanProjects}>Find Best Prices for Buying Apartments in Dubai</h2>
                    <p className={styles.offPlanProjectsParagraph}>
                        Some of the top developers in Dubai include Emaar Properties, Damac Properties, Dubai Properties, and Nakheel Properties. At our property portal, we work closely with these and other reputable developers to offer a range of high-quality apartments for sale in Dubai. Our partnerships with these developers allow us to provide our clients with access to some of the most sought-after properties in the city, at competitive prices.
                        <br /><br />
                        We understand that buying an apartment is a major investment, and we want to ensure that our clients are making the best possible decision. That’s why we only work with developers who have a proven track record of delivering high-quality properties that are built to last. We take the time to carefully vet each property before adding it to our listings, so you can trust that you’re getting the best possible value for your investment.

                        <br /><br /><br />
                        Whether you’re looking for a modern studio apartment or a spacious three-bedroom apartment, our property portal has something to suit your needs. With our extensive selection of apartments for sale in Dubai and our partnerships with top developers, we’re confident that we can help you find your dream home in this dynamic city.

                        <br /><br /><br />
                        So why wait? Start your search for the perfect apartment in Dubai today by browsing our extensive selection of apartments for sale.

                        <br />
                        With our personalized service and expert guidance, you can be sure that you’ll find the perfect home that meets all of your needs and exceeds your expectations. Get started today!
                    </p> <br />
                </Container>
            </>

            <section className="container w-75 mt-5 pt-5">
                <h2 className={styles.offPlanProjects}>Search for Properties in Dubai for Sale</h2>

                <Container>
                    {renderData.map((data, index) => (
                        <Row className="justify-content-evenly mt-5" id={index} key={data.id}>
                            <Col lg={4} md={12} sm={12} className="mt-5" key={index}>
                                {data.imageUrls && data.imageUrls.length > 0 ? (
                                    <Slider autoplay={true} autoplaySpeed={3500}>
                                        {data.imageUrls.map((image, imageIndex) => (
                                            <img key={imageIndex} src={image} className={styles.img} />
                                        ))}
                                    </Slider>
                                ) : (
                                    <div className="text-center">
                                        <img src="/images/noImgAvailable.jpg" width="75%" className={styles.noImgAvailable} />
                                    </div>
                                )}
                            </Col>
                            <Col lg={5} md={12} sm={12} className="mt-5">
                                <p>{data.names}</p>
                                <h3 className="" id={styles.offPlanProjects}>AED {data.price}</h3>
                                <div className="my-1">
                                    <p className={styles.sizes}>
                                        <FaBed className={styles.icon2} /> {data.bed} bed &nbsp; &nbsp; &nbsp;
                                        <FaBed className={styles.icon2} /> {data.bed} bed &nbsp; &nbsp;
                                        <HiCube className={styles.icon2} /> {data.area}
                                    </p>
                                </div>
                                <p className='mb-2 fw-bold'>{data.cartDescription}</p>
                                <p className={styles.viewDetails}>
                                    <Link href={{
                                        pathname: '/forSale/listDetails',
                                        query: { data: JSON.stringify(data) }
                                    }}>
                                        <p>View Details &gt;</p>
                                    </Link>
                                </p>
                                <hr className='my-1 mt-1' />
                                <div className="">
                                    <p className={styles.offPlanProjectsParagraph}>
                                        <a href="#" onClick={() => openMap(data.location)}>
                                            <MdLocationPin className={styles.icon2} /> {data.location}
                                        </a>
                                    </p>
                                </div>
                                <div className="mt-3 w-100 text-center overflow-hidden">
                                    <Row>
                                        <Col lg={6} md={6} sm={6} className="col-6 py-3" id={styles.button1}>
                                            <span className={styles.span}>
                                                <MdCall className={styles.iconz} /> Call Now
                                            </span>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} className="col-6 py-3" id={styles.button2} onClick={() => router.push('/contact')}>
                                            <span className={styles.span}>
                                                <GrContactInfo className={styles.icons} /> Contact Us
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    ))}
                </Container>

            </section>
        </>
    )
}
export async function getServerSideProps() {
    try {
        const q = collection(db, 'propertyForSale');
        const querySnapshot = await getDocs(q);
        const renderData = querySnapshot.docs.map((doc) => doc.data());
        return { props: { renderData } };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { renderData: [] } };
    }
}