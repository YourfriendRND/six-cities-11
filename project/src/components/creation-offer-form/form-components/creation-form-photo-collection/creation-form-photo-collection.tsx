import { ChangeEvent, Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { getPhotoCollection } from '../../../../store/creation-form-process/selectors';
import { setPhotos } from '../../../../store/creation-form-process/creation-form-process';
import { Limits } from '../../../../const';
import '../../creation-offer-form.css';

const CreationFormPhotoCollection = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const photoCollection = useAppSelector(getPhotoCollection);

  // eslint-disable-next-line no-console
  console.log(photoCollection);

  const handlePhotoCollectionChange = (evt: ChangeEvent<HTMLInputElement>, photoIdx: number): void => {
    if (evt.target.files) {
      const updatedPhotoCollection = [...photoCollection];
      updatedPhotoCollection[photoIdx] = evt.target.files[0];

      // eslint-disable-next-line no-console
      console.log(updatedPhotoCollection);
      dispatch(setPhotos(updatedPhotoCollection));
    }
  };

  return (
    <Fragment>
      <span className="creation-offer-form__photos-title">Please, add pictures of your place (6 pictures is required. The first picture will be used as a preview): </span>
      <div className="sign-up__input-wrapper form__input-wrapper creation-offer-form__upload-photos-wrapper">
        {Array.from({ length: Limits.MaxPhotosOnPage }, (_, idx) => (
          <label key={idx} htmlFor={`photos-${idx}`} className="creation-offer-form__upload-preview">
            <div className="creation-offer-form__upload-preview-wrapper creation-offer-form__upload-preview-wrapper--induced">
              {photoCollection[idx] ? <img src={URL.createObjectURL(photoCollection[idx])} alt="preview" width="220" height="180" /> : null}
            </div>
            {
              <input
                id={`photos-${idx}`}
                className="visually-hidden sign-up__input form__input"
                name={`photos-${idx}`}
                type="file"
                onChange={(evt) => handlePhotoCollectionChange(evt, idx)}
              />
            }
          </label>
        ))}
      </div>
    </Fragment>
  );
};

export default CreationFormPhotoCollection;
