import { RouterProvider } from "react-router-dom";
import { Routers } from "./router";
import { CardProvider } from "./Providers/AddToCard";
import { Toaster } from "sonner";
const App = () => {
  return (
    <div>
      <CardProvider>
        <Toaster position="top-center" />
        <RouterProvider router={Routers} />
      </CardProvider>
    </div>
  );
};

export default App;
