# Component: Input

## Description

Input element with additional functions dependant on props passed from parent form.

| Prop      | input   |
| --------- | ------- |
| label     | string  |
| valid     | boolean |
| required  | boolean |
| infoHover | string  |

##### html defaults passed through props

| prop        | input  |
| ----------- | ------ |
| id          | string |
| placeholder | string |
| className   | string |
| value       | -      |
| onChange    | func.  |

## Dependencies

- react-icons

## Usage

```javascript
<Input
    //added functions
    label="A label: top left"
    valid={false | true}                //applies green valid styling and check icon for live validation
    required                            //adds 'req *' to the right of/if label, else in place of label
    infoHover="min 5 characters etc"    //adds 'i' icon, when hovered or input is in focus, display inputInfo

    //default html
    id="nameId"
    className="passCssHere" | {css.className}
    placeholder="String example"
    value={formData.key}
    onChange={handleOnChange}
/>
```

###### v.1.0.0 2021-09-20, tried & tested by - **_ChansenCode_**
