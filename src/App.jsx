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
  const [activeTab, setActiveTab] = useState(3);
  const [isShowTab, setIsShowTab] = useState(true);
  const [count, setCount] = useState(0);
  // const activeTab = 2;
  const handleAciveTab = (id) => {
    setActiveTab(id);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };
  return (
    <div>
      <button onClick={() => setIsShowTab(!isShowTab)}>click me</button>
      {isShowTab ? (
        <div className="tab">
          <div className="tab__header">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleAciveTab(tab.id)}
                className={activeTab === tab.id ? "active" : ""}
              >
                <span>{tab.title}</span>
                <span className="tab-indicator"></span>
              </button>
            ))}
          </div>
          <div className="tab__content">
            {tabData[activeTab - 1].content} - {count}
          </div>
        </div>
      ) : (
        <p>closed</p>
      )}
    </div>
  );
}

export default App;
