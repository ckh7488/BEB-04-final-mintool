import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { BaseSyntheticEvent, useState } from 'react'
import styles from '../styles/Home.module.css'
import ImageLoader from '../../components/ImageLoader/ImageLoader'
import { Button, CircularProgress, TextField } from '@mui/material'

type dataObject = {
  [num: number]: {
    AttrName: string,
    values: Array<string>,
    fileArr: Array<any>
  }
  description?: string,
  external_url?: string,
  projectName?: string
}


const MyImg: Function = (mySrc: Uint8Array) => {
  return URL.createObjectURL(
    new Blob([mySrc.buffer], { type: 'image/png' })
  )

}

const CreateNFT: NextPage = () => {
  const [attrTabArr, setAttrTabArr] = useState<Array<any>>([0, 1]);
  const [dataObj, setDataObj] = useState<dataObject>({});
  const [projectName, setProjectName] = useState<string>('');
  const [descriptionValue, setDescriptionValue] = useState<string>('');
  const [external_urlValue, setExternal_urlValue] = useState<string>('');
  const [isWaiting, setIsWainting] = useState<Boolean>(false);

  const handleTextFieldChange = (e: BaseSyntheticEvent, handlesetFuncion: any) => {
    handlesetFuncion(e.target.value);
  }

  const handleSetDataObj = (key: number, obj: Object) => {
    const myObj: { [key: number]: any } = { ...dataObj };
    myObj[key] = obj;
    setDataObj(myObj);
  }

  const handleDel = (keyVal: number) => {
    const newAttrTabArr = attrTabArr.filter(e => e !== keyVal);
    setAttrTabArr(newAttrTabArr);
  }

  const handleSend = () => {

    setIsWainting(true);
    dataObj.description = descriptionValue;
    dataObj.external_url = external_urlValue;
    dataObj.projectName = projectName;
    if(dataObj.description?.length + dataObj.external_url?.length + dataObj.projectName?.length  < 3) { alert("textinput is not right"); setIsWainting(false); return; }
    // console.log("total numArr : ", Object.keys(dataObj));

    let isRight = true;
    Object.keys(dataObj).slice(0, -3).forEach(k=>{
      const kNumber = parseInt(k);
      if(dataObj[kNumber].fileArr.length <1) isRight=false;
      if(dataObj[kNumber].fileArr.length !== dataObj[kNumber].values.length) isRight=false;
      if(dataObj[kNumber].AttrName === undefined) isRight=false;
    })
    if(!isRight) { alert("Image input is not right"); setIsWainting(false); return; }

    const promiseArr = Object.keys(dataObj).slice(0, -3).map(myKey => {

      const objKey = parseInt(myKey);
      const a: Array<Promise<Uint8Array>> = dataObj[objKey].fileArr.map(file => {
        if (file.arrayBuffer) return (file as File).arrayBuffer().then(ab => new Uint8Array(ab));
        return file;
      })
      console.log("a : ", a);
      return Promise.all(a)
        .then((x: Array<Uint8Array>) => {

          dataObj[objKey].fileArr = x;
        })
    })
    console.log("promiseArr : ", promiseArr);

    Promise.all(promiseArr)
      // .then(x=> {dataObj.description = descriptionValue; dataObj.external_url=external_urlValue; return 1;} )
      .then(t => fetch('/api/createnft', { method: "POST", body: JSON.stringify(dataObj) }).then(w=>{setIsWainting(false); alert("NFT creation done!")}) )
  }




  return (
    <div className='container'>
      <div>
        <div style={{display : 'flex', justifyContent: 'center', margin : '10px' }}>
            <TextField label="ProjectName" onChange={(e)=>{ handleTextFieldChange(e, setProjectName)}} value={projectName} ></TextField>
        </div>
        <div style={{display : 'flex', justifyContent: 'center', margin : '10px'}}>
          <TextField label="description" multiline onChange={(e) => { handleTextFieldChange(e, setDescriptionValue) }} value={descriptionValue}></TextField>
          <TextField label="external_url" multiline onChange={(e) => { handleTextFieldChange(e, setExternal_urlValue) }} value={external_urlValue}></TextField>
        </div>
        <br /><br /><br /><br />

        <span>Bottom layer Img</span>
        <ImageLoader myKey={0} handleSetDataObj={handleSetDataObj}></ImageLoader>
      </div>
      <br /><br /><br />
      <Button variant="contained" onClick={() => { setAttrTabArr([...attrTabArr, attrTabArr.slice(-1)[0] + 1]) }}>addTabs</Button>
      <br />
      {
        attrTabArr.slice(1).map(e => {
          return (
            <div key={e}>
              <span>attr Img</span>
              <ImageLoader handleDel={handleDel} myKey={e} handleSetDataObj={handleSetDataObj}></ImageLoader>
            </div>
          )
        })
      }

      <br /><br />
      <Button variant="contained" onClick={handleSend}>send</Button>
      {isWaiting ? <CircularProgress></CircularProgress> : <></>}
      {/* <button onClick={() => { console.log(dataObj) }}>log dataObj</button> */}
      {/* <button onClick={() => { console.log(attrTabArr)}}>tabs</button> */}
    </div>
  )
}

export default CreateNFT
