import MainGrid from '../components/MainGrid'
import Box from '../components/Box'
import { AlurakutMenu } from '../lib/AlurakutCommons'

function ProfileSidebar() {
  const githubUser = 'rafael-acerqueira'
  return(
    <Box>
      <img src={`https://github.com/${githubUser}.png`} />
    </Box>
  )
}

export default function Home() {
  return(
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className='profileArea'>
          <ProfileSidebar />
        </div>
        <div className='welcomeArea'>
          <Box >
            segundo
          </Box>
        </div>
        <div className='profileRelationsArea'>
          <Box >
            terceiro
          </Box>
          <Box >
            quarto
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
