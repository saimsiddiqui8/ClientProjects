
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

export default function studioApartments() {
    const router = useRouter();
    const [renderData, setRenderData] = useState([]);
    const [fetchingData, setFetchingData] = useState();
    const [filterButtonDisabled, setFilterButtonDisabled] = useState();
    const [filterValues, setFilterValues] = useState({
        bed: "",
        propertyType: "studio"
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
                <ShadedContainer mainHeading="Studio Apartments Page" currentPage="Studio Apartments Page" imgSrc="/images/studioApartment.jpg" />

                <Container className="w-75 mt-5">
                    <h2 className={styles.offPlanProjects}>Studio Apartments for Sale in Dubai - The Perfect Choice for Young Professionals and Investors</h2>
                    <p className={styles.offPlanProjectsParagraph}>
                        If you are looking for an affordable and convenient living option in Dubai, then our property portal offers a range of studio apartments for sale in some of the city’s most desirable neighborhoods. With our extensive selection of studio apartments, you are sure to find the perfect home that meets all of your needs and preferences.</p> <br />
                    <h2 className={styles.offPlanProjects}>Why Buy Studio Apartments in Dubai?</h2>
                    <p className={styles.offPlanProjectsParagraph}>
                        There are several reasons why studio apartments are a great option for young professionals, students, and investors in Dubai. Firstly, they are relatively affordable compared to larger apartments, making them an ideal choice for those on a budget. Secondly, they offer a low-maintenance lifestyle, which is perfect for those who are busy with work or studies.</p> <br />
                    <p className={styles.offPlanProjectsParagraph}>
                        Studio apartments also offer a sense of independence and privacy that is often lacking in shared living arrangements. They are also typically located in desirable neighborhoods that offer easy access to shopping, dining, and entertainment options, making them a popular choice for those who enjoy an active social life.</p> <br />
                    <h2 className={styles.offPlanProjects}>Studio Apartments from Top Real Estate Developers</h2>
                    <p className={styles.offPlanProjectsParagraph}>
                        Our property portal offers a wide range of studio apartments from some of the top real estate developers in Dubai. These apartments are designed with modern living in mind and feature the latest in high-quality finishes and amenities. Whether you are looking for a chic and stylish studio apartment in the heart of the city or a more tranquil and secluded location, we have something to suit every taste and budget.</p> <br /> <br />
                    <h2 className={styles.offPlanProjects}>Prices of Studio Apartments in Dubai</h2>
                    <p className={styles.offPlanProjectsParagraph}>
                        The prices of studio apartments in Dubai can vary depending on the location, size, and amenities offered. However, compared to larger apartments, studio apartments are generally more affordable, making them a great option for those who want to get their foot on the property ladder without breaking the bank.</p> <br />
                    <h2 className={styles.offPlanProjects}>Who Should Buy Studio Apartments in Dubai?</h2>
                    <p className={styles.offPlanProjectsParagraph}>
                        Studio apartments in Dubai are a great option for young professionals who are just starting out in their careers and are looking for an affordable and convenient living option. They are also a great option for students who are studying in Dubai and want a private and independent living space that is close to their university or college. </p> <br />
                    <p className={styles.offPlanProjectsParagraph}>
                        Investors also stand to benefit from buying a studio apartment in Dubai. With the city’s growing population and strong demand for rental properties, studio apartments can offer a great return on investment, with the potential for high rental yields and capital appreciation over time.</p> <br />
                    <h2 className={styles.offPlanProjects}>Locations of Studio Apartments in Dubai</h2>
                    <p className={styles.offPlanProjectsParagraph}>
                        Our property portal offers studio apartments for sale in some of the best locations in Dubai, including Downtown Dubai, Dubai Marina, Jumeirah Village Circle, and more. These neighborhoods offer a range of amenities, including shopping malls, restaurants, cafes, and entertainment options, making them a popular choice for those who enjoy an active and social lifestyle.</p> <br />
                    <h2 className={styles.offPlanProjects}>Benefits of Buying Studio Apartments in Dubai</h2>
                    <p className={styles.offPlanProjectsParagraph}>
                        If you are considering purchasing a property in Dubai, a studio apartment can be a great option for several reasons. Here are some of the benefits of buying studio apartments in Dubai:</p> <br />
                    <ol>
                        <li>
                            <p className={styles.offPlanProjectsParagraph}>
                                Affordability: Studio apartments are usually more affordable than larger apartments or villas in Dubai. They are an excellent option for those looking to purchase their first home or investment property.</p>
                        </li>
                        <li>
                            <p className={styles.offPlanProjectsParagraph}>
                                Low Maintenance: Studio apartments are typically smaller in size, making them easier to clean and maintain. This is especially useful for those who have busy lifestyles or are looking for a low-maintenance property.</p>
                        </li>
                        <li>
                            <p className={styles.offPlanProjectsParagraph}>
                                Great for Singles or Couples: Studio apartments are an ideal choice for singles or couples who prefer a more minimalist lifestyle. With limited space, they encourage the optimization of space and prioritize essential living needs.</p>
                        </li>
                        <li>
                            <p className={styles.offPlanProjectsParagraph}>
                                High Rental Yield: Studio apartments in Dubai typically offer a high rental yield. Due to their affordability and compact size, they are often in high demand, making them an excellent investment opportunity.</p>
                        </li>
                    </ol>
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
export async function getStaticProps() {
    try {
        const q = collection(db, 'propertyForSale');
        const querySnapshot = await getDocs(q);
        const renderData = querySnapshot.docs.map((doc) => doc.data());
        return { props: { renderData }, revalidate: 60 };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { renderData: [] } };
    }
}