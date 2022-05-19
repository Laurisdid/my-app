function Kumpis({spalva, bg, size}) {

    return (
        <>
        <h2 style={
            {
                color: spalva,
                backgroundColor: bg,
                padding : size
            }
        }>Kumpis</h2>

        <h1 style={
            {
                color: bg,
                backgroundColor:spalva,
                padding : size
            }
        }>Kumpis2</h1>

        <h2 style={
            {
                color: spalva,
                backgroundColor:bg ,
                padding : size
            }
        }>Kumpis3</h2>
        </>
    );
}

export default Kumpis;