[**scriptedeuch**](../../../../README.md)

***

[scriptedeuch](../../../../README.md) / [Base](../README.md) / Asset

# Asset

## Functions

### FindAllByClass()

> **FindAllByClass**(`classname`, `r`): `Entity`[]

Defined in: [base/Asset.ts:41](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Asset.ts#L41)

Search through cs2 entities of type `classname` partially matching multiple entity
names. This can be expressed as a Regular Expression.

- This lookup can be used to get around Fixup Entity prefabs,
  since it will match against partial strings.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

#### Returns

`Entity`[]

A list of entities partially matching the string, or matching the regex. If nothing is found, it returns an empty list.

#### See

[Entity List](https://cs2.poggu.me/dumped-data/entity-list)

***

### FindByClass()

> **FindByClass**(`classname`, `r`): `any`

Defined in: [base/Asset.ts:21](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Asset.ts#L21)

Search for a class type partially matching a given entity
name. This can be expressed as a Regular Expression.

- This lookup can be used to get around Fixup Entity prefabs,
  since it will match against partial strings.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

#### Returns

`any`

The first entity encountered partially matching the string, or matching the regex. If nothing is found, it returns `null`.

#### See

[Entity List](https://cs2.poggu.me/dumped-data/entity-list)

***

### FindTemplate()

> **FindTemplate**(`r`): `any`

Defined in: [base/Asset.ts:54](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Asset.ts#L54)

Find a 'point_template' entity partially matching `r`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

#### Returns

`any`
