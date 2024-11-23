import { ChevronRight } from 'lucide-react';
import styles from './TransactionForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import 'react-international-phone/style.css';
import { IRootState } from '../../../../../../config/state/stores/store';
import {
  backStep,
  nextStep,
  resetCheckoutModal,
} from '../../../../../../config/state/reducers/checkoutFormReducer';
import { toast } from 'sonner';
import TransactionFormHeader from './Components/TransactionFormHeader/TransactionFormHeader';
import BasicInfo from './Components/BasicInfo/BasicInfo';
import DeliveryInfo from './Components/DeliveryInfo/DeliveryInfo';
import PaymentMethod from './Components/PaymentMethod/PaymentMethod';
import OrderConfirmation from './Components/OrderConfirmation/OrderConfirmation';
import { resetCheckoutInformation } from '../../../../../../config/state/reducers/checkoutReducer';
import { removeAllProducts } from '../../../../../../config/state/reducers/cartReducer';

function TransactionForm() {
  const { total, deliveryPrice } = useSelector(
    (state: IRootState) => state.cartReducer
  );
  const formState = useSelector(
    (state: IRootState) => state.checkoutFormReducer
  );
  const dispatch = useDispatch();
  function submitInformation(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const form = (event.target as HTMLButtonElement).form!.elements;
    const formElements = Array.from(form) as HTMLInputElement[];
    const inputs = formElements.filter((input) => input.nodeName === 'INPUT');
    const errorInputs = inputs.filter(
      (input) => input.value === '' || input.ariaInvalid === 'true'
    );
    if (errorInputs.length > 0) {
      console.log(errorInputs);
      return null;
    } else {
      return dispatch(nextStep(formState.stepOfCheckout));
    }
  }
  return (
    <div className={styles.transaction_modal_wrapper}>
      <div className={styles.transaction_modal}>
        {formState.stepOfCheckout === 1 && (
          <TransactionFormHeader
            title="Información Básica"
            description="Utilizaremos esta información para procesar el envio y crear tu cuenta en nuestra página."
          />
        )}
        {formState.stepOfCheckout === 2 && (
          <TransactionFormHeader
            title="Información de envío"
            description="Revisa que la información sea correcta para evitar retrasos en el proceso de entrega."
          />
        )}
        {formState.stepOfCheckout === 3 && (
          <TransactionFormHeader
            title="Método de pago"
            description="Guardaremos tu información de pago de forma segura."
          />
        )}
        {formState.stepOfCheckout === 4 && (
          <TransactionFormHeader
            title="Confirmación de compra"
            description="Revisa el detalle de tu compra y finaliza el pedido."
          />
        )}
        <div className={styles.transaction_modal_body_wrapper}>
          <form className={styles.transaction_modal_form} id="form_checkout">
            {formState.stepOfCheckout === 1 && <BasicInfo />}
            {formState.stepOfCheckout === 2 && <DeliveryInfo />}
            {formState.stepOfCheckout === 3 && <PaymentMethod />}
            {formState.stepOfCheckout === 4 && <OrderConfirmation />}
          </form>
        </div>
        <div className={styles.transaction_modal_footer}>
          <div>
            <h3>${(total + deliveryPrice).toLocaleString('es-ES')} (COP)</h3>
            <p>Total a pagar</p>
          </div>
          <div>
            <div className={styles.transaction_modal_footer_buttons}>
              {formState.stepOfCheckout > 1 && (
                <a onClick={() => dispatch(backStep())}>Anterior</a>
              )}
              {formState.stepOfCheckout >= 1 &&
              formState.stepOfCheckout <= 3 ? (
                <button onClick={submitInformation} form="form_checkout">
                  Siguiente <ChevronRight fillOpacity={0} size={18} />
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(resetCheckoutModal());
                    toast.success(
                      'Tu pedido se ha procesado correctamente, puedes rastrearlo en cualquier momento desde esta página o desde tu perfil.',
                      {
                        duration: 5000,
                        closeButton: true,
                        position: 'top-right',
                      }
                    );
                    dispatch(resetCheckoutInformation());
                    dispatch(removeAllProducts());
                  }}
                >
                  Terminar pedido
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionForm;
