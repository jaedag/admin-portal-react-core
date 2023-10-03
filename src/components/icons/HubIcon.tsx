import React from 'react'
import { IconBaseProps } from 'react-icons'
import { FaHubspot } from 'react-icons/fa'

const HubIcon = ({ ...rest }: IconBaseProps) => {
  return <FaHubspot color="white" {...rest} />
}

export default HubIcon
