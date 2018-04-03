import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipe } from '../actions';
 
class SearchRecipes extends Component{

    constructor(){
        super();
        this.state={
            ingredients:'',
            dish:''
        }
    }

    search(){
        const url = `http://www.recipepuppy.com/api/?i=${this.state.ingredients}&q=${this.state.dish}`;
        console.log('State ',this.state,url);

        fetch(url,{
            method:'GET',
        })
        .then(
            response => response.json()
        )
        .then(
            json => {
                this.props.setRecipe(json.results);
            }
        )

    }

    render(){
        return (
            <div> 
                <Form inline className="row">
                    <FormGroup className="col-md-4">
                    <ControlLabel>
                        Ingredients : 
                    </ControlLabel>
                    
                    <FormControl 
                    type="text"
                    placeholder="Ingredients ...  "
                    onChange={event => this.setState({ingredients: event.target.value})}
                    />
                </FormGroup>
                
                    <FormGroup className="col-md-4">
                    <ControlLabel>
                        Dish :
                    </ControlLabel>
                    
                    <FormControl 
                     type="text"
                     placeholder="Dishes ...  " 
                     onChange={event => this.setState({ dish: event.target.value})}/>
                </FormGroup>
                    <Button 
                     bsStyle="primary"
                     className="col-md-2" 
                     onClick={() => this.search()}
                     >Submit</Button>
            </Form>
            </div>
        )
    }
}

export default connect(null,{setRecipe})(SearchRecipes);