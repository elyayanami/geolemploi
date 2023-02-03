import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"

const ChickenClasse = () => {
    const [ficheDePost, setFicheDePost] = useState([])
    const params = useParams()

    useEffect(() => {
        fetch("http://localhost:4242/fichedepost")
            .then(res => res.json())
            .then(res => console.log(res) || setFicheDePost(res))
    },[])

    return (
        <div>{ficheDePost.filter(fiche => fiche.prérequis === params?.type).map(fiche => <div>
            <img src={fiche.imagePost} />
            <p>{fiche.namePost}</p>
        </div>)
        }</div>
    )
}

export default ChickenClasse