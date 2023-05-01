import "./style.css"
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <>
            <section>
                <div className="text-center mt-5">
                    <h2 style={{ color: "#E6A804" }}>Frequently Asked Question</h2>
                    <p style={{ fontWeight: "400" }}>Before contacting us you might want to check whether your question is one of our frequently asked questions.</p>
                </div>

                <div className='container w-50 my-5' id="faqQuestAns">
                    <Accordion defaultActiveKey="" id='faq' style={{ border: "none !important" }}>
                        <Accordion.Item className="mt-1" eventKey="0">
                            <Accordion.Header>How can Amazon Author Solutions help me publish my book?</Accordion.Header>
                            <Accordion.Body>
                                Amazon Author Solutions is an assistance provider to online publishing services for Amazon Author Solutions and many other platforms. With Amazon Author Solutions you can get your book published and promoted with the help of expert consultants and apt marketing solutions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="mt-1" eventKey="1">
                            <Accordion.Header>What do I need to publish my book?</Accordion.Header>
                            <Accordion.Body>
                                the first thing you need is an idea for a book. We can take care of everything else. Whether it's ghostwriting, editng or publishing, Amazon Author Solutions can help you get through the hurdles of getting your book published and live for sales.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="mt-1" eventKey="2">
                            <Accordion.Header>Can Amazon Author Solutions write my book for me?</Accordion.Header>
                            <Accordion.Body>
                                Amazon Author Solutions has extensive teams of diverse writers and editors who can write your book for you or help you write your book yourself. No matter what the subject of your choice is, we can accomodate a wide range of writers for your book.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="mt-1" eventKey="3">
                            <Accordion.Header>How can Amazon Author Solutions help sell my book?</Accordion.Header>
                            <Accordion.Body>
                                Amazon Author Solutions gives multiple book marketing services to help you build a credible profile across many channels and platforms to promote your book by taking it to your relevant target audience. With a 360 strategy and innovative approach, Amazon Author Solutions can uplift your book sales and make you a prominent author online.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="mt-1" eventKey="4">
                            <Accordion.Header>How do i get started?</Accordion.Header>
                            <Accordion.Body>
                                You can go on the live chat to get in touch with a customer representative, call and make an appointment with a consultant or leave us a message.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </section>
        </>
    )
}

export default Faq