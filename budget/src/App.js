import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EditEntryForm from './components/EditEntryForm';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';

const initialState = [
  { id: 1, description: 'Work Income', value: 2000.0, isExpense: false },
  { id: 2, description: 'Water Bill', value: 10.0, isExpense: true },
  { id: 3, description: 'House Rent', value: 200.0, isExpense: true },
  { id: 4, description: 'Power Bill', value: 100.0, isExpense: true },
];

function App() {
  const [entry, setEntry] = useState({});
  const [entries, setEntries] = useState(initialState);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const { calcIncome, calcExpense } = entries.reduce(
      (acc, entry) => {
        if (entry.isExpense) {
          return { ...acc, calcExpense: acc.calcExpense + Number(entry.value) };
        }
        return { ...acc, calcIncome: acc.calcIncome + Number(entry.value) };
      },
      {
        calcIncome: 0,
        calcExpense: 0,
      }
    );

    setIncome(calcIncome);
    setExpense(calcExpense);
    setBalance(calcIncome - calcExpense);
  }, [entries]);

  const deleteEntry = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
  };

  const addEntry = (entry) => {
    const updatedEntries = [...entries, { ...entry, id: entries.length + 1 }];
    setEntries(updatedEntries);
  };

  const editEntry = (id) => {
    const entryToUpdate = entries.find((entry) => entry.id === id);
    setEntry(entryToUpdate);
    setIsOpen(true);
  };

  const editEntryAndCloseModal = (entryToUpdate) => {
    const updatedEntries = entries.map((entry) =>
      entry.id === entryToUpdate.id ? { ...entry, ...entryToUpdate } : entry
    );
    setEntries(updatedEntries);
    setIsOpen(false);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={balance} size="small" />
      <DisplayBalances income={income} expense={expense} />

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm onAddEntry={addEntry} />

      <MainHeader type="h3" title="History" />
      <EntryLines
        entries={entries}
        onEditEntry={editEntry}
        onDeleteEntry={deleteEntry}
      />

      <ModalEdit isOpen={isOpen} onClose={onClose}>
        <EditEntryForm entry={entry} onEditEntry={editEntryAndCloseModal} />
      </ModalEdit>
    </Container>
  );
}

export default App;
