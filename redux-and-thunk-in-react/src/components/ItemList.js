import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

const mapStateToProps = (state) => {
    console.log('mapStateToProps state: ', state);
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => {
            console.log('componentDidMount call this when component is created/updated');
            dispatch(itemsFetchData(url));
        }
    };
};

class ItemList extends Component {

    componentDidMount() {
        // we’ll call fetchData when the component mounts
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);