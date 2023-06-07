---
outline: deep
---

# 数据类型

## Int 整形

## Bool 布尔

## Str 字符串

## List 列表

```python
x in list
x not in list

s[i]                 # 列表中的第 i 项，起始
s[i:j]               # 按索引从i到 j 切片，前取后不
s[i:j:k]             # 以 k 步长从索引 i 到 j 切片

len(list)            # 列表长度
min(list)            # 列表中最小项
max(list)            # 列表中最大项
list.sort()          # 以列表项的 unicode 排序

list.index(x[i,j])   # 列表中第一个 x 的索引，可选在索引 i 或其后到 j 之前
list.count(x)        # x 在列表中的数量

list.append()        # 添加
list.insert()        # 插入
list.extend()        # 扩展

del list[i]          # 删除
list.remove(x)       # 删除列表中的第一个 x
list.pop(i)          # 提取出索引为 i 的项，并从列表中删除
list.clear()         # 移除所有项

list.reverse()       # 逆序列表元素
```

- list - for

```python
# for循环编辑list中内容需倒序，正序增减会导致部分项被跳过

for i in range(len(list)-1, -1, -1):
    item = list[i]
    if item:
        del list[i]
```

## Tuple 元组

## Dict 字典

```python
list(dict)                # 字典中所有键的列表
len(dict)                 # 字典的项数

d[key]                    # 字典中以 key 为键的项，如不存在会引发 KeyError
dict.get(key[,default])   # 如果 key 存在于字典中则返回 key 的值，否则返回 default。 如果 default 未给出则默认为 None，因而此方法绝不会引发 KeyError

del d[key]                # 删除
dict.clear()              # 移除字典中的所有元素
dict.pop(key[,default])   # 如果 key 存在于字典中则将其移除并返回其值，否则返回 default。 如果 default 未给出且 key 不存在于字典中，则会引发 KeyError

key in d
key not in d

iter(dict)                # 返回以字典的键为元素的迭代器，等于 iter(d.keys())

dict.copy()               # 返回原字典的浅拷贝
```

## Set 集合

```python
s = set()                 # 定义一个集合，不能直接()，若不加set则为定义空字典

set.add()                 #添加

s3 = s1.intersection(s2)  # 两个集合的交集，等同于 s3 = s1 & s2
s3 = s1.union(s2)         # 并集，等同于 s3 = s1 | s2
s3 = s1.difference(s2)    # 差集，s1 中有但 s2 没有的值，等同于 s3 = s1 - s2
```

不允许重复，可用于去重，int、list、dict都可以转换为集合

```python
s = set(list)
```

集合中的元素必须可哈希，可哈希的数据类型：int、bool、str、tuple，list 和 dict 不可哈希

```python
v1 = set()
v1.add("你好")

# 1. 利用哈希函数将“你好”转换成一个数值，如 123
# 2. 取余数，如 123 % 7 = 4
# 3. 将“你好”放在哈希表的 4 索引位置
```

## Float 浮点

## None

特殊值，表示空或无内容，相当于 null，在一定程度上节省内存 
