//react.js 파일에서 export 한 객체를 React로 받아서 사용
//{이름}의 경우는 export 한 객체에서 이름만 받아서 사용
import React from "react";

import {
    ListItem,
    ListItemText,
    InputBase,
    Checkbox,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core';

//icon 가져오기
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';


class Todo extends React.Component{
    constructor(props){
        super(props);//상위 컴포넌트 데이터를 내 props에 저장
        //props는 읽기 전용이므로 수정하려면 state에 복사해야 함
        this.state={item:props.item,readOnly:true};
        //레이블 id랑 맞추면 checkbox 대신 label 선택 가능
        this.delete=props.delete;
        this.update=props.update;
        
    }

    //checkbox 활성화를 위한 readonly 수정 메서드
    offreadonly=(e)=>{
        //state 복사 안하고 바로 변경
        this.setState({readOnly:false})
    }

    //enter 입력시 readonly 수정 메서드
    enterkeyevent=(e)=>{
        if(e.key==="Enter"){
            this.setState({readOnly:true})
            //데이터 수정
            this.update(this.state.item);
        }
    }

    //input 내용 변경
    inputchange=(e)=>{
        const thisitem=this.state.item;
        thisitem.title=e.target.value;
        this.setState({item:thisitem});
        this.update(this.state.item);
    }

    //check box 눌렀을 때 -> 
    clickcheckbox=(e)=>{
        const thisitem=this.state.item;
        thisitem.done=!thisitem.done;
        this.setState({item:thisitem});
        this.update(this.state.item);
    }



    //삭제 아이콘 눌렀을 때 호출 될 메서드
    deletehandler=(e)=>{
        this.delete(this.state.item);
    } 

    render(){
        const item=this.state.item
        return(
            <ListItem>
                <Checkbox checked={item.done} onChange={this.clickcheckbox}/>
                <ListItemText>
                    <InputBase
                    inputProps={{"arial-label":"naked",readOnly:this.state.readOnly}}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                    onClick={this.offreadonly}
                    onKeyPress={this.enterkeyevent}
                    onChange={this.inputchange}
                    />
                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo" onClick={this.deletehandler}>
                        <DeleteOutlined/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}
export default Todo;