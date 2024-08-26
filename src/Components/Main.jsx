import React, { useState } from 'react'
import '../Components/Main.css'
import { Data } from '../data'
export const Main = () => {
    const [data, setData] = useState(Data)
    return (
        <>
            <div className='main-container'>
                <h1>Monthly Expenses</h1>
                <div className='graph-cont'>
                    {console.log(data)}
                    {
                        data.map((items) => {
                            return (
                                <div className='resuse-cont' style={{ display: 'inline-block',marginLeft:'20px',position:'relative',top:'100px' }}>
                                    <div style={{marginLeft:'5px'}}>
                                        <div>
                                            <h5>{items.totalExpense}</h5>
                                        </div>
                                        <div style={{ width: '10px', height: "150px",marginLeft:'10px' }}>
                                              <div style={{position:'absolute',bottom:'15px',width:'10px',height:items.trackline,backgroundColor:'red'}}>

                                              </div>
                                        </div>
                                        <div>
                                            <h5>{items.month}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}
{/* <div>
<div className="monthly-tracker">
    <div>
        <p>Jannuary</p>
    </div>
    <div className='jan-graph'></div>
</div>
<div className="monthly-tracker">
    <div>
        <p>February</p>
    </div>
    <div className='feb-graph'></div>
</div>
<div className="monthly-tracker">
    <div>
        <p>March</p>
    </div>
    <div className='mar-graph'></div>
</div>
<div className="monthly-tracker">
    <div>
        <p>April</p>
    </div>
    <div className='jan-graph'></div>
</div>
<div className="monthly-tracker">
    <div>
        <p>May</p>
    </div>
    <div className='jan-graph'></div>
</div>
<div className="monthly-tracker">
    <div>
        <p>Jun</p>
    </div>
    <div className='jan-graph'></div>
</div>
<div className="monthly-tracker">
    <div>
        <p>July</p>
    </div>
    <div className='jan-graph'></div>
</div>
<div className="monthly-tracker">
    <div>
        <p>August</p>
    </div>
    <div className='jan-graph'></div>
</div>
<div className="monthly-tracker">
    <div>
        <p>September</p>
    </div>
    <div className='jan-graph'></div>
</div>
<div className="monthly-tracker">
    <div>
        <p>October</p>
    </div>
    <div className='jan-graph'></div>
</div>
<div className="monthly-tracker">
    <div>
        <p>November</p>
    </div>
    <div className='jan-graph'></div>
</div>
<div className="monthly-tracker">
    <div>
        <p>December</p>
    </div>
    <div className='jan-graph'></div>
</div>
</div> */}