export const metadata={title:"The Epistemic Mirror — Newsletter"};
export default function NewsletterPage(){
  return(<main><div style={{maxWidth:680,margin:"0 auto",padding:"120px 24px 80px"}}>
    <div style={{textAlign:"center",marginBottom:48}}>
      <span className="overline">Newsletter</span>
      <h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontStyle:"italic",fontSize:"clamp(2rem,5vw,3.5rem)",marginTop:16}}>The Epistemic Mirror</h1>
      <p style={{marginTop:16,color:"#7a7a88",lineHeight:1.7}}>Weekly philosophical analysis of AI developments — what machines mean, what they risk, and what we owe.</p>
      <div style={{display:"flex",gap:12,maxWidth:380,margin:"28px auto 0",justifyContent:"center"}}>
        <input type="email" placeholder="your@email.com" className="input" style={{flex:1}}/>
        <button className="btn-primary" style={{whiteSpace:"nowrap",padding:"12px 24px"}}>Subscribe</button>
      </div>
      <p style={{fontSize:12,color:"#3a3a45",marginTop:10}}>Free · Unsubscribe anytime</p>
    </div>
    <h2 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.4rem",marginBottom:20}}>What you get</h2>
    {[{c:"#ef5044",f:"EVERY TUESDAY",t:"Weekly Essay",d:"1,500–2,000 words of philosophical analysis."},{c:"#e0ab4e",f:"FIRST FRIDAY",t:"Monthly Deep Dive",d:"3,000–4,000 words. Academic rigor for general readers."},{c:"#6b8aed",f:"QUARTERLY",t:"Research Updates",d:"New papers, talks, early access to preprints."}].map((x,i)=>
      <div key={i} style={{marginBottom:24,padding:24,borderRadius:16,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.04)"}}>
        <p style={{color:x.c,fontSize:13,fontWeight:600,marginBottom:6}}>{x.f}</p>
        <p style={{color:"#f0f0f3",fontSize:"1.05rem",fontWeight:500,marginBottom:6}}>{x.t}</p>
        <p style={{color:"#7a7a88",fontSize:14,lineHeight:1.6}}>{x.d}</p>
      </div>
    )}
  </div></main>);
}
