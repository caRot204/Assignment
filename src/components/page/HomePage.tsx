import React from 'react'
import { useGetProductsQuery, useRemoveProductMutation } from '../../services/product'
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { Typography } from "antd";
import { Link } from 'react-router-dom';

type Props = {}

const HomePage = (props: Props) => {
  const { data: products, isLoading, error } = useGetProductsQuery(undefined)
  const [deleteProduct, response] = useRemoveProductMutation()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <>
      <Typography.Title
        level={2}
        style={{ marginLeft: "100px", marginTop: "10px" }}
      >
        Sản phẩm hot
      </Typography.Title>
      <Row xs={1} md={6} className="g-2">
        {products ? products.map((item: any, index: number) => (
          <Col>
            <Card style={{ padding: "5px" }}>
              <Card.Img
                variant="top"
                style={{ width: "227px" }}
                src={item.imgUrl}
              />
              <Card.Body>
                <Card.Title>
                  <Link to={`/detail/${item._id}`}>{item.name}</Link>
                </Card.Title>
              </Card.Body>
              <div className="price-group" style={{ display: "flex" }}>
                {item.price}
              </div>
              <div>
                <StarStyle className="fa fa-star"></StarStyle>
                <StarStyle className="fa fa-star"></StarStyle>
                <StarStyle className="fa fa-star"></StarStyle>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </Card>

          </Col>
        )) : <tr className="odd"><td valign="top" colSpan={6} className="dataTables_empty">No data available in table.</td></tr>}
      </Row>
    </>
  )
}
const StarStyle = styled.span`
  color: orange;

`

export default HomePage