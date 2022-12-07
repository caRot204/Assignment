import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hook'
import { logout } from '../../../slices/auth'
import styled from "styled-components";
import Search from '../../input/Search';

type Props = {}


const HeaderWeb = (props: Props) => {

  const dispatch = useAppDispatch()
  const isLogin = useAppSelector((state: any) => state.auth.isLogin)
  const name = localStorage.getItem('username')
  const onHandleLogout = () => {
    dispatch(logout())
    localStorage.clear()
  }
  return (
    <Wrapper>
      <Container>
        <Link to={"/"}>
          <Logo src='../../Image/apple_logo_PNG19695.png' />
        </Link>
        <ul>
          <Link to={"/"}>
            <LiStyle>
              Trang chủ
            </LiStyle>
          </Link>
          <Link to={"aboutPage"}>
            <LiStyle>
              Giới thiệu
            </LiStyle>
          </Link>
          <Link to={""}>
            <LiStyle>
              Giỏ hàng
            </LiStyle>
          </Link>
          <Link to={"/login"}>
            <LiStyle>
              Đăng nhập
            </LiStyle>
          </Link>
        </ul>

        <Search />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding:10px;
  background-color: gray;
`;
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const LiStyle = styled.li`
  display: inline-block;
  padding: 0 10px;
  padding-top: 10px;
  color: #fff;
  margin-right:20px;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

export default HeaderWeb