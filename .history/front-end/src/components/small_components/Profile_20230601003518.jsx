import React, { useContext } from 'react'
import { LoginContext } from '../../config/LoginContext'
import '../../css/profile.css'
import $ from 'jquery'
export default function Profile() {
    $(function () {
        $('.profile-page').css('height', `calc(102vh  - ${$('.nb').offset().top + $('.nb').height()}px)`) 
      })
      
    const {userData, setUserData} = useContext(LoginContext)
  return (
    <div className='profile-page card '>
        <div className='card-header pe-5 d-flex justify-content-center'>
        <span style={{translate:'0 50%' , background : userData.admin? 'var(--bs-success)':'#d18343'} }  className="profile-pic text-uppercase"> {userData.firstname.charAt(0) +  userData.lastname.charAt(0)} </span>
        </div>
        <div className='card-body profile-info d-flex justify-content-center'>
            <table style={{height:'15em'}} className='table w-50 table-borderless text-center'>
                <tbody>
                    <tr key="1">
                        <td>First name </td>
                        <td>{userData.firstname}</td>
                    </tr>
                    <tr key="2">
                        <td>Last name </td>
                        <td>{userData.lastname}</td>
                    </tr>
                    <tr key="3">
                        <td>Email </td>
                        <td>{userData.email}</td>
                    </tr>
                    <tr key="4">
                        <td>Address </td>
                        <td>{userData.address}</td>
                    </tr>
                    <tr key="5">
                        <td>Phone </td>
                        <td>{userData.phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
