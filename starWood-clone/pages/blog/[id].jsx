import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import db from '../api/firebase';
import ShadedContainer from '@/components/ShadedContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


const BlogDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const docRef = doc(db, 'blogs', id);
                    console.log('Fetching data for docRef:', docRef.id);

                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        console.log('Document data:', docSnap.data());
                        setCardData(docSnap.data());
                    } else {
                        console.log('No such document with ID:', id);
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const loadData = async () => {
            try {
                let q = collection(db, 'blogs');

                if (id) {
                    q = query(q, where('id', '==', id));
                }

                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map((doc) => doc.data());
                setCardData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        loadData();
    }, [id]);

    console.log(cardData);

    return (
        <div>
            {cardData && cardData.length > 0 ? (
                <>
                    <ShadedContainer mainHeading={cardData[0].title} currentPage={cardData[0].title} />
                    <Container className='w-75'>
                        <h1>{cardData[0].title}</h1>
                        <div className="text-center rounded my-4">
                            <img className='rounded' src={cardData[0].imageUrls} />
                        </div>
                        <p>{cardData[0].description}</p>
                    </Container>
                </>
            ) : (
                <div className="text-center my-5 pt-5">
                    <Spinner size={200} animation="border" color='black' className='mt-5' />
                </div>
            )}
        </div>
    );

};

export default BlogDetailsPage;
