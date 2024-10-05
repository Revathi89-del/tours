import Tour from './Tour';

import React from 'react'

const Tours = ({tours,removeTour}) => {
return(
    <section>
        <div className='title'>
            <h2>Our Tours</h2>
            <div className='title-underline'></div>
        </div>
  
    <div className='tours'>
               { tours.map((tour)=>{
        const{id,image,info,name,price} = tour
        return (
            
               <Tour id={id} image={image} info={info} name={name} price={price} removeTour={removeTour}/>
           
          )
    })}
    </div>
    </section>
)
};

export default Tours;