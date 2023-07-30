import ShadedContainer from "@/components/ShadedContainer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import styles from '@/styles/ForSale.module.css';
import { Col, Container, Row } from "react-bootstrap";
import db from '@/pages/api/firebase';
import { HiCube } from "react-icons/hi"
import { MdCall, MdLocationPin } from "react-icons/md"
import { FaBed } from "react-icons/fa"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { GrContactInfo } from "react-icons/gr";

export default function palmJumera() {


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

    const loadData = async () => {
        try {
            let q = collection(db, 'propertyForSale');

            // if (filterValues.bed !== '') {
            //     q = query(q, where('bed', '==', filterValues.bed));
            // }

            if (filterValues.property !== '') {
                q = query(q, where('property', '==', "dubaiSportCity"));
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
                <ShadedContainer mainHeading="Dubai Sports City" currentPage="Dubai Sports City" />

                <Container className="w-75 mt-5">
                    <h2>ABOUT DUBAI SPORTS CITY</h2>
                    <p>
                        Located on Mohammed Bin Zayed Road, Dubai Sports City is a mega development that is both a residential, as well as a commercial development. Dubai Sports City is a freehold community that spans over 4.6 million sq. ft. of total area, and is home to 15,000 people across 1,000 villas and 6,000 apartments.

                        <br /><br />
                        With almost 60% of apartments and 70% of villas being occupied, Dubai Sports City offers residents villas, residential apartments and several sports facilities such as a golf course, an international cricket stadium, and a world renowned Sports Village where individuals can train and practice in several sports. DSC will also be the first in the world to host the Manchester United Soccer Schools.

                        <br /><br />
                        Hera Tower Dubai Sports City

                        <br /><br />
                        Hera Tower at Dubai Sports city is a residential tower located at the heart of this sports community. Scheduled for completion in July 2018, this tower will be the latest addition to Dubai Sports City.
                    </p>
                </Container>
            </>

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