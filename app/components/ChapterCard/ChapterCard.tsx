// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { FunctionComponent, ReactNode } from 'react';

import Card from '@mui/material/Card/Card';
import CardActionArea from '@mui/material/CardActionArea/CardActionArea';
import CardActions from '@mui/material/CardActions/CardActions';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from 'next/link';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import Divider from '@mui/material/Divider/Divider';
import Stack from '@mui/material/Stack/Stack';
import { ChaptersStatsResponse } from '@/types/pocketbase-types';
import { ChaptersExpandTags } from '@/types/expanded-types';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import dynamic from 'next/dynamic';
import {
	formatNumber,
	getFormattedVisibility,
	basicSlugify,
} from '@/lib/helper';
import { getChapterCoverURL } from '@/lib/apiHelpers/chaptersAPI';
import MoreChapterOptions from '../MoreChapterOptions/MoreChapterOptions';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Highlighter from 'react-highlight-words';

const CardUsername = dynamic(() => import('../CardUsername/CardUsername'), {
	ssr: false,
});
const TagsComponent = dynamic(
	() => import('@/components/TagsComponent/TagsComponent'),
	{
		ssr: false,
	}
);

interface ChapterCardProps {
	isExpanded?: boolean;
	isClickable?: boolean;
	myChapter: ChaptersStatsResponse<ChaptersExpandTags>;
	highlightedWords?: string[];
}

