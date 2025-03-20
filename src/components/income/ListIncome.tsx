import { useIncomeOrExpense } from "../../context/useIncomeOrExpense"
import { EditIncome } from "./EditIncome";
import "../styles/ListExpenseorIncome.css"
import { DeletedIncome } from "./DeletedIncome";
const ListIncome = () => {
    const { income, editIncome, deleteIncome } = useIncomeOrExpense();

    return (
        <ul>
            { income.length > 0 ?
                income.map((incom) => (
                    <li key={incom.id}>
                        <span>{incom.description}</span>
                        <span>{incom.amount.toLocaleString('es-ES')}</span>

                        <EditIncome 
                            onEdit={(newText, newAmount) => editIncome(incom.id, newText, newAmount)}
                            currentText={incom.description}
                            currentAmount={incom.amount}
                        />
                        <DeletedIncome onDelete={() => deleteIncome(incom.id)}/>
                    </li>
                )) : 
                <p>No hay ingresos registrados.</p>
            }
        </ul>
    )
}

export { ListIncome };