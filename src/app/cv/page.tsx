export const metadata={title:"Curriculum Vitae"};
export default function CVPage(){
  const papers=["Epistemic Risk Surfaces in Large Language Models","The Grounding Problem in Neural Language Models","Ethical Architecture: Design Principles for Normative AI","Human Dignity and Automated Decision-Making","Process Reliabilism and Machine Testimony","The Chinese Room Revisited: LLMs and Understanding","Democratic Oversight of AI Systems"];
  return(
    <main><div style={{maxWidth:720,margin:"0 auto",padding:"120px 24px 80px"}}>
      <span className="overline">Curriculum Vitae</span>
      <h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"clamp(2rem,4vw,3rem)",marginTop:16}}>Artur Ziganshin</h1>
      <p style={{marginTop:8,color:"#7a7a88",fontSize:"1.05rem"}}>Master of Philosophy · PhD of Philosophy</p>
      <S t="Research Interests"><P>My research investigates the epistemic and ethical foundations of artificial intelligence, focusing on what conditions AI systems must satisfy to produce genuine knowledge, how ethical constraints should be integrated into AI architecture, and how we preserve human agency in the face of automation.</P></S>
      <S t="Education"><P><b style={{color:"#d0d0da"}}>PhD of Philosophy</b></P><P><b style={{color:"#d0d0da"}}>Master of Philosophy (MPhil)</b></P></S>
      <S t="Research Areas"><P>Epistemology of AI — process reliabilism, epistemic risk, machine testimony</P><P>Philosophy of Language & AI — meaning, reference, semantic grounding</P><P>AI Ethics — human dignity, fairness, consent, autonomy</P><P>Philosophy of Mind & AI — consciousness, understanding, agency</P></S>
      <S t="Publications"><p style={{color:"#4a4a58",fontSize:13,marginBottom:16}}>All papers available as open-access preprints on PhilArchive.</p>{papers.map((t,i)=><p key={i} style={{color:"#9a9aaa",fontSize:14,lineHeight:1.6,marginBottom:6,paddingLeft:12,borderLeft:"2px solid rgba(255,255,255,0.04)"}}>Ziganshin, A. (2025). &ldquo;{t}.&rdquo; <span style={{color:"#5a5a68"}}>PhilArchive preprint.</span></p>)}</S>
      <S t="Skills & Languages"><P>Languages: Russian (native), English (professional proficiency)</P><P>Technical: Python, data analysis, LLM evaluation, LaTeX</P></S>
      <S t="Professional Activities"><P>Independent AI philosophy researcher</P><P>Founder, Kazan Philosophical Society</P><P>Author, The Epistemic Mirror (weekly newsletter)</P></S>
    </div></main>
  );
}
function S({t,children}:{t:string;children:React.ReactNode}){return<section style={{marginTop:48}}><h2 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.5rem",color:"#f0f0f3",marginBottom:16,paddingBottom:8,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>{t}</h2>{children}</section>}
function P({children}:{children:React.ReactNode}){return<p style={{color:"#9a9aaa",fontSize:15,lineHeight:1.7,marginBottom:8}}>{children}</p>}
