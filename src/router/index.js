import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About";
import Login from "../views/Login";
import Manage from "../views/layout/Manage";
import Task from '../views/Task';
import Seting from "../views/Seting";
import VideoPlay from "../views/components/task/VideoPlay";
import Vlist from "../views/Vlist";
import Exam1 from '../views/components/vlist/Exam1';
import Exam2 from '../views/components/vlist/Exam2';
/* eslint-disable */
Vue.use(VueRouter);
const routes = [
  // { path: '/', redirect: '/home' },
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: Manage,
    children:[
      {
        path: "/task",
        name: "Task",
        component: Task,
        children:[
          {
            path: "/video",
            name: "VideoPlay",
            component: VideoPlay
          },
        ]
      },
      {
        path: "/set",
        name: "Seting",
        component: Seting
      },
      {
        path: "/vlist",
        name: "Vlist",
        component: Vlist,
        children:[
          {
            path: "/video",
            name: "Exam1",
            component: Exam1
          },
          {
            path: "/video",
            name: "Exam2",
            component: Exam2
          },
        ]
      }
    ]
  },

  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});



export default router;
