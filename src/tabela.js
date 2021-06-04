import React from "react";
import dataSet1 from './data';

const tabela = ({dataSet1}) =>{
  return(
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Pagou</th>
          <th>CPF</th>
          
        </tr>
      </thead>
      <tbody>
        {dataSet1.map(dataSet1 => (
          <tr>
            <td>{dataSet1.requester.Nome}</td>
            <td>{dataSet1.requester.Pagou}</td>
            <td>{dataSet1.requester.Cpf}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
    )
}
export default tabela;