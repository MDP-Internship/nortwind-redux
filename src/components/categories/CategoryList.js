import React, { Component } from 'react'
import { connect } from 'react-redux'

class CategoryList extends Component {
    render() {
        return (
            <div>
                {this.props.currentCategory.categoryName}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentCategory: state.changeCategoryReducer
});

export default connect(mapStateToProps)(CategoryList);
