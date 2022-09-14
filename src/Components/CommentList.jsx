import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"
import { Component } from "react"

class CommentList extends Component {

    render() {
        return <ListGroup>
            {this.props.commentShow.map(comment => (
                <SingleComment comment={comment} key={comment._id} didDeleteComment={() => this.props.didDelete()} />
            ))
            }
        </ListGroup>
    }

}

export default CommentList