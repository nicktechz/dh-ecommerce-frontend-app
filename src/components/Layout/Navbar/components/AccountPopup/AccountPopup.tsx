import {
  BadgeDollarSign,
  MapPin,
  PackageOpen,
  Settings,
  WalletCards,
} from 'lucide-react';
import style from './AccountPopup.module.css';
function AccountPopup() {
  return (
    <div className={style.account_box}>
      <div className={style.account_box_header}>
        <h3>Nicolás Andrés Rueda Macias</h3>
      </div>
      <div className={style.account_box_body}>
        <div>
          <div>
            <PackageOpen fillOpacity="0" />
          </div>
          <span>Mis pedidos</span>
        </div>
        <div>
          <div>
            <BadgeDollarSign fillOpacity="0" />
          </div>
          <span>Puntos acumulados</span>
        </div>
        <div>
          <div>
            <WalletCards fillOpacity={0} />
          </div>
          <span>Métodos de pago</span>
        </div>
        <div>
          <div>
            <MapPin fillOpacity={0} />
          </div>
          <span>Direcciones guardadas</span>
        </div>
        <div>
          <div>
            <Settings fillOpacity="0" />
          </div>
          <span>Configuración de la cuenta</span>
        </div>
      </div>
      <div className={style.account_box_footer}>
        <a href="">Cerrar sesión</a>
      </div>
    </div>
  );
}

export default AccountPopup;
