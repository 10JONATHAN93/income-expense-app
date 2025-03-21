import { useNavigate } from "react-router-dom";
import { Income } from "./Income";

const SeeIncomeList = () => {
    const navigate = useNavigate();
    const goToIncome = () => {
        navigate('/');
    }


    return (
        <>
            <button className="button-goToHome"
                onClick={goToIncome}>VOLVER A PAGINA PRINCIPAL</button>
            <Income />
        </>
    )
}

export { SeeIncomeList };