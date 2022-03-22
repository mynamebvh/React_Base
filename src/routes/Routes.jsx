import React, { Fragment, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// configs
import { PATH_NAME, USER_ROLE } from "configs";

// types
import { IRoutes } from "models/IRoutes";

// layouts
import MainLayout from "layouts/MainLayout";

// containers
import AuthGuard from "guards/AuthGuard";
import GuestGuard from "guards/GuestGuard";

// route
import RoleRoute from "./RoleRoute";

// modules
const Error404View = lazy(() => import("features/Error404View"));
const DenyView = lazy(() => import("features/DenyView"));
const ProductAdd = lazy(() => import("features/Product/ProductAdd"));
const ProductList = lazy(() => import("features/Product/ProductList"));
const Users = lazy(() => import("features/Users"));
const Dashboard = lazy(() => import("features/Dashboard"));
const Playbackground = lazy(() => import("features/Playbackground"));
const Login = lazy(() => import("features/Login"));
const Kanban = lazy(() => import("features/Kanban"));

const routesConfig = [
  {
    exact: true,
    path: "/",
    component: () => <Navigate to={PATH_NAME.DASHBOARD} />,
  },
  {
    exact: true,
    path: PATH_NAME.ERROR_404,
    component: Error404View,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: PATH_NAME.LOGIN,
    component: Login,
  },
  {
    exact: true,
    path: PATH_NAME.ERROR_403,
    component: DenyView,
  },
  {
    path: "/",
    guard: AuthGuard,
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: PATH_NAME.DASHBOARD,
        component: Dashboard,
        requireRoles: [USER_ROLE.ADMIN, USER_ROLE.LEAD],
      },
      {
        exact: true,
        path: PATH_NAME.PLAY_BACKGROUND,
        component: Playbackground,
        requireRoles: [USER_ROLE.ADMIN, USER_ROLE.LEAD],
      },
      {
        exact: true,
        path: PATH_NAME.PRODUCT_LIST,
        component: ProductList,
        requireRoles: [USER_ROLE.ADMIN, USER_ROLE.LEAD],
      },
      {
        exact: true,
        path: PATH_NAME.PRODUCT_ADD,
        component: ProductAdd,
        requireRoles: [USER_ROLE.ADMIN],
      },
      {
        exact: true,
        path: PATH_NAME.KANBAN,
        component: Kanban,
        requireRoles: [USER_ROLE.ADMIN, USER_ROLE.LEAD],
      },
      {
        exact: true,
        path: PATH_NAME.USERS,
        component: Users,
        requireRoles: [USER_ROLE.ADMIN, USER_ROLE.LEAD],
      },
      {
        component: () => <Navigate to={PATH_NAME.ERROR_404} />,
      },
    ],
  },
  {
    path: "*",
    routes: [
      {
        exact: true,
        path: "/app",
        component: MainLayout,
      },
      {
        component: () => <Navigate to={PATH_NAME.ERROR_404} />,
      },
    ],
  },
];

const renderRoutes = (routes) => {
  return (
    <>
      {routes ? (
        <Suspense fallback={<div />}>
          <Routes>
            <Route path='/login' element={<Login />} />
            {/* {routes.map((route, idx) => {
              const Guard = route.guard || Fragment;
              const Layout = route.layout || Fragment;
              const Component = route.component;
              const requireRoles = route.requireRoles || [];

              return (
                <Route
                  key={`routes-${idx}`}
                  path={route.path}
                  exact={route.exact}
                  element={route.component}
                  render={(props) => (
                    <Guard>
                      <Layout>
                        {route.routes ? (
                          renderRoutes(route.routes)
                        ) : (
                          <RoleRoute requireRoles={requireRoles}>
                            <Component {...props} />
                          </RoleRoute>
                        )}
                      </Layout>
                    </Guard>
                  )}
                />
              );
            })} */}
          </Routes>
        </Suspense>
      ) : null}
    </>
  );
};

function Routess() {
  // console.log(renderRoutes(routesConfig));
  return renderRoutes(routesConfig);
}

export default Routess;