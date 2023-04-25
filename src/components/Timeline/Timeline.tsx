import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Flex, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { FaCircleNotch, FaInfoCircle } from 'react-icons/fa'
import { parseDate, parseNeoTime } from '@/utils'
import { Member } from '@/types'

export type TimelineElement = {
  historyRecord: string
  loggedBy: Member
  timeStamp: string
  createdAt: {
    date: string
  }
}

export type TimelineProps = {
  limit: number
  modifier?: 'church'
  record: TimelineElement[]
  clickCard: (cardToClick: unknown) => void
}

const Timeline = (props: TimelineProps) => {
  const { record, limit, modifier, clickCard } = props

  const navigate = useNavigate()

  if (!record) {
    return null
  }

  if (record && modifier === 'church') {
    return (
      <List spacing={1}>
        {record.map(
          (element: TimelineElement, index: number) =>
            index < limit && (
              <ListItem key={index} data-testid="timeline-element">
                <Flex>
                  <Box>
                    <ListIcon as={FaInfoCircle} color="green.500" />
                  </Box>
                  <Text as="span" fontSize="sm">
                    {element.historyRecord}
                    <Text color="gray" fontSize="xs">
                      {`${parseDate(element.createdAt?.date)} at ${parseNeoTime(
                        element.timeStamp
                      )}`}
                      {element?.loggedBy && ' by'}
                      <Text
                        as="span"
                        className="font-weight-bold"
                        onClick={() => {
                          clickCard(element?.loggedBy)
                          navigate('/member/displaydetails')
                        }}
                      >
                        {element?.loggedBy &&
                          ` ${element?.loggedBy?.firstName} ${element?.loggedBy?.lastName}`}
                      </Text>
                    </Text>
                  </Text>
                </Flex>
              </ListItem>
            )
        )}
      </List>
    )
  }

  return (
    <List spacing={2}>
      {record.map(
        (element, index) =>
          index < limit && (
            <ListItem key={index} data-testid="timeline-element">
              <Flex>
                <Box>
                  <ListIcon as={FaCircleNotch} color="green.500" />
                </Box>
                <Text as="span" fontSize="sm">
                  {element.historyRecord}
                  <Text color="gray" fontSize="xs" marginBottom={1}>
                    {`${parseDate(element.createdAt?.date)} at ${parseNeoTime(
                      element.timeStamp
                    )}`}
                    {element?.loggedBy && ' by'}
                    <Text
                      as="span"
                      className="font-weight-bold"
                      onClick={() => {
                        clickCard(element?.loggedBy)
                        navigate('/member/displaydetails')
                      }}
                    >
                      {element?.loggedBy &&
                        ` ${element?.loggedBy?.firstName} ${element?.loggedBy?.lastName}`}
                    </Text>
                  </Text>
                </Text>
              </Flex>
            </ListItem>
          )
      )}
    </List>
  )
}

export default Timeline
