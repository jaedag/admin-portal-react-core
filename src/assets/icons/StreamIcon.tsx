import React from 'react'
import { IconBaseProps } from 'react-icons'
import { GiTreeBranch } from 'react-icons/gi'

const StreamIcon = ({ ...rest }: IconBaseProps) => {
  return <GiTreeBranch color="white" {...rest} />
}

export default StreamIcon
