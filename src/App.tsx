import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ExampleTwo from "./components/ExampleTwo";
// import ExampleOne from "./components/ExampleOne";

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ExampleOne /> */}
      <ExampleTwo />
    </QueryClientProvider>
  );
}

export default App;
