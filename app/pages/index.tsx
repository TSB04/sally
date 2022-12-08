import * as React from 'react'
import { Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Image1 from '../public/jean-carbonnier.jpg'
import Image2 from '../public/image2.jpeg'
import Image3 from '../public/image3.jpeg'
import Theme from '../theme/Theme'

const myStyle = {
	padding: "1% 0",
	nav: {
		display: "flex",
		flexDirection: "row",
		textAlign: "center",
		padding: 0
	},
	main: {
		padding: "0 0 0 3%",
	},
	aside:{
	},
	text:{
		maxHeight: "50vh",
		overflowY: "auto",
		"&::-webkit-scrollbar": {
			width: "8px",
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
		width: "80vh",
		height: "80vh",
	}
}

export default function Home() {
	const [selected, setSelected] = React.useState(1)

  return (
	<>
		<Head>
			<title>titre</title>
		</Head>
		<Grid container justifyContent="center" alignItems="center" sx={myStyle} rowGap={6}>
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
				<Grid container>
					<Grid xs={7} alignItems="center" justifyContent="end" sx={myStyle.main}>
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
					<Grid container xs={5} justifyContent="start" sx={myStyle.aside}>
						<Image src={Image1} alt="Picture of the author"  style={myStyle.image} />
					</Grid>
				</Grid>
			}
			{selected === 2 &&
				<Grid container>
					<Grid xs={7} alignItems="center" justifyContent="end" sx={myStyle.main}>
						<Typography variant="h3">Titre 2</Typography>
						<Typography variant="h4">Sous-titre 2</Typography>
						<Typography variant="body2" sx={myStyle.text}>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
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
							discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory 
							of ethics, very popular during the Renaissance. The first line of Lorem Ipsum 
							comes from a line in section 1.10.32.

							There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
							by injected humour, or randomised words which don`&apos;`t look even slightly believable. 
							If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`&apos;`t anything embarrassing 
							hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined 
							chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 
							200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks 
							reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, 
							or non-characteristic words etc.
							
							The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
							Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their 
							exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
						</Typography>
						
					</Grid>
					<Grid container xs={5} justifyContent="start" sx={myStyle.aside}>
						<Image src={Image2} alt="Picture of the author" style={myStyle.image} />
					</Grid>
				</Grid>
			}
			{selected === 3 &&
				<Grid container>
					<Grid xs={7} alignItems="center" justifyContent="end" sx={myStyle.main}>
						<Typography variant="h3">Titre 3</Typography>
						<Typography variant="h4">Sous-titre 3</Typography>
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

							The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
							Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their 
							exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
						</Typography>
						
					</Grid>
					<Grid container xs={5} justifyContent="start" sx={myStyle.aside}>
						<Image src={Image3} alt="Picture of the author"style={myStyle.image} />
					</Grid>
				</Grid>
			}
		</Grid>
	</>
  )
}
