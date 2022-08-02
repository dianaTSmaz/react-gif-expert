import React,{useState} from 'react';
import { AddCategory,GifGrid} from './components';

//Link de la aplicacion desplegada
//gif-searcher-dianatorr.netlify.app



export const  GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    //Funcion para añadir al arreglo las nuevas categorias, el parametro de entrada es el valor
    //de la nueva categoria que se escribio y que se obtuvo en onsubmit gracias a la funcion onNewCategory
    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories])
    };

    
    return(
        <>
          <h1>Gif Expert App</h1>
          {/**Input */}
          <AddCategory  onNewCategory={(value) => onAddCategory(value)}/>


          {/**Listado de Gifs */}
          
            {categories.map(category =>{
                return(
                    <GifGrid key={category} 
                     category={category}/>
                )
            })}
          
           
        </>
    )
}     