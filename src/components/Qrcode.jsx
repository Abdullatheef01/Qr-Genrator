import { useState } from "react"
import "./Qrcode.css"
export const Qrcode = () => {
const [image , imgstate]=useState("")
const [loading,stateloading]=useState(false)
const [text,statetext]=useState("")
const[size,statesize]=useState("")
async function genrate(){
try{
const url= `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${decodeURIComponent(text)}`
imgstate(url)
stateloading(true)
}
catch (error){
console.error("error is occuring  QR genrating ",(error))
}
finally{
  stateloading(false)
}
}
function Download(){
  fetch(image)
  .then((response)=> response.blob())
  .then((blob)=>{
    const link= document.createElement("a")
    link.href=URL.createObjectURL(blob)
    link.download="Qr-code.jpg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } ).catch((error)=>{console.log("Error occuring",error )})
}
function condition(){
if (!text || !size){
  alert("please enter the data")
}
}
function refresh(){
  window.location.reload();
}
  return (
 <div className="qr-container">
  <h1>QR GENRATOR <button className="refresh" onClick={()=>refresh()}>⟳</button></h1>
 {image && <img src={image} className="qr-img"/>}
{ loading &&<p>Wait for an QR Genrating...</p>}
  <div className="btwn">
    <label htmlFor="qr-link">Create the Qr Code</label>
    <input type="text" placeholder="Type / Paste link" id="qr-link" value={
      text} onChange={(e)=>statetext(e.target.value)}  />
    <label htmlFor="qr-size">Default 150px</label>
    <input type="text" placeholder="image range 150" id="qr-size" value={size} onChange={(e)=>statesize(e.target.value)} />

    <div className="btn"> 
      <button className="primary-btn" disabled={loading || !text || !size} onClick={()=>genrate()}>Genrate</button>
     <button className="secondary-btn" disabled={!text || !size} onClick={Download}>Download</button>
    </div>
    
  </div>
 </div>
  )
}
export default Qrcode