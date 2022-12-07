import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/hook"
import { logout } from "../../../slices/auth"
import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Avatar, Menu } from "antd";



type Props = {}

const Header = (props: Props) => {
    const dispatch = useAppDispatch()
    const isLogin = useAppSelector((state: any) => state.auth.isLogin)
    const name = localStorage.getItem('username')
    const onHandleLogout = () => {
        dispatch(logout())
        localStorage.clear()
    }
    return (
        <div>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item className="">
                    <ul className="navbar-nav ml-auto">

                        <div className="nav-item">
                            <span>
                                {isLogin == 0 ? (
                                    <div>
                                        <NavLink to={'/login'}>
                                            <button className="btn btn-primary">Sign In</button>
                                        </NavLink>
                                    </div>
                                ) : (
                                    <li className="nav-item dropdown no-arrow">

                                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 big">{name}</span>
                                            <Avatar size={19} icon={<UserOutlined />} />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                            <a className="dropdown-item" onClick={() => onHandleLogout()} data-target="#logoutModal">
                                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                                                Logout
                                            </a>
                                        </div>
                                    </li>
                                )}
                            </span>

                        </div>
                    </ul>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/admin">
                        <LaptopOutlined /> Dashboard
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/admin/product-add">
                        <LaptopOutlined /> Thêm Sản Phẩm
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/admin/products">
                        <NotificationOutlined />
                        Sản phẩm
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/admin/categories">
                        <UserOutlined /> Categories
                    </Link>
                </Menu.Item>

            </Menu>
        </div>
    )
}

export default Header