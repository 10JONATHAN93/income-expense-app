import React from "react";
import { ListExpense } from "../expense/ListExpense";
import { TotalExpense } from "../expense/TotalExpense";

const Expense: React.FC = () => {

    return (
        <div>
            <h2>LISTADO DE INGRESOS</h2>
            <TotalExpense />
            <ListExpense />
        </div>
    )
}

export { Expense };