import Detail from "./components/Detail";
import Home from "./components/Home"

export default [
    {path:'/details', component:Detail, exact:true},
    {path:'', component:Home, exact:true},
]
