import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layouts/admin/Header'
import PopupLogout from '../layouts/admin/PopupLogout'

type Props = {}

const LayoutAdmin = (props: Props) => {
    return (
        <div>
            <div id="wrapper">  
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>

            <PopupLogout />
        </div>
    )
}

export default LayoutAdmin