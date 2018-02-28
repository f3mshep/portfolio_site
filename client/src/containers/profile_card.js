import React from 'react';
import Me from '../img/me2.jpg'

const ProfileCard = props => (
  <div className="col-sm-6">
    <div className="team-member">
      <img className="mx-auto rounded-circle" src={Me} alt="" />
      <h4>{props.card.name}</h4>
      <p className="text-muted">{props.card.text}</p>
      <ul className="list-inline social-buttons">
        <li className="list-inline-item">
          <a href={props.card.twitter}>
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href={props.card.linkedin}>
            <i className="fa fa-github" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href={props.card.github}>
            <i className="fa fa-linkedin" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default ProfileCard