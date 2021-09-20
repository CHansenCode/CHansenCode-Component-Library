**_Component readme template_**

# Component: NameOfComponent

### Description / purpose

Input element with additional functions dependant on props passed from parent form.

### Props

| Prop      | input   |
| --------- | ------- |
| label     | string  |
| valid     | boolean |
| required  | boolean |
| infoHover | string  |

**_html defaults passed through props_**

| prop        | input  |
| ----------- | ------ |
| id          | string |
| placeholder | string |
| className   | string |
| value       | -      |
| onChange    | func.  |

## Usage

```javascript
<NameOfComponent
  //added functions
  label="A label: top left" //                              - description of what happens on/if input
  valid={false | true} //                                   - description of what happens on/if input       req* <- if required
  required //                                               - description if present
  //
  //default html element keys
  id="nameId"
  className={`${css.className} globalName`}
  placeholder="String example"
  value={formData.key}
  onChange={() => handleOnChange()}
/>
```

## Dependencies

- react-icons

###### v.1.0.0 2021-09-20, by: **_ChansenCode-CH_**
