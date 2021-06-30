import {Container, Row, Col, Button} from 'react-bootstrap';

const RatingSummary = ({summary, setShowQuote}):JSX.Element => {
    return (
        <Container className="rating-summary">
            <Row>
                <Col>
                    <dl>
                        <dt>First Name</dt>
                        <dd>{summary['policy_holder']['first_name']}</dd>
                    </dl>
                </Col>
                <Col>
                    <dl>
                        <dt>Last Name</dt>
                        <dd>{summary['policy_holder']['last_name']}</dd>
                    </dl>
                </Col>
                <Col>
                    <dl>
                        <dt>Address</dt>
                        <dd>{summary['rating_address']['line_1']} {summary['rating_address']['line_2']}</dd>
                    </dl>
                </Col>
            </Row>
            <Row>
                <Col>
                    <dl>
                        <dt>City</dt>
                        <dd>{summary['rating_address']['city']}</dd>
                    </dl>
                </Col>
                <Col>
                    <dl>
                        <dt>Region</dt>
                        <dd>{summary['rating_address']['region']}</dd>
                    </dl>
                </Col>
                <Col>
                    <dl>
                        <dt>Postal Code</dt>
                        <dd>{summary['rating_address']['postal']}</dd>
                    </dl>
                </Col>
            </Row>
            <Row className="centered-row">
                <Col>
                    <Button onClick={() => setShowQuote(false)}>Edit</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default RatingSummary;