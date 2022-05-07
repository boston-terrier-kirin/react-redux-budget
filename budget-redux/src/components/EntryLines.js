import EntryLine from './EntryLine';

const EntryLines = ({ entries, onModalOpen }) => {
  const entresToRender = entries.map((entry) => (
    <EntryLine key={entry.id} entry={entry} onModalOpen={onModalOpen} />
  ));

  return <>{entresToRender}</>;
};

export default EntryLines;
