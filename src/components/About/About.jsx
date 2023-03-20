// import imgAbout from './imgAbout'
import styleDesc from './About.module.css'

export default function About(props){
 return(
    <>
    <div className={styleDesc.description}>
         {/* <img src={imgAbout} alt='Picture Logo About'/> */}
    
    <h1>Rick and Morty es una divertida aplicación creada por Luis Leonardo Villarraga</h1>
    <h2>
        Pensada solo para ti!! Diviertete escudriñando toda la info de la exitosa serie Rick and Morty®  En esta divertida App vas a poder consultar la información de TODOS los personajes de la serie de la manera más ágil y entretendida y todo al alcance de un click!

    </h2>
    </div>
    </>
 )
}