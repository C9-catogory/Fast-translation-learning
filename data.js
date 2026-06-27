window.CATTI_DATA = {
  "mapNodes": [
    {
      "id": "method",
      "title": "翻译流程",
      "group": "method",
      "x": 520,
      "y": 80,
      "summary": "事实→逻辑→语域→目标语。先判断信息功能，再动笔。",
      "points": [
        "核事实：数字、时间、主体、范围、否定",
        "核逻辑：因果、让步、条件、目的、递进",
        "核表达：术语一致、句子自然、语体正式"
      ],
      "exam": "实务：漏译/误译优先扣分，表达问题叠加扣分。"
    },
    {
      "id": "grammar",
      "title": "语法骨架",
      "group": "grammar",
      "x": 270,
      "y": 200,
      "summary": "用语法找主干，用逻辑决定译序。",
      "points": [
        "先找谓语和主语，再处理从句/非谓语",
        "汉译英先定主语和时态，不要逐词翻",
        "英译汉长修饰可后移、拆句、合句"
      ],
      "exam": "综合：单选/改错/阅读；实务：长句、政策句。"
    },
    {
      "id": "lexis",
      "title": "词汇搭配",
      "group": "vocab",
      "x": 520,
      "y": 225,
      "summary": "词不是孤立记忆，而是对象、介词、强度、语域的组合。",
      "points": [
        "动词看宾语：address challenges / meet demand",
        "名词看前后搭配：access to / resilience against",
        "副词看强度：substantially / moderately / barely"
      ],
      "exam": "综合词义辨析 + 实务术语稳定性。"
    },
    {
      "id": "logic",
      "title": "逻辑连接",
      "group": "logic",
      "x": 770,
      "y": 200,
      "summary": "连接词不是装饰，而是论证关系。",
      "points": [
        "although/while/whereas 区分让步与对比",
        "therefore/thus/hence 区分推论与结果",
        "in light of / against the backdrop of 用于背景"
      ],
      "exam": "阅读理解、完形、段落翻译。"
    },
    {
      "id": "long",
      "title": "长难句",
      "group": "sentence",
      "x": 170,
      "y": 360,
      "summary": "四步：找谓语→圈修饰→标逻辑→重排。",
      "points": [
        "不要把非谓语当主谓",
        "后置定语常译为前置修饰或拆句",
        "插入语先拿掉，再恢复信息"
      ],
      "exam": "英译汉核心。"
    },
    {
      "id": "register",
      "title": "语域转换",
      "group": "style",
      "x": 390,
      "y": 400,
      "summary": "口语表达变成正式、客观、可评分的笔译表达。",
      "points": [
        "things → factors / issues / measures",
        "deal with → address / tackle / respond to",
        "a lot of → substantial / considerable / numerous"
      ],
      "exam": "汉译英自然度、正式度。"
    },
    {
      "id": "syn",
      "title": "近义词辨析",
      "group": "vocab",
      "x": 625,
      "y": 400,
      "summary": "近义词按对象、强度、语体和褒贬来选。",
      "points": [
        "promote/advance/foster/drive 不同对象",
        "curb/reduce/mitigate/rein in 强度不同",
        "problem/challenge/issue/risk 语气不同"
      ],
      "exam": "综合词汇题 + 实务精准度。"
    },
    {
      "id": "domain",
      "title": "学科术语",
      "group": "domain",
      "x": 850,
      "y": 360,
      "summary": "热点不是背新闻，而是背术语场、句型场、逻辑场。",
      "points": [
        "航天：launch vehicle / payload / orbital test",
        "生物：genome editing / biosafety / pathogen surveillance",
        "海洋：marine biodiversity / plastic leakage / blue economy"
      ],
      "exam": "实务热点、综合阅读主题。"
    },
    {
      "id": "dict",
      "title": "查词策略",
      "group": "method",
      "x": 275,
      "y": 560,
      "summary": "查词不是找第一个释义，而是验证语境、搭配和词性。",
      "points": [
        "先看词性，再看对象，再看例句",
        "优先查固定搭配和专业术语",
        "多义词用上下文锁定语义角色"
      ],
      "exam": "实务下午时间管理。"
    },
    {
      "id": "exam",
      "title": "作答系统",
      "group": "exam",
      "x": 520,
      "y": 600,
      "summary": "综合追求稳定得分；实务追求完整、准确、可读。",
      "points": [
        "综合：先易后难，阅读题先定位",
        "实务：先通读再译，保留10–15分钟核对",
        "词典：只查关键术语和不确定多义词"
      ],
      "exam": "时间管理直接影响通过率。"
    },
    {
      "id": "feedback",
      "title": "实时反馈",
      "group": "practice",
      "x": 770,
      "y": 560,
      "summary": "用自检和 AI 反馈抓住数字、否定、逻辑、语域错误。",
      "points": [
        "离线检查：数字/否定/连接词/口语化",
        "AI评分：忠实度、逻辑、术语、语域",
        "错题沉淀：同类搭配重复练"
      ],
      "exam": "冲刺阶段高收益。"
    }
  ],
  "mapEdges": [
    [
      "method",
      "grammar"
    ],
    [
      "method",
      "lexis"
    ],
    [
      "method",
      "logic"
    ],
    [
      "grammar",
      "long"
    ],
    [
      "grammar",
      "register"
    ],
    [
      "lexis",
      "syn"
    ],
    [
      "lexis",
      "domain"
    ],
    [
      "logic",
      "long"
    ],
    [
      "logic",
      "domain"
    ],
    [
      "long",
      "dict"
    ],
    [
      "register",
      "exam"
    ],
    [
      "domain",
      "exam"
    ],
    [
      "dict",
      "feedback"
    ],
    [
      "exam",
      "feedback"
    ]
  ],
  "cards": [
    {
      "id": "G001",
      "type": "grammar",
      "channel": "tense",
      "title": "时态：一般现在",
      "summary": "制度/规律/稳定事实通常用一般现在；政策文本尤其常见。",
      "pattern": "S + V(s) / be + adj/noun",
      "exam": "综合考时态判断；汉译英考政策句自然度。",
      "trap": "把中文“将/正在”机械翻成 will / be doing；制度性句子常用一般现在。",
      "examples": [
        {
          "en": "The policy aims to improve public access to healthcare.",
          "zh": "该政策旨在改善公众获得医疗服务的机会。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 tense 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The policy aims to improve public access to healthcare."
    },
    {
      "id": "G002",
      "type": "grammar",
      "channel": "tense",
      "title": "时态：现在完成",
      "summary": "过去发生，但重点在“对现在的影响/延续到现在”。",
      "pattern": "have/has + done; since/for/over the past decade",
      "exam": "常考 since, over the past, so far, in recent years。",
      "trap": "不要把所有“已经”都译成 present perfect；若明确过去时间，用一般过去。",
      "examples": [
        {
          "en": "China has made progress in renewable energy deployment.",
          "zh": "中国在可再生能源部署方面取得了进展。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 tense 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：China has made progress in renewable energy deployment."
    },
    {
      "id": "G003",
      "type": "grammar",
      "channel": "tense",
      "title": "时态：过去完成",
      "summary": "表示过去时间点之前已经完成的动作。",
      "pattern": "had + done before/by the time + past",
      "exam": "阅读中常作为时间线题。",
      "trap": "没有两个过去层级时不要滥用 had done。",
      "examples": [
        {
          "en": "By 2020, the city had established a basic waste-sorting system.",
          "zh": "到2020年，该市已基本建立垃圾分类体系。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 tense 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：By 2020, the city had established a basic waste-sorting system."
    },
    {
      "id": "G004",
      "type": "grammar",
      "channel": "tense",
      "title": "时态：将来表达",
      "summary": "will 表预测/承诺；be going to 表计划趋势；be expected to 表官方预测。",
      "pattern": "be expected/projected/likely to + V",
      "exam": "热点段落常考“预计、将、计划”。",
      "trap": "政策文件中少用口语化 going to。",
      "examples": [
        {
          "en": "The demand is expected to rise as the population ages.",
          "zh": "随着人口老龄化，需求预计将会上升。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 tense 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The demand is expected to rise as the population ages."
    },
    {
      "id": "G005",
      "type": "grammar",
      "channel": "voice",
      "title": "被动语态",
      "summary": "英语常用被动突出制度、措施、结果；汉语可译为主动或无主句。",
      "pattern": "be + done; be designed/intended/required to",
      "exam": "实务中可增强客观性。",
      "trap": "英译汉不必每个被动都译“被”。",
      "examples": [
        {
          "en": "New guidelines were introduced to enhance data security.",
          "zh": "为加强数据安全，新的指导方针已经出台。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 voice 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：New guidelines were introduced to enhance data security."
    },
    {
      "id": "G006",
      "type": "grammar",
      "channel": "structure",
      "title": "名词化",
      "summary": "正式英语常把动作压缩为名词，但过度名词化会笨重。",
      "pattern": "implementation / development / expansion / integration of",
      "exam": "作文式口语变书面化重点。",
      "trap": "汉译英可用名词化提正式度；英译汉可还原为动词。",
      "examples": [
        {
          "en": "The expansion of charging infrastructure remains essential.",
          "zh": "充电基础设施的扩建仍然至关重要。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 structure 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The expansion of charging infrastructure remains essential."
    },
    {
      "id": "G007",
      "type": "grammar",
      "channel": "noun",
      "title": "冠词：泛指与特指",
      "summary": "a/an 表一个类别成员；the 表双方已知或唯一。",
      "pattern": "a + singular countable; the + specified noun",
      "exam": "综合单选高频。",
      "trap": "technology, society, nature 等抽象名词通常不加 the，除非被限定。",
      "examples": [
        {
          "en": "A regulation should be clear, enforceable and adaptable.",
          "zh": "一项法规应当清晰、可执行且具有适应性。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 noun 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：A regulation should be clear, enforceable and adaptable."
    },
    {
      "id": "G008",
      "type": "grammar",
      "channel": "noun",
      "title": "复数：抽象名词可数化",
      "summary": "development, policy, challenge 可在具体语境中复数化。",
      "pattern": "challenges / policies / technologies / measures",
      "exam": "汉译英低级错误高频。",
      "trap": "information, equipment, evidence 通常不可数。",
      "examples": [
        {
          "en": "Emerging technologies create new opportunities and challenges.",
          "zh": "新兴技术带来新的机遇和挑战。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 noun 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Emerging technologies create new opportunities and challenges."
    },
    {
      "id": "G009",
      "type": "grammar",
      "channel": "noun",
      "title": "主谓一致",
      "summary": "真正主语决定动词，不被插入语和介词短语误导。",
      "pattern": "The number of + plural N + singular V; A number of + plural V",
      "exam": "综合语法题常见陷阱。",
      "trap": "along with, together with 不改变主语数。",
      "examples": [
        {
          "en": "The number of people affected by heatwaves is increasing.",
          "zh": "受热浪影响的人数正在增加。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 noun 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The number of people affected by heatwaves is increasing."
    },
    {
      "id": "G010",
      "type": "grammar",
      "channel": "structure",
      "title": "there be 结构",
      "summary": "用于引出新信息，但正式文本中可换成 exist / remain / emerge。",
      "pattern": "There is/are; There remains; There has been",
      "exam": "汉译英结构选择。",
      "trap": "不要把所有“有”都译 there be；可用 have, feature, involve, include。",
      "examples": [
        {
          "en": "There remains a gap between innovation and regulation.",
          "zh": "创新与监管之间仍存在差距。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 structure 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：There remains a gap between innovation and regulation."
    },
    {
      "id": "G011",
      "type": "grammar",
      "channel": "clause",
      "title": "名词性从句",
      "summary": "that/what/whether 引导主语、宾语、表语、同位语从句。",
      "pattern": "that/what/whether + clause",
      "exam": "综合单选和长句主干。",
      "trap": "what = the thing that；that 不作成分。",
      "examples": [
        {
          "en": "What matters is whether the measure is enforceable.",
          "zh": "关键在于该措施是否可执行。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 clause 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：What matters is whether the measure is enforceable."
    },
    {
      "id": "G012",
      "type": "grammar",
      "channel": "clause",
      "title": "定语从句：限定/非限定",
      "summary": "限定性定义对象；非限定性补充说明。",
      "pattern": "which/that/who/where/whose",
      "exam": "英译汉拆句高频。",
      "trap": "逗号 which 不能随意译成“这”。",
      "examples": [
        {
          "en": "The system, which relies on real-time data, improves emergency response.",
          "zh": "该系统依托实时数据，可改善应急响应。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 clause 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The system, which relies on real-time data, improves emergency response."
    },
    {
      "id": "G013",
      "type": "grammar",
      "channel": "clause",
      "title": "同位语从句",
      "summary": "解释抽象名词：fact, idea, evidence, possibility, concern。",
      "pattern": "the fact/evidence/possibility that ...",
      "exam": "阅读理解细节定位。",
      "trap": "不要误判为定语从句；that 不作成分。",
      "examples": [
        {
          "en": "There is growing concern that algorithms may amplify bias.",
          "zh": "人们越来越担心算法可能放大偏见。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 clause 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：There is growing concern that algorithms may amplify bias."
    },
    {
      "id": "G014",
      "type": "grammar",
      "channel": "clause",
      "title": "状语从句：让步",
      "summary": "although/while/even if 引导反预期关系。",
      "pattern": "Although A, B; While A, B",
      "exam": "综合逻辑连接题。",
      "trap": "while 也可表示对比，不一定是“当……时”。",
      "examples": [
        {
          "en": "While AI can improve efficiency, it also raises ethical concerns.",
          "zh": "人工智能虽可提高效率，但也带来伦理问题。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 clause 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：While AI can improve efficiency, it also raises ethical concerns."
    },
    {
      "id": "G015",
      "type": "grammar",
      "channel": "clause",
      "title": "状语从句：条件",
      "summary": "if/provided that/unless/as long as 表条件；汉译英避免一串 if。",
      "pattern": "provided that / unless / subject to",
      "exam": "阅读和实务均高频。",
      "trap": "unless = if not；不要重复否定。",
      "examples": [
        {
          "en": "The plan can work, provided that sufficient funding is secured.",
          "zh": "只要资金充足，该计划就能实施。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 clause 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The plan can work, provided that sufficient funding is secured."
    },
    {
      "id": "G016",
      "type": "grammar",
      "channel": "nonfinite",
      "title": "非谓语：现在分词",
      "summary": "-ing 常表示主动、伴随、原因或结果。",
      "pattern": "V-ing phrase",
      "exam": "长句拆解核心。",
      "trap": "不要见 -ing 就译“正在”。",
      "examples": [
        {
          "en": "Rising temperatures are putting pressure on coastal cities.",
          "zh": "气温上升正在给沿海城市带来压力。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 nonfinite 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Rising temperatures are putting pressure on coastal cities."
    },
    {
      "id": "G017",
      "type": "grammar",
      "channel": "nonfinite",
      "title": "非谓语：过去分词",
      "summary": "-ed 常表示被动、完成或状态。",
      "pattern": "V-ed phrase",
      "exam": "综合阅读长句。",
      "trap": "不要把过去分词误作谓语。",
      "examples": [
        {
          "en": "Data collected from satellites can support disaster monitoring.",
          "zh": "卫星收集的数据可支持灾害监测。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 nonfinite 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Data collected from satellites can support disaster monitoring."
    },
    {
      "id": "G018",
      "type": "grammar",
      "channel": "nonfinite",
      "title": "不定式",
      "summary": "to do 常表示目的、结果、倾向或未来动作。",
      "pattern": "to + V; be likely/expected/designed to",
      "exam": "科技热点常用。",
      "trap": "be designed to 不一定译“被设计去”，可译“旨在”。",
      "examples": [
        {
          "en": "The device is designed to restore communication ability.",
          "zh": "该设备旨在恢复沟通能力。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 nonfinite 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The device is designed to restore communication ability."
    },
    {
      "id": "G019",
      "type": "grammar",
      "channel": "nonfinite",
      "title": "独立主格",
      "summary": "名词/代词 + 分词/形容词/介词短语，表示背景或伴随。",
      "pattern": "N + V-ing/V-ed, main clause",
      "exam": "高阶阅读长句。",
      "trap": "中文可译为“在……情况下”。",
      "examples": [
        {
          "en": "Resources limited, many communities rely on low-cost solutions.",
          "zh": "在资源有限的情况下，许多社区依赖低成本方案。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 nonfinite 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Resources limited, many communities rely on low-cost solutions."
    },
    {
      "id": "G020",
      "type": "grammar",
      "channel": "preposition",
      "title": "介词：access to",
      "summary": "access 与 to 搭配，表示获得机会、使用权、接入。",
      "pattern": "access to healthcare/data/education/markets",
      "exam": "政策/公共服务高频。",
      "trap": "不要写 access of。",
      "examples": [
        {
          "en": "Rural residents need better access to digital services.",
          "zh": "农村居民需要更便利地获得数字服务。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 preposition 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Rural residents need better access to digital services."
    },
    {
      "id": "G021",
      "type": "grammar",
      "channel": "preposition",
      "title": "介词：impact on",
      "summary": "impact/effect/influence 多与 on 搭配。",
      "pattern": "impact on / effect on / influence on",
      "exam": "综合词语搭配。",
      "trap": "affect 是动词，不加 on；have an impact on 才加。",
      "examples": [
        {
          "en": "The policy may have a long-term impact on employment.",
          "zh": "该政策可能对就业产生长期影响。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 preposition 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The policy may have a long-term impact on employment."
    },
    {
      "id": "G022",
      "type": "grammar",
      "channel": "preposition",
      "title": "介词：approach to",
      "summary": "approach 作“方法”时接 to + 名词/动名词。",
      "pattern": "an approach to solving / a method of solving",
      "exam": "搭配题常见。",
      "trap": "不要写 approach of。",
      "examples": [
        {
          "en": "This approach to waste management emphasizes source reduction.",
          "zh": "这种废弃物管理方法强调源头减量。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 preposition 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：This approach to waste management emphasizes source reduction."
    },
    {
      "id": "G023",
      "type": "grammar",
      "channel": "preposition",
      "title": "介词：be responsible for/to",
      "summary": "for 表负责事项；to 表对谁负责。",
      "pattern": "responsible for safety; accountable to the public",
      "exam": "实务固定搭配。",
      "trap": "responsible to the environment 不自然，常说 responsible for environmental protection。",
      "examples": [
        {
          "en": "Companies are responsible for reducing plastic leakage.",
          "zh": "企业有责任减少塑料泄漏。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 preposition 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Companies are responsible for reducing plastic leakage."
    },
    {
      "id": "G024",
      "type": "grammar",
      "channel": "adverb",
      "title": "程度副词",
      "summary": "副词决定语气强度：significantly/substantially/slightly/barely。",
      "pattern": "significantly increase; sharply decline; barely sufficient",
      "exam": "综合词汇和实务语气。",
      "trap": "very 不适合正式高频；根据证据强度选副词。",
      "examples": [
        {
          "en": "The measure has significantly improved energy efficiency.",
          "zh": "该措施显著提高了能源效率。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 adverb 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The measure has significantly improved energy efficiency."
    },
    {
      "id": "G025",
      "type": "grammar",
      "channel": "logic",
      "title": "否定转移",
      "summary": "think/believe/expect 等动词常出现否定转移。",
      "pattern": "I do not think that... = I think not",
      "exam": "阅读理解细节题。",
      "trap": "不要机械译“专家不认为”。",
      "examples": [
        {
          "en": "Experts do not believe the measure alone will be sufficient.",
          "zh": "专家认为，仅靠该措施还不够。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 logic 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Experts do not believe the measure alone will be sufficient."
    },
    {
      "id": "G026",
      "type": "grammar",
      "channel": "logic",
      "title": "部分否定",
      "summary": "not all / not every / not necessarily 表部分否定。",
      "pattern": "not all; not necessarily; not always",
      "exam": "综合阅读高频陷阱。",
      "trap": "不能译成“所有都不”。",
      "examples": [
        {
          "en": "Not all technological solutions are socially acceptable.",
          "zh": "并非所有技术方案都能被社会接受。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 logic 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Not all technological solutions are socially acceptable."
    },
    {
      "id": "G027",
      "type": "grammar",
      "channel": "comparison",
      "title": "比较结构",
      "summary": "more than 数字是“超过”；more than + adj/noun 可表示“不只是”。",
      "pattern": "more than; no more than; no less than",
      "exam": "阅读细节题。",
      "trap": "no more than=仅仅；not more than=不超过。",
      "examples": [
        {
          "en": "Translation is more than replacing words.",
          "zh": "翻译不只是替换词语。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 comparison 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Translation is more than replacing words."
    },
    {
      "id": "G028",
      "type": "grammar",
      "channel": "comparison",
      "title": "as...as 结构",
      "summary": "as much as 可表示“多达”；as long as 可表示“只要”。",
      "pattern": "as many as / as much as / as long as",
      "exam": "数字题常见。",
      "trap": "不要把 as long as 全译“和……一样长”。",
      "examples": [
        {
          "en": "The project could benefit as many as two million people.",
          "zh": "该项目可惠及多达200万人。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 comparison 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The project could benefit as many as two million people."
    },
    {
      "id": "G029",
      "type": "grammar",
      "channel": "emphasis",
      "title": "强调结构",
      "summary": "It is/was ... that/who ... 用于突出成分。",
      "pattern": "It is X that ...",
      "exam": "汉译英强调重点。",
      "trap": "注意 not A but B 的重心在 B。",
      "examples": [
        {
          "en": "It is governance, not technology alone, that determines outcomes.",
          "zh": "决定结果的是治理，而不仅仅是技术。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 emphasis 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：It is governance, not technology alone, that determines outcomes."
    },
    {
      "id": "G030",
      "type": "grammar",
      "channel": "structure",
      "title": "倒装结构",
      "summary": "否定副词或地点状语前置可倒装。",
      "pattern": "Not only + aux + S + V, but also...",
      "exam": "综合语法题。",
      "trap": "not only 后要部分倒装。",
      "examples": [
        {
          "en": "Not only does the policy reduce waste, but it also creates jobs.",
          "zh": "该政策不仅减少废弃物，还创造就业。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 structure 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Not only does the policy reduce waste, but it also creates jobs."
    },
    {
      "id": "G031",
      "type": "grammar",
      "channel": "structure",
      "title": "平行结构",
      "summary": "并列项语法形式要一致。",
      "pattern": "to V, to V and to V; N, N and N",
      "exam": "汉译英书面质量。",
      "trap": "并列项不要混乱：to reduce, improving, and resilience。",
      "examples": [
        {
          "en": "The plan aims to reduce costs, improve access and enhance resilience.",
          "zh": "该计划旨在降低成本、改善可及性并增强韧性。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 structure 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The plan aims to reduce costs, improve access and enhance resilience."
    },
    {
      "id": "G032",
      "type": "grammar",
      "channel": "discourse",
      "title": "信息前置",
      "summary": "英文常把判断和主干前置，中文常先铺垫。",
      "pattern": "Main claim + background + evidence",
      "exam": "汉译英篇章顺序。",
      "trap": "不要把中文背景照搬到英文句首过长。",
      "examples": [
        {
          "en": "Effective governance requires clear rules, reliable data and public trust.",
          "zh": "有效治理需要明确规则、可靠数据和公众信任。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 discourse 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Effective governance requires clear rules, reliable data and public trust."
    },
    {
      "id": "G033",
      "type": "grammar",
      "channel": "discourse",
      "title": "背景框架",
      "summary": "against the backdrop of / amid / in light of 用于开篇背景。",
      "pattern": "Against the backdrop of..., ...",
      "exam": "热点开头句。",
      "trap": "amid 后接名词，不接完整句。",
      "examples": [
        {
          "en": "Against the backdrop of rapid urbanization, waste management has become more urgent.",
          "zh": "在快速城市化背景下，废弃物管理变得更加紧迫。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 discourse 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Against the backdrop of rapid urbanization, waste management has become more urgent."
    },
    {
      "id": "G034",
      "type": "grammar",
      "channel": "logic",
      "title": "因果表达",
      "summary": "because 口语直接；due to/owing to 书面；given 表考虑到。",
      "pattern": "due to / owing to / given / as a result of",
      "exam": "综合改错。",
      "trap": "due to 后接名词性成分，不直接接句子。",
      "examples": [
        {
          "en": "Given the limited resources, priority should be given to prevention.",
          "zh": "鉴于资源有限，应优先重视预防。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 logic 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Given the limited resources, priority should be given to prevention."
    },
    {
      "id": "G035",
      "type": "grammar",
      "channel": "logic",
      "title": "目的表达",
      "summary": "in order to / with a view to / aimed at。",
      "pattern": "with a view to + V-ing; aimed at + V-ing/N",
      "exam": "实务政策句。",
      "trap": "with a view to 后接动名词。",
      "examples": [
        {
          "en": "The initiative is aimed at improving marine biodiversity protection.",
          "zh": "该倡议旨在加强海洋生物多样性保护。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 logic 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The initiative is aimed at improving marine biodiversity protection."
    },
    {
      "id": "G036",
      "type": "grammar",
      "channel": "logic",
      "title": "让步与转折",
      "summary": "however 是转折；nevertheless 强反差；while 可让步/对比。",
      "pattern": "however / nevertheless / whereas / while",
      "exam": "综合连接词。",
      "trap": "however 不能像 but 一样直接连接两个独立句而不加标点。",
      "examples": [
        {
          "en": "The technology is promising; however, its risks must be managed.",
          "zh": "该技术前景可观，但其风险必须得到管理。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 logic 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The technology is promising; however, its risks must be managed."
    },
    {
      "id": "G037",
      "type": "grammar",
      "channel": "logic",
      "title": "递进与补充",
      "summary": "moreover/furthermore/in addition 用于添加论据。",
      "pattern": "Furthermore, ...; In addition, ...",
      "exam": "阅读篇章关系。",
      "trap": "不要把 moreover 用到强转折语境。",
      "examples": [
        {
          "en": "Furthermore, the measure can improve public awareness.",
          "zh": "此外，该措施还能提升公众意识。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 logic 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Furthermore, the measure can improve public awareness."
    },
    {
      "id": "G038",
      "type": "grammar",
      "channel": "style",
      "title": "定义句",
      "summary": "专业文本常用 refer to / be defined as / involve。",
      "pattern": "X refers to / is defined as / involves",
      "exam": "术语解释题。",
      "trap": "不要用 means 处理所有定义。",
      "examples": [
        {
          "en": "Brain-computer interfaces refer to systems that translate neural signals into commands.",
          "zh": "脑机接口是指将神经信号转化为指令的系统。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 style 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Brain-computer interfaces refer to systems that translate neural signals into commands."
    },
    {
      "id": "G039",
      "type": "grammar",
      "channel": "style",
      "title": "范围限定",
      "summary": "within / across / among / between 表范围和关系。",
      "pattern": "across sectors / among stakeholders / between regions",
      "exam": "政策翻译精准度。",
      "trap": "between 两者；among 多者。",
      "examples": [
        {
          "en": "The policy should be coordinated across sectors.",
          "zh": "该政策应在各部门之间统筹推进。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 style 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The policy should be coordinated across sectors."
    },
    {
      "id": "G040",
      "type": "grammar",
      "channel": "numbers",
      "title": "数字表达",
      "summary": "数字需保留单位、基准、增减方向和时间范围。",
      "pattern": "increase by / increase to / account for",
      "exam": "实务核对必查。",
      "trap": "by 表变化幅度；to 表变化结果。",
      "examples": [
        {
          "en": "Emissions fell by 12% to 88 million tonnes.",
          "zh": "排放量下降12%，降至8800万吨。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 numbers 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Emissions fell by 12% to 88 million tonnes."
    },
    {
      "id": "G041",
      "type": "grammar",
      "channel": "time",
      "title": "时间表达",
      "summary": "since, by, until, within, over 表时间关系不同。",
      "pattern": "by 2030; until 2030; within five years; over the past decade",
      "exam": "综合与实务高频。",
      "trap": "by 不是 at；until 表持续到某时。",
      "examples": [
        {
          "en": "The target should be achieved by 2030.",
          "zh": "该目标应在2030年前实现。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 time 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The target should be achieved by 2030."
    },
    {
      "id": "G042",
      "type": "grammar",
      "channel": "ce",
      "title": "主语选择",
      "summary": "汉译英最关键：谁发出动作？政策文本可用 measure/system/country/technology 作主语。",
      "pattern": "Measures/Policies/Technologies + V",
      "exam": "汉译英提分核心。",
      "trap": "不要总用 people/we/they。",
      "examples": [
        {
          "en": "These measures can strengthen supply-chain resilience.",
          "zh": "这些措施可增强供应链韧性。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 ce 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：These measures can strengthen supply-chain resilience."
    },
    {
      "id": "G043",
      "type": "grammar",
      "channel": "ce",
      "title": "动词化汉语",
      "summary": "汉语名词短语多，英译时要找动作动词。",
      "pattern": "加强治理 → strengthen governance",
      "exam": "汉译英流畅度。",
      "trap": "不要全写 make enhancement of。",
      "examples": [
        {
          "en": "The city has strengthened flood-risk management.",
          "zh": "该市加强了洪涝风险管理。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 ce 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The city has strengthened flood-risk management."
    },
    {
      "id": "G044",
      "type": "grammar",
      "channel": "ec",
      "title": "英译汉：后置定语",
      "summary": "英文后置修饰多，中文通常前置或拆句。",
      "pattern": "N + that/which/with/of...",
      "exam": "英译汉实务核心。",
      "trap": "长后置定语可拆成短句。",
      "examples": [
        {
          "en": "communities vulnerable to climate shocks",
          "zh": "易受气候冲击影响的社区"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 ec 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：communities vulnerable to climate shocks"
    },
    {
      "id": "G045",
      "type": "grammar",
      "channel": "ec",
      "title": "英译汉：抽象名词还原",
      "summary": "将 nominalization 还原为动词，译文更清楚。",
      "pattern": "implementation of policy → 实施政策",
      "exam": "英译汉可读性。",
      "trap": "不要堆“……的……的……”。",
      "examples": [
        {
          "en": "The adoption of standards can improve interoperability.",
          "zh": "采用标准可提高互操作性。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 ec 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The adoption of standards can improve interoperability."
    },
    {
      "id": "G046",
      "type": "grammar",
      "channel": "modal",
      "title": "情态动词：must / should / may",
      "summary": "must 表强义务或高度确定；should 表建议/预期；may 表可能或许可。",
      "pattern": "must/should/may + V",
      "exam": "综合情态语气与实务政策建议。",
      "trap": "不要把 should 都译成“应该”而忽视“按理应当/预计会”。",
      "examples": [
        {
          "en": "Regulators should clarify how AI-generated content is labelled.",
          "zh": "监管机构应明确如何标识人工智能生成内容。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 modal 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Regulators should clarify how AI-generated content is labelled."
    },
    {
      "id": "G047",
      "type": "grammar",
      "channel": "modal",
      "title": "虚拟语气",
      "summary": "if 条件与事实相反时，用过去式/过去完成表达假设。",
      "pattern": "If S were/did..., S would...",
      "exam": "阅读推断题和综合语法。",
      "trap": "不要把所有 if 都当虚拟；先判断是否与事实相反。",
      "examples": [
        {
          "en": "If the data were more reliable, the results would be more convincing.",
          "zh": "如果数据更可靠，结果会更有说服力。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 modal 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：If the data were more reliable, the results would be more convincing."
    },
    {
      "id": "G048",
      "type": "grammar",
      "channel": "structure",
      "title": "省略结构",
      "summary": "比较、并列、状语从句中常省略重复成分。",
      "pattern": "when/if/although + V-ed/V-ing",
      "exam": "长难句还原。",
      "trap": "When managed 中省略了 they are；翻译时要补出逻辑主语。",
      "examples": [
        {
          "en": "When properly managed, digital tools can improve service delivery.",
          "zh": "如果管理得当，数字工具可以改善服务供给。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 structure 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：When properly managed, digital tools can improve service delivery."
    },
    {
      "id": "G049",
      "type": "grammar",
      "channel": "nonfinite",
      "title": "悬垂分词",
      "summary": "非谓语逻辑主语必须与主句主语一致，否则句子不合格。",
      "pattern": "V-ing..., S + V",
      "exam": "汉译英高阶扣分点。",
      "trap": "不要写 Using data, risks can be identified... 逻辑主语错误。",
      "examples": [
        {
          "en": "Using real-time data, the system can identify risks earlier.",
          "zh": "该系统利用实时数据，能够更早识别风险。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 nonfinite 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Using real-time data, the system can identify risks earlier."
    },
    {
      "id": "G050",
      "type": "grammar",
      "channel": "adjective",
      "title": "形容词补足语",
      "summary": "certain/likely/able/eligible/responsible 等形容词常带补足结构。",
      "pattern": "be likely to / be eligible for / be responsible for",
      "exam": "综合搭配题。",
      "trap": "eligible to do 与 eligible for N 区别。",
      "examples": [
        {
          "en": "Low-income households are eligible for additional support.",
          "zh": "低收入家庭有资格获得额外支持。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 adjective 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Low-income households are eligible for additional support."
    },
    {
      "id": "G051",
      "type": "grammar",
      "channel": "noun",
      "title": "名词堆叠",
      "summary": "英文名词可连续修饰，但过长会难读；汉译英需控制长度。",
      "pattern": "N1 N2 N3 + head noun",
      "exam": "汉译英术语表达。",
      "trap": "超过三层名词堆叠可改用 of/for/related to。",
      "examples": [
        {
          "en": "data privacy protection rules",
          "zh": "数据隐私保护规则"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 noun 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：data privacy protection rules"
    },
    {
      "id": "G052",
      "type": "grammar",
      "channel": "sentence",
      "title": "插入语",
      "summary": "however, in particular, if any, among others 等插入语先拿掉找主干。",
      "pattern": "S, however, V...",
      "exam": "阅读长句。",
      "trap": "不要让 however 打断主谓识别。",
      "examples": [
        {
          "en": "The measure, however, may not be sufficient on its own.",
          "zh": "然而，仅靠这一措施可能并不足够。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 sentence 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The measure, however, may not be sufficient on its own."
    },
    {
      "id": "G053",
      "type": "grammar",
      "channel": "sentence",
      "title": "同位语压缩",
      "summary": "英文用同位语补充身份或解释，中文可前置或拆句。",
      "pattern": "N, apposition, V",
      "exam": "英译汉可读性。",
      "trap": "同位语不是独立谓语。",
      "examples": [
        {
          "en": "The project, a public-private partnership, aims to improve urban resilience.",
          "zh": "该项目是一个公私合作项目，旨在提升城市韧性。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 sentence 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The project, a public-private partnership, aims to improve urban resilience."
    },
    {
      "id": "G054",
      "type": "grammar",
      "channel": "clause",
      "title": "关系代词省略",
      "summary": "定语从句中作宾语的 that/which/who 可省略。",
      "pattern": "the measures Ø the city adopted",
      "exam": "综合阅读。",
      "trap": "不要误以为两个名词并列；中间可能省略关系代词。",
      "examples": [
        {
          "en": "The measures the city adopted reduced landfill waste.",
          "zh": "该市采取的措施减少了填埋废弃物。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 clause 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The measures the city adopted reduced landfill waste."
    },
    {
      "id": "G055",
      "type": "grammar",
      "channel": "preposition",
      "title": "介词：by / through / via",
      "summary": "by 强调方式或执行者；through 强调过程/渠道；via 强调路径。",
      "pattern": "by regulation / through cooperation / via digital platforms",
      "exam": "介词辨析。",
      "trap": "via 不宜滥用；正式文本中 through 更常用。",
      "examples": [
        {
          "en": "Services can be delivered through community centers and digital platforms.",
          "zh": "服务可以通过社区中心和数字平台提供。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 preposition 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Services can be delivered through community centers and digital platforms."
    },
    {
      "id": "G056",
      "type": "grammar",
      "channel": "preposition",
      "title": "介词：from / of / in",
      "summary": "prevent/protect from；risk of；increase in。",
      "pattern": "protect A from B; risk of N; increase in N",
      "exam": "固定搭配高频。",
      "trap": "risk in 通常不如 risk of 自然。",
      "examples": [
        {
          "en": "Better infrastructure can protect coastal communities from floods.",
          "zh": "更完善的基础设施可以保护沿海社区免受洪水影响。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 preposition 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Better infrastructure can protect coastal communities from floods."
    },
    {
      "id": "G057",
      "type": "grammar",
      "channel": "logic",
      "title": "结果结构",
      "summary": "so that 表目的或结果；such that 偏正式，表示达到某种结果状态。",
      "pattern": "so that / such that / thereby + V-ing",
      "exam": "综合连接词。",
      "trap": "so...that 与 so that 不同。",
      "examples": [
        {
          "en": "The rules should be clear so that companies can comply with them.",
          "zh": "规则应当清晰，使企业能够遵守。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 logic 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The rules should be clear so that companies can comply with them."
    },
    {
      "id": "G058",
      "type": "grammar",
      "channel": "structure",
      "title": "让步倒装",
      "summary": "形容词/名词/副词前置 + as/though 表让步。",
      "pattern": "Adj/N/Adv + as + S + V",
      "exam": "高阶阅读。",
      "trap": "as 这里不是“作为”。",
      "examples": [
        {
          "en": "Promising as the technology is, it still requires careful oversight.",
          "zh": "尽管该技术前景可观，仍需审慎监管。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 structure 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Promising as the technology is, it still requires careful oversight."
    },
    {
      "id": "G059",
      "type": "grammar",
      "channel": "noun",
      "title": "限定词链",
      "summary": "all/both/either/neither/each/every/many/much/few/little 控制范围。",
      "pattern": "not every / few / little / each",
      "exam": "综合细节题。",
      "trap": "few 是否定倾向；a few 是肯定倾向。",
      "examples": [
        {
          "en": "Few measures can work without public trust.",
          "zh": "没有公众信任，几乎没有措施能够奏效。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 noun 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：Few measures can work without public trust."
    },
    {
      "id": "G060",
      "type": "grammar",
      "channel": "punctuation",
      "title": "标点与分号",
      "summary": "英文独立句之间不能只用逗号；分号可连接紧密相关独立句。",
      "pattern": "Independent clause; however, independent clause.",
      "exam": "汉译英句法规范。",
      "trap": "however 前后标点常出错。",
      "examples": [
        {
          "en": "The technology is promising; however, its risks remain significant.",
          "zh": "该技术前景可观；然而，其风险仍然显著。"
        }
      ],
      "memory": "先问：这句话在表达事实、动作、关系还是语气？再选 punctuation 的规则。",
      "drill": "把例句改写成另一种正式表达，并检查是否改变逻辑：The technology is promising; however, its risks remain significant."
    },
    {
      "id": "S001",
      "type": "synonym",
      "channel": "synonym",
      "title": "promote / advance / foster / drive",
      "summary": "promote 常接政策目标；advance 强调推进事业/议程；foster 强调培育环境；drive 强调强力推动变化。",
      "pattern": "promote green development; advance scientific research; foster innovation; drive growth",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "promote green development; advance scientific research; foster innovation; drive growth",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S002",
      "type": "synonym",
      "channel": "synonym",
      "title": "address / tackle / respond to / cope with",
      "summary": "address 正式且宽泛；tackle 强调主动处理难题；respond to 强调回应；cope with 偏“应付”。",
      "pattern": "address concerns; tackle climate change; respond to emergencies; cope with pressure",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "address concerns; tackle climate change; respond to emergencies; cope with pressure",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S003",
      "type": "synonym",
      "channel": "synonym",
      "title": "curb / reduce / mitigate / rein in",
      "summary": "curb 抑制；reduce 降低；mitigate 减轻负面影响；rein in 控制过快/过度。",
      "pattern": "curb speculation; reduce emissions; mitigate risks; rein in costs",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "curb speculation; reduce emissions; mitigate risks; rein in costs",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S004",
      "type": "synonym",
      "channel": "synonym",
      "title": "ensure / guarantee / secure / safeguard",
      "summary": "ensure 表确保；guarantee 语气更强；secure 表获得/保障；safeguard 表保护。",
      "pattern": "ensure access; guarantee rights; secure funding; safeguard security",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "ensure access; guarantee rights; secure funding; safeguard security",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S005",
      "type": "synonym",
      "channel": "synonym",
      "title": "important / essential / critical / significant",
      "summary": "important 普通；essential 必不可少；critical 关键且紧迫；significant 有显著意义。",
      "pattern": "essential services; critical infrastructure; significant progress",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "essential services; critical infrastructure; significant progress",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S006",
      "type": "synonym",
      "channel": "synonym",
      "title": "problem / issue / challenge / risk",
      "summary": "problem 负面直接；issue 中性议题；challenge 有困难但可应对；risk 强调可能损害。",
      "pattern": "address issues; meet challenges; manage risks",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "address issues; meet challenges; manage risks",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S007",
      "type": "synonym",
      "channel": "synonym",
      "title": "increase / rise / grow / expand",
      "summary": "increase 及物/不及物；rise 不及物；grow 可规模增长；expand 扩张范围。",
      "pattern": "increase investment; prices rise; the market grows; services expand",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "increase investment; prices rise; the market grows; services expand",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S008",
      "type": "synonym",
      "channel": "synonym",
      "title": "decline / fall / drop / decrease",
      "summary": "decline 较正式且渐进；fall 普通；drop 可突然下降；decrease 中性。",
      "pattern": "a decline in biodiversity; prices fell; demand dropped",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "a decline in biodiversity; prices fell; demand dropped",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S009",
      "type": "synonym",
      "channel": "synonym",
      "title": "protect / preserve / conserve / safeguard",
      "summary": "protect 防损害；preserve 保持原貌；conserve 可持续保护资源；safeguard 制度性保护。",
      "pattern": "protect data; preserve heritage; conserve water; safeguard rights",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "protect data; preserve heritage; conserve water; safeguard rights",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S010",
      "type": "synonym",
      "channel": "synonym",
      "title": "accurate / precise / exact / faithful",
      "summary": "accurate 正确；precise 精确；exact 完全一致；faithful 忠实原意。",
      "pattern": "accurate translation; precise terminology; faithful rendering",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "accurate translation; precise terminology; faithful rendering",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S011",
      "type": "synonym",
      "channel": "synonym",
      "title": "fast / rapid / swift / accelerated",
      "summary": "rapid 正式；swift 强调迅速行动；accelerated 强调加速。",
      "pattern": "rapid urbanization; swift response; accelerated deployment",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "rapid urbanization; swift response; accelerated deployment",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S012",
      "type": "synonym",
      "channel": "synonym",
      "title": "use / utilize / adopt / employ",
      "summary": "use 普通；utilize 偏正式但勿滥用；adopt 采纳方法；employ 使用手段。",
      "pattern": "adopt standards; employ methods; utilize resources",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "adopt standards; employ methods; utilize resources",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S013",
      "type": "synonym",
      "channel": "synonym",
      "title": "help / facilitate / enable / support",
      "summary": "facilitate 促进过程；enable 使成为可能；support 支持。",
      "pattern": "facilitate trade; enable innovation; support implementation",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "facilitate trade; enable innovation; support implementation",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S014",
      "type": "synonym",
      "channel": "synonym",
      "title": "fair / equitable / just / balanced",
      "summary": "equitable 强调公平获取和分配；just 带正义色彩；balanced 强调平衡。",
      "pattern": "equitable access; just transition; balanced development",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "equitable access; just transition; balanced development",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S015",
      "type": "synonym",
      "channel": "synonym",
      "title": "rule / regulation / policy / guideline",
      "summary": "rule 规则；regulation 法规；policy 政策；guideline 指南。",
      "pattern": "data regulation; industrial policy; clinical guideline",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "data regulation; industrial policy; clinical guideline",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S016",
      "type": "synonym",
      "channel": "synonym",
      "title": "change / transformation / transition / shift",
      "summary": "transformation 深层变革；transition 过渡；shift 转向。",
      "pattern": "digital transformation; green transition; policy shift",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "digital transformation; green transition; policy shift",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S017",
      "type": "synonym",
      "channel": "synonym",
      "title": "ability / capacity / capability / competence",
      "summary": "capacity 容量/能力建设；capability 技术能力；competence 专业胜任力。",
      "pattern": "institutional capacity; technological capability; translation competence",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "institutional capacity; technological capability; translation competence",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S018",
      "type": "synonym",
      "channel": "synonym",
      "title": "clear / explicit / transparent / coherent",
      "summary": "explicit 明确说出；transparent 透明；coherent 连贯一致。",
      "pattern": "explicit criteria; transparent process; coherent policy",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "explicit criteria; transparent process; coherent policy",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S019",
      "type": "synonym",
      "channel": "synonym",
      "title": "new / emerging / novel / cutting-edge",
      "summary": "emerging 新兴发展中；novel 新颖；cutting-edge 前沿。",
      "pattern": "emerging industries; novel therapy; cutting-edge technology",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "emerging industries; novel therapy; cutting-edge technology",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "S020",
      "type": "synonym",
      "channel": "synonym",
      "title": "old / aging / obsolete / outdated",
      "summary": "aging 老龄化/老化；obsolete 被淘汰；outdated 过时。",
      "pattern": "aging population; obsolete equipment; outdated rules",
      "exam": "综合词义辨析、实务选词精准度。",
      "trap": "只看中文近义，不看宾语对象和语体。",
      "examples": [
        {
          "en": "aging population; obsolete equipment; outdated rules",
          "zh": "按对象和语境选择，不要全部译成同一个中文词。"
        }
      ],
      "memory": "四问：对象是什么？强度多大？语体正式吗？褒贬方向是什么？",
      "drill": "任选其中两个词各造一个政策/科技语境句。"
    },
    {
      "id": "R001",
      "type": "register",
      "channel": "register",
      "title": "a lot of → substantial / considerable / numerous",
      "summary": "中文“很多”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "substantial / considerable / numerous",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: a lot of; Formal: substantial / considerable / numerous.",
          "zh": "记忆：很多 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “很多” 的中文句子改译成正式英文。"
    },
    {
      "id": "R002",
      "type": "register",
      "channel": "register",
      "title": "big problem → major challenge / pressing issue",
      "summary": "中文“大问题”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "major challenge / pressing issue",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: big problem; Formal: major challenge / pressing issue.",
          "zh": "记忆：大问题 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “大问题” 的中文句子改译成正式英文。"
    },
    {
      "id": "R003",
      "type": "register",
      "channel": "register",
      "title": "deal with → address / tackle / respond to",
      "summary": "中文“处理”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "address / tackle / respond to",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: deal with; Formal: address / tackle / respond to.",
          "zh": "记忆：处理 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “处理” 的中文句子改译成正式英文。"
    },
    {
      "id": "R004",
      "type": "register",
      "channel": "register",
      "title": "things → factors / issues / measures / phenomena",
      "summary": "中文“东西/事情”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "factors / issues / measures / phenomena",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: things; Formal: factors / issues / measures / phenomena.",
          "zh": "记忆：东西/事情 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “东西/事情” 的中文句子改译成正式英文。"
    },
    {
      "id": "R005",
      "type": "register",
      "channel": "register",
      "title": "good for → beneficial to / conducive to",
      "summary": "中文“有利于”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "beneficial to / conducive to",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: good for; Formal: beneficial to / conducive to.",
          "zh": "记忆：有利于 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “有利于” 的中文句子改译成正式英文。"
    },
    {
      "id": "R006",
      "type": "register",
      "channel": "register",
      "title": "bad for → detrimental to / harmful to",
      "summary": "中文“不利于”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "detrimental to / harmful to",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: bad for; Formal: detrimental to / harmful to.",
          "zh": "记忆：不利于 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “不利于” 的中文句子改译成正式英文。"
    },
    {
      "id": "R007",
      "type": "register",
      "channel": "register",
      "title": "make better → improve / enhance / strengthen",
      "summary": "中文“改善”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "improve / enhance / strengthen",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: make better; Formal: improve / enhance / strengthen.",
          "zh": "记忆：改善 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “改善” 的中文句子改译成正式英文。"
    },
    {
      "id": "R008",
      "type": "register",
      "channel": "register",
      "title": "get worse → deteriorate / worsen",
      "summary": "中文“恶化”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "deteriorate / worsen",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: get worse; Formal: deteriorate / worsen.",
          "zh": "记忆：恶化 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “恶化” 的中文句子改译成正式英文。"
    },
    {
      "id": "R009",
      "type": "register",
      "channel": "register",
      "title": "use more → make greater use of / expand the use of",
      "summary": "中文“更多使用”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "make greater use of / expand the use of",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: use more; Formal: make greater use of / expand the use of.",
          "zh": "记忆：更多使用 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “更多使用” 的中文句子改译成正式英文。"
    },
    {
      "id": "R010",
      "type": "register",
      "channel": "register",
      "title": "find out → identify / determine / establish",
      "summary": "中文“发现/确定”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "identify / determine / establish",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: find out; Formal: identify / determine / establish.",
          "zh": "记忆：发现/确定 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “发现/确定” 的中文句子改译成正式英文。"
    },
    {
      "id": "R011",
      "type": "register",
      "channel": "register",
      "title": "start → launch / initiate / introduce",
      "summary": "中文“启动”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "launch / initiate / introduce",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: start; Formal: launch / initiate / introduce.",
          "zh": "记忆：启动 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “启动” 的中文句子改译成正式英文。"
    },
    {
      "id": "R012",
      "type": "register",
      "channel": "register",
      "title": "end → terminate / phase out / bring to an end",
      "summary": "中文“结束”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "terminate / phase out / bring to an end",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: end; Formal: terminate / phase out / bring to an end.",
          "zh": "记忆：结束 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “结束” 的中文句子改译成正式英文。"
    },
    {
      "id": "R013",
      "type": "register",
      "channel": "register",
      "title": "keep doing → continue to / remain committed to",
      "summary": "中文“继续”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "continue to / remain committed to",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: keep doing; Formal: continue to / remain committed to.",
          "zh": "记忆：继续 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “继续” 的中文句子改译成正式英文。"
    },
    {
      "id": "R014",
      "type": "register",
      "channel": "register",
      "title": "want to → seek to / aim to / intend to",
      "summary": "中文“想要”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "seek to / aim to / intend to",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: want to; Formal: seek to / aim to / intend to.",
          "zh": "记忆：想要 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “想要” 的中文句子改译成正式英文。"
    },
    {
      "id": "R015",
      "type": "register",
      "channel": "register",
      "title": "try to → seek to / endeavor to / make efforts to",
      "summary": "中文“尝试”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "seek to / endeavor to / make efforts to",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: try to; Formal: seek to / endeavor to / make efforts to.",
          "zh": "记忆：尝试 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “尝试” 的中文句子改译成正式英文。"
    },
    {
      "id": "R016",
      "type": "register",
      "channel": "register",
      "title": "can → be able to / have the potential to / can",
      "summary": "中文“能够”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "be able to / have the potential to / can",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: can; Formal: be able to / have the potential to / can.",
          "zh": "记忆：能够 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “能够” 的中文句子改译成正式英文。"
    },
    {
      "id": "R017",
      "type": "register",
      "channel": "register",
      "title": "maybe → may / might / is likely to",
      "summary": "中文“可能”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "may / might / is likely to",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: maybe; Formal: may / might / is likely to.",
          "zh": "记忆：可能 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “可能” 的中文句子改译成正式英文。"
    },
    {
      "id": "R018",
      "type": "register",
      "channel": "register",
      "title": "very → highly / extremely / significantly / particularly",
      "summary": "中文“非常”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "highly / extremely / significantly / particularly",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: very; Formal: highly / extremely / significantly / particularly.",
          "zh": "记忆：非常 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “非常” 的中文句子改译成正式英文。"
    },
    {
      "id": "R019",
      "type": "register",
      "channel": "register",
      "title": "more and more → increasingly / a growing number of",
      "summary": "中文“越来越”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "increasingly / a growing number of",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: more and more; Formal: increasingly / a growing number of.",
          "zh": "记忆：越来越 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “越来越” 的中文句子改译成正式英文。"
    },
    {
      "id": "R020",
      "type": "register",
      "channel": "register",
      "title": "about → regarding / concerning / with respect to",
      "summary": "中文“关于”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "regarding / concerning / with respect to",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: about; Formal: regarding / concerning / with respect to.",
          "zh": "记忆：关于 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “关于” 的中文句子改译成正式英文。"
    },
    {
      "id": "R021",
      "type": "register",
      "channel": "register",
      "title": "nowadays → currently / in recent years",
      "summary": "中文“如今”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "currently / in recent years",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: nowadays; Formal: currently / in recent years.",
          "zh": "记忆：如今 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “如今” 的中文句子改译成正式英文。"
    },
    {
      "id": "R022",
      "type": "register",
      "channel": "register",
      "title": "so → therefore / thus / as a result",
      "summary": "中文“所以”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "therefore / thus / as a result",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: so; Formal: therefore / thus / as a result.",
          "zh": "记忆：所以 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “所以” 的中文句子改译成正式英文。"
    },
    {
      "id": "R023",
      "type": "register",
      "channel": "register",
      "title": "but → however / nevertheless / yet",
      "summary": "中文“但是”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "however / nevertheless / yet",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: but; Formal: however / nevertheless / yet.",
          "zh": "记忆：但是 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “但是” 的中文句子改译成正式英文。"
    },
    {
      "id": "R024",
      "type": "register",
      "channel": "register",
      "title": "because of → due to / owing to / as a result of",
      "summary": "中文“因为”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "due to / owing to / as a result of",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: because of; Formal: due to / owing to / as a result of.",
          "zh": "记忆：因为 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “因为” 的中文句子改译成正式英文。"
    },
    {
      "id": "R025",
      "type": "register",
      "channel": "register",
      "title": "help → facilitate / support / enable",
      "summary": "中文“帮助”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "facilitate / support / enable",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: help; Formal: facilitate / support / enable.",
          "zh": "记忆：帮助 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “帮助” 的中文句子改译成正式英文。"
    },
    {
      "id": "R026",
      "type": "register",
      "channel": "register",
      "title": "let people → enable people to / allow citizens to",
      "summary": "中文“让人们”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "enable people to / allow citizens to",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: let people; Formal: enable people to / allow citizens to.",
          "zh": "记忆：让人们 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “让人们” 的中文句子改译成正式英文。"
    },
    {
      "id": "R027",
      "type": "register",
      "channel": "register",
      "title": "useful → effective / practical / valuable",
      "summary": "中文“有用”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "effective / practical / valuable",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: useful; Formal: effective / practical / valuable.",
          "zh": "记忆：有用 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “有用” 的中文句子改译成正式英文。"
    },
    {
      "id": "R028",
      "type": "register",
      "channel": "register",
      "title": "cheap → cost-effective / affordable",
      "summary": "中文“便宜”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "cost-effective / affordable",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: cheap; Formal: cost-effective / affordable.",
          "zh": "记忆：便宜 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “便宜” 的中文句子改译成正式英文。"
    },
    {
      "id": "R029",
      "type": "register",
      "channel": "register",
      "title": "rich and poor → income groups / social groups",
      "summary": "中文“贫富”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "income groups / social groups",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: rich and poor; Formal: income groups / social groups.",
          "zh": "记忆：贫富 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “贫富” 的中文句子改译成正式英文。"
    },
    {
      "id": "R030",
      "type": "register",
      "channel": "register",
      "title": "old people → older adults / the elderly / aging population",
      "summary": "中文“老人”在正式翻译中要根据对象选择更精确表达。",
      "pattern": "older adults / the elderly / aging population",
      "exam": "汉译英语域、词汇多样性、正式度。",
      "trap": "把口语词硬塞进政策/科技/新闻语体。",
      "examples": [
        {
          "en": "Casual: old people; Formal: older adults / the elderly / aging population.",
          "zh": "记忆：老人 ≠ 一个固定英文，要看宾语。"
        }
      ],
      "memory": "正式化 = 更具体的名词 + 更精确的动词 + 更稳定的搭配。",
      "drill": "把含有 “老人” 的中文句子改译成正式英文。"
    },
    {
      "id": "T001",
      "type": "term",
      "channel": "政策治理",
      "title": "policy coordination｜政策协同",
      "summary": "政策治理常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "policy coordination",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on policy coordination and its practical implications.",
          "zh": "讨论聚焦于“政策协同”及其实际影响。"
        }
      ],
      "memory": "政策治理 = 术语 + 场景 + 动词搭配。",
      "drill": "用 policy coordination 写一句正式英文，并译成中文。"
    },
    {
      "id": "T002",
      "type": "term",
      "channel": "政策治理",
      "title": "institutional reform｜制度改革",
      "summary": "政策治理常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "institutional reform",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on institutional reform and its practical implications.",
          "zh": "讨论聚焦于“制度改革”及其实际影响。"
        }
      ],
      "memory": "政策治理 = 术语 + 场景 + 动词搭配。",
      "drill": "用 institutional reform 写一句正式英文，并译成中文。"
    },
    {
      "id": "T003",
      "type": "term",
      "channel": "政策治理",
      "title": "regulatory framework｜监管框架",
      "summary": "政策治理常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "regulatory framework",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on regulatory framework and its practical implications.",
          "zh": "讨论聚焦于“监管框架”及其实际影响。"
        }
      ],
      "memory": "政策治理 = 术语 + 场景 + 动词搭配。",
      "drill": "用 regulatory framework 写一句正式英文，并译成中文。"
    },
    {
      "id": "T004",
      "type": "term",
      "channel": "政策治理",
      "title": "law-based governance｜法治化治理",
      "summary": "政策治理常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "law-based governance",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on law-based governance and its practical implications.",
          "zh": "讨论聚焦于“法治化治理”及其实际影响。"
        }
      ],
      "memory": "政策治理 = 术语 + 场景 + 动词搭配。",
      "drill": "用 law-based governance 写一句正式英文，并译成中文。"
    },
    {
      "id": "T005",
      "type": "term",
      "channel": "政策治理",
      "title": "public participation｜公众参与",
      "summary": "政策治理常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "public participation",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on public participation and its practical implications.",
          "zh": "讨论聚焦于“公众参与”及其实际影响。"
        }
      ],
      "memory": "政策治理 = 术语 + 场景 + 动词搭配。",
      "drill": "用 public participation 写一句正式英文，并译成中文。"
    },
    {
      "id": "T006",
      "type": "term",
      "channel": "政策治理",
      "title": "evidence-based policymaking｜循证决策",
      "summary": "政策治理常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "evidence-based policymaking",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on evidence-based policymaking and its practical implications.",
          "zh": "讨论聚焦于“循证决策”及其实际影响。"
        }
      ],
      "memory": "政策治理 = 术语 + 场景 + 动词搭配。",
      "drill": "用 evidence-based policymaking 写一句正式英文，并译成中文。"
    },
    {
      "id": "T007",
      "type": "term",
      "channel": "政策治理",
      "title": "implementation capacity｜执行能力",
      "summary": "政策治理常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "implementation capacity",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on implementation capacity and its practical implications.",
          "zh": "讨论聚焦于“执行能力”及其实际影响。"
        }
      ],
      "memory": "政策治理 = 术语 + 场景 + 动词搭配。",
      "drill": "用 implementation capacity 写一句正式英文，并译成中文。"
    },
    {
      "id": "T008",
      "type": "term",
      "channel": "政策治理",
      "title": "cross-sector coordination｜跨部门协调",
      "summary": "政策治理常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "cross-sector coordination",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on cross-sector coordination and its practical implications.",
          "zh": "讨论聚焦于“跨部门协调”及其实际影响。"
        }
      ],
      "memory": "政策治理 = 术语 + 场景 + 动词搭配。",
      "drill": "用 cross-sector coordination 写一句正式英文，并译成中文。"
    },
    {
      "id": "T009",
      "type": "term",
      "channel": "政策治理",
      "title": "accountability mechanism｜问责机制",
      "summary": "政策治理常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "accountability mechanism",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on accountability mechanism and its practical implications.",
          "zh": "讨论聚焦于“问责机制”及其实际影响。"
        }
      ],
      "memory": "政策治理 = 术语 + 场景 + 动词搭配。",
      "drill": "用 accountability mechanism 写一句正式英文，并译成中文。"
    },
    {
      "id": "T010",
      "type": "term",
      "channel": "政策治理",
      "title": "risk prevention and control｜风险防控",
      "summary": "政策治理常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "risk prevention and control",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on risk prevention and control and its practical implications.",
          "zh": "讨论聚焦于“风险防控”及其实际影响。"
        }
      ],
      "memory": "政策治理 = 术语 + 场景 + 动词搭配。",
      "drill": "用 risk prevention and control 写一句正式英文，并译成中文。"
    },
    {
      "id": "T011",
      "type": "term",
      "channel": "政策治理",
      "title": "pilot program｜试点项目",
      "summary": "政策治理常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "pilot program",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on pilot program and its practical implications.",
          "zh": "讨论聚焦于“试点项目”及其实际影响。"
        }
      ],
      "memory": "政策治理 = 术语 + 场景 + 动词搭配。",
      "drill": "用 pilot program 写一句正式英文，并译成中文。"
    },
    {
      "id": "T012",
      "type": "term",
      "channel": "政策治理",
      "title": "scalable solution｜可推广方案",
      "summary": "政策治理常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "scalable solution",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on scalable solution and its practical implications.",
          "zh": "讨论聚焦于“可推广方案”及其实际影响。"
        }
      ],
      "memory": "政策治理 = 术语 + 场景 + 动词搭配。",
      "drill": "用 scalable solution 写一句正式英文，并译成中文。"
    },
    {
      "id": "T013",
      "type": "term",
      "channel": "经济产业",
      "title": "high-quality development｜高质量发展",
      "summary": "经济产业常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "high-quality development",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on high-quality development and its practical implications.",
          "zh": "讨论聚焦于“高质量发展”及其实际影响。"
        }
      ],
      "memory": "经济产业 = 术语 + 场景 + 动词搭配。",
      "drill": "用 high-quality development 写一句正式英文，并译成中文。"
    },
    {
      "id": "T014",
      "type": "term",
      "channel": "经济产业",
      "title": "new quality productive forces｜新质生产力",
      "summary": "经济产业常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "new quality productive forces",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on new quality productive forces and its practical implications.",
          "zh": "讨论聚焦于“新质生产力”及其实际影响。"
        }
      ],
      "memory": "经济产业 = 术语 + 场景 + 动词搭配。",
      "drill": "用 new quality productive forces 写一句正式英文，并译成中文。"
    },
    {
      "id": "T015",
      "type": "term",
      "channel": "经济产业",
      "title": "industrial upgrading｜产业升级",
      "summary": "经济产业常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "industrial upgrading",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on industrial upgrading and its practical implications.",
          "zh": "讨论聚焦于“产业升级”及其实际影响。"
        }
      ],
      "memory": "经济产业 = 术语 + 场景 + 动词搭配。",
      "drill": "用 industrial upgrading 写一句正式英文，并译成中文。"
    },
    {
      "id": "T016",
      "type": "term",
      "channel": "经济产业",
      "title": "supply-chain resilience｜供应链韧性",
      "summary": "经济产业常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "supply-chain resilience",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on supply-chain resilience and its practical implications.",
          "zh": "讨论聚焦于“供应链韧性”及其实际影响。"
        }
      ],
      "memory": "经济产业 = 术语 + 场景 + 动词搭配。",
      "drill": "用 supply-chain resilience 写一句正式英文，并译成中文。"
    },
    {
      "id": "T017",
      "type": "term",
      "channel": "经济产业",
      "title": "domestic demand｜国内需求",
      "summary": "经济产业常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "domestic demand",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on domestic demand and its practical implications.",
          "zh": "讨论聚焦于“国内需求”及其实际影响。"
        }
      ],
      "memory": "经济产业 = 术语 + 场景 + 动词搭配。",
      "drill": "用 domestic demand 写一句正式英文，并译成中文。"
    },
    {
      "id": "T018",
      "type": "term",
      "channel": "经济产业",
      "title": "consumption recovery｜消费复苏",
      "summary": "经济产业常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "consumption recovery",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on consumption recovery and its practical implications.",
          "zh": "讨论聚焦于“消费复苏”及其实际影响。"
        }
      ],
      "memory": "经济产业 = 术语 + 场景 + 动词搭配。",
      "drill": "用 consumption recovery 写一句正式英文，并译成中文。"
    },
    {
      "id": "T019",
      "type": "term",
      "channel": "经济产业",
      "title": "small and medium-sized enterprises｜中小企业",
      "summary": "经济产业常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "small and medium-sized enterprises",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on small and medium-sized enterprises and its practical implications.",
          "zh": "讨论聚焦于“中小企业”及其实际影响。"
        }
      ],
      "memory": "经济产业 = 术语 + 场景 + 动词搭配。",
      "drill": "用 small and medium-sized enterprises 写一句正式英文，并译成中文。"
    },
    {
      "id": "T020",
      "type": "term",
      "channel": "经济产业",
      "title": "market expectations｜市场预期",
      "summary": "经济产业常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "market expectations",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on market expectations and its practical implications.",
          "zh": "讨论聚焦于“市场预期”及其实际影响。"
        }
      ],
      "memory": "经济产业 = 术语 + 场景 + 动词搭配。",
      "drill": "用 market expectations 写一句正式英文，并译成中文。"
    },
    {
      "id": "T021",
      "type": "term",
      "channel": "经济产业",
      "title": "inclusive finance｜普惠金融",
      "summary": "经济产业常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "inclusive finance",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on inclusive finance and its practical implications.",
          "zh": "讨论聚焦于“普惠金融”及其实际影响。"
        }
      ],
      "memory": "经济产业 = 术语 + 场景 + 动词搭配。",
      "drill": "用 inclusive finance 写一句正式英文，并译成中文。"
    },
    {
      "id": "T022",
      "type": "term",
      "channel": "经济产业",
      "title": "real economy｜实体经济",
      "summary": "经济产业常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "real economy",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on real economy and its practical implications.",
          "zh": "讨论聚焦于“实体经济”及其实际影响。"
        }
      ],
      "memory": "经济产业 = 术语 + 场景 + 动词搭配。",
      "drill": "用 real economy 写一句正式英文，并译成中文。"
    },
    {
      "id": "T023",
      "type": "term",
      "channel": "经济产业",
      "title": "productivity gains｜生产率提升",
      "summary": "经济产业常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "productivity gains",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on productivity gains and its practical implications.",
          "zh": "讨论聚焦于“生产率提升”及其实际影响。"
        }
      ],
      "memory": "经济产业 = 术语 + 场景 + 动词搭配。",
      "drill": "用 productivity gains 写一句正式英文，并译成中文。"
    },
    {
      "id": "T024",
      "type": "term",
      "channel": "经济产业",
      "title": "structural adjustment｜结构调整",
      "summary": "经济产业常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "structural adjustment",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on structural adjustment and its practical implications.",
          "zh": "讨论聚焦于“结构调整”及其实际影响。"
        }
      ],
      "memory": "经济产业 = 术语 + 场景 + 动词搭配。",
      "drill": "用 structural adjustment 写一句正式英文，并译成中文。"
    },
    {
      "id": "T025",
      "type": "term",
      "channel": "人工智能",
      "title": "AI governance｜人工智能治理",
      "summary": "人工智能常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "AI governance",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on AI governance and its practical implications.",
          "zh": "讨论聚焦于“人工智能治理”及其实际影响。"
        }
      ],
      "memory": "人工智能 = 术语 + 场景 + 动词搭配。",
      "drill": "用 AI governance 写一句正式英文，并译成中文。"
    },
    {
      "id": "T026",
      "type": "term",
      "channel": "人工智能",
      "title": "foundation model｜基础模型",
      "summary": "人工智能常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "foundation model",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on foundation model and its practical implications.",
          "zh": "讨论聚焦于“基础模型”及其实际影响。"
        }
      ],
      "memory": "人工智能 = 术语 + 场景 + 动词搭配。",
      "drill": "用 foundation model 写一句正式英文，并译成中文。"
    },
    {
      "id": "T027",
      "type": "term",
      "channel": "人工智能",
      "title": "AI agent｜智能体",
      "summary": "人工智能常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "AI agent",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on AI agent and its practical implications.",
          "zh": "讨论聚焦于“智能体”及其实际影响。"
        }
      ],
      "memory": "人工智能 = 术语 + 场景 + 动词搭配。",
      "drill": "用 AI agent 写一句正式英文，并译成中文。"
    },
    {
      "id": "T028",
      "type": "term",
      "channel": "人工智能",
      "title": "alignment｜对齐",
      "summary": "人工智能常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "alignment",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on alignment and its practical implications.",
          "zh": "讨论聚焦于“对齐”及其实际影响。"
        }
      ],
      "memory": "人工智能 = 术语 + 场景 + 动词搭配。",
      "drill": "用 alignment 写一句正式英文，并译成中文。"
    },
    {
      "id": "T029",
      "type": "term",
      "channel": "人工智能",
      "title": "data privacy｜数据隐私",
      "summary": "人工智能常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "data privacy",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on data privacy and its practical implications.",
          "zh": "讨论聚焦于“数据隐私”及其实际影响。"
        }
      ],
      "memory": "人工智能 = 术语 + 场景 + 动词搭配。",
      "drill": "用 data privacy 写一句正式英文，并译成中文。"
    },
    {
      "id": "T030",
      "type": "term",
      "channel": "人工智能",
      "title": "algorithmic bias｜算法偏见",
      "summary": "人工智能常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "algorithmic bias",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on algorithmic bias and its practical implications.",
          "zh": "讨论聚焦于“算法偏见”及其实际影响。"
        }
      ],
      "memory": "人工智能 = 术语 + 场景 + 动词搭配。",
      "drill": "用 algorithmic bias 写一句正式英文，并译成中文。"
    },
    {
      "id": "T031",
      "type": "term",
      "channel": "人工智能",
      "title": "model evaluation｜模型评估",
      "summary": "人工智能常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "model evaluation",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on model evaluation and its practical implications.",
          "zh": "讨论聚焦于“模型评估”及其实际影响。"
        }
      ],
      "memory": "人工智能 = 术语 + 场景 + 动词搭配。",
      "drill": "用 model evaluation 写一句正式英文，并译成中文。"
    },
    {
      "id": "T032",
      "type": "term",
      "channel": "人工智能",
      "title": "compute infrastructure｜算力基础设施",
      "summary": "人工智能常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "compute infrastructure",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on compute infrastructure and its practical implications.",
          "zh": "讨论聚焦于“算力基础设施”及其实际影响。"
        }
      ],
      "memory": "人工智能 = 术语 + 场景 + 动词搭配。",
      "drill": "用 compute infrastructure 写一句正式英文，并译成中文。"
    },
    {
      "id": "T033",
      "type": "term",
      "channel": "人工智能",
      "title": "open-source ecosystem｜开源生态",
      "summary": "人工智能常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "open-source ecosystem",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on open-source ecosystem and its practical implications.",
          "zh": "讨论聚焦于“开源生态”及其实际影响。"
        }
      ],
      "memory": "人工智能 = 术语 + 场景 + 动词搭配。",
      "drill": "用 open-source ecosystem 写一句正式英文，并译成中文。"
    },
    {
      "id": "T034",
      "type": "term",
      "channel": "人工智能",
      "title": "human oversight｜人工监督",
      "summary": "人工智能常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "human oversight",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on human oversight and its practical implications.",
          "zh": "讨论聚焦于“人工监督”及其实际影响。"
        }
      ],
      "memory": "人工智能 = 术语 + 场景 + 动词搭配。",
      "drill": "用 human oversight 写一句正式英文，并译成中文。"
    },
    {
      "id": "T035",
      "type": "term",
      "channel": "人工智能",
      "title": "synthetic data｜合成数据",
      "summary": "人工智能常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "synthetic data",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on synthetic data and its practical implications.",
          "zh": "讨论聚焦于“合成数据”及其实际影响。"
        }
      ],
      "memory": "人工智能 = 术语 + 场景 + 动词搭配。",
      "drill": "用 synthetic data 写一句正式英文，并译成中文。"
    },
    {
      "id": "T036",
      "type": "term",
      "channel": "人工智能",
      "title": "safety benchmark｜安全基准",
      "summary": "人工智能常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "safety benchmark",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on safety benchmark and its practical implications.",
          "zh": "讨论聚焦于“安全基准”及其实际影响。"
        }
      ],
      "memory": "人工智能 = 术语 + 场景 + 动词搭配。",
      "drill": "用 safety benchmark 写一句正式英文，并译成中文。"
    },
    {
      "id": "T037",
      "type": "term",
      "channel": "航天火星",
      "title": "launch vehicle｜运载火箭",
      "summary": "航天火星常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "launch vehicle",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on launch vehicle and its practical implications.",
          "zh": "讨论聚焦于“运载火箭”及其实际影响。"
        }
      ],
      "memory": "航天火星 = 术语 + 场景 + 动词搭配。",
      "drill": "用 launch vehicle 写一句正式英文，并译成中文。"
    },
    {
      "id": "T038",
      "type": "term",
      "channel": "航天火星",
      "title": "payload｜有效载荷",
      "summary": "航天火星常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "payload",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on payload and its practical implications.",
          "zh": "讨论聚焦于“有效载荷”及其实际影响。"
        }
      ],
      "memory": "航天火星 = 术语 + 场景 + 动词搭配。",
      "drill": "用 payload 写一句正式英文，并译成中文。"
    },
    {
      "id": "T039",
      "type": "term",
      "channel": "航天火星",
      "title": "orbital test｜轨道试验",
      "summary": "航天火星常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "orbital test",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on orbital test and its practical implications.",
          "zh": "讨论聚焦于“轨道试验”及其实际影响。"
        }
      ],
      "memory": "航天火星 = 术语 + 场景 + 动词搭配。",
      "drill": "用 orbital test 写一句正式英文，并译成中文。"
    },
    {
      "id": "T040",
      "type": "term",
      "channel": "航天火星",
      "title": "reusable rocket｜可重复使用火箭",
      "summary": "航天火星常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "reusable rocket",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on reusable rocket and its practical implications.",
          "zh": "讨论聚焦于“可重复使用火箭”及其实际影响。"
        }
      ],
      "memory": "航天火星 = 术语 + 场景 + 动词搭配。",
      "drill": "用 reusable rocket 写一句正式英文，并译成中文。"
    },
    {
      "id": "T041",
      "type": "term",
      "channel": "航天火星",
      "title": "life-support system｜生命保障系统",
      "summary": "航天火星常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "life-support system",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on life-support system and its practical implications.",
          "zh": "讨论聚焦于“生命保障系统”及其实际影响。"
        }
      ],
      "memory": "航天火星 = 术语 + 场景 + 动词搭配。",
      "drill": "用 life-support system 写一句正式英文，并译成中文。"
    },
    {
      "id": "T042",
      "type": "term",
      "channel": "航天火星",
      "title": "in-situ resource utilization｜原位资源利用",
      "summary": "航天火星常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "in-situ resource utilization",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on in-situ resource utilization and its practical implications.",
          "zh": "讨论聚焦于“原位资源利用”及其实际影响。"
        }
      ],
      "memory": "航天火星 = 术语 + 场景 + 动词搭配。",
      "drill": "用 in-situ resource utilization 写一句正式英文，并译成中文。"
    },
    {
      "id": "T043",
      "type": "term",
      "channel": "航天火星",
      "title": "deep-space mission｜深空任务",
      "summary": "航天火星常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "deep-space mission",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on deep-space mission and its practical implications.",
          "zh": "讨论聚焦于“深空任务”及其实际影响。"
        }
      ],
      "memory": "航天火星 = 术语 + 场景 + 动词搭配。",
      "drill": "用 deep-space mission 写一句正式英文，并译成中文。"
    },
    {
      "id": "T044",
      "type": "term",
      "channel": "航天火星",
      "title": "crew transportation｜载人运输",
      "summary": "航天火星常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "crew transportation",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on crew transportation and its practical implications.",
          "zh": "讨论聚焦于“载人运输”及其实际影响。"
        }
      ],
      "memory": "航天火星 = 术语 + 场景 + 动词搭配。",
      "drill": "用 crew transportation 写一句正式英文，并译成中文。"
    },
    {
      "id": "T045",
      "type": "term",
      "channel": "航天火星",
      "title": "lunar gateway｜月球门户",
      "summary": "航天火星常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "lunar gateway",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on lunar gateway and its practical implications.",
          "zh": "讨论聚焦于“月球门户”及其实际影响。"
        }
      ],
      "memory": "航天火星 = 术语 + 场景 + 动词搭配。",
      "drill": "用 lunar gateway 写一句正式英文，并译成中文。"
    },
    {
      "id": "T046",
      "type": "term",
      "channel": "航天火星",
      "title": "Mars settlement｜火星定居点",
      "summary": "航天火星常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "Mars settlement",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on Mars settlement and its practical implications.",
          "zh": "讨论聚焦于“火星定居点”及其实际影响。"
        }
      ],
      "memory": "航天火星 = 术语 + 场景 + 动词搭配。",
      "drill": "用 Mars settlement 写一句正式英文，并译成中文。"
    },
    {
      "id": "T047",
      "type": "term",
      "channel": "航天火星",
      "title": "propellant transfer｜推进剂转移",
      "summary": "航天火星常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "propellant transfer",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on propellant transfer and its practical implications.",
          "zh": "讨论聚焦于“推进剂转移”及其实际影响。"
        }
      ],
      "memory": "航天火星 = 术语 + 场景 + 动词搭配。",
      "drill": "用 propellant transfer 写一句正式英文，并译成中文。"
    },
    {
      "id": "T048",
      "type": "term",
      "channel": "航天火星",
      "title": "entry, descent and landing｜进入、下降与着陆",
      "summary": "航天火星常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "entry, descent and landing",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on entry, descent and landing and its practical implications.",
          "zh": "讨论聚焦于“进入、下降与着陆”及其实际影响。"
        }
      ],
      "memory": "航天火星 = 术语 + 场景 + 动词搭配。",
      "drill": "用 entry, descent and landing 写一句正式英文，并译成中文。"
    },
    {
      "id": "T049",
      "type": "term",
      "channel": "脑机接口",
      "title": "brain-computer interface｜脑机接口",
      "summary": "脑机接口常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "brain-computer interface",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on brain-computer interface and its practical implications.",
          "zh": "讨论聚焦于“脑机接口”及其实际影响。"
        }
      ],
      "memory": "脑机接口 = 术语 + 场景 + 动词搭配。",
      "drill": "用 brain-computer interface 写一句正式英文，并译成中文。"
    },
    {
      "id": "T050",
      "type": "term",
      "channel": "脑机接口",
      "title": "neural signal｜神经信号",
      "summary": "脑机接口常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "neural signal",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on neural signal and its practical implications.",
          "zh": "讨论聚焦于“神经信号”及其实际影响。"
        }
      ],
      "memory": "脑机接口 = 术语 + 场景 + 动词搭配。",
      "drill": "用 neural signal 写一句正式英文，并译成中文。"
    },
    {
      "id": "T051",
      "type": "term",
      "channel": "脑机接口",
      "title": "implantable device｜植入式设备",
      "summary": "脑机接口常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "implantable device",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on implantable device and its practical implications.",
          "zh": "讨论聚焦于“植入式设备”及其实际影响。"
        }
      ],
      "memory": "脑机接口 = 术语 + 场景 + 动词搭配。",
      "drill": "用 implantable device 写一句正式英文，并译成中文。"
    },
    {
      "id": "T052",
      "type": "term",
      "channel": "脑机接口",
      "title": "wireless interface｜无线接口",
      "summary": "脑机接口常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "wireless interface",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on wireless interface and its practical implications.",
          "zh": "讨论聚焦于“无线接口”及其实际影响。"
        }
      ],
      "memory": "脑机接口 = 术语 + 场景 + 动词搭配。",
      "drill": "用 wireless interface 写一句正式英文，并译成中文。"
    },
    {
      "id": "T053",
      "type": "term",
      "channel": "脑机接口",
      "title": "high-channel-count system｜高通道数系统",
      "summary": "脑机接口常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "high-channel-count system",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on high-channel-count system and its practical implications.",
          "zh": "讨论聚焦于“高通道数系统”及其实际影响。"
        }
      ],
      "memory": "脑机接口 = 术语 + 场景 + 动词搭配。",
      "drill": "用 high-channel-count system 写一句正式英文，并译成中文。"
    },
    {
      "id": "T054",
      "type": "term",
      "channel": "脑机接口",
      "title": "restore autonomy｜恢复自主能力",
      "summary": "脑机接口常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "restore autonomy",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on restore autonomy and its practical implications.",
          "zh": "讨论聚焦于“恢复自主能力”及其实际影响。"
        }
      ],
      "memory": "脑机接口 = 术语 + 场景 + 动词搭配。",
      "drill": "用 restore autonomy 写一句正式英文，并译成中文。"
    },
    {
      "id": "T055",
      "type": "term",
      "channel": "脑机接口",
      "title": "clinical trial｜临床试验",
      "summary": "脑机接口常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "clinical trial",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on clinical trial and its practical implications.",
          "zh": "讨论聚焦于“临床试验”及其实际影响。"
        }
      ],
      "memory": "脑机接口 = 术语 + 场景 + 动词搭配。",
      "drill": "用 clinical trial 写一句正式英文，并译成中文。"
    },
    {
      "id": "T056",
      "type": "term",
      "channel": "脑机接口",
      "title": "neural decoding｜神经解码",
      "summary": "脑机接口常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "neural decoding",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on neural decoding and its practical implications.",
          "zh": "讨论聚焦于“神经解码”及其实际影响。"
        }
      ],
      "memory": "脑机接口 = 术语 + 场景 + 动词搭配。",
      "drill": "用 neural decoding 写一句正式英文，并译成中文。"
    },
    {
      "id": "T057",
      "type": "term",
      "channel": "脑机接口",
      "title": "motor intention｜运动意图",
      "summary": "脑机接口常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "motor intention",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on motor intention and its practical implications.",
          "zh": "讨论聚焦于“运动意图”及其实际影响。"
        }
      ],
      "memory": "脑机接口 = 术语 + 场景 + 动词搭配。",
      "drill": "用 motor intention 写一句正式英文，并译成中文。"
    },
    {
      "id": "T058",
      "type": "term",
      "channel": "脑机接口",
      "title": "assistive technology｜辅助技术",
      "summary": "脑机接口常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "assistive technology",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on assistive technology and its practical implications.",
          "zh": "讨论聚焦于“辅助技术”及其实际影响。"
        }
      ],
      "memory": "脑机接口 = 术语 + 场景 + 动词搭配。",
      "drill": "用 assistive technology 写一句正式英文，并译成中文。"
    },
    {
      "id": "T059",
      "type": "term",
      "channel": "脑机接口",
      "title": "biocompatibility｜生物相容性",
      "summary": "脑机接口常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "biocompatibility",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on biocompatibility and its practical implications.",
          "zh": "讨论聚焦于“生物相容性”及其实际影响。"
        }
      ],
      "memory": "脑机接口 = 术语 + 场景 + 动词搭配。",
      "drill": "用 biocompatibility 写一句正式英文，并译成中文。"
    },
    {
      "id": "T060",
      "type": "term",
      "channel": "脑机接口",
      "title": "informed consent｜知情同意",
      "summary": "脑机接口常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "informed consent",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on informed consent and its practical implications.",
          "zh": "讨论聚焦于“知情同意”及其实际影响。"
        }
      ],
      "memory": "脑机接口 = 术语 + 场景 + 动词搭配。",
      "drill": "用 informed consent 写一句正式英文，并译成中文。"
    },
    {
      "id": "T061",
      "type": "term",
      "channel": "生物医药",
      "title": "genome editing｜基因组编辑",
      "summary": "生物医药常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "genome editing",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on genome editing and its practical implications.",
          "zh": "讨论聚焦于“基因组编辑”及其实际影响。"
        }
      ],
      "memory": "生物医药 = 术语 + 场景 + 动词搭配。",
      "drill": "用 genome editing 写一句正式英文，并译成中文。"
    },
    {
      "id": "T062",
      "type": "term",
      "channel": "生物医药",
      "title": "biosafety｜生物安全",
      "summary": "生物医药常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "biosafety",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on biosafety and its practical implications.",
          "zh": "讨论聚焦于“生物安全”及其实际影响。"
        }
      ],
      "memory": "生物医药 = 术语 + 场景 + 动词搭配。",
      "drill": "用 biosafety 写一句正式英文，并译成中文。"
    },
    {
      "id": "T063",
      "type": "term",
      "channel": "生物医药",
      "title": "biosecurity｜生物安保",
      "summary": "生物医药常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "biosecurity",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on biosecurity and its practical implications.",
          "zh": "讨论聚焦于“生物安保”及其实际影响。"
        }
      ],
      "memory": "生物医药 = 术语 + 场景 + 动词搭配。",
      "drill": "用 biosecurity 写一句正式英文，并译成中文。"
    },
    {
      "id": "T064",
      "type": "term",
      "channel": "生物医药",
      "title": "pathogen surveillance｜病原体监测",
      "summary": "生物医药常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "pathogen surveillance",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on pathogen surveillance and its practical implications.",
          "zh": "讨论聚焦于“病原体监测”及其实际影响。"
        }
      ],
      "memory": "生物医药 = 术语 + 场景 + 动词搭配。",
      "drill": "用 pathogen surveillance 写一句正式英文，并译成中文。"
    },
    {
      "id": "T065",
      "type": "term",
      "channel": "生物医药",
      "title": "vaccine equity｜疫苗公平",
      "summary": "生物医药常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "vaccine equity",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on vaccine equity and its practical implications.",
          "zh": "讨论聚焦于“疫苗公平”及其实际影响。"
        }
      ],
      "memory": "生物医药 = 术语 + 场景 + 动词搭配。",
      "drill": "用 vaccine equity 写一句正式英文，并译成中文。"
    },
    {
      "id": "T066",
      "type": "term",
      "channel": "生物医药",
      "title": "antimicrobial resistance｜抗微生物药物耐药性",
      "summary": "生物医药常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "antimicrobial resistance",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on antimicrobial resistance and its practical implications.",
          "zh": "讨论聚焦于“抗微生物药物耐药性”及其实际影响。"
        }
      ],
      "memory": "生物医药 = 术语 + 场景 + 动词搭配。",
      "drill": "用 antimicrobial resistance 写一句正式英文，并译成中文。"
    },
    {
      "id": "T067",
      "type": "term",
      "channel": "生物医药",
      "title": "clinical evidence｜临床证据",
      "summary": "生物医药常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "clinical evidence",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on clinical evidence and its practical implications.",
          "zh": "讨论聚焦于“临床证据”及其实际影响。"
        }
      ],
      "memory": "生物医药 = 术语 + 场景 + 动词搭配。",
      "drill": "用 clinical evidence 写一句正式英文，并译成中文。"
    },
    {
      "id": "T068",
      "type": "term",
      "channel": "生物医药",
      "title": "public health emergency｜公共卫生突发事件",
      "summary": "生物医药常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "public health emergency",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on public health emergency and its practical implications.",
          "zh": "讨论聚焦于“公共卫生突发事件”及其实际影响。"
        }
      ],
      "memory": "生物医药 = 术语 + 场景 + 动词搭配。",
      "drill": "用 public health emergency 写一句正式英文，并译成中文。"
    },
    {
      "id": "T069",
      "type": "term",
      "channel": "生物医药",
      "title": "therapeutics｜治疗药物",
      "summary": "生物医药常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "therapeutics",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on therapeutics and its practical implications.",
          "zh": "讨论聚焦于“治疗药物”及其实际影响。"
        }
      ],
      "memory": "生物医药 = 术语 + 场景 + 动词搭配。",
      "drill": "用 therapeutics 写一句正式英文，并译成中文。"
    },
    {
      "id": "T070",
      "type": "term",
      "channel": "生物医药",
      "title": "diagnostics｜诊断工具",
      "summary": "生物医药常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "diagnostics",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on diagnostics and its practical implications.",
          "zh": "讨论聚焦于“诊断工具”及其实际影响。"
        }
      ],
      "memory": "生物医药 = 术语 + 场景 + 动词搭配。",
      "drill": "用 diagnostics 写一句正式英文，并译成中文。"
    },
    {
      "id": "T071",
      "type": "term",
      "channel": "生物医药",
      "title": "benefit-sharing｜利益分享",
      "summary": "生物医药常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "benefit-sharing",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on benefit-sharing and its practical implications.",
          "zh": "讨论聚焦于“利益分享”及其实际影响。"
        }
      ],
      "memory": "生物医药 = 术语 + 场景 + 动词搭配。",
      "drill": "用 benefit-sharing 写一句正式英文，并译成中文。"
    },
    {
      "id": "T072",
      "type": "term",
      "channel": "生物医药",
      "title": "regulatory approval｜监管批准",
      "summary": "生物医药常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "regulatory approval",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on regulatory approval and its practical implications.",
          "zh": "讨论聚焦于“监管批准”及其实际影响。"
        }
      ],
      "memory": "生物医药 = 术语 + 场景 + 动词搭配。",
      "drill": "用 regulatory approval 写一句正式英文，并译成中文。"
    },
    {
      "id": "T073",
      "type": "term",
      "channel": "海洋保护",
      "title": "marine biodiversity｜海洋生物多样性",
      "summary": "海洋保护常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "marine biodiversity",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on marine biodiversity and its practical implications.",
          "zh": "讨论聚焦于“海洋生物多样性”及其实际影响。"
        }
      ],
      "memory": "海洋保护 = 术语 + 场景 + 动词搭配。",
      "drill": "用 marine biodiversity 写一句正式英文，并译成中文。"
    },
    {
      "id": "T074",
      "type": "term",
      "channel": "海洋保护",
      "title": "blue economy｜蓝色经济",
      "summary": "海洋保护常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "blue economy",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on blue economy and its practical implications.",
          "zh": "讨论聚焦于“蓝色经济”及其实际影响。"
        }
      ],
      "memory": "海洋保护 = 术语 + 场景 + 动词搭配。",
      "drill": "用 blue economy 写一句正式英文，并译成中文。"
    },
    {
      "id": "T075",
      "type": "term",
      "channel": "海洋保护",
      "title": "marine protected area｜海洋保护区",
      "summary": "海洋保护常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "marine protected area",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on marine protected area and its practical implications.",
          "zh": "讨论聚焦于“海洋保护区”及其实际影响。"
        }
      ],
      "memory": "海洋保护 = 术语 + 场景 + 动词搭配。",
      "drill": "用 marine protected area 写一句正式英文，并译成中文。"
    },
    {
      "id": "T076",
      "type": "term",
      "channel": "海洋保护",
      "title": "high seas treaty｜公海条约",
      "summary": "海洋保护常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "high seas treaty",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on high seas treaty and its practical implications.",
          "zh": "讨论聚焦于“公海条约”及其实际影响。"
        }
      ],
      "memory": "海洋保护 = 术语 + 场景 + 动词搭配。",
      "drill": "用 high seas treaty 写一句正式英文，并译成中文。"
    },
    {
      "id": "T077",
      "type": "term",
      "channel": "海洋保护",
      "title": "ocean acidification｜海洋酸化",
      "summary": "海洋保护常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "ocean acidification",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on ocean acidification and its practical implications.",
          "zh": "讨论聚焦于“海洋酸化”及其实际影响。"
        }
      ],
      "memory": "海洋保护 = 术语 + 场景 + 动词搭配。",
      "drill": "用 ocean acidification 写一句正式英文，并译成中文。"
    },
    {
      "id": "T078",
      "type": "term",
      "channel": "海洋保护",
      "title": "overfishing｜过度捕捞",
      "summary": "海洋保护常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "overfishing",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on overfishing and its practical implications.",
          "zh": "讨论聚焦于“过度捕捞”及其实际影响。"
        }
      ],
      "memory": "海洋保护 = 术语 + 场景 + 动词搭配。",
      "drill": "用 overfishing 写一句正式英文，并译成中文。"
    },
    {
      "id": "T079",
      "type": "term",
      "channel": "海洋保护",
      "title": "coastal resilience｜海岸韧性",
      "summary": "海洋保护常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "coastal resilience",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on coastal resilience and its practical implications.",
          "zh": "讨论聚焦于“海岸韧性”及其实际影响。"
        }
      ],
      "memory": "海洋保护 = 术语 + 场景 + 动词搭配。",
      "drill": "用 coastal resilience 写一句正式英文，并译成中文。"
    },
    {
      "id": "T080",
      "type": "term",
      "channel": "海洋保护",
      "title": "ecosystem restoration｜生态系统修复",
      "summary": "海洋保护常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "ecosystem restoration",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on ecosystem restoration and its practical implications.",
          "zh": "讨论聚焦于“生态系统修复”及其实际影响。"
        }
      ],
      "memory": "海洋保护 = 术语 + 场景 + 动词搭配。",
      "drill": "用 ecosystem restoration 写一句正式英文，并译成中文。"
    },
    {
      "id": "T081",
      "type": "term",
      "channel": "海洋保护",
      "title": "marine litter｜海洋垃圾",
      "summary": "海洋保护常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "marine litter",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on marine litter and its practical implications.",
          "zh": "讨论聚焦于“海洋垃圾”及其实际影响。"
        }
      ],
      "memory": "海洋保护 = 术语 + 场景 + 动词搭配。",
      "drill": "用 marine litter 写一句正式英文，并译成中文。"
    },
    {
      "id": "T082",
      "type": "term",
      "channel": "海洋保护",
      "title": "deep-sea mining｜深海采矿",
      "summary": "海洋保护常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "deep-sea mining",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on deep-sea mining and its practical implications.",
          "zh": "讨论聚焦于“深海采矿”及其实际影响。"
        }
      ],
      "memory": "海洋保护 = 术语 + 场景 + 动词搭配。",
      "drill": "用 deep-sea mining 写一句正式英文，并译成中文。"
    },
    {
      "id": "T083",
      "type": "term",
      "channel": "海洋保护",
      "title": "sustainable fisheries｜可持续渔业",
      "summary": "海洋保护常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "sustainable fisheries",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on sustainable fisheries and its practical implications.",
          "zh": "讨论聚焦于“可持续渔业”及其实际影响。"
        }
      ],
      "memory": "海洋保护 = 术语 + 场景 + 动词搭配。",
      "drill": "用 sustainable fisheries 写一句正式英文，并译成中文。"
    },
    {
      "id": "T084",
      "type": "term",
      "channel": "海洋保护",
      "title": "coral bleaching｜珊瑚白化",
      "summary": "海洋保护常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "coral bleaching",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on coral bleaching and its practical implications.",
          "zh": "讨论聚焦于“珊瑚白化”及其实际影响。"
        }
      ],
      "memory": "海洋保护 = 术语 + 场景 + 动词搭配。",
      "drill": "用 coral bleaching 写一句正式英文，并译成中文。"
    },
    {
      "id": "T085",
      "type": "term",
      "channel": "垃圾与循环经济",
      "title": "waste sorting｜垃圾分类",
      "summary": "垃圾与循环经济常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "waste sorting",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on waste sorting and its practical implications.",
          "zh": "讨论聚焦于“垃圾分类”及其实际影响。"
        }
      ],
      "memory": "垃圾与循环经济 = 术语 + 场景 + 动词搭配。",
      "drill": "用 waste sorting 写一句正式英文，并译成中文。"
    },
    {
      "id": "T086",
      "type": "term",
      "channel": "垃圾与循环经济",
      "title": "source reduction｜源头减量",
      "summary": "垃圾与循环经济常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "source reduction",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on source reduction and its practical implications.",
          "zh": "讨论聚焦于“源头减量”及其实际影响。"
        }
      ],
      "memory": "垃圾与循环经济 = 术语 + 场景 + 动词搭配。",
      "drill": "用 source reduction 写一句正式英文，并译成中文。"
    },
    {
      "id": "T087",
      "type": "term",
      "channel": "垃圾与循环经济",
      "title": "plastic leakage｜塑料泄漏",
      "summary": "垃圾与循环经济常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "plastic leakage",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on plastic leakage and its practical implications.",
          "zh": "讨论聚焦于“塑料泄漏”及其实际影响。"
        }
      ],
      "memory": "垃圾与循环经济 = 术语 + 场景 + 动词搭配。",
      "drill": "用 plastic leakage 写一句正式英文，并译成中文。"
    },
    {
      "id": "T088",
      "type": "term",
      "channel": "垃圾与循环经济",
      "title": "extended producer responsibility｜生产者责任延伸制",
      "summary": "垃圾与循环经济常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "extended producer responsibility",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on extended producer responsibility and its practical implications.",
          "zh": "讨论聚焦于“生产者责任延伸制”及其实际影响。"
        }
      ],
      "memory": "垃圾与循环经济 = 术语 + 场景 + 动词搭配。",
      "drill": "用 extended producer responsibility 写一句正式英文，并译成中文。"
    },
    {
      "id": "T089",
      "type": "term",
      "channel": "垃圾与循环经济",
      "title": "recycling rate｜回收率",
      "summary": "垃圾与循环经济常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "recycling rate",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on recycling rate and its practical implications.",
          "zh": "讨论聚焦于“回收率”及其实际影响。"
        }
      ],
      "memory": "垃圾与循环经济 = 术语 + 场景 + 动词搭配。",
      "drill": "用 recycling rate 写一句正式英文，并译成中文。"
    },
    {
      "id": "T090",
      "type": "term",
      "channel": "垃圾与循环经济",
      "title": "circular economy｜循环经济",
      "summary": "垃圾与循环经济常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "circular economy",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on circular economy and its practical implications.",
          "zh": "讨论聚焦于“循环经济”及其实际影响。"
        }
      ],
      "memory": "垃圾与循环经济 = 术语 + 场景 + 动词搭配。",
      "drill": "用 circular economy 写一句正式英文，并译成中文。"
    },
    {
      "id": "T091",
      "type": "term",
      "channel": "垃圾与循环经济",
      "title": "landfill diversion｜减少填埋",
      "summary": "垃圾与循环经济常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "landfill diversion",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on landfill diversion and its practical implications.",
          "zh": "讨论聚焦于“减少填埋”及其实际影响。"
        }
      ],
      "memory": "垃圾与循环经济 = 术语 + 场景 + 动词搭配。",
      "drill": "用 landfill diversion 写一句正式英文，并译成中文。"
    },
    {
      "id": "T092",
      "type": "term",
      "channel": "垃圾与循环经济",
      "title": "hazardous waste｜危险废物",
      "summary": "垃圾与循环经济常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "hazardous waste",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on hazardous waste and its practical implications.",
          "zh": "讨论聚焦于“危险废物”及其实际影响。"
        }
      ],
      "memory": "垃圾与循环经济 = 术语 + 场景 + 动词搭配。",
      "drill": "用 hazardous waste 写一句正式英文，并译成中文。"
    },
    {
      "id": "T093",
      "type": "term",
      "channel": "垃圾与循环经济",
      "title": "e-waste｜电子废弃物",
      "summary": "垃圾与循环经济常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "e-waste",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on e-waste and its practical implications.",
          "zh": "讨论聚焦于“电子废弃物”及其实际影响。"
        }
      ],
      "memory": "垃圾与循环经济 = 术语 + 场景 + 动词搭配。",
      "drill": "用 e-waste 写一句正式英文，并译成中文。"
    },
    {
      "id": "T094",
      "type": "term",
      "channel": "垃圾与循环经济",
      "title": "battery recycling｜电池回收",
      "summary": "垃圾与循环经济常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "battery recycling",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on battery recycling and its practical implications.",
          "zh": "讨论聚焦于“电池回收”及其实际影响。"
        }
      ],
      "memory": "垃圾与循环经济 = 术语 + 场景 + 动词搭配。",
      "drill": "用 battery recycling 写一句正式英文，并译成中文。"
    },
    {
      "id": "T095",
      "type": "term",
      "channel": "垃圾与循环经济",
      "title": "resource recovery｜资源回收",
      "summary": "垃圾与循环经济常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "resource recovery",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on resource recovery and its practical implications.",
          "zh": "讨论聚焦于“资源回收”及其实际影响。"
        }
      ],
      "memory": "垃圾与循环经济 = 术语 + 场景 + 动词搭配。",
      "drill": "用 resource recovery 写一句正式英文，并译成中文。"
    },
    {
      "id": "T096",
      "type": "term",
      "channel": "垃圾与循环经济",
      "title": "single-use plastics｜一次性塑料",
      "summary": "垃圾与循环经济常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "single-use plastics",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on single-use plastics and its practical implications.",
          "zh": "讨论聚焦于“一次性塑料”及其实际影响。"
        }
      ],
      "memory": "垃圾与循环经济 = 术语 + 场景 + 动词搭配。",
      "drill": "用 single-use plastics 写一句正式英文，并译成中文。"
    },
    {
      "id": "T097",
      "type": "term",
      "channel": "气候能源",
      "title": "carbon neutrality｜碳中和",
      "summary": "气候能源常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "carbon neutrality",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on carbon neutrality and its practical implications.",
          "zh": "讨论聚焦于“碳中和”及其实际影响。"
        }
      ],
      "memory": "气候能源 = 术语 + 场景 + 动词搭配。",
      "drill": "用 carbon neutrality 写一句正式英文，并译成中文。"
    },
    {
      "id": "T098",
      "type": "term",
      "channel": "气候能源",
      "title": "peak carbon emissions｜碳达峰",
      "summary": "气候能源常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "peak carbon emissions",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on peak carbon emissions and its practical implications.",
          "zh": "讨论聚焦于“碳达峰”及其实际影响。"
        }
      ],
      "memory": "气候能源 = 术语 + 场景 + 动词搭配。",
      "drill": "用 peak carbon emissions 写一句正式英文，并译成中文。"
    },
    {
      "id": "T099",
      "type": "term",
      "channel": "气候能源",
      "title": "energy transition｜能源转型",
      "summary": "气候能源常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "energy transition",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on energy transition and its practical implications.",
          "zh": "讨论聚焦于“能源转型”及其实际影响。"
        }
      ],
      "memory": "气候能源 = 术语 + 场景 + 动词搭配。",
      "drill": "用 energy transition 写一句正式英文，并译成中文。"
    },
    {
      "id": "T100",
      "type": "term",
      "channel": "气候能源",
      "title": "renewable energy deployment｜可再生能源部署",
      "summary": "气候能源常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "renewable energy deployment",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on renewable energy deployment and its practical implications.",
          "zh": "讨论聚焦于“可再生能源部署”及其实际影响。"
        }
      ],
      "memory": "气候能源 = 术语 + 场景 + 动词搭配。",
      "drill": "用 renewable energy deployment 写一句正式英文，并译成中文。"
    },
    {
      "id": "T101",
      "type": "term",
      "channel": "气候能源",
      "title": "grid flexibility｜电网灵活性",
      "summary": "气候能源常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "grid flexibility",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on grid flexibility and its practical implications.",
          "zh": "讨论聚焦于“电网灵活性”及其实际影响。"
        }
      ],
      "memory": "气候能源 = 术语 + 场景 + 动词搭配。",
      "drill": "用 grid flexibility 写一句正式英文，并译成中文。"
    },
    {
      "id": "T102",
      "type": "term",
      "channel": "气候能源",
      "title": "energy storage｜储能",
      "summary": "气候能源常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "energy storage",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on energy storage and its practical implications.",
          "zh": "讨论聚焦于“储能”及其实际影响。"
        }
      ],
      "memory": "气候能源 = 术语 + 场景 + 动词搭配。",
      "drill": "用 energy storage 写一句正式英文，并译成中文。"
    },
    {
      "id": "T103",
      "type": "term",
      "channel": "气候能源",
      "title": "climate adaptation｜气候适应",
      "summary": "气候能源常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "climate adaptation",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on climate adaptation and its practical implications.",
          "zh": "讨论聚焦于“气候适应”及其实际影响。"
        }
      ],
      "memory": "气候能源 = 术语 + 场景 + 动词搭配。",
      "drill": "用 climate adaptation 写一句正式英文，并译成中文。"
    },
    {
      "id": "T104",
      "type": "term",
      "channel": "气候能源",
      "title": "loss and damage｜损失与损害",
      "summary": "气候能源常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "loss and damage",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on loss and damage and its practical implications.",
          "zh": "讨论聚焦于“损失与损害”及其实际影响。"
        }
      ],
      "memory": "气候能源 = 术语 + 场景 + 动词搭配。",
      "drill": "用 loss and damage 写一句正式英文，并译成中文。"
    },
    {
      "id": "T105",
      "type": "term",
      "channel": "气候能源",
      "title": "climate finance｜气候融资",
      "summary": "气候能源常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "climate finance",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on climate finance and its practical implications.",
          "zh": "讨论聚焦于“气候融资”及其实际影响。"
        }
      ],
      "memory": "气候能源 = 术语 + 场景 + 动词搭配。",
      "drill": "用 climate finance 写一句正式英文，并译成中文。"
    },
    {
      "id": "T106",
      "type": "term",
      "channel": "气候能源",
      "title": "methane reduction｜甲烷减排",
      "summary": "气候能源常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "methane reduction",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on methane reduction and its practical implications.",
          "zh": "讨论聚焦于“甲烷减排”及其实际影响。"
        }
      ],
      "memory": "气候能源 = 术语 + 场景 + 动词搭配。",
      "drill": "用 methane reduction 写一句正式英文，并译成中文。"
    },
    {
      "id": "T107",
      "type": "term",
      "channel": "气候能源",
      "title": "just transition｜公正转型",
      "summary": "气候能源常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "just transition",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on just transition and its practical implications.",
          "zh": "讨论聚焦于“公正转型”及其实际影响。"
        }
      ],
      "memory": "气候能源 = 术语 + 场景 + 动词搭配。",
      "drill": "用 just transition 写一句正式英文，并译成中文。"
    },
    {
      "id": "T108",
      "type": "term",
      "channel": "气候能源",
      "title": "green hydrogen｜绿氢",
      "summary": "气候能源常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "green hydrogen",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on green hydrogen and its practical implications.",
          "zh": "讨论聚焦于“绿氢”及其实际影响。"
        }
      ],
      "memory": "气候能源 = 术语 + 场景 + 动词搭配。",
      "drill": "用 green hydrogen 写一句正式英文，并译成中文。"
    },
    {
      "id": "T109",
      "type": "term",
      "channel": "固定搭配",
      "title": "commitment to｜对……的承诺",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "commitment to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on commitment to and its practical implications.",
          "zh": "讨论聚焦于“对……的承诺”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 commitment to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T110",
      "type": "term",
      "channel": "固定搭配",
      "title": "priority should be given to｜应优先考虑",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "priority should be given to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on priority should be given to and its practical implications.",
          "zh": "讨论聚焦于“应优先考虑”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 priority should be given to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T111",
      "type": "term",
      "channel": "固定搭配",
      "title": "be conducive to｜有助于",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "be conducive to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on be conducive to and its practical implications.",
          "zh": "讨论聚焦于“有助于”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 be conducive to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T112",
      "type": "term",
      "channel": "固定搭配",
      "title": "be subject to｜受……约束/取决于",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "be subject to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on be subject to and its practical implications.",
          "zh": "讨论聚焦于“受……约束/取决于”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 be subject to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T113",
      "type": "term",
      "channel": "固定搭配",
      "title": "be vulnerable to｜易受……影响",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "be vulnerable to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on be vulnerable to and its practical implications.",
          "zh": "讨论聚焦于“易受……影响”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 be vulnerable to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T114",
      "type": "term",
      "channel": "固定搭配",
      "title": "be resilient to｜对……有韧性",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "be resilient to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on be resilient to and its practical implications.",
          "zh": "讨论聚焦于“对……有韧性”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 be resilient to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T115",
      "type": "term",
      "channel": "固定搭配",
      "title": "be consistent with｜与……一致",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "be consistent with",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on be consistent with and its practical implications.",
          "zh": "讨论聚焦于“与……一致”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 be consistent with 写一句正式英文，并译成中文。"
    },
    {
      "id": "T116",
      "type": "term",
      "channel": "固定搭配",
      "title": "be compatible with｜与……兼容",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "be compatible with",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on be compatible with and its practical implications.",
          "zh": "讨论聚焦于“与……兼容”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 be compatible with 写一句正式英文，并译成中文。"
    },
    {
      "id": "T117",
      "type": "term",
      "channel": "固定搭配",
      "title": "be proportional to｜与……成比例",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "be proportional to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on be proportional to and its practical implications.",
          "zh": "讨论聚焦于“与……成比例”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 be proportional to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T118",
      "type": "term",
      "channel": "固定搭配",
      "title": "be attributable to｜可归因于",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "be attributable to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on be attributable to and its practical implications.",
          "zh": "讨论聚焦于“可归因于”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 be attributable to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T119",
      "type": "term",
      "channel": "固定搭配",
      "title": "be exposed to｜暴露于",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "be exposed to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on be exposed to and its practical implications.",
          "zh": "讨论聚焦于“暴露于”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 be exposed to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T120",
      "type": "term",
      "channel": "固定搭配",
      "title": "be entitled to｜有权获得",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "be entitled to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on be entitled to and its practical implications.",
          "zh": "讨论聚焦于“有权获得”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 be entitled to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T121",
      "type": "term",
      "channel": "固定搭配",
      "title": "be obliged to｜有义务",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "be obliged to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on be obliged to and its practical implications.",
          "zh": "讨论聚焦于“有义务”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 be obliged to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T122",
      "type": "term",
      "channel": "固定搭配",
      "title": "be reluctant to｜不愿意",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "be reluctant to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on be reluctant to and its practical implications.",
          "zh": "讨论聚焦于“不愿意”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 be reluctant to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T123",
      "type": "term",
      "channel": "固定搭配",
      "title": "be committed to｜致力于",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "be committed to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on be committed to and its practical implications.",
          "zh": "讨论聚焦于“致力于”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 be committed to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T124",
      "type": "term",
      "channel": "固定搭配",
      "title": "contribute to｜有助于/导致",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "contribute to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on contribute to and its practical implications.",
          "zh": "讨论聚焦于“有助于/导致”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 contribute to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T125",
      "type": "term",
      "channel": "固定搭配",
      "title": "lead to｜导致",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "lead to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on lead to and its practical implications.",
          "zh": "讨论聚焦于“导致”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 lead to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T126",
      "type": "term",
      "channel": "固定搭配",
      "title": "give rise to｜引发",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "give rise to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on give rise to and its practical implications.",
          "zh": "讨论聚焦于“引发”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 give rise to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T127",
      "type": "term",
      "channel": "固定搭配",
      "title": "result in｜导致",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "result in",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on result in and its practical implications.",
          "zh": "讨论聚焦于“导致”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 result in 写一句正式英文，并译成中文。"
    },
    {
      "id": "T128",
      "type": "term",
      "channel": "固定搭配",
      "title": "stem from｜源于",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "stem from",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on stem from and its practical implications.",
          "zh": "讨论聚焦于“源于”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 stem from 写一句正式英文，并译成中文。"
    },
    {
      "id": "T129",
      "type": "term",
      "channel": "固定搭配",
      "title": "derive from｜源自",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "derive from",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on derive from and its practical implications.",
          "zh": "讨论聚焦于“源自”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 derive from 写一句正式英文，并译成中文。"
    },
    {
      "id": "T130",
      "type": "term",
      "channel": "固定搭配",
      "title": "rely on｜依赖",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "rely on",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on rely on and its practical implications.",
          "zh": "讨论聚焦于“依赖”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 rely on 写一句正式英文，并译成中文。"
    },
    {
      "id": "T131",
      "type": "term",
      "channel": "固定搭配",
      "title": "depend on｜取决于",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "depend on",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on depend on and its practical implications.",
          "zh": "讨论聚焦于“取决于”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 depend on 写一句正式英文，并译成中文。"
    },
    {
      "id": "T132",
      "type": "term",
      "channel": "固定搭配",
      "title": "focus on｜聚焦于",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "focus on",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on focus on and its practical implications.",
          "zh": "讨论聚焦于“聚焦于”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 focus on 写一句正式英文，并译成中文。"
    },
    {
      "id": "T133",
      "type": "term",
      "channel": "固定搭配",
      "title": "specialize in｜专门从事",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "specialize in",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on specialize in and its practical implications.",
          "zh": "讨论聚焦于“专门从事”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 specialize in 写一句正式英文，并译成中文。"
    },
    {
      "id": "T134",
      "type": "term",
      "channel": "固定搭配",
      "title": "participate in｜参与",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "participate in",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on participate in and its practical implications.",
          "zh": "讨论聚焦于“参与”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 participate in 写一句正式英文，并译成中文。"
    },
    {
      "id": "T135",
      "type": "term",
      "channel": "固定搭配",
      "title": "invest in｜投资于",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "invest in",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on invest in and its practical implications.",
          "zh": "讨论聚焦于“投资于”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 invest in 写一句正式英文，并译成中文。"
    },
    {
      "id": "T136",
      "type": "term",
      "channel": "固定搭配",
      "title": "engage in｜参与/从事",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "engage in",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on engage in and its practical implications.",
          "zh": "讨论聚焦于“参与/从事”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 engage in 写一句正式英文，并译成中文。"
    },
    {
      "id": "T137",
      "type": "term",
      "channel": "固定搭配",
      "title": "comply with｜遵守",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "comply with",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on comply with and its practical implications.",
          "zh": "讨论聚焦于“遵守”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 comply with 写一句正式英文，并译成中文。"
    },
    {
      "id": "T138",
      "type": "term",
      "channel": "固定搭配",
      "title": "cope with｜应对",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "cope with",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on cope with and its practical implications.",
          "zh": "讨论聚焦于“应对”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 cope with 写一句正式英文，并译成中文。"
    },
    {
      "id": "T139",
      "type": "term",
      "channel": "固定搭配",
      "title": "interfere with｜干扰",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "interfere with",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on interfere with and its practical implications.",
          "zh": "讨论聚焦于“干扰”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 interfere with 写一句正式英文，并译成中文。"
    },
    {
      "id": "T140",
      "type": "term",
      "channel": "固定搭配",
      "title": "align with｜与……一致",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "align with",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on align with and its practical implications.",
          "zh": "讨论聚焦于“与……一致”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 align with 写一句正式英文，并译成中文。"
    },
    {
      "id": "T141",
      "type": "term",
      "channel": "固定搭配",
      "title": "integrate into｜融入",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "integrate into",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on integrate into and its practical implications.",
          "zh": "讨论聚焦于“融入”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 integrate into 写一句正式英文，并译成中文。"
    },
    {
      "id": "T142",
      "type": "term",
      "channel": "固定搭配",
      "title": "translate into｜转化为",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "translate into",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on translate into and its practical implications.",
          "zh": "讨论聚焦于“转化为”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 translate into 写一句正式英文，并译成中文。"
    },
    {
      "id": "T143",
      "type": "term",
      "channel": "固定搭配",
      "title": "prevent from｜防止",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "prevent from",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on prevent from and its practical implications.",
          "zh": "讨论聚焦于“防止”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 prevent from 写一句正式英文，并译成中文。"
    },
    {
      "id": "T144",
      "type": "term",
      "channel": "固定搭配",
      "title": "protect from｜保护免受",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "protect from",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on protect from and its practical implications.",
          "zh": "讨论聚焦于“保护免受”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 protect from 写一句正式英文，并译成中文。"
    },
    {
      "id": "T145",
      "type": "term",
      "channel": "固定搭配",
      "title": "distinguish from｜区别于",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "distinguish from",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on distinguish from and its practical implications.",
          "zh": "讨论聚焦于“区别于”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 distinguish from 写一句正式英文，并译成中文。"
    },
    {
      "id": "T146",
      "type": "term",
      "channel": "固定搭配",
      "title": "adapt to｜适应",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "adapt to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on adapt to and its practical implications.",
          "zh": "讨论聚焦于“适应”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 adapt to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T147",
      "type": "term",
      "channel": "固定搭配",
      "title": "respond to｜回应",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "respond to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on respond to and its practical implications.",
          "zh": "讨论聚焦于“回应”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 respond to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T148",
      "type": "term",
      "channel": "固定搭配",
      "title": "access to｜获得/接入",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "access to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on access to and its practical implications.",
          "zh": "讨论聚焦于“获得/接入”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 access to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T149",
      "type": "term",
      "channel": "固定搭配",
      "title": "approach to｜……的方法",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "approach to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on approach to and its practical implications.",
          "zh": "讨论聚焦于“……的方法”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 approach to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T150",
      "type": "term",
      "channel": "固定搭配",
      "title": "barrier to｜……的障碍",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "barrier to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on barrier to and its practical implications.",
          "zh": "讨论聚焦于“……的障碍”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 barrier to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T151",
      "type": "term",
      "channel": "固定搭配",
      "title": "threat to｜对……的威胁",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "threat to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on threat to and its practical implications.",
          "zh": "讨论聚焦于“对……的威胁”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 threat to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T152",
      "type": "term",
      "channel": "固定搭配",
      "title": "solution to｜……的解决方案",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "solution to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on solution to and its practical implications.",
          "zh": "讨论聚焦于“……的解决方案”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 solution to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T153",
      "type": "term",
      "channel": "固定搭配",
      "title": "evidence of｜……的证据",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "evidence of",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on evidence of and its practical implications.",
          "zh": "讨论聚焦于“……的证据”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 evidence of 写一句正式英文，并译成中文。"
    },
    {
      "id": "T154",
      "type": "term",
      "channel": "固定搭配",
      "title": "demand for｜对……的需求",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "demand for",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on demand for and its practical implications.",
          "zh": "讨论聚焦于“对……的需求”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 demand for 写一句正式英文，并译成中文。"
    },
    {
      "id": "T155",
      "type": "term",
      "channel": "固定搭配",
      "title": "shortage of｜……短缺",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "shortage of",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on shortage of and its practical implications.",
          "zh": "讨论聚焦于“……短缺”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 shortage of 写一句正式英文，并译成中文。"
    },
    {
      "id": "T156",
      "type": "term",
      "channel": "固定搭配",
      "title": "increase in｜……的增加",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "increase in",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on increase in and its practical implications.",
          "zh": "讨论聚焦于“……的增加”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 increase in 写一句正式英文，并译成中文。"
    },
    {
      "id": "T157",
      "type": "term",
      "channel": "固定搭配",
      "title": "decline in｜……的下降",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "decline in",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on decline in and its practical implications.",
          "zh": "讨论聚焦于“……的下降”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 decline in 写一句正式英文，并译成中文。"
    },
    {
      "id": "T158",
      "type": "term",
      "channel": "固定搭配",
      "title": "awareness of｜对……的认识",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "awareness of",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on awareness of and its practical implications.",
          "zh": "讨论聚焦于“对……的认识”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 awareness of 写一句正式英文，并译成中文。"
    },
    {
      "id": "T159",
      "type": "term",
      "channel": "固定搭配",
      "title": "transition from A to B｜从A向B转型",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "transition from A to B",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on transition from A to B and its practical implications.",
          "zh": "讨论聚焦于“从A向B转型”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 transition from A to B 写一句正式英文，并译成中文。"
    },
    {
      "id": "T160",
      "type": "term",
      "channel": "固定搭配",
      "title": "balance between A and B｜A与B之间的平衡",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "balance between A and B",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on balance between A and B and its practical implications.",
          "zh": "讨论聚焦于“A与B之间的平衡”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 balance between A and B 写一句正式英文，并译成中文。"
    },
    {
      "id": "T161",
      "type": "term",
      "channel": "固定搭配",
      "title": "not only A but also B｜不仅A而且B",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "not only A but also B",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on not only A but also B and its practical implications.",
          "zh": "讨论聚焦于“不仅A而且B”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 not only A but also B 写一句正式英文，并译成中文。"
    },
    {
      "id": "T162",
      "type": "term",
      "channel": "固定搭配",
      "title": "either A or B｜A或B二者之一",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "either A or B",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on either A or B and its practical implications.",
          "zh": "讨论聚焦于“A或B二者之一”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 either A or B 写一句正式英文，并译成中文。"
    },
    {
      "id": "T163",
      "type": "term",
      "channel": "固定搭配",
      "title": "neither A nor B｜既不A也不B",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "neither A nor B",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on neither A nor B and its practical implications.",
          "zh": "讨论聚焦于“既不A也不B”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 neither A nor B 写一句正式英文，并译成中文。"
    },
    {
      "id": "T164",
      "type": "term",
      "channel": "固定搭配",
      "title": "whether A or B｜无论A还是B",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "whether A or B",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on whether A or B and its practical implications.",
          "zh": "讨论聚焦于“无论A还是B”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 whether A or B 写一句正式英文，并译成中文。"
    },
    {
      "id": "T165",
      "type": "term",
      "channel": "固定搭配",
      "title": "as opposed to｜而不是/相对于",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "as opposed to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on as opposed to and its practical implications.",
          "zh": "讨论聚焦于“而不是/相对于”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 as opposed to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T166",
      "type": "term",
      "channel": "固定搭配",
      "title": "in terms of｜就……而言",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "in terms of",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on in terms of and its practical implications.",
          "zh": "讨论聚焦于“就……而言”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 in terms of 写一句正式英文，并译成中文。"
    },
    {
      "id": "T167",
      "type": "term",
      "channel": "固定搭配",
      "title": "with regard to｜关于",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "with regard to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on with regard to and its practical implications.",
          "zh": "讨论聚焦于“关于”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 with regard to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T168",
      "type": "term",
      "channel": "固定搭配",
      "title": "in accordance with｜根据/按照",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "in accordance with",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on in accordance with and its practical implications.",
          "zh": "讨论聚焦于“根据/按照”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 in accordance with 写一句正式英文，并译成中文。"
    },
    {
      "id": "T169",
      "type": "term",
      "channel": "固定搭配",
      "title": "in response to｜为回应",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "in response to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on in response to and its practical implications.",
          "zh": "讨论聚焦于“为回应”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 in response to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T170",
      "type": "term",
      "channel": "固定搭配",
      "title": "in addition to｜除……之外",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "in addition to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on in addition to and its practical implications.",
          "zh": "讨论聚焦于“除……之外”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 in addition to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T171",
      "type": "term",
      "channel": "固定搭配",
      "title": "in contrast to｜与……相反",
      "summary": "固定搭配常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "in contrast to",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on in contrast to and its practical implications.",
          "zh": "讨论聚焦于“与……相反”及其实际影响。"
        }
      ],
      "memory": "固定搭配 = 术语 + 场景 + 动词搭配。",
      "drill": "用 in contrast to 写一句正式英文，并译成中文。"
    },
    {
      "id": "T172",
      "type": "term",
      "channel": "城市与社会",
      "title": "urban renewal｜城市更新",
      "summary": "城市与社会常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "urban renewal",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on urban renewal and its practical implications.",
          "zh": "讨论聚焦于“城市更新”及其实际影响。"
        }
      ],
      "memory": "城市与社会 = 术语 + 场景 + 动词搭配。",
      "drill": "用 urban renewal 写一句正式英文，并译成中文。"
    },
    {
      "id": "T173",
      "type": "term",
      "channel": "城市与社会",
      "title": "affordable housing｜保障性住房",
      "summary": "城市与社会常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "affordable housing",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on affordable housing and its practical implications.",
          "zh": "讨论聚焦于“保障性住房”及其实际影响。"
        }
      ],
      "memory": "城市与社会 = 术语 + 场景 + 动词搭配。",
      "drill": "用 affordable housing 写一句正式英文，并译成中文。"
    },
    {
      "id": "T174",
      "type": "term",
      "channel": "城市与社会",
      "title": "aging population｜人口老龄化",
      "summary": "城市与社会常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "aging population",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on aging population and its practical implications.",
          "zh": "讨论聚焦于“人口老龄化”及其实际影响。"
        }
      ],
      "memory": "城市与社会 = 术语 + 场景 + 动词搭配。",
      "drill": "用 aging population 写一句正式英文，并译成中文。"
    },
    {
      "id": "T175",
      "type": "term",
      "channel": "城市与社会",
      "title": "community services｜社区服务",
      "summary": "城市与社会常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "community services",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on community services and its practical implications.",
          "zh": "讨论聚焦于“社区服务”及其实际影响。"
        }
      ],
      "memory": "城市与社会 = 术语 + 场景 + 动词搭配。",
      "drill": "用 community services 写一句正式英文，并译成中文。"
    },
    {
      "id": "T176",
      "type": "term",
      "channel": "城市与社会",
      "title": "inclusive education｜融合教育",
      "summary": "城市与社会常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "inclusive education",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on inclusive education and its practical implications.",
          "zh": "讨论聚焦于“融合教育”及其实际影响。"
        }
      ],
      "memory": "城市与社会 = 术语 + 场景 + 动词搭配。",
      "drill": "用 inclusive education 写一句正式英文，并译成中文。"
    },
    {
      "id": "T177",
      "type": "term",
      "channel": "城市与社会",
      "title": "digital divide｜数字鸿沟",
      "summary": "城市与社会常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "digital divide",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on digital divide and its practical implications.",
          "zh": "讨论聚焦于“数字鸿沟”及其实际影响。"
        }
      ],
      "memory": "城市与社会 = 术语 + 场景 + 动词搭配。",
      "drill": "用 digital divide 写一句正式英文，并译成中文。"
    },
    {
      "id": "T178",
      "type": "term",
      "channel": "城市与社会",
      "title": "public trust｜公众信任",
      "summary": "城市与社会常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "public trust",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on public trust and its practical implications.",
          "zh": "讨论聚焦于“公众信任”及其实际影响。"
        }
      ],
      "memory": "城市与社会 = 术语 + 场景 + 动词搭配。",
      "drill": "用 public trust 写一句正式英文，并译成中文。"
    },
    {
      "id": "T179",
      "type": "term",
      "channel": "城市与社会",
      "title": "social resilience｜社会韧性",
      "summary": "城市与社会常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "social resilience",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on social resilience and its practical implications.",
          "zh": "讨论聚焦于“社会韧性”及其实际影响。"
        }
      ],
      "memory": "城市与社会 = 术语 + 场景 + 动词搭配。",
      "drill": "用 social resilience 写一句正式英文，并译成中文。"
    },
    {
      "id": "T180",
      "type": "term",
      "channel": "城市与社会",
      "title": "emergency response｜应急响应",
      "summary": "城市与社会常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "emergency response",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on emergency response and its practical implications.",
          "zh": "讨论聚焦于“应急响应”及其实际影响。"
        }
      ],
      "memory": "城市与社会 = 术语 + 场景 + 动词搭配。",
      "drill": "用 emergency response 写一句正式英文，并译成中文。"
    },
    {
      "id": "T181",
      "type": "term",
      "channel": "城市与社会",
      "title": "elderly care services｜养老服务",
      "summary": "城市与社会常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "elderly care services",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on elderly care services and its practical implications.",
          "zh": "讨论聚焦于“养老服务”及其实际影响。"
        }
      ],
      "memory": "城市与社会 = 术语 + 场景 + 动词搭配。",
      "drill": "用 elderly care services 写一句正式英文，并译成中文。"
    },
    {
      "id": "T182",
      "type": "term",
      "channel": "城市与社会",
      "title": "walkable city｜步行友好型城市",
      "summary": "城市与社会常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "walkable city",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on walkable city and its practical implications.",
          "zh": "讨论聚焦于“步行友好型城市”及其实际影响。"
        }
      ],
      "memory": "城市与社会 = 术语 + 场景 + 动词搭配。",
      "drill": "用 walkable city 写一句正式英文，并译成中文。"
    },
    {
      "id": "T183",
      "type": "term",
      "channel": "城市与社会",
      "title": "public transport accessibility｜公共交通可达性",
      "summary": "城市与社会常见术语。翻译时先确认它是政策概念、技术对象还是治理措施。",
      "pattern": "public transport accessibility",
      "exam": "实务热点术语、综合阅读词义。",
      "trap": "不要只查单词；要查搭配和学科语境。",
      "examples": [
        {
          "en": "The discussion focuses on public transport accessibility and its practical implications.",
          "zh": "讨论聚焦于“公共交通可达性”及其实际影响。"
        }
      ],
      "memory": "城市与社会 = 术语 + 场景 + 动词搭配。",
      "drill": "用 public transport accessibility 写一句正式英文，并译成中文。"
    },
    {
      "id": "H001",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "AI治理与模型安全",
      "summary": "人工智能不只是技术效率问题，更是治理、责任、透明度和风险分配问题。",
      "pattern": "AI governance; transparency; accountability; risk assessment; human oversight",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "As AI systems are increasingly deployed in public services, stronger governance is needed to ensure transparency and accountability.",
          "zh": "随着人工智能系统越来越多地用于公共服务，需要加强治理以确保透明度和问责。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“AI治理与模型安全”的中英双语短段。"
    },
    {
      "id": "H002",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "智能体与自动化办公",
      "summary": "智能体强调任务分解、工具调用和自主执行，翻译时要避免只译成“代理”。",
      "pattern": "AI agent; workflow automation; task decomposition; tool use; human-in-the-loop",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "AI agents can automate routine workflows, but human oversight remains essential.",
          "zh": "智能体可以自动化处理常规工作流，但人工监督仍然必不可少。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“智能体与自动化办公”的中英双语短段。"
    },
    {
      "id": "H003",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "数据中心能耗",
      "summary": "AI扩张带来算力、能源、水资源和电网压力，常考因果与让步。",
      "pattern": "data center; power demand; cooling system; grid pressure; energy efficiency",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "The expansion of data centers has raised concerns about electricity demand and water consumption.",
          "zh": "数据中心的扩张引发了对电力需求和用水量的担忧。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“数据中心能耗”的中英双语短段。"
    },
    {
      "id": "H004",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "具身智能与机器人",
      "summary": "机器人热点常连接制造业、养老、医疗、物流和安全监管。",
      "pattern": "embodied AI; humanoid robot; autonomous system; assistive robot; safety standard",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Embodied AI could transform manufacturing and eldercare if safety standards are clearly defined.",
          "zh": "如果安全标准得到明确界定，具身智能可能改变制造业和养老服务。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“具身智能与机器人”的中英双语短段。"
    },
    {
      "id": "H005",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "马斯克与商业航天",
      "summary": "翻译重点不是人物八卦，而是商业航天、可重复使用火箭、火星任务和监管。",
      "pattern": "commercial spaceflight; reusable rocket; Mars mission; launch license; payload",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Commercial spaceflight has lowered launch costs and accelerated deep-space ambitions.",
          "zh": "商业航天降低了发射成本，并加速了深空探索愿景。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“马斯克与商业航天”的中英双语短段。"
    },
    {
      "id": "H006",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "火星探索与深空任务",
      "summary": "常见表达包括生命保障、原位资源利用、载荷、轨道测试、长期居留。",
      "pattern": "Mars exploration; life-support system; in-situ resource utilization; crewed mission",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "A sustainable Mars mission would require reliable life-support systems and in-situ resource utilization.",
          "zh": "可持续的火星任务需要可靠的生命保障系统和原位资源利用。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“火星探索与深空任务”的中英双语短段。"
    },
    {
      "id": "H007",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "脑机接口",
      "summary": "核心难点是医学伦理、临床试验、隐私、自主能力和神经信号。",
      "pattern": "brain-computer interface; neural signal; implantable device; clinical trial; autonomy",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Brain-computer interfaces may restore communication ability while raising new ethical questions.",
          "zh": "脑机接口可能恢复沟通能力，同时也带来新的伦理问题。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“脑机接口”的中英双语短段。"
    },
    {
      "id": "H008",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "生物安全与病原体监测",
      "summary": "注意 biosafety 与 biosecurity 的区别，以及 surveillance 的“监测”义。",
      "pattern": "biosafety; biosecurity; pathogen surveillance; laboratory safety; early warning",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Pathogen surveillance can strengthen early warning systems for public health emergencies.",
          "zh": "病原体监测可以加强公共卫生突发事件的早期预警系统。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“生物安全与病原体监测”的中英双语短段。"
    },
    {
      "id": "H009",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "公共卫生协定",
      "summary": "常考公平获取、利益分享、疫苗诊断治疗工具、国际协调。",
      "pattern": "pandemic preparedness; equitable access; benefit-sharing; diagnostics; therapeutics",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Global pandemic preparedness depends on equitable access to vaccines, diagnostics and therapeutics.",
          "zh": "全球大流行防范取决于疫苗、诊断工具和治疗药物的公平获取。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“公共卫生协定”的中英双语短段。"
    },
    {
      "id": "H010",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "海洋保护",
      "summary": "海洋主题常连接生物多样性、保护区、蓝色经济和塑料污染。",
      "pattern": "marine biodiversity; marine protected area; blue economy; ocean governance",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Marine protected areas can help conserve biodiversity and support sustainable fisheries.",
          "zh": "海洋保护区有助于保护生物多样性并支持可持续渔业。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“海洋保护”的中英双语短段。"
    },
    {
      "id": "H011",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "塑料污染条约",
      "summary": "常见句型：legally binding instrument, life-cycle approach, production/use/waste。",
      "pattern": "plastic pollution; legally binding instrument; life-cycle approach; single-use plastics",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "A life-cycle approach to plastic pollution should cover production, consumption and waste management.",
          "zh": "塑料污染的全生命周期方法应涵盖生产、消费和废弃物管理。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“塑料污染条约”的中英双语短段。"
    },
    {
      "id": "H012",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "垃圾分类与循环经济",
      "summary": "注意 waste sorting, source reduction, resource recovery, recycling rate。",
      "pattern": "waste sorting; source reduction; resource recovery; circular economy",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Waste sorting is only effective when supported by source reduction and recycling infrastructure.",
          "zh": "垃圾分类只有在源头减量和回收基础设施支持下才有效。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“垃圾分类与循环经济”的中英双语短段。"
    },
    {
      "id": "H013",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "电池回收",
      "summary": "新能源车、电池材料、供应链、环境风险常同题出现。",
      "pattern": "battery recycling; critical minerals; supply chain; resource recovery",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Battery recycling can reduce environmental risks and ease pressure on critical mineral supply chains.",
          "zh": "电池回收可以降低环境风险，并缓解关键矿产供应链压力。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“电池回收”的中英双语短段。"
    },
    {
      "id": "H014",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "低空经济",
      "summary": "无人机、城市空中交通、监管空域、应急物流。",
      "pattern": "low-altitude economy; drone delivery; airspace management; emergency logistics",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "The low-altitude economy requires coordinated airspace management and clear safety standards.",
          "zh": "低空经济需要协同的空域管理和明确的安全标准。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“低空经济”的中英双语短段。"
    },
    {
      "id": "H015",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "量子通信",
      "summary": "常与信息安全、基础研究、产业化、标准制定相连。",
      "pattern": "quantum communication; information security; basic research; standard-setting",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Quantum communication could strengthen information security, but large-scale deployment remains challenging.",
          "zh": "量子通信可能加强信息安全，但大规模部署仍面临挑战。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“量子通信”的中英双语短段。"
    },
    {
      "id": "H016",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "6G与数字基础设施",
      "summary": "注意 infrastructure 不可数/可数语境，network coverage, latency。",
      "pattern": "6G; digital infrastructure; network coverage; latency; connectivity",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Next-generation digital infrastructure will support smarter transport, healthcare and manufacturing.",
          "zh": "新一代数字基础设施将支持更智能的交通、医疗和制造。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“6G与数字基础设施”的中英双语短段。"
    },
    {
      "id": "H017",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "气候适应",
      "summary": "adaptation 不等于 mitigation；一个适应影响，一个减缓排放。",
      "pattern": "climate adaptation; resilience; heatwave; flood risk; vulnerable communities",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Climate adaptation measures are urgently needed in communities vulnerable to floods and heatwaves.",
          "zh": "易受洪水和热浪影响的社区迫切需要气候适应措施。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“气候适应”的中英双语短段。"
    },
    {
      "id": "H018",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "绿色转型",
      "summary": "注意 transition 与 transformation 的区别，以及 just transition。",
      "pattern": "green transition; renewable energy; grid flexibility; just transition",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "A just green transition should protect workers while accelerating renewable energy deployment.",
          "zh": "公正的绿色转型应在加快可再生能源部署的同时保护劳动者。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“绿色转型”的中英双语短段。"
    },
    {
      "id": "H019",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "新质生产力",
      "summary": "翻译要保持政策术语稳定，常与科技创新、产业升级、高质量发展相连。",
      "pattern": "new quality productive forces; technological innovation; industrial upgrading",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "New quality productive forces are closely linked to technological innovation and industrial upgrading.",
          "zh": "新质生产力与科技创新和产业升级密切相关。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“新质生产力”的中英双语短段。"
    },
    {
      "id": "H020",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "城市更新",
      "summary": "旧城改造、历史保护、住房、公共空间、社区参与。",
      "pattern": "urban renewal; community participation; public space; heritage preservation",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Urban renewal should balance infrastructure improvement with heritage preservation.",
          "zh": "城市更新应在基础设施改善与遗产保护之间取得平衡。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“城市更新”的中英双语短段。"
    },
    {
      "id": "H021",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "人口老龄化",
      "summary": "常考养老、劳动力、医疗、社区服务、银发经济。",
      "pattern": "aging population; elderly care; workforce; community-based services",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "An aging population increases demand for healthcare and community-based elderly care services.",
          "zh": "人口老龄化增加了对医疗和社区养老服务的需求。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“人口老龄化”的中英双语短段。"
    },
    {
      "id": "H022",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "教育公平",
      "summary": "equity/equality 区分，数字鸿沟、乡村教育、终身学习。",
      "pattern": "education equity; digital divide; lifelong learning; rural education",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Digital tools can expand access to education, but they may also widen the digital divide.",
          "zh": "数字工具可以扩大教育可及性，但也可能扩大数字鸿沟。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“教育公平”的中英双语短段。"
    },
    {
      "id": "H023",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "文化遗产数字化",
      "summary": "常见术语：digitization, preservation, interpretation, public access。",
      "pattern": "cultural heritage; digitization; preservation; public access",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Digitization can improve public access to cultural heritage while supporting preservation.",
          "zh": "数字化可以改善公众接触文化遗产的机会，同时支持保护工作。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“文化遗产数字化”的中英双语短段。"
    },
    {
      "id": "H024",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "自动驾驶",
      "summary": "安全责任、传感器、道路测试、算法决策、保险法律。",
      "pattern": "autonomous driving; liability; road testing; sensor; algorithmic decision-making",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Autonomous driving requires clear rules on liability and road testing.",
          "zh": "自动驾驶需要明确责任认定和道路测试规则。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“自动驾驶”的中英双语短段。"
    },
    {
      "id": "H025",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "粮食安全",
      "summary": "粮食安全常适合训练术语、因果、让步和政策建议句。",
      "pattern": "food security; supply shock; agricultural resilience; staple crops",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Food security depends on resilient supply chains and sustainable agricultural practices.",
          "zh": "粮食安全取决于有韧性的供应链和可持续农业实践。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“粮食安全”的中英双语短段。"
    },
    {
      "id": "H026",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "水资源治理",
      "summary": "水资源治理常适合训练术语、因果、让步和政策建议句。",
      "pattern": "water scarcity; watershed management; water-use efficiency; drought",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Improving water-use efficiency is essential in regions facing drought and water scarcity.",
          "zh": "在面临干旱和缺水的地区，提高用水效率至关重要。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“水资源治理”的中英双语短段。"
    },
    {
      "id": "H027",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "山火与极端天气",
      "summary": "山火与极端天气常适合训练术语、因果、让步和政策建议句。",
      "pattern": "wildfire; extreme weather; emergency response; evacuation",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Extreme weather events require better early-warning systems and emergency response capacity.",
          "zh": "极端天气事件需要更完善的预警系统和应急响应能力。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“山火与极端天气”的中英双语短段。"
    },
    {
      "id": "H028",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "网络安全",
      "summary": "网络安全常适合训练术语、因果、让步和政策建议句。",
      "pattern": "cybersecurity; data breach; critical infrastructure; encryption",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Cybersecurity is vital for protecting critical infrastructure and personal data.",
          "zh": "网络安全对保护关键基础设施和个人数据至关重要。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“网络安全”的中英双语短段。"
    },
    {
      "id": "H029",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "平台经济",
      "summary": "平台经济常适合训练术语、因果、让步和政策建议句。",
      "pattern": "platform economy; gig work; algorithmic management; labor rights",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "The platform economy has created flexible jobs but also raised concerns over labor rights.",
          "zh": "平台经济创造了灵活就业，也引发了对劳动权益的担忧。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“平台经济”的中英双语短段。"
    },
    {
      "id": "H030",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "心理健康公共服务",
      "summary": "心理健康公共服务常适合训练术语、因果、让步和政策建议句。",
      "pattern": "mental health services; stigma; community support; early intervention",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Early intervention and community support can improve access to mental health services.",
          "zh": "早期干预和社区支持可以改善心理健康服务的可及性。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“心理健康公共服务”的中英双语短段。"
    },
    {
      "id": "H031",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "旅游复苏",
      "summary": "旅游复苏常适合训练术语、因果、让步和政策建议句。",
      "pattern": "tourism recovery; cultural exchange; local economy; overtourism",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Tourism recovery can boost local economies, but overtourism may strain public services.",
          "zh": "旅游复苏可以提振地方经济，但过度旅游可能给公共服务带来压力。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“旅游复苏”的中英双语短段。"
    },
    {
      "id": "H032",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "银发经济",
      "summary": "银发经济常适合训练术语、因果、让步和政策建议句。",
      "pattern": "silver economy; age-friendly services; assistive devices",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "The silver economy is expanding demand for age-friendly services and assistive devices.",
          "zh": "银发经济正在扩大对适老服务和辅助设备的需求。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“银发经济”的中英双语短段。"
    },
    {
      "id": "H033",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "绿色金融",
      "summary": "绿色金融常适合训练术语、因果、让步和政策建议句。",
      "pattern": "green finance; disclosure; transition risk; sustainable investment",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Green finance can guide capital toward low-carbon projects and sustainable investment.",
          "zh": "绿色金融可以引导资本流向低碳项目和可持续投资。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“绿色金融”的中英双语短段。"
    },
    {
      "id": "H034",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "碳市场",
      "summary": "碳市场常适合训练术语、因果、让步和政策建议句。",
      "pattern": "carbon market; emissions trading; allowance; carbon pricing",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Carbon markets use pricing mechanisms to encourage emissions reduction.",
          "zh": "碳市场通过价格机制鼓励减排。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“碳市场”的中英双语短段。"
    },
    {
      "id": "H035",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "数据跨境流动",
      "summary": "数据跨境流动常适合训练术语、因果、让步和政策建议句。",
      "pattern": "cross-border data flows; data security; compliance; privacy protection",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Cross-border data flows require a balance between innovation and security.",
          "zh": "数据跨境流动需要在创新与安全之间取得平衡。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“数据跨境流动”的中英双语短段。"
    },
    {
      "id": "H036",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "半导体产业",
      "summary": "半导体产业常适合训练术语、因果、让步和政策建议句。",
      "pattern": "semiconductor; supply chain; lithography; advanced manufacturing",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "The semiconductor industry is central to advanced manufacturing and technological competitiveness.",
          "zh": "半导体产业是先进制造和技术竞争力的核心。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“半导体产业”的中英双语短段。"
    },
    {
      "id": "H037",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "生物多样性",
      "summary": "生物多样性常适合训练术语、因果、让步和政策建议句。",
      "pattern": "biodiversity; habitat loss; ecosystem services; conservation",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Biodiversity loss can undermine ecosystem services that support human well-being.",
          "zh": "生物多样性丧失会削弱支撑人类福祉的生态系统服务。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“生物多样性”的中英双语短段。"
    },
    {
      "id": "H038",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "深海采矿",
      "summary": "深海采矿常适合训练术语、因果、让步和政策建议句。",
      "pattern": "deep-sea mining; seabed; environmental impact; precautionary approach",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Deep-sea mining should be assessed under a precautionary approach.",
          "zh": "深海采矿应按照预防性原则进行评估。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“深海采矿”的中英双语短段。"
    },
    {
      "id": "H039",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "微塑料",
      "summary": "微塑料常适合训练术语、因果、让步和政策建议句。",
      "pattern": "microplastics; human exposure; marine food chain; pollution control",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Microplastics can enter the marine food chain and raise concerns about human exposure.",
          "zh": "微塑料可能进入海洋食物链，并引发对人体暴露的担忧。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“微塑料”的中英双语短段。"
    },
    {
      "id": "H040",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "合成生物学",
      "summary": "合成生物学常适合训练术语、因果、让步和政策建议句。",
      "pattern": "synthetic biology; gene circuit; biofoundry; risk governance",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Synthetic biology offers new industrial tools but requires robust risk governance.",
          "zh": "合成生物学提供了新的工业工具，但需要稳健的风险治理。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“合成生物学”的中英双语短段。"
    },
    {
      "id": "H041",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "抗生素耐药",
      "summary": "抗生素耐药常适合训练术语、因果、让步和政策建议句。",
      "pattern": "antimicrobial resistance; overuse; surveillance; stewardship",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Antimicrobial resistance requires surveillance and responsible use of antibiotics.",
          "zh": "抗微生物药物耐药性需要监测和负责任地使用抗生素。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“抗生素耐药”的中英双语短段。"
    },
    {
      "id": "H042",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "精准医疗",
      "summary": "精准医疗常适合训练术语、因果、让步和政策建议句。",
      "pattern": "precision medicine; genomic data; tailored treatment; privacy",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Precision medicine relies on genomic data and raises privacy concerns.",
          "zh": "精准医疗依赖基因组数据，也带来隐私问题。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“精准医疗”的中英双语短段。"
    },
    {
      "id": "H043",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "养老机器人",
      "summary": "养老机器人常适合训练术语、因果、让步和政策建议句。",
      "pattern": "eldercare robot; assistive technology; human dignity; care burden",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Eldercare robots may reduce care burdens, but human dignity must be protected.",
          "zh": "养老机器人可能减轻照护负担，但必须保护人的尊严。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“养老机器人”的中英双语短段。"
    },
    {
      "id": "H044",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "无人机物流",
      "summary": "无人机物流常适合训练术语、因果、让步和政策建议句。",
      "pattern": "drone logistics; last-mile delivery; regulation; safety corridor",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Drone logistics can improve last-mile delivery if safety corridors are well managed.",
          "zh": "如果安全通道管理得当，无人机物流可以改善末端配送。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“无人机物流”的中英双语短段。"
    },
    {
      "id": "H045",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "全球治理",
      "summary": "全球治理常适合训练术语、因果、让步和政策建议句。",
      "pattern": "global governance; multilateral cooperation; rules-based order; institutional reform",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Global governance requires cooperation that balances national interests with shared responsibilities.",
          "zh": "全球治理需要在国家利益与共同责任之间取得平衡的合作。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“全球治理”的中英双语短段。"
    },
    {
      "id": "H046",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "国际传播",
      "summary": "国际传播常适合训练术语、因果、让步和政策建议句。",
      "pattern": "international communication; cultural narrative; mutual understanding; translation quality",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "High-quality translation can improve international communication and mutual understanding.",
          "zh": "高质量翻译可以改善国际传播和相互理解。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“国际传播”的中英双语短段。"
    },
    {
      "id": "H047",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "跨文化误读",
      "summary": "跨文化误读常适合训练术语、因果、让步和政策建议句。",
      "pattern": "cross-cultural misunderstanding; context; cultural reference; pragmatic meaning",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Cross-cultural misunderstanding often arises when words are translated without context.",
          "zh": "如果脱离语境翻译词语，常常会产生跨文化误读。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“跨文化误读”的中英双语短段。"
    },
    {
      "id": "H048",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "数字身份",
      "summary": "数字身份常适合训练术语、因果、让步和政策建议句。",
      "pattern": "digital identity; authentication; data protection; service access",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Digital identity systems can improve service access but require strong data protection.",
          "zh": "数字身份系统可以改善服务可及性，但需要强有力的数据保护。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“数字身份”的中英双语短段。"
    },
    {
      "id": "H049",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "智能制造",
      "summary": "智能制造常适合训练术语、因果、让步和政策建议句。",
      "pattern": "smart manufacturing; industrial internet; automation; quality control",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Smart manufacturing can improve quality control and production efficiency.",
          "zh": "智能制造可以提高质量控制和生产效率。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“智能制造”的中英双语短段。"
    },
    {
      "id": "H050",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "人形机器人",
      "summary": "人形机器人常适合训练术语、因果、让步和政策建议句。",
      "pattern": "humanoid robot; motion control; human-robot interaction; safety testing",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Humanoid robots require rigorous safety testing before large-scale deployment.",
          "zh": "人形机器人在大规模部署前需要严格的安全测试。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“人形机器人”的中英双语短段。"
    },
    {
      "id": "H051",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "核聚变",
      "summary": "核聚变常适合训练术语、因果、让步和政策建议句。",
      "pattern": "nuclear fusion; clean energy; plasma; experimental reactor",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Nuclear fusion is often described as a potential source of abundant clean energy.",
          "zh": "核聚变常被视为潜在的丰富清洁能源来源。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“核聚变”的中英双语短段。"
    },
    {
      "id": "H052",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "储能系统",
      "summary": "储能系统常适合训练术语、因果、让步和政策建议句。",
      "pattern": "energy storage system; grid stability; peak shaving; battery safety",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Energy storage systems can improve grid stability and support renewable energy integration.",
          "zh": "储能系统可以提高电网稳定性，并支持可再生能源并网。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“储能系统”的中英双语短段。"
    },
    {
      "id": "H053",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "直接锂提取",
      "summary": "直接锂提取常适合训练术语、因果、让步和政策建议句。",
      "pattern": "direct lithium extraction; brine; critical minerals; environmental footprint",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Direct lithium extraction may reduce the environmental footprint of battery material production.",
          "zh": "直接锂提取可能降低电池材料生产的环境足迹。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“直接锂提取”的中英双语短段。"
    },
    {
      "id": "H054",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "被动辐射制冷",
      "summary": "被动辐射制冷常适合训练术语、因果、让步和政策建议句。",
      "pattern": "passive radiative cooling; building energy; heat island; materials innovation",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Passive radiative cooling materials could reduce building energy demand in hot climates.",
          "zh": "被动辐射制冷材料可能降低炎热气候下的建筑能耗。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“被动辐射制冷”的中英双语短段。"
    },
    {
      "id": "H055",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "碳捕集利用与封存",
      "summary": "碳捕集利用与封存常适合训练术语、因果、让步和政策建议句。",
      "pattern": "carbon capture, utilization and storage; hard-to-abate sectors; storage site",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Carbon capture may help reduce emissions in hard-to-abate industrial sectors.",
          "zh": "碳捕集可能帮助难减排工业部门降低排放。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“碳捕集利用与封存”的中英双语短段。"
    },
    {
      "id": "H056",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "甲烷减排",
      "summary": "甲烷减排常适合训练术语、因果、让步和政策建议句。",
      "pattern": "methane reduction; livestock; oil and gas; near-term warming",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Methane reduction can deliver rapid climate benefits because methane is a powerful greenhouse gas.",
          "zh": "甲烷是一种强效温室气体，减少甲烷排放可以迅速带来气候效益。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“甲烷减排”的中英双语短段。"
    },
    {
      "id": "H057",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "生物制造",
      "summary": "生物制造常适合训练术语、因果、让步和政策建议句。",
      "pattern": "biomanufacturing; fermentation; bio-based materials; industrial biotechnology",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Biomanufacturing uses biological systems to produce materials, chemicals and medicines.",
          "zh": "生物制造利用生物系统生产材料、化学品和药物。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“生物制造”的中英双语短段。"
    },
    {
      "id": "H058",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "疫苗公平",
      "summary": "疫苗公平常适合训练术语、因果、让步和政策建议句。",
      "pattern": "vaccine equity; distribution; access; public trust",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Vaccine equity is essential for effective pandemic preparedness.",
          "zh": "疫苗公平对有效的大流行防范至关重要。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“疫苗公平”的中英双语短段。"
    },
    {
      "id": "H059",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "医疗AI",
      "summary": "医疗AI常适合训练术语、因果、让步和政策建议句。",
      "pattern": "AI in medicine; clinical decision support; diagnostic accuracy; patient safety",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "AI in medicine should improve diagnostic accuracy without compromising patient safety.",
          "zh": "医疗人工智能应提高诊断准确性，同时不损害患者安全。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“医疗AI”的中英双语短段。"
    },
    {
      "id": "H060",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "可穿戴设备",
      "summary": "可穿戴设备常适合训练术语、因果、让步和政策建议句。",
      "pattern": "wearable device; health monitoring; sensor data; privacy",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Wearable devices can support health monitoring but raise questions about data privacy.",
          "zh": "可穿戴设备可以支持健康监测，但也带来数据隐私问题。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“可穿戴设备”的中英双语短段。"
    },
    {
      "id": "H061",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "海平面上升",
      "summary": "海平面上升常适合训练术语、因果、让步和政策建议句。",
      "pattern": "sea-level rise; coastal flooding; adaptation; relocation",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Sea-level rise increases the risk of coastal flooding and long-term displacement.",
          "zh": "海平面上升增加了沿海洪水和长期迁移的风险。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“海平面上升”的中英双语短段。"
    },
    {
      "id": "H062",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "蓝碳",
      "summary": "蓝碳常适合训练术语、因果、让步和政策建议句。",
      "pattern": "blue carbon; mangrove; seagrass; carbon sequestration",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Blue carbon ecosystems such as mangroves can store carbon and protect coastlines.",
          "zh": "红树林等蓝碳生态系统可以储存碳并保护海岸线。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“蓝碳”的中英双语短段。"
    },
    {
      "id": "H063",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "非法捕捞",
      "summary": "非法捕捞常适合训练术语、因果、让步和政策建议句。",
      "pattern": "illegal, unreported and unregulated fishing; enforcement; traceability",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Traceability systems can help combat illegal, unreported and unregulated fishing.",
          "zh": "可追溯系统有助于打击非法、未报告和无管制捕捞。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“非法捕捞”的中英双语短段。"
    },
    {
      "id": "H064",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "电子废弃物",
      "summary": "电子废弃物常适合训练术语、因果、让步和政策建议句。",
      "pattern": "e-waste; informal recycling; toxic substances; resource recovery",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "E-waste recycling should prevent toxic exposure and improve resource recovery.",
          "zh": "电子废弃物回收应防止有毒暴露并提高资源回收。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“电子废弃物”的中英双语短段。"
    },
    {
      "id": "H065",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "建筑垃圾",
      "summary": "建筑垃圾常适合训练术语、因果、让步和政策建议句。",
      "pattern": "construction waste; demolition; material reuse; landfill diversion",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Construction waste can be reduced through material reuse and better demolition planning.",
          "zh": "通过材料再利用和更好的拆除规划，可以减少建筑垃圾。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“建筑垃圾”的中英双语短段。"
    },
    {
      "id": "H066",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "食品浪费",
      "summary": "食品浪费常适合训练术语、因果、让步和政策建议句。",
      "pattern": "food waste; supply chain; household behavior; composting",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Reducing food waste requires changes across supply chains and households.",
          "zh": "减少食品浪费需要供应链和家庭行为共同改变。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“食品浪费”的中英双语短段。"
    },
    {
      "id": "H067",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "可持续时尚",
      "summary": "可持续时尚常适合训练术语、因果、让步和政策建议句。",
      "pattern": "sustainable fashion; textile waste; supply chain transparency; circular design",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Sustainable fashion depends on circular design and supply-chain transparency.",
          "zh": "可持续时尚依赖循环设计和供应链透明度。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“可持续时尚”的中英双语短段。"
    },
    {
      "id": "H068",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "城市热岛",
      "summary": "城市热岛常适合训练术语、因果、让步和政策建议句。",
      "pattern": "urban heat island; green space; reflective materials; public health",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Green spaces and reflective materials can reduce urban heat island effects.",
          "zh": "绿地和反射材料可以减轻城市热岛效应。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“城市热岛”的中英双语短段。"
    },
    {
      "id": "H069",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "韧性城市",
      "summary": "韧性城市常适合训练术语、因果、让步和政策建议句。",
      "pattern": "resilient city; infrastructure; community preparedness; climate risk",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "A resilient city can absorb shocks and recover from climate-related disasters.",
          "zh": "韧性城市能够吸收冲击并从气候相关灾害中恢复。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“韧性城市”的中英双语短段。"
    },
    {
      "id": "H070",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "乡村振兴",
      "summary": "乡村振兴常适合训练术语、因果、让步和政策建议句。",
      "pattern": "rural revitalization; public services; digital infrastructure; local industry",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Rural revitalization requires better public services and stronger local industries.",
          "zh": "乡村振兴需要更完善的公共服务和更强的地方产业。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“乡村振兴”的中英双语短段。"
    },
    {
      "id": "H071",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "共同富裕",
      "summary": "共同富裕常适合训练术语、因果、让步和政策建议句。",
      "pattern": "common prosperity; income distribution; public services; opportunity equality",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Common prosperity emphasizes fairer income distribution and more equal access to opportunities.",
          "zh": "共同富裕强调更公平的收入分配和更平等的机会获取。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“共同富裕”的中英双语短段。"
    },
    {
      "id": "H072",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "劳动者权益",
      "summary": "劳动者权益常适合训练术语、因果、让步和政策建议句。",
      "pattern": "labor rights; platform work; social protection; algorithmic management",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Platform work calls for stronger social protection and clearer rules on algorithmic management.",
          "zh": "平台劳动需要更强的社会保障和更明确的算法管理规则。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“劳动者权益”的中英双语短段。"
    },
    {
      "id": "H073",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "生成式AI版权",
      "summary": "生成式AI版权常适合训练术语、因果、让步和政策建议句。",
      "pattern": "generative AI copyright; training data; licensing; creative rights",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Generative AI has intensified debates over training data, licensing and creative rights.",
          "zh": "生成式人工智能加剧了围绕训练数据、许可和创作者权益的争论。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“生成式AI版权”的中英双语短段。"
    },
    {
      "id": "H074",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "深度伪造",
      "summary": "深度伪造常适合训练术语、因果、让步和政策建议句。",
      "pattern": "deepfake; misinformation; identity fraud; content verification",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Deepfakes can spread misinformation and increase the risk of identity fraud.",
          "zh": "深度伪造可能传播错误信息并增加身份欺诈风险。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“深度伪造”的中英双语短段。"
    },
    {
      "id": "H075",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "科学发现AI",
      "summary": "科学发现AI常适合训练术语、因果、让步和政策建议句。",
      "pattern": "AI for scientific discovery; hypothesis generation; laboratory automation",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "AI for scientific discovery can accelerate hypothesis generation and laboratory automation.",
          "zh": "用于科学发现的人工智能可以加速假设生成和实验室自动化。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“科学发现AI”的中英双语短段。"
    },
    {
      "id": "H076",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "量子计算",
      "summary": "量子计算常适合训练术语、因果、让步和政策建议句。",
      "pattern": "quantum computing; error correction; cryptography; optimization",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Quantum computing could transform cryptography and complex optimization.",
          "zh": "量子计算可能改变密码学和复杂优化。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“量子计算”的中英双语短段。"
    },
    {
      "id": "H077",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "太空垃圾",
      "summary": "太空垃圾常适合训练术语、因果、让步和政策建议句。",
      "pattern": "space debris; orbital safety; collision risk; debris mitigation",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Space debris poses risks to orbital safety and future space missions.",
          "zh": "太空垃圾对轨道安全和未来太空任务构成风险。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“太空垃圾”的中英双语短段。"
    },
    {
      "id": "H078",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "卫星互联网",
      "summary": "卫星互联网常适合训练术语、因果、让步和政策建议句。",
      "pattern": "satellite internet; connectivity; low Earth orbit; rural access",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Satellite internet can expand connectivity in remote and rural areas.",
          "zh": "卫星互联网可以扩大偏远和农村地区的网络连接。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“卫星互联网”的中英双语短段。"
    },
    {
      "id": "H079",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "月球基地",
      "summary": "月球基地常适合训练术语、因果、让步和政策建议句。",
      "pattern": "lunar base; in-situ resources; surface mobility; deep-space exploration",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "A lunar base could support scientific research and future deep-space exploration.",
          "zh": "月球基地可以支持科学研究和未来深空探索。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“月球基地”的中英双语短段。"
    },
    {
      "id": "H080",
      "type": "hotspot",
      "channel": "hotspot",
      "title": "自动化翻译",
      "summary": "自动化翻译常适合训练术语、因果、让步和政策建议句。",
      "pattern": "machine translation; post-editing; terminology consistency; human judgment",
      "exam": "实务热点段落、综合阅读主题、术语积累。",
      "trap": "不要写成新闻八卦；要抽象成政策、技术、伦理、治理、社会影响。",
      "examples": [
        {
          "en": "Machine translation requires human post-editing to ensure accuracy and terminology consistency.",
          "zh": "机器翻译需要人工译后编辑以确保准确性和术语一致性。"
        }
      ],
      "memory": "热点四格：概念定义｜核心术语｜正反影响｜治理/解决方案。",
      "drill": "用“背景→问题→措施→结果”四步写一段关于“自动化翻译”的中英双语短段。"
    }
  ],
  "longSentences": [
    {
      "id": "L001",
      "title": "科技治理长句",
      "source": "Although emerging technologies can improve efficiency across public services, their deployment, if not supported by transparent rules and meaningful human oversight, may amplify existing inequalities and weaken public trust.",
      "layers": [
        [
          "主干",
          "their deployment may amplify inequalities and weaken trust"
        ],
        [
          "让步",
          "Although emerging technologies can improve efficiency"
        ],
        [
          "条件插入",
          "if not supported by transparent rules and meaningful human oversight"
        ],
        [
          "译序",
          "先让步，再条件，再主干后果"
        ]
      ],
      "translation": "尽管新兴技术能够提高公共服务效率，但如果缺乏透明规则和有意义的人类监督，其部署可能会放大既有不平等，并削弱公众信任。"
    },
    {
      "id": "L002",
      "title": "海洋保护长句",
      "source": "Marine protected areas, when designed with local communities and supported by long-term monitoring, can conserve biodiversity while sustaining livelihoods that depend on healthy ocean ecosystems.",
      "layers": [
        [
          "主干",
          "Marine protected areas can conserve biodiversity while sustaining livelihoods"
        ],
        [
          "条件/时间",
          "when designed with local communities and supported by long-term monitoring"
        ],
        [
          "后置定语",
          "livelihoods that depend on healthy ocean ecosystems"
        ],
        [
          "译序",
          "保护区→条件→双重作用"
        ]
      ],
      "translation": "如果在设计时纳入当地社区参与，并配以长期监测，海洋保护区既能保护生物多样性，也能维持依赖健康海洋生态系统的生计。"
    },
    {
      "id": "L003",
      "title": "脑机接口长句",
      "source": "Brain-computer interfaces, once confined to laboratories, are moving toward clinical use, raising questions about safety, autonomy, privacy and the boundary between treatment and enhancement.",
      "layers": [
        [
          "主干",
          "Brain-computer interfaces are moving toward clinical use"
        ],
        [
          "插入背景",
          "once confined to laboratories"
        ],
        [
          "结果伴随",
          "raising questions about..."
        ],
        [
          "并列名词",
          "safety, autonomy, privacy, boundary"
        ]
      ],
      "translation": "脑机接口曾经局限于实验室，如今正走向临床应用，同时引发有关安全、自主性、隐私以及治疗与增强之间边界的问题。"
    },
    {
      "id": "L004",
      "title": "垃圾治理长句",
      "source": "A circular economy approach to waste management seeks not only to improve recycling rates but also to redesign products and reduce waste at the source.",
      "layers": [
        [
          "主干",
          "An approach seeks to..."
        ],
        [
          "not only...but also",
          "不仅提高回收率，还重新设计产品并源头减量"
        ],
        [
          "术语",
          "circular economy approach / source reduction"
        ]
      ],
      "translation": "废弃物管理的循环经济方法不仅旨在提高回收率，还力求重新设计产品并从源头减少废弃物。"
    },
    {
      "id": "L005",
      "title": "公共卫生长句",
      "source": "Equitable access to vaccines, diagnostics and therapeutics remains a central concern in pandemic preparedness because delays in one region can quickly become risks for all.",
      "layers": [
        [
          "主干",
          "Equitable access remains a central concern"
        ],
        [
          "并列宾语",
          "vaccines, diagnostics and therapeutics"
        ],
        [
          "原因",
          "because delays... can become risks"
        ],
        [
          "范围",
          "in one region / for all"
        ]
      ],
      "translation": "疫苗、诊断工具和治疗药物的公平获取仍是大流行防范中的核心关切，因为一个地区的延误可能迅速演变为所有人的风险。"
    },
    {
      "id": "L006",
      "title": "火星任务长句",
      "source": "For a Mars mission to be sustainable, spacecraft must carry or produce enough resources to support crews during months of deep-space travel and surface operations.",
      "layers": [
        [
          "目的条件",
          "For a Mars mission to be sustainable"
        ],
        [
          "主干",
          "spacecraft must carry or produce resources"
        ],
        [
          "目的",
          "to support crews"
        ],
        [
          "时间范围",
          "during months of travel and operations"
        ]
      ],
      "translation": "要使火星任务具备可持续性，航天器必须携带或生产足够资源，以支持乘组在数月深空飞行和火星表面作业期间的需求。"
    },
    {
      "id": "L007",
      "title": "气候适应长句",
      "source": "Cities that invest in early-warning systems, green infrastructure and community preparedness are better positioned to protect vulnerable residents from heatwaves and floods.",
      "layers": [
        [
          "主干",
          "Cities are better positioned to protect residents"
        ],
        [
          "定语从句",
          "that invest in..."
        ],
        [
          "并列投入",
          "early-warning systems, green infrastructure, community preparedness"
        ],
        [
          "风险对象",
          "heatwaves and floods"
        ]
      ],
      "translation": "投资于预警系统、绿色基础设施和社区防灾准备的城市，更有能力保护脆弱居民免受热浪和洪水影响。"
    },
    {
      "id": "L008",
      "title": "数字经济长句",
      "source": "While cross-border data flows can facilitate trade and innovation, they require safeguards that protect privacy, security and legitimate public interests.",
      "layers": [
        [
          "让步/对比",
          "While cross-border data flows can facilitate..."
        ],
        [
          "主干",
          "they require safeguards"
        ],
        [
          "定语从句",
          "that protect privacy, security and interests"
        ],
        [
          "译序",
          "虽然有利于→但需要保障"
        ]
      ],
      "translation": "跨境数据流动虽可促进贸易和创新，但需要相应保障措施来保护隐私、安全和正当公共利益。"
    }
  ],
  "quiz": [
    {
      "id": "Q001",
      "question": "【时态：一般现在】下列规则最关键的是？",
      "options": [
        "制度/规律/稳定事实通常用一般现在；政策文本尤其常见。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "把中文“将/正在”机械翻成 will / be doing；制度性句子常用一般现在。"
    },
    {
      "id": "Q002",
      "question": "【时态：现在完成】下列规则最关键的是？",
      "options": [
        "过去发生，但重点在“对现在的影响/延续到现在”。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "不要把所有“已经”都译成 present perfect；若明确过去时间，用一般过去。"
    },
    {
      "id": "Q003",
      "question": "【时态：过去完成】下列规则最关键的是？",
      "options": [
        "表示过去时间点之前已经完成的动作。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "没有两个过去层级时不要滥用 had done。"
    },
    {
      "id": "Q004",
      "question": "【时态：将来表达】下列规则最关键的是？",
      "options": [
        "will 表预测/承诺；be going to 表计划趋势；be expected to 表官方预测。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "政策文件中少用口语化 going to。"
    },
    {
      "id": "Q005",
      "question": "【被动语态】下列规则最关键的是？",
      "options": [
        "英语常用被动突出制度、措施、结果；汉语可译为主动或无主句。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "英译汉不必每个被动都译“被”。"
    },
    {
      "id": "Q006",
      "question": "【名词化】下列规则最关键的是？",
      "options": [
        "正式英语常把动作压缩为名词，但过度名词化会笨重。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "汉译英可用名词化提正式度；英译汉可还原为动词。"
    },
    {
      "id": "Q007",
      "question": "【冠词：泛指与特指】下列规则最关键的是？",
      "options": [
        "a/an 表一个类别成员；the 表双方已知或唯一。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "technology, society, nature 等抽象名词通常不加 the，除非被限定。"
    },
    {
      "id": "Q008",
      "question": "【复数：抽象名词可数化】下列规则最关键的是？",
      "options": [
        "development, policy, challenge 可在具体语境中复数化。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "information, equipment, evidence 通常不可数。"
    },
    {
      "id": "Q009",
      "question": "【主谓一致】下列规则最关键的是？",
      "options": [
        "真正主语决定动词，不被插入语和介词短语误导。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "along with, together with 不改变主语数。"
    },
    {
      "id": "Q010",
      "question": "【there be 结构】下列规则最关键的是？",
      "options": [
        "用于引出新信息，但正式文本中可换成 exist / remain / emerge。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "不要把所有“有”都译 there be；可用 have, feature, involve, include。"
    },
    {
      "id": "Q011",
      "question": "【名词性从句】下列规则最关键的是？",
      "options": [
        "that/what/whether 引导主语、宾语、表语、同位语从句。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "what = the thing that；that 不作成分。"
    },
    {
      "id": "Q012",
      "question": "【定语从句：限定/非限定】下列规则最关键的是？",
      "options": [
        "限定性定义对象；非限定性补充说明。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "逗号 which 不能随意译成“这”。"
    },
    {
      "id": "Q013",
      "question": "【同位语从句】下列规则最关键的是？",
      "options": [
        "解释抽象名词：fact, idea, evidence, possibility, concern。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "不要误判为定语从句；that 不作成分。"
    },
    {
      "id": "Q014",
      "question": "【状语从句：让步】下列规则最关键的是？",
      "options": [
        "although/while/even if 引导反预期关系。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "while 也可表示对比，不一定是“当……时”。"
    },
    {
      "id": "Q015",
      "question": "【状语从句：条件】下列规则最关键的是？",
      "options": [
        "if/provided that/unless/as long as 表条件；汉译英避免一串 if。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "unless = if not；不要重复否定。"
    },
    {
      "id": "Q016",
      "question": "【非谓语：现在分词】下列规则最关键的是？",
      "options": [
        "-ing 常表示主动、伴随、原因或结果。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "不要见 -ing 就译“正在”。"
    },
    {
      "id": "Q017",
      "question": "【非谓语：过去分词】下列规则最关键的是？",
      "options": [
        "-ed 常表示被动、完成或状态。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "不要把过去分词误作谓语。"
    },
    {
      "id": "Q018",
      "question": "【不定式】下列规则最关键的是？",
      "options": [
        "to do 常表示目的、结果、倾向或未来动作。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "be designed to 不一定译“被设计去”，可译“旨在”。"
    },
    {
      "id": "Q019",
      "question": "【独立主格】下列规则最关键的是？",
      "options": [
        "名词/代词 + 分词/形容词/介词短语，表示背景或伴随。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "中文可译为“在……情况下”。"
    },
    {
      "id": "Q020",
      "question": "【介词：access to】下列规则最关键的是？",
      "options": [
        "access 与 to 搭配，表示获得机会、使用权、接入。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "不要写 access of。"
    },
    {
      "id": "Q021",
      "question": "【介词：impact on】下列规则最关键的是？",
      "options": [
        "impact/effect/influence 多与 on 搭配。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "affect 是动词，不加 on；have an impact on 才加。"
    },
    {
      "id": "Q022",
      "question": "【介词：approach to】下列规则最关键的是？",
      "options": [
        "approach 作“方法”时接 to + 名词/动名词。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "不要写 approach of。"
    },
    {
      "id": "Q023",
      "question": "【介词：be responsible for/to】下列规则最关键的是？",
      "options": [
        "for 表负责事项；to 表对谁负责。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "responsible to the environment 不自然，常说 responsible for environmental protection。"
    },
    {
      "id": "Q024",
      "question": "【程度副词】下列规则最关键的是？",
      "options": [
        "副词决定语气强度：significantly/substantially/slightly/barely。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "very 不适合正式高频；根据证据强度选副词。"
    },
    {
      "id": "Q025",
      "question": "【否定转移】下列规则最关键的是？",
      "options": [
        "think/believe/expect 等动词常出现否定转移。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "不要机械译“专家不认为”。"
    },
    {
      "id": "Q026",
      "question": "【部分否定】下列规则最关键的是？",
      "options": [
        "not all / not every / not necessarily 表部分否定。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "不能译成“所有都不”。"
    },
    {
      "id": "Q027",
      "question": "【比较结构】下列规则最关键的是？",
      "options": [
        "more than 数字是“超过”；more than + adj/noun 可表示“不只是”。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "no more than=仅仅；not more than=不超过。"
    },
    {
      "id": "Q028",
      "question": "【as...as 结构】下列规则最关键的是？",
      "options": [
        "as much as 可表示“多达”；as long as 可表示“只要”。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "不要把 as long as 全译“和……一样长”。"
    },
    {
      "id": "Q029",
      "question": "【强调结构】下列规则最关键的是？",
      "options": [
        "It is/was ... that/who ... 用于突出成分。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "注意 not A but B 的重心在 B。"
    },
    {
      "id": "Q030",
      "question": "【倒装结构】下列规则最关键的是？",
      "options": [
        "否定副词或地点状语前置可倒装。",
        "所有中文“了”都译成过去时",
        "正式英语只能用被动语态",
        "所有抽象名词都必须加 the"
      ],
      "answer": 0,
      "explain": "not only 后要部分倒装。"
    },
    {
      "id": "Q031",
      "question": "【近义词】promote / advance / foster / drive 的选词依据是？",
      "options": [
        "对象、强度、语体、褒贬",
        "只看中文意思是否相同",
        "越长越正式",
        "一律选择第一个词"
      ],
      "answer": 0,
      "explain": "promote 常接政策目标；advance 强调推进事业/议程；foster 强调培育环境；drive 强调强力推动变化。"
    },
    {
      "id": "Q032",
      "question": "【近义词】address / tackle / respond to / cope with 的选词依据是？",
      "options": [
        "对象、强度、语体、褒贬",
        "只看中文意思是否相同",
        "越长越正式",
        "一律选择第一个词"
      ],
      "answer": 0,
      "explain": "address 正式且宽泛；tackle 强调主动处理难题；respond to 强调回应；cope with 偏“应付”。"
    },
    {
      "id": "Q033",
      "question": "【近义词】curb / reduce / mitigate / rein in 的选词依据是？",
      "options": [
        "对象、强度、语体、褒贬",
        "只看中文意思是否相同",
        "越长越正式",
        "一律选择第一个词"
      ],
      "answer": 0,
      "explain": "curb 抑制；reduce 降低；mitigate 减轻负面影响；rein in 控制过快/过度。"
    },
    {
      "id": "Q034",
      "question": "【近义词】ensure / guarantee / secure / safeguard 的选词依据是？",
      "options": [
        "对象、强度、语体、褒贬",
        "只看中文意思是否相同",
        "越长越正式",
        "一律选择第一个词"
      ],
      "answer": 0,
      "explain": "ensure 表确保；guarantee 语气更强；secure 表获得/保障；safeguard 表保护。"
    },
    {
      "id": "Q035",
      "question": "【近义词】important / essential / critical / significant 的选词依据是？",
      "options": [
        "对象、强度、语体、褒贬",
        "只看中文意思是否相同",
        "越长越正式",
        "一律选择第一个词"
      ],
      "answer": 0,
      "explain": "important 普通；essential 必不可少；critical 关键且紧迫；significant 有显著意义。"
    },
    {
      "id": "Q036",
      "question": "【近义词】problem / issue / challenge / risk 的选词依据是？",
      "options": [
        "对象、强度、语体、褒贬",
        "只看中文意思是否相同",
        "越长越正式",
        "一律选择第一个词"
      ],
      "answer": 0,
      "explain": "problem 负面直接；issue 中性议题；challenge 有困难但可应对；risk 强调可能损害。"
    },
    {
      "id": "Q037",
      "question": "【近义词】increase / rise / grow / expand 的选词依据是？",
      "options": [
        "对象、强度、语体、褒贬",
        "只看中文意思是否相同",
        "越长越正式",
        "一律选择第一个词"
      ],
      "answer": 0,
      "explain": "increase 及物/不及物；rise 不及物；grow 可规模增长；expand 扩张范围。"
    },
    {
      "id": "Q038",
      "question": "【近义词】decline / fall / drop / decrease 的选词依据是？",
      "options": [
        "对象、强度、语体、褒贬",
        "只看中文意思是否相同",
        "越长越正式",
        "一律选择第一个词"
      ],
      "answer": 0,
      "explain": "decline 较正式且渐进；fall 普通；drop 可突然下降；decrease 中性。"
    },
    {
      "id": "Q039",
      "question": "【近义词】protect / preserve / conserve / safeguard 的选词依据是？",
      "options": [
        "对象、强度、语体、褒贬",
        "只看中文意思是否相同",
        "越长越正式",
        "一律选择第一个词"
      ],
      "answer": 0,
      "explain": "protect 防损害；preserve 保持原貌；conserve 可持续保护资源；safeguard 制度性保护。"
    },
    {
      "id": "Q040",
      "question": "【近义词】accurate / precise / exact / faithful 的选词依据是？",
      "options": [
        "对象、强度、语体、褒贬",
        "只看中文意思是否相同",
        "越长越正式",
        "一律选择第一个词"
      ],
      "answer": 0,
      "explain": "accurate 正确；precise 精确；exact 完全一致；faithful 忠实原意。"
    },
    {
      "id": "Q041",
      "question": "【近义词】fast / rapid / swift / accelerated 的选词依据是？",
      "options": [
        "对象、强度、语体、褒贬",
        "只看中文意思是否相同",
        "越长越正式",
        "一律选择第一个词"
      ],
      "answer": 0,
      "explain": "rapid 正式；swift 强调迅速行动；accelerated 强调加速。"
    },
    {
      "id": "Q042",
      "question": "【近义词】use / utilize / adopt / employ 的选词依据是？",
      "options": [
        "对象、强度、语体、褒贬",
        "只看中文意思是否相同",
        "越长越正式",
        "一律选择第一个词"
      ],
      "answer": 0,
      "explain": "use 普通；utilize 偏正式但勿滥用；adopt 采纳方法；employ 使用手段。"
    },
    {
      "id": "Q043",
      "question": "【近义词】help / facilitate / enable / support 的选词依据是？",
      "options": [
        "对象、强度、语体、褒贬",
        "只看中文意思是否相同",
        "越长越正式",
        "一律选择第一个词"
      ],
      "answer": 0,
      "explain": "facilitate 促进过程；enable 使成为可能；support 支持。"
    },
    {
      "id": "Q044",
      "question": "【近义词】fair / equitable / just / balanced 的选词依据是？",
      "options": [
        "对象、强度、语体、褒贬",
        "只看中文意思是否相同",
        "越长越正式",
        "一律选择第一个词"
      ],
      "answer": 0,
      "explain": "equitable 强调公平获取和分配；just 带正义色彩；balanced 强调平衡。"
    },
    {
      "id": "Q045",
      "question": "【近义词】rule / regulation / policy / guideline 的选词依据是？",
      "options": [
        "对象、强度、语体、褒贬",
        "只看中文意思是否相同",
        "越长越正式",
        "一律选择第一个词"
      ],
      "answer": 0,
      "explain": "rule 规则；regulation 法规；policy 政策；guideline 指南。"
    }
  ],
  "meta": {
    "version": "V5",
    "generated": "2026-06-28",
    "cardCount": 373,
    "termCount": 183,
    "hotspotCount": 80,
    "grammarCount": 60
  }
};
