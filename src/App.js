import { useState } from "react";
import "./App.css";
import NotificationsView from "./NotificationsView.js";
import NotificationsPageHeader from "./NotificationsPageHeader.js";
import notifications from "./notifications.json";
import avatars from "./avatars.json";

function App() {
  const [content, setContent] = useState(notifications);

  function onMarkAllAsRead() {
    setContent(prevContent => {
      return prevContent.map(notification => {
        return { ...notification, unreaded: false };
      });
    });
  }

  function onMarkAsRead(id) {
    setContent(prevContent => prevContent.map(notification => (notification.id === id) ? { ...notification, unreaded: false } : notification));
  }

  const notificationsCount = content.filter((notification => {
    return notification.unreaded === true;
  })).length;

  return (
    <div className="app">
      <NotificationsPageHeader notificationsCount={notificationsCount} readAllHandler={onMarkAllAsRead}/>
      <NotificationsView content={content} readHandler={onMarkAsRead} avatars={avatars}/>
    </div>
  )
}

export default App;
