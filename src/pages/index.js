import MainGrid from '../components/MainGrid'
import Box from '../components/Box'
import { AlurakutMenu } from '../lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper} from '../components/ProfileRelations'

function ProfileSidebar() {
  const githubUser = 'rafael-acerqueira'
  return(
    <Box>
      <img src={`https://github.com/${githubUser}.png`} />
    </Box>
  )
}

export default function Home() {
  const favoritesPeople = [
    'rafael-acerqueira',
    'maugravena',
    'reginadiana',
    'oliveira-matheus'
  ]

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
          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>Pessoas da Comunidade ({favoritesPeople.length})</h2>
            <ul>
              {favoritesPeople.map(person => (
                  <li key={person}>
                  <a href={`/users/${person}`} key={person}>
                    <img src={`https://github.com/${person}.png`} />
                    <span>{person}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
