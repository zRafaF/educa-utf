// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { FunctionComponent, Suspense } from 'react';
import './github-markdown.css';
import Box from '@mui/material/Box/Box';
import MdRendererAsync from './MdRenderer/MdRendererAsync';
import MdRenderer from './MdRenderer/MdRenderer';

interface ArticleContentProps {
	article: string;
}

const ArticleContent: FunctionComponent<ArticleContentProps> = ({
	article,
}) => {
	return (
		<Box className="markdown-body">
			<MdRenderer article={article} />
		</Box>
	);
};

export default ArticleContent;
