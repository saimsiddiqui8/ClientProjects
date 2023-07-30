import ShadedContainer from "@/components/ShadedContainer"
import Link from "next/link"
import { Card } from "react-bootstrap"



export default function dubaiAreaGuides() {
    const palmJumeraHeading = () => {
        return (
            <>
                ABOUT PALM JUMEIRAH
            </>
        )
    }
    const palmJumeraParagraph = () => {
        return (
            <>
                <p>
                    Being one of the architectural and engineering wonders of the world, the Palm Jumeirah is not just a residential community but also an iconic landmark. The city of Dubai is well known for its skyscrapers; however, the Palm Jumeirah is an icon synonymous with Dubai. The vibrant destination is an artificial archipelago in the shape of a palm tree with plenty of relaxing sights, from calming water to sandy white beaches and plenty of greenery. <br /><br />

                    The Palm Jumeirah beach is among the high points of living here, and the living experience contrasts with the fast-paced urban life of Downtown Dubai and other city areas. The Palm Jumeirah apartments, villas, and hotels are among Dubai's most luxurious stay options. <br /><br />

                    Palm Jumeirah is home to some of the most luxurious hotels and resorts, offering a variety of activities and attractions. It also features a monorail, a marina, shopping malls, and a number of restaurants and cafes, making it a popular destination for both tourists and locals. <br /><br />

                    Palm Jumeirah is an oasis of luxury, offering stunning views of the Arabian Gulf and Dubai’s skyline. With its unique design and artificial features, it is a sight to behold.
                </p>
            </>
        )
    }
    return (
        <>
            <ShadedContainer mainHeading="DUBAI AREA GUIDES" currentPage="DUBAI AREA GUIDES" />
            <section className="container w-75">

                <h5 className="fw-bold mt-5">DUBAI AREA GUIDES</h5>
                <p className="mt-2">
                    Dubai is an incredible city with numerous different areas to live in and explore. Despite what some might think, these Dubai properties areas can actually be very different, and though they are all popular among buyers and renters each has something a little bit different to offer. <br /><br />

                    It is important to choose the neighborhood that best meets your needs to live in when you are looking to move to Dubai or to relocate within Dubai, so be sure that you do your research carefully and consider what each popular area has ready and off plan projects to offer. <br /><br />

                    You will have the opportunity to speak with one of Driven Properties' skilled, experienced agents when you begin the process of renting or purchasing Dubai properties. During that time, your agent will help determine which of the many incredible neighborhoods is right for you. <br /><br />

                    Here are guides of the main areas and Dubai properties that remain popular across the city:
                </p>
                <hr />

                <div className='row mt-5'>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <Link href={{
                            pathname: '/info/DubaiHillEstate',
                        }}>
                            <Card className='rounded shadow mt-3'>
                                <Card.Img variant="top" src="/images/card10.webp" />
                                <Card.Body className='text-center'>
                                    <Card.Title>Dubai Hill Estate </Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <Link href={{
                            pathname: '/info/palmJumera',
                        }}>
                            <Card className='rounded shadow mt-3'>
                                <Card.Img variant="top" src="/images/card11.webp" />
                                <Card.Body className='text-center'>
                                    <Card.Title>Palm Jumera </Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <Link href={{
                            pathname: '/info/DubaiSportsCity',
                        }}>
                            <Card className='rounded shadow mt-3'>
                                <Card.Img variant="top" src="/images/card12.webp" />
                                <Card.Body className='text-center'>
                                    <Card.Title>Dubai Sports City </Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <Link href={{
                            pathname: '/info/TheOasisByEmaar',
                            query: { name: "The Oasis By Emaar" }
                        }}>
                            <Card className='rounded shadow mt-3'>
                                <Card.Img variant="top" src="/images/card12.webp" />
                                <Card.Body className='text-center'>
                                    <Card.Title>The Oasis By Emaar</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <Link href={{
                            pathname: '/info/Meydan',
                            query: { name: "Meydan" }
                        }}>
                            <Card className='rounded shadow mt-3'>
                                <Card.Img variant="top" src="/images/card10.webp" />
                                <Card.Body className='text-center'>
                                    <Card.Title>Meydan </Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <Link href={{
                            pathname: '/info/ArabinRanchesIII',
                            query: { name: "Arabin Ranches III" }
                        }}>
                            <Card className='rounded shadow mt-3'>
                                <Card.Img variant="top" src="/images/card11.webp" />
                                <Card.Body className='text-center'>
                                    <Card.Title>Arabin Ranches III </Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <Link href={{
                            pathname: '/info/OxwardGardenDubai',
                            query: { name: "Oxward Garden Dubai" }
                        }}>
                            <Card className='rounded shadow mt-3'>
                                <Card.Img variant="top" src="/images/card12.webp" />
                                <Card.Body className='text-center'>
                                    <Card.Title> Oxward Garden Dubai</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <Link href={{
                            pathname: '/info/TownSquare',
                            query: { name: "Town Square" }
                        }}>
                            <Card className='rounded shadow mt-3'>
                                <Card.Img variant="top" src="/images/card12.webp" />
                                <Card.Body className='text-center'>
                                    <Card.Title> Town Square </Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                </div>


            </section>
        </>
    )
}