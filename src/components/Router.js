import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Conversation from '../Pages/Conversations/Conversation';
import Orders from '../Pages/Orders/Orders';
import Customers from '../Pages/Customers/Customers';
import Inventory from '../Pages/Inventory/Inventory';
import Settings from '../Pages/Settings/Settings';

const Router = () => {
    // const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light")

    return (
        <Routes >
            <Route exact path="/" caseSensitive={false} element={<Dashboard />} />
            <Route exact path="/conversation" caseSensitive={false} element={<Conversation />} />
            <Route exact path="/order" caseSensitive={false} element={<Orders />} />
            <Route exact path="/customers" caseSensitive={false} element={<Customers />} />
            <Route exact path="/inventory" caseSensitive={false} element={<Inventory />} />
            <Route exact path="/settings" caseSensitive={false} element={<Settings />} />
        </Routes>
    )
}

export default Router