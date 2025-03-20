import { useIncomeOrExpense } from "../../context/useIncomeOrExpense"
import { DeleteExpense } from "./DeletedExpense";
import { EditExpense } from "./EditExpense";
import "../styles/ListExpenseorIncome.css"

const ListExpense = () => {
    const { expense, deleteExpense, editExpense } = useIncomeOrExpense();

    return (
        <ul>
            { expense.length > 0 ?
                expense.map((expens) => (
                    <li key={expens.id}>
                        <span>{expens.description}</span>
                        <span>{expens.amount.toLocaleString('es-ES')}</span>

                        <EditExpense 
                           onEdit={(newText, newAmonut) => editExpense(expens.id, newText, newAmonut)}
                            currentText={expens.description}
                            currentAmount={expens.amount}
                        />
                        <DeleteExpense onDelete={() => deleteExpense(expens.id)}/>
                    </li>
                )) : 
                <p>No hay ingresos registrados.</p>
            }
        </ul>
    )
}

export { ListExpense };