import React, { Component } from 'react';
import '../index.css';
import { Route, Link, Routes } from 'react-router-dom';
import PageInfo from '../model/interface/PageInfo';

interface PageInfos {
    pageInfos: PageInfo[];
}

class Main extends Component< any, PageInfos> {
    render() {
        const {
            valueState,
            activeTodo,
        } = this.props;
        const elRoutes = valueState.map((route:any, index:number) => (
            <Route key={route.id} path={route.path} element={route.element} />
        ));
        const elLinks = valueState.map((route:PageInfo, index:number) => {
            const strActive = route.isActive ? 'active' : '';
            return (
                <div key={route.id} className={`tab-item ${strActive}`}>
                    <Link
                        to={route.path}
                        onClick={() => activeTodo(route)}
                    >
                        {route.name}
                    </Link>
                </div>
            );
        });
        return (
            <div style={{ marginBottom: '50px' }}>
                <div className="tabs7">
                    {elLinks}
                </div>
                <Routes>
                    {elRoutes}
                </Routes>
            </div>
        );
    }
}

export default Main;
