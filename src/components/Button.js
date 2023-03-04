import css from './Styles.module.css';

export const Button = ({ onLoadMore }) => (
  <>
    <button className={css.button} onClick={onLoadMore}>
      Load more
    </button>
  </>
);
