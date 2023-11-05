function Header(props)
{
    const style = {
        fontSize: '5em',
        fontWeight: 'bold',
        ...props.style
    };

    return(<h1 style={style}>{props.name}</h1>)
}

export default Header;