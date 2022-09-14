import { Component } from "react";
import {Form, Button} from 'react-bootstrap'

class AddComment extends Component {

    state = {
        comment: {
            comment: '',
            rate: 1,
            elementId: null
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.asin !== this.props.asin) {
            this.setState({
                comment: {
                    ...this.state.comment,
                    elementId: this.props.asin
                }
            })
        }
    }

    commentSending = async (event) => {
        event.preventDefault()

        try{
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(this.state.comment),
                headers: {
                    'Content-type': 'application/json' ,
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3YTZiMzFlYjc2ZDAwMTUxNTAyNDgiLCJpYXQiOjE2NjI2MzU5NTUsImV4cCI6MTY2Mzg0NTU1NX0.Sxfd0UiSLfePsqw61xi9cF1H4BolbnnnXU9ZIOmNft0'
                }
            })
            if(response.ok){
                console.log("comment was added")
                alert('Comment was sent!')
                this.props.didAddComment()

            } else {
                console.log('error')
                alert('something went wrong')
            }
        }
        catch (error) {console.log(error)
        }
    }

    
       
      


    render() {
        return (
        <div className="ml-5 ">       
            <Form onSubmit={this.commentSending}>
                <Form.Group className="mt-2" controlId="formBasicEmail">
                    <Form.Label 
                    style={{fontWeight: 'bold'}}>
                        Comment the book here...</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Insert your comment..." 
                    value={this.state.comment.comment}
                    onChange= { event => this.setState({
                        comment:{
                            ...this.state.comment,
                            comment: event.target.value
                        }
                    })}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="text-left" style={{fontWeight: 'bold'}}>Rating...</Form.Label>
                    <Form.Control 
                    as="select"
                    value={this.state.comment.rate}
                    onChange={event => this.setState({
                                comment:{
                                ...this.state.comment,
                                rate: event.target.value
                                }
                    })}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </div> 
        )

    }
}
export default AddComment