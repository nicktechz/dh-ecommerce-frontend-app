import { useDispatch, useSelector } from 'react-redux';
import SingleInputGroup from '../SingleInputGroup/SingleInputGroup';
import { IRootState } from '../../../../../../../../config/state/stores/store';
import Input from '../Input/Input';
import DoubleInputGroup from '../DoubleInputGroup/DoubleInputGroup';
import {
  IBasicInformationKeys,
  updateCheckoutBasicInfo,
} from '../../../../../../../../config/state/reducers/checkoutReducer';
import customEmailValidation from './services/emailValidation';

function BasicInfo() {
  const dispatch = useDispatch();
  const checkoutBasicInfo = useSelector(
    (state: IRootState) => state.checkoutReducer.basicInformation
  );
  function submitInformation(id: string, value: string) {
    dispatch(
      updateCheckoutBasicInfo({
        key: id as IBasicInformationKeys,
        value: value,
      })
    );
  }
  return (
    <>
      <DoubleInputGroup>
        <Input
          data={{
            id: 'firstName',
            label: 'Primer nombre',
            type: 'text',
            value: checkoutBasicInfo.firstName,
            updateValueFn: submitInformation,
            isRequired: true,
          }}
          options={{
            disableWhiteSpaces: true,
            disableSpecialCharacters: true,
            disableNumbers: true,
            autocomplete: 'name',
            minLength: 3,
            maxLength: 20,
          }}
        />
        <Input
          data={{
            id: 'lastName',
            label: 'Primer apellido',
            value: checkoutBasicInfo.lastName,
            type: 'text',
            updateValueFn: submitInformation,
            isRequired: true,
          }}
          options={{
            disableWhiteSpaces: true,
            disableSpecialCharacters: true,
            disableNumbers: true,
            autocomplete: 'family-name',
          }}
        />
      </DoubleInputGroup>
      <SingleInputGroup>
        <Input
          data={{
            id: 'email',
            label: 'Correo electrónico',
            value: checkoutBasicInfo.email,
            type: 'text',
            updateValueFn: submitInformation,
            isRequired: true,
            customValidation: customEmailValidation,
          }}
          options={{
            disableWhiteSpaces: true,
            disableLetters: false,
            disableNumbers: false,
            disableSpecialCharacters: false,
            autocomplete: 'home email',
          }}
        />
      </SingleInputGroup>
      <SingleInputGroup>
        <Input
          data={{
            id: 'mobilePhone',
            label: 'Número de teléfono',
            value: checkoutBasicInfo.mobilePhone,
            type: 'tel',
            updateValueFn: submitInformation,
            isRequired: true,
          }}
          options={{
            disableWhiteSpaces: true,
            disableLetters: true,
            maxLength: 10,
            minLength: 10,
          }}
        />
      </SingleInputGroup>
    </>
  );
}

export default BasicInfo;
