function NotificationsPageHeader({ notificationsCount }) {
  return (
    <div className="header">
      <div className="left-side">
        <label>Notifications</label>
        <label>{notificationsCount}</label>
      </div>
      <div className="right-side">Mark all as read</div>
    </div>
  );
}

export default NotificationsPageHeader;
