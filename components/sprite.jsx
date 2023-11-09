const Sprite = ({ id, width, height }) => {
  return (
    <svg className={`${width ? width : 'w-5'} ${height ? height : 'h-5'} -mt-1 inline fill-current`}>
      <use href={`/icons/sprites.svg#${id}`} />
    </svg>
  );
};

export default Sprite;
