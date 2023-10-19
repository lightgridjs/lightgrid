import { darkTheme, lightTheme } from '@lightfin/datagrid'
import { DataGrid } from '@lightfin/react-datagrid'
import { DemoProps } from './types'
import { animalData, Animal, columns } from './data/animals'

import '@lightfin/datagrid/dist/styles.css'

export default function Demo({ theme }: DemoProps) {
  return (
    <DataGrid<Animal>
      columns={columns}
      data={animalData}
      getRowId={d => d.animal}
      theme={theme === 'light' ? lightTheme : darkTheme}
    />
  )
}
