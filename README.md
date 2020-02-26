# @hamworks/wp-data

## useage

```
import { TextControl } from '@wordpress/components';
import { useMeta } from '@hamworks/wp-data';

const FooControl = () => {
	const [ foo, setFoo ] = useMeta<string>( 'foo' );
	return <TextControl label="Foo" type={ 'text' } onChange={ setFoo } value={ foo } />;
};
```
