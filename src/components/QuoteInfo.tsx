import {useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import RatingSummary from './QuoteInfoComponents/RatingSummary';
import QuoteOption from './QuoteInfoComponents/QuoteOption';
import ReactLoading from 'react-loading';
import {v4 as uuidv4} from 'uuid';

const QuoteInfo = ({quoteObj, setQuoteObj, setShowQuote}):JSX.Element => {

    // Dynamically set the variable selections, so if more options come from back end those new fields will 
    // automatically be generated with the QuoteSelect component and the state for it will be set below:
    const [selected, setSelected] = useState<object>(quoteObj['variable_selections']);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSelected = (option, value):void => {
        let copy:object = selected;
        copy[option] = parseInt(value);
        setSelected(copy);
    }

    // Create number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const reRate = ():void => {
        setLoading(true);
        fetch(`https://fed-challenge-api.sure.now.sh/api/v1/quotes/${quoteObj['quoteId']}`, {
            method: 'PUT',
            body: JSON.stringify({
                "quote": {
                    "quoteId": quoteObj['quoteId'],
                    "rating_address": quoteObj['rating_address'],
                    "policy_holder": quoteObj['policy_holder'],
                    "variable_selections": selected
                }
            })
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            if(res.errors) {
                alert('Server Error')
            } else {
                setLoading(false);
                setQuoteObj(res['quote']);
            }
        })
    }

    return (
        <>
            {loading 
                ? <ReactLoading type={'spin'} color={'#8386F5'} height={300} width={200} className="center"/> 
                : <Container>
                    <Row className="header-row">
                        <Col>
                            <h2>Quote Info</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} className="col-centered">
                            <RatingSummary summary={quoteObj} setShowQuote={setShowQuote}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} className="col-centered">
                            {Object.keys(quoteObj['variable_options']).map(key => 
                                <QuoteOption key={uuidv4()} option={quoteObj['variable_options'][key]} defaultVal={quoteObj['variable_selections'][key]} handleSelected={handleSelected} optionKey={key}/>  
                            )}
                        </Col>
                    </Row>
                    <Row style={{textAlign:"center", marginTop:"10px"}}>
                        <Col xs={12} className="col-centered">
                            <h2>Current Premium: {formatter.format(quoteObj['premium'])}</h2>
                        </Col>
                    </Row>
                    <Row style={{textAlign:"center", marginTop:"10px", marginBottom:"30px"}}>
                        <Col xs={6} className="col-centered">
                            <Button onClick={() => reRate()}>Re-Rate</Button>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default QuoteInfo;