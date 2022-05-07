import { Grid, Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = () => {
  return (
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
  );
};

export default DisplayBalances;
