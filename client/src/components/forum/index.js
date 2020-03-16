import React, { Component } from "react";

function Forum(props) {
    return (
       
            <div >
                <div >
                    Topics:
                    <input type="text"/>
                    <br></br>
                    Question:
                    <input type="text"/>
                
                    <br></br>
                    Comment:
                    
                    <textarea col="100" row="100" type="text"/>
                    <button>
                        Submit:
                    </button>
                </div>
            </div>
       

    )
}
export default Forum;