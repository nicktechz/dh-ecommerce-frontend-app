import { useDispatch, useSelector } from 'react-redux';
import DoubleInputGroup from '../DoubleInputGroup/DoubleInputGroup';
import SingleInputGroup from '../SingleInputGroup/SingleInputGroup';
import { IRootState } from '../../../../../../../../config/state/stores/store';
import Input from '../Input/Input';
import {
  IDeliveryInformationKeys,
  updateDeliveryInformation,
} from '../../../../../../../../config/state/reducers/checkoutReducer';

function DeliveryInfo() {
  const dispatch = useDispatch();
  const checkoutDeliveryInfo = useSelector(
    (state: IRootState) => state.checkoutReducer.deliveryInformation
  );
  function submitInformation(id: string, value: string) {
    dispatch(
      updateDeliveryInformation({
        key: id as IDeliveryInformationKeys,
        value: value,
      })
    );
  }
  return (
    <>
      <SingleInputGroup>
        <Input
          data={{
            id: 'mainAddress',
            label: 'Dirección principal',
            value: checkoutDeliveryInfo.mainAddress,
            type: 'text',
            isRequired: true,
            updateValueFn: submitInformation,
          }}
          options={{
            disableWhiteSpaces: false,
          }}
        />
      </SingleInputGroup>
      <SingleInputGroup>
        <Input
          data={{
            id: 'complementAddress',
            label: 'Complemento de la dirección',
            value: checkoutDeliveryInfo.complementAddress,
            type: 'text',
            isRequired: true,
            updateValueFn: submitInformation,
          }}
          options={{
            disableWhiteSpaces: false,
          }}
        />
      </SingleInputGroup>

      <DoubleInputGroup>
        <Input
          data={{
            id: 'department',
            label: 'Departamento',
            value: checkoutDeliveryInfo.department,
            type: 'text',
            isRequired: true,
            updateValueFn: submitInformation,
          }}
          options={{
            disableLetters: false,
            disableNumbers: true,
            disableSpecialCharacters: true,
            disableWhiteSpaces: true,
          }}
        />
        <Input
          data={{
            id: 'city',
            label: 'Ciudad',
            value: checkoutDeliveryInfo.city,
            type: 'text',
            isRequired: true,
            updateValueFn: submitInformation,
          }}
          options={{
            disableLetters: false,
            disableNumbers: true,
            disableSpecialCharacters: false,
            disableWhiteSpaces: false,
          }}
        />
      </DoubleInputGroup>
      <Input
        data={{
          id: 'postalCode',
          label: 'Código postal',
          value: checkoutDeliveryInfo.postalCode,
          type: 'text',
          isRequired: true,
          updateValueFn: submitInformation,
        }}
        options={{
          disableLetters: true,
          disableNumbers: false,
          disableSpecialCharacters: true,
          disableWhiteSpaces: true,
          maxLength: 6,
          minLength: 6,
        }}
      />
    </>
  );
}

export default DeliveryInfo;
