import React, { useContext } from 'react';

// state
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => {
      return (
        <div key={alert.id} className={`alert alert-${alert.type}`}>
          <i className="fas fas-info-circle" /> {alert.msg}
        </div>
      );
    })
  );
};

export default Alerts;
