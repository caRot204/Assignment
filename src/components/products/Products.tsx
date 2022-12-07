
import { NavLink } from 'react-router-dom';
import { useGetProductsQuery, useRemoveProductMutation } from '../../services/product';

const Products = () => {
    const { data: products, isLoading, error } = useGetProductsQuery(undefined)
    const [deleteProduct, response] = useRemoveProductMutation()

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error</div>

    return (
        <>
            {/* Page Heading */}
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className="h3 my-3 text-gray-800">Products Manage Table</h1>
                <NavLink to={`/admin/product-add`}>
                    <button className="btn btn-primary">
                        <span className="text">Add New Product</span>
                    </button>
                </NavLink>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-dark" width="100%">
                            <thead>
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>Tên</th>
                                    <th>Giá</th>
                                    <th>Ảnh</th>
                                    <th>Danh mục</th>
                                    <th>Mô tả</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {products ? products.map((item: any, index: number) => (
                                    <tr key={index}>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>{item.name}</td>
                                        <td>${item.price}</td>
                                        <td className='w-25 h-25'>
                                            <img className='w-100 h-100' src={item.imgUrl} alt="" />
                                        </td>
                                        <td>{item.category}</td>
                                        <td>{item.desc}</td>
                                        <td className=''>
                                            <button className='btn btn-danger text mr-2'
                                                onClick={() => {
                                                    const confirm = window.confirm("Are you sure?")
                                                    if (confirm) {
                                                        deleteProduct(item.id)
                                                    }
                                                }}>
                                                Remove
                                            </button>
                                            <NavLink to={`/admin/product/${item.id}/edit`}>
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

export default Products