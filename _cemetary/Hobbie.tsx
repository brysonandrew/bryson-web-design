export const Hobby = () => {
  return (
    <>
      <Space4 />
      <List
        header='Games'
        color='green'
        items={GAME_ITEMS}
        selectedPath={selectedPath}
      />
      <Space4 />
      <List
        header='Libraries'
        color='blue'
        items={LIBRARIES_ITEMS}
        selectedPath={selectedPath}
      />
      <Space4 />
      <List
        header='Music'
        color='purple'
        items={MUSIC_ITEMS}
        selectedPath={selectedPath}
      />
    </>
  );
};
