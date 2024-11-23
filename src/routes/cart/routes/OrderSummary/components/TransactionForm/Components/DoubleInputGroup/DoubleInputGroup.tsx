import { ReactNode } from 'react';
import styles from './DoubleInputGroup.module.css';

interface IDoubleInputGroupProps {
  children: ReactNode;
}

function DoubleInputGroup({ children }: IDoubleInputGroupProps) {
  return (
    <div className={styles.transaction_modal_form_double_input}>{children}</div>
  );
}

export default DoubleInputGroup;
