import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { IUser } from '../../interfaces/user'
import { registerUser } from '../../slices/user'

type Props = {}

const Register = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<IUser>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const registerAuth = (user: IUser) => {
        const signup: any = dispatch(registerUser(user))
        if (signup) {
            // document.querySelector('#alert')?.textContent = 'Dăng ký thành công.'
            alert('Dang ky thanh cong!')
            setInterval(() => {
                navigate('/login')
            }, 3000)
        }
    }

    return (
        <div>
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* Nested Row within Card Body */}
                        <div className="">
                            <div className="">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Đăng ký</h1>
                                    </div>
                                    <div className='text-danger' id='alert'></div>
                                    <form className="user" onSubmit={handleSubmit(registerAuth)}>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-user"
                                                placeholder="User name"
                                                {...register('username')} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-user"
                                                placeholder="Email Address"
                                                {...register('email')} />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" className="form-control form-control-user"
                                                    placeholder="Password"
                                                    {...register('password')} />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="password" className="form-control form-control-user"
                                                    placeholder="Repeat Password"
                                                    {...register('password')} />
                                            </div>
                                        </div>
                                        <button type='submit' className="btn btn-success btn-user btn-block">
                                            Register Account
                                        </button>
                                        <hr />
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                        <NavLink to={'/login'}>
                                            <a className="small">Already have an account? Login!</a>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register