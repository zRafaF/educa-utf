// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

'use client';

import { getKeyWordListBySimilar } from '@/lib/apiHelpers/keyWordsAPI';
import { KeyWordsResponse } from '@/types/pocketbase-types';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { FunctionComponent, useMemo, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import InsertKeyWordButton from './InsertKeyWordButton';

interface KeyWordsPickerProps {
	defaultKeyWords?: KeyWordsResponse[];
	maxKeyWords?: number;
	disableCreation?: boolean;
}

const KeyWordsPicker: FunctionComponent<KeyWordsPickerProps> = ({
	defaultKeyWords = [],
	maxKeyWords = 5,
	disableCreation,
}) => {
	const [selectedKeyWords, setSelectedKeyWords] = useState<string[]>(
		defaultKeyWords.map((word) => word.word)
	);
	const [keyWords, setKeyWords] = useState<string[]>([]);
	const [fetchingKeyWords, setFetchingKeyWords] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string | undefined>(undefined);

	const invalidWord = useMemo(() => {
		// checks if the keywords is only lowercase letters, numbers and -

		if (inputValue === undefined || inputValue === '') return false;
		return !/^[a-z0-9-]+$/.test(inputValue);
	}, [inputValue]);

	const debounce = useDebouncedCallback(
		async (value: string | undefined) => {
			setFetchingKeyWords(true);
			if (value === undefined || value.length < 1) {
				setKeyWords([...selectedKeyWords]);
			} else {
				try {
					const response = await getKeyWordListBySimilar(value);

					setKeyWords([
						...selectedKeyWords,
						...response.map((word) => word.word),
					]);
				} catch (error) {
					console.error('Error fetching key words:', error);
				}
			}

			setFetchingKeyWords(false);
		},
		// delay in ms
		500
	);
	// TODO - Fix the console error on Autocomplete

	return (
		<>
			<Autocomplete
				multiple
				id="tags-outlined"
				options={keyWords}
				getOptionLabel={(option) => option}
				filterSelectedOptions
				defaultValue={[]}
				fullWidth
				autoHighlight
				includeInputInList
				autoComplete
				renderInput={(params) => (
					<TextField
						{...params}
						placeholder={
							selectedKeyWords.length < maxKeyWords
								? 'palavra-chave...'
								: undefined
						}
						name="keywords-picker"
						label={`Até ${maxKeyWords} Palavras-chave...`}
						error={invalidWord}
						helperText={
							'Palavras devem ser minúsculas, sem espaços ou acentos. ex.: calculo-numerico.'
						}
						InputProps={{
							...params.InputProps,
							endAdornment: (
								<>
									{fetchingKeyWords ? (
										<CircularProgress
											color="inherit"
											size={20}
										/>
									) : null}
									{params.InputProps.endAdornment}
								</>
							),
						}}
					/>
				)}
				onInputChange={(_, newInputValue) => {
					setInputValue(newInputValue);

					if (selectedKeyWords.length < maxKeyWords) {
						debounce(newInputValue);
						setFetchingKeyWords(true);
					}
				}}
				value={selectedKeyWords}
				onChange={(_, newValue) => {
					setSelectedKeyWords(newValue);
				}}
				groupBy={() => 'true'}
				renderGroup={(params) => (
					<li key={params.key}>
						<ul style={{ padding: 0 }}>{params.children}</ul>
						{!disableCreation && (
							<Box px={2} pb={1}>
								<Divider
									sx={{
										my: 1,
										color: 'GrayText',
									}}
								>
									Inserir palavra
								</Divider>

								<InsertKeyWordButton
									inputValue={inputValue}
									setSelectedKeyWords={setSelectedKeyWords}
									selectedKeyWords={selectedKeyWords}
									keyWords={keyWords}
									invalidWord={invalidWord}
								/>
							</Box>
						)}
					</li>
				)}
				noOptionsText={(() => {
					if (selectedKeyWords.length >= maxKeyWords) {
						return (
							<Box color={'error.main'}>
								Limite de palavras-chave atingido
							</Box>
						);
					}
					if (fetchingKeyWords) return 'Buscando palavras...';

					if (disableCreation)
						return 'Nenhuma palavra-chave encontrada';

					if (inputValue)
						return (
							<InsertKeyWordButton
								inputValue={inputValue}
								selectedKeyWords={selectedKeyWords}
								setSelectedKeyWords={setSelectedKeyWords}
								keyWords={keyWords}
								invalidWord={invalidWord}
							/>
						);

					return 'Insira uma palavra-chave';
				})()}
			/>
			<input
				name="keywords"
				value={selectedKeyWords.map((word) => word).join(',')}
				style={{
					display: 'none',
				}}
			/>
		</>
	);
};

export default KeyWordsPicker;
