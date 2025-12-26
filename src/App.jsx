import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import StatsCards from './components/StatsCards';
import './index.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, income, expense
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('currency') || 'INR';
  });

  const currencies = [
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' }
  ];

  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  // useEffect to fetch data from mock API on component mount
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        setLoading(true);
        // Simulate API call with setTimeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock API data
        const mockData = [
          {
            id: 1,
            description: 'Salary',
            amount: 50000,
            category: 'Income',
            type: 'income',
            date: new Date().toISOString().split('T')[0]
          },
          {
            id: 2,
            description: 'Grocery Shopping',
            amount: 1500,
            category: 'Food',
            type: 'expense',
            date: new Date(Date.now() - 86400000).toISOString().split('T')[0]
          },
          {
            id: 3,
            description: 'Freelance Project',
            amount: 8000,
            category: 'Income',
            type: 'income',
            date: new Date(Date.now() - 172800000).toISOString().split('T')[0]
          },
          {
            id: 4,
            description: 'Electric Bill',
            amount: 1200,
            category: 'Utilities',
            type: 'expense',
            date: new Date(Date.now() - 259200000).toISOString().split('T')[0]
          }
        ];
        
        setExpenses(mockData);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  // useCallback to add new expense (optimized to prevent unnecessary re-renders)
  const addExpense = useCallback((newExpense) => {
    const expense = {
      ...newExpense,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0]
    };
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  }, []);

  // useCallback to delete expense
  const deleteExpense = useCallback((id) => {
    setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
  }, []);

  // useMemo to calculate statistics (optimized to prevent recalculation on every render)
  const stats = useMemo(() => {
    const totalIncome = expenses
      .filter(expense => expense.type === 'income')
      .reduce((sum, expense) => sum + Number(expense.amount), 0);
    
    const totalExpense = expenses
      .filter(expense => expense.type === 'expense')
      .reduce((sum, expense) => sum + Number(expense.amount), 0);
    
    const balance = totalIncome - totalExpense;
    
    return {
      totalIncome,
      totalExpense,
      balance
    };
  }, [expenses]);

  // useMemo to filter expenses based on selected filter
  const filteredExpenses = useMemo(() => {
    if (filter === 'all') return expenses;
    return expenses.filter(expense => expense.type === filter);
  }, [expenses, filter]);

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <div className="currency-selector-container">
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)}
              className="currency-select"
            >
              {currencies.map(c => (
                <option key={c.code} value={c.code}>
                  {c.symbol} {c.code}
                </option>
              ))}
            </select>
          </div>
          <h1 className="app-title">💰 Expense Tracker</h1>
          <p className="app-subtitle">Track your income and expenses with ease</p>
        </header>

        <StatsCards stats={stats} currency={currency} />
        
        <ExpenseForm onAddExpense={addExpense} />
        
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading your expenses...</p>
          </div>
        ) : (
          <ExpenseList 
            expenses={filteredExpenses}
            onDeleteExpense={deleteExpense}
            filter={filter}
            onFilterChange={setFilter}
            currency={currency}
          />
        )}
      </div>
    </div>
  );
}

export default App;
