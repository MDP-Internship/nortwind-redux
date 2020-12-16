import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from "../../redux/actions/categoryActions"
import { ListGroup, ListGroupItem } from 'reactstrap'

class CategoryList extends Component {
    componentDidMount() {
        // this.props.actions.getCategories()
    }

    render() {
        
        console.log(this.props.currentCategory);
        console.log(this.props.categories);
        
        
        return (
            
            <div>
                <h3>Categories</h3>
                <ListGroup>
                  {
                    
                  }
                </ListGroup>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
    
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
