import { Button, Modal } from 'semantic-ui-react';
import EditEntryForm from './EditEntryForm';

const ModalEdit = ({ isOpen, onClose, entry, onEditEntry }) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EditEntryForm entry={entry} onEditEntry={onEditEntry} />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
