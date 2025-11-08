import React from 'react';
import Sidebar from "../../Sidebar/Sidebar.tsx";
import {Outlet} from "react-router-dom";

function MainLayout(): React.ReactElement {
    return (
        <div id="app">
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;
