import { Route, Routes, } from "react-router-dom";

import { Home} from './pages/Home/Home';
import { Checkout } from './pages/Checkout/Checkout';
import { DefaultLayout } from "./layouts/DefaultLayout/layout";

export function Router () {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={ <Home />}/>
            <Route path="/CheckOut" element={ <Checkout />}/>
            </Route>
        </Routes>
    )
}