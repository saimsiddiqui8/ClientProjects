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

export default function PropertiesForSale() {
    const router = useRouter();
    const [renderData, setRenderData] = useState([]);
    const [fetchingData, setFetchingData] = useState();
    const [filterButtonDisabled, setFilterButtonDisabled] = useState();
    const [filterValues, setFilterValues] = useState({
        bed: "",
        propertyType: ""
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
            <ShadedContainer mainHeading="Properties For Sale" currentPage="Properties For Sale" imgSrc="/images/propertyForRentInDubai.jpg" />

            <section className="container w-75">
                <h2 className={styles.offPlanProjects}>Property for Sale in Dubai</h2>
                <p className={styles.offPlanProjectsParagraph}>
                    Welcome to our _____ Property Portal, your one-stop destination for finding the perfect property for sale in Dubai. Dubai is a city of endless opportunities and possibilities, and we’re here to help you find the perfect property that meets all of your needs. With a diverse range of neighborhoods and communities, as well as a wide selection of luxurious properties, Dubai truly has something for everyone.
                </p> <br />

                <h2 className={styles.offPlanProjects}>Finding the Right Property for Sale in Dubai</h2>
                <p className={styles.offPlanProjectsParagraph}>
                    Dubai is constantly growing and evolving, with new developments and properties being added to the market all the time. With such a vast selection of properties for sale in Dubai, it can be overwhelming to know where to start your search. However, our property portal is here to simplify the process for you and make it easy to find the right property that meets your needs.
                </p> <br />
                <p className={styles.offPlanProjectsParagraph}>
                    We realize that every buyer has their own specific criteria when it comes to purchasing a property. Some buyers may be in search of a large villa with a private pool and garden, while others may be looking for a chic and modern apartment in the heart of the city. Regardless of your preferences, our property portal offers a comprehensive range of properties to select from.
                </p> <br />
                <p className={styles.offPlanProjectsParagraph}>
                    Our listings include a variety of property types, such as villas, townhouses, apartments, and more. We also have properties available in different locations throughout Dubai, ranging from established neighborhoods to up-and-coming areas. This enables you to quickly search for properties based on your preferred location and find one that meets your lifestyle and preferences.
                </p>
            </section>

            <section className="container w-75 mt-5 pt-5">
                <Container>
                    <Row>
                        <Col lg={9} md={7} sm={12}>
                            <h2 className={styles.offPlanProjects}>Dubai Properties For Sale</h2>
                        </Col>
                        <Col lg={3} md={5} sm={12}>
                            <h2 className={styles.offPlanProjects}>Popular Areas - For Sale</h2>
                            <section className="mt-3">
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} /> Bluewaters Island</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} /> Bluewaters Island</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} /> Bluewaters Island</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} /> City Walk</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} />City Walk</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} />City Walk</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} />Jumeirah Circle</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} />Jumeirah Circle</p>
                                <p className={styles.offPlanProjectsParagraph}>  <TbMathGreater className={styles.icons} fontWeight={900} />Jumeirah Circle</p>

                            </section>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="mx-2 mt-5 rounded py-5 bg-dark">
                <section className="container w-75 text-white">
                    <h2 className="text-white">Properties Filter:-</h2>
                    <Form>
                        <Row className="align-items-center">
                            <Form.Group as={Col} className='mt-4' lg={4} md={6} sm={6}>
                                <Form.Label>Bed</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={filterValues.bed}
                                    onChange={(e) => setFilterValues({ ...filterValues, bed: e.target.value })}
                                >
                                    <option value="">Any</option>
                                    <option value="1">1 Bed</option>
                                    <option value="2">2 Beds</option>
                                    <option value="3">3 Beds</option>
                                    <option value="4">4 Beds</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} className='mt-4' lg={4} md={6} sm={6}>
                                <Form.Label>Property Type</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={filterValues.propertyType}
                                    onChange={(e) => setFilterValues({ ...filterValues, propertyType: e.target.value })}
                                >
                                    <option value="">Any</option>
                                    <option value="property">Property</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="studio">Studio</option>
                                </Form.Control>
                            </Form.Group>
                            <Col className='mt-4' lg={4} md={12} sm={12}>
                                <Button className="bg-white text-dark w-100 mt-4 py-3 border border-secondary border-5" onClick={applyFilter} disabled={filterButtonDisabled}>
                                    {fetchingData ? <Spinner animation="border" size="sm" /> : 'Apply Filter'}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </section>
            </div>


            <section className="container w-75 mt-5 pt-5">
                <h2 className={styles.offPlanProjects}>Search for Properties in Dubai for Sale</h2>
                {fetchingData ? (
                    <div className="text-center my-5 pt-5">
                        <Spinner animation="border" color='black' className='mt-5' />
                    </div>
                ) : (
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
                )}
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