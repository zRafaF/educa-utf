// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

'use-client';

import ImgBlock from '@/plugins/ImgBlock/ImgBlock';
import PreBlock from '@/plugins/PreBlock/PreBlock';
import { MarkdownToJSX } from 'markdown-to-jsx';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const Equation = dynamic(() => import('@/plugins/Equation/Equation'), {
	ssr: false,
});

const useOverridePlugins = () => {
	const overrides = useMemo<MarkdownToJSX.Overrides>(() => {
		return {
			pre: PreBlock,
			Equation: Equation,
			img: ImgBlock,
		};
	}, []);

	return [overrides] as const;
};

export default useOverridePlugins;
