import { Container } from 'semantic-ui-react';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value="2,550.53" size="small" />
      <DisplayBalances />

      <MainHeader type="h3" title="History" />
      <EntryLine description="Income" value="$10.00" />
      <EntryLine description="Expence" value="$10.00" isExpense />

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
