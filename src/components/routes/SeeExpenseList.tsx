import { useNavigate } from "react-router-dom"
import { Expense } from "./Expense"


const SeeExpenseList = () => {
    
    const navigate = useNavigate();
    const goToExpense = () => {
        navigate('/');
    };

    return (
        <>
            <button className="button-goToHome"
                onClick={goToExpense}>VOLVER A PAGINA PRINCIPAL</button>
            <Expense />
        </>
    );
};

export { SeeExpenseList };