import { useState, forwardRef} from 'react'
import classNames from 'classnames'
import wrkpmpScreenshot from './assets/wrkpmp.png'
import superfuelScreenshot from './assets/superfuel.png'
import mpplotScreenshot from './assets/mpplot.png'
import rayProfile from './assets/ray.jpg'
import profilePic from './assets/hl_sq.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import { Avatar, Box, Card, ChevronDownIcon, Flex, Grid, Heading, Link, Section, Text } from '@radix-ui/themes'
import { Accordion } from 'radix-ui'


const AccordionTrigger = forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Header className="AccordionHeader">
			<Accordion.Trigger
				className={classNames("AccordionTrigger", className)}
				{...props}
				ref={forwardedRef}
			>
				{children}
				<ChevronDownIcon className="AccordionChevron" aria-hidden />
			</Accordion.Trigger>
		</Accordion.Header>
	),
);

const AccordionContent = forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Content
			className={classNames("AccordionContent", className)}
			{...props}
			ref={forwardedRef}
		>
			<div className="AccordionContentText">{children}</div>
		</Accordion.Content>
	),
);

const AccordionDemo = ({values}) => (
	<Accordion.Root
		className="AccordionRoot"
		type="single"
		defaultValue="item-1"
		collapsible
	>
		{values.map(value => <Accordion.Item className="AccordionItem" value={value.name}>
			<AccordionTrigger>{value.name}</AccordionTrigger>
			<AccordionContent>
				{value.description}
			</AccordionContent>
		</Accordion.Item>
    )}
	</Accordion.Root>
);


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

  const values = [
  {
    name:'Continual learning', 
    description: 'I learn best by doing. Usually I begin in a controlled, isolated environment, slowly adding variables and uncertainty until the environment becomes vast and complex.  At any point I\'m absorbing feedback and further honing my skills.'
  }, {
  name:'Intellectual curiosity', 
    description: 'I think through problems & systems thoroughly before adopting them.  I desire to have a deep understanding of subject matter and sharpen my skills.  Asking \'Why?\'and answering that question is much more satisfying than blindly accepting.'
  }, {
    name:'Honesty', 
    description: 'On top of being transparent and trustworthy to others, I am honest with myself & my abilities.  I have a great understanding of what I\'m capable of, which enables me to challenge myself perfectly to the line separating underutilized and overmatched skills.  Additionally this self-awareness allows me to analyze my performance, identify my weaknesses and strengthen them.'
  }, {
    name:'Mastery', 
    description: 'Skills and knowledge can take many different forms.   I apply methodical processes to hone and sharpen them.  I appreciate purity in the pursuit of learning and seldom cut corners for foresighted, immediate gratification.'
  }, {
    name:'Meaningful communication', 
    description: 'In the fast-paced information age we are part of, focused interaction with others has become increasingly rare.  I believe it\'s critical share, exchange challenge and build upon thoughts, feelings and ideas.  This is something that is more effective with others, which can ultimately improve the progress we make individually.'
  },
  // {
  //   name:'Emotional resilience', 
  //   description: ' While emotional acuity is still important, harnessing and controlling feelings  .   and should be incorporated as factors in our decision making, we must be able to think clearly and have a clean mental state to perform and achieve results. '
  // },
  ]


  return (


      <Box className="app-container">
        <header className="header">
          <Heading as="h1" size="7">
            Ray Murphy – Software Engineer
          </Heading>
        </header>

        <main className="main">
          <Text size="4" className="description">
            Both software and adventure have solidified themselves to be the backbone of my life. They work in unison to enrich experiences, provide discipline to improve upon weaknesses and 
allow me to quest, following a vision of the future.
          </Text>
          <Text size="4" className="description">
I've worked as a full stack software engineer for nearly a decade in the finance and insurance industries.  I'm now inspired to build products from the ground up, laying the foundation for technologies that simplify and improve others work and personal lives. I'm open to teaming up with other smart and genuine people who share similar goals and values.  
          </Text>


          <Flex gap='3'>
            <Flex gap='1' direction='column' align='center'>
          <img src={rayProfile} alt='rays profile pic' width='300px' height='300px'></img>
          <Text size="1" >Enjoying Utah's canyons</Text>
            </Flex>
            <Flex gap='1' direction='column' align='center'>
          <img src={profilePic} alt='rays profile pic' width='300px' height='300px'></img>
          <Text size="1" >Highlining over Chapel Pond</Text>
            </Flex>


          </Flex>
          		<Section size="1" />
    <Heading as='h5'>Values:</Heading>
<AccordionDemo values={values}></AccordionDemo>
          		<Section size="1" />

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

</main>
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
