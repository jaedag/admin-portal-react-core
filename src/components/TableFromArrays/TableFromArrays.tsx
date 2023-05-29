import {
  Skeleton,
  Table,
  TableCellProps,
  TableContainer,
  TableProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import React from 'react'

export type TableFromArraysProps = {
  heading?: string[][]
  caption?: string
  tableArray: (string | number)[][]
  loading: boolean
  tdStyle?: {
    col: number
    style: TableCellProps
  }
} & TableProps

const TableFromArrays = ({
  tableArray,
  heading,
  loading,
  tdStyle,
  ...rest
}: TableFromArraysProps) => {
  return (
    <TableContainer>
      <Table {...rest}>
        <Thead>
          {heading?.map((row, rowNum) => (
            <Tr key={rowNum}>
              {row.map((col, colNum) => (
                <Th key={colNum}>{col}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {tableArray?.map((row, rowNum) => (
            <Tr key={rowNum}>
              {row.map((col, colNum) => {
                let style = {}

                if (colNum === tdStyle?.col) {
                  style = { ...tdStyle?.style }
                }

                return (
                  <Td {...style}>
                    <Skeleton key={colNum} isLoaded={!loading}>
                      {col}
                    </Skeleton>
                  </Td>
                )
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TableFromArrays
