import React from 'react';
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import './HomeBooks.css'

const HomeBooks = () => {
    const books = [
        {
            name: 'Peter Pan',
            author: 'Walt Disney',
            picture: '/peter-pan.jpg',

        },
        {
            name: 'Peter Pan',
            author: 'Walt Disney',
            picture: '/peter-pan.jpg'

        },
        {
            name: 'Peter Pan',
            author: 'Walt Disney',
            picture: '/peter-pan.jpg'

        },
        {
            name: 'Peter Pan',
            author: 'Walt Disney',
            picture: '/peter-pan.jpg'

        },
        {
            name: 'Peter Pan',
            author: 'Walt Disney',
            picture: '/peter-pan.jpg'

        },
    ]

    const { Meta } = Card;
    console.log(books.name)

    return (
        <>
            <div className="site-card-wrapper">

                <h1>Recentely  Added</h1>


                <Row gutter={16}>
                    {books.map(book => {
                        return (

                            <Col span={4}>


                                <Card
                                    hoverable
                                    style={{
                                        width: 200
                                    }}
                                    cover={
                                        <img
                                            src={process.env.PUBLIC_URL + book.picture}
                                            alt="warning"
                                            className="error-boundary-warning-img"
                                        />
                                    }
                                >
                                    <Meta
                                        title={book.author}
                                        description={book.name} />
                                </Card>


                            </Col>

                        )



                    })
                    }

                    <i class="fas fa-chevron-right"></i>



                </Row>
            </div>
            <h1>Recommended</h1>

            <Row gutter={16}>
                {books.map(book => {
                    return (

                        <Col span={4}>


                            <Card
                                hoverable
                                style={{
                                    width: 150
                                }}
                                cover={
                                    <img
                                        src={process.env.PUBLIC_URL + book.picture}
                                        alt="warning"
                                        className="error-boundary-warning-img"
                                    />
                                }
                            >
                                <Meta
                                    title={book.author}
                                    description={book.name} />
                            </Card>


                        </Col>

                    )



                })
                }

                <i class="fas fa-chevron-right"></i>



            </Row>

            <h1>Most popular</h1>

            <Row gutter={16}>
                {books.map(book => {
                    return (

                        <Col span={4}>


                            <Card
                                hoverable
                                style={{
                                    width: 150
                                }}
                                cover={
                                    <img
                                        src={process.env.PUBLIC_URL + book.picture}
                                        alt="warning"
                                        className="error-boundary-warning-img"
                                    />
                                }
                            >
                                <Meta
                                    title={book.author}
                                    description={book.name} />
                            </Card>


                        </Col>

                    )



                })
                }

                <i class="fas fa-chevron-right"></i>



            </Row>

        </>
    )
}



export default HomeBooks;
