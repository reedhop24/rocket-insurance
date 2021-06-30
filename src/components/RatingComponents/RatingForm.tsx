import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const RatingForm = ({firstName, setFirstName, lastName, setLastName, address, setAddress, addressTwo,
    setAddressTwo, city, setCity, state, setState, zip, setZip, getQuote}):JSX.Element => {
    return (
        <Container>
            <Row className="header-row">
                <Col><h2>Rate</h2></Col>
            </Row>
            <Row>
                <Col xs={6} className="col-centered">
                    <Form className="quote-form">
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control onChange={(ev) => setFirstName(ev.target.value)} defaultValue={firstName}/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={(ev) => setLastName(ev.target.value)} defaultValue={lastName}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={(ev) => setAddress(ev.target.value)} defaultValue={address}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control onChange={(ev) => setAddressTwo(ev.target.value)} defaultValue={addressTwo}/>
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>City</Form.Label>
                                <Form.Control onChange={(ev) => setCity(ev.target.value)} defaultValue={city}/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue={state} onChange={(ev) => setState(ev.target.value)}>
                                    <option value=""></option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Zip</Form.Label>
                                <Form.Control required={true} onChange={(ev) => setZip(ev.target.value)} defaultValue={zip}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="centered-row">  
                            <Button variant="primary" onClick={() => getQuote()}>
                                Submit
                            </Button>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default RatingForm;