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
                <Outlet />
            </div>
            <div>
                <FooterWeb />
            </div>
        </div>
    )
}

export default LayoutWebsite