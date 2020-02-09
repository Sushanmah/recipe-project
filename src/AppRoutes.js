import Detail from "./components/Detail";
import Home from "./components/Home"
import AddRecipe from "./components/AddRecipe";

export default [
    {path:'/details', component:Detail, exact:true},
    {path: '/addrecipe', component:AddRecipe, exact:true},
    {path:'', component:Home, exact:true},
]
