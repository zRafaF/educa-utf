// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

'use client';

import { RecordOptions } from 'pocketbase';
import { FunctionComponent, useEffect, useState } from 'react';
import { getListOfArticlesStats } from '@/lib/apiHelpers/articlesAPI';
import DataTableContent from './DataTableContent/DataTableContent';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TablePagination from '@mui/material/TablePagination';
import { Data, FetchType, Order } from '@/types/data-table-type';
import DataTableHead from './DataTableHead';
import { getListOfChaptersStats } from '@/lib/apiHelpers/chaptersAPI';
import {
	ArticlesStatsResponse,
	ChaptersStatsResponse,
} from '@/types/pocketbase-types';
import { Box } from '@mui/material';

interface DataTableProps {
	fetchType: FetchType;
	userId?: string | undefined;
}

const DataTable: FunctionComponent<DataTableProps> = ({
	fetchType,
	userId,
}) => {
	const [order, setOrder] = useState<Order>('asc');
	const [orderBy, setOrderBy] = useState<keyof Data>('title');
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [queryOptions, setQueryOptions] = useState<
		RecordOptions | undefined
	>();
	const [rows, setRows] = useState<
		ArticlesStatsResponse[] | ChaptersStatsResponse[]
	>([]);
	const [totalItems, setTotalItems] = useState<number>(0);

	const emptyRows = Math.max(0, rowsPerPage - rows.length);

	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof Data
	) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);

		const newSort = `${isAsc ? '+' : '-'}${property}`;
		setQueryOptions((old) => ({
			...old,
			sort: newSort,
		}));
		setPage(0);
	};

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	useEffect(() => {
		const fetchNewData = async () => {
			const filteredQuery = {
				...queryOptions,
				...(userId && { filter: `user="${userId}"` }),
			};

			const data = await (fetchType === 'articles'
				? getListOfArticlesStats(page + 1, rowsPerPage, filteredQuery)
				: getListOfChaptersStats(page + 1, rowsPerPage, filteredQuery));

			setTotalItems(data.totalItems);
			setRows(data.items);
		};

		fetchNewData();
	}, [queryOptions, page, rowsPerPage, fetchType]);
	return (
		<Box>
			<TableContainer>
				<Table aria-labelledby="tableTitle" size={'small'}>
					<DataTableHead
						order={order}
						orderBy={orderBy}
						onRequestSort={handleRequestSort}
					/>
					<DataTableContent rows={rows} emptyRows={emptyRows} />
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={totalItems}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				labelRowsPerPage={'Itens p/ página'}
				labelDisplayedRows={({ from, to, count }) => {
					return `${from}–${to} de ${
						count !== -1 ? count : `mais de ${to}`
					}`;
				}}
				sx={{ p: 0 }}
			/>
		</Box>
	);
};

export default DataTable;