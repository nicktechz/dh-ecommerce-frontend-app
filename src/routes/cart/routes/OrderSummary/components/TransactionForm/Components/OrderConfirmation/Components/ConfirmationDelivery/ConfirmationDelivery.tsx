import { useSelector } from 'react-redux';
import { IRootState } from '../../../../../../../../../../config/state/stores/store';
import styles from './ConfirmationDelivery.module.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from 'react';

function ConfirmationDelivery() {
  const delivery = useSelector(
    (state: IRootState) => state.checkoutReducer.deliveryInformation
  );
  const basicInfo = useSelector(
    (state: IRootState) => state.checkoutReducer.basicInformation
  );
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoibmlja3RlY2h6IiwiYSI6ImNtM3Q1M2RxeTA0OGQya29zZnNpcnNjMzAifQ.0tbGi3HzcYtOeeIpDxPnTA';
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        center: [-74.0242, 40.6941],
        zoom: 10.12,
      });
      return () => {
        map.remove();
      };
    }
  }, [delivery.mainAddress]);
  return (
    <div className={styles.confirmation_delivery_wrapper}>
      <div
        className={styles.confirmation_delivery_map}
        ref={mapContainerRef}
      ></div>
      <div className={styles.confirmation_delivery_info}>
        <h2 style={{ fontWeight: '600' }}>
          {basicInfo.firstName} {basicInfo.lastName}
        </h2>
        <p>{delivery.mainAddress}</p>
        <p>{delivery.complementAddress}</p>
        <p>
          {delivery.city}, {delivery.department}, Colombia
        </p>
      </div>
    </div>
  );
}

export default ConfirmationDelivery;
