import { DerivedColumn, ValueSource } from '@lightgrid/core'
import { N } from './types'

export interface DefaultCellComponentProps<T, N> {
  column: DerivedColumn<T, N>
  item: T
}

export function DefaultCellComponent<T>({
  item,
  column,
}: DefaultCellComponentProps<T, N>) {
  const value = column.getValue(item, ValueSource.Cell)
  return (
    <div
      className="lg-default-cell"
      title={typeof value === 'string' ? value : undefined}
    >
      {value}
    </div>
  )
}
