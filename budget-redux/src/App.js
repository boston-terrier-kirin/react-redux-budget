import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import NewEntryForm from './components/NewEntryForm';
import EntryLines from './components/EntryLines';
import EditEntryForm from './components/EditEntryForm';
import ModalEdit from './components/ModalEdit';
import { useDispatch, useSelector } from 'react-redux';
import { setEntries } from './store/budget/budget.action';
import {
  selectBalance,
  selectEntries,
  selectExpense,
  selectIncome,
} from './store/budget/budget.selector';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [entryToUpdate, setEntryToUpdate] = useState({});

  const dispatch = useDispatch();
  const entries = useSelector(selectEntries);
  const income = useSelector(selectIncome);
  const expense = useSelector(selectExpense);
  const balance = useSelector(selectBalance);

  useEffect(() => {
    dispatch(setEntries());
  }, []);

  const openModalToEdit = (id) => {
    const entry = entries.find((entry) => entry.id === id);
    setEntryToUpdate(entry);
    setIsOpen(true);
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
      <NewEntryForm />

      <MainHeader type="h3" title="History" />
      {entries && (
        <EntryLines entries={entries} onModalOpen={openModalToEdit} />
      )}

      <ModalEdit isOpen={isOpen} onClose={onClose}>
        <EditEntryForm entry={entryToUpdate} />
      </ModalEdit>
    </Container>
  );
}

export default App;
