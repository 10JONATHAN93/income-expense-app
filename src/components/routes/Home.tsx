import { IncomeForm } from '../income/IncomeForm'
import { ExpenseForm } from '../expense/ExpenseForm'
import { TotalFinancialStatus } from '../financial-status/TotalFinancialStatus';


const Home = () => {
    return (
        <>
            <h1>REGISTRO DE INGRESOS Y GASTOS</h1>
            <div className='container'>
                
                <div className='financialStatus-container'>
                    <TotalFinancialStatus />
                </div>

                <div className='income-expense-wrapper'>
                    <div className='income-container'>
                        <IncomeForm />
                    </div>

                    <div className='expense-container'>
                        <ExpenseForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export { Home };