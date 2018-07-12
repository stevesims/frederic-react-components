CounterBar
==========

### Import
```js
  import CounterBar from '@govuk-frederic/counter-bar';
```
<!-- STORY -->

### Usage

Simple
```jsx
<CounterBar>
  <CounterBar.Total score={16}>All counters</CounterBar.Total>
  <CounterBar.Container>
    <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
    <CounterBar.Item score={2}>Counter 2</CounterBar.Item>
    <CounterBar.Item score={2}>Counter 3</CounterBar.Item>
    <CounterBar.Item score={9}>Counter 4</CounterBar.Item>
    <CounterBar.Item score={2}>Counter 5</CounterBar.Item>
    <CounterBar.Item score={1}>Counter 6</CounterBar.Item>
    <CounterBar.Item score={0}>Counter 7</CounterBar.Item>
  </CounterBar.Container>
</CounterBar>
```
Active counter
```jsx
<CounterBar>
  <CounterBar.Total score={5}>All counters</CounterBar.Total>
    <CounterBar.Container>
    <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
    <CounterBar.Item score={2} active>Counter 2</CounterBar.Item>
    <CounterBar.Item score={3}>Counter 3</CounterBar.Item>
  </CounterBar.Container>
</CounterBar>
```
Active title
```jsx
<CounterBar>
  <CounterBar.Total score={2} active>All counters</CounterBar.Total>
  <CounterBar.Container>
    <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
    <CounterBar.Item score={2}>Counter 2</CounterBar.Item>
    <CounterBar.Item score={0}>Counter 3</CounterBar.Item>
  </CounterBar.Container>
</CounterBar>
```
CounterBar with padded container
```jsx
<CounterBar>
  <CounterBar.Total score={8}>All counters</CounterBar.Total>
  <CounterBar.Container>
    <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
    <CounterBar.Item score={2}>Counter 2</CounterBar.Item>
    <CounterBar.Item score={2}>Counter 3</CounterBar.Item>
    <CounterBar.Item score={0}>Counter 4</CounterBar.Item>
    <CounterBar.Item score={2}>Counter 5</CounterBar.Item>
    <CounterBar.Item score={0}>Counter 6</CounterBar.Item>
    <CounterBar.Item score={2}>Counter 7</CounterBar.Item>
  </CounterBar.Container>
</CounterBar>
```
Zero/no scores
```jsx
<CounterBar>
  <CounterBar.Total score={0}>All counters</CounterBar.Total>
  <CounterBar.Container>
    <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
    <CounterBar.Item>Counter 2</CounterBar.Item>
    <CounterBar.Item score={0}>Counter 3</CounterBar.Item>
  </CounterBar.Container>
</CounterBar>,
```
Use any tag or component for the total
```jsx
<CounterBar>
  <CounterBar.Total tag="aside" score={2}>All counters</CounterBar.Total>
  <CounterBar.Container>
    <CounterBar.Item score={0}>Counter 1</CounterBar.Item>
    <CounterBar.Item score={2}>Counter 2</CounterBar.Item>
  </CounterBar.Container>
</CounterBar>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 


