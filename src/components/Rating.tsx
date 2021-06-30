import {useState} from 'react';
import ReactLoading from 'react-loading';
import RatingForm from './RatingComponents/RatingForm';

const Rating = ({quoteObj, setQuoteObj, setShowQuote}):JSX.Element => {

    // If the user is editing the quote information the quoteObj will be present, in which case set below
    // state variables to the corresponding element in quoteObj
    const [firstName, setFirstName] = useState<string | undefined>(quoteObj ? quoteObj['policy_holder']['first_name'] : undefined);
    const [lastName, setLastName] = useState<string | undefined>(quoteObj ? quoteObj['policy_holder']['last_name'] : undefined);
    const [address, setAddress] = useState<string | undefined>(quoteObj ? quoteObj['rating_address']['line_1'] : undefined);
    const [addressTwo, setAddressTwo] = useState<string | undefined>(quoteObj ? quoteObj['rating_address']['line_2'] : undefined);
    const [city, setCity] = useState<string | undefined>(quoteObj ? quoteObj['rating_address']['city'] : undefined);
    const [state, setState] = useState<string | undefined>(quoteObj ? quoteObj['rating_address']['region'] : undefined);
    const [zip, setZip] = useState<string | undefined>(quoteObj ? quoteObj['rating_address']['postal'] : undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const getQuote = ():void => {

        if(!firstName || !lastName || !address || !city || !state || !zip) {
            alert('All fields must be entered');
            return;
        }

        setLoading(true);

        fetch('https://fed-challenge-api.sure.now.sh/api/v1/quotes', {
            method: 'POST',
            body: JSON.stringify({
                "first_name": firstName,
                "last_name": lastName,
                "address": {
                    "line_1": address,
                    "line_2": addressTwo,
                    "city": city, 
                    "region": state, 
                    "postal": zip
                }
            })
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            if(res.errors) {
                alert('Server Error');
            } else {
                setLoading(false);
                setQuoteObj(res.quote);
                setShowQuote(true);
            }
        });
    }

    return (
        <>
        {loading 
            ? <ReactLoading type={'spin'} color={'#8386F5'} height={300} width={200} className="center"/> 
            : <RatingForm firstName={firstName} setFirstName={setFirstName} lastName={lastName} 
            setLastName={setLastName} address={address} setAddress={setAddress} addressTwo={addressTwo} 
            setAddressTwo={setAddressTwo} city={city} setCity={setCity} state={state} setState={setState} 
            zip={zip} setZip={setZip} getQuote={getQuote}/>
        }
        </>
    )
}

export default Rating;