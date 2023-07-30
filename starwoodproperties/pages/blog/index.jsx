import ShadedContainer from '@/components/ShadedContainer'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import db from '../api/firebase';
import { collection, getDocs } from 'firebase/firestore';

const blog = () => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [cards, setCards] = useState([]);
    const [latestNews, setLatestNews] = useState([]);

    const maxLength = 35;
    useEffect(() => {
        const loadData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'blogs'));
                const data = querySnapshot.docs.map((doc) => doc.data());
                setCards(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        loadData();
        const loadDataLatestNews = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'latestNews'));
                const data = querySnapshot.docs.map((doc) => doc.data());
                setLatestNews(data);
                console.log(data);
                // setTimeout(() => {
                //     setIsLoading(false);
                // }, 800);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        loadDataLatestNews();
    }, [])

    return (
        <>
            <ShadedContainer mainHeading="Dubai Real Estate News" currentPage="Dubai Real Estate News" imgSrc="/images/blog.jpg" />
            <Container className='w-75' id='blog-container'>
                <Row>
                    <Col lg={8} md={7} sm={12} className='mt-5'>
                        <div>
                            <h4 className="fw-bold">REAL ESTATE NEWS</h4>
                            <hr />
                            <Container>
                                {/* Divide cards into pairs */}
                                {cards.map((card, index) => (
                                    index % 2 === 0 && (
                                        <Row key={card.id}>
                                            <Col lg={6} md={12} sm={12}>
                                                <Card className='rounded shadow mt-3 cardContainer' style={{ width: "90%" }}>
                                                    <div style={{
                                                        position: 'absolute',
                                                        top: '10px',
                                                        right: '10px',
                                                        background: 'rgba(0, 0, 0, 0.7)',
                                                        color: '#fff',
                                                        padding: '5px 10px',
                                                        borderRadius: '4px',
                                                        fontSize: '12px'
                                                    }}>
                                                        Date: {card.date}
                                                    </div>
                                                    <Card.Img variant="top" src={card.imageUrls[0]} />
                                                    <Card.Body style={{ position: 'relative' }}>
                                                        <Card.Title style={{ fontSize: "16px", fontWeight: 800 }} >{card.title}</Card.Title>
                                                        {showFullDescription ? (
                                                            <Card.Text>{card.description}</Card.Text>
                                                        ) : (
                                                            <Card.Text style={{ fontSize: "12px" }}>
                                                                {card.description.length <= maxLength
                                                                    ? card.description
                                                                    : `${card.description.slice(0, maxLength)} ... `}
                                                                <Link href={`/blog/${card.id}`} >
                                                                    Read More
                                                                </Link>
                                                            </Card.Text>
                                                        )}

                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            {/* Render the second card in the pair */}
                                            {cards[index + 1] && (
                                                <Col lg={6} md={12} sm={12}>
                                                    <Card className='rounded shadow mt-3 cardContainer' style={{ width: "90%" }}>
                                                        <div style={{
                                                            position: 'absolute',
                                                            top: '10px',
                                                            right: '10px',
                                                            background: 'rgba(0, 0, 0, 0.7)',
                                                            color: '#fff',
                                                            padding: '5px 10px',
                                                            borderRadius: '4px',
                                                            fontSize: '12px'
                                                        }}>
                                                            Date: {cards[index + 1].date}
                                                        </div>
                                                        <Card.Img variant="top" src={cards[index + 1].imageUrls} />
                                                        <Card.Body style={{ position: 'relative' }}>
                                                            <Card.Title style={{ fontSize: "16px", fontWeight: 800 }} >{cards[index + 1].title}</Card.Title>
                                                            {showFullDescription ? (
                                                                <Card.Text>{cards[index + 1].description}</Card.Text>
                                                            ) : (
                                                                <Card.Text style={{ fontSize: "12px" }}>
                                                                    {cards[index + 1].description.length <= maxLength
                                                                        ? cards[index + 1].description
                                                                        : `${cards[index + 1].description.slice(0, maxLength)} ... `}
                                                                    <Link href={`/blog/${cards[index + 1].id}`}>
                                                                        Read More
                                                                    </Link>
                                                                </Card.Text>
                                                            )}
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            )}
                                        </Row>
                                    )
                                ))}
                            </Container>
                        </div>
                    </Col>
                    <Col lg={4} md={5} sm={12} className='ps-5 mt-5'>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div>
                                    <h4 className="fw-bold">LATEST POSTS</h4>
                                    <hr />
                                    {latestNews.map((item) => (
                                        <div key={item.id} className='mt-3'>
                                            <div className='d-flex flex-row'>
                                                <div>
                                                    <img src={item.imageSrc} width="100" className='rounded' />
                                                </div>
                                                <div className='ps-3'>
                                                    <p>{item.title}</p>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    ))}
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={12} className="mt-4">
                                <div>
                                    <h4 className="fw-bold">STAY IN TOUCH</h4>
                                    <hr className='lh-0' />
                                    Facebook, Insta
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default blog
export async function getServerSideProps() {
    try {
        const q = collection(db, 'blogs ');
        const querySnapshot = await getDocs(q);
        const renderData = querySnapshot.docs.map((doc) => doc.data());
        return { props: { renderData } };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { renderData: [] } };
    }
}