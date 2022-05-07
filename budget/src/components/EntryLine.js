import { Grid, Icon, Segment } from 'semantic-ui-react';

const EntryLine = ({
  id,
  description,
  value,
  isExpense = false,
  onDeleteEntry,
}) => {
  return (
    <Segment color={isExpense ? 'red' : 'green'}>
      <Grid columns="3" textAlign="right">
        <Grid.Row>
          <Grid.Column width="10" textAlign="left">
            {description}
          </Grid.Column>
          <Grid.Column width="3">{value}</Grid.Column>
          <Grid.Column width="3">
            <Icon name="edit" />
            <Icon name="trash" onClick={() => onDeleteEntry(id)} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default EntryLine;
