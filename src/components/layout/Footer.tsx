"use client";

export default function Footer(){
  return(
    <footer style={{borderTop:"1px solid rgba(255,255,255,0.04)"}}>
      <div style={{maxWidth:1152,margin:"0 auto",padding:"64px 24px 24px"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:40,marginBottom:48}}>
          <div>
            <span style={{fontFamily:"'Instrument Serif',Georgia,serif",fontStyle:"italic",fontSize:"1.15rem",color:"#f0f0f3"}}>traceremove</span>
            <p style={{fontSize:13,color:"#5a5a68",marginTop:12,lineHeight:1.6,maxWidth:200}}>Philosophical research on what AI means, risks, and owes.</p>
          </div>
          <div>
            <h4 style={{fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.15em",color:"#4a4a58",marginBottom:16}}>Research</h4>
            <FL href="/research">All Papers</FL><FL href="/articles">Articles</FL><FL href="https://philarchive.org/s/artur%20ziganshin" ext>PhilArchive</FL>
          </div>
          <div>
            <h4 style={{fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.15em",color:"#4a4a58",marginBottom:16}}>More</h4>
            <FL href="/cv">CV</FL><FL href="/newsletter">Newsletter</FL><FL href="/services">Services</FL>
          </div>
          <div>
            <h4 style={{fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.15em",color:"#4a4a58",marginBottom:16}}>Connect</h4>
            <FL href="mailto:artur@traceremove.dev">Email</FL><FL href="https://linkedin.com/in/artur-ziganshin" ext>LinkedIn</FL><FL href="/contact">Contact Form</FL>
          </div>
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,0.03)",paddingTop:20,display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:8}}>
          <span style={{fontSize:12,color:"#3a3a45"}}>© 2026 Artur Ziganshin</span>
          <span style={{fontSize:12,color:"#3a3a45"}}>Master of Philosophy · PhD of Philosophy</span>
        </div>
      </div>
    </footer>
  );
}
function FL({href,children,ext}:{href:string;children:React.ReactNode;ext?:boolean}){
  return<a href={href} target={ext?"_blank":undefined} rel={ext?"noopener noreferrer":undefined}
    style={{display:"block",fontSize:13,color:"#6a6a78",textDecoration:"none",padding:"4px 0",transition:"color 0.2s"}}
    onMouseEnter={e=>{e.currentTarget.style.color="#f0f0f3"}} onMouseLeave={e=>{e.currentTarget.style.color="#6a6a78"}}>{children}</a>;
}
