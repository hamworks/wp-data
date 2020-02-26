import { useCallback } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';

export const useMeta = <T extends any>( key: string ): [ T, ( v: T ) => void ] => {
	const meta = useSelect( ( select ) => {
		const { getEditedPostAttribute } = select( 'core/editor' );
		const metas: { [ key: string ]: T } = getEditedPostAttribute( 'meta' ) || {};
		return metas[ key ];
	}, [] );

	const { editPost } = useDispatch( 'core/editor' );
	const setMeta = useCallback( ( value ) => {
		editPost( {
			meta: { [ key ]: value },
		} );
	}, [] );

	return [ meta, setMeta ];
};

