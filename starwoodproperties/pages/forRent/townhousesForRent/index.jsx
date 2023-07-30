
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
import { Container } from "react-bootstrap";

export default function townhousesForRent() {

    return (
        <>
            <ShadedContainer mainHeading="Townhouses For Rent" currentPage="Townhouses For Rent" imgScr="/images/VillasforSale.jpg" />
            <Container className="w-75 mt-5">
                <h2 className={styles.offPlanProjects}>Find Your Dream Townhouse for Rent in Dubai</h2>
                <p className={styles.offPlanProjectsParagraph}>
                    If you are looking for a spacious and luxurious home for rent in Dubai, then renting a townhouse might be the perfect option for you. Dubai offers a variety of townhouses for rent, ranging from affordable to luxury options. With its strategic location, world-class amenities, and vibrant lifestyle, Dubai is the perfect city to find your dream townhouse for rent.</p> <br />
                <h2 className={styles.offPlanProjects}>Types of Townhouses for Rent in Dubai</h2> <br />
                <ol>
                    <li>
                        <h4>Affordable Townhouses</h4>
                        <p className={styles.offPlanProjectsParagraph}>
                            These townhouses offer more space and amenities compared to affordable townhouses. They are ideal for small families who want to enjoy a comfortable and luxurious lifestyle without breaking the bank.</p>
                    </li>
                    <li>
                        <h4>Luxury Townhouses</h4>
                        <p className={styles.offPlanProjectsParagraph}>
                            Luxury townhouses in Dubai are designed to offer the ultimate in luxury living. They come with exclusive amenities such as private swimming pools, gyms, and stunning views of the city.</p>
                    </li>
                </ol>
                <br />
                <h2>Factors to Consider when Renting a Townhouse in Dubai</h2> <br />
                <ol>
                    <li>
                        <h4>Location</h4>
                        <p >The location of your townhouse is an important factor to consider. You should choose a townhouse that is conveniently located for work, schools, and amenities. Popular locations for townhouses in Dubai include Arabian Ranches, Jumeirah Village Circle, and The Springs.</p>
                    </li> <br />
                    <li>
                        <h4>Amenities</h4>
                        <p className={styles.offPlanProjectsParagraph}>
                            The amenities offered by the townhouse are also important. You should look for townhouses that offer amenities such as swimming pools, gyms, and 24-hour security.</p>
                    </li> <br />
                    <li>
                        <h4>Budget</h4>
                        <p className={styles.offPlanProjectsParagraph}>
                            The cost of renting a townhouse in Dubai can vary depending on the location, size, and amenities. It is important to set a budget and look for townhouses that fit within your budget.</p>
                    </li> <br />
                </ol>
                <h2>Tips for Renting a Townhouse in Dubai</h2>

                <ol>
                    <li>
                        <h4>Work with a reputable real estate agent</h4>
                        <p >Working with a reputable real estate agent can help you find the right townhouse for your needs. They have in-depth knowledge of the market and can help you navigate the renting process.</p>
                    </li> <br />
                    <li>
                        <h4>Conduct a site visit</h4>
                        <p className={styles.offPlanProjectsParagraph}>
                            Before renting a townhouse, it is important to conduct a site visit to assess the condition of the townhouse and its amenities.</p>
                    </li> <br />
                    <li>
                        <h4>Check the legal status of the townhouse</h4>
                        <p className={styles.offPlanProjectsParagraph}>
                            Before renting a townhouse, you should ensure that it is legal to rent and that all necessary documents are in place.</p>
                    </li> <br />
                </ol>
                <h2>Conclusion</h2>
                <p>
                    Renting a townhouse in Dubai is an excellent choice for those who are looking for a luxurious and spacious living space. By considering factors such as location, amenities, and budget, you can find the perfect townhouse for rent in Dubai to suit your needs. Working with a reputable real estate agent can help you navigate the renting process and find your dream townhouse in Dubai.
                </p>
            </Container>
        </>
    )
}