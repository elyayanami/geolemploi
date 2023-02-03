import Header from "../components/Header";



const Contact = () => {
    return (
        <>
        <div className="backgroundContact">
            <Header />
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
                    <textarea className="inputDescription" placeholder="Descritpion"></textarea>
                </div>
                <div className="encardPigeon">
                    <button className="titrePigeon">SEND PIGEON</button>
                </div>
            </div>
        </div>
        </>
    )
}


export default Contact;