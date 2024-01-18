import React from 'react' 
export default function ButtonMain(props) {
  var filledStyle = {
    background:'#982727',
    paddingBlock:'.8em',
    fontSize:'1.05em',
    textTransform:'capitalize',
    color:'white'
  }
  var strokedStyle = {
    color:'#982727',
    border: '1px solid #982727',
    boxShadow:'inset -1px -3px 0 #982727ee', 
    fontWeight:'620',
    fontSize:'1.05em',
    textTransform:'capitalize',
    paddingBlock:'.8em'
  }
  return (
    <button type={props.btnType==='1'?'submit':'button'} className='btnMain btn ps-4' style={props.filled==='1'?filledStyle:strokedStyle}>
        {props.btnContent}
        <i className='fa fa-angle-right px-4 opacity-75'></i>
    </button>
  )
}
