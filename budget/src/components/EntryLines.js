import EntryLine from './EntryLine';

const EntryLines = ({ entries, onDeleteEntry }) => {
  const entresToRender = entries.map((entry) => (
    // {...entry} で、entryを展開して、EntryLineに渡せる。
    <EntryLine key={entry.id} {...entry} onDeleteEntry={onDeleteEntry} />
  ));

  return <>{entresToRender}</>;
};

export default EntryLines;
