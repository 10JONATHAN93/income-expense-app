import { useIncomeOrExpense } from "../../context/useIncomeOrExpense";
import "../styles/TotalIncomeOrExpense.css"


const TotalIncome = () => {
const { income } = useIncomeOrExpense();
    return (
        <div className="total-container">
        Total ingresos: 
        <span className="span-total">
            { ` $${income.reduce((sum, item) => sum + item.amount, 0).toLocaleString('es-ES')}` }
        </span>
        </div>
    )
}

export { TotalIncome };