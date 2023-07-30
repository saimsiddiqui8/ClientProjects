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
                q = query(q, where('property', '==', "palmJumera"));
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
            <ShadedContainer mainHeading="Palm Jumera" currentPage="Palm Jumera" />

            <Container className="w-75 mt-5">
                <h2>ABOUT PALM JUMEIRAH</h2>
                <p>
                    Being one of the architectural and engineering wonders of the world, the Palm Jumeirah is not just a residential community but also an iconic landmark. The city of Dubai is well known for its skyscrapers; however, the Palm Jumeirah is an icon synonymous with Dubai. The vibrant destination is an artificial archipelago in the shape of a palm tree with plenty of relaxing sights, from calming water to sandy white beaches and plenty of greenery. <br /><br />

                    The Palm Jumeirah beach is among the high points of living here, and the living experience contrasts with the fast-paced urban life of Downtown Dubai and other city areas. The Palm Jumeirah apartments, villas, and hotels are among Dubai's most luxurious stay options.<br /><br />

                    Palm Jumeirah is home to some of the most luxurious hotels and resorts, offering a variety of activities and attractions. It also features a monorail, a marina, shopping malls, and a number of restaurants and cafes, making it a popular destination for both tourists and locals.<br /><br />

                    Palm Jumeirah is an oasis of luxury, offering stunning views of the Arabian Gulf and Dubai’s skyline. With its unique design and artificial features, it is a sight to behold.
                </p>
                <h2 className="mt-5 pt-5">Apartments For Sale In PALM JUMEIRAH</h2>
            </Container>

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