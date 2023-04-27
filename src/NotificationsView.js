import actions_text from "./actions_text.json";

function NotificationCard({ notificationsData, avatar }) {
  const { user, action, target, when, unreaded, additional_content } = notificationsData;

  return (
    <div className="notification-card">
      <div className="basic-content">
        <img src={"/" + avatar} alt={user + " avatar"} />
        <div className="notification-container">
          <div className="notification-description">{user} {actions_text[action]} {target ? target : ""}</div>
          <div className="notification-when">{when}</div>
        </div>
      </div>
      <div className="additional-content">{additional_content}</div>
    </div>
  );
}

function NotificationsView({ content, avatars }) {
  const notificationsList = content.map(notification => (
    <NotificationCard notificationsData={notification} avatar={avatars[notification.user]} />
  ));

  return (
    <div>{notificationsList}</div>
  );
}

export default NotificationsView;
