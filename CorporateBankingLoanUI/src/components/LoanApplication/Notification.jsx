import { notify } from '../utils/notification.js';

function Notification({ message }) {
  return (
    <div className="notification">
      {message && <p>{message}</p>}
    </div>
  );
}

export default Notification;