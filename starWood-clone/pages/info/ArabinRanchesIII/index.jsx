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

export default function ArabinRanchesIII() {


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

            if (filterValues.propertyType !== '') {
                q = query(q, where('propertyType', '==', "apartments"));
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
                <ShadedContainer mainHeading="Arabin Ranches III" currentPage="Arabin Ranches III" />

                <Container className="w-75 mt-5">
                    <h2>About Dubai Hill Estate</h2>
                    <p>
                        Find your slice of luxury in Dubai at the Dubai Hill Estate, a gorgeous and sustainable residential project situated in Mohammed Bin Rashid City, Dubai. The luxurious apartments and villas are built surrounding the award-winning 18-hole championship golf course with an unobstructed view of the magnificent Dubai skyline, including the Burj Khalifa. This ambitious project by Emaar is marked by the modern amenities and lush greenery that creates a serene environment, ideal for raising a family. The Dubai Hills have also garnered a favorable response from the expats who wish to own one of the apartments or a spacious villa. Filled with various entertainment options such as malls, restaurants, and luxury hotels, it also has excellent connectivity to essentials such as schools, healthcare facilities, and the business districts of Dubai. The gated community of Dubai Hills is also home to the Dubai Hills Villas that provide the epitome of privacy and luxury. The 54 km bicycle route is the highlight for fitness enthusiasts, with many other options available in open workout places and indoor gymnasiums. The Dubai Hills villas for sale also provide an outstanding investment opportunity for investors seeking a rapidly developing project with a high investment return. What sets the Dubai Hills community apart is the strong focus on a family-friendly lifestyle with adequate peace and quiet in contrast to the bustling Dubai lifestyle. A large part of the development is also dedicated to parks and open spaces reaching up to the area of 1,450,000 sqm, with 180,000 sqm dedicated to Dubai Hills Park.
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