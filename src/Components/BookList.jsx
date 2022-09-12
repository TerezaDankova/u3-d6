import SingleBook from "./SingleBook";
import { Col, Container, Row , Form} from 'react-bootstrap'
import {Component} from "react";

class BookList extends Component {

    state = {
        searchQuery: ''
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form.Group>
                           <Form.Control type="text" placeholder="Insert a name of the book you want to search for..." 
                             value={this.state.searchQuery}
                             onChange={e => this.setState({searchQuery: e.target.value})}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-5">
                    {this.props.books.filter(BOOK => BOOK.title.toLowerCase().includes(this.state.searchQuery)).map(BOOK => (
                    <Col xs={3} key={BOOK.asin}>
                        <SingleBook book={BOOK} />
                    </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default BookList