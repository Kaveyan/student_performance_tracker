import React from 'react'
import Menuadmin from './Menuadmin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar} from '@fortawesome/free-solid-svg-icons';
export default function Adminhome() {
  return (
    <div className='dash'>
       <div className='dash-menu'>
       <Menuadmin/>
       </div>
  
      <div className='dash-main-admin'>
        <div className='option'>
          <div className="up"><p>Language</p></div>
          <div className="up"><p>Achivement</p></div>
          <div className="up"><p>Certificate</p></div>
          <div className="up"><p>Project</p></div>
          <div className="up"><p>Ps</p></div>
          <div className="up"><p>Event</p></div>
        </div>
      <h2 >Ranking <FontAwesomeIcon icon={faRankingStar} /></h2>
      <div className='box'>
        <div className='box-content'>
        <h3><FontAwesomeIcon icon={faRankingStar} />kaveyan</h3>
        <p>CSE</p>
        <p>3rd year</p>
        <p>45</p>
        </div>
      </div>
      <div className='box'>
        <div className='box-content'>
        <h3><FontAwesomeIcon icon={faRankingStar} />Mathan</h3>
        <p>CSE</p>
        <p>3rd year</p>
        <p>35</p>
        </div>
      </div>
      </div>
    </div>
  )
}
