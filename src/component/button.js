import Button from 'react-bootstrap/Button';

function CounterButton(props)
{
    const buttonStyle = {
        margin: "10px",
        padding: "20px",
    };
    return( <Button variant={props.color} onClick={props.fun} disabled={props.condition} style={buttonStyle}>{props.name}</Button>)
}

export default CounterButton;