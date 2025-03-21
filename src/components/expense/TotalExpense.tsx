import { useIncomeOrExpense } from "../../context/useIncomeOrExpense";
import "../styles/TotalIncomeOrExpense.css"


const TotalExpense = () => {
const { expense } = useIncomeOrExpense();
    return (
        <div className="total-container">
            Total gastos:  
            <span className="span-total">
                { ` $${expense.reduce((sum, item) => sum + item.amount, 0).toLocaleString('es-ES')}` }
            </span>
        </div>
    )
}

export { TotalExpense };