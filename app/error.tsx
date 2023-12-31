// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div>
			<h2>Algo deu errado!</h2>
			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Tentar novamente
			</button>
		</div>
	);
}
