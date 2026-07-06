# 第六天演示：输入细菌名，输出资料卡片

# 今天要练习：
# 1. import 复用另一个文件里的数据
# 2. for 循环查找列表里的字典
# 3. 用 if 判断用户输入的名字
# 4. 把查询结果打印成资料卡片

from bacteria_data import bacteria_list


name = input("请输入你想查询的细菌名：")
found = None

for bacteria in bacteria_list:
    if bacteria["name_cn"] == name or bacteria["name_latin"] == name:
        found = bacteria

if found:
    print("名称：" + found["name_cn"])
    print("拉丁学名：" + found["name_latin"])
    print("革兰氏染色：" + found["gram"])
    print("形状：" + found["shape"])
    print("栖息地：" + found["habitat"])
    print("是否致病：" + found["pathogenic"])
else:
    print("暂时没有这种细菌的信息。")
