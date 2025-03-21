import { useNavigate } from "react-router-dom";
import { ButtonAddIncome } from "./ButtonAddIncome";
import { TotalIncome } from "./TotalIncome";
import "../styles/ButtonAddIncomeOrExpense.css"

const IncomeForm = () => {
    const navigate = useNavigate();
    const goToIncomeList = () => {
        navigate('/income');
    }
    return (
        <div className="incomeForm-container">
            <h2>Registro de ingresos</h2>
            <button className="buttonIncomeList"
                onClick={goToIncomeList}>VER LISTA DE INGRESOS</button>
           
            <TotalIncome />
            <ButtonAddIncome />

        </div>
    );
};

export { IncomeForm };
