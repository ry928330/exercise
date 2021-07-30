/*
 * @Author: ryyyyy
 * @Date: 2021-05-08 10:02:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-08 14:37:35
 * @Description: Do not edit
 * @FilePath: /demo/src/class-func-compare/index.js
 */
import React , { useEffect , useState , useRef , useMemo  } from 'react'
function Index(){
    const [ number , setNumber ] = useState(0)
    const DivDemo = useMemo(() => <div> hello , i am useMemo </div>,[])
    const curRef  = useRef(null)
    useEffect(()=>{
       console.log(curRef.current)
    },[])
    useEffect(() => {
        console.log(1)
    },[])
    useEffect(() => {
        console.log(2)
    },[])
    return <div ref={ curRef } >
        hello,world { number } 
        { DivDemo }
        <button onClick={() => setNumber(number+1) } >number++</button>
     </div>
}

export default Index;