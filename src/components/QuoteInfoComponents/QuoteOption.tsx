import {Form, Tooltip, OverlayTrigger, Col} from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';

const QuoteOption = ({option, defaultVal, handleSelected, optionKey}):JSX.Element => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {option.description}
        </Tooltip>
    );
    
    return (
        <Form.Row className="select-container">
            <Form.Group as={Col}>
                <Form.Label>{option['title']}</Form.Label>
                <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <i className="fa fa-info-circle"></i>
                </OverlayTrigger>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Control as="select" defaultValue={defaultVal} onChange={(ev) => handleSelected(optionKey, ev.target.value)}>
                    {option.values.map(x => <option key={uuidv4()} value={x}>{x}</option>)}
                </Form.Control>
            </Form.Group>
        </Form.Row>
    )
}

export default QuoteOption;