# 第五天练习：用字典表示细菌资料

# 一条细菌可以用一个 dict 表示。
# 字段建议：
# - name_cn: 中文名
# - name_latin: 拉丁学名
# - gram: 革兰氏染色
# - shape: 形状
# - habitat: 栖息地
# - pathogenic: 是否致病

bacteria_list = [
    {
        "name_cn": "大肠杆菌",
        "name_latin": "Escherichia coli",
        "gram": "革兰氏阴性",
        "shape": "杆状",
        "habitat": "人和温血动物的下肠道，也可随粪便进入环境",
        "pathogenic": "多数菌株无害，部分致病菌株可引起腹泻、尿路感染等疾病",
    },
    {
        "name_cn": "枯草芽孢杆菌",
        "name_latin": "Bacillus subtilis",
        "gram": "革兰氏阳性",
        "shape": "杆状，可形成芽孢",
        "habitat": "土壤、植物表面，也可见于动物和人的胃肠道",
        "pathogenic": "通常不致病，常作为实验室模式菌和工业发酵用菌",
    },
    {
        "name_cn": "金黄色葡萄球菌",
        "name_latin": "Staphylococcus aureus",
        "gram": "革兰氏阳性",
        "shape": "球状，常呈葡萄串状排列",
        "habitat": "人和动物的皮肤、鼻腔及黏膜表面",
        "pathogenic": "可致病，可引起皮肤感染、食物中毒、肺炎、败血症等",
    },
]

# TODO:
# 1. 把每个 TODO 改成真实资料
# 2. 保存文件
# 3. 让 Codex 帮你检查格式是否正确
