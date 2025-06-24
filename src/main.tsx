import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("main.tsx is executing");

const rootElement = document.getElementById("root");
console.log("Root element:", rootElement);

if (!rootElement) {
  throw new Error("Root element not found");
}

try {
  const root = createRoot(rootElement);
  console.log("React root created successfully");
  root.render(<App />);
  console.log("App component rendered");
} catch (error) {
  console.error("Error rendering app:", error);
}
