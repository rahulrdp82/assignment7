import React from 'react';
import FileUpload from './FileUpload';
import TweetVisualization from './TweetVisualization';

function Dashboard({ data, setData }) {
  return (
    <div>
      <FileUpload setData={setData} />
      {data ? (
        <div>
         
          <TweetVisualization data={data} />
        </div>
      ) : (
        <p style={{ textAlign: 'left', marginTop: 20 }}>
          
        </p>
      )}
    </div>
  );
}

export default Dashboard;
