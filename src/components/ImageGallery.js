import css from './Styles.module.css';

export const ImageGallery = ({ children }) => (
  <ul className={css.imageGallery}>{children}</ul>
);
