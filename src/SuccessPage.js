import React from 'react';
import { useLocation } from 'react-router-dom';

function SuccessPage() {
  const location = useLocation();
  const data = location.state?.data;

  return (
    <div>
      <h1>Successfully Submitted The following values</h1>
      <ul>
        <li>Search Term</li>
        <li>Cards selected in first step with given text reasons</li>
        <li>Cards selected in second step with given text reasons</li>
        <li>Final text</li>
      </ul>
    </div>
  );
}

export default SuccessPage;
