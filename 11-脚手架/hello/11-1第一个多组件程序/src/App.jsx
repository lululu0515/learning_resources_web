//创建外壳组件APP
import React,{Component} from 'react'
import Hello from './component/Hello/hello'
import Welcom from './component/Welcom/welcom'
//创建并暴露APP组件
export default class App extends Component{
    render(){
        return (
            <div>
                <Hello/>
                <Welcom/>
            </div>
        )
    }
}
