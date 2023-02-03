import Homepage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import ListPage from "./pages/listPage";
import ShowPage from "./pages/showPage";

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
      path: '/blogs/:id/edit',
      element: <EditPage />
    },
    {
      path: '/blogs/:id',
      element: <ShowPage />
    },
  ]

  export default Routes
