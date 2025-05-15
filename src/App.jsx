import { useState } from 'react'
import wrkpmpScreenshot from './assets/wrkpmp.png'
import superfuelScreenshot from './assets/superfuel.png'
import mpplotScreenshot from './assets/mpplot.png'
import profilePic from './assets/hl_sq.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import { Avatar, Box, Card, Flex, Grid, Heading, Link, Text } from '@radix-ui/themes'

function App() {
  const projects = [
    {link: 'https://wrkpmp.com',
      title: 'WRKPMP',
      description: 'Greenhouse job listing aggregator',
      imgSrc: wrkpmpScreenshot
    }, {
     link:  'https://superfuel.me',
     title: 'Superfuel',
    description: 'Meditation timer and tracker',
          imgSrc: superfuelScreenshot

    }, {
    link:  'https://mpplot.com',
    title: 'MP Plot',
    description: 'Rock climbing data visualization for mountainproject.com',
          imgSrc:  mpplotScreenshot

    }
  ]


  return (


      <Box className="app-container">
        <header className="header">
          <Heading as="h1" size="7">
            Ray – Software Engineer
          </Heading>
        </header>

        <main className="main">
          <Text size="4" className="description">
            Hi, I'm Ray! 
          </Text>

          <img src={profilePic} alt='rays profile pic' width='300px' height='300px'></img>
        </main>
    <Heading as='h5'>Check out the apps I built:</Heading>
    <Grid columns="1" gap="3" width="auto">
     {projects.map(c=>
      <Box maxWidth='750px' key={c.title} onClick={()=>window.location.href=c.link} style={{cursor: 'pointer'}}>
	<Card size='5'>
		<Flex gap="3" align="center">


			<Box>
				<Text as="div" size="2" weight="bold">
					{c.title}
				</Text>
				<Text as="div" size="2" color="gray">
					{c.description}
				</Text>
			</Box>
      <Box width="500px" height="300px" >
  <img src={c.imgSrc}  alt={c.title + ' screenshot'} width='500px' ></img>
  </Box>
		</Flex>
	</Card>
</Box>

)}
     </Grid>

        <footer className="footer">
          <Text>
            Take a look at some other stuff I've programmed on{" "}
            <Link href="https://github.com/raymur" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Text>
        </footer>
      </Box>
  )
}

export default App
