import React from 'react'
const style = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '2rem'
}
export const Loader = () => (
  <div style={style}> 
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-blue-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  </div>
)