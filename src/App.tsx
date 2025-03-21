import { Route, Routes } from 'react-router-dom'
import { IncomeOrExpenseProvider } from './context/IncomeOrExpenseContext'
import { Home } from './components/routes/Home'
import { SeeIncomeList } from './components/routes/SeeIncomeList'
import { SeeExpenseList } from './components/routes/SeeExpenseList'
import './App.css'

function App() {

  return (
    <>
    <IncomeOrExpenseProvider>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/income' element={<SeeIncomeList />}></Route>
        <Route path='/expense' element={<SeeExpenseList />}></Route>
      </Routes>
    </IncomeOrExpenseProvider>
    </>
  )
}

export default App