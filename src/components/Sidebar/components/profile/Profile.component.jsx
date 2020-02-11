import React from 'react';
import './Profile.style.scss';
import { ReactComponent as LogoGSWMinimal } from '../../../../assets/logo-gsw-minimal.svg';

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile__avatar">
        <LogoGSWMinimal className="avatar__image" />
      </div>
      <div className="profile__data">
        <div className="data__company">GSW Solutions</div>
        <div className="data__employee">Adam Henriqueeeee</div>
      </div>
    </section>
  );
}
