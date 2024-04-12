import React from 'react';
import {Link} from "react-router-dom";

function ErrorElement() {
  return (
    <div className="flex flex-col gap-2">
        <div>Error 404</div>
        <Link to='/'>Go back to Home</Link>
    </div>
  )
}

export default ErrorElement