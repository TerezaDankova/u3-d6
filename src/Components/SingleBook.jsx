import {Component} from "react";
import {Card} from "react-bootstrap";
import CommentArea from "./CommentArea";


class SingleBook extends Component {

    state = {
            selected: false
            }
    render(){
      
      return(
            <>
                  <Card className="mt-5" onClick={()=> this.setState({selected: !this.state.selected})}
                         style={{border: this.state.selected ? '5px solid green' : 'none', width: '16rem'}}>
                        <Card.Img variant="top" src={this.props.book.img}  style={{ width: '100%', height:'400px'}} />
                        <Card.Body  style={{border:'1px solid black', height: '70px'}}>
                              <Card.Title className="textTrucante pl-2 pr-2 " style={{fontSize: 12}}>{this.props.book.title}</Card.Title>
                        </Card.Body>
                  </Card>
                  {this.state.selected && <CommentArea asin={this.props.book.asin}/>}
            </>
      )  }
      }
export default SingleBook