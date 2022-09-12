import SingleBook from "./SingleBook";
import { Col, Container, Row , Form} from 'react-bootstrap'
import {Component} from "react";
import CommentArea from './CommentArea'

class BookList extends Component {

    state = {
        searchQuery: '',
        selectedBook: null
    }

    render() {
        return (
            <Container className="m-auto p-0">
                <Row>
                    <Col md={8} className="pr-5">
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control 
                                    type="text" 
                                    placeholder="Insert a name of the book you want to search for..." 
                                    value={this.state.searchQuery}
                                    onChange={e => this.setState({ searchQuery: e.target.value})}
                                    />
                                </Form.Group>
                            </Col>    
                        </Row>
                <Row className="mb-5">
                    {this.props.books.filter(BOOK => BOOK.title.toLowerCase().includes(this.state.searchQuery)).map(BOOK => (
                    <Col xs={3} key={BOOK.asin}>
                        <SingleBook 
                        book={BOOK}
                        selectedBook={this.state.selectedBook} 
                        changeSelectedBook={asin => this.setState({
                            selectedBook: asin  
                        })} 
                        />
                    </Col>
                    ))}
                </Row>
                </Col>
                <Col md={4} className="pl-5">
                            <CommentArea asin={this.state.selectedBook} />
                </Col>
                </Row>
            </Container>
        )
    }
}

export default BookList