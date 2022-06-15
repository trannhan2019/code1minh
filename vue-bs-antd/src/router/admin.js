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
    ],
  },
];

export default admin;
