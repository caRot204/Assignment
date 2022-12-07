import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDeleteCateMutation, useGetCatesQuery } from '../../services/category'

type Props = {}

const Categories = (props: Props) => {
    const [deleteCate] = useDeleteCateMutation()
    const { data: categories, isLoading, error } = useGetCatesQuery()
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error</div>

    return (
        <>
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className="h3 my-3 text-gray-800">Danh mục sản phẩm</h1>
                <NavLink to={`/admin/category-add`}>
                    <button className="btn btn-primary btn-icon-split">
                        <span className="text">Thêm danh mục sản phẩm</span>
                    </button>
                </NavLink>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-dark" width="100%">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories ? categories.map((item: any, index: number) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td className=''>
                                            <button className='btn btn-danger text mr-2'
                                                onClick={() => {
                                                    const confirm = window.confirm("Are you sure?")
                                                    if (confirm) {
                                                        deleteCate(item.id)
                                                    }
                                                }}
                                            >
                                                Remove
                                            </button>
                                            <NavLink to={`/admin/category/${item.id}/edit`}>
                                                <button className='btn btn-success'>Edit</button>
                                            </NavLink>
                                        </td>
                                    </tr>
                                )) : <tr className="odd"><td valign="top" colSpan={6} className="dataTables_empty">No data available in table.</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories