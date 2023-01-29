import Homepage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import ListPage from "./pages/listPage";

const Routes = [
    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/blogs',
      element: <ListPage />
    },
    {
      path: '/blogs/create',
      element: <CreatePage />
    },
    {
      path: '/blogs/edit',
      element: <EditPage />
    },
  ]

  export default Routes
