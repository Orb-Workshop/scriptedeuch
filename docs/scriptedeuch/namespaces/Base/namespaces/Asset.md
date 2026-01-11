[**scriptedeuch**](../../../../README.md)

***

[scriptedeuch](../../../../README.md) / [Base](../README.md) / Asset

# Asset

## Functions

### FindByClass()

> **FindByClass**(`classname`, `r`): `any`

Defined in: [base/Asset.ts:15](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Asset.ts#L15)

Search for a single class partially matching a given entity
name. This can be expressed as a Regular Expression.

- This lookup can be used to get around Fixup Entity prefabs.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `classname` | `string` |
| `r` | `string` \| `RegExp` |

#### Returns

`any`

#### See

[Entity List](https://cs2.poggu.me/dumped-data/entity-list)

***

### FindTemplate()

> **FindTemplate**(`r`): `any`

Defined in: [base/Asset.ts:26](https://github.com/Orb-Workshop/scriptedeuch/blob/master/src/base/Asset.ts#L26)

Find a 'point_template' entity partially matching `r`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `string` \| `RegExp` |

#### Returns

`any`
