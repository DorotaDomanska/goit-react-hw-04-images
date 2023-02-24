import css from './Styles.module.css';

export const ImageGallery = props => {
  const { children } = props;

  return <ul className={css.imageGallery}>{children}</ul>;
};
