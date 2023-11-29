import { Col, Image, Row } from "antd"
import './userInformation.css'
import { useEffect, useState } from "react";
const UserInformation = (user) => {

   return (
      <>
         <div className="frame">
            <h1 className="infor"><marquee style={{width:"50%"}}>Thông tin người dùng</marquee></h1>
            <div className="usern">
               <h2 className="hintname">Tên người dùng</h2>
               <h2 className="name">{user.user.name}</h2>
            </div>
            <div className="usere">
               <h2 className="hintemail">Email</h2>
               <h2 className="email">{user.user.email}</h2>
            </div>
            <div className="userp">
               <h2 className="hintphone">Số điện thoại</h2>
               <h2 className="phone">{user.user.phone}</h2>
            </div>
         </div>
      </>
   )
}
export default UserInformation;