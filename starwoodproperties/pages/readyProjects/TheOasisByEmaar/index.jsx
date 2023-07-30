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

export default function TheOasisByEmaar() {


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
                q = query(q, where('property', '==', "emaar"));
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
                <ShadedContainer mainHeading="Dubai Hill Estate" currentPage="Dubai Hill Estate" />

                <Container className="w-75 mt-5">
                    <h2>About Dubai Hill Estate</h2>
                    <p>
                        Find your slice of luxury in Dubai at the Dubai Hill Estate, a gorgeous and sustainable residential project situated in Mohammed Bin Rashid City, Dubai. The luxurious apartments and villas are built surrounding the award-winning 18-hole championship golf course with an unobstructed view of the magnificent Dubai skyline, including the Burj Khalifa. This ambitious project by Emaar is marked by the modern amenities and lush greenery that creates a serene environment, ideal for raising a family. The Dubai Hills have also garnered a favorable response from the expats who wish to own one of the apartments or a spacious villa. Filled with various entertainment options such as malls, restaurants, and luxury hotels, it also has excellent connectivity to essentials such as schools, healthcare facilities, and the business districts of Dubai. The gated community of Dubai Hills is also home to the Dubai Hills Villas that provide the epitome of privacy and luxury. The 54 km bicycle route is the highlight for fitness enthusiasts, with many other options available in open workout places and indoor gymnasiums. The Dubai Hills villas for sale also provide an outstanding investment opportunity for investors seeking a rapidly developing project with a high investment return. What sets the Dubai Hills community apart is the strong focus on a family-friendly lifestyle with adequate peace and quiet in contrast to the bustling Dubai lifestyle. A large part of the development is also dedicated to parks and open spaces reaching up to the area of 1,450,000 sqm, with 180,000 sqm dedicated to Dubai Hills Park.
                    </p>
                </Container>
            </>
            <Container className="w-75 my-5">
                <Row className="bgColor py-1 px-5">
                    <Col>
                        <p>Studio apartments</p>
                    </Col>
                    <Col className="text-center">
                        <p>698 Sq. ft.</p>
                    </Col>
                </Row>
                <Row className="py-1 px-5">
                    <Col>
                        <p>1-Bedroom apartments	</p>
                    </Col>
                    <Col className="text-center">
                        <p>808 Sq. ft. - 1,337 Sq. ft.
                        </p>
                    </Col>
                </Row>
                <Row className="bgColor py-1 px-5">
                    <Col>
                        <p>1-Bedroom Deplux	</p>
                    </Col>
                    <Col className="text-center">
                        <p>1,146 Sq. ft. - 1,255 Sq. ft.</p>
                    </Col>
                </Row>
                <Row className="py-1 px-5">
                    <Col>
                        <p>2-Bedroom apartments	</p>
                    </Col>
                    <Col className="text-center">
                        <p>1,779 Sq. ft.</p>
                    </Col>
                </Row>
                <Row className="bgColor py-1 px-5">
                    <Col>
                        <p>2-Bedroom Deplux	</p>
                    </Col>
                    <Col className="text-center">
                        <p>1,917 Sq. ft. - 1,949 Sq. ft.</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="justify-content-evenly mt-5">
                    {renderData.slice(0, 9).map((data, index) => (
                        <Col lg={4} md={6} sm={12} className="mt-5" key={index}>
                            {data.imageUrls && data.imageUrls.length > 0 ? (
                                <div>
                                    {data.imageUrls.slice(0, 1).map((image, imageIndex) => (
                                        <img key={imageIndex} src={image} className={styles.img} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center">
                                    <Image src="/images/noImgAvailable.jpg" width="75%" className={styles.noImgAvailable} />
                                </div>
                            )}
                        </Col>
                    ))}
                </Row>
            </Container>

            <section className="mt-5 mx-2">
                {/* <Map address="1600 Amphitheatre Parkway, Mountain View, CA" /> */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14456.072111375264!2d55.2066194!3d25.0673781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d23f22285ab%3A0x842f4d8e898a24ff!2sOxford%20212%20-%20Iman%20Developers!5e0!3m2!1sen!2s!4v1688768537003!5m2!1sen!2s"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="mymap"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </>
    )
}