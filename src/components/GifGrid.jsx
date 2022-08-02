//import { getGifs } from "../helpers/getGifs";
//import { useEffect,useState } from "react";
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid= ({category}) => {

    //const [counter,setCounter] = useState(10);
    const {images,isLoading} = useFetchGifs(category);

    

    return(
        <>
           <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando!...</h2>)
            }
           <div className="card-grid">
              {
                images.map((image) => (
                   
                    <GifItem 
                       key={image.id}
                       {...image}
                     />

                ))
                
            
             }
           
            </div>
           {/*<button onClick={() => setCounter(counter + 1)}>+1</button>*/}
        </>

    );
    
}