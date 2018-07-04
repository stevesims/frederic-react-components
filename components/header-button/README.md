HeaderButton
============

### Import
```js
  import HeaderButton from '@govuk-frederic/header-button';
```
<!-- STORY -->

### Usage

Default
```jsx
<HeaderButton>One</HeaderButton>
```
With title
```jsx
<DistractionFree arrowLeftTitle="Back to example" onClick={(e) => {}}>
   content goes here
</DistractionFree>
```
Multiple header buttons
```jsx
<Fragment>
 <HeaderButton>One</HeaderButton>
 <HeaderButton>Two</HeaderButton>
</Fragment>
```
Multiple header buttons with keyline
```jsx
<Fragment>
 <Keyline>
   <HeaderButton>One</HeaderButton>
   <HeaderButton>Two</HeaderButton>
 </Keyline>
</Fragment>
```
Active header button
```jsx
<HeaderButton active>On</HeaderButton>
```
Disabled header button
```jsx
<HeaderButton disabled>Off</HeaderButton>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `active` |  | `````` | bool | 
 `children` |  | `````` | node | 
 `disabled` |  | `````` | bool | 


