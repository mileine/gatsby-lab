import styled from "styled-components"

export const ThemeButtonWrapper = styled.div`
  height: 100px;
  width: 200px;
  position: relative;
  border-radius: 20px;
  border: 1px solid var(--background);
  margin: 0 auto 20px auto;
  background-image: linear-gradient(aqua, skyblue);
  cursor: pointer;
  &.toggle.night {
    background-image: linear-gradient(midnightblue, rebeccapurple);
  }
` 

export const ThemeButtonNotch = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: yellow;
  position: absolute;
  top: 15px;
  left: 15px;
  box-shadow: 0 0 5px yellow;
  z-index: 1;
  transition: all 0.3s ease;
  &.notch.night {
    background: whitesmoke;
    box-shadow: 0 0 5px whitesmoke;
    transform: translate(100px, 0);
  }
`

export const ThemeButtonNotchCrater = styled.div`
  background: burlywood;
  border-radius: 50%;
  position: absolute;
  opacity: 0;
  box-shadow: 0 5px 5px rgba(0,0,0,0.4) inset;
  &:first-child{
    left: 5px;
    top: 15px;
    height: 15px;
    width: 20px;
    transform: rotate(-45deg);
  }
  &:last-child{
    right: 10px;
    top: 10px;
    height: 15px;
    width: 25px;
    transform: rotate(45deg);
  }
  &.night.crater:first-child,
  &.night.crater:last-child
  {
    opacity: .4;
  }
`

export const ThemeButtonShapeWrapper = styled.div`

`

export const ThemeButtonShape = styled.div`
  position: absolute;
  background: whitesmoke;
  border-radius: 50%;
  transition: all 0.3s ease;
  opacity: .8;
  &.shape.sm {
    height: 5px;
    width: 50px;
    top: 50%;
    left: 60%;
  }
  &.shape.md {
    height: 10px;
    width: 75px;
    top: 25%;
    left: 25%;
    z-index: 2;
  }
  &.shape.lg {
    height: 15px;
    width: 100px;
    bottom: 20px;
    left: 25%;
  }
  &.night.shape {
    background: lightgray;
    box-shadow: 0 0 10px 2px violet;
    &.sm {
      height: 5px;
      width: 5px;
      transform: translate(-40px, 0);
    }
    &.sm:first-of-type {
      transform: translate(-80px, -10px);
    }
    &.md {
      height: 10px;
      width: 10px;
      transform: translate(10px, 0);
    }
    &.lg {
      height: 15px;
      width: 15px;
      transform: translate(-10px, 0);
    }
  }
`