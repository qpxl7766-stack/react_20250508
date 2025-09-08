import React from 'react'

const skillText = [
    {
        title:"꿈을 설계하고 디자인하다.",
        desc:"나는 공간을 만드는 것을 매우 좋아한다. 그 공간을 web에서 만드는 것에 매우 흥미를 느끼고 있으며 그 영역을 만들어가는 것에 대한 행복을 느끼고 있다. 어떠한 영역이 주어졌을 때 나는 그 영역에 여러가지 블럭을 만들어서 채워나갈 것이다.",
    },
    {
        title:"열심히 할수록 기회는 따른다.",
        desc:"운이 좋은 사람은 없다고 생각합니다. 그 운은 내가 만들어나가는 것이라고 생각합니다. 어떤 일을 할 때 최선을 다한다면 그 끝에는 내가 생각하는 공간이 나올 거라는 확신을 가지고 있습니다. 내가 열심히 하면 그 때 기회가 주어졌을 때 기회를 잡는 것이 나의 운이라고 생각합니다.",
    },
    {
        title:"나에겐 정직이 있다.",
        desc:"정직은 다른 사람보다 나에게 큰 의미를 부여해 준다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다.",
    },
    {
        title:"나에게 열정은 생활이다.",
        desc:"열정은 나의 생활의 원동력이다. 어떠한 일을 할 때마다 그 일에 나의 열정을 모두 넣어서 만들어가기 위한 노력을 꾸준히 하고 있다. 이 회사에서 나의 정직함과 열정을 펼쳐 나갈 수 있게 기회를 준다면 나의 열정을 꿈처럼 피어날 수 있게 노력할 것이다.",
    },
]

const Skill = () => {
    return (
        <section id='skill'>
            <div className="skill_inner">
                <h2 className='skill_title'>
                    Challenge <em>나의 도전</em>
                </h2>
                <div className="skill_desc">

                    {
                        skillText.map((skill, key) => (
                            <div key={key}>
                                <span>{key + 1}</span>
                                <h3>{skill.title}</h3>
                                <p>{skill.desc}</p>
                            </div>
                        ))
                    }

                    
                </div>
            </div>
        </section>
    )
}

export default Skill