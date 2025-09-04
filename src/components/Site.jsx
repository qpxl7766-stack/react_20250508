import React from 'react'
const siteText = [
    {
        text:["make","site compliant with","Leechaeyeon"],
        title:"1차 포트폴리오",
        code:"https://www.naver.com/",
        view:"/",
        info:["site coding","제작 기간 : 3일","프로그램 : html5, css3, javascript, react 등"]
    },
    {
        text:["make2","site compliant with2","Leechaeyeon2"],
        title:"2차 포트폴리오",
        code:"https://www.daum.net/",
        view:"/",
        info:["site coding","제작 기간 : 5일","프로그램 : html52, css32, javascript2, react2 등"]
    },
    {
        text:["make3","site compliant with3","Leechaeyeon3"],
        title:"3차 포트폴리오",
        code:"/",
        view:"/",
        info:["site coding","제작 기간 : 1일","프로그램 : html523, css33, javascript3, react3 등"]
    },
    {
        text:["make4","site compliant with4","Leechaeyeon4"],
        title:"4차 포트폴리오",
        code:"/",
        view:"/",
        info:["site coding","제작 기간 : 10일","프로그램 : html524, css34, javascript4, react4 등"]
    },
    {
        text:["make5","site compliant with5","Leechaeyeon5"],
        title:"5차 포트폴리오",
        code:"/",
        view:"/",
        info:["site coding","제작 기간 : 8일","프로그램 : html525, css35, javascript5, react5 등"]
    },
    {
        text:["make5","site compliant with5","Leechaeyeon5"],
        title:"6차 포트폴리오",
        code:"/",
        view:"/",
        info:["site coding","제작 기간 : 8일","프로그램 : html525, css35, javascript5, react5 등"]
    },
]

const Site = () => {
  return (
    <section id='site'>
        <div className="site_inner">
            <div className="site_title">
                site coding <em>내 작품들</em>
            </div>
            <div className="site_wrap">

                {siteText.map((site,key)=>(
                    <div className={`site_item s${key+1}`} key={key}>
                    <span className='num'>{key+1}.</span>
                    <div className="text">
                        <div>{site.text[0]}</div>
                        <div>{site.text[1]}</div>
                        <div>{site.text[2]}</div>
                    </div>
                    <h3 className='title'>{site.title}</h3>
                    <div className="btn">
                        <a href="{site.code}">code</a>
                        <a href="{site.view}">view</a>
                    </div>
                    <div className="info">
                        <span>{site.info[0]}</span>
                        <span>{site.info[1]}</span>
                        <span>{site.info[2]}</span>
                    </div>
                </div>
                ))}

                
            </div>
        </div>
    </section>
  )
}

export default Site