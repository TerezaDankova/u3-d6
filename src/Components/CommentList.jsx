import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"


const CommentList = ({ commentShow }) => (
    <ListGroup>
        {commentShow.map(comment => (
        <SingleComment comment={comment} key={comment._id} />
        ))
        }
    </ListGroup>
)

export default CommentList