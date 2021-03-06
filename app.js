var app = {
    week: undefined
}

// 存放 Bungie 的资源链接
const icons = {
    modification: {
        // 电弧焦痕
        arc_singe: "https://www.bungie.net/common/destiny2_content/icons/ee1536e4ab72c6286ab68980d1ce6ecb.png",
        // 烈日焦痕
        solar_singe: "https://www.bungie.net/common/destiny2_content/icons/608fb3a03d42f16f85788abe799b0af0.png",
        // 虚空焦痕
        void_singe: "https://www.bungie.net/common/destiny2_content/icons/150c14552f0138feadcc157571e0b0e6.png",
        // 赤拳互斗
        brawler: "https://www.bungie.net/common/destiny2_content/icons/20a98feac60e5acda919781f50ee69f1.png",
        // 彻底灭绝
        extinguish: "https://www.bungie.net/common/destiny2_content/icons/36a40c8c5becb4c848e0dea562259b5a.png",
        // 连连看
        match_game: "https://www.bungie.net/common/destiny2_content/icons/d9337bf6883df7dff9190cff413e6fde.png",
        // 日陵月替
        attrition: "https://www.bungie.net/common/destiny2_content/icons/3776182414b5df7ea146b2c9b131a572.png",
        // 生生不息
        momentum: "https://www.bungie.net/common/destiny2_content/icons/b64775aa58042a552290420157a84eae.png",
        // 牵制
        grounded: "https://www.bungie.net/common/destiny2_content/icons/8c11fd95a108f6680dd030328d04c1bf.png",
        // 重量级
        heavyweight: "https://www.bungie.net/common/destiny2_content/icons/ad87f062887b10b2f9a9ba5ca931af0e.png",
        // 漆黑一片
        blackout: "https://www.bungie.net/common/destiny2_content/icons/9edac594aa5be3b2594b4876f0b7497f.png",
        // 弹药慌
        famine: "https://www.bungie.net/common/destiny2_content/icons/41709f612e8223320582804204aa3015.png",
        // 坚如钢铁
        iron: "https://www.bungie.net/common/destiny2_content/icons/28f3d9c4466948c9bd98e501aadba79a.png",
        // 榴弹兵
        grenadier: "https://www.bungie.net/common/destiny2_content/icons/9ad729e0c1fef03b4e82895d480d033c.png",
    }
}

// 存放本地化文本
const i18n = {
    other: {
        WeekDayName: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    },
    icons: {
        bow: "",
        autoRifle: "",
        pulseRifle: "",
        scoutRifle: "",
        handCannon: "",
        shotgun: "",
        sniperRifle: "",
        fusionRifle: "",
        submachineGun: "",
        rocketLauncher: "",
        sidearm: "",
        Punch: "",
        grenadeLauncher: "",
        traceRifle: "",
        Solar: "",
        Arc: "",
        Void: "",
        linearFusionRifle: "",
        sword: "",
        machineGun: "",
        grenadeLauncherSub: ""
    },
    items: {
        Blasphemer: "异端分子",
        Apostate: "叛教者",
        Heretic: "异教徒"
    }
}

