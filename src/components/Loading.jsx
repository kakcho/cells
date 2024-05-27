import React from 'react'
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className="content-center">
      <ReactLoading type="spinningBubbles" color="#007bff" height={100} width={100} />
    </div>
  )
}

export default Loading