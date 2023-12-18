import { useState} from 'react';

export const ListRender = () => {

 const [list] = useState(['João', 'Felipe', 'Thiago', 'Diego']);

   return (
     <div>
      <ul>
       {list.map((item) => (<li>{item}</li>))}
      </ul>
     </div>
   )

}