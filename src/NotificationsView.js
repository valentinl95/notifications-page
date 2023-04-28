import actions_text from "./actions_text.json";

function NotificationItem({ content, avatar, picture_avatar, readHandler }) {
  const { id, user, action, target, when, unreaded, additional_content } = content;

  return (
    <div className={"notification-card" + (unreaded ? " unreaded" : "")} onClick={readHandler} data-id={id}>
      <div className="notification-content">
        <div className="notification-content-start">
          <div className="image-container">
            <img src={"/" + avatar} alt={user + " avatar"}/>
          </div>
          <div className="notification-container">
            <div className="notification-description">
              <span className="link user">{user}</span>
              <span className="action-text">  {actions_text[action]}</span>
              {target && !picture_avatar && <span className="link target">  {target}</span>}
              {unreaded && <span className="bullet">&nbsp;&bull;</span>}
            </div>
            <div className="notification-when">{when}</div>
          </div>
        </div>
        {picture_avatar &&
        <div className="image-container">
          <img src={"/" + picture_avatar} alt={target}/>
        </div>}
      </div>
      {additional_content && <div className="additional-content">{additional_content}</div>}
    </div>
  );
}

function NotificationsView({ content, avatars, readHandler }) {
  return (
    <div className="notifications-list">
      {content.map(notification => (
        <NotificationItem
          key={notification.id}
          content={notification}
          avatar={avatars[notification.user]}
          picture_avatar={notification.action === "commented_picture" ? avatars[notification.target] : undefined}
          readHandler={readHandler}
        />))
      }
    </div>
  );
}

export default NotificationsView;
