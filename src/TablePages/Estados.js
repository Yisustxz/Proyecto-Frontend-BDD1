import React, { useState } from "react";
import SideBar from './Components/SideBar';

export default function Estados(){

    return(
        <div className="flex h-screen">
      <SideBar/>
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold">Estados</h1>
      </div>
    </div>
    );
}