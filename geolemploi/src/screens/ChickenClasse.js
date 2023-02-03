import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "../components/Header"
import topClasse from "../assets/topClasse.png"

const ChickenClasse = () => {
    const [ficheDePost, setFicheDePost] = useState([])
    const params = useParams()

    useEffect(() => {
        fetch("http://localhost:4242/fichedepost")
            .then(res => res.json())
            .then(res => console.log(res) || setFicheDePost(res))
    },[])

    return (
        
        <div className="backgroundClasse">
            <Header />

            <div className="bigGlobal">
                    <div className="globalClasse">
                        <h1 className="titreClasse">{params?.type}</h1>
                        <img src={topClasse} />
                    </div>
                    {ficheDePost.filter(fiche => fiche.prérequis === params?.type).map(fiche => <div>
                        <div className="imageGlobal">
                            <img src={fiche.imagePost} alt={fiche.namePost} className="imagePerso" />

                            <div className="parchment">
                                <p>{fiche.namePost}</p>   
                             <div className="descriptionFichePost">{fiche.descriptionPost} </div>
                             <div className="salaireFichePost">{fiche.salairePost} </div>
                            </div>
                        </div>
                    </div>)}
            </div>
         </div>
         
    )
}


export default ChickenClasse