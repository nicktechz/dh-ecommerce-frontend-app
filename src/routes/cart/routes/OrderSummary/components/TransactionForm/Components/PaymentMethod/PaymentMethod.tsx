import Cards, { Focused } from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from './PaymentMethod.module.css';
import Input from '../Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../../../../../config/state/stores/store';
import {
  IPaymentMethodKeys,
  updatePaymentInformation,
} from '../../../../../../../../config/state/reducers/checkoutReducer';
import SingleInputGroup from '../SingleInputGroup/SingleInputGroup';
import { useState } from 'react';
import DoubleInputGroup from '../DoubleInputGroup/DoubleInputGroup';
function PaymentMethod() {
  const [focus, setFocus] = useState<Focused>();
  const dispatch = useDispatch();
  const paymentInformation = useSelector(
    (state: IRootState) => state.checkoutReducer.paymentMethod
  );
  function submitInformation(id: string, value: string) {
    dispatch(
      updatePaymentInformation({ key: id as IPaymentMethodKeys, value: value })
    );
    if ((id as IPaymentMethodKeys) === 'number') {
      setFocus('number');
    } else if ((id as IPaymentMethodKeys) === 'cardHolderName') {
      setFocus('name');
    } else if (
      (id as IPaymentMethodKeys) === 'expirationMonth' ||
      (id as IPaymentMethodKeys) === 'expirationYear'
    ) {
      setFocus('expiry');
    } else if ((id as IPaymentMethodKeys) === 'securityCode') {
      setFocus('cvc');
    }
  }
  return (
    <div className={styles.payment_method_wrapper}>
      <div className={styles.payment_method_card}>
        <Cards
          cvc={paymentInformation.securityCode}
          expiry={`${paymentInformation.expirationMonth}/${paymentInformation.expirationYear}`}
          name={paymentInformation.cardHolderName}
          number={paymentInformation.number}
          focused={focus}
        />
      </div>
      <SingleInputGroup>
        <Input
          data={{
            id: 'cardHolderName',
            label: 'Nombre en la tarjeta',
            value: paymentInformation.cardHolderName,
            type: 'text',
            isRequired: true,
            updateValueFn: submitInformation,
          }}
          options={{
            disableLetters: false,
            disableNumbers: true,
            disableSpecialCharacters: true,
            disableWhiteSpaces: false,
            capitalizeAllLetters: true,
          }}
        />
      </SingleInputGroup>
      <SingleInputGroup>
        <Input
          data={{
            id: 'number',
            label: 'Numero de la tarjeta',
            value: paymentInformation.number,
            type: 'text',
            isRequired: true,
            updateValueFn: submitInformation,
          }}
          options={{
            disableLetters: true,
            disableWhiteSpaces: true,
            disableNumbers: false,
            disableSpecialCharacters: true,
            minLength: 19,
            maxLength: 19,
            formatting: 'CARD NUMBER',
          }}
        />
      </SingleInputGroup>
      <DoubleInputGroup>
        <Input
          data={{
            id: 'expirationMonth',
            label: 'Mes de expiración',
            value: paymentInformation.expirationMonth,
            type: 'number',
            isRequired: true,
            updateValueFn: submitInformation,
          }}
          options={{
            disableLetters: true,
            disableWhiteSpaces: true,
            disableSpecialCharacters: true,
            maxLength: 2,
          }}
        />
        <Input
          data={{
            id: 'expirationYear',
            label: 'Año de expiración',
            value: paymentInformation.expirationYear,
            type: 'number',
            isRequired: true,
            updateValueFn: submitInformation,
          }}
          options={{
            disableLetters: true,
            disableWhiteSpaces: true,
            disableSpecialCharacters: true,
            maxLength: 2,
          }}
        />
      </DoubleInputGroup>
      <SingleInputGroup>
        <Input
          data={{
            id: 'securityCode',
            label: 'CVC',
            value: paymentInformation.securityCode,
            isRequired: true,
            type: 'text',
            updateValueFn: submitInformation,
          }}
          options={{
            disableWhiteSpaces: true,
            disableNumbers: false,
            disableLetters: true,
            disableSpecialCharacters: true,
            minLength: 3,
            maxLength: 3,
          }}
        />
      </SingleInputGroup>
    </div>
  );
}

export default PaymentMethod;
