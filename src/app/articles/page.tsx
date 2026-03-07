import Link from "next/link";
import { articles } from "@/data/articles";

export const metadata = { title: "Articles & Essays", description: "Philosophical essays on AI, language models, and ethics." };

function formatDate(d:string){try{return new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});}catch{return d;}}

export default function ArticlesPage() {
  return (
    <main>
      <div style={{maxWidth:1152,margin:"0 auto",padding:"120px 24px 24px"}}>
        <span className="overline">Writing</span>
        <h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"clamp(2rem,4vw,3rem)",marginTop:16}}>Articles & Essays</h1>
        <p style={{marginTop:12,color:"#7a7a88",maxWidth:550,lineHeight:1.6}}>Long-form philosophical analysis of AI — epistemic risks, ethical architecture, and the questions technology alone cannot answer.</p>
      </div>
      <div style={{maxWidth:820,margin:"0 auto",padding:"24px 24px 80px"}}>
        {articles.map((a,i) => (
          <Link key={a.slug} href={`/articles/${a.slug}`} style={{textDecoration:"none",display:"block"}}>
            <article style={{padding:"28px 0",borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
              <div style={{display:"flex",alignItems:"center",gap:12,fontSize:13,color:"#4a4a58",marginBottom:10}}>
                <time>{formatDate(a.date)}</time><span style={{width:3,height:3,borderRadius:"50%",background:"#3a3a45"}}/><span>{a.readingTime}</span>
              </div>
              <h2 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.4rem",color:"#f0f0f3",marginBottom:8,lineHeight:1.25}}>{a.title}</h2>
              <p style={{fontSize:"0.95rem",color:"#6a6a78",lineHeight:1.6,marginBottom:12}}>{a.excerpt}</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                {a.tags.map((t) => <span key={t} className="badge-tag">{t}</span>)}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
