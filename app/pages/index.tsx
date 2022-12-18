import * as React from 'react'
import { Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Image1 from '../public/jean-carbonnier.jpg'
import Image2 from '../public/image2.jpeg'
import Image3 from '../public/image3.jpeg'
import Theme from '../theme/Theme'

const myStyle = {
	padding: "1%",
	background: Theme.palette.primary.dark,

	nav: {
		display: "flex",
		flexDirection: "row",
		textAlign: "center",
	},
	main: {
		maxWidth: "60%"
	},
	aside:{
		maxWidth: "30%"
	},
	text:{
		maxHeight: "50vh",
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
		width: "60vh",
		height: "60vh",
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
					<ListItemText primary="Biographie" />
				</ListItemButton>
				<ListItemButton selected={selected === 2} onClick={_=>setSelected(2)}>
					<ListItemText primary="Oeuvres" />
				</ListItemButton>
				<ListItemButton selected={selected === 3} onClick={_=>setSelected(3)}>
					<ListItemText primary="Contribution / Influence" />
				</ListItemButton>
				<ListItemButton selected={selected === 4} onClick={_=>setSelected(4)}>
					<ListItemText primary="Sources" />
				</ListItemButton>
			</List>
			{selected === 1 &&
				<Grid container>
					<Grid xs={7} alignItems="center" justifyContent="end" sx={myStyle.main}>
						<Typography variant="h3">Biographie</Typography>
						<Typography variant="h4">« Il y a plus d’une définition dans la maison du droit » 
						- Définir le droit, 
						Jean Carbonnier dans Droits, revue française de théories, de philosophie et de culture juridiques, 1990</Typography>
						<Typography variant="body2" sx={myStyle.text}>
						
						<p>Jean Carbonnier</p>
						<p>Né le 20 avril 1908 à Libourne (près de Bordeaux) et mort le 28 octobre 2003 à Paris
							Il a étudié le droit à la Faculté de Droit et des Sciences Politiques de Bordeaux
						
						</p> 
						<p>Reconnu pour avoir été auteur, juriste, professeur de droit privé, spécialiste en droit 
							civil, doyen de la faculté de droit de Poitiers.</p>

						<p>Doctorant en 1932, il est agrégé des facultés de droit en droit privé et sciences criminelles en 1937. 
							Jean Carbonnier est professeur à l'université de Poitiers de 1937 à 1956.</p>
						<p>
						Durant l’Occupation, son indépendance le conduit à faire l’éloge de la Déclaration des droits de l'homme dans 
						un commentaire de l’arrêt Ferrand du Conseil d’État ou à critiquer l’extradition pour crimes politiques dans 
						un commentaire d’arrêt de la Cour d'appel de Paris.
						Il occupe le poste de doyen de l'université de Poitiers, 
						depuis lors il est surnommé le « doyen Carbonnier » par le milieu juridique.
						Professeur à Panthéon-Assas jusqu'en 1976.
						De culture et de religion protestante, il prône la sociologie juridique comme approche 
						complémentaire et utile à la compréhension du droit positif : 
						citation : « À un moment, le sociologue doit prendre la place du juriste pour épuiser 
						la réalité juridique ».
						</p>


						</Typography>
						
					</Grid>
					<Grid item sx={myStyle.aside}>
						<Image src={Image1} alt="image1" style={myStyle.image}/>
					</Grid>
				</Grid>
			}
			{selected === 2 &&
				<Grid container>
					<Grid xs={7} alignItems="center" justifyContent="end" sx={myStyle.main}>
						<Typography variant="h3">Oeuvres</Typography>
						<Typography variant="h4">Productions</Typography>
						<Typography variant="body2" sx={myStyle.text}>
						
						<p>Carbonnier et le droit : Au niveau doctrinal, il a écrit de nombreux manuels de droit. 
						Au niveau législatif, il a écrit des projets à propos de l’autorité parentale, la filiation, 
						le droit du divorce ou du droit de successions. 
						Il fut donc un législateur ayant contribuer à renouveler profondément le Code civil 
						ainsi que l’inspirateur libéral du droit de la famille des années 70. </p>

						<p>Carbonnier et le droit de la famille : il a réformé des pans entier en droit civil, 
						plus précisément en droit de la famille. </p>

						<p>Carbonnier et la jurisprudence : 
						« la jurisprudence n’est pas une véritable source du droit civil comparable à la loi ou même à la coutume. 
						Mais, elle est une autorité considérable en droit civil. »</p>

						<p>Carbonnier et le droit romain :
 						« le droit romain mérite plusieurs étoiles ». Carbonnier fait partie de cette génération encore attaché à la culture latine. 
 						Il a lu quelques passages du Digeste </p>
						<p>D'autres oeuvres de Carbonnier</p>
						<p>•	Flexible droit, Pour une sociologie du droit sans rigueur, 10ième éd., LGDJ, 2010, 496 p. (Articulation raisonnée  d'articles publiés dispersée précédemment)
						•	Essais sur les Lois, 2ième éd., Répertoire du Notariat Defrénois, 1992, 336 p. (Articulation d'articles publiés disperse précédemment)
						•	Sociologie juridique, PUF, 1978
						•	Droit civil, vol. 1 : Introduction. Les personnes. La famille, l'enfant, le couple, Paris, PUF, coll. « Quadrige », 2004, 1496 p. 
						•	Droit civil, vol. 2 : Les biens. Les obligations, Paris, PUF, coll. « Quadrige », 2004, 1496 p.
						•	Droit et passion du droit sous la Vième République, 2ième éd, Flammarion, 273 p.</p>


						</Typography>
						
					</Grid>
					<Grid item sx={myStyle.aside}>
						<Image src={Image2} alt="image1" style={myStyle.image}/>
					</Grid>
				</Grid>
			}
			{selected === 3 &&
				<Grid container>
					<Grid xs={7} alignItems="center" justifyContent="end" sx={myStyle.main}>
						<Typography variant="h3">Influence de Carbonnier</Typography>
						<Typography variant="h4">Il est considéré comme l’un des plus grands juristes du XXème siècle en France, le doyen Carbonnier a une grande influence sur le droit français.</Typography>
						<Typography variant="body2" sx={myStyle.text}>
						<p>Jean Carbonnier était un humaniste, sa pensée en contrariété avec le dogmatisme juridique 
							et en accord avec la sociologie juridique a profondément bouleversé l’enseignement du droit en France. 
							Rupture dans l’enseignement du droit une méthodologie 
						</p>
						<p>Au XIXe siècle l’enseignement du droit était purement professionnel, 
							au cours des années 50 s’est développé un mouvement critique de cet enseignement, 
							dans cette période propice la pensée de Carbonnier s’est imposée. 
							Il s’interroge sur le sens du droit et exprime la nécessité de considérer la science 
							juridique dans un contexte plus large qui doit s’appuyer sur les sciences sociales et 
							humaines. Cette nouvelle approche du droit a donc conduit à la remise en cause de 
							l’enseignement de ce dernier dans les universités. 
							Sa pensée est en rupture avec la conception napoléonienne et la codification basée sur 
							la certitude pour introduire le questionnement juridique. Il souhaite en finir avec 
							les « Ecole de droit » qui ne laisse pas place à la remise en question pour au contraire 
							inviter les futurs juristes au débat à la controverse, ce n’est qu’en envisageant 
							le droit dans un contexte sociologique que l’on peut l’accorder aux besoins de la société selon lui. 
						</p>
						<p>Une conception nouvelle en rupture avec l’enseignement traditionnel du droit : 
							Dans un premier temps cette conception est en rupture avec les Ecoles de droit qui, 
							en accord avec la conception napoléonienne, formait les futurs juristes à travers le strict 
							enseignement des codes. Ce modèle d’enseignement basé uniquement sur le Code civil était caractérisé 
							par l’ignorance d’une démarche scientifique et le rejet de toute critiques dans les écoles. 
							Dans un deuxième temps au XIXe s, l’Ecole de l’exégèse s’impose. Cette conception du droit était 
							basée sur une méthode d’interprétation stricte du code civil, ce dernier était la loi par excellence 
							; tout était dans la loi et on devait pouvoir tout déduire de cette dernière. La méthode de l’exégèse 
							fait trois propositions ; lorsque la loi est claire il faut la suivre, lorsque la loi est obscure 
							il faut rechercher l’intention du législateur et en approfondir les dispositions, si l’on manque de 
							loi il faut consulter la coutume ou l’équité. Même si l’école de l’exégèse a favorisé une démarche 
							scientifique, elle est encore loin de l’ouverture vers l’analyse des phénomènes sociaux. 
							Le formalisme de cette École régnera durant le XIXe siècle et ce n’est qu’à la seconde montée 
							du XXe siècle qu’un climat plus favorable à la pensée carbonnienne émergera, en suscitant des analyses 
							prenant en compte la réalité sociale, politique et économique par le droit. 
							En contrariété avec l’écoles de l’exégèse, la pensée d’une sociologie juridique inclue la relativité 
							de la règle de de droit en parallèle aux faits sociaux divers. Cette approche conteste l’analyse 
							positivisme pour comprendre les faits sociaux.
							En effet l’analyse positiviste théorisée en XIXe siècle par Auguste Compte vise à traduire les faits 
							sociaux de manière rationnelle, selon cette approche tout est explicable par la science. 
							Par extension la conception de Jean Carbonnier s’oppose au positivisme légaliste qui ne considère 
							que la loi et la jurisprudence comme normes à respecter. 
							Ainsi il faudrait construire une nouvelle approche du droit qui ne peut plus seulement se restreindre 
							au normativisme. Ainsi dans les années 50 une majorité de juristes abandonneront l’idée d’une possible autonomie du droit vis-à-vis du social. 
						</p>
						<p>
							
							Jean Carbonnier introduit l’étude entre fait et droit. Surnommé le doyen Carbonnier, anciennement professeur à l'université de Poitiers puis à la faculté de droit de Paris il marqua des générations d’étudiants. Selon lui le droit exprime une simple partie de la complexité humaine, il ne doit donc pas toucher à ce qui le dépasse. Le droit se doit donc d’être modeste et d’intégrer les évolutions sociales. Le droit est, selon lui, plus petit que l’ensemble des relations entre les hommes, par cette pensée il s’oppose au panjurisme (=vision qui suppose du droit partout, dans chaque relation sociale ou inter-individuelle). Il s’agit ainsi d’analyser le droit positif tout en envisageant son ouverture à l’analyse de la régulations des rapports sociaux.
							Dès 1955 Jean Carbonnier dans son Manuel de droit civil exprime sa conception renouvelée du droit et dans Flexible droit il présente sa théorie de la sociologie juridique avec ce sous-titre évocateur ; « Pour une sociologie du droit sans rigueur ». Il met en évidence la nécessité de considérer une diversité juridique. Il se consacre donc à l’étude des phénomènes sociaux sans se limiter à celle du droit officielle y compris les phénomènes de déviation et de non-droit.
							Une telle approche du droit a profondément modifié le contenu et la méthode d’enseignement du droit dans les universités. 
							Une nouvelle méthode d’enseignement : 
							Dans la préface de son manuel, Jean Carbonnier dit : « j'ai une sympathie très profonde pour toutes les opinions qui divisent la doctrine et tous les sentiments qui font la France ». Il avait à coeur d’ouvrir l’esprits des étudiants aux problèmes sociaux, religieux et politiques. Il était ouvert au débat sans chercher à imposer ses idées de façon dogmatique (=qui rejette toute critique ou doute, vérité absolue). 
							Sa conception va dans le sens des réformes qui seront apportées au études de droits entre les années 50 et 60. L’enjeu d’interdisciplinarité sera au coeur de ces dernières, deux intérêts distincts sont attachés à ces réformes ; d’un côté on prône une conception étroite de l’enseignement et de l’autre une ouverture aux sciences sociales. Dans ce contexte Carbonnier se positionne pour la défense de l’ouverture des facultés de droit à la sociologie. 
							Il se prononce aussi sur l’intérêt de la méthode comparative dans les facultés ; cette dernière consiste à établir et comparer les normes en vigueur dans le domaine donné dans les systèmes juridiques différents. 
						</p>
						<p>Conclusion : </p>
						<p>Jean Carbonnier a largement contribué par sa pensée sur le socialisme juridique à modifier l’enseignement et l’approche du droit dans les facultés. Il influença en tant que professeur les futurs juristes par sa pensée humaniste en prônant un enseignement juridique ouvert à la discussion et en accord avec la recherche, en rupture avec les ancienne Écoles à caractère dogmatique. Il instaure notamment une nouvelle méthode, celle de sociologie législative 
							(=« fonction pratique de la sociologie juridique dans la partie qui concerne l’aide au législateur ») qui reconnait que « la vie n’est pas une, mais multiple » (Carbonnier, 1979). Elle permet de traduire une réalité sociale complexe en apportant une pluralité de méthodes pour légiférer. Cela se traduit notamment au travers d’un « pluralisme normatif » qui s’explique par une pluralité de normes qui harmonisent la vie sociale. Par cela le droit accepte la coexistence de divers modèles sociaux. 
							Une notion le non-droit 
							C’est un des concepts les plus célèbre dégagé par Carbonnier.
							Il s’agit de l’absence du droit dans un certains nombre de situations que le droit avait pourtant vocation théorique à régir (Lexique des termes juridiques).
							L’hypothèse est que si le droit est écarté ce n’est pas pour faire place au chaos, le terrain sera occupé par d’autres systèmes de régulation tel que la morale, la religion, les moeurs qui ne sont pas du droit.
							Cette approche s’oppose à une tendance de vouloir absolument éviter le « vide juridique » par les législateurs qui se traduit par une profusion de droit pour régler tout contentieux dans toutes matières. Cependant Carbonnier par cette notion s’oppose à « l’excès de droit » ; selon lui il faut s’en méfier puisqu’il risque de « tuer le droit » dont les moyens de production doivent être la loi, le temps, la coutume et la jurisprudence, pour cela il faut donc instaurer des « aires de repos » qui seraient soustraites au droit. « Lorsque j’entend dire qu’il y a quelque part un vide juridique et qu’il n’y a qu’à faire une loi pour combler ce vide je dis arrêtez, réfléchissez » dit Carbonnier dans le film Jean Carbonnier. Le droit au non droit pour lui il y a trop de droit et il suffit de chercher dans la multitude déjà existante. 
						</p>
						</Typography>
						
					</Grid>
					<Grid container xs={5} justifyContent="start" sx={myStyle.aside}>
						<Image src={Image3} alt="Picture of the author"style={myStyle.image} />
					</Grid>
				</Grid>
			}
			{selected === 4 &&
				<Grid container>
					<Grid xs={7} alignItems="center" justifyContent="end" sx={myStyle.main}>
						<Typography variant="h3">Sources</Typography>
						<Typography variant="h4">Travail de BARRY Salamata, BERTAUX Tifenn, BRUNO Brunia, BISUMBULE Nawa, BOUAZZA Kélia </Typography>
						<Typography variant="body2" sx={myStyle.text}>
						http://netcampus.free.fr/droit/civil/1-sourcesdtobj51.php3 
						https://wp.unil.ch/bases/2013/05/auguste-comte-et-le-positivisme/ https://www.universalis.fr/encyclopedie/jean-carbonnier/ 
						http://www.justice.gouv.fr/art_pix1_script_carbonnier_verdier_20120312.pdf 
						https://books.openedition.org/pupo/2632?lang=en#ftn4 
						La méthode comparative dans les sciences juridiques 
						https://czasopisma.inp.pan.pl 
						https://www.cairn.info/revue-l-annee-sociologique-2007-2-page-403.htm#no1 
						https://youtu.be/NLkFdsIL_Ew

						https://youtu.be/agaYlOsqRBQ
						https://youtu.be/57spXG1f2Lk 

						</Typography>
						
					</Grid>
					<Grid item sx={myStyle.aside}>
						<Image src={Image3} alt="image1" style={myStyle.image}/>
					</Grid>
				</Grid>
			}
			
		</Grid>
	</>
  )
}
