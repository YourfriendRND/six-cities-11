import { Fragment } from 'react';
import Map from '../../../map/map';
import { useAppSelector } from '../../../../hooks/store';
import { getCoordinatesAsText, getCoordinates } from '../../../../store/creation-form-process/selectors';
import '../../creation-offer-form.css';

const CreationFormCoordinates = (): JSX.Element => {
  const currentTextCoordinates = useAppSelector(getCoordinatesAsText);
  const currentCoordinates = useAppSelector(getCoordinates);

  return (
    <Fragment>
      <div className="creation-offer-form__input-wrapper form__input-wrapper">
        <input
          id='coordinates'
          className="creation-offer-form__input form__input"
          type="text"
          name="coordinates"
          defaultValue={currentTextCoordinates}
        />
      </div>
      <Map
        city={currentCoordinates}
        points={[]}
        selectedPlaceId={''}
        isMainPage={false}
        isNewPlace
      />
    </Fragment>
  );
};

export default CreationFormCoordinates;
