function NotificationsPageHeader({ notificationsCount, readAllHandler }) {
  return (
    <div className="header">
      <div className="left-side">
        <label className="bold very-dark-blue-color font-size-header">Notifications</label>
        <label className="bold white-color blue-color-bg font-size-sub-header notifications-counter">{notificationsCount}</label>
      </div>
      <button className="right-side" onClick={readAllHandler}>Mark all as read</button>
    </div>
  );
}

export default NotificationsPageHeader;
