import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

interface Props {
}

const AppContainer = styled.div`
    background-color: black;
    width: 100%;
`

const ScreenWrapper: React.FC<Props> = ({ children }) => {
    return <AppContainer>{children}</AppContainer>
}

export default ScreenWrapper
