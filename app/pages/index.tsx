import * as React from 'react'
import { Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Image1 from '../public/jean-carbonnier.jpg'
import Image2 from '../public/image2.jpeg'
import Image3 from '../public/image3.jpeg'
import Theme from '../theme/Theme'

const myStyle = {
	padding: "2% 0",
	background: Theme.palette.primary.dark,
	nav: {
		display: "flex",
		flexDirection: "row",
		textAlign: "center",
	},
	main: {
	},
	aside:{

	},
	text:{
		maxHeight: "58vh",
		overflowY: "auto",
		"&::-webkit-scrollbar": {
			width: "2.5px",
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: Theme.palette.secondary.main,
			borderRadius: "10px"
		},
		"&::-webkit-scrollbar-track": {
			borderRadius: "10px"
		},
	},
	image:{
		borderRadius: "10%",
		width: "65vh",
		height: "70vh",
	}
}

export default function Home() {
	const [selected, setSelected] = React.useState(1)

  return (
	<>
		<Head>
			<title>Présentation</title>
		</Head>
		<Grid container justifyContent="center" alignItems="center" sx={myStyle} rowGap={4}>
			<List sx={myStyle.nav}>
				<ListItemButton selected={selected === 1} onClick={_=>setSelected(1)}>
					<ListItemText primary="text1" />
				</ListItemButton>
				<ListItemButton selected={selected === 2} onClick={_=>setSelected(2)}>
					<ListItemText primary="text2" />
				</ListItemButton>
				<ListItemButton selected={selected === 3} onClick={_=>setSelected(3)}>
					<ListItemText primary="text3" />
				</ListItemButton>
			</List>
			{selected === 1 &&
				<Grid container alignItems="center" justifyContent="space-evenly">
					<Grid item xs={6.8} sx={myStyle.main}>
						<Typography variant="h3">Titre 1</Typography>
						<Typography variant="h4">Sous-titre 1</Typography>
						<Typography variant="body2" sx={myStyle.text}>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of typeand scrambled it to make a type specimen book. 
							It has survived not only five centuries, 
							but also the leap into electronic typesetting, remaining essentially unchanged. 
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
							and more recently with desktop publishing software 
							like Aldus PageMaker including versions of Lorem Ipsum.
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
							Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
							a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
							consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
							discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
							of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
							comes from a line in section 1.10.32.

							The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
							Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their 
							exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
						</Typography>
						
					</Grid>
					<Grid item xs={4.6} sx={myStyle.aside}>
						<Image src={Image1} alt="Picture of the author"  style={myStyle.image} />
					</Grid>
				</Grid>
			}
			{selected === 2 &&
				<Grid container alignItems="center" justifyContent="space-evenly">
					<Grid item xs={6.8} sx={myStyle.main}>
						<Typography variant="h3">Titre 1</Typography>
						<Typography variant="h4">Sous-titre 1</Typography>
						<Typography variant="body2" sx={myStyle.text}>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of typeand scrambled it to make a type specimen book. 
							It has survived not only five centuries, 
							but also the leap into electronic typesetting, remaining essentially unchanged. 
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
							and more recently with desktop publishing software 
							like Aldus PageMaker including versions of Lorem Ipsum.
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
							Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
							a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
							consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
							discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
							of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
							comes from a line in section 1.10.32.

							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of typeand scrambled it to make a type specimen book. 
							It has survived not only five centuries, 
							but also the leap into electronic typesetting, remaining essentially unchanged. 
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
							and more recently with desktop publishing software 
							like Aldus PageMaker including versions of Lorem Ipsum.
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
							Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
							a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
							consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
							discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
							of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
							comes from a line in section 1.10.32.

							The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
							Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their 
							exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

							
						</Typography>
						
					</Grid>
					<Grid item xs={4.6} sx={myStyle.aside}>
						<Image src={Image2} alt="Picture of the author"  style={myStyle.image} />
					</Grid>
				</Grid>
			}
			{selected === 3 &&
				<Grid container alignItems="center" justifyContent="space-evenly">
					<Grid item xs={6.8} sx={myStyle.main}>
						<Typography variant="h3">Titre 1</Typography>
						<Typography variant="h4">Sous-titre 1</Typography>
						<Typography variant="body2" sx={myStyle.text}>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of typeand scrambled it to make a type specimen book. 
							It has survived not only five centuries, 
							but also the leap into electronic typesetting, remaining essentially unchanged. 
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
							and more recently with desktop publishing software 
							like Aldus PageMaker including versions of Lorem Ipsum.
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
							Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
							a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
							consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
							discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
							of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
							comes from a line in section 1.10.32.

							The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
							Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their 
							exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of typeand scrambled it to make a type specimen book. 
							It has survived not only five centuries, 
							but also the leap into electronic typesetting, remaining essentially unchanged. 
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
							and more recently with desktop publishing software 
							like Aldus PageMaker including versions of Lorem Ipsum.
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
							Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
							a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
							consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
							discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
							of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
							comes from a line in section 1.10.32.

							The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
							Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their 
							exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of typeand scrambled it to make a type specimen book. 
							It has survived not only five centuries, 
							but also the leap into electronic typesetting, remaining essentially unchanged. 
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
							and more recently with desktop publishing software 
							like Aldus PageMaker including versions of Lorem Ipsum.
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
							Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
							a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
							consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
							discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
							of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
							comes from a line in section 1.10.32.

							The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
							Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their 
							exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of typeand scrambled it to make a type specimen book. 
							It has survived not only five centuries, 
							but also the leap into electronic typesetting, remaining essentially unchanged. 
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
							and more recently with desktop publishing software 
							like Aldus PageMaker including versions of Lorem Ipsum.
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
							Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
							a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
							consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
							discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
							of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
							comes from a line in section 1.10.32.

							The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
							Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their 
							exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
						</Typography>
						
					</Grid>
					<Grid item xs={4.6} sx={myStyle.aside}>
						<Image src={Image3} alt="Picture of the author"  style={myStyle.image} />
					</Grid>
				</Grid>
			}
			
		</Grid>
	</>
  )
}
