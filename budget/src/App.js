import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

const initialState = [
  { id: 1, description: 'Work Income', value: '$2000.00', isExpense: false },
  { id: 2, description: 'Water Bill', value: '$10.00', isExpense: true },
  { id: 3, description: 'House Rent', value: '$200.00', isExpense: true },
  { id: 4, description: 'Power Bill', value: '$100.00', isExpense: true },
];

function App() {
  const [entries, setEntries] = useState(initialState);

  const deleteEntry = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
  };

  const addEntry = (entry) => {
    const updatedEntries = [...entries, entry];
    setEntries(updatedEntries);
  };

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value="2,550.53" size="small" />
      <DisplayBalances />

      <MainHeader type="h3" title="History" />
      <EntryLines entries={entries} onDeleteEntry={deleteEntry} />

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm onAddEntry={addEntry} />
    </Container>
  );
}

export default App;
