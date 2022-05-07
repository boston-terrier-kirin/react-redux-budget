import { Container, Grid, Icon, Segment } from 'semantic-ui-react';
import DisplayBalance from './components/DisplayBalance';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value="2,550.53" size="small" />

      <Segment textAlign="center">
        <Grid columns="2" divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title="Income" value="624.00" color="green" />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title="Expense" value="134.00" color="red" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader type="h3" title="History" />
      <Segment color="red">
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width="10" textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width="3">$10.00</Grid.Column>
            <Grid.Column width="3">
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="green">
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width="10" textAlign="left">
              Somethinsg else
            </Grid.Column>
            <Grid.Column width="3">$10.00</Grid.Column>
            <Grid.Column width="3">
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width="10" textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width="3">$10.00</Grid.Column>
            <Grid.Column width="3">
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
