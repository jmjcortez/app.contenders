import React, { Component } from "react";
import styled from 'styled-components';

import { defaultTheme } from '../../constants/theme';


export const Homepage = props => {
  // render stats
  // render nav bar
  // render recommendation

  const { contendersNearbyCount } = props;

  return (
    <div>
      <h1>Stats</h1>
      <div>Contenders nearby: <span>{ contendersNearbyCount }</span></div>
      <div>Contenders Fighting in your city: <span>{ contendersFightingInCity }</span></div>
      <div>Contenders Fighting in your country: <span>{ contendersFightingInCountry }</span></div>
      <div>Global contenders count: <span>{ contendersGlobalCount }</span></div>
    </div>
  )
};

export default Homepage;