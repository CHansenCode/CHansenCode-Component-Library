# Component, wrapper: NavLink

**_For next.js application_**

## Description

Wrapper component for routing in next.js application. Provides passing props that

| prop  | input  |
| ----- | ------ |
| href  | string |
| exact | -      |

## Dependencies

-

## Usage

```javascript
<NavLink
    href="/pageName"                    //Filename in 'pages' folder
    exact                               //Only gives className 'active' if router.pathname is exact match
>
    <Children />
</Navlink>
```

###### v.1.0.0 2021-09-20, tried & tested by - **_ChansenCode_**
