import { useState } from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';
import ModalEdit from './ModalEdit';

const EntryLine = ({ entry, onEditEntry, onDeleteEntry }) => {
  const { id, description, value, isExpense = false } = entry;
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onEditEntryAndCloseModal = (entry) => {
    setIsOpen(false);
    onEditEntry(entry);
  };

  return (
    <>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width="10" textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width="3">{value}</Grid.Column>
            <Grid.Column width="3">
              <Icon name="edit" onClick={() => setIsOpen(true)} />
              <Icon name="trash" onClick={() => onDeleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <ModalEdit
        isOpen={isOpen}
        onClose={onClose}
        entry={entry}
        onEditEntry={onEditEntryAndCloseModal}
      />
    </>
  );
};

export default EntryLine;
