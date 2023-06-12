import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./";


//DC comics o Marvel
export const HeroList = ({ publisher }) => {

    const heroes = useMemo(()=>getHeroesByPublisher(publisher), [publisher]);
//Lo que va a mostrar con la funcion de condicion, luego incrustarlo donde quiera
    return (
        <div className="d-flex flex-wrap animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <li key={hero.id}>
                     <HeroCard key={hero.id}
                     {...hero}
                     />
                    </li>
                ))
            }
        </div>
    )
}