const ChapterCard: FunctionComponent<ChapterCardProps> = ({
	isExpanded = true,
	isClickable = true,
	myChapter,
	highlightedWords,
}) => {
	const Description = ({ numOfLines }: { numOfLines: number }) => (
		<Tooltip
			title={
				myChapter.description.length
					? myChapter.description
					: 'Sem descrição...'
			}
			arrow
			placement="top"
		>
			<Typography
				variant="body2"
				color="text.secondary"
				sx={{
					overflow: 'hidden',
					wordBreak: 'break',
					textOverflow: 'ellipsis',
					display: '-webkit-box',
					WebkitBoxOrient: 'vertical',
					WebkitLineClamp: numOfLines,
				}}
				minHeight={`${1.25 * numOfLines}rem`}
			>
				{myChapter.description.length ? (
					<Highlighter
						searchWords={highlightedWords ?? []}
						autoEscape={true}
						textToHighlight={myChapter.description}
						sanitize={basicSlugify}
					/>
				) : (
					'Sem descrição...'
				)}
			</Typography>
		</Tooltip>
	);

	const ExpandedContent = () => (
		<CardContent
			sx={{
				p: { xs: 1, sm: 1, md: 1 },
			}}
		>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				spacing={1}
			>
				<Box width={'100%'}>
					<Tooltip title={myChapter.title} arrow>
						<Typography
							variant="h5"
							sx={{
								overflow: 'hidden',
								wordBreak: 'break',

								textOverflow: 'ellipsis',
								display: '-webkit-box',
								WebkitLineClamp: '1',
								WebkitBoxOrient: 'vertical',
							}}
						>
							<Highlighter
								highlightClassName="YourHighlightClass"
								searchWords={highlightedWords ?? []}
								autoEscape={true}
								textToHighlight={myChapter.title}
								sanitize={basicSlugify}
							/>
						</Typography>
					</Tooltip>
					<Box
						display={'flex'}
						width={'100%'}
						justifyContent={'space-between'}
						pb={1.5}
					>
						<CardUsername content={myChapter} />
						<Tooltip title="Visibilidade" arrow placement="top">
							<Typography
								variant="subtitle2"
								component="p"
								fontWeight={600}
								color={
									myChapter.visibility === 'public'
										? 'success.main'
										: 'text.secondary'
								}
							>
								{getFormattedVisibility(myChapter.visibility)}
							</Typography>
						</Tooltip>
					</Box>
				</Box>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="end"
					spacing={0.5}
				>
					<Stack
						direction="row"
						spacing={1}
						alignItems="center"
						justifyContent="center"
					>
						<Typography variant="caption">
							{formatNumber(myChapter.views)}
						</Typography>
						<VisibilityIcon color="action" fontSize="small" />
					</Stack>
					<Stack direction="row" spacing={1} alignItems="center">
						<Typography variant="caption">
							{formatNumber(myChapter.likes)}
						</Typography>
						<FavoriteIcon color="action" fontSize="small" />
					</Stack>
				</Stack>
			</Stack>
			<Description numOfLines={4} />
		</CardContent>
	);

	const CollapsedContent = () => (
		<CardContent
			sx={{
				p: 1,
			}}
		>
			<Stack
				direction="column"
				justifyContent="space-between"
				alignItems="start"
				minHeight={80}
				useFlexGap
			>
				<Box
					display={'flex'}
					width={'100%'}
					justifyContent={'space-between'}
				>
					<Tooltip title="Visibilidade" arrow placement="top">
						<Typography
							variant="subtitle2"
							component="p"
							fontWeight={600}
							color={
								myChapter.visibility === 'public'
									? 'success.main'
									: 'text.secondary'
							}
						>
							{getFormattedVisibility(myChapter.visibility)}
						</Typography>
					</Tooltip>
					<CardUsername content={myChapter} />
				</Box>
				<Tooltip title={myChapter.title} arrow>
					<Typography
						variant="body1"
						fontWeight="700"
						sx={{
							overflow: 'hidden',
							wordBreak: 'break',

							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: '2',
							WebkitBoxOrient: 'vertical',
							width: '100%',
							borderBottom: '1px solid',
							borderColor: 'var(--mui-palette-divider)',
						}}
						minHeight={'3.4rem'}
					>
						<Highlighter
							searchWords={highlightedWords ?? []}
							autoEscape={true}
							textToHighlight={myChapter.title}
							sanitize={basicSlugify}
						/>
					</Typography>
				</Tooltip>
				<Description numOfLines={2} />

				<Stack
					direction={'row'}
					justifyContent={'space-around'}
					alignItems={'center'}
					width={'100%'}
				>
					<Stack direction="row" spacing={1} alignItems="center">
						<VisibilityIcon color="action" fontSize="small" />
						<Typography variant="caption">
							{formatNumber(myChapter.views)}
						</Typography>
					</Stack>
					<Stack direction="row" spacing={1} alignItems="center">
						<FavoriteIcon color="action" fontSize="small" />
						<Typography variant="caption">
							{formatNumber(myChapter.likes)}
						</Typography>
					</Stack>
				</Stack>
			</Stack>
		</CardContent>
	);

	return (
		<Card
			sx={{
				pointerEvents: isClickable ? 'inherit' : 'none',
			}}
			variant="outlined"
		>
			<CardActionArea
				LinkComponent={Link}
				href={`/chapter/${myChapter.id}`}
			>
				<Box position="relative">
					<CardMedia
						component="img"
						sx={{
							aspectRatio: '2/1',
						}}
						src={getChapterCoverURL(myChapter, false)}
						alt="chapter-cover-img"
					/>
					<Tooltip
						title="Numero de artigos"
						arrow
						placement="left-start"
					>
						<Box
							position="absolute"
							top={-1}
							right={-1}
							sx={{
								width: isExpanded ? 24 : 20,
								height: isExpanded ? 24 : 20,
								fontWeight: 'bold',
							}}
							borderRadius={'0 0 0 10px'}
							bgcolor={'background.default'}
							display={'flex'}
							alignItems={'center'}
							justifyContent={'center'}
							boxShadow={4}
						>
							{myChapter.articles.length}
						</Box>
					</Tooltip>
				</Box>

				{isExpanded ? <ExpandedContent /> : <CollapsedContent />}
			</CardActionArea>

			<Divider />
			<CardActions
				sx={{
					p: 0.5,
				}}
			>
				<Stack
					sx={{
						width: '100%',
					}}
				>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						width={'100%'}
						spacing={0.5}
					>
						<Box overflow={'auto'}>
							<TagsComponent
								tag={myChapter.expand?.tag}
								keyWords={myChapter.expand?.key_words}
								expanded={isExpanded}
							/>
						</Box>
						<MoreChapterOptions
							chapter={myChapter}
							shareUrl={`https://educautf.td.utfpr.edu.br/chapter/${myChapter.id}`}
							placement="left"
							size="small"
						/>
					</Stack>
				</Stack>
			</CardActions>
		</Card>
	);
};

export default ChapterCard;
