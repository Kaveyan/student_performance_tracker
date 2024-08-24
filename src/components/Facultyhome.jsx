import React, { useEffect, useState } from 'react';
import Menufaculty from './Menufaculty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function Facultyhome() {
  const [domainData, setDomainData] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        
        // Fetch domain-specific data
        const response = await fetch('http://localhost:8000/upload/domain-data', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        // Ensure response is JSON
        if (response.ok && response.headers.get('content-type').includes('application/json')) {
          const data = await response.json();
          console.log('Fetched data:', data);
          setDomainData(data);
        } else {
          console.error('Unexpected response:', await response.text());
        }

        // Fetch user data
        const userResponse = await fetch('http://localhost:8000/upload/domain-data', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (userResponse.ok && userResponse.headers.get('content-type').includes('application/json')) {
          const userData = await userResponse.json();
          console.log('Fetched user data:', userData);
          setUserData(userData);
        } else {
          console.error('Unexpected response:', await userResponse.text());
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='dash'>
      <div className='dash-menu'>
        <Menufaculty />
      </div>
      <div className='dash-main'>
        <h2>Your Domain Work...</h2>
        {domainData.length > 0 ? (
          domainData.map((item) => (
            <div className="work" key={item._id}>
              <h2 className="title">{item.eventname || item.title}</h2>
              <p className='des'>{item.proof || item.description}</p>
              <p className='proof'>Proof: <FontAwesomeIcon icon={faLink} /></p>
              <p className='user-info'>
                Uploaded by: {item.userId.firstName} (Roll Number: {item.userId.roleNumber})
              </p>
              <button>Approve</button>
              <button>Revoke</button>
            </div>
          ))
        ) : (
          <p>No data available for your domain.</p>
        )}
      </div>
    </div>
  );
}
