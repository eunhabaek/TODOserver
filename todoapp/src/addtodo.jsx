import React from "react";

import { TextField, Paper, Button, Grid } from "@material-ui/core";

//한 줄의 텍스트를 입력받아서 버튼 누르면 추가하는 컴포넌트
class Addtodo extends React.Component{
    constructor(props){
        super(props);
        //입력 내용 저장할 state 생성
        this.state={item:{title:""}} 

        //app.js에서 넘겨받은 데이터를 변수에 대입
        this.add=props.add;
    }

    //입력내용 변경 시 title 수정
    inputchange=(e)=>{
        //item 복제
        const thisitem=this.state.item;
        
        //item값 수정
        thisitem.title=e.target.value;
        
        //수정된 객체 다시 대입
        this.setState({item:thisitem});
    }

    //add title with click button
    buttonadd=(e)=>{
        this.add(this.state.item);//데이터 추가
        this.setState({item:{title:""}});//title clear, 입력상자도 clear
    } 

    //add title with enter
    enteradd=(e)=>{
        if (e.key==="Enter"){
        this.buttonadd();
    }}


    render(){
        return(
            <Paper style={{margin:16, padding:16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{padding:16}}>
                        <TextField placeholder="추가 할 제목을 입력하세요!" fullWidth 
                        value={this.state.item.title} 
                        onChange={this.inputchange} 
                        onKeyPress={this.enteradd}
                        />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button fullWidth color="secondary" variant="outlined"
                         onClick={this.buttonadd}>
                            <h3>+ADD</h3>
                        </Button>

                    </Grid>
                </Grid>

            </Paper>
        )
    }
}
export default Addtodo;