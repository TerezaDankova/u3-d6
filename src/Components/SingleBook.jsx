import {Component} from "react";
import {Card} from "react-bootstrap";
// import CommentArea from "./CommentArea";


class SingleBook extends Component {

//     state = {
//             selected: false
//             }

    render(){
      
      return(
            <>  
                  <Card className="mt-5 mr-5" 
                        //  onClick={()=> this.setState({selected: !this.state.selected})}
                        onClick={() => this.props.changeSelectedBook(this.props.book.asin)}
                        style={{ border: this.props.selectedBook === this.props.book.asin ? '5px solid green' : 'none', width: '10rem'}}>
                        <Card.Img 
                        variant="top" src={this.props.book.img}  
                        style={{ width: '100%', height:'240px'}} />
                        <Card.Body  style={{border:'1px solid black', height: '70px'}}>
                              <Card.Title className=" pl-1 pr-1 " 
                              style={{fontSize: 10}}> {this.props.book.title} </Card.Title>
                        </Card.Body>
                  </Card>
                  {/* {this.state.selected && <CommentArea asin={this.props.book.asin}/>} */}
            </>
      )  }
      }
export default SingleBook