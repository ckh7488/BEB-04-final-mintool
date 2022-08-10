import { Button, Typography } from '@mui/material'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {

  // const [myVid, setMyVid] = useState();

  // useEffect(()=>{
  //   fetch('/api/tutvids').then(console.log)
  // },[])

  return (
    <div className="container">

      <main >
        <div style={{ fontFamily: "RixInooAriDuriR", fontSize: "50px" }}>Mintool 사이트에 오신 걸 환영합니다!</div>
        <div>where : 저희 사이트에서는</div>
        <div>when : 언제, 어디서나</div>
        <div>Who : 코딩지식이 없는 아티스트 또는 기업이</div>
        <div>What : NFT를 만드는 작업(컨트랙트 만들기, 속성값을 가진 이미지 관리)과 Minting 작업(nft를 판매하는 행위)을 </div>
        <div>Why : 코딩지식이 없이도 쉽게 만들 수 있도록 하기 위해 제작하였습니다.</div>
        <div>How? : </div>
        <div>Demo 동영상을 보시면서, Demo Image를 직접 가지고 따라서 해보시면 금방 이해하실 수 있습니다.</div>
        <div style={{maxWidth : "20vw"}}>
          <video autoPlay={true} muted loop={true} style={{maxWidth : "40vw"}}>
            <source src="/api/tutvids" type="video/mp4"></source>
          </video>
            <Button href='api/demoImg' download>Download Demo Images</Button>
        </div>
      </main>
    </div>
  )
}


