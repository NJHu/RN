import React from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

const TodoListUi = (props) => {
    return (<div>
        <div>
            <Input placeholder='jspang' style={{width: '250px', marginRight: '10px'}}
                   value={props.inputValue}
                   onChange={props.changeInputValue}/>
            <Button type="primary"
                    onClick={props.clickBtn}>增加</Button>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item, index) => {
                    return <List.Item onClick={() => {
                        props.deleteItem(index)
                    }} key={index + item}>{item}</List.Item>;
                }}
            />
        </div>
    </div>);
};

export default TodoListUi;