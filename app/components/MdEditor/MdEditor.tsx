// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

'use client';
import './MdEditorDarkmode.css';

import { SimpleMdeReact } from 'react-simplemde-editor';
import {
	Dispatch,
	FunctionComponent,
	MutableRefObject,
	SetStateAction,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react';
import 'easymde/dist/easymde.min.css';
import SimpleMDE from 'easymde';
import { uploadFile } from '@/lib/fileHelper';
import ArticleContent from '../ArticleComponent/ArticleContent/ArticleContent';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EditNoteIcon from '@mui/icons-material/EditNote';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import PreviewIcon from '@mui/icons-material/Preview';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';
import PluginDialog from './PluginDialog/PluginDialog';
import { ArticlesResponse } from '@/types/pocketbase-types';
import { ArticlesExpand } from '@/types/expanded-types';

enum ViewMode {
	Editor = 0,
	Split = 1,
	Preview = 2,
}

interface MdEditorProps {
	myArticle: ArticlesResponse<ArticlesExpand>;
	myArticleDocument: string;
	setMyArticleDocument: Dispatch<SetStateAction<string | undefined>>;
	saveButtonRef: MutableRefObject<HTMLButtonElement | null>;
}

const MdEditor: FunctionComponent<MdEditorProps> = ({
	myArticle,
	myArticleDocument,
	setMyArticleDocument,
	saveButtonRef,
}) => {
	const theme = useTheme();
	const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Split);
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
	const [currentPluginKey, setCurrentPluginKey] = useState<
		string | undefined
	>(undefined);
	const [currentGetMdeInstance, setCurrentGetMdeInstance] = useState<
		SimpleMDE | undefined
	>(undefined);
	const onChange = useCallback(
		(value: string) => {
			if (setMyArticleDocument) setMyArticleDocument(value);
		},
		[setMyArticleDocument]
	);

	useEffect(() => {
		if (isSmallScreen) {
			setViewMode(ViewMode.Editor);
		}
	}, [isSmallScreen]);

	const handlePluginReturn = (rawString: string | undefined) => {
		if (currentGetMdeInstance && rawString) {
			const pos = currentGetMdeInstance.codemirror.getCursor();
			currentGetMdeInstance.codemirror.setSelection(pos, pos);
			currentGetMdeInstance.codemirror.replaceSelection(rawString);
		}
	};

	const autofocusNoSpellcheckerOptions = useMemo(() => {
		return {
			autofocus: true,
			spellChecker: false,
			placeholder: '# Escreva aqui Seu artigo\n\nUsando **markdown**...',
			// maxHeight: '70vh',
			uploadImage: true,
			imageUploadFunction(file, onSuccess, onError) {
				uploadFile(file, myArticle.id)
					.then((url) => {
						onSuccess(url);
					})
					.catch((error) => {
						onError(error);
					});
			},

			horizontalRule: false,
			toolbar: [
				'heading',
				'bold',
				'italic',
				'strikethrough',
				'|',
				'quote',
				'code',
				'table',
				'horizontal-rule',
				'link',
				'|',
				'upload-image',
				{
					name: 'equationPlugin',
					action: function customFunction() {
						setCurrentPluginKey('equationPlugin');
					},
					className: 'fa fa-superscript',
					title: 'Adicionar equação',
				},
				{
					name: 'expandPlugins',
					action: function customFunction() {
						alert('Expand plugins');
					},
					className: 'fa fa-puzzle-piece',
					title: 'Expandir plugins',
				},
				'|',
				'undo',
				'redo',
				'guide',
				{
					name: 'saveCurrent',
					action: function customFunction() {
						if (saveButtonRef.current) {
							saveButtonRef.current.click();
						}
					},
					className: 'fa fa-save',
					title: 'Salvar mudanças',
				},
			],
			shortcuts: {
				saveCurrent: 'Cmd-S',
				equationPlugin: 'Ctrl-M',
			},
			previewImagesInEditor: false,
			status: false,
			promptURLs: true,
		} as SimpleMDE.Options;
	}, [myArticle, saveButtonRef]);

	return (
		<Box>
			<Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
				<Tabs
					value={viewMode}
					onChange={(
						event: React.SyntheticEvent,
						newValue: number
					) => {
						setViewMode(newValue as ViewMode);
						event.preventDefault();
					}}
					aria-label="basic tabs example"
				>
					<Tooltip title="Editar" arrow placement="bottom">
						<Tab icon={<EditNoteIcon />} />
					</Tooltip>
					<Tooltip title="Dividir" arrow placement="bottom">
						<Tab icon={<VerticalSplitIcon />} />
					</Tooltip>

					<Tooltip title="Visualizar" arrow placement="bottom">
						<Tab icon={<PreviewIcon />} />
					</Tooltip>
				</Tabs>
			</Box>

			<ScrollSync>
				<Grid
					container
					columns={viewMode === ViewMode.Split ? 16 : 8}
					spacing={{ sm: 0, md: 1 }}
				>
					<Grid
						xs={8}
						display={
							viewMode === ViewMode.Editor ||
							viewMode === ViewMode.Split
								? 'block'
								: 'none'
						}
					>
						<Paper
							variant="outlined"
							sx={{
								overflow: 'auto',
							}}
							className="mui-tab-previewer"
						>
							<ScrollSyncPane>
								<Box
									sx={{
										height: 'calc(75vh)',
										overflowY: 'auto',
									}}
								>
									<SimpleMdeReact
										options={autofocusNoSpellcheckerOptions}
										value={myArticleDocument}
										onChange={onChange}
										getMdeInstance={(instance) => {
											setCurrentGetMdeInstance(instance);
										}}
									/>
								</Box>
							</ScrollSyncPane>
						</Paper>
					</Grid>
					<Grid
						xs={8}
						display={
							viewMode === ViewMode.Preview ||
							viewMode === ViewMode.Split
								? 'block'
								: 'none'
						}
					>
						<Paper
							variant="outlined"
							sx={{
								overflow: 'auto',
							}}
							className="mui-tab-previewer"
						>
							<ScrollSyncPane>
								<Box
									sx={{
										p: {
											xs: 1,
											sm: 1.5,
											md: 1.5,
											lg: 2,
										},
										height: 'calc(75vh)',
										overflowY: 'auto',
									}}
								>
									<ArticleContent
										article={myArticleDocument}
									/>
								</Box>
							</ScrollSyncPane>
						</Paper>
					</Grid>
				</Grid>
			</ScrollSync>

			<PluginDialog
				currentPluginKey={currentPluginKey}
				setCurrentPluginKey={setCurrentPluginKey}
				returnFunction={handlePluginReturn}
			/>
		</Box>
	);
};

export default MdEditor;
