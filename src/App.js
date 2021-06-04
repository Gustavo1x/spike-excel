import React from "react";
import dataSet1 from "./data"
import ReactExport from "react-export-excel";


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;




function App() {
    return (
        
        <ExcelFile>
            <ExcelSheet data={dataSet1} name="Employees">
                <ExcelColumn label="Nome" value="dataSet1.requester.Nome" />
                <ExcelColumn label="Pagou" value="Pagou" />
                <ExcelColumn label="CPF" value="Cpf" />
                <ExcelColumn  value="id" />
              
                   
            </ExcelSheet>
        </ExcelFile>
       
    );
}

export default App;