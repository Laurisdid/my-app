function SpalvuKeitimas ({spalva1,spalva2}){
    return(
        <>
        <h3>katinas</h3>
        <span style={{color:spalva1!=="purple" ? 'red':'purple'}}>Naminis padaras nr.1  </span>
        <span style={{color:spalva2!=="black" ? 'red':'purple'}}>Laukinis padaras nr.1  </span>
        </>
    )

}
export default SpalvuKeitimas;