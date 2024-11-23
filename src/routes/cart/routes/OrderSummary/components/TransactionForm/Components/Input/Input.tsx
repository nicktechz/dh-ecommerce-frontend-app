import styles from './Input.module.css';
import {
  IBasicInformationKeys,
  IDeliveryInformationKeys,
  IPaymentMethodKeys,
} from '../../../../../../../../config/state/reducers/checkoutReducer';
import { useState } from 'react';

type IFormatting = 'CARD NUMBER';

interface IDoubleInputGroupProps {
  data: {
    id: IBasicInformationKeys | IDeliveryInformationKeys | IPaymentMethodKeys;
    label: string;
    placeholder?: string;
    type: React.HTMLInputTypeAttribute;
    value: string;
    customValidation?: (arg1: string) => {
      errorState: { isError: boolean; message: string };
    };
    updateValueFn: (arg1: string, arg2: string) => void;
    isRequired: boolean;
  };
  options?: {
    disableWhiteSpaces?: boolean;
    disableNumbers?: boolean;
    disableLetters?: boolean;
    disableSpecialCharacters?: boolean;
    autocomplete?: React.HTMLInputAutoCompleteAttribute;
    allowEmpty?: false;
    minLength?: number;
    maxLength?: number;
    capitalizeAllLetters?: boolean;
    formatting?: null | IFormatting;
  };
}

function Input({
  data,
  options = {
    disableWhiteSpaces: true,
    autocomplete: 'off',
    disableNumbers: false,
    disableLetters: false,
    disableSpecialCharacters: false,
    allowEmpty: false,
    minLength: 1,
    maxLength: 20,
    capitalizeAllLetters: false,
    formatting: null,
  },
}: IDoubleInputGroupProps) {
  const [error, setError] = useState('');
  function sanitizeValues(event: React.ChangeEvent<HTMLInputElement>) {
    let updatedValue = event.target.value;
    if (options.disableWhiteSpaces) {
      updatedValue = updatedValue.replace(/\s/g, '');
    }
    if (options.disableNumbers) {
      updatedValue = updatedValue.replace(/[^\D]/g, '');
    }
    if (options.capitalizeAllLetters) {
      updatedValue = updatedValue.toUpperCase();
    }
    if (options.disableLetters) {
      updatedValue = updatedValue.replace(/[a-zA-Z]/g, '');
    }
    if (options.disableSpecialCharacters) {
      updatedValue = updatedValue.replace(/[^a-zA-Z0-9 ]/g, '');
    }
    if (options.formatting !== null) {
      if (options.formatting === 'CARD NUMBER') {
        const numberGroups = updatedValue.match(/.{1,4}/g);
        if (numberGroups) {
          updatedValue = numberGroups.join(' ');
        }
      }
    }
    if (options.maxLength) {
      if (updatedValue.length > options.maxLength) {
        return false;
      }
    }

    event.target.value = updatedValue;
    const { updateValueFn } = data;
    updateValueFn(event.target.id, event.target.value);
  }
  function validations() {
    if (data.value.length === 0) {
      return setError('Este campo es obligatorio');
    } else {
      setError('');
    }
    if (options.minLength) {
      if (data.value.length < options.minLength) {
        return setError(`El mínimo de caracteres es ${options.minLength}`);
      } else {
        setError('');
      }
    }
    if (data.customValidation) {
      const { customValidation } = data;
      const { errorState } = customValidation(data.value);
      if (errorState.isError) {
        return setError(errorState.message);
      } else {
        setError(errorState.message);
      }
    }
  }

  return (
    <div className={styles.input_group}>
      <label htmlFor={data.id} className={styles.label}>
        {data.label}
        {data.isRequired ? (
          <span className={styles.input_required}>*</span>
        ) : null}
      </label>
      <input
        type={data.type}
        name={data.id}
        id={data.id}
        placeholder={data.placeholder ? data.placeholder : ''}
        value={data.value}
        className={styles.input}
        onChange={sanitizeValues}
        autoComplete={options.autocomplete}
        onBlur={validations}
        required={data.isRequired ? true : false}
        aria-label={data.label}
        aria-invalid={error === '' ? false : true}
      />
      <p className={styles.error_message}>{error}</p>
    </div>
  );
}

export default Input;
