import { useIncomeOrExpense } from "../../context/useIncomeOrExpense";

const TotalFinancialStatus = () => {
    const { income, expense } = useIncomeOrExpense();

    const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
    const totalExpense = expense.reduce((sum, item) => sum + item.amount, 0);
    const netIncome = totalIncome - totalExpense;

    return (
        <div>
            <h2 className="financialStatus-title">INGRESOS NETOS</h2>
            <p className="financialStatus-total">${netIncome.toLocaleString('es-ES')}</p>
        </div>
    )
}


export { TotalFinancialStatus };