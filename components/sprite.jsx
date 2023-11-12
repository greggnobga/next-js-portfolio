const Sprite = ({ id }) => {
  return (
    <svg className='w-4 h-4 -mt-1 inline fill-current'>
      <use href={`/images/sprite.svg#${id}`} />
    </svg>
  );
};

export default Sprite;
