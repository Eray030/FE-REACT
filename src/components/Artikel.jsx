function Artikel (props) {
    return (
        <div 
        className="artikel">
        <h1>{props.titel}</h1>
        <p>{props.Artikel}</p>
        </div>
    )

}

function Artikelliste () {
    return (
        <>
        <Artikel titel="Artikel 1" Artikel="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque." />
        <Artikel titel="Artikel 2" Artikel="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque." />
        <Artikel titel="Artikel 3" Artikel="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque." />
        </>
    )
}
export default Artikelliste;