import React, { Component } from 'react';
import { addItemAction, deleteItemAction, getInputChangeAction } from './store/actionCreators';

import { connect } from 'react-redux';
import store from './store';

class TodoList extends Component {
 render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue} />
                    <button onClick={this.props.handleClick}>提交</button>
                </div>
                <ul>
                    {this.props.list.map((item, index) => {
                        return (
                            <li onClick={this.props.handleDelete} key={index}>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
    handleInputChange(e) {
        console.log(e.target.value);
    }
}

//data
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list,
    };
};

// store.dispatch => props
//function
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            // dispatch()
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
            // console.log(e.target.value);
        },
        handleClick() {
            const action = addItemAction();
            dispatch(action);
        },
        handleDelete(index) {
            const action = deleteItemAction(index);
            dispatch(action);
        },
    };
};

//connect 返回容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
