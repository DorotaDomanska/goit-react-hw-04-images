import css from './Styles.module.css';

export const Button = props => {
  const { onLoadMore } = props;

  return (
    <>
      <button className={css.button} onClick={onLoadMore}>
        Load more
      </button>
    </>
  );
};
