// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

'use client';

import { FunctionComponent, useEffect, useState } from 'react';
import List from '@mui/material/List/List';
import Divider from '@mui/material/Divider/Divider';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar/ListItemAvatar';
import Avatar from '@mui/material/Avatar/Avatar';
import React from 'react';
import ListItemButton from '@mui/material/ListItemButton/ListItemButton';
import Link from 'next/link';
import Box from '@mui/material/Box/Box';
import Paper from '@mui/material/Paper/Paper';
import Typography from '@mui/material/Typography/Typography';
import {
	ArticlesResponse,
	ArticlesVisibilityOptions,
	ChaptersResponse,
	ChaptersStatsResponse,
} from '@/types/pocketbase-types';
import { ChaptersExpand } from '@/types/expanded-types';
import {
	getChapterById,
	getChaptersStatsById,
} from '@/lib/apiHelpers/chaptersAPI';
import DrawerController from './DrawerController';
import Tooltip from '@mui/material/Tooltip';
import { getFormattedVisibility, isNullOrUndefined } from '@/lib/helper';
import Stack from '@mui/material/Stack';
import LikeButton from '@/components/LikeButton/LikeButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import PageMessage from '@/components/PageMessage/PageMessage';

interface ArticlesListProps {
	chapterId: string;
}

const ArticlesList: FunctionComponent<ArticlesListProps> = ({ chapterId }) => {
	const [chapter, setChapter] = useState<ChaptersResponse<ChaptersExpand>>();
	const [chapterStats, setChapterStats] = useState<ChaptersStatsResponse>();

	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const handleFetchData = async () => {
			try {
				const [chapterResponse, chapterStatsResponse] =
					await Promise.all([
						getChapterById(chapterId, true),
						getChaptersStatsById(chapterId),
					]);
				setChapter(chapterResponse);
				setChapterStats(chapterStatsResponse);
			} catch (error) {
				toast.error('Erro ao carregar capítulo ' + error);
				console.error(error);
			}
			setLoading(false);
		};

		handleFetchData();
	}, [chapterId]);

	if (loading) return <PageMessage message="Carregando..." loading pt={4} />;

	if (chapter === undefined || chapterStats === undefined)
		return (
			<Typography fontWeight={500}>
				Falha ao carregar capítulo.
			</Typography>
		);

	return (
		<>
			<Paper sx={{ p: 2, my: 2 }} variant="outlined">
				<Stack spacing={2}>
					<Typography variant="h5" fontWeight={700} align="center">
						{chapter.title}
					</Typography>
					<Divider />
					<Typography color="text.secondary">
						{chapter.description.length
							? chapter.description
							: 'Sem descrição'}
					</Typography>
					<Divider />
					<Stack
						direction="row"
						justifyContent="space-around"
						alignItems="center"
					>
						<Tooltip title="Visualizações" arrow placement="left">
							<Stack
								direction="row"
								spacing={1}
								alignItems="center"
								pl={1}
							>
								<VisibilityIcon color="action" />
								<Typography variant="subtitle2" component="p">
									{chapterStats.views}
								</Typography>
							</Stack>
						</Tooltip>
						<LikeButton
							numberOfLikes={chapterStats.likes}
							item={{
								id: chapter?.id,
								type: 'chapters',
							}}
						/>
					</Stack>
				</Stack>
			</Paper>
			<List sx={{ width: '100%' }}>
				<Divider component="li" />
				{chapter.expand?.articles?.map((post: ArticlesResponse) => (
					<Box
						key={'link_to_article' + post.id}
						sx={{
							bgcolor:
								post.visibility ===
								ArticlesVisibilityOptions.private
									? 'rgba(130, 130, 130, 0.15)'
									: 'initial',
							opacity:
								post.visibility ===
								ArticlesVisibilityOptions.private
									? 0.7
									: 1,
						}}
						my={1}
						color={'text.primary'}
					>
						<ListItemButton
							LinkComponent={Link}
							href={`/chapter/${chapter.id}/${post.id}`}
						>
							<ListItemAvatar>
								<Avatar variant="square">N</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary={post.title}
								secondary={
									<>
										{post.description}
										<Stack direction="row" spacing={2}>
											<Tooltip title="Visibilidade" arrow>
												<Typography
													variant="subtitle2"
													component="p"
													fontWeight={600}
													color={
														post.visibility ===
														'public'
															? 'success.main'
															: 'text.secondary'
													}
												>
													{getFormattedVisibility(
														post.visibility
													)}
												</Typography>
											</Tooltip>
										</Stack>
									</>
								}
							/>
						</ListItemButton>
						<Divider component="li" />
					</Box>
				))}
			</List>
		</>
	);
};

export default ArticlesList;
