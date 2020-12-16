import * as Styles from './styles'

export type HeaderCounterProps = {
  mainInfo: number
  topText: string
  bottomText: string
}

const HeaderCounter = ({
  mainInfo,
  topText,
  bottomText
}: HeaderCounterProps) => (
  <Styles.Wrapper>
    <Styles.TopText>{topText}</Styles.TopText>
    <Styles.MainInfo>{mainInfo}</Styles.MainInfo>
    <Styles.BottomText>{bottomText}</Styles.BottomText>
  </Styles.Wrapper>
)

export default HeaderCounter
