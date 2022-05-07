import { Button } from 'semantic-ui-react';

const ButtonSaveOrCancel = ({ onOk, onCancel }) => {
  return (
    <Button.Group style={{ marginTop: 5 }}>
      <Button onClick={onCancel}>Cancel</Button>
      <Button.Or />
      <Button primary onClick={onOk}>
        OK
      </Button>
    </Button.Group>
  );
};

export default ButtonSaveOrCancel;
