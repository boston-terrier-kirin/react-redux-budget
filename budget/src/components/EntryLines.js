import EntryLine from './EntryLine';

const EntryLines = ({ entries, onEditEntry, onDeleteEntry }) => {
  const entresToRender = entries.map((entry) => (
    // {...entry} で、entryを展開して、EntryLineに渡せる。
    <EntryLine
      key={entry.id}
      entry={entry}
      onEditEntry={onEditEntry}
      onDeleteEntry={onDeleteEntry}
    />
  ));

  return <>{entresToRender}</>;
};

export default EntryLines;
