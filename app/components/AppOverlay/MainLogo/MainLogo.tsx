// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { FunctionComponent } from 'react';
import educaUtfLogoImage from '@/resources/logo-utf-sm.png';
import Box from '@mui/material/Box/Box';
import Image from 'next/image';

interface MainLogoProps {}

const MainLogo: FunctionComponent<MainLogoProps> = async () => {
	return (
		<Box
			sx={{
				height: 20,
				maxHeight: { xs: 20, sm: 20 },
				objectFit: 'contain',

				aspectRatio: '540/107',
			}}
		>
			<div style={{ position: 'relative', height: '100%' }}>
				<Image
					src={educaUtfLogoImage}
					sizes="100%"
					alt="Logo of EducaUTF"
					fill
					priority={true}
					quality={75}
				/>
			</div>
		</Box>
	);
};

export default MainLogo;
