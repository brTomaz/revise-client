import * as S from './styles'

const Main = ({
  title = 'Revise',
  description = 'Consolide o seu conhecimento'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Revise" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
