import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import { budgets } from './apis/budgets';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import NewEntryForm from './components/NewEntryForm';
import EntryLines from './components/EntryLines';
import EditEntryForm from './components/EditEntryForm';
import ModalEdit from './components/ModalEdit';

function App() {
  const [entry, setEntry] = useState({});
  const [entries, setEntries] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchBudgets = async () => {
      const res = await budgets.get('/budgets');
      setEntries(res.data);
    };
    fetchBudgets();
  }, [entry]);

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

  const addEntry = async (entry) => {
    const entryToUpdate = { ...entry, id: uuidv4() };
    await budgets.post('/budgets', entryToUpdate);

    setEntry(entryToUpdate);
  };

  const editEntry = (id) => {
    const entryToUpdate = entries.find((entry) => entry.id === id);
    setEntry(entryToUpdate);
    setIsOpen(true);
  };

  const editEntryAndCloseModal = async (entryToUpdate) => {
    await budgets.patch(`/budgets/${entryToUpdate.id}`, entryToUpdate);

    setEntry(entryToUpdate);
    setIsOpen(false);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const deleteEntry = async (id) => {
    await budgets.delete(`/budgets/${id}`);
    setEntry({});
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
