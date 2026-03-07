export const metadata={title:"Philosophy Chat"};
export default function ChatPage(){
  return(<main><div style={{maxWidth:780,margin:"0 auto",padding:"120px 24px 80px"}}>
    <span className="overline">AI Assistant</span>
    <h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"clamp(1.8rem,4vw,2.5rem)",marginTop:12}}>Philosophy Chat</h1>
    <p style={{color:"#7a7a88",marginTop:8,marginBottom:32}}>An AI assistant grounded in philosophical research. Coming soon.</p>
    <div style={{padding:40,borderRadius:20,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",textAlign:"center"}}>
      <p style={{color:"#5a5a68"}}>The philosophy chat is being prepared. Check back soon.</p>
    </div>
  </div></main>);
}
