import styles from './AccountNav.module.css';
import AccountPopup from './Components/AccountPopup/AccountPopup';
import { LogIn } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../../../../config/state/stores/store';
import {
  CLOSE_ACCOUNT,
  LOGGED_IN_USER,
  OPEN_ACCOUNT,
} from '../../../../../../../config/types/types';

function AccountNav() {
  const isAccountOpen = useSelector(
    (state: IRootState) => state.navigationReducer.isAccountOpen
  );
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(
    (state: IRootState) => state.userCredentials.isUserLoggedIn
  );
  function toggleIsAccountOpen() {
    if (!isAccountOpen) {
      dispatch({ type: OPEN_ACCOUNT });
    } else {
      dispatch({ type: CLOSE_ACCOUNT });
    }
  }
  return isUserLoggedIn ? (
    <div style={{ position: 'relative' }}>
      <div
        className={styles.navbar_information_box_account_avatar}
        onClick={toggleIsAccountOpen}
      >
        NR
      </div>
      {isAccountOpen ? <AccountPopup /> : null}
    </div>
  ) : (
    <>
      <div
        className={styles.navbar_information_box_account_not_logged}
        onClick={() => dispatch({ type: LOGGED_IN_USER })}
      >
        <div>
          <LogIn fillOpacity={0} />
        </div>
      </div>
    </>
  );
}

export default AccountNav;
