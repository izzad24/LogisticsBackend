import { CargoController } from "./controller/CargoController";


export const Routes = [{
    method: "get",
    route: "/order",
    controller: CargoController,
    action: "all"
}, {
    method: "get",
    route: "/order/:id",
    controller: CargoController,
    action: "one"
}, {
    method: "post",
    route: "/order",
    controller: CargoController,
    action: "save"
}, {
    method: "delete",
    route: "/order/:id",
    controller: CargoController,
    action: "remove"
}];