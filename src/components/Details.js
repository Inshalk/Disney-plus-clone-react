import React from 'react'
import styled from 'styled-components'
function Details() {
  return (
    <Container>
      <Background>
        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg'/>
      </Background>
      <ImageTitle>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png"/>
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
        <img src="/images/play-icon-white.png"/>
          <span>TARILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="images/group-icon.png"/>
        </GroupWatchButton>
      </Controls>
      <SubTitle>
      2006 • 1h 19m • Family, Comedy, Kids

      </SubTitle>
      <Description>
      Garfield is adopted by a greedy Lord with nefarious plans to open up his estate as a hunting ground.
      </Description>
    </Container>
  )
}

export default Details
const Container= styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position:relative;
`
const Background = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
left:0;
z-index:-1;
opacity:0.8;

img{
  width:100%;
  height:100%;
  object-fit:cover;
}
`
const ImageTitle = styled.div`
height:30vh;
min-height:170px;
width:35vw;
min-width:200px;
margin-top:60px;

img{
width:100%;
height:100%;
object-fit:contain;
}

`
const Controls=styled.div`
display:flex;
align-items:center;
`
const PlayButton=styled.button`
border-radius: 4px;
font-size: 15px;
  margin-right: 22px;
  display: flex;
  padding: 0px 24px;
  align-items: center;
  height: 56px;
  cursor: pointer;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

&:hover{
  background:rgb(198,198,198);
}

`
const TrailerButton=styled(PlayButton)`
background:rgba(0,0,0,0.3);
border:1px solid rgb (249, 249, 249);
color: rgb(249,249,249);
text-transform:uppercase;
`
const AddButton =styled.button`
margin-right:16px;
width:44px;
height:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border: 2px solid white;
background-color: rgba(0,0,0,0.6);
cursor:pointer;
span{
  font-size:30px;
  color: white;
}
`
const GroupWatchButton = styled(AddButton)`
background:rgb(0,0,0);
`
const SubTitle=styled.div`
color:rgb(249,249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;

`
const Description =styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color:rgb(249,249,249);
max-width:760px;
`
