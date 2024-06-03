

# REACT PROPS

## Descripción
En React, los props (abreviatura de `"propiedades"`) son una forma de pasar datos de un componente padre a un componente hijo. Estas propiedades son inmutables y se utilizan para personalizar y configurar los componentes de React.

## Uso
### Pasando props
Puedes pasar props a un componente de la siguiente manera:

``` javascript
<MyComponent prop1="valor1" prop2={valor2} />
```
### Accediendo a props
Dentro del componente hijo, puedes acceder a las props usando la sintaxis de objeto:

``` javascript
const MyComponent = (props) => {
  return <div>{props.prop1}</div>;
}
```
También puedes desestructurar directamente las props:

``` javascript
const MyComponent = ({ prop1, prop2 }) => {
  return <div>{prop1} - {prop2}</div>;
}
```
## Definición
### Definiendo props
Para definir las props esperadas por un componente, puedes usar la propiedad `propTypes` del objeto del componente:

``` javascript
import PropTypes from 'prop-types';

const MyComponent = (props) => {
  return <div>{props.prop1}</div>;
}

MyComponent.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};
```
## Propiedades por defecto
También puedes definir propiedades por defecto usando defaultProps:

``` javascript
MyComponent.defaultProps = {
  prop2: 10,
};
```
## Consideraciones
- Usa props para pasar datos y configurar componentes.
- Las props son inmutables, no deben ser modificadas directamente en el componente hijo.
- Siempre define el tipo de datos esperado usando `propTypes`.
## Recursos adicionales
- [Documentación oficial de React sobre props](https://reactjs.org/docs/components-and-props.html)
- [PropTypes en la documentación de React](https://reactjs.org/docs/typechecking-with-proptypes.html)
---------------------------------------------------------------------------------------
Este README proporciona una visión general de qué son los props en React, cómo se utilizan, cómo se definen y algunas consideraciones importantes al trabajar con ellos.