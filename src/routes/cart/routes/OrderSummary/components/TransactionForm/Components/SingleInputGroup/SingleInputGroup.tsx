import { ReactNode } from 'react';
import styles from './SingleInputGroup.module.css';

interface ISingleInputGroupProps {
  children: ReactNode;
}
function SingleInputGroup({ children }: ISingleInputGroupProps) {
  return <div className={styles.single_input_group}>{children}</div>;
}

export default SingleInputGroup;
