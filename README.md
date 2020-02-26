# @hamworks/wp-data

## Installation

Install the module

```bash
npm install @hamworks/wp-data --save
```

## API

### useMeta

React hooks for post meta.

#### Parameters

- _key_ `string`: The post meta key.

#### Returns

- [ `any`, `Function` ]

  -   `any`: A post meta value.
  -   `Function`: Update function for meta value.

#### Examples

```tsx
import { TextControl } from '@wordpress/components';
import { useMeta } from '@hamworks/wp-data';

const FooControl = () => {
	const [ foo, setFoo ] = useMeta<string>( 'foo' );
	return <TextControl label="Foo" type={ 'text' } onChange={ setFoo } value={ foo } />;
};
```
