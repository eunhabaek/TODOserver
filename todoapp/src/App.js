import logo from './logo.svg';
import './App.css';

import React from 'react';
import Todo from './todo.jsx';

// import 할 때 내 마음대로 이름 지정 가능함
import Addtodo from './addtodo'; 

//중괄호 안에 있는건 이름 변경 불가
import {Paper,List, Container} from '@material-ui/core'; 

import { call } from './service/Apiservice';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={items:[]}
    //배열 객체 생성하여 state에 items 배열로 저장
    //this.state={items:[
    //  {id:0,title:"Hello",done:true},
    //  {id:1,title:"안녕",done:false},
    //  {id:2,title:"안녕하세요",done:true}
    //]};
  }

  //컴포넌트가 메모리 할당 후 출력 전 호출함수
  //데이터 가져오는 API 수행
  componentDidMount(){
    call("/todo","GET",null)
    .then((response)=>this.setState({items:response.list}))

    //console.log("컴포넌트가 메모리 할당 받음")
    //요청 옵션 생성
    //const requestoptions={
    //  method:"GET",
    //  headers:{"Content-Type":"application/json"}
    //};

    //fetch("http://localhost:8000/todo",requestoptions)
    //.then((response)=>response.json())
    //.then((response)=>{
    //  this.setState({items:response.list})
    //},
    //(error)=>{
    //  console.log("error")
    //})
  }

  //데이터 추가를 위한 함수
  //item 한개 받아서 items에 추가
  add=(item)=>{
    item.userid='eunha';
    call("/todo","POST",item)
    .then((response)=>this.setState({items:response.list}))
    //기존 items를 복제
    //const thisitems=this.state.items;
    
    //추가할 item 생성
    //item.id="ID-"+thisitems.length;
    //item.done=false;
    
    //복제본에 데이터 추가
    //thisitems.push(item);

    //items에 복제본 추가
    //this.setState({items:thisitems});
  }

  //데이터 삭제 함수
  delete=(item)=>{
    item.userid='eunha';
    call("/todo","DELETE",item)
    .then((response)=>this.setState({items:response.list}))


   // const thisitems=this.state.items;
    
    //thistiems에서 item 삭제 by id로 구별
    //const newitems=thisitems.filter((e)=>e.id!==item.id);

    //삭제 후 다시 대입하기
    //this.setState({items:newitems},()=>{
    //  console.log(item.id+"가 삭제되었습니다.")
   // })
  }
  
  //데이터 수정함수
  update=(item)=>{
    call("/todo","PUT",item)
    .then((response)=>this.setState({items:response.list}))
  }

  render(){
    //여러 데이터 출력 시 key 필요

    //자바스크립트 특별한 조건문 
    //조건&&실행문 -> 조건이 true일 때 실행문 수행
    var todoitems=this.state.items.length > 0 && (
      <Paper style={{margin:16}}>
        <List> {this.state.items.map((item,idx)=>(
          <Todo item={item} key={item.id} delete={this.delete}
           update={this.update}/>
        
        ))}
        </List>
      </Paper>
    )
    
    return (
    <div className='App1'>
      <Container maxWidth="md">
      <Addtodo add={this.add}/>
      {todoitems}
      </Container>

    </div>
  );
}}

export default App;
