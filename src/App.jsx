import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  const [acvtiveTab, setActiveTab] = useState(1);
  const handleTab = (id) => {
    setActiveTab(id);
  };
  return (
    <div className="tab">
      <div className="tab__header">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            className={`${tab.id === acvtiveTab ? "active" : ""}`}
            onClick={() => handleTab(tab.id)}
          >
            <div>{tab.title}</div>
            <span className="tab-indicator"></span>
          </button>
        ))}
      </div>
      <p className="tab__content">{tabData[acvtiveTab - 1].content}</p>
    </div>
  );
}

export default App;
