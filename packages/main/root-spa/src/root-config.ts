import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructLayoutEngine,
  constructRoutes,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return import(/* @vite-ignore */ name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

console.log(layoutEngine);

applications.forEach(registerApplication);
start();
