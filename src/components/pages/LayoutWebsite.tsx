import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterWeb from '../layouts/website/FooterWeb'
import HeaderWeb from '../layouts/website/HeaderWeb'

type Props = {}

const LayoutWebsite = (props: Props) => {
    return (
        <div>
            <div>
                <HeaderWeb />
            </div>
            <div>
                <h1>Trần Hồng Quân PH15009</h1>
                <Outlet />
            </div>
            <div>
                <FooterWeb />
            </div>
        </div>
    )
}

export default LayoutWebsite