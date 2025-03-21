import { useNavigate } from "react-router-dom";
import { ButtonAddExpense } from "./ButtonAddExpense";
import { TotalExpense } from "./TotalExpense";

const ExpenseForm = () => {
    const navigate = useNavigate();
    const goToExpenseList = () => {
        navigate('/expense');
    }
    return (
        <div className="expenseForm-container">
            <h2>Registro de gastos</h2>
            <button  className="buttonExpenseList"
                onClick={goToExpenseList}>VER LISTA DE INGRESOS</button>
            <TotalExpense />
            <ButtonAddExpense />


        </div>
    )
}


export { ExpenseForm };