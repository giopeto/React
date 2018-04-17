import React, {Component} from "react";
import ItemsList from "../components/ItemsList";

import { connect } from "react-redux";
import {itemsFetchData} from "../items/index";

const mapStateToProps = state => {
    console.log('mapStateToProps', state);
    return {items: state.items};
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => {
            console.log('componentDidMount call this when component is created/updated');
            dispatch(itemsFetchData(url));
        }
    };
};

class ItemsContainer extends Component {

    componentDidMount() {
        this.props.fetchData('https://coregae.appspot.com/items');
    }

    render() {
        console.log('ItemsContainer render: ', this.props);
        const {items} = this.props;
        return <ItemsList items={items} />
    }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
export default Connected;