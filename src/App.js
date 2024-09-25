import './App.css';
import AddTranscations from './components/AddTranscations';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import GlobalProvider from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTranscations/>
      </div>
    </GlobalProvider>
  );
}

export default App;
