function Hello({spalva,bg}) {

    return (
        <h2 style={
            {
                color: spalva,
                backgroundColor: bg,
                padding: '7px'
            }
        }>LABAS, ZUIKI!</h2>
    );
}


export default Hello;