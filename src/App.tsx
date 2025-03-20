import './App.css'
import { ExpenseForm } from './components/expense/ExpenseForm'
import { ListExpense } from './components/expense/ListExpense'
import { IncomeForm } from './components/income/IncomeForm'
import { ListIncome } from './components/income/ListIncome'
import { IncomeOrExpenseProvider } from './context/IncomeOrExpenseContext'

function App() {

  return (
    <>
      <h1>REGISTRO DE INGRESOS Y GASTOS</h1>
      <div className='container'>
        <IncomeOrExpenseProvider>

          <div className='income-container'>
            <IncomeForm />
            <ListIncome />
          </div>

          <div className='expense-container'>
            <ExpenseForm />
            <ListExpense />
          </div>
        </IncomeOrExpenseProvider>
      </div>
    </>
  )
}

export default App
