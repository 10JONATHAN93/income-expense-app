import React from "react";
import { ListIncome } from "../income/ListIncome";
import { TotalIncome } from "../income/TotalIncome";

const Income: React.FC = () => {

    return (
        <div className="income-container">
            <h2>LISTADO DE INGRESOS</h2>
            <TotalIncome />
            <ListIncome />
        </div>
    )
}

export { Income };