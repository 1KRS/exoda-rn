import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Υποδήματα',
    amount: 85.99,
    date: new Date('2023-01-12'),
  },
  {
    id: 'e2',
    description: 'Μάθημα Σουηδικών',
    amount: 20,
    date: new Date('2023-01-14'),
  },
  {
    id: 'e3',
    description: 'Ωρολόι',
    amount: 1078.97,
    date: new Date('2023-06-10'),
  },
  {
    id: 'e4',
    description: 'Ταξίδι',
    amount: 454,
    date: new Date('2023-07-14'),
  },
  {
    id: 'e5',
    description: 'Ταβέρνα',
    amount: 120,
    date: new Date('2023-07-20'),
  },
  {
    id: 'e6',
    description: 'Βιβλίο',
    amount: 17.99,
    date: new Date('2023-07-21'),
  },
  {
    id: 'e7',
    description: 'Ταβέρνα',
    amount: 120,
    date: new Date('2023-07-22'),
  },
  {
    id: 'e8',
    description: 'Βιβλίο',
    amount: 17.99,
    date: new Date('2023-07-23'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case 'UPDATE':
      const expenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const expenseToBeUpdated = state[expenseIndex];
      const updatedItem = { ...expenseToBeUpdated, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[expenseIndex] = updatedItem;
      return updateExpenses;

    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload.id);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: 'ADD', payload: expenseData });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider