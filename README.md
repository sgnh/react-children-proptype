# react-children-proptype

This is a simple package for validating React children.

## Example
```javascript
import childrenPropType from 'react-children-proptype';

const MyComponent = ({children}) => (
  <div>
    <h1>My Component</h1>
    {children}
  </div>
);

MyComponent.propTypes = {
  children: childrenPropType,
};
```