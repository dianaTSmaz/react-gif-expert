import { useState } from "react";

export const AddCategory = ({onNewCategory}) =>{
    const [inputValue, setInputValue] = useState('');
      
   //Para poder escribir en el label(input) realizado se necesita hacer una funcion
   //de cambio que tome el valor de lo que se esta escribiendo 
    const onInputChange=(event) =>{
        //console.log(event.target.value)
        setInputValue(event.target.value)
    }

    const onSubmit =(event) =>{
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        //setCategories(categories => [inputValue,...categories])
        setInputValue('')
        onNewCategory(inputValue.trim());
    }
    
    return(
      //Gracias al form y al submit se registran los cambios al darle a enter  
       <form onSubmit={onSubmit}>
        <input
            type='text'
            placeholder="Buscar gifs"
            value={inputValue}

            //Propiedad para poder cambiar el valor de la entrada y asi poder escribir
            onChange={onInputChange}/>
        </form>     
      )
  }