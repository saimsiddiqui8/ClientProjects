import { Col, Container, Row } from 'react-bootstrap'
import "./style.css"

const Heading = ({data, classN}) => {
    return (
        <section className={classN}>
            <Container>
                <Row>
                    <Col lg={5} md={4} sm={4}> <div className="flairStripArms mt-3"></div></Col>
                    <Col lg={2} md={3} sm={3}> <h3 className="text-center  text-white" id="lineCenter">{data}</h3></Col>
                    <Col lg={5} md={4} sm={4}> <div className="flairStripArms mt-3"></div> </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Heading