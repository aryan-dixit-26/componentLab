import BreadCrum from "./Components/BreadCrums";
import Test from "./Components/Pages/Test";

import "./styles.css";

export default function App() {
  const config = [
    {
      name: "test-1",
      key: "test-1",
      component: <Test id={1} />,
    },
    {
      name: "test-2",
      key: "test-2",
      component: <Test id={2} />,
    },
    {
      name: "test-3",
      key: "test-3",
      component: <Test id={3} />,
    },
    {
      name: "test-4",
      key: "test-4",
      component: <Test id={4} />,
    },
    {
      name: "test-5",
      key: "test-5",
      component: <Test id={5} />,
    },
  ];

  return (
    <div className="App">
      <h1>Aryan Sandbox</h1>
      <BreadCrum config={config} />
    </div>
  );
}
