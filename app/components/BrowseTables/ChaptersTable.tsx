// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { FunctionComponent } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2'; // Grid version 2
import { getListOfChaptersStats } from '@/lib/apiHelpers/chaptersAPI';
import ChapterCard from '../ChapterCard/ChapterCard';
import PaginationComponent from './PaginationComponent';
import Box from '@mui/material/Box';

import PageMessage from '../PageMessage/PageMessage';
import FadeInAnimation from '../FadeInAnimation/FadeInAnimation';

interface ChaptersTableProps {
	searchParams?: { [key: string]: string | string[] | undefined };
	sort: string;
	page: number;
	items: number;
	filter: string;
}

const ChaptersTable: FunctionComponent<ChaptersTableProps> = async ({
	searchParams,
	sort,
	page,
	items,
	filter,
}) => {
	const search = searchParams?.search ?? '';

	const chaptersList = await getListOfChaptersStats(page, items, {
		sort: sort,
		filter: filter,
	});

	return (
		<>
			<Box
			// minHeight={`calc(100vh - ${MIN_FOOTER_HEIGHT} - ${MIN_TOOLBAR_HEIGHT} - ${MIN_PAGINATION_HEIGHT})`}
			>
				{chaptersList.totalItems === 0 ? (
					<PageMessage message="Ops. Parece que não ha correspondências a sua pesquisa. Tente alterar seus filtros!" />
				) : (
					<Grid
						container
						spacing={1}
						sx={{
							justifyContent: {
								xs: 'start',
								sm: 'start',
								lg: 'start',
							},
						}}
					>
						{chaptersList.items.map((chapter, idx) => (
							<Grid
								key={`chapter_${idx}`}
								xs={6}
								sm={4}
								md={3}
								lg={2.4}
								xl={2}
							>
								<FadeInAnimation
									durationMs={
										Math.floor(Math.random() * 300) + 300
									}
								>
									<ChapterCard
										myChapter={chapter}
										isExpanded={false}
										highlightedWords={
											search instanceof Array
												? search
												: [search]
										}
									/>
								</FadeInAnimation>
							</Grid>
						))}
					</Grid>
				)}
			</Box>
			<PaginationComponent
				totalPages={chaptersList.totalPages}
				totalItems={chaptersList.totalItems}
			/>
		</>
	);
};

export default ChaptersTable;
