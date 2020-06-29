import React from 'react'
import styled from 'styled-components'

const SkeletonElm = styled.span`
  ${props => props.theme.skeleton.base}
`

const Skeleton = () =>(
  <SkeletonElm className="Skeleton"></SkeletonElm>
)

export default Skeleton
