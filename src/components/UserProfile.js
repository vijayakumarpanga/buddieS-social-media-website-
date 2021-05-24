import userEvent from '@testing-library/user-event'
import React,{Component} from 'react'
import { connect } from 'react-redux'
import "../css/userProfile.css"

class UserProfile extends Component {
    constructor(props){
        super()
        this.state =
         {
            name : props.auth.user.name,
            email : '',
            newPassword: '',
            confirmPassword :'',
            editProfileMode: false
        }
    }
    handleOnChange=(fieldname,value)=>{
     this.setState({[fieldname]:value})
    }
    render(){
        const {user}=this.props.auth
        const {editProfileMode,name,email}=this.state
        console.log("Inside profile render",this.state)
        console.log("Inside profile render",user)
        return(
        <div className="settings">
            
            <div className = "img-container">
            <img
            src="https://image.flaticon.com/icons/png/128/848/848043.png"
            alt="user-dp"
            id="user-dp"
          ></img>
          </div>
          <div className="field"> 
                <div className="field-label">Email</div>
                <div className="field-value">{user.email}</div>
          </div>
          <div className="field"> 
                <div className="field-label">Name</div>
                {editProfileMode?(<input type='text'
                onChange={(e)=>this.handleOnChange('name', e.target.value)}
                ></input>):(<div className="field-value">{user.name}</div> )}
          </div>
         
          {editProfileMode &&
          (<div className="field"> 
                <div className="field-label">New Password</div>
                <input type='password'
               
                onChange={(e)=>this.handleOnChange('newPassword',e.target.value)}></input>
                
          </div>) }
          {editProfileMode &&
          (<div className="field"> 
                <div className="field-label">Confirm Password</div>
                <input type='password'
                value={this.state.confirmPassword}
                onChange={(e)=>this.handleOnChange('confirmPassword',e.target.value)}></input>
                
          </div>) }
          <div className="btn-grp">
                
                    {editProfileMode ?
                    <button  className='save-btn'>Save</button>:
                    <button className='edit-btn' 
                    onClick={()=>this.handleOnChange('editProfileMode',true)}>
                    Edit Profile</button>
                    }
              { editProfileMode && <div className="go-back" 
               onClick={()=>this.handleOnChange('editProfileMode',false)}>
                 Go back </div> }
          </div>
        </div>
         ) }
}
const mapPropsToState=(state)=>{
    return{ auth : state.auth}
}
export default connect(mapPropsToState)(UserProfile)