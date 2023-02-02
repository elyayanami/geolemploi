



const Contact = () => {
    return (
        <>
        <div className="backgroundContact">
            <div className="encartGlobal" >
                <div className="encardContact">
                    <h2 className="titreContact">CONTACT</h2>
                </div>
            </div>
            <div className="inputDiv">
                <div>
                    <input className="inputContact" placeholder="First Name"></input>
                </div>
                <div>
                    <input className="inputContact" placeholder="Last Name"></input>
                </div>
                <div>
                    <input className="inputContact" placeholder="Adress"></input>
                </div>
            </div>
            <div className="encartDescription">
                <div>
                    <input className="inputDescription" placeholder="Descritpion"></input>
                </div>
                <div className="encardPigeon">
                    <h2 className="titrePigeon">SEND PIGEON</h2>
                </div>
            </div>
        </div>
        </>
    )
}


export default Contact;