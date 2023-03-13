import imgAbout from './imgAbout'
import styleDesc from './About.module.css'

export default function About(){
 return(
    <>
    <picture>
         <img src={imgAbout} alt='Picture Logo About'/>
    </picture>
    <h1>Rick and Morty es una divertida aplicación creada por Luis Leonardo Villarraga</h1>
    <div className={styleDesc.description}>
        Si eres un verdadero seguidor de la exitosa serie Rick and Morty®
        has llegado al lugar indicado! En esta divertida App vas a poder consultar la información de TODOS los personajes de la serie de la manera más ágil y enetretendida y todo al alcance de un clic!
    </div>
    
    </>
 )
}