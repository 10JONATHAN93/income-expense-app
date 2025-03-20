import { useContext } from "react"
import { IncomeOrExpenseContext } from "./IncomeOrExpenseContext"

export const useIncomeOrExpense = () => {
    const context = useContext(IncomeOrExpenseContext);
    if(!context) {
        throw new Error("useIncomeOrExpense debe usarse dentro de un IncomeOrExpenseProvider");
    }

    return context;
}