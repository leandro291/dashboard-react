import { RouterProvider } from "react-router";

import { router } from "./router/router";
import { UserProvider } from "./common/providers/user-provider/user-provider";


function App() {
    return (
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
    )
}

export default App
