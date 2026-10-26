/* ============================================================
 * 破茧 · 文章数据
 * ------------------------------------------------------------
 * 更新方式：在 ARTICLES 数组末尾追加新文章对象，
 * 将 publishAt 设为某个周一/三/五的 20:00（北京时间），
 * 到点后网站会自动"解锁"该文章，无需改动任何页面代码。
 * 原文请控制在 2000 字以内（长篇请使用节选并标注）。
 * ============================================================ */

const CATEGORIES = [
  { id: "speeches", name: "名人讲稿", badge: "讲", desc: "改变历史的声线——从葛底斯堡到林肯纪念堂，聆听跨越时空的伟大演讲。" },
  { id: "classics", name: "经典名篇", badge: "文", desc: "千古文章事——范仲淹的忧乐、梁任公的少年意气，字字皆是中国人的精神底色。" },
  { id: "poetry",   name: "中华诗词", badge: "诗", desc: "诗酒趁年华——从盛唐的月光到东坡的婵娟，在平仄之间遇见最美的汉语。" },
];

const ARTICLES = [

  /* ---------------- 名人讲稿 · speeches ---------------- */

  {
    id: "gettysburg",
    cat: "speeches",
    title: "葛底斯堡演说",
    subtitle: "The Gettysburg Address",
    author: "亚伯拉罕·林肯",
    authorShort: "林肯",
    authorInitial: "L",
    authorRole: "美国第16任总统 · 1809 — 1865",
    era: "1863年11月19日 · 宾夕法尼亚·葛底斯堡",
    excerpt: "民有、民治、民享之政府，必不致消亡于大地之上。",
    authorIntro: [
      "美国第十六任总统（1861—1865），出身肯塔基州拓荒者家庭，几乎全靠自学成才，律师出身。任内领导国家度过南北战争最艰难的时期，颁布《解放黑人奴隶宣言》，维护联邦统一。",
      "他以简洁、庄重、近乎诗化的英文著称，被公认为美国历史上最伟大的演说家之一。1865年4月14日，在内战胜利在望之际，于福特剧院遇刺身亡。",
    ],
    facts: [
      ["出生", "1809年2月12日 · 肯塔基州"],
      ["任期", "第16任美国总统 1861—1865"],
      ["辞世", "1865年4月15日 遇刺"],
    ],
    background: [
      { h: "一座战场 · 一座新坟", p: "1863年7月1—3日，南北双方在宾夕法尼亚州葛底斯堡激战三日，伤亡逾五万人，为整场内战最惨烈一役。战役结束后数月，宾州当局将战场南缘辟为国家公墓，安葬阵亡将士。" },
      { h: "两分钟 vs 两小时", p: "公墓揭幕典礼上，主演讲人爱德华·埃弗雷特滔滔两小时；林肯仅以“几句收尾的话”致献辞，历时约两分钟。次日埃弗雷特致信林肯：“您两分钟所达之意，我费两小时亦未能及。”" },
      { h: "一场关于“新生”的演说", p: "林肯并未渲染战场惨烈，而是将悼念升华为对国家理想的再确认：自由、平等，以及“民有、民治、民享”之政府能否延续而不致消亡。" },
    ],
    lang: "en",
    type: "prose",
    originalLabel: "英文原文",
    translationLabel: "中文译文",
    original: `Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field as a final resting-place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.

But, in a larger sense, we can not dedicate — we can not consecrate — we can not hallow — this ground. The brave men, living and dead, who struggled here, have consecrated it far above our poor power to add or detract. The world will little note nor long remember what we say here, but it can never forget what they did here. It is for us, the living, rather to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced.

It is rather for us to be here dedicated to the great task remaining before us — that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion; that we here highly resolve that these dead shall not have died in vain; that this nation, under God, shall have a new birth of freedom; and that government of the people, by the people, for the people, shall not perish from the earth.`,
    signoff: ["Delivered at the dedication of the Soldiers' National Cemetery,", "Abraham Lincoln", "Gettysburg, Pennsylvania · November 19, 1863"],
    translation: `八十七年前，我们的先辈在这块大陆上创立了一个新国家，孕育于自由之中，奉行人人生而平等之信念。

如今我们正从事一场伟大的内战，以考验这个国家——或任何一个如此诞生、如此奉献的国家——能否长久存续。我们正聚集在这场战争的一处巨大战场上，来将其中的一部分辟为最后安息之地，以安放那些曾为国捐躯者的英灵。从道义上讲，我们理应做此事。

然而，从更广的意义上说，我们无法奉献——我们无法圣化——我们无法神化——这片土地。那些曾在这里战斗过的勇士，无论存殁，已将之圣化，远非我们微薄之力所能增减。世人对我们在此所言或许鲜少留意，亦难长久铭记，但他们在此所做之事，将永不被遗忘。我们这些活着的人，更当在此奉献于他们至此未竟之大业。

我们更当在此奉献于摆在我们面前的伟大事业——承蒙这些光荣牺牲者的厚赐，我们当更加忠于他们为之奉献一生的事业；我们在此庄严立志：这些亡者绝不徒然捐躯；这个国家，在上帝庇佑下，必将获得自由的新生；而民有、民治、民享之政府，必不致消亡于大地之上。`,
    signoffT: ["演讲于“国家士兵公墓”揭幕典礼，", "亚伯拉罕·林肯", "宾夕法尼亚 · 葛底斯堡 · 1863年11月19日"],
    publishAt: "2026-09-07T20:00:00+08:00",
  },

  {
    id: "last-speech",
    cat: "speeches",
    title: "最后一次演讲",
    subtitle: "",
    author: "闻一多",
    authorShort: "闻一多",
    authorRole: "诗人 · 学者 · 民主战士 · 1899 — 1946",
    era: "1946年7月15日 · 昆明至公堂",
    excerpt: "我们不怕死，我们有牺牲的精神！",
    authorIntro: [
      "闻一多（1899—1946），本名闻家骅，湖北浠水人。新月派代表诗人，著有诗集《红烛》《死水》；后于西南联大治《诗经》《楚辞》与唐诗，学术成就卓著。",
      "抗战胜利后积极投身反独裁、争民主的爱国运动。1946年7月15日在昆明悼念李公朴大会上即席发表此讲，当日下午遭特务暗杀，年仅47岁。",
    ],
    facts: [
      ["生于", "1899年 · 湖北浠水"],
      ["代表作", "《红烛》《死水》"],
      ["殉难", "1946年7月15日 · 昆明"],
    ],
    background: [
      { h: "李公朴之死", p: "1946年7月11日夜，爱国民主人士李公朴在昆明遭国民党特务暗杀，举国震惊。7月15日上午，昆明各界于云南大学至公堂举行追悼会。" },
      { h: "拍案而起", p: "追悼会上，本无演讲安排的闻一多怒不可遏，即席发表讲话。他痛斥暗杀行径，横眉冷对混入场内的特务，言辞如刀，满堂动容。" },
      { h: "五小时之后", p: "演讲当日下午，闻一多在返家途中遭特务伏击，身中十余弹殉难。“前脚跨出大门，后脚就不准备再跨进大门”竟成谶语，此讲遂被后人称为“最后一次演讲”。" },
    ],
    lang: "zh",
    type: "prose",
    originalLabel: "演讲原文（节选）",
    translation: null,
    original: `这几天，大家晓得，在昆明出现了历史上最卑劣、最无耻的事情！李先生究竟犯了什么罪，竟遭此毒手？他只不过用笔写写文章，用嘴说说话，而他所写的、所说的，都无非是一个没有失掉良心的中国人的话！大家都有一支笔，有一张嘴，有什么理由拿出来讲啊！有事实拿出来说啊！为什么要打要杀，而且又不敢光明正大地来打来杀，而偷偷摸摸地来暗杀！这成什么话？

今天，这里有没有特务？你站出来！是好汉的站出来！你出来讲！凭什么要杀死李先生？杀死了人，又不敢承认，还要诬蔑人，说什么“桃色事件”，说什么共产党杀共产党，无耻啊！无耻啊！这是某集团的无耻，恰是李先生的光荣！李先生在昆明被暗杀，是李先生留给昆明的光荣！也是昆明人的光荣！

我们不怕死，我们有牺牲的精神！我们随时像李先生一样，前脚跨出大门，后脚就不准备再跨进大门！

黑暗即将过去，曙光就在眼前。我们相信，不久的将来，昆明将是一片光明！`,
    publishAt: "2026-09-09T20:00:00+08:00",
  },

  {
    id: "appel-18-juin",
    cat: "speeches",
    title: "六月十八日呼吁",
    subtitle: "L'Appel du 18 juin",
    author: "夏尔·戴高乐",
    authorShort: "戴高乐",
    authorInitial: "G",
    authorRole: "自由法国领袖 · 第五共和国总统 · 1890 — 1970",
    era: "1940年6月18日 · 伦敦BBC电台",
    excerpt: "无论发生什么，法兰西抵抗的火焰绝不会熄灭。",
    authorIntro: [
      "夏尔·戴高乐（1890—1970），法国军事家、政治家、作家，法兰西第五共和国的创建者。毕业于圣西尔军校，一战凡尔登战役中负伤被俘五年。",
      "二战中创建并领导“自由法国”运动抗击纳粹，1959—1969年任第五共和国首任总统。1964年与毛泽东主席共同促成中法建交。",
    ],
    facts: [
      ["生于", "1890年11月22日 · 里尔"],
      ["职务", "第五共和国首任总统 1959—1969"],
      ["辞世", "1970年11月9日 · 科隆贝双教堂"],
    ],
    background: [
      { h: "至暗时刻", p: "1940年6月，德军绕过马奇诺防线长驱直入，巴黎不战而陷。主和派贝当组阁，决意停战投降，法兰西第三共和国濒临崩溃。" },
      { h: "出走伦敦", p: "时任国防与战争副国务秘书的戴高乐拒绝投降，只身飞抵伦敦，获丘吉尔许可使用BBC播音时段。6月18日晚，他在伦敦广播大厦录下这篇讲稿。" },
      { h: "四分钟的火种", p: "广播全文约650词，历时约四分钟。当日实时收听者不过数千，但这簇火种点燃了“自由法国”抵抗运动，维希政府随即缺席判处戴高乐死刑。" },
    ],
    lang: "fr",
    type: "prose",
    originalLabel: "法文原文（节选）",
    translationLabel: "中文译文（节选）",
    original: `Les chefs qui, depuis de nombreuses années, sont à la tête des armées françaises, ont formé un gouvernement. Ce gouvernement, alléguant la défaite de nos armées, s'est mis en rapport avec l'ennemi pour cesser le combat.

Mais le dernier mot est-il dit ? L'espérance doit-elle disparaître ? La défaite est-elle définitive ? Non !

Croyez-moi, moi qui vous parle en connaissance de cause et vous dis que rien n'est perdu pour la France. Les mêmes moyens qui nous ont vaincus peuvent faire venir un jour la victoire.

Car la France n'est pas seule ! Elle n'est pas seule ! Elle n'est pas seule ! Elle a un vaste Empire derrière elle. Elle peut faire bloc avec l'Empire britannique qui tient la mer et continue la lutte. Elle peut, comme l'Angleterre, utiliser sans limites l'immense industrie des Etats-Unis.

Cette guerre n'est pas limitée au territoire malheureux de notre pays. Cette guerre n'est pas tranchée par la bataille de France. Cette guerre est une guerre mondiale. Toutes les fautes, tous les retards, toutes les souffrances, n'empêchent pas qu'il y a, dans l'univers, tous les moyens nécessaires pour écraser un jour nos ennemis.

Quoi qu'il arrive, la flamme de la résistance française ne doit pas s'éteindre et ne s'éteindra pas.

Demain, comme aujourd'hui, je parlerai à la Radio de Londres.`,
    signoff: ["Prononcée à la BBC de Londres,", "Charles de Gaulle", "18 juin 1940"],
    translation: `多年来执掌法国军队的将领们，已经组建了一个政府。这个政府以我军战败为由，与敌方接触，商洽停战。

然而，最后的话是否已经说完？希望是否必须破灭？失败是否已成定局？不！

请相信我——我是基于对事实的充分了解向你们说话的——我要告诉你们：法兰西的事业并未失败。使我们失败的那些手段，终有一天会为我们带来胜利。

因为，法兰西并不孤立！她并不孤立！她并不孤立！她的身后是一个辽阔的帝国；她可以同控制着海洋、仍在继续战斗的大英帝国结成同盟；她还可以像英国一样，毫无限制地动用美国那庞大的工业力量。

这场战争并不局限于我们不幸国土的疆界之内；这场战争也不由法兰西战役来作终局。这是一场世界大战。一切失误、一切延误、一切苦难，都不能改变一个事实：世上存在着终有一天击溃敌人所需的一切手段。

无论发生什么，法兰西抵抗的火焰绝不能熄灭，也绝不会熄灭。

明天，如同今日，我将在伦敦电台继续发声。`,
    signoffT: ["演讲于BBC伦敦电台播出，", "夏尔·戴高乐", "1940年6月18日"],
    publishAt: "2026-09-11T20:00:00+08:00",
  },

  {
    id: "i-have-a-dream",
    cat: "speeches",
    title: "我有一个梦想",
    subtitle: "I Have a Dream",
    author: "马丁·路德·金",
    authorShort: "马丁·路德·金",
    authorInitial: "K",
    authorRole: "美国民权运动领袖 · 诺贝尔和平奖得主 · 1929 — 1968",
    era: "1963年8月28日 · 华盛顿林肯纪念堂前",
    excerpt: "我梦想有一天，我的四个孩子将不以肤色、而以品格被评判。",
    authorIntro: [
      "马丁·路德·金（Martin Luther King Jr., 1929—1968），美国牧师、社会活动家，非暴力民权运动领袖。领导蒙哥马利公共汽车抵制运动、伯明翰运动与华盛顿大游行，1964年获诺贝尔和平奖。",
      "1968年4月4日在孟菲斯遇刺身亡，年仅39岁。其生日此后成为美国联邦法定纪念日“马丁·路德·金日”。",
    ],
    facts: [
      ["生于", "1929年 · 佐治亚州亚特兰大"],
      ["荣誉", "1964年诺贝尔和平奖"],
      ["遇刺", "1968年4月4日 · 孟菲斯"],
    ],
    background: [
      { h: "一场大游行", p: "1963年8月28日，约25万人汇聚华盛顿林肯纪念堂前“为就业与自由进军”，是美国历史上规模最大的示威游行之一。" },
      { h: "站在林肯的肩膀上", p: "金刻意选择林肯纪念堂台阶——葛底斯堡演说整整一百年之后，他向美国发出“兑现承诺”的呼吁，将民权诉求接入建国理想。" },
      { h: "即兴的“梦想”", p: "讲稿原无“梦想”段落。讲到中段，福音歌手马哈利亚·杰克逊高喊“跟他们讲讲那个梦想，马丁！”，金遂弃稿即兴，成就了二十世纪最伟大的演说。" },
    ],
    lang: "en",
    type: "prose",
    originalLabel: "英文原文（节选）",
    translationLabel: "中文译文（节选）",
    original: `I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation.

I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream.

I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident, that all men are created equal."

I have a dream that one day, on the red hills of Georgia, the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.

I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.

I have a dream today!

I have a dream that one day every valley shall be exalted, and every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight; and the glory of the Lord shall be revealed and all flesh shall see it together.

This is our hope. This is the faith that I go back to the South with. With this faith, we will be able to hew out of the mountain of despair a stone of hope. With this faith, we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day.

And when this happens, and when we allow freedom to ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual: Free at last! Free at last! Thank God Almighty, we are free at last!`,
    translation: `今天，我很高兴同你们一起参加这次集会。它必将作为美国历史上为争取自由而举行的最伟大的示威游行而载入史册。

朋友们，今天我要对你们说：尽管此刻和未来我们仍将面临种种困难与挫折，我仍然怀有一个梦想。这个梦深深植根于美国梦之中。

我梦想有一天，这个国家将会奋起，实现其立国信条的真谛：“我们认为这些真理不言而喻：人人生而平等。”

我梦想有一天，在佐治亚的红山上，昔日奴隶的儿子和昔日奴隶主的儿子能像兄弟般同桌而坐。

我梦想有一天，我的四个孩子将生活在一个不是以肤色、而是以品格来评判他们的国度里。

我今天有一个梦想！

我梦想有一天，幽谷上升，高山下降，坎坷曲折之路成坦途，圣光披露，满照人间。

这就是我们的希望。我怀着这种信念回到南方。有了这个信念，我们就能从绝望之岭劈出一块希望之石；有了这个信念，我们就能一同工作、一同祈祷、一同斗争、一同入狱、一同争取自由，因为我们知道，终有一天，我们会获得自由。

到那一天，当我们让自由之声响起，让它响彻每一座村庄、每一个州、每一座城市，我们就能加速那一天的来临——那时，上帝的所有儿女，黑人和白人，犹太教徒和非犹太教徒，新教徒和天主教徒，都将携手同唱那首古老的黑人灵歌：终于自由了！终于自由了！感谢全能的上帝，我们终于自由了！`,
    publishAt: "2026-09-18T20:00:00+08:00",
  },

  /* ---------------- 经典名篇 · classics ---------------- */

  {
    id: "yueyanglouji",
    cat: "classics",
    title: "岳阳楼记",
    subtitle: "",
    author: "范仲淹",
    authorShort: "范仲淹",
    authorRole: "北宋政治家 · 文学家 · 989 — 1052",
    era: "庆历六年（1046）· 邓州",
    excerpt: "先天下之忧而忧，后天下之乐而乐。",
    authorIntro: [
      "范仲淹（989—1052），字希文，苏州吴县人，北宋政治家、文学家。戍边御夏、主持“庆历新政”，一生以天下为己任，死后谥“文正”，为后世士大夫之楷模。",
      "工于诗文，存世无多而皆精。一篇《岳阳楼记》，足以使其跻身千古文章大家之列。",
    ],
    facts: [
      ["生于", "989年 · 苏州吴县"],
      ["谥号", "文正"],
      ["传世", "《范文正公集》"],
    ],
    background: [
      { h: "不曾登楼", p: "庆历六年（1046），好友滕子京谪守巴陵，重修岳阳楼，寄来《洞庭晚秋图》求记。范仲淹时在邓州任上，并未亲临岳阳，全凭图卷与想象成文。" },
      { h: "贬谪中的旷达", p: "其时范仲淹自己亦因新政失败而出京外任。“不以物喜，不以己悲”既是劝勉友人，也是自我剖白。" },
      { h: "一记定调", p: "全文先景后情，由“迁客骚人”的悲喜两态翻出“古仁人之心”，以“先忧后乐”收束，成为中国士人精神的千年标高。" },
    ],
    lang: "zh",
    type: "prose",
    originalLabel: "原文",
    translationLabel: "白话译文",
    original: `庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。属予作文以记之。

予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也。前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？

若夫淫雨霏霏，连月不开，阴风怒号，浊浪排空；日星隐曜，山岳潜形；商旅不行，樯倾楫摧；薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。

至若春和景明，波澜不惊，上下天光，一碧万顷；沙鸥翔集，锦鳞游泳；岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧，渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风，其喜洋洋者矣。

嗟夫！予尝求古仁人之心，或异二者之为，何哉？不以物喜，不以己悲；居庙堂之高则忧其民；处江湖之远则忧其君。是进亦忧，退亦忧。然则何时而乐耶？其必曰“先天下之忧而忧，后天下之乐而乐”乎。噫！微斯人，吾谁与归？

时六年九月十五日。`,
    translation: `庆历四年的春天，滕子京被贬为巴陵太守。到了第二年，政务顺利，百姓和乐，各种荒废的事业都兴办起来。于是重修岳阳楼，扩大它原有的规模，把唐代名家和当代人的诗赋刻在楼上，嘱托我写文章来记述这件事。

我看那巴陵郡的美景，全在洞庭一湖。它连接着远山，吞吐着长江，浩浩荡荡，无边无际；清晨阳光灿烂，傍晚烟雾昏暗，景象千变万化。这就是岳阳楼的雄伟景象，前人的记述已经很详尽了。既然它北通巫峡，南达潇湘，被贬的官员和多愁的诗人大多在这里聚会，他们观赏景物时的心情，怎能不有所不同呢？

像那连绵的雨纷纷洒落、整月不晴的时候，阴冷的风怒吼着，浑浊的浪冲向天空；日月星辰失去了光辉，山岳隐没了形迹；商旅无法通行，桅杆倒下，船桨折断；傍晚天色昏暗，只听到虎啸猿啼。这时登上这座楼，就会生出离开国都、怀念家乡，担心遭人诽谤、害怕被人讥讽的心情，满眼萧条冷落，感慨到极点而悲伤起来。

至于春风和煦、阳光明媚的日子，湖面平静，没有风浪，天色湖光上下相接，一片碧绿，广阔无际；沙洲上的鸥鸟时而飞翔、时而停歇，美丽的鱼儿游来游去；岸上的香草和小洲上的兰花，香气浓郁，颜色青翠。有时大片烟雾完全消散，皎洁的月光一泻千里，浮动的光闪耀着金色，静静的月影像沉入水中的玉璧，渔夫的歌声一唱一和，这样的乐趣哪有穷尽！这时登上这座楼，就会感到心胸开阔、精神愉快，荣耀和屈辱一并忘却，端着酒杯迎着清风，真是喜气洋洋啊。

唉！我曾经探求古代品德高尚的人的思想感情，或许不同于以上两种心情，这是为什么呢？他们不因外物好坏和自己得失而或喜或悲。在朝廷做官就为百姓担忧，退居僻远的江湖就为君主担忧。这样进朝为官也担忧，退居江湖也担忧。那么什么时候才快乐呢？他们一定会说“在天下人忧之前先忧，在天下人乐之后才乐”吧！唉！如果没有这种人，我同谁一道呢？

写于庆历六年九月十五日。`,
    publishAt: "2026-09-07T20:00:00+08:00",
  },

  {
    id: "shaonian-zhongguo-shuo",
    cat: "classics",
    title: "少年中国说（节选）",
    subtitle: "",
    author: "梁启超",
    authorShort: "梁启超",
    authorRole: "近代思想家 · 学者 · 1873 — 1929",
    era: "1900年2月 · 流亡日本期间",
    excerpt: "美哉我少年中国，与天不老！壮哉我中国少年，与国无疆！",
    authorIntro: [
      "梁启超（1873—1929），字卓如，号任公，广东新会人。近代思想家、学者，戊戌变法领袖之一，“笔锋常带感情”的一代文宗。",
      "流亡日本期间创办《清议报》《新民丛报》，以“新民体”文章唤醒国人；晚年讲学清华国学研究院，著述宏富，涉政治、史学、文学诸域。",
    ],
    facts: [
      ["生于", "1873年 · 广东新会"],
      ["号", "饮冰室主人"],
      ["著作", "《饮冰室合集》"],
    ],
    background: [
      { h: "流亡中的呐喊", p: "1900年，戊戌变法失败后流亡日本的梁启超，为激起国人救亡图存之志，作《少年中国说》，刊于《清议报》。" },
      { h: "驳“老大帝国”", p: "当时西方讥中国为“老大帝国”（迟暮之国）。梁启超反诘：中国非老大，而是暂处少年，国家的希望恰恰在于一代新青年。" },
      { h: "新文体的力量", p: "本文为“新民体”代表作，半文半白、气势磅礴，一经刊出举国传诵。九年之后，一位少年在课堂上读到它，为自己取名“子任”——他就是毛泽东。" },
    ],
    lang: "zh",
    type: "prose",
    originalLabel: "原文（节选）",
    translationLabel: "白话译文",
    original: `故今日之责任，不在他人，而全在我少年。少年智则国智，少年富则国富；少年强则国强，少年独立则国独立；少年自由则国自由，少年进步则国进步；少年胜于欧洲，则国胜于欧洲；少年雄于地球，则国雄于地球。

红日初升，其道大光。河出伏流，一泻汪洋。潜龙腾渊，鳞爪飞扬。乳虎啸谷，百兽震惶。鹰隼试翼，风尘翕张。奇花初胎，矞矞皇皇。干将发硎，有作其芒。天戴其苍，地履其黄。纵有千古，横有八荒。前途似海，来日方长。

美哉我少年中国，与天不老！壮哉我中国少年，与国无疆！`,
    translation: `所以说，今天的责任不在别人身上，全在我们少年身上。少年有智慧，国家就有智慧；少年富足，国家就富足；少年强大，国家就强大；少年独立，国家就独立；少年自由，国家就自由；少年进步，国家就进步；少年胜过欧洲，国家就胜过欧洲；少年称雄于世界，国家就称雄于世界。

红日刚刚升起，前途一片光明；黄河从地下涌出，一泻千里、浩浩荡荡。潜藏的巨龙从深渊腾跃而起，鳞爪飞舞；幼虎在山谷长啸，百兽震惊惶恐；雄鹰展翅试飞，卷起狂风尘土；奇花刚刚孕蕾，灿烂明丽、生机勃勃；宝剑在磨石上磨出，锋芒毕露。头顶着苍天，脚踏着大地；从纵的时间看有着千秋万代，从横的空间看有着辽阔疆域。前途像海一般宽广，未来的岁月正长。

美好啊，我们的少年中国，同苍天一样永不衰老！雄壮啊，我们的中国少年，同祖国一样万寿无疆！`,
    publishAt: "2026-09-09T20:00:00+08:00",
  },

  {
    id: "chushibiao",
    cat: "classics",
    title: "出师表（节选）",
    subtitle: "",
    author: "诸葛亮",
    authorShort: "诸葛亮",
    authorRole: "蜀汉丞相 · 181 — 234",
    era: "建兴五年（227）· 成都",
    excerpt: "受任于败军之际，奉命于危难之间。",
    authorIntro: [
      "诸葛亮（181—234），字孔明，琅琊阳都人，三国时期蜀汉丞相，杰出的政治家、军事家。隐居隆中而预见三分天下，辅佐刘备、刘禅两代君主。",
      "六出祁山北伐曹魏，鞠躬尽瘁，星落五丈原，死后谥“忠武侯”，为千古人臣之典范。",
    ],
    facts: [
      ["生于", "181年 · 琅琊阳都"],
      ["官至", "蜀汉丞相 · 武乡侯"],
      ["谥号", "忠武侯"],
    ],
    background: [
      { h: "危急存亡之秋", p: "蜀章武三年（223），刘备白帝城托孤，刘禅继位。建兴五年（227），诸葛亮平定南方后决意北伐曹魏，临行前上此表于后主。" },
      { h: "一片肺腑", p: "表中十三次提及“先帝”，既有报答知遇之恩的剖白，也暗含对年轻的刘禅“亲贤臣、远小人”的殷切叮嘱。" },
      { h: "临表涕零", p: "全文不假雕饰，字字从肺腑流出，与《后出师表》“鞠躬尽瘁，死而后已”之语相映，成为后世忠贞品格的千古典范。" },
    ],
    lang: "zh",
    type: "prose",
    originalLabel: "原文（节选）",
    translationLabel: "白话译文",
    original: `先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。

臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。

亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。

愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。今当远离，临表涕零，不知所言。`,
    translation: `先帝开创统一天下的大业还没有完成一半，就中途去世了。如今天下分成三国，我们益州人力疲惫、民生凋敝，这实在是国家危急存亡的关键时刻啊。然而宫廷侍卫之臣在朝廷内毫不懈怠，忠诚有志之士在外奋不顾身，这是因为追念先帝对他们的特殊恩遇，想要报答在陛下身上啊。陛下实在应该广泛听取臣下的意见，来发扬光大先帝遗留下来的美德，振奋有志之士的气概；不应该随便看轻自己，说话不合道理，以致堵塞了忠臣进谏的道路。

我本来是平民百姓，亲自在南阳耕种，只求在乱世中保全性命，不谋求在诸侯面前扬名显达。先帝不因为我身份低微、见识短浅，降低身份、委屈自己，三次到草庐中来拜访我，拿当代的大事询问我，我因此感动振奋，于是答应为先帝奔走效劳。后来遭遇挫败，在兵败之际接受重任，在危难之间奉命出使，从那时到现在已经二十一年了。

亲近贤臣、疏远小人，这是前汉所以兴盛的原因；亲近小人、疏远贤臣，这是后汉所以衰败的原因。

希望陛下把讨伐奸贼、复兴汉室的任务交给我；如果没有成效，就治我的罪，来告慰先帝在天之灵。如今即将远行，面对表章泪流不止，不知道说了些什么。`,
    publishAt: "2026-09-14T20:00:00+08:00",
  },

  {
    id: "taohuayuan-ji",
    cat: "classics",
    title: "桃花源记",
    subtitle: "",
    author: "陶渊明",
    authorShort: "陶渊明",
    authorRole: "东晋诗人 · 田园诗派之祖 · 约365 — 427",
    era: "约永初二年（421）· 浔阳",
    excerpt: "芳草鲜美，落英缤纷。",
    authorIntro: [
      "陶渊明（约365—427），字元亮，一说名潜、字渊明，浔阳柴桑人，东晋诗人。四十一岁辞彭泽令归隐，“不为五斗米折腰”，从此躬耕田园。",
      "其诗冲淡自然、意境深远，开创田园诗一派；散文与辞赋亦工，皆收入《陶渊明集》。",
    ],
    facts: [
      ["生于", "约365年 · 浔阳柴桑"],
      ["自号", "五柳先生"],
      ["传世", "《陶渊明集》"],
    ],
    background: [
      { h: "归去来兮", p: "义熙元年（405），陶渊明辞去仅任职八十余日的彭泽县令，归隐田园，从此不再出仕，躬耕不辍。" },
      { h: "乱世桃源", p: "其时晋宋易代在即，战乱频仍、赋役苛重。文中“避秦时乱”的桃花源，寄托着诗人对安宁生活的全部想象。" },
      { h: "千古一文", p: "本文本为《桃花源诗》前之“记”，却青出于蓝。自此，“世外桃源”成为汉语中理想国的代名词。" },
    ],
    lang: "zh",
    type: "prose",
    originalLabel: "原文",
    translationLabel: "白话译文",
    original: `晋太元中，武陵人捕鱼为业。缘溪行，忘路之远近。忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷。渔人甚异之，复前行，欲穷其林。

林尽水源，便得一山，山有小口，仿佛若有光。便舍船，从口入。初极狭，才通人。复行数十步，豁然开朗。土地平旷，屋舍俨然，有良田、美池、桑竹之属。阡陌交通，鸡犬相闻。其中往来种作，男女衣着，悉如外人。黄发垂髫，并怡然自乐。

见渔人，乃大惊，问所从来。具答之。便要还家，设酒杀鸡作食。村中闻有此人，咸来问讯。自云先世避秦时乱，率妻子邑人来此绝境，不复出焉，遂与外人间隔。问今是何世，乃不知有汉，无论魏晋。此人一一为具言所闻，皆叹惋。余人各复延至其家，皆出酒食。停数日，辞去。此中人语云：“不足为外人道也。”

既出，得其船，便扶向路，处处志之。及郡下，诣太守，说如此。太守即遣人随其往，寻向所志，遂迷，不复得路。

南阳刘子骥，高尚士也，闻之，欣然规往。未果，寻病终。后遂无问津者。`,
    translation: `东晋太元年间，武陵郡有个人以捕鱼为生。一天他沿着溪水划船前行，忘记了路程的远近。忽然遇到一片桃花林，桃树夹着溪流两岸生长，长达几百步，中间没有别的树木，芳草鲜嫩美丽，落花纷纷飘散。渔人对此十分惊异，又向前划去，想走到那片林子的尽头。

桃花林在溪水发源的地方到了尽头，便出现一座山，山上有个小洞口，隐隐约约好像有光。渔人就下了船，从洞口进去。起初洞口很窄，仅容一人通过。又走了几十步，突然变得开阔明亮。只见土地平坦宽广，房屋整整齐齐，有肥沃的田地、美丽的池塘和桑树竹林之类。田间小路交错相通，村落间能互相听见鸡鸣狗叫的声音。人们来来往往耕种劳作，男女的穿戴都和外面的人一样。老人和小孩，都安闲快乐。

桃花源里的人见了渔人，非常吃惊，问他是从哪里来的，渔人一一作了回答。有人就邀请他到自己家里去，摆酒杀鸡做饭来款待他。村里的人听说有这样一个人，都来打听消息。他们自己说，祖先为了躲避秦时的战乱，带领妻子儿女和乡邻来到这个与世隔绝的地方，不再从这里出去，于是就同外面的人断了往来。问现在是什么朝代，竟然不知道有过汉朝，更不必说魏晋了。渔人把自己知道的事一一详细地告诉了他们，他们都感叹惋惜。其余的人各自又把渔人请到自己家中，都拿出酒饭来款待他。渔人逗留了几天后告辞离开。村里的人对他说：“这里的情况不值得对外面的人说啊。”

渔人出来后找到自己的船，就沿着来时的路回去，处处都做了记号。到了郡城，去拜见太守，报告了自己的经历。太守立即派人跟着他前往，寻找先前所做的记号，最终还是迷失了方向，再也找不到通往桃花源的路了。

南阳人刘子骥，是位志趣高洁的隐士，听说这件事，高兴地计划前往。没有实现，不久就病死了。此后就再也没有探寻桃花源的人了。`,
    publishAt: "2026-09-21T20:00:00+08:00",
  },

  /* ---------------- 中华诗词 · poetry ---------------- */

  {
    id: "qiangjinjiu",
    cat: "poetry",
    title: "将进酒",
    subtitle: "",
    author: "李白",
    authorShort: "李白",
    authorRole: "唐代诗人 · “诗仙” · 701 — 762",
    era: "约天宝十一载（752）· 嵩山颍阳",
    excerpt: "天生我材必有用，千金散尽还复来。",
    authorIntro: [
      "李白（701—762），字太白，号青莲居士，唐代伟大的浪漫主义诗人，被誉为“诗仙”。诗风雄奇豪放，想象瑰丽，与杜甫并称“李杜”。",
      "少年仗剑去国、遍游天下，曾供奉翰林而终遭放还；晚年流离，病逝于当涂。存诗近千首，是盛唐气象最响亮的名字。",
    ],
    facts: [
      ["生于", "701年"],
      ["字号", "太白 · 青莲居士"],
      ["并称", "李杜（诗仙）"],
    ],
    background: [
      { h: "赐金放还", p: "天宝三载（744），李白被唐玄宗“赐金放还”，辅弼天下的政治理想就此破灭，此后漫游四方、纵情诗酒。" },
      { h: "嵩山痛饮", p: "约天宝十一载，李白与友人岑勋应隐士元丹丘之邀，会饮于嵩山颍阳山居。“天生我材必有用”的呐喊，正诞生于这场大醉。" },
      { h: "悲中之豪", p: "全诗以“悲”起、以“豪”行、以“愁”结，看似纵酒狂歌，内里是怀才不遇的深悲巨痛，而读来竟有排山倒海之势。" },
    ],
    lang: "zh",
    type: "verse",
    originalLabel: "原文",
    translationLabel: "白话译文",
    original: `君不见黄河之水天上来，奔流到海不复回。
君不见高堂明镜悲白发，朝如青丝暮成雪。
人生得意须尽欢，莫使金樽空对月。
天生我材必有用，千金散尽还复来。

烹羊宰牛且为乐，会须一饮三百杯。
岑夫子，丹丘生，将进酒，杯莫停。
与君歌一曲，请君为我倾耳听。
钟鼓馔玉不足贵，但愿长醉不复醒。
古来圣贤皆寂寞，惟有饮者留其名。
陈王昔时宴平乐，斗酒十千恣欢谑。

主人何为言少钱，径须沽取对君酌。
五花马，千金裘，
呼儿将出换美酒，与尔同销万古愁。`,
    translation: `你难道没有看见，黄河之水从天上来，奔涌向海，一去不回？你难道没有看见，高堂上的老人对着明镜悲叹白发，早晨还如黑丝，傍晚便成白雪？人生得意之时就该尽情欢乐，莫让金杯空对明月。上天造就我这样的英才必然有用，千金散尽还会再回来。

烹羊宰牛且尽情欢乐，应当一次痛饮三百杯。岑夫子啊，丹丘生啊，请喝酒吧，杯不要停。我为你们唱一首歌，请你们为我侧耳倾听：钟鸣鼎食、玉盘珍馐都不足珍贵，只愿长醉不愿醒来。自古以来圣贤都寂寞无闻，只有善饮者留下美名。陈王曹植当年在平乐观设宴，斗酒十千恣意欢谑。

主人为什么说钱少？只管买酒来与你们对饮。五花宝马、千金狐裘，叫孩子拿去换美酒来，我和你们一起消解这万古的愁绪！`,
    publishAt: "2026-09-07T20:00:00+08:00",
  },

  {
    id: "shuidiao-getou",
    cat: "poetry",
    title: "水调歌头 · 明月几时有",
    subtitle: "",
    author: "苏轼",
    authorShort: "苏轼",
    authorRole: "北宋文学家 · 书画家 · 1037 — 1101",
    era: "熙宁九年（1076）中秋 · 密州",
    excerpt: "但愿人长久，千里共婵娟。",
    authorIntro: [
      "苏轼（1037—1101），字子瞻，号东坡居士，眉州眉山人，北宋文学家、书画家。诗词文赋皆冠绝一代，为“唐宋八大家”之一。",
      "一生宦海浮沉而旷达自适，屡遭贬谪而笔力愈健，“一蓑烟雨任平生”正是其写照。",
    ],
    facts: [
      ["生于", "1037年 · 眉州眉山"],
      ["号", "东坡居士"],
      ["并称", "唐宋八大家"],
    ],
    background: [
      { h: "密州望月", p: "熙宁九年（1076）中秋，苏轼知密州，与同僚欢饮达旦，大醉。此时他与弟弟苏辙已七年未见。" },
      { h: "兼怀子由", p: "词前小序“兼怀子由”点出题旨——对亲人的思念与对人间的眷恋，在同一轮明月之下交织。" },
      { h: "千古中秋第一词", p: "此词一出，咏中秋者莫能过。南宋胡仔评曰：“中秋词自东坡《水调歌头》一出，余词尽废。”" },
    ],
    lang: "zh",
    type: "verse",
    originalLabel: "原文",
    translationLabel: "白话译文",
    original: `丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。

明月几时有？把酒问青天。
不知天上宫阙，今夕是何年。
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间。

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。`,
    translation: `丙辰年的中秋节，我欢饮直到天亮，大醉之中写下这首词，同时怀念弟弟子由。

明月是什么时候出现的？我端起酒杯询问青天。不知道天上的宫殿，今晚是哪一年。我想乘风回到天上，又恐怕月宫中玉砌的楼宇太高太冷，让人经受不住。起身起舞，玩赏月下清影，哪里比得上留在人间？

月光转过朱红楼阁，低低穿过雕花门窗，照着无法入眠的人。明月不该对人有什么怨恨吧，为什么总是在人们离别之时才圆？人有悲欢离合的变迁，月有阴晴圆缺的转换，这种事自古难以周全。只希望亲人能长久平安，即使相隔千里，也能共赏这一轮明月。`,
    publishAt: "2026-09-09T20:00:00+08:00",
  },

  {
    id: "chunjiang-huayueye",
    cat: "poetry",
    title: "春江花月夜（节选）",
    subtitle: "",
    author: "张若虚",
    authorShort: "张若虚",
    authorRole: "初唐诗人 · “吴中四士”之一 · 约647 — 约730",
    era: "初唐 · 扬州",
    excerpt: "江畔何人初见月？江月何年初照人？",
    authorIntro: [
      "张若虚（约647—约730），扬州人，初唐诗人，曾任兖州兵曹，与贺知章、张旭、包融并称“吴中四士”。",
      "存诗仅两首，而仅凭一首《春江花月夜》便名垂千古，文学史上绝无仅有。",
    ],
    facts: [
      ["生于", "约647年 · 扬州"],
      ["并称", "吴中四士"],
      ["存诗", "仅两首"],
    ],
    background: [
      { h: "孤篇横绝", p: "全诗三十六句，融诗情、画意、哲理于一体。清末王闿运赞其“孤篇横绝，竟为大家”，闻一多更誉之为“诗中的诗，顶峰上的顶峰”。" },
      { h: "以月为线", p: "春、江、花、月、夜五字皆景，而以“月”为灵魂——从月出、月悬、月斜到月落，人生的哲思随之起落流转。" },
      { h: "节选说明", p: "本篇选录开篇写景、“江畔何人初见月”的宇宙之问，以及思妇游子与结尾“落月摇情”诸句，以存全诗神韵。" },
    ],
    lang: "zh",
    type: "verse",
    originalLabel: "原文（节选）",
    translationLabel: "白话译文",
    original: `春江潮水连海平，海上明月共潮生。
滟滟随波千万里，何处春江无月明！
江流宛转绕芳甸，月照花林皆似霰。
空里流霜不觉飞，汀上白沙看不见。
江天一色无纤尘，皎皎空中孤月轮。
江畔何人初见月？江月何年初照人？
人生代代无穷已，江月年年望相似。
不知江月待何人，但见长江送流水。

此时相望不相闻，愿逐月华流照君。
鸿雁长飞光不度，鱼龙潜跃水成文。

昨夜闲潭梦落花，可怜春半不还家。
江水流春去欲尽，江潭落月复西斜。
斜月沉沉藏海雾，碣石潇湘无限路。
不知乘月几人归，落月摇情满江树。`,
    translation: `春天的江潮水势浩荡，与大海连成一片；一轮明月从海上升起，仿佛与潮水一同涌出。月光随着波浪闪耀千万里，什么地方的春江没有明亮的月光啊！江水曲曲折折地绕过花草丛生的原野，月光照着开满鲜花的树林，都像细密的雪珠在闪烁。空中月光如霜，霜飞却无从觉察；洲上的白沙与月色融合在一起，也看不分明。江水、天空连成一色，没有一丝微尘，明亮的天空中只有一轮孤月高悬。江边上什么人最初看见月亮？江上的月亮哪一年最初照耀着人？人生一代一代无穷无尽，只有江上的月亮一年一年总是相像。不知江上的月亮在等待着什么人，只见长江不断地输送着流水。

这时互相望着天上的明月却听不到彼此的声音，我希望随着月光流去，照耀着远方的你。鸿雁不停地飞翔，却飞不出这片月光；鱼龙潜游在水底，只激起阵阵波纹。

昨夜梦见花落闲潭，可惜春天过半还不能回家。江水带着春光将要流尽，水潭上的月亮又西斜了。斜月沉沉藏进海雾，碣石与潇湘之间路途无限遥远。不知道有几人能乘着月光回家，只有那西落的月亮摇荡着离情，洒满了江边的树林。`,
    publishAt: "2026-09-16T20:00:00+08:00",
  },

  {
    id: "duange-xing",
    cat: "poetry",
    title: "短歌行",
    subtitle: "",
    author: "曹操",
    authorShort: "曹操",
    authorRole: "东汉末政治家 · 军事家 · 文学家 · 155 — 220",
    era: "建安年间 · 邺城",
    excerpt: "山不厌高，海不厌深。周公吐哺，天下归心。",
    authorIntro: [
      "曹操（155—220），字孟德，沛国谯县人，东汉末年政治家、军事家、文学家。挟天子以令诸侯，统一北方，奠定曹魏基业。",
      "诗歌古直悲凉、气韵沉雄，与曹丕、曹植合称“三曹”，为建安文学的领袖。",
    ],
    facts: [
      ["生于", "155年 · 沛国谯县"],
      ["官爵", "汉丞相 · 魏王"],
      ["诗风", "古直悲凉"],
    ],
    background: [
      { h: "求贤若渴", p: "建安年间，曹操先后颁布《求贤令》《举士令》，打破门第之见延揽人才。《短歌行》正是这一政治胸怀的诗意表达。" },
      { h: "宴上悲歌", p: "此诗大约作于宴飨宾客之时，一说与赤壁之战前“横槊赋诗”的传说相关。忧思与豪情，在同一杯酒中翻涌。" },
      { h: "天下归心", p: "全诗由忧而壮，引《诗经》成句而浑然无迹，末以“周公吐哺”自况，收束于“天下归心”的宏愿，是英雄之诗的绝唱。" },
    ],
    lang: "zh",
    type: "verse",
    originalLabel: "原文",
    translationLabel: "白话译文",
    original: `对酒当歌，人生几何！
譬如朝露，去日苦多。
慨当以慷，忧思难忘。
何以解忧？唯有杜康。

青青子衿，悠悠我心。
但为君故，沉吟至今。
呦呦鹿鸣，食野之苹。
我有嘉宾，鼓瑟吹笙。

明明如月，何时可掇？
忧从中来，不可断绝。
越陌度阡，枉用相存。
契阔谈讌，心念旧恩。

月明星稀，乌鹊南飞。
绕树三匝，何枝可依？
山不厌高，海不厌深。
周公吐哺，天下归心。`,
    translation: `面对美酒应当高歌，人生短促能有多少时光！就像清晨的露水，逝去的日子苦于太多。席上歌声慷慨激昂，忧思却难以忘怀。用什么来排解忧愁？只有这杜康美酒。

穿着青领衣衫的学子啊，你们令我朝思暮想。只是为了你们的缘故，我低吟至今。鹿在原野呦呦鸣叫着吃艾蒿，我有满座嘉宾，弹瑟吹笙来相迎。

明亮得如同天上的月亮，什么时候才能摘取？忧愁从中涌来，无法断绝。客人穿过纵横的田间小路，屈驾前来问候；久别重逢，欢饮畅谈，重温旧日情谊。

月明星稀的夜晚，乌鹊向南飞去。绕树盘旋了三圈，哪根枝条可以栖身？山不嫌弃土石才能增高，海不嫌弃细流才能变深。愿如周公一饭三吐哺，让天下人心都归附于我。`,
    publishAt: "2026-09-23T20:00:00+08:00",
  },

  {
    id: "cai-yuanpei-beida",
    cat: "speeches",
    title: "就任北京大学校长之演说（节选）",
    subtitle: "",
    author: "蔡元培",
    authorShort: "蔡元培",
    authorRole: "近代教育家 · 北京大学校长 · 1868 — 1940",
    era: "1917年1月9日 · 北京·北京大学",
    excerpt: "大学者，研究高深学问者也。",
    authorIntro: [
      "蔡元培（1868—1940），字鹤卿，号孑民，浙江绍兴府山阴县人。清末进士，曾任翰林院编修；后弃官投身革命与教育，数度留学德国、法国，是近代中国最重要的教育家之一。",
      "1917年出任北京大学校长，以思想自由、兼容并包为办学方针改造北大，把一所官僚习气浓厚的旧学堂办成学术至上的现代大学，对新文化运动与五四运动影响至深。毛泽东称他为“学界泰斗，人世楷模”。",
    ],
    facts: [
      ["生于", "1868年1月11日 · 浙江绍兴"],
      ["任职", "北京大学校长 1916 — 1927"],
      ["辞世", "1940年3月5日 · 香港"],
    ],
    background: [
      { h: "一座旧学堂", p: "北京大学的前身是1898年创办的京师大学堂，1912年5月改称北京大学。蔡元培接任之前，这里官僚习气浓厚，学生中多有京官与富家子弟，读书被看作升官发财的阶梯。" },
      { h: "临危受命", p: "1916年底，蔡元培被任命为北京大学校长；1917年1月4日到校视事，1月9日发表这篇就职演说，向学生提出“抱定宗旨、砥砺德行、敬爱师友”三事。" },
      { h: "一句话定一所大学", p: "“大学者，研究高深学问者也”——这句断言把大学与专门学校划清了界限。此后他以思想自由、兼容并包为方针延揽陈独秀、胡适、李大钊等人，北大迅速成为新文化运动的中心、五四运动的策源地。" },
    ],
    lang: "zh",
    type: "prose",
    originalLabel: "原文（节选）",
    translationLabel: "白话译文",
    original: `五年前，严几道先生为本校校长时，余方服务教育部。士别三日，刮目相见，况时阅数载，诸君较昔当为长足之进步矣。予今长斯校，请以三事为诸君告：

一曰抱定宗旨。诸君来此求学，必有一定宗旨，欲求宗旨之正大与否，必先知大学之性质。而在大学则不然，大学者，研究高深学问者也。所以诸君须抱定宗旨，为求学而来，入法科者，非为做官；入商科者，非为致富。宗旨既定，自趋正轨。若徒志在做官发财，宗旨既乖，趋向自异。平时则放荡冶游，考试则熟读讲义，不问学问之有无，惟争分数之多寡；试验既终，书籍束之高阁，毫不过问，敷衍三四年，潦草塞责，文凭到手，即可借此活动于社会，岂非与求学初衷大相背驰乎？光阴虚度，学问毫无，是自误也。故宗旨不可以不正大。此余所希望于诸君者一也。

二曰砥砺德行。方今风俗日偷，道德沦丧，北京社会，尤为恶劣，败德毁行之事，触目皆是，非根基深固，鲜不为流俗所染。诸君肄业大学，当能束身自爱。然国家之兴替，视风俗之厚薄。流俗如此，前途何堪设想。故必有卓绝之士，以身作则，力矫颓俗。诸君为大学学生，地位甚高，肩此重任，责无旁贷，故诸君不惟思所以感己，更必有以励人。苟德之不修，学之不讲，同乎流俗，合乎污世，己且为人轻侮，更何足以感人？故品行不可以不谨严。此余所希望于诸君者二也。

三曰敬爱师友。教员之教授，职员之任务，皆以图诸君求学便利，诸君能无动于衷乎？自应以诚相待，敬礼有加。至于同学共处一堂，尤应互相亲爱，庶可收切磋之效。不惟开诚布公，更宜道义相勖，盖同处此校，毁誉共之。余在德国，每至店肆购买物品，店主殷勤款待，付价接物，互相称谢，此虽小节，然亦交际所必需，常人如此，况堂堂大学生乎？对于师友之敬爱，此余所希望于诸君者三也。`,
    translation: `五年前，严几道先生担任本校校长时，我正在教育部任职。士别三日便当刮目相看，何况事隔数年，诸位比起当年想必已有长足进步。如今我出任本校校长，请让我以三件事奉告诸位：

第一是抱定宗旨。诸位来此求学，必有一定宗旨；要判断宗旨是否正大，必先明白大学的性质。在大学则不然——大学，是研究高深学问的地方。所以诸位必须抱定宗旨，为求学而来：入法科的，不是为了做官；入商科的，不是为了发财。宗旨一旦确立，自然会走上正轨。倘若一心只想着做官发财，宗旨既已偏差，趋向自然不同：平时放荡游乐，考试时死背讲义，不问学问有无，只争分数多少；考完试便把书籍束之高阁，毫不理会，敷衍三四年，潦草塞责，文凭到手，就凭它去社会上活动——这难道不是与求学的初衷大相背驰吗？光阴虚度，学问全无，这是耽误自己。所以宗旨不可以不正大。这是我寄望于诸位的第一件事。

第二是砥砺德行。如今风俗日渐苟且，道德沦丧，北京社会尤为恶劣，败德毁行之事触目皆是，根基不深的人很少不被流俗沾染。诸位在大学肄业，应当能够约束自身、爱惜名节。何况国家的兴衰，取决于风俗的厚薄；流俗如此，前途何堪设想。所以必须有卓绝之士以身作则，力矫颓俗。诸位身为大学生，地位甚高，肩负这一重任，责无旁贷，因此诸位不仅要想着感化自己，更必须能够勉励他人。倘若德行不修、学问不讲，与流俗同流、与污世合污，自己尚且被人轻侮，又怎能感化他人？所以品行不可以不谨严。这是我寄望于诸位的第二件事。

第三是敬爱师友。教员的授课、职员的劳作，都是为了让诸位求学便利，诸位能无动于衷吗？自应以诚相待、敬礼有加。至于同学共处一堂，更应互相亲爱，才能收到切磋之效。不仅要开诚布公，更应以道义相勉，因为同处此校，毁誉与共。我在德国时，每次到店铺购物，店主都殷勤款待，付钱取物之间互相称谢——这虽是小节，却是交际所必需，寻常人尚且如此，何况堂堂大学生？对于师友的敬爱，这是我寄望于诸位的第三件事。`,
    publishAt: "2026-09-25T20:00:00+08:00",
  },

  {
    id: "zouji-fengqiwang",
    cat: "classics",
    title: "邹忌讽齐王纳谏",
    subtitle: "",
    author: "佚名",
    authorShort: "《战国策》",
    authorInitial: "战",
    authorRole: "战国史料汇编 · 西汉刘向编订 · 作者不可考",
    era: "约战国中期 · 齐国",
    excerpt: "此所谓战胜于朝廷。",
    authorIntro: [
      "《战国策》是战国时期谋臣策士言行与谋略的汇编，作者已不可考，大抵非一时一人之作，成书当在秦统一之后。西汉刘向考订整理，始定名为《战国策》，全书三十三篇，按国别分为十二策。",
      "该书长于记事与说辞，善用比喻、寓言铺陈事理，文学性在先秦史籍中尤为突出；“门庭若市”“画蛇添足”“亡羊补牢”等成语皆出于此书。",
    ],
    facts: [
      ["出处", "《战国策·齐策一》"],
      ["成书", "战国末至秦汉间编集 · 西汉刘向定名"],
      ["全书", "三十三篇 · 分十二策"],
    ],
    background: [
      { h: "《战国策》其书", p: "最初有《国策》《国事》《短长》等名，西汉刘向考订整理后定名，记录战国策士游说诸侯的言辞谋略。所载史事上起东周贞定王十七年，下迄秦始皇三十一年。" },
      { h: "齐威王与邹忌", p: "齐威王是田齐的国君。邹忌以善于鼓琴得见，后任齐相；本文记他以自身“比美”的体悟讽谏威王，劝其广开言路。" },
      { h: "以小见大的典范", p: "全文不写治国大道，只从照镜问美这一件家事切入，由“妻私、妾畏、客有求”推出“王之蔽甚矣”，成为先秦讽谏散文的范本。" },
    ],
    caveat: [
      "本篇作者不可考。《战国策》系战国时期史料汇编，大抵非一时一人之作，成书当在秦统一之后；西汉刘向考订整理，始定名为《战国策》。本站依通例署“佚名”，以《战国策》为署名主体。",
      "创作年代无定论。文中所记齐威王、邹忌之事当在战国中期，但成篇年代与作者均不可确指，故年代一律加“约”字。",
      "《战国策》所载策士说辞每有夸张增饰，甚至增益情节，其记载未必尽合史实。本篇宜作文章读——它的价值在说服术与文笔，不在史料。",
    ],
    lang: "zh",
    type: "prose",
    originalLabel: "原文",
    translationLabel: "白话译文",
    original: `邹忌修八尺有余，而形貌昳丽。朝服衣冠，窥镜，谓其妻曰：“我孰与城北徐公美？”其妻曰：“君美甚，徐公何能及君也？”城北徐公，齐国之美丽者也。忌不自信，而复问其妾曰：“吾孰与徐公美？”妾曰：“徐公何能及君也？”旦日，客从外来，与坐谈，问之客曰：“吾与徐公孰美？”客曰：“徐公不若君之美也。”明日徐公来，孰视之，自以为不如；窥镜而自视，又弗如远甚。暮寝而思之，曰：“吾妻之美我者，私我也；妾之美我者，畏我也；客之美我者，欲有求于我也。”

于是入朝见威王，曰：“臣诚知不如徐公美。臣之妻私臣，臣之妾畏臣，臣之客欲有求于臣，皆以美于徐公。今齐地方千里，百二十城，宫妇左右莫不私王，朝廷之臣莫不畏王，四境之内莫不有求于王：由此观之，王之蔽甚矣。”

王曰：“善。”乃下令：“群臣吏民，能面刺寡人之过者，受上赏；上书谏寡人者，受中赏；能谤讥于市朝，闻寡人之耳者，受下赏。”令初下，群臣进谏，门庭若市；数月之后，时时而间进；期年之后，虽欲言，无可进者。

燕、赵、韩、魏闻之，皆朝于齐。此所谓战胜于朝廷。`,
    translation: `邹忌身高八尺多，容貌光艳美丽。一天早晨，他穿戴好衣帽，照着镜子，问妻子：“我和城北徐公比，谁更美？”妻子说：“您美极了，徐公哪里比得上您呢！”城北徐公，是齐国有名的美男子。邹忌不相信自己比他美，又问他的妾：“我和徐公比，谁更美？”妾说：“徐公哪里比得上您呢！”第二天，有客人从外面来，邹忌与他坐着交谈，问他：“我和徐公谁更美？”客人说：“徐公不如您美。”第二天徐公来了，邹忌仔细端详他，自认为不如他；再照镜子看自己，更觉得远远比不上。晚上躺在床上思索这件事，说：“我的妻子认为我美，是偏爱我；妾认为我美，是怕我；客人认为我美，是有求于我。”

于是邹忌上朝去见齐威王，说：“我确实知道自己不如徐公美。可是我的妻子偏爱我，我的妾怕我，我的客人有求于我，他们都认为我比徐公美。如今齐国土地方圆千里，有一百二十座城池，宫中的姬妾和身边的近臣没有不偏爱大王的，朝廷上的臣子没有不怕大王的，全国之内没有不有求于大王的——由此看来，大王所受的蒙蔽太深了。”

威王说：“好。”于是下令：“群臣、官吏和百姓，能够当面指责我的过错的，得上等奖赏；上书劝谏我的，得中等奖赏；能在公共场所议论我的过失、传到我耳中的，得下等奖赏。”命令刚下达时，群臣都来进谏，门前庭院像集市一样热闹；几个月以后，还偶或有人进谏；满一年以后，即使想进言，也没有什么可说的了。

燕、赵、韩、魏等国听说了这件事，都来齐国朝见。这就是所谓“在朝廷上战胜了别国”。`,
    publishAt: "2026-09-28T20:00:00+08:00",
  },

  {
    id: "denggao",
    cat: "poetry",
    title: "登高",
    subtitle: "",
    author: "杜甫",
    authorShort: "杜甫",
    authorRole: "唐代诗人 · “诗圣” · 712 — 770",
    era: "大历二年（767）秋 · 夔州",
    excerpt: "无边落木萧萧下，不尽长江滚滚来。",
    authorIntro: [
      "杜甫（712—770），字子美，自号少陵野老，祖籍襄阳，生于巩县（今河南巩义）。唐代伟大的现实主义诗人，与李白并称“李杜”，后世尊为“诗圣”。",
      "早年漫游吴越齐赵，天宝三载（744）在洛阳与李白相遇；此后困居长安近十年，安史之乱中流离失所，曾任左拾遗、华州司功参军，终弃官西行。晚年漂泊西南，寓居成都草堂，又客居夔州，大历五年（770）病逝于湘江舟中。",
    ],
    facts: [
      ["生于", "712年 · 河南巩县"],
      ["字号", "子美 · 少陵野老"],
      ["并称", "李杜（诗圣）"],
    ],
    background: [
      { h: "失去依托", p: "永泰元年（765），成都尹严武病逝。杜甫失去依靠，只得携家离开经营五六年的成都草堂，乘舟东下。" },
      { h: "病滞云安", p: "本欲直下夔门，却因疾病滞留云安数月，直到大历元年（766）暮春才抵达夔州。此后近两年，他一直客居于此，生活困苦、疾病缠身。" },
      { h: "古今七律第一", p: "大历二年（767）秋，杜甫独自登上夔州白帝城外的高台，面对萧瑟秋江写下此诗。全诗四联皆对而一气贯注，明代胡应麟《诗薮》推之为“古今七言律第一，不必为唐人七言律第一也”。" },
    ],
    caveat: [
      "本篇通行系年为大历二年（767）秋，时杜甫客居夔州。",
      "末句“潦倒新停浊酒杯”的“新停”二字，旧解不一。通行注本多解为因病新近停饮（如《唐诗鉴赏辞典》陶道恕鉴赏），亦有学者据杜甫同期所作《九日五首》其一“重阳独酌杯中酒”，推断其时并未戒酒，主张解作“方饮罢”。本站译文采通行说法。",
    ],
    lang: "zh",
    type: "verse",
    originalLabel: "原文",
    translationLabel: "白话译文",
    original: `风急天高猿啸哀，渚清沙白鸟飞回。
无边落木萧萧下，不尽长江滚滚来。
万里悲秋常作客，百年多病独登台。
艰难苦恨繁霜鬓，潦倒新停浊酒杯。`,
    translation: `风急天高，猿声哀切凄厉；水清沙白，鸟儿在急风中盘旋飞回。无边无际的落叶萧萧飘下，望不到尽头的长江滚滚奔来。

万里漂泊，常年作客他乡，最是悲秋；一生多病，今日独自登上高台。历尽艰难，深恨两鬓白如霜雪；穷愁潦倒，新近又因病放下了浊酒杯。`,
    publishAt: "2026-09-30T20:00:00+08:00",
  },

  {
    id: "jfk-inaugural",
    cat: "speeches",
    title: "就职演说（节选）",
    subtitle: "Inaugural Address",
    author: "约翰·F·肯尼迪",
    authorShort: "肯尼迪",
    authorInitial: "K",
    authorRole: "美国第35任总统 · 首位天主教徒总统 · 1917 — 1963",
    era: "1961年1月20日 · 华盛顿特区 · 国会大厦东侧台阶",
    excerpt: "不要问你的国家能为你做什么，而要问你能为你的国家做什么。",
    authorIntro: [
      "约翰·菲茨杰拉德·肯尼迪（1917—1963），美国第35任总统（1961—1963），民主党人。生于马萨诸塞州布鲁克莱恩的政商家族，1940年毕业于哈佛大学；二战期间在太平洋战场指挥 PT-109 鱼雷艇，因率艇员脱险获海军与海军陆战队勋章。",
      "1946年当选联邦众议员，1952年当选联邦参议员；任内所著《Profiles in Courage》于1957年获普利策传记奖。1960年11月8日以极接近的票数击败共和党人尼克松，当选时43岁，是美国历史上最年轻的当选总统，也是首位天主教徒总统。1963年11月22日在得克萨斯州达拉斯遇刺身亡。",
    ],
    facts: [
      ["生于", "1917年5月29日 · 马萨诸塞州布鲁克莱恩"],
      ["任期", "第35任美国总统 1961—1963"],
      ["辞世", "1963年11月22日 · 达拉斯遇刺"],
    ],
    background: [
      { h: "雪停之后的台阶", p: "1961年1月20日凌晨，华盛顿降下大雪，地面积雪厚达八英寸，宾夕法尼亚大道要靠军方用火焰喷射器融雪清路。正午气温约22华氏度（约摄氏零下六度），肯尼迪未穿大衣，在国会大厦东侧台阶上宣誓就职，随后发表这篇演说。" },
      { h: "一千三百余词的短稿", p: "肯尼迪自1960年11月当选后便开始构思，广泛征集友人、幕僚与顾问的建议，在黄色记事本上亲手反复增删。定稿仅一千三百余词，历时不足十四分钟，是历来篇幅最短的就职演说之一。" },
      { h: "1961年1月的世界", p: "演说发表时冷战正处高峰：柏林前途未定，核军备与太空竞赛方兴未艾。肯尼迪一面重申对盟友与新生国家的承诺，一面以“让我们永远不要因恐惧而谈判，但也永远不要惧怕谈判”向对手递出谈判之意。一个多月后的3月1日，他签署行政命令建立和平队。本页选录演说开篇与结尾部分。" },
    ],
    caveat: [
      "本篇的词数与时长，各类来源记载略有出入：有作 1364 词、13分59秒者，也有作 1366 词、不足14分钟者。本站采“一千三百余词”“不足十四分钟”的稳妥表述，未取某一个具体数字。",
      "演说中最著名的那句“不要问你的国家能为你做什么”，其成句过程历来有不同说法：有人说它出自肯尼迪与撰稿人西奥多·索伦森的共同打磨，也有人指出这句的句式近似他中学时代校长的训词。本站只陈述可考事实——讲稿由肯尼迪本人反复删改定稿，未对名句的“原创归属”下断语。",
      "英文原文首段“our forbears”的拼写照录自肯尼迪总统图书馆公布的讲稿文字（同篇第三段作“forebears”），未按现代拼写统一。",
    ],
    lang: "en",
    type: "prose",
    originalLabel: "英文原文（节选）",
    translationLabel: "中文译文（节选）",
    original: `Vice President Johnson, Mr. Speaker, Mr. Chief Justice, President Eisenhower, Vice President Nixon, President Truman, Reverend Clergy, fellow citizens:

We observe today not a victory of party but a celebration of freedom — symbolizing an end as well as a beginning — signifying renewal as well as change. For I have sworn before you and Almighty God the same solemn oath our forbears prescribed nearly a century and three-quarters ago.

The world is very different now. For man holds in his mortal hands the power to abolish all forms of human poverty and all forms of human life. And yet the same revolutionary beliefs for which our forebears fought are still at issue around the globe — the belief that the rights of man come not from the generosity of the state but from the hand of God.

We dare not forget today that we are the heirs of that first revolution. Let the word go forth from this time and place, to friend and foe alike, that the torch has been passed to a new generation of Americans — born in this century, tempered by war, disciplined by a hard and bitter peace, proud of our ancient heritage — and unwilling to witness or permit the slow undoing of those human rights to which this nation has always been committed, and to which we are committed today at home and around the world.

Let every nation know, whether it wishes us well or ill, that we shall pay any price, bear any burden, meet any hardship, support any friend, oppose any foe to assure the survival and the success of liberty.

This much we pledge — and more.

So let us begin anew — remembering on both sides that civility is not a sign of weakness, and sincerity is always subject to proof. Let us never negotiate out of fear. But let us never fear to negotiate.

Let both sides explore what problems unite us instead of belaboring those problems which divide us.

Let both sides, for the first time, formulate serious and precise proposals for the inspection and control of arms — and bring the absolute power to destroy other nations under the absolute control of all nations.

Let both sides seek to invoke the wonders of science instead of its terrors. Together let us explore the stars, conquer the deserts, eradicate disease, tap the ocean depths and encourage the arts and commerce.

All this will not be finished in the first one hundred days. Nor will it be finished in the first one thousand days, nor in the life of this Administration, nor even perhaps in our lifetime on this planet. But let us begin.

In your hands, my fellow citizens, more than mine, will rest the final success or failure of our course. Since this country was founded, each generation of Americans has been summoned to give testimony to its national loyalty. The graves of young Americans who answered the call to service surround the globe.

Now the trumpet summons us again — not as a call to bear arms, though arms we need — not as a call to battle, though embattled we are — but a call to bear the burden of a long twilight struggle, year in and year out, "rejoicing in hope, patient in tribulation" — a struggle against the common enemies of man: tyranny, poverty, disease and war itself.

Can we forge against these enemies a grand and global alliance, North and South, East and West, that can assure a more fruitful life for all mankind? Will you join in that historic effort?

In the long history of the world, only a few generations have been granted the role of defending freedom in its hour of maximum danger. I do not shrink from this responsibility — I welcome it. I do not believe that any of us would exchange places with any other people or any other generation. The energy, the faith, the devotion which we bring to this endeavor will light our country and all who serve it — and the glow from that fire can truly light the world.

And so, my fellow Americans: ask not what your country can do for you — ask what you can do for your country.

My fellow citizens of the world: ask not what America will do for you, but what together we can do for the freedom of man.

Finally, whether you are citizens of America or citizens of the world, ask of us here the same high standards of strength and sacrifice which we ask of you. With a good conscience our only sure reward, with history the final judge of our deeds, let us go forth to lead the land we love, asking His blessing and His help, but knowing that here on earth God's work must truly be our own.`,
    signoff: ["Delivered at the East Portico of the United States Capitol,", "John F. Kennedy", "Washington, D.C. · January 20, 1961"],
    translation: `约翰逊副总统、议长先生、首席大法官先生、艾森豪威尔总统、尼克松副总统、杜鲁门总统、各位神职人员、同胞们：

我们今天所目睹的，不是一次政党的胜利，而是一场自由的庆典——它既象征着一个时代的终结，也象征着一个时代的开端；既意味着延续，也意味着变革。因为我已在你们和全能的上帝面前，宣读过我们先辈在近四分之三个世纪前所立下的同一庄严誓词。

世界已经大不相同。因为人类手中握有的力量，既可以消除一切形式的贫穷，也可以毁灭一切形式的生命。然而，我们先辈为之奋斗的那些革命信念，至今仍在全球各地受到挑战——那就是：人的权利并非来自国家的恩赐，而是来自上帝之手的信念。

我们不敢忘记，今天我们是那场最初革命的继承者。让这句话从此时此地传出，无论朋友还是敌人，都请听清：火炬已经传到新一代美国人的手中——他们出生在本世纪，经受过战争的锤炼，受过艰难而苦涩的和平的约束，以我们古老的遗产为荣——他们不愿坐视那些人权被缓慢侵蚀，也不容许它被断送；这个国家一向承诺捍卫这些人权，我们今天在国内和世界各地也依然如此承诺。

让每一个国家都知道——无论它对我怀有善意还是恶意——我们愿付出任何代价，承担任何重担，应对任何艰难，支持任何朋友，反对任何敌人，以确保自由的存续与成功。

这就是我们的承诺——而且远不止于此。

那么，让我们重新开始——双方都要记住：讲求礼貌并不表示软弱，而诚意永远需要证明。让我们永远不要因恐惧而谈判，但也永远不要惧怕谈判。

让双方共同探讨那些使我们团结的问题，而不是纠缠于那些使我们分裂的问题。

让双方第一次认真而确切地提出关于武器核查与管制的方案，把毁灭他国的绝对力量，置于所有国家的绝对管控之下。

让双方去调动科学的奇迹，而不是科学的恐怖。让我们一起探索群星，征服沙漠，消灭疾病，开发海洋深处，并鼓励艺术与商业。

这一切不会在一百天内完成，也不会在一千天内完成，不会在本届政府的任期内完成，甚至也许不会在我们这一代人的有生之年完成。但是，让我们开始吧。

同胞们，我们事业最终的成败，更多地掌握在你们手中，而不是我的手中。自这个国家诞生以来，每一代美国人都曾被召唤去证明自己对国家的忠诚。那些响应召唤的美国青年，他们的坟墓遍布全球。

如今，号角又一次向我们吹响——不是号召我们拿起武器，尽管我们需要武器；不是号召我们奔赴战场，尽管我们已身陷重围——而是号召我们担起一场漫长而黯淡的斗争的重负，年复一年，“怀着希望而喜乐，在患难中忍耐”——一场对抗人类共同敌人的斗争：暴政、贫穷、疾病与战争本身。

我们能结成这样一个宏大而全球性的联盟——横跨南北、纵贯东西——去对抗这些敌人，为全人类确保一种更加丰实的生活吗？你们愿意加入这一历史性的努力吗？

在世界漫长的历史中，只有少数几代人被授予了这样一种使命：在自由面临最大危险的时刻捍卫自由。我不回避这一责任——我欢迎它。我不相信我们之中有谁愿意与任何别的民族、任何别的世代交换位置。我们为这一事业所倾注的精力、信念与忠诚，将照亮我们的国家以及所有为它服务的人——而那道火焰的光芒，确实能够照亮整个世界。

因此，我的美国同胞们：不要问你的国家能为你做什么，而要问你能为你的国家做什么。

我的世界公民们：不要问美国将为你做什么，而要问我们共同能为人类的自由做什么。

最后，无论你们是美国的公民还是世界的公民，请用我们要求你们的同一高标准——力量与牺牲——来要求我们。唯有一颗清白的良心是我们可靠的报偿，历史是我们行为的最终裁判。让我们前行吧，去引领我们所热爱的这片土地，祈求祂的祝福与帮助，同时深知：在这片大地上，上帝的工作，必须真正由我们自己来完成。`,
    signoffT: ["演讲于美国国会大厦东侧台阶，", "约翰·F·肯尼迪", "华盛顿特区 · 1961年1月20日"],
    publishAt: "2026-10-02T20:00:00+08:00",
  },

  {
    id: "lantingji-xu",
    cat: "classics",
    title: "兰亭集序",
    subtitle: "",
    author: "王羲之",
    authorShort: "王羲之",
    authorRole: "东晋书法家 · “书圣” · 303 — 361",
    era: "永和九年（353）三月初三 · 会稽山阴·兰亭",
    excerpt: "仰观宇宙之大，俯察品类之盛。",
    authorIntro: [
      "王羲之（303—361），字逸少，琅琊临沂（今山东临沂）人，后迁会稽山阴（今浙江绍兴）。出身东晋名门琅琊王氏，历任秘书郎、宁远将军、江州刺史，官至右军将军、会稽内史，世称“王右军”。",
      "早年从卫夫人学书，后博采钟繇、张芝诸家之长，一变汉魏质朴书风，自成妍美流便的新体，被后世尊为“书圣”，与钟繇并称“钟王”，与子王献之并称“二王”。永和十一年称病去官，晚年隐居剡县金庭（今浙江嵊州），卒后葬于此。",
    ],
    facts: [
      ["生于", "303年 · 琅琊临沂（今山东临沂）"],
      ["任职", "右军将军 · 会稽内史"],
      ["称号", "“书圣” · 代表作《兰亭集序》"],
    ],
    background: [
      { h: "三月初三 · 水边修禊", p: "修禊是上巳节的古俗——每年农历三月初三，人们临水洗濯、祓除不祥，类乎后世的春游。永和九年（353）这一天，时任右军将军、会稽内史的王羲之，在会稽山阴的兰亭主持了这一场修禊之礼。" },
      { h: "流觞曲水 · 一觞一咏", p: "同游者有谢安、孙绰等四十一人（一说四十二人），列坐溪水两侧。酒杯顺流而下，停在谁面前，谁就须赋诗，作不出者罚酒。是日十六人诗不成，得诗三十七首，后人辑为《兰亭集》，推举召集人王羲之为此集作序。" },
      { h: "酒酣落笔 · 天下第一行书", p: "王羲之乘着酒兴挥毫，全文二十八行、三百二十四字，其中二十来个“之”字写法各不相同。相传他次日酒醒后反复重写，皆不及原稿神韵。真迹后随唐太宗殉葬昭陵，今传世者为唐人摹本、临本与刻本，其中冯承素摹“神龙本”被公认为最接近原作，藏北京故宫博物院。" },
    ],
    caveat: [
      "生卒年有异说：通行作 303—361，另有 321—379 一说。本站采 303—361（临沂市人民政府、绍兴市柯桥区人民政府等作此说）。",
      "兰亭雅集人数诸说不一：人教版高中语文课本与故宫博物院均作四十一人；南宋桑世昌《兰亭考》作四十二人，本站从主流之说作“四十一人（一说四十二人）”。当日“十六人诗不成、得诗三十七首”则诸本无异。",
      "《兰亭集序》墨迹真伪自清代以来存有争议（李文田等疑非王羲之所书，1965 年“兰亭论辨”重提此案），但传世文献与主流学界仍系于王羲之名下，本站依通行说法署名。",
      "真迹下落与“酒醒重写不及原稿”之说均属传统记载：相传《兰亭序》真迹经唐太宗收藏，太宗死后陪葬昭陵，此说见于唐人何延之《兰亭记》等，并非确证。今传世者皆唐人摹临与刻本，非真迹。",
    ],
    lang: "zh",
    type: "prose",
    originalLabel: "原文",
    translationLabel: "白话译文",
    original: `永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。

是日也，天朗气清，惠风和畅。仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱，信可乐也。

夫人之相与，俯仰一世。或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外。虽趣舍万殊，静躁不同，当其欣于所遇，暂得于己，快然自足，不知老之将至；及其所之既倦，情随事迁，感慨系之矣。向之所欣，俯仰之间，已为陈迹，犹不能不以之兴怀，况修短随化，终期于尽！古人云：“死生亦大矣。”岂不痛哉！

每览昔人兴感之由，若合一契，未尝不临文嗟悼，不能喻之于怀。固知一死生为虚诞，齐彭殇为妄作。后之视今，亦犹今之视昔。悲夫！故列叙时人，录其所述，虽世殊事异，所以兴怀，其致一也。后之览者，亦将有感于斯文。`,
    translation: `永和九年，按干支是癸丑年，三月初，我们在会稽郡山阴县的兰亭聚会，举行修禊的仪式。贤能之士都来了，年长的和年轻的全都到齐。这里有高耸的山岭、茂密的树林与修长的竹子，还有清澈而湍急的水流，辉映环绕在我们左右；我们把它引来做成婉转的流觞之水，大家依次坐在水边。纵然没有琴瑟箫管齐奏那样的热闹，可饮一杯酒、吟一首诗，也足以痛快地倾诉心底的幽情。

这一天，天空晴朗，空气清亮，和风温煦。抬头看宇宙的辽阔，低头看万物的繁盛，借此放眼远望、敞开胸怀，尽可以享尽耳目之乐，确实令人愉快。

人和人相处往来，一俯一仰之间便过完了一生。有人把胸中的抱负取出来，在屋里与朋友当面倾谈；有人则依托自己所爱好的事物，在形骸之外放任不羁。虽然各人的取舍千差万别，性情的沉静与浮躁也不相同，但当他们遇上合意的事、暂时觉得称心时，就快活自足，不觉得老年就要来临；等到对已有的东西厌倦了，感情跟着境况迁移，感慨也就随之而来。从前所欣喜的，转眼已成旧迹，尚且不能不因此触动心怀；何况寿命长短全凭造化，最终都归于消亡！古人说：“死生也是件大事。”怎能不叫人痛心呢！

每次看到前人动情的原因，竟与我心中所感如符契相合，总不免对着文章叹息伤怀，却又说不清是为什么。我原本就知道，把死和生看作一回事是虚妄的，把长寿与短命看作一般无二是胡说的。后人看今天，也就像今天的人看从前。可叹啊！所以我一一记下与会诸人，收录他们所作的诗。虽然时代不同、事情各异，但使人感怀的缘由，那份情致总是一样的。后世的读者，想必也会被这篇文章触动。`,
    publishAt: "2026-10-05T20:00:00+08:00",
  },

  {
    id: "maowu-qiufeng",
    cat: "poetry",
    title: "茅屋为秋风所破歌",
    subtitle: "",
    author: "杜甫",
    authorShort: "杜甫",
    authorRole: "唐代诗人 · “诗圣” · 712 — 770",
    era: "上元二年（761）秋八月 · 成都·浣花溪草堂",
    excerpt: "安得广厦千万间，大庇天下寒士俱欢颜。",
    authorIntro: [
      "杜甫（712—770），字子美，自号少陵野老，祖籍襄阳，生于巩县（今河南巩义）。唐代伟大的现实主义诗人，与李白并称“李杜”，后世尊为“诗圣”，其诗因真实记录安史之乱前后的社会面貌，被称为“诗史”。",
      "乾元二年（759）冬，杜甫为避安史之乱携家入蜀，次年春在成都西郊浣花溪畔营建草堂，前后居住三年零九个月，作诗二百四十余首。广德二年（764）经严武奏荐，任节度参谋、授检校工部员外郎并赐绯鱼袋，故后世又称“杜工部”。大历五年（770）病逝于湘江舟中。",
    ],
    facts: [
      ["系年", "上元二年（761）秋八月 · 成都草堂"],
      ["出处", "《全唐诗》卷二百一十九"],
      ["名句", "安得广厦千万间，大庇天下寒士俱欢颜"],
    ],
    background: [
      { h: "一座借来的草堂", p: "乾元二年（759）冬，杜甫穿过蜀道抵达成都，一家人起初寄居在城西的草堂寺。次年春天，他在浣花溪畔寻得一块荒地营建草堂：表弟王十五司马送来建房的钱，他又写诗向萧实讨桃树苗、向韦续讨绵竹、向韦班讨松树苗。暮春时节草堂落成，他写下《堂成》：“背郭堂成荫白茅，缘江路熟俯青郊。”" },
      { h: "风雨掀顶的那一夜", p: "上元二年（761）八月，一场秋风卷走了屋顶的茅草。他在诗里一一记下这场狼狈：茅草飞过江去散落江郊，村中孩童当着他的面把茅草抱进竹林，他喊到唇焦口燥也唤不回，只能拄杖叹息。" },
      { h: "从一间屋到千万间", p: "雨紧屋漏，布被冷硬如铁，他写“自经丧乱少睡眠，长夜沾湿何由彻”——由这一夜的湿冷，想到的是安史之乱以来无数无家可归的人。末段陡然推开自家茅屋，发出“安得广厦千万间”的浩叹，成为中国士人“先人后己”精神最著名的一处表白。" },
    ],
    caveat: [
      "本篇系年通行作唐肃宗上元二年（761）秋八月，时杜甫客居成都浣花溪草堂。草堂落成时间另有一说作“上元二年（761）春”，与本站所采“上元元年（760）暮春”相冲突；本站据杜甫《堂成》诗（“背郭堂成荫白茅，缘江路熟俯青郊”）及成都杜甫草堂博物馆“第二年春天，在浣花溪边营建草堂而居”之说，采 760 年暮春落成。同一“761 年春”之说又被用以推算杜甫在草堂居住“三年零九个月”，该居住时长各来源口径亦不完全一致。",
      "原文以《全唐诗》卷二百一十九为底本。该本另存异文：“茅飞度江洒（一作“满”）江郊”“下者飘转沉塘（一作“堂”）坳”“布衾多年冷似（一作“象”）铁”“吾庐独破受冻死（一作“意”）亦足”。此外“床头屋漏无干处”一句，有作“床床屋漏无干处”者，清人王应奎《柳南续笔》解“床床”为“屋内所设之床”，非雨声。本站采通行正文“床头屋漏”，异文不另出校。",
      "末句“吾庐独破受冻死亦足”一语，清代注家解为“宁苦己以利人”的济世之言，本站译文从此解。“大庇天下寒士”之“寒士”，通行注本多解为贫寒的读书人，亦有泛解为贫苦之人的说法。",
    ],
    lang: "zh",
    type: "verse",
    originalLabel: "原文",
    translationLabel: "白话译文",
    original: `八月秋高风怒号，卷我屋上三重茅。
茅飞渡江洒江郊，高者挂罥长林梢，下者飘转沉塘坳。
南村群童欺我老无力，忍能对面为盗贼。
公然抱茅入竹去，唇焦口燥呼不得，归来倚杖自叹息。

俄顷风定云墨色，秋天漠漠向昏黑。
布衾多年冷似铁，娇儿恶卧踏里裂。
床头屋漏无干处，雨脚如麻未断绝。
自经丧乱少睡眠，长夜沾湿何由彻！

安得广厦千万间，大庇天下寒士俱欢颜，风雨不动安如山！
呜呼！何时眼前突兀见此屋，吾庐独破受冻死亦足！`,
    translation: `八月秋深，狂风怒吼，卷走了我屋顶上层层茅草。茅草飞过江去，散落在江边；飞得高的缠绕在高高的树梢上，飞得低的飘转沉进水洼里。南村的一群孩童欺负我年老无力，竟忍心当着我的面做“盗贼”，公然抱着茅草钻进竹林。我喊得唇焦口燥也喝止不住，只好拄着拐杖回来独自叹息。

不一会儿风停了，云色如墨，秋季的天空阴沉沉地转向昏黑。布被子用了多年，冷硬得像铁板，娇儿睡相不好，把被里都蹬破了。屋里没有一处干的地方，雨点像麻线一样落个不停。自经安史之乱以来我就很少安睡，这湿透了的漫漫长夜，何时才能挨到天亮！

怎么才能得到千万间宽敞的大屋，遮护天下所有贫寒之人，让他们都露出欢颜，风吹雨打也安稳如山！唉！什么时候眼前能突然出现这样高大的房屋？到那时，就算只破了我这一间茅屋、让我受冻而死，我也心甘情愿！`,
    publishAt: "2026-10-07T20:00:00+08:00",
  },

  {
    id: "blood-toil-tears-sweat",
    cat: "speeches",
    title: "热血、辛劳、眼泪和汗水",
    subtitle: "Blood, Toil, Tears and Sweat",
    author: "温斯顿·丘吉尔",
    authorShort: "丘吉尔",
    authorInitial: "C",
    authorRole: "英国战时首相 · 政治家与演说家 · 1874 — 1965",
    era: "1940年5月13日 · 伦敦 · 威斯敏斯特宫下议院",
    excerpt: "他向下院交出的第一份报告，只有血、辛劳、眼泪和汗水。",
    authorIntro: [
      "温斯顿·伦纳德·斯宾塞·丘吉尔（1874—1965），英国政治家、演说家、作家。生于牛津郡的布莱尼姆宫，出身马尔博罗公爵家族。1900年以保守党人身份当选下院议员，此后六十余年间辗转于保守党与自由党之间，历任内政大臣、海军大臣、财政大臣等要职。",
      "两次世界大战之间，他因力主维持帝国旧制、并长期警告纳粹德国的威胁而一度孤立于主流之外。1939年第二次世界大战爆发当天，他重回海军部。1940年5月10日受命组建战时联合政府，以其演说凝聚民心，成为英国抗战的象征。1953年因历史与传记著作获诺贝尔文学奖，1965年1月24日在伦敦去世，享国葬礼。",
    ],
    facts: [
      ["生于", "1874年11月30日 · 牛津郡布莱尼姆宫"],
      ["任期", "1940—1945 · 1951—1955 两任首相"],
      ["辞世", "1965年1月24日 · 伦敦"],
    ],
    background: [
      { h: "五天之内换了首相", p: "1940年5月10日，德军同时侵入荷兰、比利时与卢森堡，西线全面打响。同一天，因挪威战事失利而在议会备受抨击的张伯伦辞去首相，国王乔治六世随即召请丘吉尔组阁，他当日便就任首相。" },
      { h: "上任后的第一场演说", p: "5月13日下午2时54分，丘吉尔以首相身份第一次向下院讲话。他先交代组阁的进展，再说清眼前的处境，最后把话说到了底——除了血、辛劳、眼泪和汗水，他无物可献。" },
      { h: "381票赞成，无人反对", p: "当日的信任动议以381票赞成、无人反对获得通过。此后数周，比利时投降，英军自敦刻尔克撤回本土，法国停战——这篇演说因此被视为那个夏天的开端。" },
    ],
    caveat: [
      "本篇依英国议会官方辩论记录（Hansard，下院第360卷，1940年5月13日，第1501—1525栏）译出，译文为本站自行译出。",
      "这场演说没有正式篇名。《热血、辛劳、眼泪和汗水》是后人依演说中最著名的那句话所起的通称。",
      "表决结果的官方记录写作 Ayes, 381; Noes, o.，反对栏另记 NOES. NIL.，即381票赞成、无人反对；本站表述从官方记录。",
    ],
    lang: "en",
    type: "prose",
    originalLabel: "英文原文",
    translationLabel: "中文译文",
    original: `On Friday evening last I received His Majesty's Commission to form a new Administration. It was the evident wish and will of Parliament and the nation that this should be conceived on the broadest possible basis and that it should include all parties, both those who supported the late Government and also the parties of the Opposition. I have completed the most important part of this task. A War Cabinet has been formed of five Members, representing, with the Opposition Liberals, the unity of the nation. The three party Leaders have agreed to serve, either in the War Cabinet or in high executive office. The three Fighting Services have been filled. It was necessary that this should be done in one single day, on account of the extreme urgency and rigour of events. A number of other positions, key positions, were filled yesterday, and I am submitting a further list to His Majesty to-night. I hope to complete the appointment of the principal Ministers during to-morrow. The appointment of the other Ministers usually takes a little longer, but I trust that, when Parliament meets again, this part of my task will be completed, and that the administration will be complete in all respects.

I considered it in the public interest to suggest that the House should be summoned to meet to-day. Mr. Speaker agreed, and took the necessary steps, in accordance with the powers conferred upon him by the Resolution of the House. At the end of the proceedings to-day, the Adjournment of the House will be proposed until Tuesday, 21st May, with, of course, provision for earlier meeting, if need be. The business to be considered during that week will be notified to Members at the earliest opportunity. I now invite the House, by the Motion which stands in my name, to record its approval of the steps taken and to declare its confidence in the new Government.

To form an Administration of this scale and complexity is a serious undertaking in itself, but it must be remembered that we are in the preliminary stage of one of the greatest battles in history, that we are in action at many other points in Norway and in Holland, that we have to be prepared in the Mediterranean, that the air battle is continuous and that many preparations, such as have been indicated by my hon. Friend below the Gangway, have to be made here at home. In this crisis I hope I may be pardoned if I do not address the House at any length to-day. I hope that any of my friends and colleagues, or former colleagues, who are affected by the political reconstruction, will make allowance, all allowance, for any lack of ceremony with which it has been necessary to act. I would say to the House, as I said to those who have joined this Government: "I have nothing to offer but blood, toil, tears and sweat."

We have before us an ordeal of the most grievous kind. We have before us many, many long months of struggle and of suffering. You ask, what is our policy? I will say: It is to wage war, by sea, land and air, with all our might and with all the strength that God can give us; to wage war against a monstrous tyranny never surpassed in the dark, lamentable catalogue of human crime. That is our policy. You ask, what is our aim? I can answer in one word: It is victory, victory at all costs, victory in spite of all terror, victory, however long and hard the road may be; for without victory, there is no survival. Let that be realised; no survival for the British Empire, no survival for all that the British Empire has stood for, no survival for the urge and impulse of the ages, that mankind will move forward towards its goal. But I take up my task with buoyancy and hope. I feel sure that our cause will not be suffered to fail among men. At this time I feel entitled to claim the aid of all, and I say, "Come then, let us go forward together with our united strength."`,
    signoff: ["Delivered in the House of Commons,", "Winston Churchill", "London · May 13, 1940"],
    translation: `上周五傍晚，我接到了国王陛下的委命，筹建新一届政府。议会与全国上下的意愿十分明确：新政府应建立在尽可能广泛的基础之上，把各党派都容纳进来——既包括支持上届政府的人，也包括反对党的各党。这一任务中最重要的一部分，我已经完成。由五人组成的战时内阁已经成立；它与反对派自由党人一道，象征着全国的团结。三位政党领袖都已同意效力，或加入战时内阁，或担任高级行政职务。陆、海、空三个军种的主政人选都已确定。由于事态的极端急迫与严峻，这些必须在一天之内办妥。昨天又有若干职位——都是关键职位——得到确定；今晚我将向国王陛下呈递又一份名单。各主要大臣的任命，我希望能在明天完成。其余大臣的任命通常要多费些时日；但我相信，待议会再次集会之时，我这部分工作当已完成，整个政府也将在各方面组建齐备。

我认为，建议本院于今日召集开会，是符合公众利益的。议长表示同意，并依本院决议授予他的权力，采取了必要的步骤。今日议程结束时，将提议本院休会至5月21日星期二；当然，如有必要，也可提前复会。那一周将要审议的事项，会尽早通知各位议员。现在，我请本院就我名下提出的这项动议进行表决，以记录下诸位对已采取步骤的认可，并宣告对新政府的信任。

组建一个如此规模、如此繁复的政府，本身就是一件艰巨的事；但必须记住：我们正处在历史上最伟大战役之一的初始阶段，我们在挪威、在荷兰等许多地方都在交战，我们必须对地中海有所准备，空战从未间断，而在本土也有许多准备工作要做——正如过道另一侧一位尊敬的议员所指出的。值此危局，若我今日不向本院作长篇陈述，还望诸位见谅。我也希望，因这次政治重组而受到影响的各位朋友、同僚与旧日同僚，对我为形势所迫而不得不简率行事之处，予以充分体谅。我要对本院说，正如我对那些参加本政府的人说过的那样：“我所能奉献的，只有血、辛劳、眼泪和汗水。”

摆在我们面前的，是一场最严酷的考验。摆在我们面前的，是许多、许多个月漫长的斗争与苦难。你们问：我们的政策是什么？我要说：那就是以我们全部的国力，以上帝所能赐予我们的一切力量，在海上、陆上与空中作战；就是向一桩穷凶极恶的暴政开战——在人类罪行那黑暗而可悲的清单上，还从未有过比它更甚者。这就是我们的政策。你们问：我们的目标是什么？我可以用一个词回答：胜利——不惜一切代价去夺取胜利，不顾一切恐怖去夺取胜利，无论道路多么漫长、多么艰难，也要夺取胜利；因为不胜利，就没有生存。请认清这一点：没有生存，大英帝国就没有生存，大英帝国所代表的一切就没有生存，历代相传的那股冲动——人类终将朝自己的目标前进——也就没有生存。然而，我是怀着振奋与希望担起这一任务的。我深信，我们的事业不会在人世间归于失败。此时此刻，我感到自己有资格请求所有人的支援，并且要说：“来吧，让我们同心协力，一道前进。”`,
    signoffT: ["演讲于英国下议院，", "温斯顿·丘吉尔", "伦敦 · 1940年5月13日"],
    publishAt: "2026-10-09T20:00:00+08:00",
  },

  {
    id: "afanggong-fu",
    cat: "classics",
    title: "阿房宫赋",
    subtitle: "",
    author: "杜牧",
    authorShort: "杜牧",
    authorRole: "晚唐诗人 · “小杜” · 803 — 852",
    era: "宝历元年（825）· 长安",
    excerpt: "秦人不暇自哀，而后人哀之。",
    authorIntro: [
      "杜牧（803—852），字牧之，京兆万年（今陕西西安）人，晚唐诗人、文学家。出身京兆杜氏，祖父杜佑历仕德宗、顺宗、宪宗三朝宰相，撰有《通典》二百卷。因晚年居长安城南樊川别墅，世称“杜樊川”；又因官终中书舍人（中书省别称紫微省），人称“杜紫微”。",
      "唐文宗大和二年（828）进士及第，又中贤良方正能直言极谏科，历任弘文馆校书郎、监察御史、黄州、池州、睦州刺史，官终中书舍人。平生好论兵，曾注《孙子》十三篇；诗文兼擅而以七言绝句最著，与李商隐并称“小李杜”，有《樊川文集》二十卷传世。",
    ],
    facts: [
      ["生于", "803年 · 京兆万年（今陕西西安）"],
      ["官职", "中书舍人 · 世称“杜紫微”"],
      ["传世", "《樊川文集》二十卷"],
    ],
    background: [
      { h: "宝历大起宫室", p: "唐敬宗李湛十六岁即位，好治宫室、游戏无度。《资治通鉴》记他“游戏无度，狎昵群小”，“视朝月不再三，大臣罕得进见”，又“好治宫室，欲营别殿，制度甚广”。杜牧后来在《上知己文章启》中自陈作意：“宝历大起宫室，广声色，故作《阿房宫赋》。”" },
      { h: "二十三岁的借古讽今", p: "杜牧出身京兆杜氏，祖父杜佑是三朝宰相，家学深厚，到他这一代却已中落。他自少年起便留心“治乱兴亡之迹，财赋兵甲之事”。二十三岁写下这篇赋，不写眼前事，只借秦始皇营建阿房宫、穷奢极欲而亡国的旧账，把矛头指向当朝。" },
      { h: "一赋得荐 · 东都登第", p: "据五代王定保《唐摭言》记载，大和二年（828），太学博士吴武陵读到《阿房宫赋》，大为赞赏，当众高声诵读一遍给主持东都试的礼部侍郎崔郾听，力荐杜牧。杜牧当年进士及第，名列第五。一篇二十三岁写的赋，替他敲开了科举之门。" },
    ],
    caveat: [
      "秦阿房宫并未建成，也未被焚。由中国社会科学院考古研究所与西安市文物保护考古所组成的阿房宫考古队，自 2002 年 10 月起至 2007 年 11 月，对前殿遗址作了调查、勘探与发掘：台基上未见秦代宫殿建筑遗迹，20 余万平方米的勘探面内仅发现几处红烧土，没有大面积焚烧的痕迹；项羽所烧的是咸阳宫。文献亦有旁证——《史记·秦始皇本纪》记“阿房宫未成，成，欲更择令名名之”，《汉书·五行志》记“复起阿房，未成而亡”。故末段“楚人一炬，可怜焦土”宜作文学笔法读，不宜径视为史实。",
      "系年：杜牧《上知己文章启》自云“宝历大起宫室，广声色，故作《阿房宫赋》”。宝历为唐敬宗年号，凡三年（825—827）；杜牧自述只及年号，未及具体年份。后世通行系于宝历元年（825），本站从此说。",
      "生卒年通行作 803—852（卒于大中六年冬，享年五十）；个别资料作 803—853。本站采 803—852。",
      "用字异文：本篇取课文级通行本。“剽掠其人”一作“摽掠其人”，“有不见者”一作“有不得见者”，“矗不知其几千万落”一作“矗不知乎几千万落”，末段“嗟乎”一作“嗟夫”。诸本并存而文义无别，本站一律从通行本。",
    ],
    lang: "zh",
    type: "prose",
    originalLabel: "原文",
    translationLabel: "白话译文",
    original: `六王毕，四海一，蜀山兀，阿房出。覆压三百余里，隔离天日。骊山北构而西折，直走咸阳。二川溶溶，流入宫墙。五步一楼，十步一阁。廊腰缦回，檐牙高啄。各抱地势，钩心斗角。盘盘焉，囷囷焉，蜂房水涡，矗不知其几千万落。长桥卧波，未云何龙？复道行空，不霁何虹？高低冥迷，不知西东。歌台暖响，春光融融。舞殿冷袖，风雨凄凄。一日之内，一宫之间，而气候不齐。

妃嫔媵嫱，王子皇孙，辞楼下殿，辇来于秦，朝歌夜弦，为秦宫人。明星荧荧，开妆镜也。绿云扰扰，梳晓鬟也。渭流涨腻，弃脂水也。烟斜雾横，焚椒兰也。雷霆乍惊，宫车过也。辘辘远听，杳不知其所之也。一肌一容，尽态极妍，缦立远视，而望幸焉。有不见者，三十六年。

燕赵之收藏，韩魏之经营，齐楚之精英，几世几年，剽掠其人，倚叠如山。一旦不能有，输来其间。鼎铛玉石，金块珠砾，弃掷逦迤，秦人视之，亦不甚惜。

嗟乎！一人之心，千万人之心也。秦爱纷奢，人亦念其家。奈何取之尽锱铢，用之如泥沙？使负栋之柱，多于南亩之农夫。架梁之椽，多于机上之工女。钉头磷磷，多于在庾之粟粒。瓦缝参差，多于周身之帛缕。直栏横槛，多于九土之城郭。管弦呕哑，多于市人之言语。使天下之人，不敢言而敢怒。独夫之心，日益骄固。戍卒叫，函谷举，楚人一炬，可怜焦土！

呜呼！灭六国者，六国也，非秦也。族秦者，秦也，非天下也。嗟乎！使六国各爱其人，则足以拒秦。使秦复爱六国之人，则递三世可至万世而为君，谁得而族灭也？秦人不暇自哀，而后人哀之。后人哀之而不鉴之，亦使后人而复哀后人也。`,
    translation: `六国相继灭亡，天下归于一统；蜀地的山林被砍伐得光秃秃的，阿房宫便拔地而起。它覆盖绵延三百多里，把天日都遮蔽隔断。从骊山北麓构筑而起，再折向西面，一直通到咸阳。渭水与樊川两条河的水波溶溶，流进宫墙之内。五步一座楼，十步一座阁。走廊像没有花纹的绸带一样回环曲折，屋檐的尖角高高翘起，像鸟嘴向上啄食。楼阁各自依着地势而建，回廊钩连中心，飞檐彼此相峙。盘旋回环，曲折蜿蜒，像密集的蜂房，又像回旋的水涡，高高耸立，不知有几千几万座。长桥横卧在水波之上，天上没有云，哪里来的龙？复道凌空而行，并非雨后初晴，哪里来的虹？高高低低，迷离难辨，分不清南北西东。歌台上歌声温润，暖意融融如春光；舞殿里长袖飘拂生寒，凄清如同风雨。一天之内，同一座宫苑之中，冷暖竟这样不同。

六国的妃嫔媵嫱、王子皇孙，辞别了自己的楼阁，走下了自己的殿堂，被用车辇送到秦国，从早到晚唱歌奏乐，做了秦宫的宫人。星光闪闪烁烁，那是她们打开了梳妆的镜子；乌云般的长发纷乱缭绕，那是她们清晨在梳理发髻；渭水涨起一层油腻，那是她们倒掉的脂粉水；轻烟斜飘、雾气横漫，那是她们在焚烧椒兰。雷声忽然响起，那是宫车驶过；车声辘辘，越听越远，不知驶向了什么地方。每一寸肌肤、每一分容貌，都极尽娇妍之态；她们久久地伫立着，向远处张望，盼着君王临幸。可有的人竟三十六年也没能见到皇帝一面。

燕国、赵国的收藏，韩国、魏国的经营，齐国、楚国的精美之物，是经过多少世代、多少年从百姓手中掠夺而来，堆积得像山一样。一旦六国不能再占有它们，就都被运到了这里。宝鼎被当作铁锅，美玉被当作石头，黄金被当作土块，珍珠被当作沙砾，随处丢弃、连绵遍地；秦人看待这些，也并不怎么爱惜。

唉！一个人的心，与千万人的心本该是一样的。秦始皇贪爱豪奢华靡，而百姓也同样顾念自己的家。为什么搜刮时一锱一铢都不肯放过，使用时却挥霍得像泥沙一样？以致承重的柱子，比田里的农夫还多；架梁的椽子，比织机前的女工还多；突起的钉头，比粮仓里的谷粒还多；参差的瓦缝，比人身上的丝线还多；纵横的栏杆，比天下的城郭还多；嘈杂的管弦声，比集市上人们的说话声还多。这使得天下之人嘴上不敢说，心里却充满怨怒。独夫的心，一天比一天骄横顽固。戍守边地的士卒一声呼号，函谷关就被攻下；楚人一把火，可怜阿房宫化作一片焦土！

唉！灭掉六国的，正是六国自己，而不是秦国；族灭秦国的，正是秦国自己，而不是天下之人。唉！假使六国的君主各自爱护自己的百姓，就足以抵抗秦国；假使秦国也能爱护六国的百姓，那就可以传位三世，直至万世而为君主，谁还能把它族灭呢？秦人来不及为自己哀叹，只能由后人来替他们哀叹；后人替他们哀叹却不引以为鉴，也就又让更后的人来哀叹后人了。`,
    publishAt: "2026-10-12T20:00:00+08:00",
  },

  {
    id: "jianjia",
    cat: "poetry",
    title: "蒹葭",
    subtitle: "",
    author: "佚名",
    authorShort: "《诗经》",
    authorInitial: "诗",
    authorRole: "中国最早的诗歌总集 · 收录西周初至春秋中叶诗 · 作者不可考",
    era: "约春秋时期 · 秦地（今陕西、甘肃一带）",
    excerpt: "蒹葭苍苍，白露为霜。所谓伊人，在水一方。",
    authorIntro: [
      "《诗经》是中国最早的诗歌总集，先秦只称《诗》，或举其整数称“诗三百”，西汉时被尊为儒家经典，始有《诗经》之名。所收诗篇上起西周初年，下至春秋中叶，约五百年间，作者绝大多数已无从确知。",
      "全书分《风》《雅》《颂》三部分。“风”是各诸侯国的民间歌谣，共十五国风一百六十篇；《秦风》是其中之一，今存十篇，多写车马田猎、同仇敌忾，气象慷慨悲壮。《蒹葭》位列其中，却通篇不见兵戈，只以一片秋水写可望难即的怅惘，在《秦风》里近乎异响。",
    ],
    facts: [
      ["出处", "《诗经·国风·秦风》第四篇"],
      ["体例", "三章 · 每章八句 · 重章叠唱"],
      ["时代", "约春秋时期 · 秦地民歌"],
    ],
    background: [
      { h: "《秦风》里的异数", p: "《秦风》十篇多写车马田猎、杀伐征战，连《无衣》这样的同袍之歌也铿锵激越；《蒹葭》却不着一个兵字，只写一水秋色与求而不得，在整卷《秦风》中几成孤例，故方玉润《诗经原始》叹其“气味绝不相类”。" },
      { h: "秦地在何处", p: "“秦风”采自秦人聚居之地。秦人早年居于西垂（今甘肃东南部），周平王东迁后因护送有功受封诸侯，疆土向东扩展到西周王畿与豳地，即今陕西一带。故秦风的地域大致包括今甘肃东南部与陕西中部，产生的年代约当春秋初年至秦穆公之世。" },
      { h: "最得风人深致", p: "此诗之旨历来聚讼：《毛诗序》解为“刺襄公也，未能用周礼”，今人多不取其说；明清学者或以为是招隐访贤，或以为怀人念远；现代研究者则多视作求之不得的怀人之作。王国维《人间词话》独推它“最得风人深致”，与晏殊“独上高楼，望尽天涯路”意境相近，只是一个洒落、一个悲壮。" },
    ],
    caveat: [
      "本篇作者不可考。《诗经》所收诗篇的作者绝大多数已无从确知，本站依通例署“佚名”，以《诗经》为署名主体。",
      "成诗年代无定论。《秦风》一般被认为是春秋初年至秦穆公年间约一百五六十年间的作品，《蒹葭》的具体创作年份不可确指，故年代一律加“约”字；所咏之地亦有秦地、今甘肃礼县等不同说法，本站只作地域概括。",
      "异文：第二章首句通行本作“蒹葭萋萋”，朱熹《诗集传》一系作“蒹葭凄凄”，清人陈奂《诗毛氏传疏》谓“凄凄读为萋萋”。本站从通行的课本级文本作“萋萋”。",
      "诗旨与“伊人”所指历来无定论：或说求贤招隐，或说怀人念远，或说祭祀水神，或说讽刺秦襄公；《毛诗序》“刺襄公”之说亦无确证。本站并陈诸说，不采一说为定论。",
    ],
    lang: "zh",
    type: "verse",
    originalLabel: "原文",
    translationLabel: "白话译文",
    original: `蒹葭苍苍，白露为霜。
所谓伊人，在水一方。
溯洄从之，道阻且长。
溯游从之，宛在水中央。

蒹葭萋萋，白露未晞。
所谓伊人，在水之湄。
溯洄从之，道阻且跻。
溯游从之，宛在水中坻。

蒹葭采采，白露未已。
所谓伊人，在水之涘。
溯洄从之，道阻且右。
溯游从之，宛在水中沚。`,
    translation: `芦苇苍苍茫茫，白露凝结成霜。我所思念的那个人，就在河水的另一方。逆流而上去追寻，道路险阻又漫长；顺流而下去追寻，仿佛就在水的中央。

芦苇茂盛繁密，露水还没有晒干。我所思念的那个人，就在水草交接的岸边。逆流而上去追寻，道路险阻要登高；顺流而下去追寻，仿佛就在水中的小洲。

芦苇繁茂鲜明，露水还没有干透。我所思念的那个人，就在那河岸的水边。逆流而上去追寻，道路迂回又曲折；顺流而下去追寻，仿佛就在水中的沙洲。`,
    publishAt: "2026-10-14T20:00:00+08:00",
  },

  {
    id: "tryst-with-destiny",
    cat: "speeches",
    title: "命运之约",
    subtitle: "A Tryst with Destiny",
    author: "贾瓦哈拉尔·尼赫鲁",
    authorShort: "尼赫鲁",
    authorInitial: "N",
    authorRole: "印度首任总理 · 1889 — 1964",
    era: "1947年8月14日午夜 · 新德里 · 制宪会议",
    excerpt: "当午夜的钟声敲响，世人尚在沉睡，印度将苏醒。",
    authorIntro: [
      "贾瓦哈拉尔·尼赫鲁（1889—1964），印度独立运动的主要领导人、印度共和国首任总理。他出身于阿拉哈巴德的律师世家，少年赴英国求学，先后就读于哈罗公学与剑桥大学三一学院，并在伦敦内殿律师学院取得律师资格。1912年回国后投身民族运动，逐渐成为甘地最信任的年轻一代领袖。",
      "1947年8月15日印度独立，他出任首任总理，并兼任外交部长，直到1964年5月27日逝世，前后将近十七年，是印度现代国家制度的主要奠基者，也是不结盟运动的倡导者之一。著有《尼赫鲁自传》《印度的发现》等。这篇演说是他在独立前夜的制宪会议上发表的，被视为二十世纪最著名的演说之一。",
    ],
    facts: [
      ["生于", "1889年11月14日 · 英属印度阿拉哈巴德"],
      ["任职", "印度首任总理 · 1947 — 1964"],
      ["发表", "1947年8月14日午夜 · 新德里制宪会议"],
    ],
    background: [
      { h: "十一点开始的午夜会议", p: "1947年8月14日晚11时，印度制宪会议第五次会议在新德里宪法厅开幕——议程本就排到午夜之后，因为印度将在那一刻成为独立国家。会议由主席拉金德拉·普拉萨德主持，开幕时先由苏切塔·克里帕拉尼领唱《梵德·马塔兰》。" },
      { h: "分治阴影下的欢呼", p: "独立到来的同时，印度次大陆正陷入分治的流血之中。尼赫鲁当晚在会上的另一段发言（以印度斯坦语讲）说得直白：不要以为举国都在欢庆——他心里有足够的悲伤，因为离德里不远，几座大城市正在燃烧。这篇演说因此既是欢呼，也是一份沉甸甸的提醒。" },
      { h: "他指的是甘地", p: "演说中「我们这一代最伟大的人」一句，一般被认为指的是甘地。甘地当晚没有出席庆典：他留在加尔各答绝食一日，奔走于印度教徒与穆斯林之间，试图平息教派仇杀。他只在演说中被隔空致意。" },
    ],
    caveat: [
      "本篇为节选：所录为尼赫鲁当晚以英语宣读的演说部分。按官方记录，其前尚有以印度斯坦语所作的一段发言（他说「我现在用英语宣读这项决议」之后才开始英语部分），其后紧接的是他提出的正式决议与誓词（I beg to move, Sir …），均未计入正文。",
      "底本为印度人民院秘书处印行的《印度制宪会议辩论记录》（Constituent Assembly Debates, Official Report, Vol. V）1947年8月14日条。坊间流传的《与命运有约》常把当晚或次日的其他段落并入本篇，如「The appointed day has come…」「A new star rises, the star of freedom in the East…」「We rejoice in that freedom…」以及致甘地的一段（「On this day our first thoughts go to the architect of this freedom…」）等；这些文字不见于上述官方记录的英语演说部分，本站不取，以免版本混杂。",
      "文字差异：官方记录作「the grandeur of her successes and her failures」（successes 为复数），部分流传版本作 her success and her failures；「One World」两词皆首字母大写，系原文如此。本站一律依官方记录。",
      "时间表述：会议于8月14日23时开始，演说在午夜前发表，印度独立于8月15日正式生效。故有的来源把本篇系于8月14日，有的系于8月15日，本站取「8月14日午夜」。",
    ],
    lang: "en",
    type: "prose",
    originalLabel: "英文原文（节选）",
    translationLabel: "中文译文",
    original: `Long years ago we made a tryst with destiny, and now the time comes when we shall redeem our pledge, not wholly or in full measure, but very substantially. At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom. A moment comes, which comes but rarely in history, when we step out from the old to the new, when an age ends, and when the soul of a nation, long suppressed, finds utterance. It is fitting that at this solemn moment we take the pledge of dedication to the service of India and her people and to the still larger cause of humanity.

At the dawn of history India started on her unending quest, and trackless centuries are filled with her striving and the grandeur of her successes and her failures. Through good and ill fortune alike she has never lost sight of that quest or forgotten the ideals which gave her strength. We end today a period of ill fortune and India discovers herself again. The achievement we celebrate today is but a step, an opening of opportunity, to the greater triumphs and achievements that await us. Are we brave enough and wise enough to grasp this opportunity and accept the challenge of the future?

Freedom and power bring responsibility. That responsibility rests upon this Assembly, a sovereign body representing the sovereign people of India. Before the birth of freedom we have endured all the pains of labour and our hearts are heavy with the memory of this sorrow. Some of those pains continue even now. Nevertheless the past is over and it is the future that beckons to us now.

That future is not one of ease or resting but of incessant striving so that we might fulfil the pledges we have so often taken and the one we shall take today. The service of India means the service of the millions who suffer. It means the ending of poverty and ignorance and disease and inequality of opportunity. The ambition of the greatest man of our generation has been to wipe every tear from every eye. That may be beyond us but as long as there are tears and suffering, so long our work will not be over.

And so we have to labour and to work and work hard to give reality to our dreams. Those dreams are for India, but they are also for the world, for all the nations and peoples are too closely knit together today for any one of them to imagine that it can live apart. Peace has been said to be indivisible, so is freedom, so is prosperity now, and so also is disaster in this One World that can no longer be split into isolated fragments.

To the people of India, whose representatives we are, we make appeal to join us with faith and confidence in this great adventure. This is no time for petty and destructive criticism, no time for ill-will or blaming others. We have to build the noble mansion of free India where all her children may dwell.`,
    translation: `很久以前，我们与命运立下约定；如今，践约的时刻到了——不是全部兑现，也不是十足地兑现，但已是极其重大的兑现。当午夜的钟声敲响，世人尚在沉睡，印度将苏醒，迎来生命与自由。历史上难得有这样的时刻：我们走出旧世界、踏入新世界，一个时代就此终结，一个被压抑已久的民族的灵魂终于得以发声。在这样的庄严时刻，我们理应立下誓言，献身于印度、献身于她的人民，也献身于人类更宏大的事业。

在历史的黎明，印度便开始了她无尽的求索；此后那些无迹可循的漫长世纪里，写满了她的奋斗，也写满了她成功的辉煌与失败的沉重。无论顺境还是逆境，她从未忘却这一求索，也从未忘记那些曾给予她力量的理想。今天，我们终结了一段厄运的岁月，印度重新发现了自己。我们今天所庆祝的成就，不过是向前迈出的一步，是机会的开端——更大的胜利与成就还在前方等着我们。我们是否足够勇敢、足够明智，去抓住这个机会，去迎接未来的挑战？

自由与权力带来责任。这份责任，落在这个制宪会议肩上——它是一个主权机构，代表着主权在民的印度人民。在自由诞生之前，我们历尽了分娩的阵痛，心头沉甸甸地压着悲伤的记忆；有些痛楚至今仍在延续。然而，过去已经过去，如今召唤我们的是未来。

那个未来不是安逸，也不是歇息，而是持续不断的奋斗，好让我们兑现屡次许下的誓言，以及今天即将立下的这一誓言。为印度服务，就是为千百万受苦受难的人服务；就是终结贫穷、愚昧、疾病，以及机会的不平等。我们这一代最伟大的人，其抱负正是擦干每一双眼睛里的泪水。这或许超出了我们的能力；但只要世上还有泪水、还有苦难，我们的工作就永远不会结束。

因此，我们必须劳作，必须工作，而且必须辛勤地工作，才能让梦想成为现实。那些梦想属于印度，也属于整个世界——因为今天各国与各民族如此紧密地相连，没有哪一个能够想象自己可以孤立地生存。人们说，和平不可分割；自由如此，如今的繁荣如此，而在这再也无法割裂为孤立场片的同一个世界里，灾难同样如此。

对印度人民——我们是你们的代表——我们呼吁你们怀着信念与信心，加入这场伟大的冒险。现在不是做琐碎而破坏性批评的时候，不是心怀恶意、相互指责的时候。我们要建起自由印度那座宏伟的大厦，让她所有的儿女都能在其中安居。`,
    publishAt: "2026-10-16T20:00:00+08:00",
  },

  {
    id: "xiangjixuan-zhi",
    cat: "classics",
    title: "项脊轩志",
    subtitle: "",
    author: "归有光",
    authorShort: "归有光",
    authorRole: "明代散文家 · 唐宋派代表 · 1507 — 1571",
    era: "明·嘉靖年间 · 江苏昆山 · 项脊轩",
    excerpt: "一间漏雨的旧轩，写尽三代亲人的音容。",
    authorIntro: [
      "归有光，字熙甫，又字开甫，号震川、项脊生，江苏昆山人。明代散文家，唐宋派代表作家，与唐顺之、王慎中并称“嘉靖三大家”。其文上承唐宋古文，下启清代桐城派，后人誉为“明文第一”。",
      "他科场蹭蹬：嘉靖十九年（1540）中应天乡试第二名，此后会试屡试不第，退居嘉定安亭读书讲学二十余年；嘉靖四十四年（1565）始成进士，历长兴知县、顺德通判，官至南京太仆寺丞，世称“归太仆”。散文长于叙事，不事雕饰而情真语挚，《项脊轩志》即其追忆亲人的代表作，收于《震川先生集》卷十七。",
    ],
    facts: [
      ["生卒", "1507 — 1571 · 江苏昆山"],
      ["功名", "嘉靖十九年（1540）应天乡试第二 · 嘉靖四十四年（1565）进士"],
      ["世称", "震川先生 · 官至南京太仆寺丞，人称“归太仆”"],
    ],
    background: [
      { h: "一间漏雨的旧轩", p: "项脊轩原是归家一间旧南阁子，一丈见方，仅容一人。屋顶漏雨，门窗朝北，一过正午便昏暗，连书桌都无处安放。归有光稍加修葺，开窗、砌墙、植兰桂竹木，陋室才成了可以读书的所在。" },
      { h: "诸父异爨之后", p: "归家本是昆山望族，到明代中叶渐次衰落。伯父叔父分家以后，庭院里到处是门与墙，东家的狗冲着西边叫，鸡歇在厅堂上。家门的离散，正是文中“多可悲”的第一层。" },
      { h: "十余年后的补记", p: "正文写的是母亲与祖母；此后作者成婚、丧妻，又因科场不第而奔走南北，于是隔了十多年补写两段，把亡妻也放了进来。篇末“庭有枇杷树”一句，即出于这次补记。" },
    ],
    caveat: [
      "生卒年有“1506 — 1571”与“1507 — 1571”两种写法。旧历为正德元年（1506）十二月二十四日至隆庆五年（1571）正月十三日，折算公历通常作 1507 年 1 月 6 日与 1571 年 2 月 7 日（个别资料卒日作 2 月 5 日）。政府网站亦两说并存，如长兴县人民政府网作“1506 ~ 1571”，上海市嘉定区人民政府网、苏州市档案局作“1507 — 1571”。本站统一取公历 1507 — 1571。",
      "全文分两次写成。正文（至“其谓与坎井之蛙何异”）通行说法作于嘉靖三年（1524），时年十八（一说十九，系实岁与虚岁之别）；末两段为后来补记。补记的具体年份，常见嘉靖十八年（1539）与嘉靖十九年（1540）两说，均据文中“后五年”“其后六年”等语推算，本周站不确指，只作“十余年后”。",
      "版本异文：文中第一人称，通行本或作“余”或作“予”（如“然余居于此”／“然予居于此”），本站统一作“余”；“其谓与坎井之蛙何异”一句，另有作“埳井之蛙”的版本；“内外多置小门墙，往往而是”，亦见作“内外多置小门，墙往往而是”。",
      "文中祖母所称“太常公”，通行注释指归有光祖母的祖父夏昶（字仲昭，昆山人），并称其宣德年间任太常寺卿。然据可查的传记资料，夏昶宣德年间所任为吏部考功司主事，至正统十年（1445）方升太常寺卿（故宫博物院藏品著录则作“太常寺少卿”）。文中“宣德间执此以朝”当指其宣德年间已在朝供职，“太常公”为以最高官职相称，本站不将其坐实为宣德年间的太常寺卿。",
      "“明文第一”为后世评语，并非定论。明末清初钱谦益编刊其文集，推归有光为“三百年第一人”，此说遂行于世；清代黄宗羲、曾国藩等则持异议，以为其文格局有限。本站取“后人誉为”的表述，不作为定评。",
    ],
    lang: "zh",
    type: "prose",
    originalLabel: "原文",
    translationLabel: "白话译文",
    original: `项脊轩，旧南阁子也。室仅方丈，可容一人居。百年老屋，尘泥渗漉，雨泽下注；每移案，顾视无可置者。又北向，不能得日，日过午已昏。余稍为修葺，使不上漏。前辟四窗，垣墙周庭，以当南日，日影反照，室始洞然。又杂植兰桂竹木于庭，旧时栏楯，亦遂增胜。借书满架，偃仰啸歌，冥然兀坐，万籁有声；而庭阶寂寂，小鸟时来啄食，人至不去。三五之夜，明月半墙，桂影斑驳，风移影动，珊珊可爱。

然余居于此，多可喜，亦多可悲。先是庭中通南北为一。迨诸父异爨，内外多置小门墙，往往而是。东犬西吠，客逾庖而宴，鸡栖于厅。庭中始为篱，已为墙，凡再变矣。家有老妪，尝居于此。妪，先大母婢也，乳二世，先妣抚之甚厚。室西连于中闺，先妣尝一至。妪每谓余曰：“某所，而母立于兹。”妪又曰：“汝姊在吾怀，呱呱而泣；娘以指叩门扉曰：‘儿寒乎？欲食乎？’吾从板外相为应答。”语未毕，余泣，妪亦泣。余自束发，读书轩中，一日，大母过余曰：“吾儿，久不见若影，何竟日默默在此，大类女郎也？”比去，以手阖门，自语曰：“吾家读书久不效，儿之成，则可待乎！”顷之，持一象笏至，曰：“此吾祖太常公宣德间执此以朝，他日汝当用之！”瞻顾遗迹，如在昨日，令人长号不自禁。

轩东故尝为厨，人往，从轩前过。余扃牖而居，久之，能以足音辨人。轩凡四遭火，得不焚，殆有神护者。

项脊生曰：“蜀清守丹穴，利甲天下，其后秦皇帝筑女怀清台；刘玄德与曹操争天下，诸葛孔明起陇中。方二人之昧昧于一隅也，世何足以知之，余区区处败屋中，方扬眉瞬目，谓有奇景。人知之者，其谓与坎井之蛙何异？”

余既为此志，后五年，吾妻来归，时至轩中，从余问古事，或凭几学书。吾妻归宁，述诸小妹语曰：“闻姊家有阁子，且何谓阁子也？”其后六年，吾妻死，室坏不修。其后二年，余久卧病无聊，乃使人复葺南阁子，其制稍异于前。然自后余多在外，不常居。

庭有枇杷树，吾妻死之年所手植也，今已亭亭如盖矣。`,
    translation: `项脊轩，就是原先的南阁子。屋子只有一丈见方，仅容得下一个人居住。这是间上百年的老屋，灰尘泥土渗漏下来，雨水也直往下淌；每次挪动书桌，四下看看，都没有可以安放的地方。屋子又朝北，见不到日光，一过正午就昏暗下来。我略微修补了一番，让屋顶不再漏雨；又在前面开了四扇窗子，在院子四周砌起围墙，用来迎着南来的阳光，日光反射进来，屋里才明亮了。院子里还错落种上兰、桂、竹、木，从前的栏杆，也因此添了几分景致。书架堆满了书，我时卧时起，长啸吟唱，或是静静地端坐，种种声响都听得分明；而庭前阶下寂静无声，小鸟时常飞来啄食，人走到跟前也不飞走。每逢十五的夜晚，明月照亮半面墙，桂树的影子错杂斑驳，风一吹，影子便跟着摇动，轻盈可爱。

可是我住在这里，可喜的事不少，可悲的事也不少。早年间，庭院南北相通，连成一片。等到伯父叔父们分了家，里里外外装了许多小门，墙也到处都是。东家的狗冲着西边叫，客人要穿过厨房才能赴宴，鸡歇在厅堂上。庭院里先扎起篱笆，后来砌成墙，一共变了两回。家中有一位老妇人，曾在这里住过。她是已故祖母的婢女，给两代人喂过奶，已故的母亲待她很厚。轩的西边连着内室，母亲曾到过这里。老妇人常对我说：“那地方，就是你母亲站过的地方。”她又说：“你姐姐当年在我怀里，呱呱地哭；你母亲用手指敲着门板问：‘孩子冷吗？想吃东西吗？’我就在门外一一应她。”话没有说完，我哭了，老妇人也哭了。我从束发之年就在轩中读书。有一天，祖母来看我，说：“我的孩子，好久不见你的影子，怎么整天一声不响地待在这里，真像个女孩子家？”临走时，她用手把门合上，自言自语道：“我们家读书人长久没有出头了，这孩子的成器，总该有指望吧！”过了一会儿，她拿着一块象笏过来，说：“这是我的祖父太常公在宣德年间拿着上朝用的，往后你一定会用到它！”回看这些旧日痕迹，如同就在昨天，叫人忍不住放声大哭。

轩的东边从前做过厨房，人们来去都要从轩前经过。我关着窗户住在里面，时间久了，单凭脚步声就能辨出是谁。轩先后遭过四次火，都没有烧掉，大概是有神明护着吧。

项脊生说：“巴蜀的寡妇清守着丹砂矿，获利天下第一，后来秦始皇为她筑了女怀清台；刘备与曹操争夺天下，诸葛亮从隆中走出来。当这两个人还默默无闻地困在一隅时，世人哪里能知道他们？我这一方小小的破屋，我在这里扬眉眨眼，自以为有奇异的景致。知道的人，恐怕要说我和井底之蛙没什么两样吧？”

我写下这篇志之后，过了五年，我的妻子嫁到我家来，时常到轩中，向我问些旧事，有时伏在几案上练字。她回娘家探亲回来，转述几个小妹的话说：“听说姐姐家有个阁子，什么叫阁子呀？”又过了六年，妻子去世，屋子坏了也没有修缮。此后两年，我长久卧病，心中无所寄托，才叫人重新修整了南阁子，形制跟从前略有不同。但从此以后我多在外乡，不常住了。

庭院里有一棵枇杷树，是我妻子去世那年她亲手栽下的，如今已经亭亭挺立，像车盖一样了。`,
    publishAt: "2026-10-19T20:00:00+08:00",
  },

  {
    id: "tianjingsha-qiusi",
    cat: "poetry",
    title: "天净沙 · 秋思",
    subtitle: "",
    author: "马致远",
    authorShort: "马致远",
    authorRole: "元代戏曲家 · 散曲家 · 约 1250 — 约 1324",
    era: "元代 · 年代与地点无确指",
    excerpt: "枯藤老树昏鸦，小桥流水人家，古道西风瘦马。",
    authorIntro: [
      "马致远（约 1250 — 约 1324），号东篱，一说字千里，大都（今北京）人。元代戏曲作家、散曲家，与关汉卿、白朴、郑光祖并称“元曲四大家”。",
      "他早年热衷功名，仕途却始终不得志，中年曾任江浙行省务官，后参加元贞书会，晚年退隐山林，以“东篱”为号，取陶渊明“采菊东篱下”之意。一生作杂剧十五种，今存七种，以《汉宫秋》影响最大；散曲辑本《东篱乐府》存小令百余首，元末明初的贾仲明在为其所作吊曲中称他“战文场，曲状元”。",
    ],
    facts: [
      ["作者", "旧题马致远 · “元曲四大家”之一"],
      ["曲牌", "[越调]·天净沙 · 又名“塞上秋”"],
      ["定评", "元·周德清《中原音韵》评为“秋思之祖”"],
    ],
    background: [
      { h: "漂泊半世的曲家", p: "马致远年轻时曾献诗求进，盼望借此显达，但元代前期科举长期停废，他直到中年才在江浙行省谋得一份下级职务，此后大半生辗转漂泊。羁旅之苦、迟暮之叹，是他散曲里反复出现的底色。" },
      { h: "元代文人的失意", p: "元代前期科举停废数十年，读书人进身无门，宋元之际遗民中遂有“九儒十丐”之叹——此说虽非元代定制，却折射出当时士人的失意。失意的文人大量转向杂剧与散曲，或借古讽今，或写漂泊羁旅。《天净沙·秋思》正是这一时代心境的缩影。" },
      { h: "五句二十八字", p: "全曲仅五句二十八字，前三句十八个字全由名词铺排而成，把九种景物像画面一样依次叠出，末句“断肠人在天涯”才点出那个观景的人。王国维《人间词话》叹它“寥寥数语，深得唐人绝句妙境。有元一代词家，皆不能办此也”。" },
    ],
    caveat: [
      "作者归属存疑。《天净沙·秋思》最早见于元人所编《梨园按试乐府新声》与盛如梓《庶斋老学丛谈》，两书均未署作者；周德清《中原音韵》将它列为“定格”范例并评为“秋思之祖”，同样未注明作者。直到明万历年间蒋一葵《尧山堂外纪》才把它归在马致远名下，却未说明依据。",
      "王国维《宋元戏曲考》较早质疑此说，指出“《庶斋老学丛谈》及元刊《乐府新声》均不著名氏，《尧山堂外纪》以为马致远撰……不知何据”；吴梅、任讷、隋树森等学者则仍主马致远说。此公案至今未有定论，本站从通行课本之例署“马致远”，作者问题以本条说明。",
      "文字异文：通行诸本并作“小桥流水人家”；《历代诗余》一系作“小桥流水平沙”，又“西风”作“凄风”。王国维《人间词话》所引即用“平沙”本，而其《宋元戏曲考》所引仍作“人家”。《庶斋老学丛谈》所录属流传中的早期形态，文字与今本稍有出入。本站从《中原音韵》一系、即通行课本文本。",
      "马致远生卒年无确考，一般定于约 1250 年生，卒于 1321 年，一说晚至 1324 年，故生卒一律加“约”字，不作确指。",
      "曲中所写究在何处、作于何年，亦无定论：或以为江南秋色，或以为塞北风光，或以为只是泛写羁旅心境而无确指。本篇年代与地点不加强指。",
    ],
    lang: "zh",
    type: "verse",
    originalLabel: "原文",
    translationLabel: "白话译文",
    original: `枯藤老树昏鸦，
小桥流水人家，
古道西风瘦马。
夕阳西下，
断肠人在天涯。`,
    translation: `枯干的藤蔓缠绕着老树，树上栖着黄昏归巢的乌鸦。小桥横架，流水潺潺，近旁有几户人家。荒凉的古道上，萧瑟西风里，一匹瘦马载着旅人缓缓前行。夕阳徐徐西沉，愁肠寸断的游子，仍漂泊在天涯。`,
    publishAt: "2026-10-21T20:00:00+08:00",
  },

  {
    id: "angostura-speech",
    cat: "speeches",
    title: "安戈斯图拉演说（节选）",
    subtitle: "Discurso de Angostura",
    author: "西蒙·玻利瓦尔",
    authorShort: "玻利瓦尔",
    authorInitial: "B",
    authorRole: "拉丁美洲独立运动领袖 · 1783 — 1830",
    era: "1819年2月15日 · 委内瑞拉·安戈斯图拉（今玻利瓦尔城）",
    excerpt: "我们既不是欧洲人，也不是印第安人。",
    authorIntro: [
      "西蒙·玻利瓦尔（1783—1830），委内瑞拉加拉加斯人，拉丁美洲独立运动最著名的军事统帅与政治家。他出身土生白人贵族，幼年失怙，少年赴欧洲求学，1807年回国投身独立事业，此后二十余年转战南美北部，先后解放今委内瑞拉、哥伦比亚、厄瓜多尔、秘鲁、玻利维亚等地，被尊为「解放者」（El Libertador）。",
      "1819年2月15日，第二届委内瑞拉国民议会在奥里诺科河畔的安戈斯图拉开幕，玻利瓦尔在会上发表这篇演说：他交还议会授予的最高权力，同时提交一份宪法草案，主张以中央集权取代联邦制、废除奴隶制，并另设执掌教育与风纪的「道德权」。同年8月博亚卡战役大捷，12月17日议会通过《大哥伦比亚共和国根本法》，委内瑞拉、新格拉纳达与基多合为一国，玻利瓦尔当选总统。",
    ],
    facts: [
      ["生于", "1783年7月24日 · 委内瑞拉加拉加斯"],
      ["称号", "「解放者」 · 1813年加拉加斯市政会授予"],
      ["辞世", "1830年12月17日 · 哥伦比亚圣玛尔塔"],
    ],
    background: [
      { h: "从流亡到奥里诺科河", p: "1814年第二共和国覆灭后，玻利瓦尔两度流亡，一度避居牙买加、海地。1816年在海地方面的支援下重返委内瑞拉，1817年7月攻克奥里诺科河上的要冲安戈斯图拉，把这座内地小城经营成新的根据地。" },
      { h: "在战火中开国会", p: "1819年2月15日，国民议会在临时首都安戈斯图拉开幕，独立战争仍在进行，委内瑞拉尚未全境光复。玻利瓦尔在开幕当天发表这篇演说；三天后的2月18日，议会选举他为共和国总统，确立其在政治、军事与外交上的合法领导地位。" },
      { h: "一篇演说与一个国家", p: "演说中的方案并未被照单全收：议会否定了「道德权」，把参议院改为终身制，总统定为四年一任。但同年8月7日博亚卡战役大捷，12月17日议会通过《根本法》，大哥伦比亚共和国宣告诞生，玻利瓦尔出任总统——演说中那个「既非欧洲人、亦非印第安人」的新民族，自此有了名字。" },
    ],
    caveat: [
      "本篇为节选。全篇甚长，本站仅取其中两大段：一由「当美洲挣脱西班牙君主国的统治」至「最为奇特，也最为复杂」，论美洲人的身世与处境；二由「美洲人民被套上无知、暴政与恶习的三重枷锁」至「自由地呼吸纯净的以太」，论无知、暴政与恶习之下的自由。两段之间省略了自 Todavía hay más 至 …en cuanto era relativo a la ciencia del gobierno 的一段（论殖民地行政与「绝对政体」），节略处以「……」标示。",
      "底本与拼写：西班牙语原文据 1819 年初刊本（该演说 1819 年 2 月至 3 月分期刊出于安戈斯图拉的《奥里诺科邮报》Correo del Orinoco）之现代整理本。初刊本用旧式拼写（baxo、exercicio、freqüentemente、á），本站依现代正字法转写为 bajo、ejercicio、frecuentemente、a；标点亦从现代整理本，而各家整理本在标点上互有出入。",
      "译文为本站自译，自西班牙文直接译出，未参照任何已出版中译本，亦未取英译本转译。",
      "文中引卢梭语，出《论波兰政府》（Considérations sur le gouvernement de Pologne，1772 年前后写成，作者身后 1782 年始刊行）；卢梭原文意为「自由是一种入口虽易、消化却难的食物」，玻利瓦尔此处转述，措辞与法文原文已略有出入。篇名与译名：本篇通行简称《安戈斯图拉演说》，中国社会科学院拉丁美洲研究所《拉丁美洲历史词典》作《在安戈斯图拉国民大会上的演说》，并把该次会议称为「安戈斯图拉国民大会」；人名、地名与「道德权」「联邦制」「大哥伦比亚共和国」等译名，从该词典相关条目的通行译法。",
    ],
    lang: "es",
    type: "prose",
    originalLabel: "西班牙语原文（节选）",
    translationLabel: "中文译文",
    original: `Al desprenderse la América de la Monarquía Española, se ha encontrado semejante al Imperio Romano, cuando aquella enorme masa cayó dispersa en medio del antiguo mundo. Cada desmembración formó entonces una nación independiente conforme a su situación o a sus intereses; pero con la diferencia de que aquellos miembros volvían a restablecer sus primeras asociaciones. Nosotros ni aun conservamos los vestigios de lo que fue en otro tiempo: no somos europeos, no somos indios, sino una especie media entre los aborígenes y los españoles. Americanos por nacimiento y europeos por derechos, nos hallamos en el conflicto de disputar a los naturales los títulos de posesión, y de mantenernos en el país que nos vio nacer contra la oposición de los invasores; así, nuestro caso es el más extraordinario y complicado.

……

Uncido el pueblo americano al triple yugo de la ignorancia, de la tiranía y del vicio, no hemos podido adquirir ni saber, ni poder, ni virtud. Discípulos de tan perniciosos maestros, las lecciones que hemos recibido y los ejemplos que hemos estudiado son los más destructores. Por el engaño se nos ha dominado más que por la fuerza, y por el vicio se nos ha degradado más bien que por la superstición. La esclavitud es la hija de las tinieblas; un pueblo ignorante es un instrumento ciego de su propia destrucción; la ambición, la intriga, abusan de la credulidad y de la inexperiencia de hombres ajenos de todo conocimiento político, económico o civil: adoptan como realidades las que son puras ilusiones; toman la licencia por la libertad, la traición por el patriotismo, la venganza por la justicia. Semejante a un robusto ciego que, instigado por el sentimiento de sus fuerzas, marcha con la seguridad del hombre más perspicaz, y dando en todos los escollos no puede rectificar sus pasos.

Un pueblo pervertido si alcanza su libertad, muy pronto vuelve a perderla; porque en vano se esforzarán en mostrarle que la felicidad consiste en la práctica de la virtud; que el imperio de las leyes es más poderoso que el de los tiranos, porque son más inflexibles, y todo debe someterse a su benéfico rigor; que las buenas costumbres y no la fuerza son las columnas de las leyes; que el ejercicio de la justicia es el ejercicio de la libertad. Así, legisladores, vuestra empresa es tanto más ímproba cuanto que tenéis que constituir a hombres pervertidos por las ilusiones del error, y por incentivos nocivos. La libertad, dice Rousseau, es un alimento suculento, pero de difícil digestión. Nuestros débiles conciudadanos tendrán que enrobustecer su espíritu mucho antes que logren digerir el saludable nutritivo de la libertad. Entumidos sus miembros por las cadenas, debilitada su vista en las sombras de las mazmorras, y aniquilados por las pestilencias serviles, ¿serán capaces de marchar con pasos firmes hacia el augusto templo de la libertad? ¿Serán capaces de admirar de cerca sus espléndidos rayos y respirar sin opresión el éter puro que allí reina?`,
    signoff: ["Discurso pronunciado ante el Congreso General de Venezuela,", "Simón Bolívar", "Angostura · 15 de febrero de 1819"],
    translation: `当美洲挣脱西班牙君主国的统治，它发现自己像当年的罗马帝国——那庞大的躯体崩解，散落在旧世界之中。此后每一块分离出来的部分，都依照自身的位置或利益成为一个独立的国家；不同之处在于，罗马帝国那些肢体后来又重建了它们最初的联合。而我们，连昔日之我的痕迹都未能保留：我们既不是欧洲人，也不是印第安人，而是介乎原住民与西班牙人之间的一种中间物。我们生为美洲人，却享有欧洲人的权利，于是陷于这样的冲突之中：既要向原住民争夺占有的名分，又要顶着入侵者的反对，守住我们出生的土地。我们的处境，因此最为奇特，也最为复杂。

……

美洲人民被套上无知、暴政与恶习的三重枷锁，既未能获得知识，也未能获得力量，也未能获得德行。师从如此有害的教师，我们所得的教训、所学的榜样，都是最具毁灭性的。我们被欺瞒甚于被武力所制，被恶习败坏甚于被迷信所困。奴役是黑暗之女；一个无知的民族，是自我毁灭的盲目工具；野心与阴谋，利用那些于政治、经济、公民之识一无所知者的轻信与无经验：把纯粹的幻象当成现实，把放纵当成自由，把背叛当成爱国，把复仇当成正义。这就像一个强壮的盲人，因感觉到自身的力量，便像眼力最明的人那样大步前行，却处处碰壁，无法校正自己的脚步。

一个堕落的民族，纵然获得了自由，也很快就再度失去；因为人们再怎么向它说明——幸福在于践行德行；法律的统治比暴君的统治更有力量，因为法律更为刚硬，一切都须服从它有益的严厉；良风美俗而非强力，才是法律的支柱；行使正义就是行使自由——都是徒劳。因此，立法者们，你们的任务愈发艰难：你们要为之立法的，正是被谬误的幻象和有害的诱因败坏了的人。自由，如卢梭所言，是一种滋养丰盛却难以消化的食物。我们孱弱的同胞，必须先大大强健自己的精神，才消化得了自由这有益的营养。他们的肢体被锁链箍得僵硬，目光在地牢的阴影中变得衰弱，又被奴役的瘟疫摧折殆尽——他们可还能迈着坚定的步伐，走向自由的庄严殿堂？可还能近观它灿烂的光芒，在那里自由地呼吸纯净的以太？`,
    signoffT: ["演讲于委内瑞拉国民议会，", "西蒙·玻利瓦尔", "安戈斯图拉 · 1819年2月15日"],
    publishAt: "2026-10-23T20:00:00+08:00",
  },

  {
    id: "guoqinlun-shang",
    cat: "classics",
    title: "过秦论（上）",
    subtitle: "",
    author: "贾谊",
    authorShort: "贾谊",
    authorRole: "西汉政论家、文学家 · 世称贾生 · 前200 — 前168",
    era: "约汉文帝年间 · 西汉 · 长安",
    excerpt: "以秦之兴亡，论“仁义不施”的千古政论名篇。",
    authorIntro: [
      "贾谊（前200 — 前168），洛阳人，西汉初年政治家、文学家。年少即以能诵诗书、善属文闻名郡中，世称贾生；又因曾为长沙王太傅，后人亦称贾长沙、贾太傅。",
      "汉文帝初年，由河南守吴公举荐召为博士，一年之内超迁太中大夫，力主改正朔、易服色、重农抑商、削弱诸侯，因触犯权贵而遭排挤，出为长沙王太傅，后改任梁怀王太傅。梁怀王坠马而死，贾谊自责忧愤，年三十三而卒。其政论与辞赋并称，以《过秦论》《陈政事疏》《论积贮疏》《吊屈原赋》《鵩鸟赋》最为知名，后人辑有《贾长沙集》。",
    ],
    facts: [
      ["生卒", "公元前200 — 前168 · 洛阳"],
      ["仕历", "博士 · 太中大夫 · 长沙王太傅"],
      ["著述", "《新书》十卷 · 政论文与辞赋并称"],
    ],
    background: [
      { h: "近秦之世，论秦之失", p: "汉兴距秦亡不过数十年，总结秦朝速亡的教训，是汉初政论的中心议题。贾谊作《过秦论》，以秦自孝公至二世百余年的兴亡为线索，层层推进，归结出“仁义不施而攻守之势异也”的结论。" },
      { h: "借“过秦”以警汉廷", p: "汉文帝时号称“文景之治”前期，实则土地兼并、诸侯坐大、刑罚苛重等危机已现。贾谊借“过秦”之名，实为向文帝进言改革时弊，主张“去就有序，变化因时”，以求汉室长久安定。" },
      { h: "史论名篇的流传", p: "上篇流传最广，历代选本多取此篇；《新书》题作“过秦”，《文选》收之，列为“论”类之首。后世论秦、论兴亡的文章多承其绪，唐杜牧《阿房宫赋》即以“后人哀之而不鉴之”寄寓同慨。" },
    ],
    caveat: [
      "《过秦论》通行分上、中、下三篇（《文选》六臣注称“谊有过秦三篇，论秦之过，此第一篇也”），今传《新书》卷一则题作《过秦》上、下两篇。本站所收为流传最广的上篇；中篇论秦二世之失，下篇论子婴之无力救亡，均未收。",
      "贾谊生年通行作公元前200年；亦有学者据《史记》“年三十三”及贾谊年谱推为公元前199年生，本站从通行的前200年说。",
      "本篇创作年代史无定论：一说作于汉文帝前元元年（前179），一说在前元二年（前178）前后。文中凡言年代一律加“约”字。",
      "本篇传世有《史记》《汉书》《新书》《文选》诸本，字句互有出入。本站正文取通行文本，个别异文如“锄耰棘矜”（或作“锄櫌棘矜”）、“序八州”（《文选》作“招八州”）、“向时之士”（《新书》作“乡时之士”）、“云集响应”（有校勘本作“云集回响”），一并注明备参。",
    ],
    lang: "zh",
    type: "prose",
    original: `秦孝公据崤函之固，拥雍州之地，君臣固守以窥周室，有席卷天下，包举宇内，囊括四海之意，并吞八荒之心。当是时也，商君佐之，内立法度，务耕织，修守战之具；外连衡而斗诸侯。于是秦人拱手而取西河之外。

孝公既没，惠文、武、昭襄蒙故业，因遗策，南取汉中，西举巴、蜀，东割膏腴之地，北收要害之郡。诸侯恐惧，会盟而谋弱秦，不爱珍器重宝肥饶之地，以致天下之士，合从缔交，相与为一。当此之时，齐有孟尝，赵有平原，楚有春申，魏有信陵。此四君者，皆明智而忠信，宽厚而爱人，尊贤而重士，约从离衡，兼韩、魏、燕、楚、齐、赵、宋、卫、中山之众。于是六国之士，有甯越、徐尚、苏秦、杜赫之属为之谋，齐明、周最、陈轸、召滑、楼缓、翟景、苏厉、乐毅之徒通其意，吴起、孙膑、带佗、倪良、王廖、田忌、廉颇、赵奢之伦制其兵。尝以十倍之地，百万之众，叩关而攻秦。秦人开关延敌，九国之师，逡巡而不敢进。秦无亡矢遗镞之费，而天下诸侯已困矣。于是从散约败，争割地而赂秦。秦有余力而制其弊，追亡逐北，伏尸百万，流血漂橹。因利乘便，宰割天下，分裂山河。强国请服，弱国入朝。延及孝文王、庄襄王，享国之日浅，国家无事。

及至始皇，奋六世之余烈，振长策而御宇内，吞二周而亡诸侯，履至尊而制六合，执敲扑而鞭笞天下，威振四海。南取百越之地，以为桂林、象郡；百越之君，俯首系颈，委命下吏。乃使蒙恬北筑长城而守藩篱，却匈奴七百余里。胡人不敢南下而牧马，士不敢弯弓而报怨。于是废先王之道，焚百家之言，以愚黔首；隳名城，杀豪杰，收天下之兵，聚之咸阳，销锋镝，铸以为金人十二，以弱天下之民。然后践华为城，因河为池，据亿丈之城，临不测之渊，以为固。良将劲弩守要害之处，信臣精卒陈利兵而谁何。天下已定，始皇之心，自以为关中之固，金城千里，子孙帝王万世之业也。

始皇既没，余威震于殊俗。然陈涉瓮牖绳枢之子，氓隶之人，而迁徙之徒也；才能不及中人，非有仲尼、墨翟之贤，陶朱、猗顿之富；蹑足行伍之间，而倔起阡陌之中，率疲弊之卒，将数百之众，转而攻秦，斩木为兵，揭竿为旗，天下云集响应，赢粮而景从。山东豪俊遂并起而亡秦族矣。

且夫天下非小弱也，雍州之地，崤函之固，自若也。陈涉之位，非尊于齐、楚、燕、赵、韩、魏、宋、卫、中山之君也；锄耰棘矜，非铦于钩戟长铩也；谪戍之众，非抗于九国之师也；深谋远虑，行军用兵之道，非及向时之士也。然而成败异变，功业相反，何也？试使山东之国与陈涉度长絜大，比权量力，则不可同年而语矣。然秦以区区之地，致万乘之势，序八州而朝同列，百有余年矣；然后以六合为家，崤函为宫；一夫作难而七庙隳，身死人手，为天下笑者，何也？仁义不施而攻守之势异也。`,
    translation: `秦孝公占据着崤山、函谷关那样险要的地势，拥有雍州的土地，君臣上下牢固地防守着，伺机夺取周王室的天下；怀着像卷席子那样吞并天下、像打包那样囊括宇内、像装口袋那样收取四海，并吞四面八方的野心。在这时，商鞅辅佐他，对内确立法令制度，致力于耕织生产，修造攻守的器械；对外施行连横之策，挑动诸侯互相争斗。于是秦人轻而易举地取得了黄河以西的土地。

秦孝公死后，惠文王、武王、昭襄王承继先前的基业，遵循留下来的既定方略，向南夺取汉中，向西攻取巴、蜀，向东割取肥沃之地，向北收取要害的郡县。诸侯恐惧起来，会盟结约谋划削弱秦国，不惜拿出珍奇宝器和肥饶土地，来招揽天下贤士，用合纵之策缔结盟约，彼此结为一体。在这时候，齐国有孟尝君，赵国有平原君，楚国有春申君，魏国有信陵君。这四位封君，都明智而忠信，宽厚而爱人，尊贤而重士；他们相约合纵、拆散连横，聚集了韩、魏、燕、楚、齐、赵、宋、卫、中山的军队。在这时，六国的士人，有甯越、徐尚、苏秦、杜赫等人为诸侯出谋划策，有齐明、周最、陈轸、召滑、楼缓、翟景、苏厉、乐毅等人为诸侯沟通意见，有吴起、孙膑、带佗、倪良、王廖、田忌、廉颇、赵奢等人为诸侯统带军队。他们曾以十倍于秦的土地、上百万的兵众，叩击函谷关攻打秦国。秦人打开关门迎敌深入，九国的军队却迟疑徘徊不敢前进。秦国没有耗费一支箭、一个箭头，天下的诸侯就已困乏了。于是合纵离散、盟约破裂，诸侯争相割地贿赂秦国。秦国有余力来制服他们的疲弊，一路追逐逃亡、驱逐败兵，以致尸横百万、流的血能漂起盾牌；趁着有利形势，宰割天下，分裂山河。强国请求归服，弱国前来朝拜。延续到孝文王、庄襄王，他们在位时日短促，国家没有大事。

到了秦始皇，他发扬六代延续下来的功业，挥动长鞭来驾驭天下，吞并东、西二周而灭掉诸侯，登上至尊之位而控制天地四方，用严刑拷打来鞭笞天下，威震四海。向南攻取百越之地，设为桂林郡、象郡；百越的君长低着头、颈上系着绳索，把性命交付给秦的狱吏。于是派蒙恬向北修筑长城，镇守边境，把匈奴击退七百余里。胡人不敢南下放马，六国之人不敢弯弓报仇。于是他废除先王的治国之道，烧毁诸子百家的著作，以愚弄百姓；毁坏名城，杀害豪杰，收缴天下的兵器，集中到咸阳，销熔刀锋箭头，铸成十二个铜人，以削弱天下百姓的反抗力量。然后凭华山作城墙，借黄河作护城河，据守亿丈高的城，下临深不可测的渊，以此为险固。良将手持强弩，把守要害之处；忠信之臣、精锐之士，摆开锋利的兵器盘查行人。天下已经安定，始皇心里认为关中的险固、千里的金城汤池，是子子孙孙称帝称王、传之万世的基业。

始皇死了以后，余威还震慑着异域。然而陈涉不过是破瓮作窗、草绳系枢的寒门子弟，是氓、隶一类的人，是被征发迁徙戍边的人；才能比不上中等之人，没有仲尼、墨翟那样的贤能，也没有陶朱、猗顿那样的富有；他插足在行伍之间，从田间突然起事，率领疲惫困乏的士卒，带着几百个人，回身攻打秦朝；砍下树木作兵器，举起竹竿作旗帜，天下人像云一样聚集、像回声一样应和，背着粮食如影随形地跟从。崤山以东的英雄豪杰于是一同起事，灭掉了秦朝的宗族。

况且那天下并没有变小变弱，雍州的土地、崤函的险固，还和从前一样。陈涉的地位，不比齐、楚、燕、赵、韩、魏、宋、卫、中山的君主更尊贵；锄头木棍，不比钩戟长矛更锋利；被贬谪戍边的人众，不能与九国的大军相抗；深谋远虑、行军用兵的本领，也比不上从前的谋士良将。可是成功与失败发生了逆转，功业恰恰相反，这是为什么呢？假使让崤山以东的诸侯国跟陈涉比一比长短大小、掂一掂权力分量，那根本不能相提并论。然而秦凭小小的地方，发展到拥有万辆兵车的大国之势，统辖八州而使同列的诸侯来朝，已有一百多年了；然后把天地四方当作自家，把崤函当作宫室；可一旦有人发难，七代宗庙就毁了，国君死在别人手里，被天下人耻笑，这是为什么呢？就因为不施行仁义，攻与守的形势便完全不同了。`,
    publishAt: "2026-10-26T20:00:00+08:00",
  },

  {
    id: "lisao-jiexuan",
    cat: "poetry",
    title: "离骚（节选）",
    subtitle: "",
    author: "屈原",
    authorShort: "屈原",
    authorRole: "战国时期楚国诗人、政治家 · “楚辞”的创立者 · 约 前340 — 前278",
    era: "战国晚期 · 楚国 · 作年无定论",
    excerpt: "帝高阳之苗裔兮，朕皇考曰伯庸。",
    authorIntro: [
      "屈原（约前340 — 前278），名平，字原，战国时期楚国诗人、政治家。芈姓屈氏，与楚王同姓，楚国丹阳（今湖北秭归）人。早年受楚怀王信任，曾任左徒、三闾大夫，参与内政外交；他主张举贤授能、修明法度，对外力主联齐抗秦。",
      "因遭楚国旧贵族排挤谗毁，他先后被疏远，又被放逐于汉北与沅湘之间。楚顷襄王二十一年（前278），秦将白起攻破郢都，屈原悲愤之中自沉于汨罗江。他开创“楚辞”一体，代表作有《离骚》《九歌》《九章》《天问》等；《离骚》与《诗经》的“国风”并称“风骚”。1953年，世界和平理事会将他列为当年纪念的世界四大文化名人之一。",
    ],
    facts: [
      ["身世", "芈姓，屈氏 · 名平，字原"],
      ["仕历", "楚怀王时曾任左徒、三闾大夫"],
      ["辞世", "约前278年 · 自沉于汨罗江"],
    ],
    background: [
      { h: "楚之同姓，仕于怀王", p: "屈原与楚王同姓，出身楚国贵族。《史记》说他“博闻强志，明于治乱，娴于辞令”，早年深受楚怀王信任，任左徒，“入则与王图议国事，以出号令；出则接遇宾客，应对诸侯”。" },
      { h: "信而见疑，忠而被谤", p: "他主张举贤授能、修明法度，对外联齐抗秦，因此触怒了楚国的旧贵族。上官大夫等人进谗诋毁，怀王怒而疏远了他；顷襄王时，他又被放逐到沅、湘一带。司马迁说他“信而见疑，忠而被谤”，并以为《离骚》之作“盖自怨生”。" },
      { h: "三百七十余句的长诗", p: "《离骚》是中国古代最长的抒情诗，全篇三百七十余句、两千四百余字。前半自述身世、修养与抱负，后半借上天下地的神游写求索与去留，通篇以“香草美人”为比兴。本篇所选，是它的开篇二十四句。" },
    ],
    caveat: [
      "本篇为节选。全篇三百七十余句、两千四百余字，各家统计因是否计入语气词“兮”、是否计入“曰黄昏以为期兮，羌中道而改路”两句衍文而异：通作 373 句、2490 字，另有作 373 句、2477 字（除两句衍文）与 372 句、2464 字者。本站仅取开篇二十四句，起“帝高阳之苗裔兮”，止“来吾道夫先路”；自“昔三后之纯粹兮”直至篇末，均未收录。",
      "《离骚》作年无定论：一说作于楚怀王时屈原遭谗被疏之后，一说作于楚顷襄王时被放逐江南之后，又有“怀王末、顷襄王初”与“始作于怀王时、成于顷襄王初”等说；汉人多谓作于放逐之后，亦非定论。作地同样不能确指，故本篇年代一律加“约”字，不指实年。",
      "屈原生卒年无确考。生年通行作约公元前 340 年（《辞海》等工具书所用之说），另有前 339 年、前 343 年等推算；其依据主要是《离骚》“摄提贞于孟陬兮，惟庚寅吾以降”所记的寅年寅月寅日，各家推步不同，结果遂异。卒年通行作公元前 278 年，即楚顷襄王二十一年秦将白起攻破郢都之年，另有前 277 年、前 283 年前后等说，古今歧异甚多。本站从通行之说，生年加“约”字。",
      "“离骚”之义古今说法不一：司马迁释为“离忧”（《史记·屈原贾生列传》：“离骚者，犹离忧也”），班固释为“遭忧”（《离骚赞序》：“离，犹遭也；骚，忧也”），王逸释为“别愁”（《楚辞章句》：“离，别也；骚，愁也”），近人游国恩则据《大招》“楚《劳商》只”推论“离骚”本为楚国古乐曲名。诸说均言之成理，本站并陈，不采一说为定论。旧注训释亦属推定：《史记》只载屈原“名平”，王逸以《离骚》“名余曰正则兮，字余曰灵均”之“正则”为“平”、“灵均”为“原”，后世遂通称其字为原；“恐美人之迟暮”一语，“美人”旧注以为喻指楚怀王，亦有自喻、泛指等解。",
      "文本异文：“不抚壮而弃秽兮，何不改乎此度”，宋洪兴祖《楚辞补注》底本作“何不改此度”，校记称一本作“何不改乎此度也”，《文选》作“何不改其此度”；“乘骐骥以驰骋兮，来吾道夫先路”，《文选》作“导夫先路”，一本句末有“也”字。句末标点为现代整理者所加，各家互有出入，本站正文从通行选本。",
      "屈原所任左徒、三闾大夫两职的出处、职掌与先后，须分别看：《史记·屈原贾生列传》称他“为楚怀王左徒”，未言三闾大夫；王逸《楚辞章句·离骚经序》则称他“仕于怀王，为三闾大夫”，并谓“三闾之职，掌王族三姓，曰昭、屈、景”。两职孰先孰后史无明文，一说先任左徒而后黜为三闾大夫，一说相反。其被放逐的次数与地点亦有异说（汉北、江南陵阳、沅湘等，一说两次放逐，一说仅一次），本站只作概括表述。",
      "屈原故里所在之“楚国丹阳”，地望古今有异说；本站取通行的秭归说，所据主要是东晋袁山松《宜都山川记》、庾仲雍《荆州记》等旧籍以秭归为屈原乡里的记载，及后世“秭归乐平里”之说。",
      "“世界四大文化名人”的年份口径：世界和平理事会相关决议作出于 1952 年底（中文文献亦有系于 1952 年者），纪念活动在 1953 年举行，即屈原逝世 2230 周年；本站取纪念年份 1953 年。",
    ],
    lang: "zh",
    type: "verse",
    originalLabel: "原文（节选）",
    translationLabel: "白话译文",
    original: `帝高阳之苗裔兮，朕皇考曰伯庸。
摄提贞于孟陬兮，惟庚寅吾以降。
皇览揆余初度兮，肇锡余以嘉名。
名余曰正则兮，字余曰灵均。
纷吾既有此内美兮，又重之以修能。
扈江离与辟芷兮，纫秋兰以为佩。
汩余若将不及兮，恐年岁之不吾与。
朝搴阰之木兰兮，夕揽洲之宿莽。
日月忽其不淹兮，春与秋其代序。
惟草木之零落兮，恐美人之迟暮。
不抚壮而弃秽兮，何不改乎此度？
乘骐骥以驰骋兮，来吾道夫先路！`,
    translation: `我的远祖是古帝高阳氏啊，我已故的父亲名为伯庸。正当太岁在寅之年、正月之月啊，我在庚寅那一天降生。父亲端量我初生的时节啊，便赐我以美好的名：为我取名叫“正则”啊，为我取字叫“灵均”。

我既有这内在的美好资质啊，又加上修洁的才能。肩披江离与僻处的白芷啊，把秋兰编结为佩。时光汩汩流去，我总像赶不上啊，怕的是年岁不肯等我。清晨我攀上山坡采木兰啊，傍晚又在洲渚间摘宿莽。日月匆匆不停留啊，春与秋依次更迭。想到草木已经凋零啊，我怕那美人也要迟暮。何不趁着年壮抛弃污秽啊，何不改变这般法度？乘上骏马纵情驰骋啊，来罢，我在前头为你开路！`,
    publishAt: "2026-10-28T20:00:00+08:00",
  },

  {
    id: "pushkin-speech",
    cat: "speeches",
    title: "普希金纪念演说（节选）",
    subtitle: "Пушкинская речь",
    author: "费奥多尔·米哈伊洛维奇·陀思妥耶夫斯基",
    authorShort: "陀思妥耶夫斯基",
    authorInitial: "D",
    authorRole: "俄国作家 · 1821 — 1881",
    era: "1880年6月8日（旧历）· 莫斯科",
    excerpt: "诗人最高的本领，是彻底变成另一个民族",
    authorIntro: [
      "俄国小说家。1821 年生于莫斯科一个军医家庭。第一部长篇小说《穷人》1845 年写成、次年发表，获涅克拉索夫与别林斯基激赏。",
      "1849 年因参加彼得拉舍夫斯基小组被判处死刑，临刑前改判苦役，此后在西伯利亚度过约十年苦役与流放生活。代表作有《罪与罚》《白痴》《群魔》《卡拉马佐夫兄弟》。1880 年他在莫斯科普希金纪念活动上发表这篇演说，次年 2 月病逝于圣彼得堡。",
    ],
    facts: [
      ["生于", "1821年11月11日 · 莫斯科"],
      ["代表作", "《罪与罚》《卡拉马佐夫兄弟》"],
      ["辞世", "1881年2月9日 · 圣彼得堡"],
    ],
    background: [
      { h: "为一座铜像聚起的人", p: "1880 年 6 月，莫斯科为普希金纪念碑落成举行连续数日的纪念活动。久居国外的屠格涅夫也赶回参加，并在前一天作了一场同样受人瞩目的演说。" },
      { h: "一场演说压倒全场", p: "6 月 8 日，陀思妥耶夫斯基在俄罗斯语文爱好者学会的会议上宣读这篇演说。据在场者记述，演说将尽时厅内哭声与欢呼并起，有人当场晕倒。" },
      { h: "刊入《作家日记》", p: "演说随即引发论战，屠格涅夫等人认为他误读了普希金。同年 8 月，他把演说连同答辩一并刊入自己主编的《作家日记》，那一年只出了这一期。" },
    ],
    caveat: [
      "俄国当时通行儒略历（旧历）。俄语文献所记演说日期 6 月 8 日为旧历，公历为 6 月 20 日；本篇沿用旧历记日，并在「时间」栏注明。作者生卒则依通行的公历记日——1821 年 11 月 11 日、1881 年 2 月 9 日，其旧历分别为 10 月 30 日与 1 月 28 日。",
      "原文据《作家日记·1880 年》所收《普希金（随笔）》文本，参俄语维基文库转录。该电子文本未附扫描件校勘，个别标点与早期刊本可能有出入。",
      "本篇为节选。中间删去作者论《瘟疫中的宴席》《古兰经模仿》与《埃及之夜》的段落，以「……」标示；删节只为篇幅，保留部分未改字句。",
      "「普世感应」（всемирная отзывчивость）是陀思妥耶夫斯基自铸的说法，汉译有「普世回应性」「全人类性」等多种，本篇统一作「普世感应」。",
      "演说后半另有关于俄罗斯民族「普世使命」的论述，后世评价分歧很大，苏联时期学界多有批评。本篇节选止于论诗艺的部分，未涉其后半的宗教与民族主张。",
    ],
    lang: "ru",
    type: "prose",
    originalLabel: "俄文原文（节选）",
    translationLabel: "中文译文",
    original: `В самом деле, в европейских литературах были громадной величины художественные гении — Шекспиры, Сервантесы, Шиллеры. Но укажите хоть на одного из этих великих гениев, который бы обладал такою способностью всемирной отзывчивости, как наш Пушкин. И эту-то способность, главнейшую способность нашей национальности, он именно разделяет с народом нашим, и тем, главнейше, он и народный поэт. Самые величайшие из европейских поэтов никогда не могли воплотить в себе с такой силой гений чужого, соседнего, может быть, с ними народа, дух его, всю затаенную глубину этого духа и всю тоску его призвания, как мог это проявлять Пушкин. Напротив, обращаясь к чужим народностям, европейские поэты чаще всего перевоплощали их в свою же национальность и понимали по-своему. Даже у Шекспира его итальянцы, например, почти сплошь те же англичане. Пушкин лишь один изо всех мировых поэтов обладает свойством перевоплощаться вполне в чужую национальность. Вот сцены из «Фауста», вот «Скупой рыцарь» и баллада «Жил на свете рыцарь бедный». Перечтите «Дон-Жуана», и если бы не было подписи Пушкина, вы бы никогда не узнали, что это написал не испанец.

……

Нет, положительно скажу, не было поэта с такою всемирною отзывчивостью, как Пушкин, и не в одной только отзывчивости тут дело, а в изумляющей глубине ее, а в перевоплощении своего духа в дух чужих народов, перевоплощении почти совершенном, а потому и чудесном, потому что нигде ни в каком поэте целого мира такого явления не повторилось. Это только у Пушкина, и в этом смысле, повторяю, он явление невиданное и неслыханное, а по-нашему, и пророческое, ибо… ибо тут-то и выразилась наиболее его национальная русская сила, выразилась именно народность его поэзии, народность в дальнейшем своем развитии, народность нашего будущего, таящегося уже в настоящем, и выразилась пророчески. Ибо что такое сила духа русской народности как не стремление ее в конечных целях своих ко всемирности и ко всечеловечности? Став вполне народным поэтом, Пушкин тотчас же, как только прикоснулся к силе народной, так уже и предчувствует великое грядущее назначение этой силы. Тут он угадчик, тут он пророк.`,
    translation: `的确，欧洲文学中出现过体量巨大的艺术天才——莎士比亚们、塞万提斯们、席勒们。可是请指出，这些伟大的天才中有哪一位，具备像我们的普希金这样的普世感应之力。而这种能力，我们民族最主要的禀赋，他恰恰与我国人民共有；也正因此，他首先是人民的诗人。欧洲最伟大的诗人，从来不能像普希金所做到的那样，把异族的——也许是邻族的——天才如此有力地化为自身，把它的精神、这精神全部隐伏的深度、它对自己使命的全部忧思，一并纳入胸中。相反，欧洲诗人转向异族时，多半把它们重新化为自己的民族性，按自己的方式去理解。即便莎士比亚笔下的意大利人，也几乎无一不是英国人。全世界诗人中，唯有普希金具有彻底化为异族的能力。请看《浮士德》的几场，请看《吝啬的骑士》和谣曲《世上曾有一位可怜的骑士》。请再读一遍《唐·璜》：倘若没有普希金的署名，你决不会知道这不是西班牙人写的。

……

不，我要肯定地说：从来不曾有过像普希金这样具备普世感应的诗人；而且事情不只在感应本身，更在感应的惊人深度，更在把自己的精神化为异族的精神——这转化近乎圆满，因而堪称神奇，因为遍观全世界的诗人，这样的现象从未再现。这只有普希金；在这个意义上，我再说一遍，他是前所未见、前所未闻的现象，而依我们看，还是预言性的现象，因为……因为正是在这里，他最充分地显出了他那民族的俄罗斯的力量，显出了他诗歌的人民性——那种尚在发展之中的、属于我们未来而已经潜藏于当下的人民性，并且是作为预言显出来的。因为，俄罗斯人民的精神力量究竟是什么？难道不正是它在最终目标上趋向普世、趋向全人类的那种追求吗？普希金一旦成为彻底的人民诗人，刚一触到人民的力量，便已预感到这力量伟大的未来使命。在这里，他是猜度者；在这里，他是先知。`,
    publishAt: "2026-10-30T20:00:00+08:00",
  },

  {
    id: "shishuo",
    cat: "classics",
    title: "师说",
    subtitle: "",
    author: "韩愈",
    authorShort: "韩愈",
    authorRole: "唐代文学家、思想家 · 世称韩昌黎、韩文公 · 768 — 824",
    era: "唐德宗贞元十八年（802） · 长安国子监",
    excerpt: "「道之所存，师之所存也」——驳「耻学于师」的千古名篇。",
    authorIntro: [
      "韩愈（768 — 824），字退之，河南河阳（今河南孟州）人。因韩姓郡望在昌黎，自署「昌黎韩愈」，世称韩昌黎；官至吏部侍郎，又称韩吏部；卒谥「文」，故称韩文公。唐代古文运动的倡导者，与柳宗元并称「韩柳」，明人列为「唐宋八大家」之首。",
      "三岁丧父，随长兄韩会贬官岭表；韩会卒后，由嫂郑氏抚育成人。贞元八年（792）登进士第，仕途屡起屡蹶：贞元十九年（803）官监察御史，因上疏论事贬阳山令；元和十四年（819）上《论佛骨表》谏迎佛骨，贬潮州刺史。后官至吏部侍郎，长庆四年（824）卒，年五十七，追赠礼部尚书。苏轼称其「文起八代之衰，而道济天下之溺」，著有《昌黎先生集》。",
    ],
    facts: [
      ["生卒", "768 — 824 · 河阳（今河南孟州）"],
      ["仕历", "贞元八年进士 · 国子监四门博士 · 吏部侍郎"],
      ["文统", "唐宋八大家之首 · 与柳宗元并称「韩柳」"],
    ],
    background: [
      { h: "耻学于师的时代", p: "魏晋以来门阀余绪未消，士大夫多重家法而轻师授。柳宗元《答韦中立论师道书》记当时风气：「由魏晋氏以下，人益不事师。今之世不闻有师，有辄哗笑之，以为狂人。」" },
      { h: "抗颜而为师", p: "韩愈时任国子监四门博士，收召后学，公然以师自任，被士流目为「狂人」。柳宗元说他「奋不顾流俗，犯笑侮」。《师说》既为弟子李蟠而作，也是对这番非议的公开回应。" },
      { h: "散体对骈文的反拨", p: "六朝以来骈文盛行，讲究对偶声律而疏于内容。韩愈主张回到先秦两汉的散体，以文明道。《师说》通篇散句单行、层层顶接，正是古文运动主张的一次实作。" },
    ],
    caveat: [
      "「传道受业解惑」的「受」字，坊间选本多改作「授」。世彩堂《韩集》以下诸本，「受」「授」二字前后不同；《古文眉诠》《唐宋文醇》等选本径改上句为「授」。吴小如《韩文琐札》辨之：上句承「古之学者」而言，谓学者承受古人之业，当作「受」；下文「授之书而习其句读」才是授与之义，不得以下文改上文。本站正文从「受」。",
      "本篇系年，方成珪《昌黎先生诗文年谱》定为贞元十八年（802），另有「贞元十七年至十八年（801 — 802）」之说。两说并存，本站取贞元十八年。",
      "四门博士的品级，《旧唐书·职官志三》明载「四门博士三人，正七品上」。今人转述多误作「从七品」，本站以原典为准，正文不取误说。",
      "韩愈贬阳山之由，史传记载不一：《新唐书》本传谓其「上疏极论宫市，德宗怒」，另有系于《论天旱人饥状》之说。故正文只作「上疏论事」，不指实某一事。",
      "韩愈籍贯旧有三说：《旧唐书》本传作「昌黎人」，《新唐书》本传作「邓州南阳人」，今通行作河阳（今河南孟州）。「昌黎」是韩姓郡望，不是他的生地；世称「韩昌黎」「昌黎先生」，是称郡望而非称籍贯。本站从中国大百科全书与通行说，作河阳（今河南孟州）。",
    ],
    lang: "zh",
    type: "prose",
    original: `古之学者必有师。师者，所以传道受业解惑也。人非生而知之者，孰能无惑？惑而不从师，其为惑也，终不解矣。

生乎吾前，其闻道也固先乎吾，吾从而师之；生乎吾后，其闻道也亦先乎吾，吾从而师之。吾师道也，夫庸知其年之先后生于吾乎？是故无贵无贱，无长无少，道之所存，师之所存也。

嗟乎！师道之不传也久矣！欲人之无惑也难矣！古之圣人，其出人也远矣，犹且从师而问焉；今之众人，其下圣人也亦远矣，而耻学于师。是故圣益圣，愚益愚。圣人之所以为圣，愚人之所以为愚，其皆出于此乎？

爱其子，择师而教之；于其身也，则耻师焉，惑矣。彼童子之师，授之书而习其句读者，非吾所谓传其道、解其惑者也。句读之不知，惑之不解，或师焉，或不焉，小学而大遗，吾未见其明也。

巫医乐师百工之人，不耻相师；士大夫之族，曰师曰弟子云者，则群聚而笑之。问之，则曰：「彼与彼年相若也，道相似也。位卑则足羞，官盛则近谀。」呜呼！师道之不复，可知矣。巫医乐师百工之人，君子不齿，今其智乃反不能及，其可怪也欤！

圣人无常师。孔子师郯子、苌弘、师襄、老聃。郯子之徒，其贤不及孔子。孔子曰：「三人行，则必有我师。」是故弟子不必不如师，师不必贤于弟子，闻道有先后，术业有专攻，如是而已。

李氏子蟠，年十七，好古文，六艺经传皆通习之，不拘于时，学于余。余嘉其能行古道，作《师说》以贻之。`,
    translation: `古代求学的人一定有老师。老师，是用来传授道理、承受学业、解答疑惑的。人不是生下来就懂得道理的，谁能没有疑惑？有了疑惑却不向老师求教，那些疑惑就终究解不开了。

出生在我之前的人，他懂得道理本来就早于我，我跟随他，以他为老师；出生在我之后的人，他懂得道理如果也早于我，我也跟随他，以他为老师。我学的是道理，哪里用得着管他的年纪比我大还是比我小呢？所以无论地位贵贱，无论年纪长少，道理在哪里，老师就在哪里。

唉！从师求学的风气不流传已经很久了！想要人们没有疑惑，也就难了。古代的圣人，他们超出一般人很远了，尚且跟从老师求教；如今的一般人，他们低于圣人也很远了，却以向老师学习为耻。所以圣人更加圣明，愚人更加愚昧。圣人之所以成为圣人，愚人之所以成为愚人，大概都出在这里吧？

疼爱自己的孩子，就选择老师来教他；对于自己，却以从师为耻，真是糊涂啊。那些孩子的老师，是教他读书、帮他熟悉断句的人，不是我所说的传授道理、解答疑惑的人。不懂断句，去请教老师；有疑惑解不开，却不请教，学了小的、丢了大的，我看不出他明白在哪里。

巫祝、医师、乐师和各种工匠，不以互相学习为耻；士大夫一流，一听到称老师、称弟子的，就聚在一处讥笑。问他们为什么，就说：「他和他年纪相仿，学问也差不多。以地位低的人为师，就感到羞耻；以官职高的人为师，就近于谄媚。」唉！从师的风气不能恢复，也就可想而知了。巫祝、医师、乐师和各种工匠，是君子不屑一提的，如今士大夫的见识反而赶不上他们，这真是奇怪啊！

圣人没有固定的老师。孔子曾以郯子、苌弘、师襄、老聃为师。郯子这些人，他们的贤能都比不上孔子。孔子说：「几个人同行，其中一定有可以做我老师的人。」所以学生不一定不如老师，老师不一定比学生贤能，懂得道理有先有后，学问技艺各有专长，如此罢了。

李家的孩子李蟠，十七岁，喜好古文，六经的经文和传文都普遍地学习过，不受时俗的拘束，来向我学习。我赞许他能践行古人从师的途径，写这篇《师说》赠送给他。`,
    publishAt: "2026-11-02T20:00:00+08:00",
  },

  {
    id: "shengshengman",
    cat: "poetry",
    title: "声声慢 · 寻寻觅觅",
    subtitle: "",
    author: "李清照",
    authorShort: "李清照",
    authorRole: "宋代女词人 · 号易安居士 · 1084 — 约 1155",
    era: "南宋 · 南渡之后，作年无定论",
    excerpt: "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。",
    authorIntro: [
      "李清照（1084 — 约 1155），号易安居士，齐州章丘（今山东济南章丘区）人。父李格非为北宋文学家，官至礼部员外郎，以文章受知于苏轼；她生长在这样的书香门第，建中靖国元年（1101）十八岁时嫁与太学生赵明诚。",
      "婚后她与赵明诚共事金石书画的搜求校勘，助成《金石录》三十卷。靖康之变后南渡，夫死家亡，所藏散尽。其词前期清丽，后期沉郁，宋人称之为“易安体”；所著《词论》主张词“别是一家”，是词史上影响深远的一篇专论。词集《漱玉词》系后人所辑，存词四十余首。",
    ],
    facts: [
      ["生于", "1084年 · 齐州章丘（今山东济南章丘区）"],
      ["词集", "《漱玉词》系后人所辑 · 存词四十余首"],
      ["词调", "《声声慢》双调九十七字 · 前后片各五仄韵"],
    ],
    background: [
      { h: "归来堂里的十年", p: "建中靖国元年（1101），十八岁的李清照嫁给太学生赵明诚。大观元年（1107），赵明诚之父赵挺之罢相，未几病卒；蔡京借机构陷赵家，赵明诚一度下狱。次年夫妇归青州故里，一住十年。他们取陶潜“归去来兮”之意，名其藏书治学之所曰“归来堂”，李清照自号易安居士。《金石录后序》追记那段日子：每饭罢，坐归来堂烹茶，指堆积书史，言某事在某书某卷第几页第几行，以中否角胜负，为饮茶先后。" },
      { h: "靖康之后的南渡", p: "靖康之变后北宋覆亡。建炎元年（1127）三月，赵明诚奔母丧南下江宁；李清照从青州旧藏中反复汰择，仍载书十五车，渡淮、渡江而南。青州故第尚锁书册十余屋，原拟次年春再以舟载，而同年十二月金人陷青州，尽为煨烬。建炎三年（1129）八月十八日，赵明诚病卒于建康。" },
      { h: "十四叠字的分量", p: "全词九十七字，开篇连下七组叠字、共十四字，由动作而环境而心境，层层递进，一气贯下。宋人张端义《贵耳集》叹为“公孙大娘舞剑手”，说本朝填词之士虽多，“未曾有一下十四叠字者”；清人周济则说“凄凄惨惨戚戚”六字“三叠韵、六双声，是锻炼出来，非偶然拈得也”。" },
    ],
    caveat: [
      "作年无定论。通行说法系于南渡之后，但具体年份众说不一：有系于建炎三年（1129）赵明诚卒后者，有系于绍兴年间晚年者，亦有学者据词中情境主张作于屏居青州、莱州的中年时期。本站“年代与地点”一栏只标“南渡之后”，不作确指。",
      "此调有平韵、仄韵两体，李清照此首用仄韵（入声）。传统词谱以高观国一首为仄韵正体，而历来选本多推李作以为该调代表。全词九十七字，前后片各五仄韵。",
      "文字异文：“晚来风急”一作“晓来风急”，梁启超、俞平伯等主张作“晓”，理由是词写一整天，若作“晚”则与下文“到黄昏”重复，通行课本仍作“晚”。“如今有谁堪摘”一作“有谁忺摘”，“正伤心”一作“最伤心”，“三杯两盏”一作“三杯两杯”。本站从通行课本。",
      "李清照卒年无确考。《中国大百科全书》作“1084 — 1155？”，新华网等作“约 1155 年”，亦有系于绍兴二十六年（1156）者。本站生卒一律加“约”字，不作确指。",
      "赵明诚享年有“四十八”“四十九”两说（生 1081、卒 1129，或按周岁计、或按虚岁计），本篇行文回避享年，只记卒日。",
      "《漱玉词》原集久佚，今本皆明清以来所辑，各家收词数目不一，通行统计存词四十余首，另有若干首存疑。此词在宋人笔记中屡见称引，文字在流传中略有出入。",
      "《词论》之名系后人所命。其文最早由胡仔《苕溪渔隐丛话》后集卷三十三以“李易安云”称引，原文作“乃知别是一家，知之者少”；胡仔所引是否即全文，学界尚有异议。",
    ],
    lang: "zh",
    type: "verse",
    originalLabel: "原文",
    translationLabel: "白话译文",
    original: `寻寻觅觅，冷冷清清，凄凄惨惨戚戚。乍暖还寒时候，最难将息。三杯两盏淡酒，怎敌他、晚来风急！雁过也，正伤心，却是旧时相识。

满地黄花堆积，憔悴损，如今有谁堪摘？守着窗儿，独自怎生得黑！梧桐更兼细雨，到黄昏、点点滴滴。这次第，怎一个愁字了得！`,
    translation: `寻了又寻，觅了又觅，眼前只是冷冷清清，心里一阵凄凄、一阵惨惨、一阵戚戚。天气忽暖忽寒的时节，最难调养将息。饮下三杯两盏淡酒，又怎抵挡得住傍晚那阵急风？大雁飞过去了，正叫人伤心——原来还是旧日相识的那一群。

满地的黄花堆积着，我却已憔悴到这般地步，如今还有谁来采摘？守在窗儿跟前，独自一人怎么才能挨到天黑！梧桐树上又落起细雨，到黄昏时分，一点一点、一滴一滴。这般光景，哪里是一个“愁”字说得尽的！`,
    publishAt: "2026-11-04T20:00:00+08:00",
  },

  {
    id: "in-catilinam-prima",
    cat: "speeches",
    title: "反喀提林第一篇演说（节选）",
    subtitle: "In Catilinam I",
    author: "马库斯·图利乌斯·西塞罗",
    authorShort: "西塞罗",
    authorInitial: "C",
    authorRole: "古罗马政治家、演说家 · 前106 — 前43",
    era: "公元前63年11月8日 · 罗马·朱庇特·斯塔托神庙",
    excerpt: "「喀提林，你到底还要滥用我们的耐心到几时？」",
    authorIntro: [
      "马库斯·图利乌斯·西塞罗（前106—前43），古罗马政治家、演说家、哲学家。生于拉丁姆的阿尔皮努姆（今意大利阿尔皮诺）一个骑士家庭，是家族中第一个坐到执政官位子上的「新人」。早年习法律与修辞，历任财务官、大法官。",
      "前63年任执政官，任内镇压喀提林阴谋，却因未经审判处死罗马公民而遭攻讦，前58年被放逐，次年被召回。前43年，后三头同盟成立，他被列入公敌名单，同年12月7日在福尔米亚一带被杀。其演说辞与哲学著作被后世奉为拉丁散文的典范。",
    ],
    facts: [
      ["生于", "前106年1月3日 · 意大利阿尔皮努姆"],
      ["执政官", "前63年 · 罗马共和国"],
      ["辞世", "前43年12月7日 · 福尔米亚"],
    ],
    background: [
      { h: "苏拉之后的罗马", p: "内战与政变之后，失地农民、负债贵族与苏拉的旧部在意大利积成一股怨气。喀提林出身没落的贵族世家，两度竞选执政官落败，债台高筑，便把这些人聚拢起来，图谋以武力夺取政权。" },
      { h: "十一月的那场会", p: "前63年10月下旬，元老院通过紧急决议，命执政官「务使国家不受损害」。11月6日夜，阴谋者在罗马秘密集会，议定拂晓前行刺西塞罗；次日清晨刺客登门，西塞罗闭门不出，事遂败。11月8日，西塞罗把元老院召到朱庇特·斯塔托神庙，先布防，后开会；喀提林照常赴会，满座无人与他同席。" },
      { h: "演说之后的四个月", p: "会后喀提林离城，赴伊特鲁里亚与曼利乌斯的队伍会合。12月初，阿洛布罗吉斯使节的告发与书信落到西塞罗手里，元老院于12月5日议决处死留在城内的五名同谋，当夜在狱中绞决。次年1月，喀提林在皮斯托里亚战败身死。而「未经审判处死公民」这一条，五年后把西塞罗送出了罗马。" },
    ],
    caveat: [
      "本篇演说的时间，通行作公元前63年11月8日；剑桥版《反喀提林演说》笺注作「11月8日，或可能为11月7日」，学界于此未有定论，本篇取8日。",
      "今本非现场速记。西塞罗事后把演说整理成文并刊行，一般系于前60年前后——其时他正因处死阴谋者而受攻讦；当场所说的与今本所见，未必字字相同。本篇所据为这一传世定本。",
      "本篇为节选。全篇共三十三节，此处只取开篇第1、2节与末节第33节，中间以「……」标示。删去的部分是西塞罗对喀提林私德、党羽与罗马旧例的铺陈，删节只为篇幅。",
      "拉丁文以通行校本文字为准：第1、2节与 The Latin Library 电子本、Project Gutenberg《Cicero's Orations》拉丁文本逐字相合；第33节另对十九世纪学校用校勘本，唯末节首句彼本作「Tum tu, Iuppiter」，本篇从「Tu, Iuppiter」。「isdem」一作「iisdem」，「arcebis」之后旧本作冒号，皆因本而异。底本保留旧式拼写：voltus（通行作 vultus）、hostis（宾格复数，通行作 hostes）。末节「a tuis aris」「civium omnium」二处，校勘本原以方括号标示为后人所补，本篇径补，不加括号。",
      "朱庇特·斯塔托神庙（aedes Iovis Statoris）在罗马城中的位置，古今考订不一，本篇只记神庙之名，不指实地望。",
      "译名：喀提林（Lucius Sergius Catilina），一译「卡提林纳」，本篇统一作「喀提林」。神名「朱庇特·斯塔托」为 Iuppiter Stator 的音译，Stator 意为「使之立定者」。本篇篇名通行汉译另有《反喀提林》《斥喀提林》《对喀提林的第一篇控告辞》等。",
      "西塞罗遇害的地点，各书或作福尔米亚（Formiae），或作近旁的加埃塔（Caieta）；意大利 Treccani 百科作「在他的福尔米亚别墅附近被杀」，本篇取福尔米亚。",
      "译文为本站自译，自拉丁文直接译出，未参照任何已出版中译本。",
    ],
    lang: "la",
    type: "prose",
    originalLabel: "拉丁文原文（节选）",
    translationLabel: "中文译文",
    original: `Quo usque tandem abutere, Catilina, patientia nostra? quam diu etiam furor iste tuus nos eludet? quem ad finem sese effrenata iactabit audacia? Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae, nihil timor populi, nihil concursus bonorum omnium, nihil hic munitissimus habendi senatus locus, nihil horum ora voltusque moverunt? Patere tua consilia non sentis, constrictam iam horum omnium scientia teneri coniurationem tuam non vides? Quid proxima, quid superiore nocte egeris, ubi fueris, quos convocaveris, quid consilii ceperis, quem nostrum ignorare arbitraris?

O tempora, o mores! Senatus haec intellegit. Consul videt; hic tamen vivit. Vivit? immo vero etiam in senatum venit, fit publici consilii particeps, notat et designat oculis ad caedem unum quemque nostrum. Nos autem fortes viri satis facere rei publicae videmur, si istius furorem ac tela vitemus. Ad mortem te, Catilina, duci iussu consulis iam pridem oportebat, in te conferri pestem, quam tu in nos omnes iam diu machinaris.

……

Hisce ominibus, Catilina, cum summa rei publicae salute, cum tua peste ac pernicie cumque eorum exitio, qui se tecum omni scelere parricidioque iunxerunt, proficiscere ad impium bellum ac nefarium. Tu, Iuppiter, qui isdem quibus haec urbs auspiciis a Romulo es constitutus, quem Statorem huius urbis atque imperii vere nominamus, hunc et huius socios a tuis aris ceterisque templis, a tectis urbis ac moenibus, a vita fortunisque civium omnium arcebis et homines bonorum inimicos, hostis patriae, latrones Italiae scelerum foedere inter se ac nefaria societate coniunctos aeternis suppliciis vivos mortuosque mactabis.`,
    translation: `喀提林，你到底还要滥用我们的耐心到几时？你这份狂妄还要嘲弄我们多久？你那毫无约束的胆大妄为，还要横冲直撞到哪一步才算完？帕拉蒂尼山上的夜间戍卫、全城的巡哨、民众的惊惧、所有忠良之士的聚集、这处防备最严的元老院会场、在座诸位的脸色与目光——竟没有一样让你动容吗？你的谋划已经败露，你难道察觉不到？你的阴谋已被在座所有人握在手里，绳索已经收紧，你难道看不见？昨夜、前夜你做了什么，去了哪里，召了哪些人来，定了什么打算——你以为我们当中有人不知道吗？

啊，什么样的时代，什么样的风气！元老院洞悉此事，执政官亲眼看见，可这个人还活着。活着？不止——他还走进元老院，参与国家大计，用眼睛把我们一个一个点出来、标出来，留待杀戮。而我们这些「勇士」，仿佛只要躲开他那股疯狂和刀锋，就算对国家尽了本分。喀提林，凭执政官一道命令，早就该把你押赴死地；早就该把你久已在我们所有人身上谋划的那场祸害，落回到你自己头上。

……

带着这些兆头上路吧，喀提林——愿共和国因此得保安泰，愿你自身败亡，愿那班以种种罪行与弑亲之罪与你结盟的人一并覆灭——去投入那场亵渎神明、伤天害理的战争。而你，朱庇特，你是罗慕路斯在与此城相同的征兆下立起的，我们称你为这座城邦与这个治权的「止者」，名副其实：把此人和他的同伙，从你的祭坛与其余神庙、从城中的屋宇与城墙、从全体公民的生命与家业之间，尽数挡在外面；至于这些与善人为敌的人、国家的公敌、意大利的强盗——他们以罪行的盟约和邪恶的勾结彼此联结——无论生前死后，都请你以永恒的惩罚加以殛灭。`,
    publishAt: "2026-11-06T20:00:00+08:00",
  },
];