// 数据
const pdvalues = {
    strike_singe: ["虚空(Void)", "电弧(Arc)", "烈日(Solar)"],
    strike_oreal_map: ["NO DATA"],

    raid_cha_leviathan: ["皇家之池挑战", "夹击大道挑战", "欢愉花园挑战", "王座挑战"],
    raid_cha_gos: ["迈向巅峰(3)", "零到一百(4)", "残杯冷炙(1)", "串联汇聚(2)"],
    raid_cha_sotp: ["死守战线(1)", "万众一心，只为一人(3)", "各自为政(4)"],
    raid_cha_cos: ["限量祝福(1)", "全面胜利(3)", "双手万能(4)"],
    raid_cha_lastWish: ["禁止进入(4)", "记忆能力(5)", "召唤仪式(1)", "竞技场冠军(2)", "永恒之战(3)"],
    raid_cha_dsc: ["红色漫游者(1)", "回音复制体(2)", "通才(3)", "四号核心(4)"],

    raid_lev_order: ["皇家之池>欢愉花园>夹击大道>王座", "欢愉花园>夹击大道>皇家之池>王座", "夹击大道>皇家之池>欢愉花园>王座", "欢愉花园>皇家之池>夹击大道>王座", "皇家之池>夹击大道>欢愉花园>王座", "夹击大道>欢愉花园>皇家之池>王座"],
    raid_lev_prestige_weapon: ["手枪>斥候步枪>刀剑", "微型冲锋枪>任何武器>榴弹发射器", "任何武器>聚合步枪>聚合步枪", "霰弹枪>自动步枪>火箭发射器", "手持加农炮>狙击步枪>任何武器", "自动步枪>自动步枪>任何武器"],
    raid_lev_prestige_weapon_icon: [">>", ">>", ">>", ">>", ">>", ">>"],

    raid_lev_prestige_modification: ["角斗巨兵", "棱镜", "军火库"],

    destination_moon_drop: ["15", "236", "47"],
    destination_moon_nightmare_drifting: [{
            name: "堕落者议会",
            location: "弓手射线"
        }, {
            name: "『克洛塔之誓』席欧托的梦魇",
            location: "忧伤港"
        }, {
            name: "『米斯拉克之惧』霍尔柯斯的梦魇",
            location: "光之锚"
        }, {
            name: "『希弗·阿瑞斯之爪』贾克斯的梦魇",
            location: "地狱深渊"
        }
    ],

    destination_mars_protocol: [{
        boss: "『螋尔之吼』凯萨克",
        drop: ["IKELOS_冲锋枪_1.0.1版"],
        dropIcon: [""]
    }, {
        boss: "『面具』达姆克斯",
        drop: ["IKELOS_狙击枪_1.0.1版"],
        dropIcon: [""]
    }, {
        boss: "『荒野之源』纳克斯德",
        drop: ["IKELOS_冲锋枪_1.0.1版", "IKELOS_霰弹枪_1.0.1版", "IKELOS_狙击枪_1.0.1版"],
        dropIcon: ["", "", ""]
    }, {
        boss: "『螋尔之饥辘』巴克里托",
        drop: ["IKELOS_冲锋枪_1.0.1版", "IKELOS_霰弹枪_1.0.1版", "IKELOS_狙击枪_1.0.1版"],
        dropIcon: ["", "", ""]
    }, {
        boss: "『螋尔之冠』努尔阿巴斯",
        drop: ["IKELOS_霰弹枪_1.0.1版"],
        dropIcon: [""]
    }],

    destination_dreamingcity_infection: ["最强(3)", "最弱(1)", "增强(2)"],
    destination_dreamingcity_ascendant_plane: ["先驱者隐室", "宿愿之岸", "星光之室", "远日点之眠", "艾希拉花园", "克雷斯之脊"],

    forge: ["52", "6", "37", "41"],

    menagerie_final_boss: ["哈沙比寇", "阿努那克", "帕谷里"],
    menagerie_modification: ["彻底灭绝>一片漆黑>坚如钢铁", "彻底灭绝>榴弹兵>弹药慌", "彻底灭绝>元素配对>日陵月替"],
    menagerie_modification_icon: [
        [
            icons.modification.extinguish,
            icons.modification.blackout,
            icons.modification.iron
        ],
        [
            icons.modification.extinguish,
            icons.modification.grenadier,
            icons.modification.famine
        ],
        [
            icons.modification.extinguish,
            icons.modification.match_game,
            icons.modification.attrition
        ]
    ],

    europa_argumented_obsession: ["新里斯之途", "奈瑟斯", "布雷EXO科技", "技术专家之铁", "无穷之井", "永恒之地", "酋长的崛起", "创造室"],
    europa_argumented_obsession_from: ["均衡之潮废墟", "星空深渊", "均衡之潮废墟", "星空深渊", "卡德姆斯之脊", "均衡之潮废墟", "卡德姆斯之脊"],
    europa_exo_challenge: ["模拟：敏捷", "模拟：生存模式", "模拟：保卫"],
    europa_eclipsed_zone: ["unknown", "unknown", "unknown"],
}

var currentWeek = function() {
    return Math.ceil((new Date().getTime() + (2*24*60*60*1000)) / (7*24*60*60*1000));
}

function initialize() {
    let weekNum = parseInt(document.location.search.substr(1));
    console.log("SearchWeek: "+weekNum);

    if(weekNum) {
        app.week = weekNum;
    } else {
        app.week = currentWeek();
    }

    document.title = `Vuestiny (${app.week})`;

    // debug components
    document.querySelector("#weekCurrent").href = `?${currentWeek()}`;
    document.querySelector("#weekAdd").href = `?${app.week+1}`;
    document.querySelector("#weekRemove").href = `?${app.week-1}`;
}
initialize();

function predicate(
    values, // 所有可能的内容
    current, // 当前周/日数
    offset = 0 // 内容偏移
) {
    if(!current) {
        current = app.week;
    }

    let unoffset_index = current % values.length;
    let offseted_index = (unoffset_index + offset) % values.length;
    return values[offseted_index];
}

