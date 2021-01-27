import { Button, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import { addItemAction, deleteItemAction, getInputChangeAction } from './store/actionCreators';

import Checkbox from '@material-ui/core/Checkbox';
// import CommentIcon from '@material-ui/icons/Comment';
import IconButton from '@material-ui/core/IconButton';
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import store from './store';

class TodoList extends Component {
    render() {
        // const classes = useStyles();
        return (
            <div>
                <div>
                    <TextField
                        // className="mt-4 mb-16"
                        variant="outlined"
                        value={this.props.inputValue}
                        onChange={this.props.changeInputValue}
                        style={{
                            marginLeft: '10px',
                            marginRight: '10px',
                            height: '10px',
                            width: '300px',
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.props.handleClick}
                        style={{
                            marginLeft: '10px',
                            marginRight: '10px',
                            height: '55px',
                            width: '100px',
                        }}
                    >
                        提交
                    </Button>
                </div>
                <List>
                    {this.props.list.map((item, index) => {
                        return (
                            <ListItem onClick={this.props.handleDelete} key={index}>
                                {item}
                            </ListItem>
                        );
                    })}
                </List>
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
