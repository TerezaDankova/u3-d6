import {Component} from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from '../Components2/Loading'
import Error from '../Components2/Error'

class CommentArea extends Component {

    state = {
            comments: [],
            isLoading: true,
            isError: false
           }
           
    componentDidMount = async () => {
        try { const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
            headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3YTZiMzFlYjc2ZDAwMTUxNTAyNDgiLCJpYXQiOjE2NjI2MzU5NTUsImV4cCI6MTY2Mzg0NTU1NX0.Sxfd0UiSLfePsqw61xi9cF1H4BolbnnnXU9ZIOmNft0'
            }})
            console.log(response)
        if (response.ok){
            const comments = await response.json();
            this.setState({comments: comments , isLoading:false, isError: false})
        }
        else {
            console.log('error')
            this.setState({ isLoading:false , isError: true})
        }}
        catch(error){ console.log(error) 
            this.setState({ isLoading:false , isError: true})
        }
    }
    
    render() {
        return (
        <div>
            {this.state.isLoading && <Loading />}
            {this.state.isError && <Error />}
            <AddComment asin={this.props.asin}/>
            <CommentList commentShow={this.state.comments}/>
        </div>
    )}
}

export default CommentArea