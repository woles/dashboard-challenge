import {
  Chip,
  createStyles,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Theme,
} from '@material-ui/core'
import { Replay } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'

type FilterProps = {
  keys: string[],
  name: string,
  onChange: (name: string, filterValues: string[]) => void,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: 2,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    clean: {
      cursor: 'pointer',
      fontSize: 14,
      marginLeft: 70,
    },
    formControl: {
      margin: theme.spacing(1),
      width: '80%',
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: 15,
    },
  }),
)
const ALL_DATA = 'All Data'
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

export const Filter: React.FC<FilterProps> = ({ keys, name, onChange }) => {

  const classes = useStyles()

  const [filterValues, setFilterValues] = useState<string[]>([ALL_DATA])

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilterValues((event.target.value as string[]).filter((value) => value !== ALL_DATA))
  }

  const handleDelete = (event: React.ChangeEvent<{ parentElement: HTMLElement }>) => {
    const values = filterValues.filter(
      (key) => key !== event.currentTarget.parentElement.childNodes[0].childNodes[0].textContent,
    )
    setFilterValues(values.length > 0 ? values : [ALL_DATA])
  }

  const handleClear = () => {
    setFilterValues([ALL_DATA])
  }

  useEffect(() => {
    onChange(name.toLowerCase() + 's', filterValues)
    // eslint-disable-next-line
  }, [filterValues])

  const mappedChips = (selected: string[]) => selected.map(
    (value) => (<Chip key={value} label={value} onDelete={value !== ALL_DATA ? handleDelete : undefined} />),
  )

  const selectValue = (selected: unknown) => (
    <div className={classes.chips}>
      {mappedChips(selected as string[])}
    </div>
  ) as React.ReactNode

  const menuItems = keys.map((key) => (
    <MenuItem key={key} value={key}>
      {key}
    </MenuItem>
  ))

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-chip">{name}</InputLabel>
        <Replay className={classes.clean} onClick={handleClear} />
        <Select
          multiple={true}
          value={filterValues}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selectValue}
          MenuProps={MenuProps}
        >
          {menuItems}
        </Select>
      </FormControl>
    </div>
  )
}
