const admin = [
  {
    name: "admin",
    path: "/admin",
    component: () => import("../layouts/AdminLayout.vue"),
    children: [
      {
        path: "users",
        name: "admin-users",
        component: () => import("../pages/admin/User.vue"),
      },
      {
        path: "roles",
        name: "admin-roles",
        component: () => import("../pages/admin/Role.vue"),
      },
      {
        path: "settings",
        name: "admin-settings",
        component: () => import("../pages/admin/Setting.vue"),
      },
      {
        path: "test",
        name: "admin-test",
        component: () => import("../pages/admin/Test.vue"),
      },
    ],
  },
];

export default admin;
