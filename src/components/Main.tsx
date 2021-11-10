import React, { Component } from 'react';
import '../index.css';
import { Route, Link, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import App from '../App';
import PageInfo from '../model/interface/PageInfo';
import { activeTodo } from '../actions/RouteAction';

interface PageInfos {
    pageInfos: PageInfo[];
}

class Main extends Component<any, PageInfos> {
    render() {
        const { dispatch, valueState } = this.props;
        const elRoutes = valueState.map((route:PageInfo, index:number) => (
            <Route path={route.path} element={route.element} />
        ));
        const elLinks = valueState.map((route:PageInfo, index:number) => {
            const strActive = route.isActive ? 'active' : '';
            return (
                <div className={`tab-item ${strActive}`}>
                    <Link
                        to={route.path}
                        onClick={() => dispatch(activeTodo(route))}
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

function select(state:any) {
    return {
        valueState: state.todos,
    };
}

export default connect(select)(Main);
