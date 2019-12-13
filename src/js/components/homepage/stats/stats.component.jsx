import React from 'react';
import styled from 'styled-components';

import AnimatedNumber from 'animated-number-react';

const StyledStatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px;
`;

const StyledWidgetContainer = styled.div`
  background: linear-gradient(
    0deg, ${props => props.theme.colors[props.bgColor]} 73%, 
    ${props => props.theme.colors[props.gradient]} 100%
  );
  color: ${props => props.theme.colors.white};
  border-radius: 10px;
  height: 70px;
  flex-grow: 1; 
  padding: 15px;
  margin: 15px;
  display: inline-block;
`;

const StyledTitlesContainer = styled.div`
  float: left;
`;

const StyledAnimatedNumberSpan = styled.div`
  font-size: 24px;
  float: right;
  font-weight: 900;
`;

const StyledWidgetTitle = styled.div`
    font-weight: 900;
    font-size: 14px;
`;
const StyledWidgetSubtitle = styled.div`
    font-size: 14px;
    opacity: 0.5;
`;

export const Stats = props => {
  const { contendersNearbyCount, contendersFightingInCountry, contendersGlobalCount } = props;

  return (
    <StyledStatsContainer>
      <StyledWidgetContainer bgColor='purplePink' gradient='purplePinkGradient'>
        <StyledTitlesContainer>
          <StyledWidgetTitle>Contenders</StyledWidgetTitle>
          <StyledWidgetSubtitle>Near your area</StyledWidgetSubtitle> 
        </StyledTitlesContainer>
        <StyledAnimatedNumberSpan>
          <AnimatedNumber
            value={contendersNearbyCount}
            duration={3000}
            formatValue={value => value.toFixed(0)}
          />
        </StyledAnimatedNumberSpan>
      </StyledWidgetContainer>
      <StyledWidgetContainer bgColor='lavender' gradient='lavenderGradient'>
        <StyledTitlesContainer>
          <StyledWidgetTitle>Contenders</StyledWidgetTitle>
          <StyledWidgetSubtitle>Fighting in your country</StyledWidgetSubtitle> 
        </StyledTitlesContainer>
        <StyledAnimatedNumberSpan>
          <AnimatedNumber
            value={contendersFightingInCountry}
            duration={3000}
            formatValue={value => value.toFixed(0)}
          />
        </StyledAnimatedNumberSpan>
      </StyledWidgetContainer>
      <StyledWidgetContainer bgColor='lightBlue' gradient='lightBlueGradient'>
        <StyledTitlesContainer>
          <StyledWidgetTitle>Contenders</StyledWidgetTitle>
          <StyledWidgetSubtitle>Global count</StyledWidgetSubtitle> 
        </StyledTitlesContainer>
        <StyledAnimatedNumberSpan>
          <AnimatedNumber
            value={contendersGlobalCount}
            duration={3000}
            formatValue={value => value.toFixed(0)}
          />
        </StyledAnimatedNumberSpan>
      </StyledWidgetContainer>
    </StyledStatsContainer>
  )
};

export default Stats;