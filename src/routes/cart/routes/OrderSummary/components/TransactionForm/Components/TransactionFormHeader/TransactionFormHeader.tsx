import { ChevronLeft } from 'lucide-react';
import styles from './TransactionFormHeader.module.css';
import { useDispatch } from 'react-redux';
import { closeCheckoutModal } from '../../../../../../../../config/state/reducers/checkoutFormReducer';

type ITitleOptions =
  | 'Información Básica'
  | 'Información de envío'
  | 'Método de pago'
  | 'Confirmación de compra';

interface ITransactionFormHeaderProps {
  title: ITitleOptions;
  description: string;
}

function TransactionFormHeader({
  title,
  description,
}: ITransactionFormHeaderProps) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.transaction_modal_header}>
        <div
          className={styles.transaction_modal_header_close}
          onClick={() => dispatch(closeCheckoutModal())}
        >
          <ChevronLeft fillOpacity={0} size={18} />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
}

export default TransactionFormHeader;
