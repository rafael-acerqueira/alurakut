import MainGrid from '../components/MainGrid'
import Box from '../components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper} from '../components/ProfileRelations'

function ProfileSidebar({ githubUser }) {
  return(
    <Box>
      <img src={`https://github.com/${githubUser}.png`} style={{borderRadius: '8px' }}/>
      <hr />

      <a className='boxLink' href={`https://github.com/${githubUser}`}>
        @{githubUser}
      </a>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const favoritesPeople = [
    'rafael-acerqueira',
    'maugravena',
    'reginadiana',
    'oliveira-matheus',
    'adubas',
    'netoalves91'
  ]

  return(
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className='profileArea'>
          <ProfileSidebar githubUser='rafael-acerqueira'/>
        </div>
        <div className='welcomeArea'>
          <Box>
          <h1 className='title'>Bem-vindo(a)</h1>

          <OrkutNostalgicIconSet />
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
