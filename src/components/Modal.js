import css from './Styles.module.css';

export const Modal = props => {
  const { imageUrl, imageTags, onCloseModal } = props;

  const closeModal = () => {
    onCloseModal();
  };

  return (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>
        <img src={imageUrl} alt={imageTags} />
      </div>
    </div>
  );
};
