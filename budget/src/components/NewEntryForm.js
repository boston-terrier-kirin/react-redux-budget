import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = () => {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width="12"
          label="Description"
          placeholder="New Shinny Thing"
        ></Form.Input>
        <Form.Input
          icon="dollar"
          iconPosition="left"
          width="4"
          label="Value"
          placeholder="100.00"
        ></Form.Input>
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
};

export default NewEntryForm;
