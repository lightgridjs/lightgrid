import { createEffect, createSignal, onCleanup } from 'solid-js'
import { darkTheme, lightTheme } from '@lightfin/datagrid'
import { DataGrid } from '@lightfin/solid-datagrid'

import { Button } from 'src/components/Button'
import { animalData, columns, Animal } from 'src/demo-data/animals'
import { DemoProps } from './types'

import '@lightfin/datagrid/dist/styles.css'

export default function Demo({ theme }: DemoProps) {
  const [data, setData] = createSignal<Animal[]>([])

  const fakeFetchData = () => {
    // Simulate fetching data with a delay
    const interval = setTimeout(() => {
      setData(animalData)
    }, 1200)
    onCleanup(() => clearInterval(interval))
  }

  createEffect(fakeFetchData)

  return (
    <>
      <Button
        style={{ 'margin-bottom': '0.5em' }}
        disabled={!data().length}
        onClick={() => {
          setData([])
          fakeFetchData()
        }}
      >
        Simulate data loading
      </Button>
      <DataGrid<Animal>
        columns={columns}
        data={data()}
        getRowId={d => d.animal}
        theme={theme === 'light' ? lightTheme : darkTheme}
        loadingOverlay={
          data.length === 0 && (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                background:
                  theme === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
              }}
            >
              Loading, please wait...
            </div>
          )
        }
      />
    </>
  )
}