const vue = new Vue({
    el: '#app',
    created() {
        let $createTime = new Date().getTime();

        // Debug Information
        console.log("Current Week @ "+currentWeek());

        // Settings
        this.showDebugPanel = false;

        // Other
        this.weekDayNames = i18n.other.WeekDayName;

        // Vanguard
        this.strikeSinge = predicate(pdvalues.strike_singe, undefined, 2);
        this.strikeOrealMap = predicate(pdvalues.strike_oreal_map);
        this.strikeDoubleReward = false;

        // Raid: Challenges
        this.raidChallengeGardenOfSalvation = predicate(pdvalues.raid_cha_gos);
        this.raidChallengeLastWish = predicate(pdvalues.raid_cha_lastWish);
        this.raidChallengeDeepStoneCrypt = predicate(pdvalues.raid_cha_dsc);
        // Raid: Challenges (LEGACY)
        // this.raidChallengeLeviathan = predicate(pdvalues.raid_cha_leviathan);
        // this.raidChallengeScourgeOfThePast = predicate(pdvalues.raid_cha_sotp);
        // this.raidChallengeCrownOfSorrow = predicate(pdvalues.raid_cha_cos);
        

        // Raid: Leviathan (LEGACY)
        // this.raidOrderLeviathan = predicate(pdvalues.raid_lev_order).split(">");
        // this.raidWeaponLockLeviathanPrestige = predicate(pdvalues.raid_lev_prestige_weapon).split(">");
        // this.raidWeaponLockLeviathanPrestigeIcon = predicate(pdvalues.raid_lev_prestige_weapon_icon).split(">");
        // this.raidModificationLeviathan = predicate(pdvalues.raid_lev_prestige_modification);

        // Destination: Moon
        this.destMoonEventDrop = [];
        this.destMoonEventDropIcon = [];
        let rocketDrop = predicate(pdvalues.destination_moon_drop);
        let shotgunDrop = predicate(pdvalues.destination_moon_drop, undefined, 1);
        let sniperDrop = predicate(pdvalues.destination_moon_drop, undefined, 2);
        
        function put(array, predicate, name) {
            let s = predicate.split(/|/);
            for(n in s) {
                array[s[n]-1] = name;
            }
        }

        put(this.destMoonEventDrop, rocketDrop, i18n.items.Heretic);
        put(this.destMoonEventDrop, shotgunDrop, i18n.items.Blasphemer);
        put(this.destMoonEventDrop, sniperDrop, i18n.items.Apostate);

        put(this.destMoonEventDropIcon, rocketDrop, i18n.icons.rocketLauncher);
        put(this.destMoonEventDropIcon, shotgunDrop, i18n.icons.shotgun);
        put(this.destMoonEventDropIcon, sniperDrop, i18n.icons.sniperRifle);

        this.destMoonNightmare = predicate(pdvalues.destination_moon_nightmare_drifting);

        this.destMarsProtocol = predicate(pdvalues.destination_mars_protocol);
        this.destDreamingCityInfection = predicate(pdvalues.destination_dreamingcity_infection);
        this.destDreamingCityAscentdantPlane = predicate(pdvalues.destination_dreamingcity_ascendant_plane);

        // Forge (LEGACY)
        // this.forge = [];
        // this.forgeIcon = [];

        // let volundr = predicate(pdvalues.forge);
        // let bergusia = predicate(pdvalues.forge, undefined, 1);
        // let izanami = predicate(pdvalues.forge, undefined, 2);
        // let gofannon = predicate(pdvalues.forge, undefined, 3);

        // put(this.forge, volundr, "弗伦德锻炉(1)");
        // put(this.forge, bergusia, "伯尔古西亚锻炉(4)");
        // put(this.forge, izanami, "伊邪那美锻炉(3)");
        // put(this.forge, gofannon, "哥坊诺锻炉(2)");

        // Menagerie (LEGACY)
        // this.menagerieBoss = predicate(pdvalues.menagerie_final_boss);
        // this.menagerieModification = predicate(pdvalues.menagerie_modification).split(">");
        // this.menagerieModificationIcon = predicate(pdvalues.menagerie_modification_icon);

        this.europaArgumentedObsession = predicate(pdvalues.europa_argumented_obsession, undefined, 7);
        this.europaArgumentedObsessionFrom = predicate(pdvalues.europa_argumented_obsession_from, undefined, 7);
        this.europaExoChallenge = predicate(pdvalues.europa_exo_challenge, undefined, 1);
        this.europaEclipsedZone = predicate(pdvalues.europa_eclipsed_zone);

        console.log("Rendering time: "+(new Date().getTime() - $createTime)+"ms");
    }
})