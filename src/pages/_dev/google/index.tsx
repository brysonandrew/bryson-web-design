const ITEMS = [{ name: 'd', email: 'f' }];
export const Google = () => {
  return (
    <div>
      <ul>
        {ITEMS.map(({ name, email }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
